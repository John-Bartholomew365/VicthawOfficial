import axios from "axios";
import { NextResponse } from "next/server";

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

  try {
    // Parse the JSON body
    const body = await req.json();
    console.log("Login request body:", body);

    // Validate required fields
    if (!body.email || !body.password) {
      return NextResponse.json(
        { 
          message: "Email and password are required",
          statusCode: "01"
        },
        { status: 400, headers }
      );
    }

    const payload = {
      email: body.email.trim().toLowerCase(),
      password: body.password
    };

    const base_url = `${process.env.BASE_URL}/auth/login`;
    console.log("Sending request to:", base_url);
    console.log("Login payload:", payload);

    const response = await axios.post(base_url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
      // timeout: 15000, // 15 second timeout
    });

    const result = response.data;
    console.log("Backend login response:", result);

    if (result.statusCode === "00") {
      return NextResponse.json(result, { headers });
    } else {
      return NextResponse.json(
        { 
          message: result.message || "Login failed",
          statusCode: result.statusCode || "01"
        },
        { status: 401, headers }
      );
    }
  } catch (error) {
    console.error("Error in login route:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      code: error.code
    });

    let statusCode = 500;
    let errorMessage = "Internal Server Error";
    let errorCode = "01";

    if (error.response?.status === 401) {
      statusCode = 401;
      errorMessage = "Invalid credentials";
      errorCode = "01";
    } else if (error.response?.status === 404) {
      statusCode = 404;
      errorMessage = "User not found";
      errorCode = "01";
    } else if (error.code === 'ECONNREFUSED') {
      statusCode = 503;
      errorMessage = "Service temporarily unavailable";
      errorCode = "02";
    } else if (error.code === 'ETIMEDOUT' || error.message.includes('timeout')) {
      statusCode = 408;
      errorMessage = "Request timeout";
      errorCode = "03";
    } else if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
      errorCode = error.response.data.statusCode || "01";
    }

    return NextResponse.json(
      {
        message: errorMessage,
        statusCode: errorCode,
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: statusCode, headers }
    );
  }
}