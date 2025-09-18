"use client";

import { useState, useEffect } from "react";
import { Copy, CreditCard, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();
  const [registration, setRegistration] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const currentReg = localStorage.getItem("current_registration");
    if (currentReg) {
      setRegistration(JSON.parse(currentReg));
    } else {
      router.push("/auth/register");
    }
  }, [router]);

  const bankDetails = {
    bankName: "First Bank of Nigeria",
    accountName: "TRADFIT RHYTHMS",
    accountNumber: "3085467291",
    sortCode: "011",
  };

  const ticketPrices = {
    regular: "₦5,000",
    vip: "₦10,000",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const proceedToReceipt = () => {
    router.push("/auth/register/receipt-upload");
  };

  if (!registration) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#C90A1D]/10 to-white flex items-center justify-center">
        <div className="text-center">
          <Clock className="w-16 h-16 text-[#C90A1D] mx-auto mb-4" aria-label="Loading icon" />
          <p className="text-[#C90A1D]/80">Loading payment details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C90A1D]/10 to-white py-24">
      <div className="container mx-auto px-4 lg:px-24 max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="lg:text-[30px] text-[26px] font-bold text-[#C90A1D] mb-2">Complete Your Payment</h1>
          <p className="text-[#C90A1D]/80 lg:px-0 px-4 leading-tight">
            Hello {registration.firstName}! Please make your payment to secure your spot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registration Summary */}
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
                      : "bg-[#C90A1D]/10 text-[#C90A1D]"
                  }`}
                >
                  {registration.ticketType === "vip" ? "VIP" : "Regular"}
                </span>
              </div>
              <div className="border-t border-[#C90A1D]/30 pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-[#C90A1D]">Total Amount:</span>
                  <span className="text-[#C90A1D]">
                    {ticketPrices[registration.ticketType]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="border border-[#C90A1D]/30 rounded-lg bg-white">
            <div className="bg-[#C90A1D] text-white p-6 rounded-t-lg">
              <h2 className="text-xl font-bold">Payment Instructions</h2>
              <p className="text-[#C90A1D]/50">
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
                  {/* <div className="flex justify-between items-center">
                    <span className="text-[#C90A1D]/80">Sort Code:</span>
                    <span className="font-mono font-medium text-[#C90A1D]">{bankDetails.sortCode}</span>
                  </div> */}
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
                      {ticketPrices[registration.ticketType]}
                    </strong>
                  </li>
                  <li>Use your Ticket ID ({registration.ticketId}) as reference</li>
                  <li>Take a screenshot of the successful transaction</li>
                  <li>Upload your payment receipt on the next page</li>
                </ol>
              </div>

              <button
                onClick={proceedToReceipt}
                className="w-full bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md py-3 flex items-center justify-center gap-2"
                aria-label="Proceed to upload receipt"
              >
                I've Made Payment - Upload Receipt
                <ArrowRight className="w-4 h-4" aria-label="Arrow right icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="border border-[#C90A1D]/30 bg-[#C90A1D]/5 rounded-lg p-4">
            <p className="text-[#C90A1D]/80">
              <strong>Important:</strong> Your registration will only be confirmed after we verify your payment
              receipt. Please ensure you upload a clear screenshot of your successful transaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}