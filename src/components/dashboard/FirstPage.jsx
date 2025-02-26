"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TermsAgreement() {
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const handleProceed = () => {
    if (agreed) {
      router.push("/dashboard/payment");
    }
  };

  return (
    <div className="">
      <p className="text-white text-sm flex items-center gap-1">
        By proceeding, you acknowledge and agree to the{" "}
        <Link className="text-[#C81E23] font-medium hover:underline" href="/terms">
          Terms of Payment Service
        </Link>
        
      </p>

      <div className="flex items-center mt-3 gap-2">
        <input
          type="checkbox"
          id="agree"
          className="w-5 h-5 accent-[#C81E23] cursor-pointer"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        <label htmlFor="agree" className="text-white text-sm cursor-pointer">
          I agree to the terms
        </label>
      </div>

      <button
        onClick={handleProceed}
        disabled={!agreed}
        className={`mt-4 w-full py-2 rounded-lg font-semibold text-white transition ${
          agreed ? "bg-[#C81E23] hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Proceed to Payment
      </button>
    </div>
  );
}
