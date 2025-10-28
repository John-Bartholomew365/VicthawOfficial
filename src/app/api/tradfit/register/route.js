import axios from "axios";
import { NextResponse } from "next/server";

// Enhanced logging function for server-side
const logServerError = (context, error, extraData = {}) => {
  const errorLog = {
    timestamp: new Date().toISOString(),
    context,
    error: {
      message: error.message,
      name: error.name,
      stack: error.stack,
      code: error.code,
    },
    extraData,
    environment: process.env.NODE_ENV,
  };

  console.error("🚨 SERVER REGISTRATION ERROR:", errorLog);
  
  // In production, you might want to send this to a logging service
  if (process.env.NODE_ENV === 'production') {
    // sendToErrorTrackingService(errorLog);
  }
};

export async function POST(req) {
  // Set CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  // Handle OPTIONS request for CORS
  if (req.method === "OPTIONS") {
    return NextResponse.json({}, { headers });
  }

  let requestBody;
  let requestId = Math.random().toString(36).substring(2, 15);

  try {
    console.log(`📥 [${requestId}] Incoming registration request`);
    
    // Parse the JSON body
    requestBody = await req.json();
    console.log(`📋 [${requestId}] Request body received:`, {
      ...requestBody,
      email: requestBody.email, // Keep email for debugging
      contact_no: requestBody.contact_no, // Keep phone for debugging
    });

    // Validate required fields
    const requiredFields = [
      'first_name', 
      'last_name', 
      'contact_no', 
      'email', 
      'gender', 
      'age', 
      'ticket_type', 
      'size'
    ];
    
    const missingFields = requiredFields.filter(field => {
      const value = requestBody[field];
      return value === undefined || value === null || value === '';
    });
    
    if (missingFields.length > 0) {
      const errorMessage = `Missing required fields: ${missingFields.join(', ')}`;
      console.error(`❌ [${requestId}] Validation failed:`, errorMessage);
      
      return NextResponse.json(
        { 
          message: errorMessage,
          missingFields,
          requestId 
        },
        { status: 400, headers }
      );
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(requestBody.email)) {
      const errorMessage = "Invalid email format";
      console.error(`❌ [${requestId}] Email validation failed:`, requestBody.email);
      
      return NextResponse.json(
        { message: errorMessage, requestId },
        { status: 400, headers }
      );
    }

    // Validate phone number (basic validation)
    if (requestBody.contact_no.length < 10) {
      const errorMessage = "Phone number appears to be invalid";
      console.error(`❌ [${requestId}] Phone validation failed:`, requestBody.contact_no);
      
      return NextResponse.json(
        { message: errorMessage, requestId },
        { status: 400, headers }
      );
    }

    // Build payload for backend
    const payload = {
      first_name: requestBody.first_name.trim(),
      last_name: requestBody.last_name.trim(),
      contact_no: requestBody.contact_no.trim(),
      email: requestBody.email.trim().toLowerCase(),
      gender: requestBody.gender,
      age: requestBody.age,
      tribe: requestBody.tribe?.trim() || "",
      ticket_type: requestBody.ticket_type,
      size: requestBody.size,
      subscribe_to_updates: Boolean(requestBody.subscribe_to_updates),
    };

    const base_url = `${process.env.BASE_URL}/auth/register/tradfit`;
    
    console.log(`📤 [${requestId}] Sending request to backend:`, base_url);
    console.log(`📦 [${requestId}] Payload:`, {
      ...payload,
      // Don't log sensitive data in production
      email: payload.email,
      contact_no: `${payload.contact_no.substring(0, 3)}...${payload.contact_no.substring(payload.contact_no.length - 2)}`
    });

    // Validate environment variable
    if (!process.env.BASE_URL) {
      throw new Error("BASE_URL environment variable is not set");
    }

    // Make request to backend with enhanced configuration
    const response = await axios.post(base_url, payload, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Tradfit-Registration/1.0",
        "X-Request-ID": requestId,
      },
      timeout: 45000, // 45 seconds timeout
      maxRedirects: 5,
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });

    console.log(`✅ [${requestId}] Backend response received:`, {
      status: response.status,
      statusText: response.statusText,
      data: response.data
    });

    const result = response.data;

    if (result.statusCode === "00") {
      console.log(`🎉 [${requestId}] Registration successful for:`, payload.email);
      return NextResponse.json(result, { headers });
    } else {
      const errorMessage = result.message || "Backend service returned an error";
      console.error(`❌ [${requestId}] Backend error:`, {
        statusCode: result.statusCode,
        message: result.message,
        fullResponse: result
      });
      
      return NextResponse.json(
        { 
          message: errorMessage,
          details: result,
          requestId
        },
        { status: 400, headers }
      );
    }
  } catch (error) {
    // Enhanced error handling with detailed logging
    let statusCode = 500;
    let errorMessage = "Internal Server Error";
    let errorContext = "unknown_server_error";

    if (axios.isAxiosError(error)) {
      errorContext = "axios_error";
      
      if (error.code === 'ECONNREFUSED') {
        statusCode = 503;
        errorMessage = "Registration service is temporarily unavailable. Please try again later.";
        console.error(`🔌 [${requestId}] Connection refused:`, error.message);
      } else if (error.code === 'ENOTFOUND') {
        statusCode = 503;
        errorMessage = "Cannot reach registration service. Please try again later.";
        console.error(`🌐 [${requestId}] DNS lookup failed:`, error.message);
      } else if (error.code === 'ETIMEDOUT' || error.message.includes('timeout')) {
        statusCode = 408;
        errorMessage = "Registration service timeout. Please try again.";
        console.error(`⏰ [${requestId}] Request timeout:`, error.message);
      } else if (error.response) {
        // Server responded with error status
        statusCode = error.response.status;
        errorContext = `backend_http_${statusCode}`;
        
        switch (statusCode) {
          case 400:
            errorMessage = error.response.data?.message || "Invalid data sent to registration service.";
            break;
          case 401:
            errorMessage = "Authentication failed with registration service.";
            break;
          case 403:
            errorMessage = "Access denied by registration service.";
            break;
          case 404:
            errorMessage = "Registration endpoint not found.";
            break;
          case 409:
            errorMessage = "This email is already registered.";
            break;
          case 413:
            errorMessage = "Request too large for registration service.";
            break;
          case 429:
            errorMessage = "Too many registration attempts. Please wait a moment.";
            break;
          case 500:
            errorMessage = "Registration service experienced an error. Our team has been notified.";
            break;
          case 502:
            errorMessage = "Bad gateway. Registration service is temporarily unavailable.";
            break;
          case 503:
            errorMessage = "Registration service is temporarily unavailable. Please try again later.";
            break;
          default:
            errorMessage = error.response.data?.message || `Registration service error (${statusCode}).`;
        }
        
        console.error(`🔴 [${requestId}] Backend HTTP error ${statusCode}:`, {
          message: error.response.data?.message,
          data: error.response.data
        });
      } else if (error.request) {
        // Request made but no response received
        errorContext = "network_no_response";
        errorMessage = "No response from registration service. Please check your connection and try again.";
        console.error(`📡 [${requestId}] No response received:`, error.message);
      }
    } else if (error instanceof SyntaxError) {
      errorContext = "invalid_json";
      statusCode = 400;
      errorMessage = "Invalid JSON in request body.";
      console.error(`📄 [${requestId}] JSON parse error:`, error.message);
    } else if (error instanceof Error) {
      errorContext = "server_error";
      errorMessage = "Server error while processing registration.";
      console.error(`⚡ [${requestId}] Server error:`, error.message);
    }

    // Log the complete error details
    logServerError(errorContext, error, {
      requestId,
      requestBody: requestBody ? {
        email: requestBody.email,
        hasData: true,
        fields: Object.keys(requestBody)
      } : { hasData: false },
      statusCode,
      axiosError: axios.isAxiosError(error),
      responseStatus: error.response?.status,
      responseData: error.response?.data
    });

    return NextResponse.json(
      {
        message: errorMessage,
        requestId,
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        context: process.env.NODE_ENV === 'development' ? errorContext : undefined,
      },
      { status: statusCode, headers }
    );
  }
}