import axios from "axios";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    // Parse the JSON body
    const body = await req.json();

    // Extract teamId and status from the request body
    const { teamId, status } = body;

    // Construct the base URL
    const base_url = `${process.env.BASE_URL}/admin/update-payment-status/${teamId}`;

    // Extract the token from the request headers
    const token = req.headers.get("token");

    // Make the PUT request using axios
    const response = await axios.put(
      base_url,
      { status }, // Request body
      {
        headers: {
          token: token, // Pass the token in the headers
        },
      }
    );

    // Extract the response data
    const result = response.data;

    // Return the response as JSON
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in route.js:", error.message);

    // Handle errors and return a meaningful response
    return NextResponse.json(
      {
        message:
          error.response?.data?.message ||
          "An error occurred while updating the payment status.",
        error: error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}