"use client";

import { useState, useEffect } from "react";
import { Upload, CheckCircle, AlertCircle, ArrowRight, FileText, X } from "lucide-react";
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

  // -------------------------------
  // Load registration from localStorage
  // -------------------------------
  useEffect(() => {
    try {
      const regData = localStorage.getItem("current_registration");
      if (!regData) throw new Error("No registration found");

      const parsed = JSON.parse(regData);
      if (!parsed.registrationId || !parsed.ticketId) throw new Error("Invalid registration data");

      setRegistration(parsed);
    } catch {
      toast.error("Registration not found. Please register again.", { position: "top-right" });
      router.push("/auth/register");
    }
  }, [router]);

  // -------------------------------
  // File selection handler
  // -------------------------------
  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) return toast.error("Please select a valid image (JPG, PNG, WebP)");
    if (file.size > 5 * 1024 * 1024) return toast.error("File size must be under 5MB");

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (ev) => setPreviewUrl(ev.target?.result);
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  // -------------------------------
  // Upload handler
  // -------------------------------
  const handleUpload = async () => {
    if (!selectedFile) return toast.error("Please select a receipt image.");
    if (!registration) return toast.error("Registration details missing.");

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("tradfitId", registration.registrationId);
      formData.append("receipt", selectedFile);

      const { data } = await axios.post("/api/tradfit/upload-receipt", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 60000,
      });

      if (data.statusCode !== "00") throw new Error(data.message || "Upload failed");

      // Update local storage
      const updatedReg = {
        ...registration,
        receiptUrl: data.data?.receipt_url || previewUrl,
        paymentStatus: "receipt_uploaded",
        receiptUploadDate: new Date().toISOString(),
        receiptVerified: false,
      };

      localStorage.setItem("current_registration", JSON.stringify(updatedReg));

      const allRegs = JSON.parse(localStorage.getItem("tradfit_registrations") || "[]").map((r) =>
        r.ticketId === registration.ticketId ? updatedReg : r
      );
      localStorage.setItem("tradfit_registrations", JSON.stringify(allRegs));

      toast.success("Receipt uploaded successfully!", { position: "top-right" });
      setTimeout(() => router.push("/auth/register/confirmation"), 1500);
    } catch (err) {
      const message =
        axios.isAxiosError(err)
          ? err.response?.data?.message ||
            (err.code === "ECONNABORTED"
              ? "Upload timeout. Try again."
              : "Server error. Please retry.")
          : "Unexpected error occurred.";

      toast.error(message, { position: "top-right" });
    } finally {
      setIsUploading(false);
    }
  };

  // -------------------------------
  // Ticket type formatter
  // -------------------------------
  const displayTicketType = (type) => {
    const map = {
      "regular with cloth": "Regular with Cloth",
      vip: "VIP",
      regular: "Regular",
    };
    return map[type] || "Regular";
  };

  // -------------------------------
  // Render: Loading state
  // -------------------------------
  if (!registration) {
    return (
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/option3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="z-10 text-center text-white">
          <Upload className="w-12 h-12 mx-auto mb-4 animate-pulse text-[#C90A1D]" />
          <p>Loading registration details...</p>
        </div>
      </div>
    );
  }

  // -------------------------------
  // Render: Main page
  // -------------------------------
  return (
    <div
      className="min-h-screen py-24 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/option3.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative container mx-auto px-4 lg:px-24 max-w-2xl z-10">
        <div className="text-center mb-8">
          <h1 className="text-[28px] lg:text-[30px] font-bold text-white mb-2">
            Upload Payment Receipt
          </h1>
          <p className="text-white/80">
            Upload a clear screenshot of your successful payment transaction.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-[#C90A1D] text-white p-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Receipt Upload – {registration.ticketId}
            </h2>
            <p className="text-white/80">
              For {registration.firstName} {registration.lastName} (
              {displayTicketType(registration.ticketType)} Ticket)
            </p>
          </div>

          <div className="p-8 space-y-6">
            {/* Upload Requirements */}
            <div className="bg-[#C90A1D]/5 p-4 rounded-lg border border-[#C90A1D]/30">
              <h3 className="font-semibold text-[#C90A1D] mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Upload Requirements
              </h3>
              <ul className="list-disc list-inside text-sm text-[#C90A1D]/80 space-y-1">
                <li>Clear screenshot showing payment details</li>
                <li>File format: PNG, JPG, or JPEG</li>
                <li>Max file size: 5MB</li>
              </ul>
            </div>

            {/* File Upload */}
            <div>
              <label htmlFor="receipt" className="block text-[#C90A1D] font-medium mb-2">
                Select Receipt Image *
              </label>
              <div className="border-2 border-dashed border-[#C90A1D]/30 rounded-lg p-8 text-center hover:border-[#C90A1D]/50 transition-colors">
                <input
                  id="receipt"
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleFileSelect}
                  disabled={isUploading}
                  className="hidden"
                />
                <label
                  htmlFor="receipt"
                  className={`cursor-pointer flex flex-col items-center ${
                    isUploading && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <Upload className="w-12 h-12 text-[#C90A1D]" />
                  <span className="text-[#C90A1D] font-medium">
                    {selectedFile ? "Change Receipt" : "Click to Upload Receipt"}
                  </span>
                  <span className="text-sm text-[#C90A1D]/70">PNG, JPG, JPEG up to 5MB</span>
                </label>
              </div>
            </div>

            {/* Preview */}
            {previewUrl && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[#C90A1D] font-medium">Receipt Preview:</p>
                  <button
                    onClick={handleRemoveFile}
                    className="text-red-500 hover:text-red-700"
                    disabled={isUploading}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <img
                  src={previewUrl}
                  alt="Receipt Preview"
                  className="rounded-lg shadow-md max-h-64 mx-auto"
                />
              </div>
            )}

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
              className="w-full bg-[#C90A1D] hover:bg-[#A30818] text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 disabled:opacity-50 transition-all duration-300"
            >
              {isUploading ? (
                <>
                  <Upload className="w-5 h-5 animate-spin" /> Uploading...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" /> Upload Receipt <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Notice */}
            <div className="bg-[#C90A1D]/5 p-4 rounded-lg border border-[#C90A1D]/30 flex gap-3">
              <AlertCircle className="w-5 h-5 text-[#C90A1D] mt-0.5 flex-shrink-0" />
              <p className="text-[#C90A1D]/80 text-sm">
                Your registration will remain pending until our admin verifies your payment receipt.
                You’ll receive confirmation via email once verification is complete (within 24 hours).
              </p>
            </div>
          </div>
        </div>

        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </div>
  );
}
