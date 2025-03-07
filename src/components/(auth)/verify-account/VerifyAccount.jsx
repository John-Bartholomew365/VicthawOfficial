// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Ensure this is imported in your global styles or here

// const VerifyAccount = () => {
//   const [seconds, setSeconds] = useState(59);
//   const [timerActive, setTimerActive] = useState(true);
//   const [code, setCode] = useState("");
//   const [error, setError] = useState("");

//   const router = useRouter();

//   useEffect(() => {
//     AOS.init({
//       duration: 800, // Animation duration
//       once: true, // Whether animation should happen only once - while scrolling down
//     });

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

//   const handleResend = () => {
//     setSeconds(59);
//     setTimerActive(true);
//     toast.success("Verification code resent successfully!");
//   };

//   const handleConfirm = () => {
//     if (code === "123456") {
//       toast.success("Account verified successfully!");
//       setTimeout(() => router.push("/login"), 2000);
//     } else {
//       toast.error("Invalid code. Please try again.");
//       setError("Invalid code. Please try again.");
//     }
//   };

//   return (
//     <div className="pt-24 flex flex-col tracking-tight items-center">
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
//       <div className="pt-6 text-left w-full max-w-lg mx-auto" data-aos="fade-up">
//         <div>
//           <h2 className="font-bold text-[30px]">Verify account</h2>
//           <p className="opacity-70 text-[14px] mt-2">
//             Kindly verify to finish getting started
//           </p>
//         </div>
//       </div>
//       <div className="w-full max-w-lg mx-auto">
//         <div className="mt-7" data-aos="fade-up">
//           <h1 className="font-bold text-[16px]">Enter code</h1>
//           <label htmlFor="code"></label>
//           <input
//             type="number"
//             id="code"
//             name="code"
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             placeholder="e.g 123456"
//             className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
//           />
//         </div>
//         {error && (
//           <p className="text-red-500 font-bold text-[16px] mt-2" data-aos="fade-up">
//             {error}
//           </p>
//         )}
//         <div className="my-8" data-aos="fade-up">
//           <button
//             onClick={handleConfirm}
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
//             <button onClick={handleResend} className="font-bold text-white">
//               Resend
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyAccount;

// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";

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
//       code: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const response = await fetch("/api/verify-account", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ otp: values.code }),
//         });

//         if (!response.ok) {
//           throw new Error("OTP verification failed");
//         }

//         const data = await response.json();
//         toast.success("Account verified successfully!");
//         setTimeout(() => router.push("/login"), 2000);
//       } catch (error) {
//         toast.error("Invalid OTP. Please try again.");
//         console.error("Error during OTP verification:", error);
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
//       <div className="pt-6 text-left w-full max-w-lg mx-auto" data-aos="fade-up">
//         <div>
//           <h2 className="font-bold text-[30px]">Verify account</h2>
//           <p className="opacity-70 text-[14px] mt-2">
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

const VerifyAccount = () => {
  const [seconds, setSeconds] = useState(59);
  const [timerActive, setTimerActive] = useState(true);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

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

  const handleResend = () => {
    setSeconds(59);
    setTimerActive(true);
    toast.success("Verification code resent successfully!");
  };

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .required("OTP is required")
        .matches(/^\d{6}$/, "OTP must be a 6-digit number"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/verify-account", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp: values.code }),
        });

        const data = await response.json();

        if (data.success) {
          toast.success("Account verified successfully!");
          setTimeout(() => router.push("/payment"), 2000);
        } else {
          toast.error(data.message || "Invalid OTP. Please try again.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    },
  });

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
            Kindly verify to finish getting started
          </p>
        </div>
      </div>
      <div className="w-full max-w-lg mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-7" data-aos="fade-up">
            <h1 className="font-bold text-[16px]">Enter code</h1>
            <label htmlFor="code"></label>
            <input
              type="number"
              id="code"
              name="code"
              value={formik.values.code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="e.g 123456"
              className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
            />
            {formik.touched.code && formik.errors.code ? (
              <p className="text-red-500 font-bold text-[16px] mt-2">
                {formik.errors.code}
              </p>
            ) : null}
          </div>
          <div className="my-8" data-aos="fade-up">
            <button
              type="submit"
              className="bg-[#C81E23] rounded-md p-2 text-white w-full"
            >
              Confirm
            </button>
          </div>
        </form>
        <div className="mb-5 flex gap-3" data-aos="fade-up">
          Didn't receive a code?{" "}
          {timerActive ? (
            <span className="font-bold text-[#C81E23]">
              Resend in 00:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          ) : (
            <button onClick={handleResend} className="font-bold text-white">
              Resend
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
