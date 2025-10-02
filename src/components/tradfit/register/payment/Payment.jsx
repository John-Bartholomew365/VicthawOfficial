"use client";

import { useState, useEffect } from "react";
import { Copy, CreditCard, CheckCircle, Clock, ArrowRight, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();
  const [registration, setRegistration] = useState(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const currentReg = localStorage.getItem("current_registration");
      console.log("Raw current_registration from localStorage:", currentReg);

      if (currentReg) {
        const parsedReg = JSON.parse(currentReg);
        console.log("Parsed registration:", parsedReg);

        // Validate required fields
        if (!parsedReg.firstName || !parsedReg.ticketId || !parsedReg.ticketType) {
          setError("Missing required registration details. Please register again.");
          return;
        }

        setRegistration(parsedReg);
      } else {
        setError("No registration found. Please complete the registration process.");
        router.push("/auth/register");
      }
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      setError("Invalid registration data. Please register again.");
      router.push("/auth/register");
    }
  }, [router]);

  const bankDetails = {
    bankName: "Moniepoint MFB",
    accountName: "GBOLABO VICTOR ADENIJI",
    accountNumber: "5132681641",
    sortCode: "011",
  };

  const ticketPrices = {
    regular: 3000,
    "regular with cloth": 8000,
    vip: 20000,
  };

  const getDisplayTicketType = (ticketType) => {
    switch (ticketType) {
      case "regular with cloth":
        return "Regular with Cloth";
      case "vip":
        return "VIP";
      case "regular":
      default:
        return "Regular";
    }
  };

  const formatPrice = (amount) => {
    if (typeof amount !== "number" || isNaN(amount)) {
      return "₦0"; // Fallback if amount is invalid
    }
    return `₦${amount.toLocaleString("en-NG")}`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const proceedToReceipt = () => {
    router.push("/auth/register/receipt-upload");
  };

  if (error) {
    return (
      <div
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('/option3.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="text-center relative z-10 max-w-md border border-[#C90A1D]/30 rounded-lg bg-white p-8">
          <AlertCircle className="w-16 h-16 text-[#C90A1D] mx-auto mb-4" aria-label="Error icon" />
          <p className="text-[#C90A1D]/80 mb-4">{error}</p>
          <a
            href="/auth/register"
            className="bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md px-6 py-2 font-medium"
          >
            Register Again
          </a>
        </div>
      </div>
    );
  }

  if (!registration) {
    return (
      <div
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('/option3.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="text-center relative z-10">
          <Clock className="w-16 h-16 text-[#C90A1D] mx-auto mb-4" aria-label="Loading icon" />
          <p className="text-[#FFFFFF]/80">Loading payment details...</p>
        </div>
      </div>
    );
  }

  const isValidTicketType = registration.ticketType && ticketPrices[registration.ticketType];
  const amountToPay = isValidTicketType ? ticketPrices[registration.ticketType] : 0;

  return (
    <div
      className="min-h-screen py-24 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/option3.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="container mx-auto px-4 lg:px-24 max-w-3xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="lg:text-[30px] text-[26px] font-bold text-[#FFFFFF] mb-2">Complete Your Payment</h1>
          <p className="text-[#FFFFFF]/80 lg:px-0 px-4 leading-tight">
            {isValidTicketType ? (
              <>
                Hello {registration.firstName}! Please make your payment of{" "}
                <span className="font-bold text-[#C90A1D]">
                  {formatPrice(amountToPay)}
                </span>{" "}
                to secure your spot.
              </>
            ) : (
              <>
                Hello {registration.firstName}! There was an issue with your ticket type. Please{" "}
                <a href="/auth/register" className="text-[#C90A1D] underline">register again</a>.
              </>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border border-[#C90A1D]/30 rounded-lg bg-white">
            <div className="bg-[#C90A1D] text-white p-6 rounded-t-lg">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <CreditCard className="w-5 h-5" aria-label="Credit card icon" />
                Registration Summary
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#C90A1D]/80">Participant:</span>
                <span className="font-medium text-[#C90A1D]">
                  {registration.firstName} {registration.lastName}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#C90A1D]/80">Ticket ID:</span>
                <span className="font-mono text-[#C90A1D]">{registration.ticketId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#C90A1D]/80">Ticket Type:</span>
                <span
                  className={`px-2 py-1 rounded text-sm font-medium ${
                    registration.ticketType === "vip"
                      ? "bg-[#C90A1D] text-white"
                      : registration.ticketType === "regular with cloth"
                      ? "bg-[#C90A1D]/20 text-[#C90A1D]"
                      : "bg-[#C90A1D]/10 text-[#C90A1D]"
                  }`}
                >
                  {getDisplayTicketType(registration.ticketType)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#C90A1D]/80">Clothing Size:</span>
                <span className="font-medium text-[#C90A1D]">
                  {registration.clothingSize || "N/A"}
                </span>
              </div>
              <div className="border-t border-[#C90A1D]/30 pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-[#C90A1D]">Total Amount to Pay:</span>
                  <span className="text-[#C90A1D]">
                    {formatPrice(amountToPay)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#C90A1D]/30 rounded-lg bg-white">
            <div className="bg-[#C90A1D] text-white p-6 rounded-t-lg">
              <h2 className="text-xl font-bold">Payment Instructions</h2>
              <p className="text-[#FFFFFF]/80">
                Follow these steps to complete your payment
              </p>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-[#C90A1D]/5 p-4 rounded-lg border border-[#C90A1D]/30">
                <h3 className="font-semibold text-[#C90A1D] mb-3">Bank Transfer Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#C90A1D]/80">Bank Name:</span>
                    <span className="font-medium text-[#C90A1D]">{bankDetails.bankName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#C90A1D]/80">Account Name:</span>
                    <span className="font-medium text-[#C90A1D]">{bankDetails.accountName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#C90A1D]/80">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#C90A1D]">{bankDetails.accountNumber}</span>
                      <button
                        onClick={() => copyToClipboard(bankDetails.accountNumber)}
                        className="border border-[#C90A1D]/30 text-[#C90A1D] hover:bg-[#C90A1D]/10 rounded-md px-2 py-1"
                        aria-label={copied ? "Copied" : "Copy account number"}
                      >
                        {copied ? (
                          <CheckCircle className="w-4 h-4" aria-label="Check circle icon" />
                        ) : (
                          <Copy className="w-4 h-4" aria-label="Copy icon" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#C90A1D]">Payment Steps:</h4>
                <ol className="list-decimal list-inside space-y-2 text-[#C90A1D]/80">
                  <li>Copy the account number above</li>
                  <li>Go to your banking app or visit the bank</li>
                  <li>
                    Transfer{" "}
                    <strong className="text-[#C90A1D]">
                      {formatPrice(amountToPay)}
                    </strong>
                  </li>
                  <li>Use your Ticket ID ({registration.ticketId}) as reference</li>
                  <li>Take a screenshot of the successful transaction</li>
                  <li>Upload your payment receipt on the next page</li>
                </ol>
              </div>

              <button
                onClick={proceedToReceipt}
                disabled={!isValidTicketType}
                className="w-full bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md py-3 flex items-center justify-center gap-2 disabled:bg-[#C90A1D]/50"
                aria-label="Proceed to upload receipt"
              >
                I've Made Payment - Upload Receipt
                <ArrowRight className="w-4 h-4" aria-label="Arrow right icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="border border-[#FFFFFF]/30 bg-[#FFFFFF]/5 rounded-lg p-4">
            <p className="text-[#FFFFFF]/80">
              <strong>Important:</strong> Your registration will only be confirmed after we verify your payment
              receipt. Please ensure you upload a clear screenshot of your successful transaction for{" "}
              <strong>{formatPrice(amountToPay)}</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}