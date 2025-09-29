"use client";

import { useState, useEffect } from "react";
import { Upload, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReceiptUploadPage() {
  const router = useRouter();
  const [registration, setRegistration] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    try {
      const currentReg = localStorage.getItem("current_registration");
      console.log("Raw current_registration from localStorage:", currentReg);

      if (currentReg) {
        const parsedReg = JSON.parse(currentReg);
        console.log("Parsed registration:", parsedReg);

        if (!parsedReg.registrationId || !parsedReg.ticketId) {
          toast.error("Missing registration details. Please register again.", {
            position: "top-right",
          });
          router.push("/auth/register");
          return;
        }

        setRegistration(parsedReg);
      } else {
        toast.error("No registration found. Please complete the registration process.", {
          position: "top-right",
        });
        router.push("/auth/register");
      }
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      toast.error("Invalid registration data. Please register again.", {
        position: "top-right",
      });
      router.push("/auth/register");
    }
  }, [router]);

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please select an image file (PNG, JPG, etc.)", {
          position: "top-right",
        });
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB", {
          position: "top-right",
        });
        return;
      }

      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !registration) {
      toast.error("Please select a receipt image.", { position: "top-right" });
      return;
    }

    if (!registration.registrationId || !registration.ticketId) {
      toast.error("Registration ID or Ticket ID is missing. Please register again.", {
        position: "top-right",
      });
      router.push("/auth/register");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("tradfitId", registration.registrationId);
      formData.append("receipt", selectedFile);

      console.log("Sending API request:", {
        tradfitId: registration.registrationId,
        fileName: selectedFile.name,
        fileSize: (selectedFile.size / 1024 / 1024).toFixed(2) + " MB",
        fileType: selectedFile.type,
      });

      const response = await axios.post(
        "/api/tradfit/upload-receipt",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const result = response.data;
      console.log("API response:", result);

      if (result.statusCode === "00") {
        const registrations = JSON.parse(
          localStorage.getItem("tradfit_registrations") || "[]"
        );
        const updatedRegistrations = registrations.map((reg) =>
          reg.ticketId === registration.ticketId
            ? {
                ...reg,
                receiptUrl: result.data.receipt_url || previewUrl,
                paymentStatus: "receipt_uploaded",
                receiptUploadDate: new Date().toISOString(),
              }
            : reg
        );

        localStorage.setItem(
          "tradfit_registrations",
          JSON.stringify(updatedRegistrations)
        );

        const updatedCurrentReg = {
          ...registration,
          receiptUrl: result.data.receipt_url || previewUrl,
          paymentStatus: "receipt_uploaded",
          receiptUploadDate: new Date().toISOString(),
        };
        localStorage.setItem(
          "current_registration",
          JSON.stringify(updatedCurrentReg)
        );

        toast.success("Receipt uploaded successfully!", {
          position: "top-right",
        });
        setTimeout(() => {
          router.push("/auth/register/confirmation");
        }, 2000);
      } else {
        toast.error(result.message || "Failed to upload receipt.", {
          position: "top-right",
        });
        setIsUploading(false);
      }
    } catch (error) {
      console.error("Error uploading receipt:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      toast.error(
        error.response?.data?.message ||
          "An error occurred while uploading the receipt.",
        { position: "top-right" }
      );
      setIsUploading(false);
    }
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
          <Upload
            className="w-16 h-16 text-[#C90A1D] mx-auto mb-4"
            aria-label="Loading icon"
          />
          <p className="text-[#FFFFFF]/80">Loading upload page...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-24 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/option3.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="container mx-auto px-4 lg:px-24 max-w-2xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="lg:text-[30px] text-[26px] font-bold text-[#FFFFFF] mb-2">
            Upload Payment Receipt
          </h1>
          <p className="text-[#FFFFFF]/80 lg:px-0 px-5 leading-tight">
            Upload a clear screenshot of your successful payment transaction
          </p>
        </div>

        <div className="border border-[#C90A1D]/30 rounded-lg bg-white shadow-xl">
          <div className="bg-[#C90A1D] text-white p-6 rounded-t-lg">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Upload className="w-5 h-5" aria-label="Upload icon" />
              Receipt Upload - {registration.ticketId}
            </h2>
            <p className="text-[#FFFFFF]/80">
              For {registration.firstName} {registration.lastName} (
              {getDisplayTicketType(registration.ticketType)} Ticket)
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div className="bg-[#C90A1D]/5 p-4 rounded-lg border border-[#C90A1D]/30">
              <h3 className="font-semibold text-[#C90A1D] mb-2">
                Upload Requirements:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-[#C90A1D]/80 text-sm">
                <li>Clear screenshot of successful bank transfer</li>
                <li>Must show transaction amount and reference</li>
                <li>Image format: PNG, JPG, or JPEG</li>
                <li>Maximum file size: 5MB</li>
                <li>Ensure all details are clearly visible</li>
              </ul>
            </div>

            <div className="space-y-4">
              <label htmlFor="receipt" className="text-[#C90A1D] font-medium">
                Select Receipt Image *
              </label>
              <div className="border-2 border-dashed border-[#C90A1D]/30 rounded-lg p-8 text-center hover:border-[#C90A1D]/50 transition-colors">
                <input
                  id="receipt"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  aria-label="Upload receipt image"
                />
                <label
                  htmlFor="receipt"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <Upload
                    className="w-12 h-12 text-[#C90A1D]"
                    aria-label="Upload icon"
                  />
                  <span className="text-[#C90A1D] font-medium">
                    {selectedFile ? "Change Receipt" : "Click to upload receipt"}
                  </span>
                  <span className="text-sm text-[#C90A1D]/80">
                    PNG, JPG up to 5MB
                  </span>
                </label>
              </div>
            </div>

            {previewUrl && (
              <div className="space-y-2">
                <p className="text-[#C90A1D] font-medium">Receipt Preview:</p>
                <div className="border border-[#C90A1D]/30 rounded-lg p-4">
                  <img
                    src={previewUrl || "/placeholder.svg"}
                    alt="Receipt preview"
                    className="max-w-full h-auto max-h-64 mx-auto rounded"
                  />
                  <p className="text-sm text-[#C90A1D]/80 mt-2 text-center">
                    File: {selectedFile?.name} (
                    {((selectedFile?.size || 0) / 1024 / 1024).toFixed(2)} MB)
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
              className="w-full bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md py-3 text-lg font-semibold disabled:bg-[#C90A1D]/50 flex items-center justify-center gap-2"
              aria-label="Upload receipt and continue"
            >
              {isUploading ? (
                <>
                  <Upload
                    className="w-5 h-5 mr-2 animate-spin"
                    aria-label="Uploading icon"
                  />
                  Uploading Receipt...
                </>
              ) : (
                <>
                  <CheckCircle
                    className="w-5 h-5 mr-2"
                    aria-label="Check circle icon"
                  />
                  Upload Receipt & Continue
                  <ArrowRight
                    className="w-5 h-5 ml-2"
                    aria-label="Arrow right icon"
                  />
                </>
              )}
            </button>

            <div className="bg-[#C90A1D]/5 p-4 rounded-lg border border-[#C90A1D]/30">
              <div className="flex items-start gap-2">
                <AlertCircle
                  className="w-5 h-5 text-[#C90A1D] mt-0.5"
                  aria-label="Alert icon"
                />
                <div>
                  <p className="text-[#C90A1D] font-medium">
                    Important Notice:
                  </p>
                  <p className="text-[#C90A1D]/80 text-sm mt-1">
                    Your registration will be pending until our admin team verifies your payment receipt. You'll receive your official ticket confirmation via email once verification is complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
}