import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the JSON body
    const body = await req.json();
    console.log(body)

    const payload = {
      team_name: body.teamName,
      manager_name: body.managerName,
      team_contact_no: body.teamContact,
      email: body.email,
      password: body.password,
    }

    const base_url = `${process.env.BASE_URL}/auth/register`;
    console.log("Sending request to:", base_url);

    const response = await axios.post(base_url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = response.data;
    console.log("Backend response:", result);

    if (result.statusCode === "00") {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { message: result.message || "Error processing request" },
        { status: 400 }
      );
    }
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