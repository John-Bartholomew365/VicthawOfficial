"use client";
import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const [copiedField, setCopiedField] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const router = useRouter();

  const accountDetails = {
    accountNumber: "0156461679",
    bankName: "GTBank",
    accountName: "Adeniji Gbolabo Victor",
  };

  const pricingDetails = {
    price: "₦80,000",
    description:
      "This payment confirms your team's registration for the Victhaw Official Unity Cup 1.0. Upon completion, your team will secure its place in the tournament and gain access to essential updates and resources.",
  };

  const copyToClipboard = (field, text) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 3000);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      if (file.type.startsWith("image/")) {
        setPreviewURL(URL.createObjectURL(file)); // Show image preview
      } else {
        setPreviewURL(null);
      }
    }
  };

  const handleFileSubmit = () => {
    if (!selectedFile) {
      toast.error("Please upload an image or PDF before submitting.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          background: "#0F0F0F",
          color: "#fff",
          border: "1px solid #C81E23",
        },
      });
      return;
    }

    toast.success(
      "Please wait while we review your payment, redirecting you to your team's dashboard",
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressStyle: { backgroundColor: "#00ff00" },
        style: {
          background: "#0F0F0F",
          color: "#fff",
          border: "1px solid #00ff00",
        },
      }
    );

    setTimeout(() => {
      router.push("/dashboard/setup");
    }, 4000);
  };

  return (
    <div className="lg:p-6 p-0 lg:w-[800px] w-auto m-auto tracking-tight">
      <h1 className="text-2xl font-bold mb-4 text-center">Make Payment</h1>

      {/* Pricing Details */}
      <div className="lg:p-6 p-2 rounded-lg shadow-lg bg-[#0F0F0F] w-full">
        <h2 className="text-lg font-bold mb-4">Registration Details</h2>
        <div className="space-y-6">
          <div className="flex justify-between">
            <p className="text-[#B0B3B8]">Registration fee:</p>
            <p className="font-bold text-[#C81E23]">{pricingDetails.price}</p>
          </div>
          <p className="text-[#B0B3B8]">{pricingDetails.description}</p>
        </div>
      </div>

      {/* Account Details */}
      <div className="p-6 rounded-lg shadow-lg bg-[#000000] w-full mt-8">
        <h2 className="text-lg font-bold mb-4">Account Details</h2>
        <div className="space-y-6">
          {Object.entries(accountDetails).map(([key, value]) => (
            <div
              key={key}
              className="lg:flex flex-col lg:flex-row justify-between w-full"
            >
              {/* Label */}
              <p className="text-[#B0B3B8] capitalize">
                {key.replace(/([A-Z])/g, " $1")}:
              </p>

              {/* Value & Copy Button */}
              <div className="flex items-center gap-2 md:justify-end">
                <p className="font-semibold">{value}</p>
                {key !== "accountName" && ( // ❌ Remove copy icon for Account Name
                  <button onClick={() => copyToClipboard(key, value)}>
                    {copiedField === key ? (
                      <FaCheck className="text-[#C81E23]" />
                    ) : (
                      <FaCopy className="text-gray-400 hover:text-white transition" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Confirmation */}
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Confirm Payment</h2>
        <div className="space-y-3">
          {/* Custom File Input */}
          <label className="block w-full bg-[#0F0F0F] p-3 rounded-lg border border-gray-600 cursor-pointer text-white text-center">
            {selectedFile ? selectedFile.name : "Choose File"}
            <input
              type="file"
              accept="image/*, .pdf"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {/* File Preview */}
          {previewURL && (
            <div className="mt-4">
              <p className="text-white text-sm mb-2">
                Transaction receipt preview:
              </p>
              <img
                src={previewURL}
                alt="File preview"
                className="w-full max-h-60 rounded-lg object-cover"
              />
            </div>
          )}
          {selectedFile && selectedFile.type === "application/pdf" && (
            <p className="text-gray-400 text-sm text-center mt-2">
              PDF selected: Preview not available
            </p>
          )}

          <button
            onClick={handleFileSubmit}
            className="w-full px-4 py-2 bg-[#C81E23] text-white rounded-lg hover:bg-[#A3181C] transition"
          >
            Submit Payment Proof
          </button>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}