import Link from "next/link";

export default function TicketsPage() {
  const regularBenefits = [
    { emoji: "🎵", text: "Access to all dance sessions", ariaLabel: "Music icon" },
    { emoji: "👥", text: "Community group activities", ariaLabel: "Users icon" },
    { emoji: "🍴", text: "Basic refreshments included", ariaLabel: "Utensils icon" },
    { emoji: "📶", text: "Free WiFi access", ariaLabel: "WiFi icon" },
    { emoji: "🅿️", text: "General parking", ariaLabel: "Parking icon" },
    { emoji: "📷", text: "Photo opportunities", ariaLabel: "Camera icon" },
  ];

  const vipBenefits = [
    { emoji: "👑", text: "Priority seating in premium area", ariaLabel: "Crown icon" },
    { emoji: "⭐", text: "Meet & greet with cultural performers", ariaLabel: "Star icon" },
    { emoji: "🍴", text: "Premium traditional meal & beverages", ariaLabel: "Utensils icon" },
    { emoji: "🎁", text: "Exclusive TRADFIT merchandise bag", ariaLabel: "Gift icon" },
    { emoji: "📷", text: "Professional photo session", ariaLabel: "Camera icon" },
    { emoji: "🅿️", text: "Reserved VIP parking", ariaLabel: "Parking icon" },
    { emoji: "📶", text: "High-speed VIP WiFi", ariaLabel: "WiFi icon" },
    { emoji: "👥", text: "Access to VIP networking lounge", ariaLabel: "Users icon" },
    { emoji: "🎵", text: "Backstage access to performances", ariaLabel: "Music icon" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C90A1D]/10 to-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="lg:text-[30px] text-[26px] font-bold text-[#C90A1D] mb-4">Choose Your TRADFIT Experience</h1>
          <p className="text-xl text-[#C90A1D]/80 max-w-3xl mx-auto">
            Select the perfect ticket type for your indigenous dance aerobics journey. Both options guarantee an
            unforgettable cultural fitness experience!
          </p>
        </div>

        {/* Ticket Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Regular Ticket */}
          <div className="shadow-xl border border-[#C90A1D]/30 rounded-lg bg-white relative">
            <div className="bg-[#C90A1D] text-white text-center p-6 rounded-t-lg">
              <div className="flex justify-center mb-2">
                <span className="text-2xl" aria-label="Users icon">👥</span>
              </div>
              <h2 className="text-2xl font-bold">Regular Ticket</h2>
              <p className="text-[#C90A1D]/20">Perfect for fitness enthusiasts and cultural explorers</p>
              <div className="mt-4">
                <span className="bg-[#C90A1D]/10 text-[#C90A1D] text-lg px-4 py-2 rounded-md">
                  Standard Access
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-[#C90A1D] mb-4">What's Included:</h3>
                {regularBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C90A1D]/10 rounded-full flex items-center justify-center">
                      <span className="text-sm" aria-label={benefit.ariaLabel}>
                        {benefit.emoji}
                      </span>
                    </div>
                    <span className="text-[#C90A1D]/80">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#C90A1D]/30 pt-6">
                <h4 className="font-semibold text-[#C90A1D] mb-3">Perfect For:</h4>
                <ul className="text-[#C90A1D]/80 space-y-2 text-sm">
                  <li>• First-time participants</li>
                  <li>• Budget-conscious fitness enthusiasts</li>
                  <li>• Groups and families</li>
                  <li>• Anyone wanting to experience indigenous culture</li>
                </ul>
              </div>

              <Link
                href="/auth/register"
                className="block w-full mt-8 bg-[#C90A1D] hover:bg-[#A30818] text-white text-lg py-3 text-center rounded-md font-semibold"
              >
                Register with Regular Ticket
              </Link>
            </div>
          </div>

          {/* VIP Ticket */}
          <div className="shadow-xl border border-[#C90A1D]/30 rounded-lg bg-white relative overflow-hidden">
            {/* VIP Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-[#C90A1D] hover:bg-[#A30818] text-white font-bold px-3 py-1 rounded-md">
                PREMIUM
              </span>
            </div>

            <div className="bg-gradient-to-r from-[#C90A1D] to-[#A30818] text-white text-center p-6 rounded-t-lg relative">
              <div className="flex justify-center mb-2">
                <span className="text-2xl" aria-label="Crown icon">👑</span>
              </div>
              <h2 className="text-2xl font-bold">VIP Ticket</h2>
              <p className="text-[#C90A1D]/20">Exclusive premium experience with luxury amenities</p>
              <div className="mt-4">
                <span className="bg-[#C90A1D]/10 text-[#C90A1D] text-lg px-4 py-2 rounded-md">
                  Premium Access
                </span>
              </div>
            </div>
            <div className="p-8 bg-gradient-to-b from-[#C90A1D]/5 to-white">
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-[#C90A1D] mb-4 flex items-center gap-2">
                  <span className="text-sm" aria-label="Star icon">⭐</span> VIP Exclusive Benefits:
                </h3>
                {vipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C90A1D]/10 rounded-full flex items-center justify-center">
                      <span className="text-sm" aria-label={benefit.ariaLabel}>
                        {benefit.emoji}
                      </span>
                    </div>
                    <span className="text-[#C90A1D]/80">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#C90A1D]/30 pt-6">
                <h4 className="font-semibold text-[#C90A1D] mb-3">Perfect For:</h4>
                <ul className="text-[#C90A1D]/80 space-y-2 text-sm">
                  <li>• Cultural enthusiasts seeking premium experience</li>
                  <li>• Business professionals and networking</li>
                  <li>• Special occasion celebrations</li>
                  <li>• Those wanting exclusive access and perks</li>
                </ul>
              </div>

              <div className="bg-[#C90A1D]/10 border border-[#C90A1D]/30 rounded-lg p-4 mt-6">
                <p className="text-[#C90A1D] font-medium text-center">
                  Limited VIP spots available - Reserve yours today!
                </p>
              </div>

              <Link
                href="/auth/register"
                className="block w-full mt-6 bg-[#C90A1D] hover:bg-[#A30818] text-white text-lg py-3 text-center rounded-md font-semibold"
              >
                Register with VIP Ticket
              </Link>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="shadow-lg border border-[#C90A1D]/30 rounded-lg bg-white">
            <div className="text-center p-6">
              <h2 className="text-2xl font-bold text-[#C90A1D]">Event Details</h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="font-semibold text-[#C90A1D] mb-2">Duration</h3>
                  <p className="text-[#C90A1D]/80">Full Day Event</p>
                  <p className="text-sm text-[#C90A1D]/60">8:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#C90A1D] mb-2">Location</h3>
                  <p className="text-[#C90A1D]/80">Community Sports Center</p>
                  <p className="text-sm text-[#C90A1D]/60">Lagos, Nigeria</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#C90A1D] mb-2">Capacity</h3>
                  <p className="text-[#C90A1D]/80">Limited Spots</p>
                  <p className="text-sm text-[#C90A1D]/60">Register early to secure your place</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#C90A1D] text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Can I upgrade my ticket later?",
                answer: "Yes, you can upgrade from Regular to VIP based on availability. Contact our team for assistance.",
              },
              {
                question: "What should I bring?",
                answer: "Comfortable workout clothes, water bottle, and enthusiasm! All other materials will be provided.",
              },
              {
                question: "Is there an age limit?",
                answer: "The event is designed for ages 18 and above. All fitness levels are welcome!",
              },
              {
                question: "Refund policy?",
                answer: "Full refunds available up to 7 days before the event. See our terms and conditions for details.",
              },
            ].map((faq, index) => (
              <div key={index} className="border border-[#C90A1D]/30 rounded-lg bg-white p-6">
                <h3 className="font-semibold text-[#C90A1D] mb-2">{faq.question}</h3>
                <p className="text-[#C90A1D]/80 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}