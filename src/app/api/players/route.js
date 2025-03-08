import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the form data from the request
    const formData = await req.formData();
// Extract the token from the request headers
    const token = req.headers.get("token");
    console.log(formData);
    console.log(token);
    

    

    if (!token) {
      return NextResponse.json(
        { message: "Authorization token is required" },
        { status: 401 }
      );
    }

    // Construct the base URL for the API endpoint
    const base_url = `${process.env.BASE_URL}/team/add-team-member`;

    // Send a POST request to the backend API
    const response = await axios.post(base_url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        token: token, // Include the token in the headers
      },
    });

    // Extract the response data
    const result = response.data;


    // Return the response as JSON
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in POST route:", error);

    // Handle errors and return a meaningful response
    return NextResponse.json(
      {
        message:
          error.response?.data?.message ||
          "An error occurred while processing your request.",
        error: error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}


export async function GET(req) {
  
  try {
    const base_url = `${process.env.BASE_URL}/team/team-members`;
    const token = await req.headers.get("token");

    const response = await axios.get(base_url, {
      headers: {
        token: token,
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
