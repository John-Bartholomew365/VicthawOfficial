import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the form data from the request
    const data = await req.formData();
    
    // Extract tradfitId and receipt file from the form data
    const tradfitId = data.get("tradfitId");
    const receipt = data.get("receipt");

    // Validate required fields
    if (!tradfitId || !receipt) {
      console.log("Validation failed: Missing tradfitId or receipt");
      return NextResponse.json(
        { message: "tradfitId and receipt file are required." },
        { status: 400 }
      );
    }

    console.log("Received tradfitId:", tradfitId);
    console.log("Received receipt file:", {
      name: receipt.name,
      type: receipt.type,
      size: receipt.size,
    });

    // Construct the backend URL
    const base_url = `${process.env.BASE_URL}/payment/upload-tradfit-proof`;
    console.log("Backend URL:", base_url);

    // Create a new FormData instance for the backend request
    const formData = new FormData();
    formData.append("tradfitId", tradfitId);
    formData.append("receipt", receipt); // Pass the File object directly

    // Make the POST request using axios
    const response = await axios.post(base_url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Extract the response data
    const result = response.data;
    console.log("Backend response:", result);

    // Return the response as JSON
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in /api/tradfit/upload-receipt:", {
      message: error.message,
      stack: error.stack,
      response: error.response?.data,
      status: error.response?.status,
    });

    // Handle errors and return a meaningful response
    return NextResponse.json(
      {
        message:
          error.response?.data?.message ||
          "An error occurred while uploading the receipt.",
        error: error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}