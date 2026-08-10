import Link from "next/link";

export default function TicketsPage() {
  const regularBenefits = [
    {
      emoji: "🎵",
      text: "Access to all dance sessions",
      ariaLabel: "Music icon",
    },
    {
      emoji: "👥",
      text: "Community group activities",
      ariaLabel: "Users icon",
    },
    {
      emoji: "🍴",
      text: "Basic refreshments included",
      ariaLabel: "Utensils icon",
    },
    // { emoji: "📶", text: "Free WiFi access", ariaLabel: "WiFi icon" },
    { emoji: "🅿️", text: "General parking", ariaLabel: "Parking icon" },
    { emoji: "📷", text: "Photo opportunities", ariaLabel: "Camera icon" },
  ];

  const regularWithClothBenefits = [
    {
      emoji: "👕",
      text: "Customized TRADFIT clothing",
      ariaLabel: "T-shirt icon",
    },
    {
      emoji: "🎵",
      text: "Access to all dance sessions",
      ariaLabel: "Music icon",
    },
    {
      emoji: "👥",
      text: "Community group activities",
      ariaLabel: "Users icon",
    },
    {
      emoji: "🍴",
      text: "Basic refreshments included",
      ariaLabel: "Utensils icon",
    },
    // { emoji: "📶", text: "Free WiFi access", ariaLabel: "WiFi icon" },
    { emoji: "🅿️", text: "General parking", ariaLabel: "Parking icon" },
    { emoji: "📷", text: "Photo opportunities", ariaLabel: "Camera icon" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C90A1D]/10 to-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="lg:text-[30px] text-[26px] font-bold text-[#C90A1D] mb-4">
            Choose Your TRADFIT Experience
          </h1>
          <p className=" text-[#C90A1D]/80 lg:w-[520px] w-auto mx-auto">
            Select the perfect ticket type for your indigenous dance aerobics
            journey. All options guarantee an unforgettable cultural fitness
            experience!
          </p>
        </div>

        {/* Ticket Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Regular Ticket */}
          <div className="shadow-xl border border-[#C90A1D]/30 rounded-lg bg-white relative">
            <div className="bg-[#C90A1D] text-white text-center p-6 rounded-t-lg">
              <div className="flex justify-center mb-2">
                <span className="text-2xl" aria-label="Users icon">
                  👥
                </span>
              </div>
              <h2 className="text-2xl font-bold">Regular Ticket</h2>
              <p className="text-white/80 text-sm">
                Perfect for fitness enthusiasts and cultural explorers
              </p>
              <div className="mt-4">
                <span className="bg-white/20 text-white text-lg px-4 py-2 rounded-md">
                  ₦3,000
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-[#C90A1D] mb-4">
                  What&apos;s Included:
                </h3>
                {regularBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C90A1D]/10 rounded-full flex items-center justify-center">
                      <span className="text-sm" aria-label={benefit.ariaLabel}>
                        {benefit.emoji}
                      </span>
                    </div>
                    <span className="text-[#C90A1D]/80 text-sm">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/auth/register"
                className="block w-full mt-6 bg-[#C90A1D] hover:bg-[#A30818] text-white text-lg py-3 text-center rounded-md font-semibold"
              >
                Register Now - ₦3,000
              </Link>
            </div>
          </div>

          {/* Regular with Cloth Ticket */}
          <div className="shadow-xl border border-[#C90A1D]/30 rounded-lg bg-white relative transform lg:scale-105 z-10">
            {/* Popular Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-[#C90A1D] text-white font-bold px-3 py-1 rounded-md text-sm">
                MOST POPULAR
              </span>
            </div>

            <div className="bg-gradient-to-r from-[#C90A1D] to-[#A30818] text-white text-center p-6 rounded-t-lg">
              <div className="flex justify-center mb-2">
                <span className="text-2xl" aria-label="T-shirt icon">
                  👕
                </span>
              </div>
              <h2 className="text-2xl font-bold">Regular with Cloth</h2>
              <p className="text-white/80 text-sm">
                Complete experience with custom TRADFIT clothing
              </p>
              <div className="mt-4">
                <span className="bg-white/20 text-white text-lg px-4 py-2 rounded-md">
                  ₦8,000
                </span>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-b from-[#C90A1D]/5 to-white">
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-[#C90A1D] mb-4">
                  What&apos;s Included:
                </h3>
                {regularWithClothBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C90A1D]/10 rounded-full flex items-center justify-center">
                      <span className="text-sm" aria-label={benefit.ariaLabel}>
                        {benefit.emoji}
                      </span>
                    </div>
                    <span className="text-[#C90A1D]/80 text-sm">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-[#C90A1D]/10 border border-[#C90A1D]/30 rounded-lg p-3 mb-4">
                <p className="text-[#C90A1D] font-medium text-center text-sm">
                  ✨ Get custom TRADFIT clothing + All Regular benefits
                </p>
              </div>

              <Link
                href="/auth/register"
                className="block w-full bg-[#C90A1D] hover:bg-[#A30818] text-white text-lg py-3 text-center rounded-md font-semibold"
              >
                Get Custom Cloth - ₦8,000
              </Link>
            </div>
          </div>

          {/* VIP Ticket */}
          <div className="shadow-xl border border-[#C90A1D]/30 rounded-lg bg-white relative overflow-hidden">
            {/* VIP Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-gradient-to-r from-[#C90A1D] to-[#A30818] text-white font-bold px-3 py-1 rounded-md">
                PREMIUM
              </span>
            </div>

            <div className="bg-gradient-to-r from-[#C90A1D] to-[#A30818] text-white text-center p-6 rounded-t-lg relative">
              <div className="flex justify-center mb-2">
                <span className="text-2xl" aria-label="Crown icon">
                  👑
                </span>
              </div>
              <h2 className="text-2xl font-bold">VIP Experience</h2>
              <p className="text-white/80 text-sm">
                Ultimate luxury with exclusive surprises
              </p>
              <div className="mt-4">
                <span className="bg-white/20 text-white text-lg px-4 py-2 rounded-md">
                  ₦20,000
                </span>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-b from-[#C90A1D]/5 to-white">
              {/* VIP Anticipation Section - No specific benefits listed */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-[#C90A1D] mb-4 flex items-center gap-2">
                  <span className="text-sm" aria-label="Star icon">
                    ⭐
                  </span>{" "}
                  The Ultimate Premium Experience:
                </h3>

                {/* Mystery & Anticipation Elements */}
                <div className="border-2 border-dashed border-[#C90A1D]/30 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <span className="text-2xl" aria-label="Mystery icon">
                      🎭
                    </span>
                  </div>
                  <h4 className="text-[#C90A1D] font-bold text-lg mb-2">
                    Exclusive VIP Journey
                  </h4>
                  <p className="text-[#C90A1D]/70 text-sm mb-4">
                    Experience the pinnacle of luxury with curated surprises and
                    premium treatment beyond expectations
                  </p>

                  <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="flex flex-col items-center">
                      <span className="text-sm" aria-label="Sparkle icon">
                        ✨
                      </span>
                      <span className="text-[#C90A1D]/60 text-xs mt-1">
                        Premium
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-sm" aria-label="Gift icon">
                        🎁
                      </span>
                      <span className="text-[#C90A1D]/60 text-xs mt-1">
                        Exclusive
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-sm" aria-label="Star icon">
                        💫
                      </span>
                      <span className="text-[#C90A1D]/60 text-xs mt-1">
                        Luxury
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#C90A1D]/5 rounded-lg p-4 border border-[#C90A1D]/20">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C90A1D]/10 rounded-full flex items-center justify-center">
                      <span className="text-sm" aria-label="Lock icon">
                        🔒
                      </span>
                    </div>
                    <div>
                      <span className="text-[#C90A1D] font-semibold text-sm">
                        VIP-Exclusive Content
                      </span>
                      <p className="text-[#C90A1D]/60 text-xs">
                        Details revealed upon registration
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#C90A1D] to-[#A30818] text-white rounded-lg p-4 mb-4">
                <p className="font-bold text-center text-sm">
                  ✨ LIMITED VIP SPOTS - Ultimate Cultural Experience!
                </p>
              </div>

              <Link
                href="/auth/register"
                className="block w-full bg-gradient-to-r from-[#C90A1D] to-[#A30818] hover:from-[#A30818] hover:to-[#C90A1D] text-white text-lg py-3 text-center rounded-md font-semibold shadow-lg"
              >
                Go VIP - ₦20,000
              </Link>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="shadow-lg border border-[#C90A1D]/30 rounded-lg bg-white">
            <div className="text-center p-6">
              <h2 className="text-2xl font-bold text-[#C90A1D]">
                Event Details
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="font-semibold text-[#C90A1D] mb-2">
                    Duration
                  </h3>
                  <p className="text-[#C90A1D]/80">Full Day Event</p>
                  <p className="text-sm text-[#C90A1D]/60">4:00 PM</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#C90A1D] mb-2">
                    Location
                  </h3>
                  <p className="text-[#C90A1D]/80">Stay Tuned!</p>
                  <p className="text-sm text-[#C90A1D]/60">Ilorin, Nigeria</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#C90A1D] mb-2">
                    Capacity
                  </h3>
                  <p className="text-[#C90A1D]/80">Limited Spots</p>
                  <p className="text-sm text-[#C90A1D]/60">
                    Register early to secure your place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#C90A1D] text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Can I upgrade my ticket later?",
                answer:
                  "Yes, you can upgrade from Regular to VIP based on availability. Contact our team for assistance.",
              },
              {
                question: "What's included in the custom cloth?",
                answer:
                  "You'll receive a premium customized TRADFIT outfit specially designed for the event activities.",
              },
              {
                question: "Is there an age limit?",
                answer:
                  "The event is designed for ages 18 and above. All fitness levels are welcome!",
              },
              {
                question: "Refund policy?",
                answer:
                  "Full refunds available up to 7 days before the event. See our terms and conditions for details.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-[#C90A1D]/30 rounded-lg bg-white p-6"
              >
                <h3 className="font-semibold text-[#C90A1D] mb-2">
                  {faq.question}
                </h3>
                <p className="text-[#C90A1D]/80 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
