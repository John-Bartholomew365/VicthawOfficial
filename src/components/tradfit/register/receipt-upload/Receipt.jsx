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

  // Enhanced logging function
  const logError = (context, error, extraData = {}) => {
    const errorLog = {
      timestamp: new Date().toISOString(),
      context,
      error: {
        message: error.message,
        name: error.name,
        stack: error.stack,
        code: error.code,
      },
      userData: {
        registrationId: registration?.registrationId,
        ticketId: registration?.ticketId,
      },
      extraData,
      userAgent: navigator?.userAgent,
      url: window?.location.href,
    };

    console.error("🚨 RECEIPT UPLOAD ERROR:", errorLog);
  };

  useEffect(() => {
    const loadRegistration = async () => {
      try {
        console.log("📥 Loading registration from localStorage...");
        const currentReg = localStorage.getItem("current_registration");
        console.log("📋 Raw current_registration from localStorage:", currentReg);

        if (!currentReg) {
          toast.error("No registration found. Please complete the registration process.", {
            position: "top-right",
          });
          router.push("/auth/register");
          return;
        }

        const parsedReg = JSON.parse(currentReg);
        console.log("✅ Parsed registration:", {
          registrationId: parsedReg.registrationId,
          ticketId: parsedReg.ticketId,
          firstName: parsedReg.firstName,
          ticketType: parsedReg.ticketType
        });

        if (!parsedReg.registrationId || !parsedReg.ticketId) {
          logError("Missing registration details", new Error("Invalid registration data"), { parsedReg });
          toast.error("Missing registration details. Please register again.", {
            position: "top-right",
          });
          router.push("/auth/register");
          return;
        }

        setRegistration(parsedReg);
        console.log("🎉 Registration loaded successfully");
      } catch (error) {
        logError("Registration loading failed", error);
        toast.error("Invalid registration data. Please register again.", {
          position: "top-right",
        });
        router.push("/auth/register");
      }
    };

    loadRegistration();
  }, [router]);

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    console.log("📁 File selected:", {
      name: file.name,
      type: file.type,
      size: (file.size / 1024 / 1024).toFixed(2) + " MB",
    });

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file (PNG, JPG, JPEG, etc.)", {
        position: "top-right",
      });
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB", {
        position: "top-right",
      });
      return;
    }

    // Validate specific image types
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Please select a valid image type (JPEG, PNG, JPG, WebP)", {
        position: "top-right",
      });
      return;
    }

    setSelectedFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result);
      console.log("🖼️ Preview generated successfully");
    };
    reader.onerror = (error) => {
      logError("File preview generation failed", error);
      toast.error("Failed to generate preview. Please try another file.", {
        position: "top-right",
      });
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    console.log("🗑️ File removed");
  };

  const handleUpload = async () => {
    if (!selectedFile || !registration) {
      toast.error("Please select a receipt image.", { position: "top-right" });
      return;
    }

    if (!registration.registrationId || !registration.ticketId) {
      logError("Missing registration IDs", new Error("Invalid registration"), { registration });
      toast.error("Registration ID or Ticket ID is missing. Please register again.", {
        position: "top-right",
      });
      router.push("/auth/register");
      return;
    }

    setIsUploading(true);
    console.log("🚀 Starting receipt upload process...");

    try {
      const formData = new FormData();
      formData.append("tradfitId", registration.registrationId);
      formData.append("receipt", selectedFile);

      console.log("📤 Sending API request:", {
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
          timeout: 60000, // 60 seconds for file upload
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              console.log(`📊 Upload progress: ${percentCompleted}%`);
            }
          },
        }
      );

      const result = response.data;
      console.log("✅ API response received:", {
        statusCode: result.statusCode,
        message: result.message,
        hasReceiptUrl: !!result.data?.receipt_url
      });

      if (result.statusCode === "00") {
        // Update localStorage with receipt information
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
                receiptVerified: false, // Mark as pending verification
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
          receiptVerified: false,
        };
        localStorage.setItem(
          "current_registration",
          JSON.stringify(updatedCurrentReg)
        );

        console.log("💾 Local storage updated with receipt info");
        
        toast.success("Receipt uploaded successfully! Redirecting...", {
          position: "top-right",
        });
        
        setTimeout(() => {
          router.push("/auth/register/confirmation");
        }, 2000);
      } else {
        logError("API returned error status", new Error(result.message), { apiResponse: result });
        toast.error(result.message || "Failed to upload receipt. Please try again.", {
          position: "top-right",
        });
        setIsUploading(false);
      }
    } catch (error) {
      // Enhanced error handling
      let errorMessage = "An error occurred while uploading the receipt. Please try again.";
      let errorContext = "unknown_upload_error";

      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          errorMessage = "Upload timeout. Please check your connection and try again.";
          errorContext = "upload_timeout";
        } else if (error.response) {
          const status = error.response.status;
          errorContext = `upload_http_${status}`;
          
          switch (status) {
            case 400:
              errorMessage = error.response.data?.message || "Invalid file or registration data.";
              break;
            case 413:
              errorMessage = "File too large. Please select a file smaller than 5MB.";
              break;
            case 415:
              errorMessage = "Unsupported file type. Please use JPEG, PNG, or JPG.";
              break;
            case 404:
              errorMessage = "Registration not found. Please complete registration again.";
              break;
            case 500:
              errorMessage = "Server error during upload. Our team has been notified.";
              break;
            case 503:
              errorMessage = "Upload service unavailable. Please try again later.";
              break;
            default:
              errorMessage = error.response.data?.message || `Upload error (${status}). Please try again.`;
          }
        } else if (error.request) {
          errorContext = "upload_network_error";
          errorMessage = "Network error. Please check your internet connection.";
        }
      } else if (error instanceof Error) {
        errorContext = "upload_client_error";
        errorMessage = error.message || "An unexpected error occurred.";
      }

      logError(errorContext, error, {
        axiosError: axios.isAxiosError(error),
        responseStatus: error.response?.status,
        responseData: error.response?.data,
        fileInfo: {
          name: selectedFile.name,
          size: selectedFile.size,
          type: selectedFile.type
        }
      });

      toast.error(errorMessage, { position: "top-right" });
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
            className="w-16 h-16 text-[#C90A1D] mx-auto mb-4 animate-pulse"
            aria-label="Loading icon"
          />
          <p className="text-[#FFFFFF]/80 text-lg">Loading upload page...</p>
          <p className="text-[#FFFFFF]/60 text-sm mt-2">Please wait while we load your registration details</p>
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
            {/* Upload Requirements */}
            <div className="bg-[#C90A1D]/5 p-4 rounded-lg border border-[#C90A1D]/30">
              <h3 className="font-semibold text-[#C90A1D] mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
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

            {/* File Upload Area */}
            <div className="space-y-4">
              <label htmlFor="receipt" className="text-[#C90A1D] font-medium block">
                Select Receipt Image *
              </label>
              <div className="border-2 border-dashed border-[#C90A1D]/30 rounded-lg p-8 text-center hover:border-[#C90A1D]/50 transition-colors duration-300">
                <input
                  id="receipt"
                  type="file"
                  accept="image/jpeg, image/jpg, image/png, image/webp"
                  onChange={handleFileSelect}
                  className="hidden"
                  aria-label="Upload receipt image"
                  disabled={isUploading}
                />
                <label
                  htmlFor="receipt"
                  className={`cursor-pointer flex flex-col items-center space-y-2 ${
                    isUploading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Upload
                    className="w-12 h-12 text-[#C90A1D]"
                    aria-label="Upload icon"
                  />
                  <span className="text-[#C90A1D] font-medium">
                    {selectedFile ? "Change Receipt" : "Click to upload receipt"}
                  </span>
                  <span className="text-sm text-[#C90A1D]/80">
                    PNG, JPG, JPEG up to 5MB
                  </span>
                </label>
              </div>
            </div>

            {/* File Preview */}
            {previewUrl && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-[#C90A1D] font-medium">Receipt Preview:</p>
                  <button
                    onClick={handleRemoveFile}
                    disabled={isUploading}
                    className="text-red-500 hover:text-red-700 disabled:opacity-50"
                    aria-label="Remove file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="border border-[#C90A1D]/30 rounded-lg p-4">
                  <img
                    src={previewUrl || "/placeholder.svg"}
                    alt="Receipt preview"
                    className="max-w-full h-auto max-h-64 mx-auto rounded shadow-sm"
                  />
                  <div className="mt-2 text-center space-y-1">
                    <p className="text-sm text-[#C90A1D]/80 font-medium">
                      {selectedFile?.name}
                    </p>
                    <p className="text-xs text-[#C90A1D]/60">
                      {((selectedFile?.size || 0) / 1024 / 1024).toFixed(2)} MB • {selectedFile?.type}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
              className="w-full bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md py-3 text-lg font-semibold disabled:bg-[#C90A1D]/50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none"
              aria-label={isUploading ? "Uploading receipt..." : "Upload receipt and continue"}
            >
              {isUploading ? (
                <>
                  <Upload
                    className="w-5 h-5 animate-spin"
                    aria-label="Uploading icon"
                  />
                  Uploading Receipt...
                </>
              ) : (
                <>
                  <CheckCircle
                    className="w-5 h-5"
                    aria-label="Check circle icon"
                  />
                  Upload Receipt & Continue
                  <ArrowRight
                    className="w-5 h-5"
                    aria-label="Arrow right icon"
                  />
                </>
              )}
            </button>

            {/* Important Notice */}
            <div className="bg-[#C90A1D]/5 p-4 rounded-lg border border-[#C90A1D]/30">
              <div className="flex items-start gap-2">
                <AlertCircle
                  className="w-5 h-5 text-[#C90A1D] mt-0.5 flex-shrink-0"
                  aria-label="Alert icon"
                />
                <div>
                  <p className="text-[#C90A1D] font-medium">
                    Important Notice:
                  </p>
                  <p className="text-[#C90A1D]/80 text-sm mt-1">
                    Your registration will be pending until our admin team verifies your payment receipt. You'll receive your official ticket confirmation via email once verification is complete. This process may take up to 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer 
          position="top-right" 
          autoClose={5000} 
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}