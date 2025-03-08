import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const base_url = `${process.env.BASE_URL}/admin/get-all-teams`;
    const token = await req.headers.get("token");

    const response = await axios.get(base_url, {
      headers: {
        token: token,
      },
    });

    const result = response.data;
    console.log("Backend response:", result);
    console.log(response);

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
