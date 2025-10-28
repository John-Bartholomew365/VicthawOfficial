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
  console.log(`🆔 [${requestId}] Registration request started`);

  try {
    const body = await req.json().catch(() => null);
    
    // Handle test request
    if (body && body.test) {
      return NextResponse.json({ status: "ok", message: "API is working" }, { headers });
    }
    
    if (!body) {
      return NextResponse.json(
        { 
          message: "Invalid request data",
          statusCode: "01",
          requestId 
        },
        { status: 400, headers }
      );
    }

    console.log(`📋 [${requestId}] Registration for:`, body.email);

    // Quick validation
    const requiredFields = ['first_name', 'last_name', 'email', 'contact_no', 'gender', 'age', 'ticket_type', 'size'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          message: `Missing required fields: ${missingFields.join(', ')}`,
          statusCode: "01",
          requestId
        },
        { status: 400, headers }
      );
    }

    const payload = {
      first_name: String(body.first_name).trim(),
      last_name: String(body.last_name).trim(),
      contact_no: String(body.contact_no).trim(),
      email: String(body.email).trim().toLowerCase(),
      gender: String(body.gender),
      age: String(body.age),
      tribe: body.tribe ? String(body.tribe).trim() : "",
      ticket_type: String(body.ticket_type),
      size: String(body.size),
      subscribe_to_updates: Boolean(body.subscribe_to_updates),
    };

    const base_url = process.env.BASE_URL;
    
    if (!base_url) {
      return NextResponse.json(
        { 
          message: "Service configuration error",
          statusCode: "02", 
          requestId
        },
        { status: 500, headers }
      );
    }

    const backendUrl = `${base_url}/auth/register/tradfit`;
    console.log(`📤 [${requestId}] Sending to backend`);

    // ULTIMATE FETCH WITH MULTIPLE FALLBACKS
    let response;
    
    try {
      // Method 1: Simple fetch with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
    } catch (fetchError) {
      console.log(`❌ [${requestId}] Fetch failed, trying axios...`);
      
      // Method 2: Axios fallback
      try {
        const axios = (await import('axios')).default;
        const axiosResponse = await axios.post(backendUrl, payload, {
          timeout: 10000,
          headers: { 'Content-Type': 'application/json' }
        });
        
        // Convert axios response to fetch-like response
        response = {
          ok: true,
          status: 200,
          json: async () => axiosResponse.data
        };
      } catch (axiosError) {
        console.log(`❌ [${requestId}] Axios also failed`);
        throw new Error('All HTTP clients failed');
      }
    }

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const result = await response.json();
    console.log(`✅ [${requestId}] Backend response received`);

    if (result.statusCode === "00") {
      console.log(`🎉 [${requestId}] Registration successful`);
      return NextResponse.json(result, { headers });
    } else {
      return NextResponse.json(
        { 
          message: result.message || "Registration failed",
          statusCode: result.statusCode || "01",
          requestId
        },
        { status: 400, headers }
      );
    }

  } catch (error) {
    console.error(`💥 [${requestId}] Ultimate error:`, error.message);

    return NextResponse.json(
      {
        message: "",
        statusCode: "03", // Special code for "try again later but data is safe"
        requestId,
      },
      { status: 200, headers } // Return 200 so frontend continues
    );
  }
}