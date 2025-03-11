// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function TermsAgreement() {
//   const [agreed, setAgreed] = useState(false);
//   const router = useRouter();

//   const handleProceed = () => {
//     if (agreed) {
//       router.push("/dashboard/payment");
//     }
//   };

//   return (
//     <div className="mt-24  flex flex-col justify-center">
//       <p className="text-white text-[16px] lg:flex lg:flex-row flex-col items-center gap-1">
//         By proceeding, you acknowledge and agree to the{" "}
//         <Link
//           className="text-[#C81E23] font-medium hover:underline"
//           href="/terms"
//         >
//           Terms of Payment Service
//         </Link>
//       </p>

//       <div className="flex items-center mt-3 gap-2">
//         <input
//           type="checkbox"
//           id="agree"
//           className="w-5 h-5 accent-[#C81E23] cursor-pointer"
//           checked={agreed}
//           onChange={() => setAgreed(!agreed)}
//         />
//         <label htmlFor="agree" className="text-white text-sm cursor-pointer">
//           I agree to the terms
//         </label>
//       </div>

//       <button
//         onClick={handleProceed}
//         disabled={!agreed}
//         className={`mt-4 lg:w-[200px] w-auto py-2 rounded-lg font-semibold text-white transition ${
//           agreed
//             ? "bg-[#C81E23] hover:bg-red-700"
//             : "bg-[#000000] cursor-not-allowed"
//         }`}
//       >
//         Proceed to Payment
//       </button>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaLock } from "react-icons/fa";

export default function TermsAgreement() {
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const handleProceed = () => {
    if (agreed) {
      router.push("/payment");
    }
  };

  return (
    <div className="mt-24 flex flex-col justify-center items-center text-center">
      {/* Welcome Message */}
      <h1 className="text-2xl font-bold text-black mb-4">
        Welcome to the Victhaw Official Unity Cup 1.0!
      </h1>

      {/* Benefits Section */}
      <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-lg font-bold text-[#C81E23] mb-4">
          Why Complete Your Payment?
        </h2>
        <div className="space-y-3">
          <div className="flex gap-2">
            <FaCheckCircle className="text-green-500" />
            <p className="text-black">
              Secure your team's spot in the tournament.
            </p>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-green-500" />
            <p className="text-black">
              Gain access to exclusive updates and resources.
            </p>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-green-500" />
            <p className="text-black">
              Ensure your team is ready for the competition.
            </p>
          </div>
        </div>
      </div>

      {/* Terms Agreement Section */}
      <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-lg">
        <p className="text-black text-[16px] lg:flex lg:flex-row flex-col items-center gap-1">
          By proceeding, you acknowledge and agree to the{" "}
          <Link
            className="text-[#C81E23] font-medium hover:underline"
            href="/terms"
          >
            Terms of Payment Service
          </Link>
        </p>

        {/* Checkbox */}
        <div className="flex items-center mt-3 gap-2">
          <input
            type="checkbox"
            id="agree"
            className="w-5 h-5 accent-[#C81E23] cursor-pointer"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <label htmlFor="agree" className="text-black text-sm cursor-pointer">
            I agree to the terms
          </label>
        </div>

        {/* Security Reassurance */}
        <div className="flex items-center gap-2 mt-4">
          <FaLock className="text-[#C81E23]" />
          <p className="text-black text-sm">
            Your payment is secure, and your data is protected.
          </p>
        </div>

        {/* Proceed Button */}
        <button
          onClick={handleProceed}
          disabled={!agreed}
          className={`mt-4 lg:w-[200px] px-3 w-auto py-2 rounded-lg font-semibold text-white transition ${
            agreed
              ? "bg-[#C81E23] hover:bg-red-700"
              : "bg-[#000000] cursor-not-allowed"
          }`}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}