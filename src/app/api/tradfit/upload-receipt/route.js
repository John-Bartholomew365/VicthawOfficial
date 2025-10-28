import axios from "axios";
import { NextResponse } from "next/server";

// Enhanced logging function for server-side
const logUploadError = (context, error, extraData = {}) => {
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

  console.error("🚨 RECEIPT UPLOAD ROUTE ERROR:", errorLog);
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

  let requestId = Math.random().toString(36).substring(2, 15);
  let tradfitId = null;
  let fileInfo = null;

  try {
    console.log(`📥 [${requestId}] Incoming receipt upload request`);

    // Parse the form data from the request
    const data = await req.formData();
    
    // Extract tradfitId and receipt file from the form data
    tradfitId = data.get("tradfitId");
    const receipt = data.get("receipt");

    console.log(`📋 [${requestId}] Form data extracted:`, {
      tradfitId: tradfitId,
      hasReceipt: !!receipt,
      receiptName: receipt?.name,
      receiptType: receipt?.type,
      receiptSize: receipt?.size,
    });

    // Validate required fields
    if (!tradfitId || !receipt) {
      const missingFields = [];
      if (!tradfitId) missingFields.push('tradfitId');
      if (!receipt) missingFields.push('receipt');
      
      console.error(`❌ [${requestId}] Validation failed: Missing ${missingFields.join(' and ')}`);
      
      return NextResponse.json(
        { 
          message: `${missingFields.join(' and ')} ${missingFields.length > 1 ? 'are' : 'is'} required.`,
          statusCode: "01",
          requestId
        },
        { status: 400, headers }
      );
    }

    // Validate tradfitId format
    if (typeof tradfitId !== 'string' || tradfitId.trim().length === 0) {
      console.error(`❌ [${requestId}] Invalid tradfitId format:`, tradfitId);
      
      return NextResponse.json(
        { 
          message: "Invalid registration ID format.",
          statusCode: "01",
          requestId
        },
        { status: 400, headers }
      );
    }

    // Validate file is actually a file
    if (typeof receipt === 'string' || !(receipt instanceof Blob)) {
      console.error(`❌ [${requestId}] Invalid file type:`, typeof receipt);
      
      return NextResponse.json(
        { 
          message: "Invalid file provided.",
          statusCode: "01",
          requestId
        },
        { status: 400, headers }
      );
    }

    // Validate file size (5MB limit)
    if (receipt.size > 5 * 1024 * 1024) {
      console.error(`❌ [${requestId}] File too large:`, receipt.size);
      
      return NextResponse.json(
        { 
          message: "File size must be less than 5MB.",
          statusCode: "01",
          requestId
        },
        { status: 413, headers }
      );
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(receipt.type)) {
      console.error(`❌ [${requestId}] Invalid file type:`, receipt.type);
      
      return NextResponse.json(
        { 
          message: "Only JPEG, PNG, JPG, and WebP images are allowed.",
          statusCode: "01",
          requestId
        },
        { status: 415, headers }
      );
    }

    fileInfo = {
      name: receipt.name,
      type: receipt.type,
      size: receipt.size,
    };

    // Construct the backend URL
    const base_url = `${process.env.BASE_URL}/payment/upload-tradfit-proof`;
    console.log(`📤 [${requestId}] Sending to backend:`, base_url);

    // Validate environment variable
    if (!process.env.BASE_URL) {
      throw new Error("BASE_URL environment variable is not set");
    }

    // Create a new FormData instance for the backend request
    const formData = new FormData();
    formData.append("tradfitId", tradfitId.trim());
    formData.append("receipt", receipt);

    console.log(`📦 [${requestId}] Backend payload prepared:`, {
      tradfitId: tradfitId.trim(),
      fileName: receipt.name,
      fileSize: (receipt.size / 1024 / 1024).toFixed(2) + " MB",
      fileType: receipt.type,
    });

    // Make the POST request using axios with enhanced configuration
    const response = await axios.post(base_url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "User-Agent": "Tradfit-Receipt-Upload/1.0",
        "X-Request-ID": requestId,
      },
      timeout: 60000, // 60 seconds for file upload
      maxContentLength: 10 * 1024 * 1024, // 10MB max content length
      maxBodyLength: 10 * 1024 * 1024, // 10MB max body length
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });

    console.log(`✅ [${requestId}] Backend response received:`, {
      status: response.status,
      statusText: response.statusText,
      statusCode: response.data?.statusCode,
      message: response.data?.message,
    });

    const result = response.data;

    if (result.statusCode === "00") {
      console.log(`🎉 [${requestId}] Receipt upload successful for tradfitId:`, tradfitId);
      return NextResponse.json(result, { headers });
    } else {
      console.error(`❌ [${requestId}] Backend upload error:`, {
        statusCode: result.statusCode,
        message: result.message,
        tradfitId: tradfitId
      });
      
      return NextResponse.json(
        { 
          message: result.message || "Failed to upload receipt to backend.",
          statusCode: result.statusCode || "01",
          requestId
        },
        { status: 400, headers }
      );
    }
  } catch (error) {
    // Enhanced error handling with detailed logging
    let statusCode = 500;
    let errorMessage = "Internal Server Error";
    let errorCode = "01";
    let errorContext = "unknown_upload_error";

    if (axios.isAxiosError(error)) {
      errorContext = "axios_upload_error";
      
      if (error.code === 'ECONNREFUSED') {
        statusCode = 503;
        errorMessage = "Upload service is temporarily unavailable. Please try again later.";
        errorCode = "02";
        console.error(`🔌 [${requestId}] Connection refused:`, error.message);
      } else if (error.code === 'ENOTFOUND') {
        statusCode = 503;
        errorMessage = "Cannot reach upload service. Please try again later.";
        errorCode = "02";
        console.error(`🌐 [${requestId}] DNS lookup failed:`, error.message);
      } else if (error.code === 'ETIMEDOUT' || error.message.includes('timeout')) {
        statusCode = 408;
        errorMessage = "Upload service timeout. Please try again.";
        errorCode = "03";
        console.error(`⏰ [${requestId}] Request timeout:`, error.message);
      } else if (error.code === 'ERR_BAD_RESPONSE') {
        statusCode = 502;
        errorMessage = "Invalid response from upload service. Please try again.";
        errorCode = "02";
        console.error(`🔄 [${requestId}] Bad response:`, error.message);
      } else if (error.response) {
        // Server responded with error status
        statusCode = error.response.status;
        errorContext = `backend_upload_http_${statusCode}`;
        
        switch (statusCode) {
          case 400:
            errorMessage = error.response.data?.message || "Invalid upload data.";
            errorCode = "01";
            break;
          case 413:
            errorMessage = "File too large. Please select a file smaller than 5MB.";
            errorCode = "01";
            break;
          case 415:
            errorMessage = "Unsupported file type. Please use JPEG, PNG, or JPG.";
            errorCode = "01";
            break;
          case 404:
            errorMessage = "Registration not found. Please complete registration again.";
            errorCode = "01";
            break;
          case 429:
            errorMessage = "Too many upload attempts. Please wait a moment.";
            errorCode = "04";
            break;
          case 500:
            errorMessage = "Upload service experienced an error. Our team has been notified.";
            errorCode = "02";
            break;
          case 502:
            errorMessage = "Bad gateway. Upload service is temporarily unavailable.";
            errorCode = "02";
            break;
          case 503:
            errorMessage = "Upload service is temporarily unavailable. Please try again later.";
            errorCode = "02";
            break;
          default:
            errorMessage = error.response.data?.message || `Upload service error (${statusCode}).`;
            errorCode = error.response.data?.statusCode || "02";
        }
        
        console.error(`🔴 [${requestId}] Backend HTTP error ${statusCode}:`, {
          message: error.response.data?.message,
          statusCode: error.response.data?.statusCode,
          tradfitId: tradfitId
        });
      } else if (error.request) {
        // Request made but no response received
        errorContext = "upload_network_no_response";
        errorMessage = "No response from upload service. Please check your connection and try again.";
        errorCode = "02";
        console.error(`📡 [${requestId}] No response received:`, error.message);
      }
    } else if (error instanceof Error) {
      if (error.message.includes('FormData') || error.message.includes('form data')) {
        errorContext = "invalid_form_data";
        statusCode = 400;
        errorMessage = "Invalid form data. Please try again.";
        errorCode = "01";
      } else {
        errorContext = "upload_server_error";
        errorMessage = "Server error while processing upload.";
        errorCode = "02";
      }
      console.error(`⚡ [${requestId}] Server error:`, error.message);
    }

    // Log the complete error details
    logUploadError(errorContext, error, {
      requestId,
      tradfitId,
      fileInfo,
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