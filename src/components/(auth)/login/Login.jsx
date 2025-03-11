// "use client";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//     });
//   }, []);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   // Formik setup with Yup validation
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email("Invalid email address").required("Required"),
//       password: Yup.string().required("Required"),
//     }),
//     onSubmit: async (values) => {
//       try {
//         // Send a POST request to the login API
//         const response = await fetch("/api/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         });

//         // Check if the request was successful
//         if (response.ok) {
//           const data = await response.json();

//           // Extract user data and access token from the response
//           const { user } = data.data;
//           const accessToken = data.data.token;

//           // Store the access token and user data in localStorage
//           localStorage.setItem("accessToken", accessToken);
//           localStorage.setItem("userData", JSON.stringify(user));

//           // Redirect based on user type
//           if (user.user_type === "Admin") {
//             router.push("/dashboard/admin");
//           } else {
//             router.push("/dashboard");
//           }

//           // Show success message
//           toast.success("Login successful! Welcome to your dashboard!", {
//             position: "top-center",
//           });
//         } else {
//           // Handle server errors
//           const data = await response.json();
//           toast.error(data.message || "Login failed. Please try again.", {
//             position: "top-center",
//           });
//         }
//       } catch (error) {
//         // Handle network or unexpected errors
//         console.error("Login error:", error);
//         toast.error("An error occurred. Please try again.", {
//           position: "top-center",
//         });
//       }
//     },
//   });

//   return (
//     <div className="pt-24 tracking-tight flex flex-col items-center">
//       <ToastContainer autoClose={2000} hideProgressBar />
//       <div
//         className="pt-6 text-left w-full max-w-lg mx-auto"
//         data-aos="fade-up"
//       >
//         <div>
//           <h2 className="font-bold text-[30px]">Welcome back! </h2>
//           <p className="opacity-70 text-[14px] mt-2">
//             Log in to manage your team and tournament details.
//           </p>
//         </div>
//       </div>
//       <div className="w-full max-w-lg mx-auto">
//         <form onSubmit={formik.handleSubmit}>
//           <div className="mt-7" data-aos="fade-up">
//             <h1 className="font-bold text-[16px]">Email</h1>
//             <input
//               type="text"
//               id="email"
//               name="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="e.g example@gmail.com"
//               className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
//             />
//             {formik.touched.email && formik.errors.email ? (
//               <div className="text-red-500 text-sm">{formik.errors.email}</div>
//             ) : null}
//           </div>
//           <div className="mt-7 relative" data-aos="fade-up">
//             <h1 className="font-bold text-[16px]">Password</h1>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="*************"
//               className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute right-3 top-[70%] translate-y-[-50%] text-white opacity-70"
//             >
//               {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
//             </button>
//             {formik.touched.password && formik.errors.password ? (
//               <div className="text-red-500 text-sm">
//                 {formik.errors.password}
//               </div>
//             ) : null}
//           </div>
          
//           <div className="my-8" data-aos="fade-up">
//             <button
//               type="submit"
//               className="bg-[#C81E23] rounded-md p-2 text-white w-full"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//         <div className="mb-5 flex gap-3" data-aos="fade-up">
//           Don't have an account?{" "}
//           <Link href={"/register"} className="font-bold">
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Formik setup with Yup validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true); // Set loading to true when login starts
      try {
        // Send a POST request to the login API
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        // Check if the request was successful
        if (response.ok) {
          const data = await response.json();

          // Extract user data and access token from the response
          const { user } = data.data;
          const accessToken = data.data.token;

          // Store the access token and user data in localStorage
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("userData", JSON.stringify(user));

          // Redirect based on user type
          if (user.user_type === "Admin") {
            router.push("/dashboard/admin");
          } else {
            router.push("/dashboard");
          }

          // Show success message
          toast.success("Login successful! Welcome to your dashboard!", {
            position: "top-center",
          });
        } else {
          // Handle server errors
          const data = await response.json();
          toast.error(data.message || "Login failed. Please try again.", {
            position: "top-center",
          });
        }
      } catch (error) {
        // Handle network or unexpected errors
        console.error("Login error:", error);
        toast.error("An error occurred. Please try again.", {
          position: "top-center",
        });
      } finally {
        setIsLoading(false); // Set loading to false when login ends
      }
    },
  });

  return (
    <div className="pt-24 tracking-tight flex flex-col items-center">
      <ToastContainer autoClose={2000} hideProgressBar />
      <div
        className="pt-6 text-left w-full max-w-lg mx-auto"
        data-aos="fade-up"
      >
        <div>
          <h2 className="font-bold text-[30px]">Welcome back! </h2>
          <p className="opacity-70 text-[14px] mt-2">
            Log in to manage your team and tournament details.
          </p>
        </div>
      </div>
      <div className="w-full max-w-lg mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-7" data-aos="fade-up">
            <h1 className="font-bold text-[16px]">Email</h1>
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="e.g example@gmail.com"
              className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mt-7 relative" data-aos="fade-up">
            <h1 className="font-bold text-[16px]">Password</h1>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="*************"
              className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-[70%] translate-y-[-50%] text-white opacity-70"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          
          <div className="my-8" data-aos="fade-up">
            <button
              type="submit"
              className={`bg-[#C81E23] rounded-md p-2 text-white w-full ${
                isLoading ? "opacity-70" : ""
              }`}
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <div className="mb-5 flex gap-3" data-aos="fade-up">
          Don't have an account?{" "}
          <Link href={"/register"} className="font-bold">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;