"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle,
  Calendar,
  MapPin,
  Clock,
  Users,
  Sparkles,
  AlertCircle,
  Upload,
  Download,
  MessageCircle,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { jsPDF } from "jspdf";

export default function ConfirmationPage() {
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    const currentRegistration = localStorage.getItem("current_registration");
    if (currentRegistration) {
      const parsedRegistration = JSON.parse(currentRegistration);
      console.log("Registration details:", parsedRegistration); // Debug log
      setRegistration(parsedRegistration);
    }
  }, []);

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

  const downloadTicket = () => {
    if (!registration) return;

    const doc = new jsPDF();

    // Determine background color and text color for date/time
    const isDarkBackground = true; // Assuming dark background; adjust if needed
    const textColor = isDarkBackground ? [255, 255, 255] : [0, 0, 0]; // White for dark, black for light
    const textOpacity = 0.7;

    // Add subtle background image with 20% opacity (no border radius)
    try {
      doc.addImage(
        "/victhaw.JPG",
        "JPG",
        20,
        10,
        17.64,
        17.64, // 50px height and width (50px / 2.834 ≈ 17.64mm)
        undefined,
        undefined,
        0.2 // 20% opacity
      );
    } catch (error) {
      console.error("Error adding background image:", error);
    }

    // Add heading with 60px margin-top
    doc.setFontSize(24);
    doc.setTextColor(201, 10, 29); // #C90A1D
    doc.setFont("helvetica", "bold");
    doc.text("TRADFIT RHYTHMS TICKET", 20, 30 + 21.17); // 30 + (60px / 2.834 ≈ 21.17mm)

    // Add download date and time (left-aligned, formatted as "29 Sep 2025, 11:33 AM")
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }); // Formats as "29 Sep 2025"
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }); // Formats as "11:33 AM"
    const currentDateTime = `${formattedDate}, ${formattedTime}`;
    doc.setFontSize(12);
    doc.setTextColor(textColor[0], textColor[1], textColor[2], textOpacity);
    doc.setFont("helvetica", "normal");
    doc.text(currentDateTime, 20, 40 + 21.17); // Left-aligned at x = 20mm

    // Add ticket details
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0); // Black for details
    let yPosition = 70 + 21.17; // Adjust y-position with margin

    const details = [
      { label: "Name", value: `${registration.firstName} ${registration.lastName}` },
      { label: "Email", value: registration.email },
      { label: "Ticket Type", value: getDisplayTicketType(registration.ticketType) },
      { label: "Clothing Size", value: registration.clothingSize || "N/A" },
      { label: "Ticket ID", value: registration.ticketId },
    ];

    details.forEach(({ label, value }) => {
      // Label (medium weight)
      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.text(`${label}:`, 20, yPosition);

      // Value (bold)
      doc.setFont("helvetica", "bold");
      doc.text(value, 60, yPosition); // Align values at 60mm for consistency
      yPosition += 10;
    });

    // Add footer text
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); // Gray for footer
    doc.setFont("helvetica", "normal");
    doc.text(
      "This ticket is pending admin verification. Keep this for your records.",
      20,
      yPosition + 10
    );
    doc.text(
      "Event details will be sent via email upon confirmation.",
      20,
      yPosition + 20
    );

    // Save the PDF
    doc.save(`TRADFIT_Ticket_${registration.ticketId}.pdf`);
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
        <div className="max-w-md border border-[#C90A1D]/30 rounded-lg bg-white p-8 text-center relative z-10">
          <p className="text-[#C90A1D]/80">
            Loading your registration details...
          </p>
        </div>
      </div>
    );
  }

  const isReceiptUploaded = registration.paymentStatus === "receipt_uploaded";

  return (
    <div
      className="min-h-screen py-24 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/option3.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="container mx-auto px-4 lg:px-24 max-w-4xl relative z-10">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            {isReceiptUploaded ? (
              <Upload
                className="w-12 h-12 text-[#FFFFFF]"
                aria-label="Receipt uploaded icon"
              />
            ) : (
              <CheckCircle
                className="w-12 h-12 text-[#FFFFFF]"
                aria-label="Success icon"
              />
            )}
          </div>
          <h1 className="lg:text-[30px] text-[26px] font-bold text-[#FFFFFF] mb-4 leading-tight">
            {isReceiptUploaded
              ? "Receipt Uploaded Successfully!"
              : "Registration Successful!"}
          </h1>
          <p className="text-[#FFFFFF]/80 leading-tight">
            {isReceiptUploaded ? (
              <>
                Thank you,{" "}
                <span className="font-bold">{registration.firstName}</span>!
                <br />
                Your payment receipt is under review.
              </>
            ) : (
              <>
                Welcome to TRADFIT RHYTHMS,{" "}
                <span className="font-bold">{registration.firstName}</span>!
              </>
            )}
          </p>
        </div>

        {isReceiptUploaded && (
          <div className="mb-8 border border-[#FFFFFF]/30 bg-[#FFFFFF]/5 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle
                className="w-6 h-6 text-[#FFFFFF] mt-1"
                aria-label="Alert icon"
              />
              <div>
                <h3 className="font-semibold text-[#FFFFFF] mb-2">
                  Payment Under Review
                </h3>
                <p className="text-[#FFFFFF]/80 mb-3">
                  We've received your payment receipt and it's currently being
                  reviewed by our admin team. You'll receive your official
                  ticket confirmation via email once verification is complete.
                </p>
                <div className="bg-[#FFFFFF]/10 p-3 rounded border border-[#FFFFFF]/30">
                  <p className="text-[#FFFFFF] font-medium text-sm">
                    Expected processing time: 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="shadow-xl border border-[#C90A1D]/30 rounded-lg bg-white">
            <div className="bg-[#C90A1D] text-white p-6 rounded-t-lg">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5" aria-label="Users icon" />
                Your Registration Details
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#C90A1D] font-medium">Name:</span>
                <span className="text-[#C90A1D]/80">
                  {registration.firstName} {registration.lastName}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#C90A1D] font-medium">Email:</span>
                <span className="text-[#C90A1D]/80">{registration.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#C90A1D] font-medium">Ticket Type:</span>
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
                <span className="text-[#C90A1D] font-medium">Clothing Size:</span>
                <span className="text-[#C90A1D]/80">{registration.clothingSize || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#C90A1D] font-medium">Ticket ID:</span>
                <span className="text-[#C90A1D]/80 font-mono bg-[#C90A1D]/10 px-2 py-1 rounded">
                  {registration.ticketId}
                </span>
              </div>

              <button
                onClick={downloadTicket}
                className="w-full bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md py-2 flex items-center justify-center gap-2"
                aria-label="Download ticket as PDF"
              >
                <Download className="w-4 h-4" aria-label="Download icon" />
                Download Ticket (PDF)
              </button>

              <div className="mt-6 p-4 bg-[#C90A1D]/5 border border-[#C90A1D]/30 rounded-lg">
                <p className="text-[#C90A1D] font-medium mb-2">
                  {isReceiptUploaded ? "Next Steps:" : "Important Notice:"}
                </p>
                <p className="text-[#C90A1D]/80 text-sm">
                  {isReceiptUploaded
                    ? "Our admin team is reviewing your payment receipt. You'll receive your official ticket confirmation via email once verification is complete. Please keep this reference number for your records."
                    : "Your official ticket ID will be sent to your email once registration has been confirmed by our team. Please keep this reference number for your records."}
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-xl border border-[#C90A1D]/30 rounded-lg bg-white">
            <div className="bg-gradient-to-r from-[#C90A1D] to-[#A30818] text-white p-6 rounded-t-lg">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Calendar className="w-5 h-5" aria-label="Calendar icon" />
                Event Information
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="w-5 h-5 text-[#C90A1D] mt-1"
                  aria-label="Location icon"
                />
                <div>
                  <p className="font-medium text-[#C90A1D]">Location</p>
                  <p className="text-[#C90A1D]/80">Stay tuned!</p>
                  <p className="text-sm text-[#C90A1D]/60">Details are coming soon.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock
                  className="w-5 h-5 text-[#C90A1D] mt-1"
                  aria-label="Schedule icon"
                />
                <div>
                  <p className="font-medium text-[#C90A1D]">Schedule</p>
                  <p className="text-[#C90A1D]/80">Stay tuned!</p>
                  <p className="text-sm text-[#C90A1D]/60">Details are coming soon.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles
                  className="w-5 h-5 text-[#C90A1D] mt-1"
                  aria-label="What to expect icon"
                />
                <div>
                  <p className="font-medium text-[#C90A1D]">What to Expect</p>
                  <ul className="text-sm text-[#C90A1D]/80 space-y-1">
                    <li>• Indigenous dance sessions</li>
                    <li>• Live cultural music</li>
                    <li>• Wellness & fitness booths</li>
                    <li>• Traditional food & refreshments</li>
                    {registration.ticketType === "regular with cloth" && (
                      <li className="text-[#C90A1D] font-medium">
                        • Customized traditional attire
                      </li>
                    )}
                    {registration.ticketType === "vip" && (
                      <li className="text-[#C90A1D] font-medium">
                        • VIP exclusive benefits
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto shadow-xl border border-[#C90A1D]/30 rounded-lg bg-white p-8">
            <h2 className="text-2xl font-bold text-[#C90A1D] mb-4">
              Get Ready for an Amazing Experience!
            </h2>
            <p className="text-[#C90A1D]/80 mb-6">
              {isReceiptUploaded
                ? "While we process your payment, explore more about TRADFIT RHYTHMS and discover what makes this event special."
                : "While you wait for your confirmation email, explore more about TRADFIT RHYTHMS and discover what makes this event special."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tradfit/about"
                className="bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md px-4 py-2 text-center"
              >
                Learn About TRADFIT
              </Link>
              <Link
                href="/tradfit/tickets"
                className="border border-[#C90A1D] text-[#C90A1D] hover:bg-[#C90A1D]/10 rounded-md px-4 py-2 text-center bg-transparent"
              >
                Compare Ticket Benefits
              </Link>
              <Link
                href="/tradfit/sponsors"
                className="border border-[#C90A1D] text-[#C90A1D] hover:bg-[#C90A1D]/10 rounded-md px-4 py-2 text-center bg-transparent"
              >
                View Our Sponsors
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#FFFFFF]/80 mb-4">
            Share your excitement with friends!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://chat.whatsapp.com/LDBww5C59QCKP2L2dsLWGb"
              className="border border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF]/10 rounded-md px-3 py-1 text-sm bg-transparent flex items-center justify-center gap-2"
              aria-label="Join WhatsApp Group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" aria-label="WhatsApp icon" />
              Join Our WhatsApp Group
            </Link>
            <Link
              href="https://www.instagram.com/victhawofficial_tribe?igsh=Nzd4ZnplOWc5NG5w&utm_source=ig_contact_invite"
              className="border border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF]/10 rounded-md px-3 py-1 text-sm bg-transparent flex items-center justify-center gap-2"
              aria-label="View Instagram Page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4" aria-label="Instagram icon" />
              Follow Us on Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}