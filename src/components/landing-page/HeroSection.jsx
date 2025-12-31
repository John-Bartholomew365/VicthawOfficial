"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const slider = [
    {
      id: "football",
      firstText: "We united the",
      secondText: "community",
      thirdText: "through soccer",
      subTitle:
        "Victhawofficial Unity Cup 1.0 was more than just a tournament - it was a movement! We brought players together to compete and fans to cheer them on, celebrating the love of football.",
      image: "/thrill.jpeg",
      ctaPrimary: {
        text: "Tournament Highlights",
        link: "/tournament/results",
      },
      ctaSecondary: {
        text: "View Prizes",
        link: "/tournament/prizes",
      },
      accentColor: "#C81E23",
    },
    {
      id: "tradfit",
      firstText: "TRADFIT RHYTHMS",
      secondText: "Move to the Beat",
      thirdText: "of Your Heritage",
      subTitle:
        "A cultural revival, celebration of indigenous heritage, and wellness movement rolled into one. Experience high-energy aerobics merged with rich African/indigenous dance traditions.",
      image: "/tradfit.jpeg",
      ctaPrimary: {
        text: "Event Highlights",
        link: "/tradfit/gallery",
      },
      ctaSecondary: {
        text: "Learn More",
        link: "/tradfit/info",
      },
      accentColor: "#C90A1D",
    },
  ];

  const carousel = slider[activeSlide];
  const fullText =
    carousel.secondText + (carousel.thirdText ? " " + carousel.thirdText : "");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for the TradFit slide only
  useEffect(() => {
    if (carousel.id === "tradfit") {
      setIsTyping(true);
      setDisplayText("");

      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setDisplayText(fullText.substring(0, i + 1));
          i++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 80);

      return () => clearInterval(typingInterval);
    } else {
      setDisplayText(fullText);
      setIsTyping(false);
    }
  }, [activeSlide, fullText, carousel.id]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-0">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {/* Image Section */}
          <div
            className="w-full lg:w-[45%] order-1 lg:order-2 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="w-full max-w-md lg:max-w-lg h-64 sm:h-80 md:h-96 lg:h-[400px] relative">
              <div
                className="absolute -inset-2 border-2 rounded-lg opacity-30 transition-all duration-700"
                style={{ borderColor: carousel.accentColor }}
              ></div>
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  key={carousel.image}
                  src={carousel.image}
                  alt={`${carousel.id} event`}
                  fill
                  className="object-cover relative z-10"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div
            className="w-full lg:w-[55%] order-2 lg:order-1 text-center lg:text-left space-y-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {carousel.id === "football" ? (
              <>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold leading-tight tracking-tight">
                  <span
                    className="block opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {carousel.firstText}
                  </span>
                  <span
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-red-600"
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    {carousel.secondText}
                  </span>
                  <span
                    className="block opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  >
                    {carousel.thirdText}
                  </span>
                </h1>
              </>
            ) : (
              <>
                <h1 className="font-bold text-gray-900 leading-tight tracking-tight">
                  <span className="block text-[#C90A1D] text-2xl sm:text-3xl md:text-4xl lg:text-[44px]">
                    {carousel.firstText}
                  </span>
                  <span className="block lg:h-6 h-4 text-gray-800 lg:mt-5 mt-4 text-[19px] lg:text-[27px]">
                    {displayText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </span>
                </h1>
              </>
            )}

            <p
              className="text-gray-600 tracking-tight leading-tight mt-4 lg:w-[460px] w-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {carousel.subTitle}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Link
                href={carousel.ctaPrimary.link}
                className="inline-block px-6 sm:px-8 py-2 rounded-full text-center font-semibold transform hover:scale-105 transition-all duration-300 shadow-md"
                style={{
                  backgroundColor: carousel.accentColor,
                  color: "white",
                }}
              >
                {carousel.ctaPrimary.text}
              </Link>
              <Link
                href={carousel.ctaSecondary.link}
                className="inline-block border-2 px-6 sm:px-8 py-2 rounded-full text-center font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                style={{
                  borderColor: carousel.accentColor,
                  color: carousel.accentColor,
                }}
              >
                {carousel.ctaSecondary.text}
              </Link>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center lg:justify-start space-x-3 mt-8">
              {slider.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`rounded-full w-3 h-3 transition-all duration-300 ${
                    activeSlide === index ? "scale-125" : "scale-100"
                  }`}
                  style={{
                    backgroundColor:
                      activeSlide === index
                        ? slide.accentColor
                        : "rgba(0,0,0,0.2)",
                  }}
                  aria-label={`Show ${slide.id} slide`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;