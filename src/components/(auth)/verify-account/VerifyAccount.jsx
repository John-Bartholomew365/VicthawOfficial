// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

// const VerifyAccount = () => {
//   const [seconds, setSeconds] = useState(59);
//   const [timerActive, setTimerActive] = useState(true);
//   const router = useRouter();

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//     });
//   }, []);

//   // Timer logic
//   useEffect(() => {
//     if (timerActive && seconds > 0) {
//       const timer = setInterval(() => {
//         setSeconds((prev) => prev - 1);
//       }, 1000);

//       return () => clearInterval(timer);
//     }

//     if (seconds === 0) {
//       setTimerActive(false);
//     }
//   }, [seconds, timerActive]);

//   // Formik and Yup validation
//   const validationSchema = Yup.object({
//     code: Yup.string()
//       .required("OTP is required")
//       .matches(/^\d{6}$/, "OTP must be exactly 6 digits"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       otp: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       console.log(values);
      
//       try {
//         const response = await axios.post("/api/verify-account", {
//           // method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//            otp: values.code ,
//         });

//         if (response.data.statusCode === "00") { 

//           localStorage.setItem("userData", JSON.stringify(response?.data.data));
          
//           toast.success("Account verified successful! Redirecting...");
//           setTimeout(() => {
//             router.push("/setup");
//           }, 2000);
//         } else {
//           toast.error(
//             response.data.message || "Invalid OTP. Please try again."
//           );
//         }
//       } catch (error) {
//         toast.error(
//           error.response?.data?.message ||
//             "Invalid OTP. Please try again."
//         );
//         console.error("Registration error:", error);
//       }
//     },
//   });

//   const handleResend = () => {
//     setSeconds(59);
//     setTimerActive(true);
//     toast.success("Verification code resent successfully!");
//   };

//   return (
//     <div className="pt-24 flex flex-col tracking-tight items-center">
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
//       <div
//         className="pt-6 text-left w-full max-w-lg mx-auto"
//         data-aos="fade-up"
//       >
//         <div>
//           <h2 className="font-bold text-[30px]">Verify account</h2>
//           <p className="opacity-70 text-[14px] mt-2">
//             A six digit code has been sent to your email
//           </p>
//           <p className="opacity-70 text-[14px]">
//             Kindly verify to finish getting started
//           </p>
//         </div>
//       </div>
//       <form onSubmit={formik.handleSubmit} className="w-full max-w-lg mx-auto">
//         <div className="mt-7" data-aos="fade-up">
//           <h1 className="font-bold text-[16px]">Enter code</h1>
//           <input
//             type="text"
//             id="code"
//             name="code"
//             value={formik.values.code}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="e.g 123456"
//             className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
//           />
//           {formik.touched.code && formik.errors.code ? (
//             <div className="text-red-500 text-sm">{formik.errors.code}</div>
//           ) : null}
//         </div>
//         <div className="my-8" data-aos="fade-up">
//           <button
//             type="submit"
//             className="bg-[#C81E23] rounded-md p-2 text-white w-full"
//           >
//             Confirm
//           </button>
//         </div>
//         <div className="mb-5 flex gap-3" data-aos="fade-up">
//           Didn't receive a code?{" "}
//           {timerActive ? (
//             <span className="font-bold text-[#C81E23]">
//               Resend in 00:{seconds < 10 ? `0${seconds}` : seconds}
//             </span>
//           ) : (
//             <button
//               type="button"
//               onClick={handleResend}
//               className="font-bold text-white"
//             >
//               Resend
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default VerifyAccount;



"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const VerifyAccount = () => {
  const [seconds, setSeconds] = useState(59);
  const [timerActive, setTimerActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const router = useRouter();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Timer logic
  useEffect(() => {
    if (timerActive && seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }

    if (seconds === 0) {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  // Formik and Yup validation
  const validationSchema = Yup.object({
    code: Yup.string()
      .required("OTP is required")
      .matches(/^\d{6}$/, "OTP must be exactly 6 digits"),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true); // Set loading to true when verification starts
      try {
        const response = await axios.post("/api/verify-account", {
          headers: {
            "Content-Type": "application/json",
          },
          otp: values.code,
        });

        if (response.data.statusCode === "00") {
          localStorage.setItem("userData", JSON.stringify(response?.data.data));

          toast.success("Account verified successfully! Redirecting...");
          setTimeout(() => {
            router.push("/setup");
          }, 2000);
        } else {
          toast.error(
            response.data.message || "Invalid OTP. Please try again."
          );
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Invalid OTP. Please try again."
        );
        console.error("Verification error:", error);
      } finally {
        setIsLoading(false); // Set loading to false when verification ends
      }
    },
  });

  const handleResend = () => {
    setSeconds(59);
    setTimerActive(true);
    toast.success("Verification code resent successfully!");
  };

  return (
    <div className="pt-24 flex flex-col tracking-tight items-center">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div
        className="pt-6 text-left w-full max-w-lg mx-auto"
        data-aos="fade-up"
      >
        <div>
          <h2 className="font-bold text-[30px]">Verify account</h2>
          <p className="opacity-70 text-[14px] mt-2">
            A six digit code has been sent to your email
          </p>
          <p className="opacity-70 text-[14px]">
            Kindly verify to finish getting started
          </p>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="mt-7" data-aos="fade-up">
          <h1 className="font-bold text-[16px]">Enter code</h1>
          <input
            type="text"
            id="code"
            name="code"
            value={formik.values.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="e.g 123456"
            className="mt-5 p-2 text-[14px] bg-white/40 w-full border-[0.5px] border-black/10 rounded-md text-black outline-none"
          />
          {formik.touched.code && formik.errors.code ? (
            <div className="text-red-500 text-sm">{formik.errors.code}</div>
          ) : null}
        </div>
        <div className="my-8" data-aos="fade-up">
          <button
            type="submit"
            className={`bg-[#C81E23] rounded-md p-2 text-white w-full ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? "Verifying..." : "Confirm"}
          </button>
        </div>
        <div className="mb-5 flex gap-3" data-aos="fade-up">
          Didn't receive a code?{" "}
          {timerActive ? (
            <span className="font-bold text-[#C81E23]">
              Resend in 00:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="font-bold text-white"
            >
              Resend
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VerifyAccount;