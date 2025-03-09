import axios from "axios";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    // Parse the JSON body
    const body = await req.json();

    // Extract teamId and status from the request body
    const { teamId, status } = body;

    if (!teamId || !status) {
      return NextResponse.json(
        { message: "teamId and status are required." },
        { status: 400 }
      );
    }
    
    // Construct the base URL
    const base_url = `${process.env.BASE_URL}/admin/update-payment-status/${teamId}`;

    // Extract the token from the request headers
    const token = req.headers.get("token");

    if (!token) {
      return NextResponse.json(
        { message: "Authorization token is missing." },
        { status: 401 }
      );
    }

    console.log("Token:", token);
    console.log("teamId:", teamId);

    // Make the PUT request using axios
    const response = await axios.put(
      base_url,
      { status }, // Corrected request body structure
      {
        headers: {
          token: token, // Use this format if required
          "Content-Type": "application/json",
        },
      }
    );

    // Extract the response data
    const result = response.data;

    // Return the response as JSON
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in route.js:", error.response?.data || error.message);

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
