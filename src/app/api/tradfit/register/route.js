import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the JSON body
    const body = await req.json();
    console.log("Incoming body:", body);

    // Build payload for backend
    const payload = {
      first_name: body.first_name,
      last_name: body.last_name,
      contact_no: body.contact_no,
      email: body.email,
      gender: body.gender, // "male" | "female"
      age: body.age, // "18-24", "25-34", "35-44", "45-55", "55&above"
      tribe: body.tribe,
      ticket_type: body.ticket_type, // "regular" | "vip"
      size: body.size, // "S" | "M" | "L" | "XL" | "XXL"
    };

    const base_url = `${process.env.BASE_URL}/auth/register/tradfit`;
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
    console.error("Error in register route:", error.message);

    return NextResponse.json(
      {
        message: error.response?.data?.message || "Internal Server Error",
        error: error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}
