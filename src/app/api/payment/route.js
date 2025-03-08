import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the JSON body
    const body = await req.formData();

    const base_url = `${process.env.BASE_URL}/payment/upload-proof`;
  

    const response = await axios.post(base_url, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const result = response.data;

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in route.js:", error.message);
    return NextResponse.json(
      {
        message: error.response?.data?.message || "Internal Server Error",
        error: error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}
