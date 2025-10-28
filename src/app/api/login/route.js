import axios from "axios";
import { NextResponse } from "next/server";

// Enhanced logging function for server-side
const logLoginError = (context, error, extraData = {}) => {
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

  console.error("🚨 LOGIN ROUTE ERROR:", errorLog);
  
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
    console.log(`📥 [${requestId}] Incoming login request`);
    
    // Parse the JSON body
    requestBody = await req.json();
    console.log(`📋 [${requestId}] Login request received for email:`, requestBody.email ? requestBody.email : 'No email provided');

    // Validate required fields
    if (!requestBody.email || !requestBody.password) {
      const missingFields = [];
      if (!requestBody.email) missingFields.push('email');
      if (!requestBody.password) missingFields.push('password');
      
      console.error(`❌ [${requestId}] Missing required fields:`, missingFields);
      
      return NextResponse.json(
        { 
          message: `${missingFields.join(' and ')} ${missingFields.length > 1 ? 'are' : 'is'} required`,
          statusCode: "01",
          missingFields,
          requestId
        },
        { status: 400, headers }
      );
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(requestBody.email)) {
      console.error(`❌ [${requestId}] Invalid email format:`, requestBody.email);
      
      return NextResponse.json(
        { 
          message: "Invalid email format",
          statusCode: "01",
          requestId
        },
        { status: 400, headers }
      );
    }

    // Validate password length
    if (requestBody.password.length < 1) {
      console.error(`❌ [${requestId}] Password validation failed`);
      
      return NextResponse.json(
        { 
          message: "Password is required",
          statusCode: "01",
          requestId
        },
        { status: 400, headers }
      );
    }

    const payload = {
      email: requestBody.email.trim().toLowerCase(),
      password: requestBody.password
    };

    const base_url = `${process.env.BASE_URL}/auth/login`;
    
    console.log(`📤 [${requestId}] Sending login request to:`, base_url);
    console.log(`📦 [${requestId}] Login payload for:`, payload.email);

    // Validate environment variable
    if (!process.env.BASE_URL) {
      throw new Error("BASE_URL environment variable is not set");
    }

    // Make request to backend with enhanced configuration
    const response = await axios.post(base_url, payload, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Tradfit-Login/1.0",
        "X-Request-ID": requestId,
      },
      timeout: 30000, // 30 seconds timeout
      maxRedirects: 5,
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });

    console.log(`✅ [${requestId}] Backend login response received:`, {
      status: response.status,
      statusText: response.statusText,
      hasData: !!response.data,
      statusCode: response.data?.statusCode
    });

    const result = response.data;

    if (result.statusCode === "00") {
      console.log(`🎉 [${requestId}] Login successful for:`, payload.email);
      return NextResponse.json(result, { headers });
    } else {
      const errorMessage = result.message || "Login failed";
      console.error(`❌ [${requestId}] Backend login error:`, {
        statusCode: result.statusCode,
        message: result.message,
        email: payload.email
      });
      
      // Determine appropriate status code based on error
      let statusCode = 401;
      if (result.message?.toLowerCase().includes('not found') || result.message?.toLowerCase().includes('user not found')) {
        statusCode = 404;
      } else if (result.message?.toLowerCase().includes('locked') || result.message?.toLowerCase().includes('suspended')) {
        statusCode = 423;
      }
      
      return NextResponse.json(
        { 
          message: errorMessage,
          statusCode: result.statusCode || "01",
          requestId
        },
        { status: statusCode, headers }
      );
    }
  } catch (error) {
    // Enhanced error handling with detailed logging
    let statusCode = 500;
    let errorMessage = "Internal Server Error";
    let errorCode = "01";
    let errorContext = "unknown_login_error";

    if (axios.isAxiosError(error)) {
      errorContext = "axios_login_error";
      
      if (error.code === 'ECONNREFUSED') {
        statusCode = 503;
        errorMessage = "Authentication service is temporarily unavailable. Please try again later.";
        errorCode = "02";
        console.error(`🔌 [${requestId}] Connection refused:`, error.message);
      } else if (error.code === 'ENOTFOUND') {
        statusCode = 503;
        errorMessage = "Cannot reach authentication service. Please try again later.";
        errorCode = "02";
        console.error(`🌐 [${requestId}] DNS lookup failed:`, error.message);
      } else if (error.code === 'ETIMEDOUT' || error.message.includes('timeout')) {
        statusCode = 408;
        errorMessage = "Authentication service timeout. Please try again.";
        errorCode = "03";
        console.error(`⏰ [${requestId}] Request timeout:`, error.message);
      } else if (error.response) {
        // Server responded with error status
        statusCode = error.response.status;
        errorContext = `backend_login_http_${statusCode}`;
        
        switch (statusCode) {
          case 400:
            errorMessage = error.response.data?.message || "Invalid login data.";
            errorCode = "01";
            break;
          case 401:
            errorMessage = "Invalid email or password.";
            errorCode = "01";
            break;
          case 403:
            errorMessage = "Access denied. Your account may be restricted.";
            errorCode = "04";
            break;
          case 404:
            errorMessage = "Account not found. Please check your email.";
            errorCode = "01";
            break;
          case 409:
            errorMessage = "Account conflict. Please contact support.";
            errorCode = "05";
            break;
          case 413:
            errorMessage = "Request too large.";
            errorCode = "06";
            break;
          case 429:
            errorMessage = "Too many login attempts. Please wait a moment.";
            errorCode = "07";
            break;
          case 500:
            errorMessage = "Authentication service experienced an error. Our team has been notified.";
            errorCode = "02";
            break;
          case 502:
            errorMessage = "Bad gateway. Authentication service is temporarily unavailable.";
            errorCode = "02";
            break;
          case 503:
            errorMessage = "Authentication service is temporarily unavailable. Please try again later.";
            errorCode = "02";
            break;
          default:
            errorMessage = error.response.data?.message || `Authentication service error (${statusCode}).`;
            errorCode = error.response.data?.statusCode || "02";
        }
        
        console.error(`🔴 [${requestId}] Backend HTTP error ${statusCode}:`, {
          message: error.response.data?.message,
          statusCode: error.response.data?.statusCode,
          email: requestBody?.email
        });
      } else if (error.request) {
        // Request made but no response received
        errorContext = "login_network_no_response";
        errorMessage = "No response from authentication service. Please check your connection and try again.";
        errorCode = "02";
        console.error(`📡 [${requestId}] No response received:`, error.message);
      }
    } else if (error instanceof SyntaxError) {
      errorContext = "login_invalid_json";
      statusCode = 400;
      errorMessage = "Invalid JSON in request body.";
      errorCode = "01";
      console.error(`📄 [${requestId}] JSON parse error:`, error.message);
    } else if (error instanceof Error) {
      errorContext = "login_server_error";
      errorMessage = "Server error while processing login.";
      errorCode = "02";
      console.error(`⚡ [${requestId}] Server error:`, error.message);
    }

    // Log the complete error details
    logLoginError(errorContext, error, {
      requestId,
      email: requestBody?.email,
      hasRequestBody: !!requestBody,
      statusCode,
      axiosError: axios.isAxiosError(error),
      responseStatus: error.response?.status,
      responseData: error.response?.data
    });

    return NextResponse.json(
      {
        message: errorMessage,
        statusCode: errorCode,
        requestId,
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        context: process.env.NODE_ENV === 'development' ? errorContext : undefined,
      },
      { status: statusCode, headers }
    );
  }
}