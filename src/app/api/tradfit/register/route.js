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
    console.log("Incoming body:", body);

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
    
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          message: `Missing required fields: ${missingFields.join(', ')}` 
        },
        { status: 400, headers }
      );
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400, headers }
      );
    }

    // Build payload for backend
    const payload = {
      first_name: body.first_name.trim(),
      last_name: body.last_name.trim(),
      contact_no: body.contact_no.trim(),
      email: body.email.trim().toLowerCase(),
      gender: body.gender,
      age: body.age,
      tribe: body.tribe?.trim() || "",
      ticket_type: body.ticket_type,
      size: body.size,
      subscribe_to_updates: Boolean(body.subscribe_to_updates), // Ensure boolean
    };

    const base_url = `${process.env.BASE_URL}/auth/register/tradfit`;
    console.log("Sending request to:", base_url);
    console.log("Payload being sent to backend:", payload);

    // Add timeout to the request
    const response = await axios.post(base_url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
      // timeout: 30000, // 30 seconds timeout
    });

    const result = response.data;
    console.log("Backend response:", result);

    if (result.statusCode === "00") {
      return NextResponse.json(result, { headers });
    } else {
      return NextResponse.json(
        { 
          message: result.message || "Error processing request",
          details: result
        },
        { status: 400, headers }
      );
    }
  } catch (error) {
    console.error("Error in register route:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      code: error.code
    });

    let statusCode = 500;
    let errorMessage = "Internal Server Error";
    
    if (error.code === 'ECONNREFUSED') {
      statusCode = 503;
      errorMessage = "Service temporarily unavailable. Please try again later.";
    } else if (error.response?.status) {
      statusCode = error.response.status;
      errorMessage = error.response.data?.message || "Backend service error";
    } else if (error.code === 'ETIMEDOUT' || error.message.includes('timeout')) {
      statusCode = 408;
      errorMessage = "Request timeout. Please try again.";
    }

    return NextResponse.json(
      {
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: statusCode, headers }
    );
  }
}