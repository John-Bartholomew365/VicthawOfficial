"use client";

import { useState, useEffect } from "react";
import { Upload, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReceiptUploadPage() {
  const router = useRouter();
  const [registration, setRegistration] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const currentReg = localStorage.getItem("current_registration");
    if (currentReg) {
      setRegistration(JSON.parse(currentReg));
    } else {
      router.push("/auth/register");
    }
  }, [router]);

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file (PNG, JPG, etc.)");
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      setSelectedFile(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !registration) return;

    setIsUploading(true);

    // Simulate file upload (in real app, this would upload to a server)
    // For now, we'll store the file as base64 in localStorage
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result;

      // Update registration with receipt
      const registrations = JSON.parse(
        localStorage.getItem("tradfit_registrations") || "[]"
      );
      const updatedRegistrations = registrations.map((reg) =>
        reg.ticketId === registration.ticketId
          ? {
              ...reg,
              receiptUrl: base64,
              paymentStatus: "receipt_uploaded",
              receiptUploadDate: new Date().toISOString(),
            }
          : reg
      );

      localStorage.setItem(
        "tradfit_registrations",
        JSON.stringify(updatedRegistrations)
      );

      // Update current registration
      const updatedCurrentReg = {
        ...registration,
        receiptUrl: base64,
        paymentStatus: "receipt_uploaded",
      };
      localStorage.setItem(
        "current_registration",
        JSON.stringify(updatedCurrentReg)
      );

      setTimeout(() => {
        setIsUploading(false);
        router.push("/auth/register/confirmation");
      }, 2000);
    };
    reader.readAsDataURL(selectedFile);
  };

  if (!registration) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#C90A1D]/10 to-white flex items-center justify-center">
        <div className="text-center">
          <Upload
            className="w-16 h-16 text-[#C90A1D] mx-auto mb-4"
            aria-label="Loading icon"
          />
          <p className="text-[#C90A1D]/80">Loading upload page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C90A1D]/10 to-white py-24">
      <div className="container mx-auto px-4 lg:px-24 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="lg:text-[30px] text-[26px] font-bold text-[#C90A1D] mb-2">
            Upload Payment Receipt
          </h1>
          <p className="text-[#C90A1D]/80 lg:px-0 px-5 leading-tight">
            Upload a clear screenshot of your successful payment transaction
          </p>
        </div>

        <div className="border border-[#C90A1D]/30 rounded-lg bg-white shadow-xl">
          <div className="bg-[#C90A1D] text-white p-6 rounded-t-lg">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Upload className="w-5 h-5" aria-label="Upload icon" />
              Receipt Upload - {registration.ticketId}
            </h2>
            <p className="text-[#C90A1D]/50">
              For {registration.firstName} {registration.lastName} (
              {registration.ticketType.toUpperCase()} Ticket)
            </p>
          </div>
          <div className="p-8 space-y-6">
            {/* Upload Instructions */}
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

            {/* File Upload */}
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
                    {selectedFile
                      ? "Change Receipt"
                      : "Click to upload receipt"}
                  </span>
                  <span className="text-sm text-[#C90A1D]/80">
                    PNG, JPG up to 5MB
                  </span>
                </label>
              </div>
            </div>

            {/* File Preview */}
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

            {/* Upload Button */}
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

            {/* Warning */}
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
                    Your registration will be pending until our admin team
                    verifies your payment receipt. You'll receive your official
                    ticket once verification is complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
