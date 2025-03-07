// // import { NextResponse } from "next/server";

// // export async function POST(request) {
// //   try {
// //     const { otp } = await request.json();

// //     console.log("Received OTP:", otp);

// //     // Simulate OTP verification logic
// //     if (otp === "123456") {
// //       return NextResponse.json(
// //         { message: "OTP verified successfully" },
// //         { status: 200 }
// //       );
// //     } else {
// //       return NextResponse.json(
// //         { message: "Invalid OTP" },
// //         { status: 400 }
// //       );
// //     }
// //   } catch (error) {
// //     console.error("Error during OTP verification:", error);
// //     return NextResponse.json(
// //       { message: "An error occurred during OTP verification" },
// //       { status: 500 }
// //     );
// //   }
// // }

// import { NextResponse } from "next/server";

// // Simulated OTP storage (Replace with actual backend storage)
// let storedOTPs = {}; // Store OTPs mapped to emails

// export async function POST(request) {
//   try {
//     const { email, otp } = await request.json();

//     console.log("Received OTP for:", email, "OTP:", otp);

//     // Check if OTP exists and matches the stored OTP for the email
//     if (storedOTPs[email] && storedOTPs[email] === otp) {
//       delete storedOTPs[email]; // Remove OTP after successful verification
//       return NextResponse.json(
//         { message: "OTP verified successfully" },
//         { status: 200 }
//       );
//     } else {
//       return NextResponse.json(
//         { message: "Invalid or expired OTP" },
//         { status: 400 }
//       );
//     }
//   } catch (error) {
//     console.error("Error during OTP verification:", error);
//     return NextResponse.json(
//       { message: "An error occurred during OTP verification" },
//       { status: 500 }
//     );
//   }
// }

// pages/api/verify-otp.js


import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  try {

    const payload = await request.json();

    console.log("Received payload:", payload);

    // Validate the payload
    if (!payload.otp) {
      return NextResponse.json(
        { message: "OTP is required" },
        { status: 400 }
      );
    }


    const params = {
      otp: payload.otp, 
    //   email: payload.email, 
    };

    console.log("Sending params:", params);
    const response = await axios.post(
      `${process.env.BASE_URL}/auth/verify-otp`, 
      params
    );

    console.log("API response:", response.data);

    // Handle the API response
    if (response.data.statusCode === "00") {
      // OTP verification successful
      return NextResponse.json(
        { message: "OTP verified successfully!", data: response.data },
        { status: 200 }
      );
    } else {
      // OTP verification failed
      console.error("API error:", response.data);
      return NextResponse.json(
        { message: "OTP verification failed", error: response.data },
        { status: response.status }
      );
    }
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("An error occurred during the request:", error);
    return NextResponse.json(
      { message: "An error occurred during the request", error: error.message },
      { status: 500 }
    );
  }
}