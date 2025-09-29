// import axios from "axios";
// import { NextResponse } from "next/server";

// export async function PATCH(req) {
//   try {
//     // Parse the JSON body
//     const body = await req.json();

//     // Extract Id and required fields from the request body
//     const { Id, status, payment_status, admin_message } = body;

//     if (!Id || !status || !payment_status || !admin_message) {
//       return NextResponse.json(
//         { message: "Id, status, payment_status, and admin_message are required." },
//         { status: 400 }
//       );
//     }

//     // Construct the base URL
//     const base_url = `${process.env.BASE_URL}/admin/update-tradit-status/${Id}`;

//     // Extract the token from the request headers
//     const token = req.headers.get("token");

//     if (!token) {
//       return NextResponse.json(
//         { message: "Authorization token is missing." },
//         { status: 401 }
//       );
//     }

//     console.log("Token:", token);
//     console.log("Id:", Id);

//     // Make the PATCH request using axios
//     const response = await axios.patch(
//       base_url,
//       {
//         status,
//         payment_status,
//         admin_message,
//       },
//       {
//         headers: {
//           token: token, // or "Authorization": `Bearer ${token}` if backend expects it
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     // Extract the response data
//     const result = response.data;

//     // Return the response as JSON
//     return NextResponse.json(result);
//   } catch (error) {
//     console.error("Error in route.js:", error.response?.data || error.message);

//     // Handle errors and return a meaningful response
//     return NextResponse.json(
//       {
//         message:
//           error.response?.data?.message ||
//           "An error occurred while updating the tradit status.",
//         error: error.message,
//       },
//       { status: error.response?.status || 500 }
//     );
//   }
// }






import axios from "axios";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    // Parse the JSON body
    const body = await req.json();

    // Extract Id and required fields from the request body
    const { Id, status, payment_status, admin_message } = body;

    if (!Id || !status || !payment_status || !admin_message) {
      return NextResponse.json(
        { message: "Id, status, payment_status, and admin_message are required." },
        { status: 400 }
      );
    }

    // Construct the base URL with search parameter
    const base_url = `${process.env.BASE_URL}/admin/update-tradit-status?Id=${Id}`;

    // Extract the token from the request headers
    const token = req.headers.get("token");

    if (!token) {
      return NextResponse.json(
        { message: "Authorization token is missing." },
        { status: 401 }
      );
    }

    console.log("Token:", token);
    console.log("Id:", Id);

    // Make the PATCH request using axios
    const response = await axios.patch(
      base_url,
      {
        status,
        payment_status,
        admin_message,
      },
      {
        headers: {
          token: token, // Original token header
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
          "An error occurred while updating the tradit status.",
        error: error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}