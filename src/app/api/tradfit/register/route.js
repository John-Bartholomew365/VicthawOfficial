import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📩 Incoming request body:", body);

    const baseUrl = `${process.env.BASE_URL}/auth/register/tradfit`;

    const response = await axios.post(baseUrl, body, {
      headers: { "Content-Type": "application/json" },
      timeout: 15000, // prevent hanging requests (15s)
      validateStatus: () => true, // allow handling all status codes manually
    });

    const result = response.data;
    console.log("✅ API Response:", result);

    if (result.statusCode === "00") {
      return NextResponse.json(result);
    } else {
      // API responded but returned an error
      return NextResponse.json(
        {
          message: result.message || "Registration failed",
          details: result,
        },
        { status: response.status || 400 }
      );
    }
  } catch (error) {
    // ✅ Improved Axios error diagnostics
    console.error("❌ Error in /api/tradfit/register:", error.toJSON?.() || error);

    let errorMessage = "Internal Server Error";
    let statusCode = 500;
    let errorDetails = {};

    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with a non-2xx status
        errorMessage = error.response.data?.message || "API returned an error";
        statusCode = error.response.status;
        errorDetails = {
          status: error.response.status,
          headers: error.response.headers,
          data: error.response.data,
        };
      } else if (error.request) {
        // No response received
        errorMessage = "No response received from the API server";
        errorDetails = { request: error.request };
      } else {
        // Something happened in setting up the request
        errorMessage = `Axios setup error: ${error.message}`;
      }
    } else {
      errorMessage = error.message || errorMessage;
    }

    return NextResponse.json(
      {
        message: errorMessage,
        error: errorDetails,
      },
      { status: statusCode }
    );
  }
}
