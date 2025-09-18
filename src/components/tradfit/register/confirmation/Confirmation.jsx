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
} from "lucide-react";
import Link from "next/link";

export default function ConfirmationPage() {
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    const currentRegistration = localStorage.getItem("current_registration");
    if (currentRegistration) {
      setRegistration(JSON.parse(currentRegistration));
    }
  }, []);

  if (!registration) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#C90A1D]/10 to-white flex items-center justify-center">
        <div className="max-w-md border border-[#C90A1D]/30 rounded-lg bg-white p-8 text-center">
          <p className="text-[#C90A1D]/80">
            Loading your registration details...
          </p>
        </div>
      </div>
    );
  }

  const isReceiptUploaded = registration.paymentStatus === "receipt_uploaded";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C90A1D]/10 to-white py-24">
      <div className="container mx-auto px-4 lg:px-24 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            {isReceiptUploaded ? (
              <Upload
                className="w-12 h-12 text-[#C90A1D]"
                aria-label="Receipt uploaded icon"
              />
            ) : (
              <CheckCircle
                className="w-12 h-12 text-[#C90A1D]"
                aria-label="Success icon"
              />
            )}
          </div>
          <h1 className="lg:text-[30px] text-[26px] font-bold text-[#C90A1D] mb-4 leading-tight">
            {isReceiptUploaded
              ? "Receipt Uploaded Successfully!"
              : "Registration Successful!"}
          </h1>
          <p className="text-[#C90A1D]/80 leading-tight">
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
          <div className="mb-8 border border-[#C90A1D]/30 bg-[#C90A1D]/5 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle
                className="w-6 h-6 text-[#C90A1D] mt-1"
                aria-label="Alert icon"
              />
              <div>
                <h3 className="font-semibold text-[#C90A1D] mb-2">
                  Payment Under Review
                </h3>
                <p className="text-[#C90A1D]/80 mb-3">
                  We've received your payment receipt and it's currently being
                  reviewed by our admin team. You'll receive your official
                  ticket confirmation via email once verification is complete.
                </p>
                <div className="bg-[#C90A1D]/10 p-3 rounded border border-[#C90A1D]/30">
                  <p className="text-[#C90A1D] font-medium text-sm">
                    Expected processing time: 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registration Details */}
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
                      : "bg-[#C90A1D]/10 text-[#C90A1D]"
                  }`}
                >
                  {registration.ticketType === "vip" ? "VIP" : "Regular"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#C90A1D] font-medium">Ticket ID:</span>
                <span className="text-[#C90A1D]/80 font-mono bg-[#C90A1D]/10 px-2 py-1 rounded">
                  {registration.ticketId}
                </span>
              </div>

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

          {/* Event Information */}
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

        {/* Call to Action */}
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

        {/* Social Sharing */}
        <div className="mt-8 text-center">
          <p className="text-[#C90A1D]/80 mb-4">
            Share your excitement with friends!
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="border border-[#C90A1D] text-[#C90A1D] hover:bg-[#C90A1D]/10 rounded-md px-3 py-1 text-sm bg-transparent"
              aria-label="Share on social media"
            >
              Share on Social Media
            </button>
            <button
              className="border border-[#C90A1D] text-[#C90A1D] hover:bg-[#C90A1D]/10 rounded-md px-3 py-1 text-sm bg-transparent"
              aria-label="Invite friends"
            >
              Invite Friends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
