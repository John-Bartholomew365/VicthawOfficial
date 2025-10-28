import { NextResponse } from "next/server";

export async function POST(req) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  if (req.method === "OPTIONS") {
    return NextResponse.json({}, { headers });
  }

  const requestId = Math.random().toString(36).substring(2, 15);
  console.log(`🆔 [${requestId}] Login request started`);

  try {
    const body = await req.json().catch(() => null);
    
    if (!body) {
      console.error(`❌ [${requestId}] No JSON body received`);
      return NextResponse.json(
        { 
          message: "Invalid request data",
          statusCode: "01",
          requestId 
        },
        { status: 400, headers }
      );
    }

    console.log(`📋 [${requestId}] Login attempt for:`, body.email);

    // Validate required fields
    if (!body.email || !body.password) {
      const missingFields = [];
      if (!body.email) missingFields.push('email');
      if (!body.password) missingFields.push('password');
      
      console.error(`❌ [${requestId}] Missing fields:`, missingFields);
      
      return NextResponse.json(
        { 
          message: `${missingFields.join(' and ')} ${missingFields.length > 1 ? 'are' : 'is'} required`,
          statusCode: "01",
          requestId
        },
        { status: 400, headers }
      );
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(body.email)) {
      console.error(`❌ [${requestId}] Invalid email format:`, body.email);
      
      return NextResponse.json(
        { 
          message: "Invalid email format",
          statusCode: "01",
          requestId
        },
        { status: 400, headers }
      );
    }

    const payload = {
      email: body.email.trim().toLowerCase(),
      password: body.password
    };

    const base_url = process.env.BASE_URL;
    
    if (!base_url) {
      console.error(`❌ [${requestId}] BASE_URL not configured`);
      return NextResponse.json(
        { 
          message: "Service configuration error",
          statusCode: "02",
          requestId
        },
        { status: 500, headers }
      );
    }

    const backendUrl = `${base_url}/auth/login`;
    console.log(`📤 [${requestId}] Sending to backend`);

    // Simple fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    console.log(`📨 [${requestId}] Backend status:`, response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ [${requestId}] Backend error:`, errorText);
      
      let statusCode = 500;
      let errorMessage = "Login service unavailable";

      if (response.status === 401) {
        statusCode = 401;
        errorMessage = "Invalid credentials";
      } else if (response.status === 404) {
        statusCode = 404;
        errorMessage = "User not found";
      }

      return NextResponse.json(
        { 
          message: errorMessage,
          statusCode: "01",
          requestId
        },
        { status: statusCode, headers }
      );
    }

    const result = await response.json();
    console.log(`✅ [${requestId}] Backend response received`);

    if (result.statusCode === "00") {
      console.log(`🎉 [${requestId}] Login successful for:`, payload.email);
      return NextResponse.json(result, { headers });
    } else {
      console.error(`❌ [${requestId}] Backend business error:`, result.message);
      return NextResponse.json(
        { 
          message: result.message || "Login failed",
          statusCode: result.statusCode || "01",
          requestId
        },
        { status: 401, headers }
      );
    }

  } catch (error) {
    console.error(`💥 [${requestId}] Critical error:`, error.message);

    let errorMessage = "Service temporarily unavailable";
    let statusCode = 500;

    if (error.name === 'AbortError') {
      errorMessage = "Request timeout. Please try again.";
      statusCode = 408;
    } else if (error.message.includes('fetch') || error.message.includes('network')) {
      errorMessage = "Network error. Please check your connection.";
      statusCode = 503;
    }

    return NextResponse.json(
      {
        message: errorMessage,
        statusCode: "02",
        requestId,
      },
      { status: statusCode, headers }
    );
  }
}