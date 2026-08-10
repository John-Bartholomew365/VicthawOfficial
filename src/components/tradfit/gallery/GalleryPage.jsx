"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Picture data with descriptions
const pictureData = [
  {
    id: 1,
    src: "/tradfit1.jpeg",
    alt: "Opening ceremony drummers",
    description:
      "The powerful opening ceremony with traditional drummers setting the energy for the day",
    category: "cultural",
    featured: true,
  },
  {
    id: 2,
    src: "/tradfit2.jpeg",
    alt: "Group aerobic session",
    description:
      "300+ participants moving in unison to the beat of their heritage",
    category: "fitness",
    featured: true,
  },
  {
    id: 3,
    src: "/tradfit3.jpeg",
    alt: "Instructor leading session",
    description:
      "Our certified instructors blending traditional dance moves with aerobic exercises",
    category: "fitness",
  },
  {
    id: 4,
    src: "/tradfit4.jpeg",
    alt: "Traditional attire showcase",
    description:
      "Vibrant Ankara and Kente fabrics in motion during the fitness sessions",
    category: "fashion",
  },
  {
    id: 5,
    src: "/tradfit5.jpeg",
    alt: "Drum circle participation",
    description:
      "Participants joining the drum circle, connecting with ancestral rhythms",
    category: "cultural",
    featured: true,
  },
  {
    id: 6,
    src: "/tradfit6.jpeg",
    alt: "Wellness booth",
    description:
      "Traditional herbs and wellness consultations at our indigenous wellness booths",
    category: "wellness",
  },
  {
    id: 7,
    src: "/tradfit7.jpeg",
    alt: "Food stall",
    description:
      "Traditional Nigerian cuisine including Zobo and millet snacks fueling participants",
    category: "food",
  },
  {
    id: 8,
    src: "/tradfit8.jpeg",
    alt: "Cultural fashion showcase",
    description:
      "Indigenous athletic wear fashion show celebrating contemporary African design",
    category: "fashion",
    featured: true,
  },
  {
    id: 9,
    src: "/tradfit9.jpeg",
    alt: "Spoken word performance",
    description:
      "Powerful spoken word interlude connecting movement with cultural storytelling",
    category: "cultural",
  },
  {
    id: 10,
    src: "/tradfit10.jpeg",
    alt: "Aerial group shot",
    description:
      "Aerial view showing the scale and energy of our cultural fitness movement",
    category: "fitness",
  },
  {
    id: 11,
    src: "/tradfit11.jpeg",
    alt: "Traditional instrument showcase",
    description:
      "Live performances featuring indigenous instruments from across Africa",
    category: "cultural",
  },
  {
    id: 12,
    src: "/tradfit12.jpeg",
    alt: "Community dance",
    description:
      "Multi-generational participants celebrating unity through traditional dance",
    category: "community",
    featured: true,
  },
  {
    id: 13,
    src: "/tradfit13.jpeg",
    alt: "Decor details",
    description:
      "Intricate Adire and raffia decorations creating an authentic cultural ambience",
    category: "cultural",
  },
  {
    id: 14,
    src: "/tradfit14.jpeg",
    alt: "Fitness challenge",
    description:
      "High-energy fitness challenges infused with traditional dance elements",
    category: "fitness",
  },
  {
    id: 15,
    src: "/tradfit15.jpeg",
    alt: "Cultural face painting",
    description:
      "Traditional Adinkra symbols and face painting adding to the cultural experience",
    category: "cultural",
  },
  {
    id: 16,
    src: "/tradfit16.jpeg",
    alt: "Vendor market",
    description:
      "Local artisans and businesses showcasing indigenous products and services",
    category: "community",
  },
  {
    id: 17,
    src: "/tradfit17.jpeg",
    alt: "Sunset session",
    description:
      "Magical evening session as the sun sets on our cultural celebration",
    category: "fitness",
    featured: true,
  },
  {
    id: 18,
    src: "/tradfit18.jpeg",
    alt: "Children participation",
    description:
      "Young ones learning traditional dances and connecting with their heritage",
    category: "community",
  },
  {
    id: 19,
    src: "/tradfit19.jpeg",
    alt: "Partner activities",
    description:
      "Partner workouts strengthening community bonds through synchronized movement",
    category: "fitness",
  },
  {
    id: 20,
    src: "/tradfit20.jpeg",
    alt: "Cool down session",
    description:
      "Gentle cool down with traditional stretching techniques and breathing exercises",
    category: "wellness",
    featured: true,
  },
  {
    id: 21,
    src: "/tradfit21.jpeg",
    alt: "Cultural workshop",
    description:
      "Interactive workshops on the history and significance of traditional dances",
    category: "cultural",
  },
  {
    id: 22,
    src: "/tradfit22.jpeg",
    alt: "Sponsor activations",
    description:
      "Brands engaging with participants through culturally-aligned activations",
    category: "community",
  },
  {
    id: 23,
    src: "/tradfit23.jpeg",
    alt: "Energy shot",
    description:
      "Pure joy and energy radiating from every participant throughout the event",
    category: "fitness",
  },
  {
    id: 24,
    src: "/tradfit24.jpeg",
    alt: "Traditional games",
    description:
      "Indigenous games and activities promoting fun and fitness simultaneously",
    category: "community",
  },
  {
    id: 25,
    src: "/tradfit25.jpeg",
    alt: "Community leaders",
    description:
      "Elders and community leaders blessing and participating in the event",
    category: "community",
  },
  {
    id: 26,
    src: "/tradfit26.jpeg",
    alt: "Meditation session",
    description:
      "Cultural mindfulness and meditation sessions for holistic wellness",
    category: "wellness",
  },
  {
    id: 27,
    src: "/tradfit27.jpeg",
    alt: "Final celebration",
    description:
      "Grand finale with all participants celebrating their cultural fitness journey",
    category: "fitness",
    featured: true,
  },
  {
    id: 28,
    src: "/tradfit28.jpeg",
    alt: "Team photo",
    description:
      "The TradFit Rhythms team - the heartbeat behind this cultural movement",
    category: "community",
  },
];

// Video data - Using your actual videos from public folder
const videoData = [
  {
    id: 1,
    src: "/highlight1.mp4",
    title: "THE ENERGY - Full Event Highlights",
    description:
      "Experience the raw energy, culture, and community of TradFit Rhythms in this 4-minute highlight reel",
    duration: "1:13",
  },
//   {
//     id: 2,
//     src: "/highlight2.mp4",
//     title: "CULTURE IN MOTION - Traditional Moments",
//     description:
//       "Special cultural moments and traditional performances from the event that will give you chills",
//     duration: "3:15",
//   },
];

// Category data
const categories = [
  { id: "all", name: "All Photos" },
  { id: "cultural", name: "Cultural Moments" },
  { id: "fitness", name: "Fitness Sessions" },
  { id: "community", name: "Community" },
  { id: "wellness", name: "Wellness" },
  { id: "fashion", name: "Fashion" },
  { id: "food", name: "Food & Drinks" },
];

// Cultural quotes to display
const culturalQuotes = [
  "The rhythm of our ancestors beats in our hearts during every TradFit session",
  "Where tradition meets sweat, culture meets fitness",
  "300+ hearts beating as one to the rhythm of heritage",
  "We don't just exercise - we celebrate our culture through movement",
  "Every dance move tells a story, every sweat drop honors our ancestors",
  "Fitness that connects you to your roots and community",
  "The drum speaks, the body moves, the spirit soars",
  "Rediscovering wellness through indigenous rhythms and movements",
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeQuote, setActiveQuote] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredImage, setHoveredImage] = useState(null);
  const galleryRef = useRef(null);
  const videoRefs = useRef([]);
  const featuredImages = pictureData.filter((pic) => pic.featured);

  const filteredPictures =
    selectedCategory === "all"
      ? pictureData
      : pictureData.filter((picture) => picture.category === selectedCategory);

  const selectedPictureData = selectedImage
    ? pictureData.find((picture) => picture.id === selectedImage)
    : null;

  // Auto-rotate cultural quotes
  useEffect(() => {
    if (!isAutoPlaying) return;

    const quoteInterval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % culturalQuotes.length);
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, [isAutoPlaying]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "Escape") setSelectedImage(null);
        if (e.key === "ArrowRight") {
          const currentIndex = pictureData.findIndex(
            (p) => p.id === selectedImage
          );
          const nextIndex = (currentIndex + 1) % pictureData.length;
          setSelectedImage(pictureData[nextIndex].id);
        }
        if (e.key === "ArrowLeft") {
          const currentIndex = pictureData.findIndex(
            (p) => p.id === selectedImage
          );
          const prevIndex =
            currentIndex === 0 ? pictureData.length - 1 : currentIndex - 1;
          setSelectedImage(pictureData[prevIndex].id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const handleShare = async (imageId) => {
    const image = pictureData.find((p) => p.id === imageId);
    const shareText = `Experience TradFit Rhythms: ${image.description}. Join the cultural fitness movement!`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "TradFit Rhythms Gallery",
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(shareText);
      alert(
        "Image description copied to clipboard! Share it with your community."
      );
    }
  };

  const playVideo = (videoIndex) => {
    if (videoRefs.current[videoIndex]) {
      videoRefs.current[videoIndex].play();
    }
  };

  const shareVideo = (video) => {
    const shareText = `Watch ${video.title}: ${video.description}. Experience TradFit Rhythms!`;
    
    if (navigator.share) {
      try {
        navigator.share({
          title: video.title,
          text: shareText,
          url: video.src,
        });
      } catch (err) {
        console.log("Error sharing video:", err);
        navigator.clipboard.writeText(shareText);
        alert("Video link copied to clipboard!");
      }
    } else {
      navigator.clipboard.writeText(shareText);
      alert("Video link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .gradient-overlay {
          background: linear-gradient(135deg, #c81e23 0%, #8b0000 100%);
        }
        .image-hover-effect {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .image-hover-effect:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 20px 40px rgba(200, 30, 35, 0.3);
        }
        .rhythm-dot {
          animation: pulse 2s infinite;
        }
        .rhythm-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .rhythm-dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        .scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: ${scrollProgress}%;
          height: 4px;
          background: #c81e23;
          z-index: 1000;
          transition: width 0.1s ease;
        }
        video {
          border-radius: 12px;
        }
        video::-webkit-media-controls-panel {
          background: linear-gradient(transparent, rgba(0,0,0,0.7));
        }
      `}</style>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar"></div>

      {/* Hero Section with dynamic elements */}
      <section className="relative min-h-screen h-[100vh] overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/tradfit.jpeg"
            alt="Tradfit Rhythms Gallery Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>

        {/* Animated rhythm dots */}
        <div className="absolute left-[10%] top-[20%] sm:left-1/4 sm:top-1/4">
          <div className="flex space-x-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rhythm-dot w-2 h-2 sm:w-2 sm:h-2 rounded-full bg-white/60 backdrop-blur-sm"
              ></div>
            ))}
          </div>
        </div>

        <div className="absolute right-[10%] bottom-[20%] sm:right-1/4 sm:bottom-1/4">
          <div className="flex space-x-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rhythm-dot w-3 h-3 sm:w-3 sm:h-3 rounded-full bg-white/50 backdrop-blur-sm"
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-4 sm:mb-6">
            <div className="inline-block rounded-full bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm border border-white/20">
              <span className="text-xs sm:text-sm font-bold tracking-widest">
                IMMERSIVE GALLERY
              </span>
            </div>
          </div>

          <h1 className="mb-4 sm:mb-6 px-2">
            <span className="block text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight">
              TRADFIT
            </span>
            <span className="block text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight">
              RHYTHMS
            </span>
            <span className="block text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 sm:mt-4 tracking-wide">
              GALLERY
            </span>
          </h1>

          {/* Dynamic Quote Display */}
          <div
            className="mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-4 cursor-pointer"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <p className="lg:text-[20px] text-[15px] italic opacity-95 leading-relaxed transition-all duration-500 font-medium">
              &quot;{culturalQuotes[activeQuote]}&quot;
            </p>
            <div className="mt-3 sm:mt-4 flex justify-center space-x-1">
              {culturalQuotes.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === activeQuote
                      ? "w-6 sm:w-8 bg-white"
                      : "w-2 bg-white/40"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* <div className="text-sm sm:text-base md:text-lg font-medium mt-2 sm:mt-4">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <span className="inline-block">SCROLL TO FEEL THE ENERGY •</span>
              <span className="inline-block">28 MOMENTS •</span>
              <span className="inline-block">2 HIGHLIGHTS •</span>
              <span className="inline-block">1 VIBRANT COMMUNITY</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* Featured Images Grid - Interactive Preview */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 lg:text-4xl text-[30px] font-black text-gray-900 md:text-5xl">
              FEATURED MOMENTS
            </h2>
            <p className="mx-auto max-w-2xl lg:text-lg text-[16px] text-gray-600">
              The most powerful captures from our cultural fitness movement
            </p>
            <div className="mx-auto mt-4 h-1 w-32 bg-[#C81E23]"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredImages.map((image, index) => (
              <div
                key={image.id}
                className="group animate-slide-up image-hover-effect cursor-pointer overflow-hidden rounded-2xl bg-white shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.id)}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-all duration-700 ${
                      hoveredImage === image.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      hoveredImage === image.id ? "bg-black/40" : "bg-black/20"
                    }`}
                  ></div>

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      hoveredImage === image.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                      <span className="text-lg font-bold text-white">
                        VIEW FULL IMAGE
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-white">
                        #{image.id.toString().padStart(2, "0")}
                      </span>
                      <span className="rounded-full bg-[#C81E23] px-4 py-1 text-sm font-bold text-white">
                        FEATURED
                      </span>
                    </div>
                    <p className="mt-2 text-white/90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Video Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="inline-block rounded-full bg-[#C81E23]/10 px-6 py-3 mb-4">
              <span className="text-sm font-bold text-[#C81E23] tracking-widest">
                WATCH THE ENERGY
              </span>
            </div>
            <h2 className="lg:text-4xl text-[30px] font-black text-gray-900 md:text-5xl">
              CULTURE IN MOTION
            </h2>
            <p className="mx-auto mt-4 max-w-2xl lg:text-lg text-[16px] text-gray-600">
              Experience the rhythm, energy, and community spirit through these highlight reels
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            {videoData.map((video, index) => (
              <div
                key={video.id}
                className="animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl">
                  {/* Video Container with Play Overlay */}
                  <div className="relative aspect-video bg-gray-900">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      controls
                      className="h-full w-full object-cover"
                      preload="metadata"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Custom Controls Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="h-2 w-2 rounded-full bg-white"
                            ></div>
                          ))}
                        </div>
                        <span className="text-sm font-bold text-white">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="bg-white p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="lg:text-2xl text-[19px] font-black text-gray-900">
                        {video.title}
                      </h3>
                      <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-bold text-gray-700">
                        {video.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{video.description}</p>

                    <div className="lg:flex block items-center justify-between">
                      <button
                        onClick={() => playVideo(index)}
                        className="rounded-full bg-[#C81E23] px-6 py-3 font-bold text-white transition-all hover:scale-105 lg:w-auto w-full"
                      >
                        PLAY HIGHLIGHT
                      </button>
                      <button
                        onClick={() => shareVideo(video)}
                        className="rounded-full border-2 border-[#C81E23] bg-transparent px-6 py-3 font-bold text-[#C81E23] transition-all hover:bg-[#C81E23]/10 lg:w-auto w-full lg:mt-0 mt-5"
                      >
                        SHARE VIDEO
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Photo Gallery with Filters */}
      <section
        className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50"
        ref={galleryRef}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 lg:text-4xl text-[30px] font-black text-gray-900 md:text-5xl">
              EXPLORE THE JOURNEY
            </h2>
            <p className="mx-auto max-w-2xl lg:text-lg text-[16px] text-gray-600">
              Filter through moments that captured the essence of our cultural fitness movement
            </p>
            <div className="mx-auto mt-4 h-1 w-24 bg-[#C81E23]"></div>
          </div>

          {/* Interactive Filter Buttons with Counts */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((category, index) => {
                const count =
                  category.id === "all"
                    ? pictureData.length
                    : pictureData.filter((p) => p.category === category.id)
                        .length;

                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group relative rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 md:px-8 md:py-4 md:text-base ${
                      selectedCategory === category.id
                        ? "bg-[#C81E23] text-white scale-105"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    } animate-fade-in shadow-lg hover:shadow-xl`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {category.name}
                    <span
                      className={`absolute -top-2 -right-2 rounded-full px-2 py-1 text-xs font-black ${
                        selectedCategory === category.id
                          ? "bg-white text-[#C81E23]"
                          : "bg-[#C81E23] text-white"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Animated Photo Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPictures.map((picture, index) => (
              <div
                key={picture.id}
                className="group animate-fade-in image-hover-effect cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(picture.id)}
                onMouseEnter={() => setHoveredImage(picture.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                {/* Image with Interactive Overlay */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={picture.src}
                    alt={picture.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className={`object-cover transition-all duration-700 ${
                      hoveredImage === picture.id ? "scale-110" : "scale-100"
                    }`}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 ${
                      hoveredImage === picture.id ? "opacity-100" : "opacity-80"
                    }`}
                  ></div>

                  {/* Quick Actions on Hover */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${
                      hoveredImage === picture.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(picture.id);
                      }}
                      className="rounded-full bg-white/20 px-6 py-3 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/30"
                    >
                      SHARE
                    </button>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      #{picture.id.toString().padStart(2, "0")}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold transition-all duration-300 ${
                        hoveredImage === picture.id
                          ? "bg-[#C81E23] text-white"
                          : "bg-white/20 text-white/90 backdrop-blur-sm"
                      }`}
                    >
                      {categories.find((c) => c.id === picture.category)?.name}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white/90 line-clamp-2">
                      {picture.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Stats & Info */}
          <div className="mt-16 animate-slide-up rounded-2xl bg-gradient-to-r from-[#C81E23] to-[#8B0000] p-8 text-center text-white shadow-2xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                {
                  value: "300+",
                  label: "VIBRANT PARTICIPANTS",
                  sublabel: "Moving in unison",
                },
                {
                  value: "28",
                  label: "CAPTURED MOMENTS",
                  sublabel: "Each telling a story",
                },
                {
                  value: "8+",
                  label: "HOURS OF RHYTHM",
                  sublabel: "Non-stop energy",
                },
                {
                  value: "∞",
                  label: "COMMUNITY SPIRIT",
                  sublabel: "Unmeasurable joy",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-black md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-bold uppercase tracking-widest">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs opacity-80">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal with Navigation */}
      {selectedImage && selectedPictureData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Controls */}
            <div className="absolute top-4 left-4 right-4 z-10 lg:flex block items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    const currentIndex = pictureData.findIndex(
                      (p) => p.id === selectedImage
                    );
                    const prevIndex =
                      currentIndex === 0
                        ? pictureData.length - 1
                        : currentIndex - 1;
                    setSelectedImage(pictureData[prevIndex].id);
                  }}
                  className="rounded-full bg-white/20 p-4 text-white backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  ←
                </button>
                <button
                  onClick={() => {
                    const currentIndex = pictureData.findIndex(
                      (p) => p.id === selectedImage
                    );
                    const nextIndex = (currentIndex + 1) % pictureData.length;
                    setSelectedImage(pictureData[nextIndex].id);
                  }}
                  className="rounded-full bg-white/20 p-4 text-white backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  →
                </button>
              </div>

              <div className="flex items-center justify-between space-x-4 lg:mt-0 mt-4">
                <button
                  onClick={() => handleShare(selectedImage)}
                  className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  SHARE THIS MOMENT
                </button>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="rounded-full bg-[#C81E23] p-3 font-bold text-white transition-all hover:bg-[#a0181c]"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[70vh] min-h-[400px] w-full">
              <Image
                src={selectedPictureData.src}
                alt={selectedPictureData.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Image Info */}
            <div className="border-t border-white/20 bg-black p-6">
              <div className="lg:flex block items-start justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white">
                    MOMENT #{selectedImage.toString().padStart(2, "0")}
                  </h3>
                  <p className="mt-2 lg:text-lg text-[14px] text-white/90">
                    {selectedPictureData.description}
                  </p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className="rounded-full bg-[#C81E23] px-4 py-2 text-sm font-bold text-white mt-2">
                    {
                      categories.find(
                        (c) => c.id === selectedPictureData.category
                      )?.name
                    }
                  </span>
                  <div className="text-sm text-white/60">
                    Use ← → keys to navigate • ESC to close
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Immersive CTA Section */}
      <section className="relative py-24 px-4 md:px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C81E23] to-transparent"></div>

        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-block animate-pulse-slow rounded-full bg-[#C81E23]/20 p-4">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-2 w-2 rounded-full bg-[#C81E23]"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <h2 className="mb-6 lg:text-4xl text-[28px] font-black text-gray-900 md:text-6xl">
              FELT THE ENERGY YET?
            </h2>

            <p className="mx-auto mb-10 max-w-2xl lg:text-[18px] text-[16px] text-gray-600">
              This is just a glimpse. The real magic happens when you&apos;re moving with 300+ others to the beat of your heritage.
            </p>

            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              {/* <button
                onClick={() => (window.location.href = "/register")}
                className="group relative rounded-full bg-gradient-to-r from-[#C81E23] to-[#8B0000] px-10 py-5 text-lg font-black text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl"
              >
                <span className="relative z-10">JOIN NEXT EVENT →</span>
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </button> */}

              <button
                onClick={() => {
                  const randomImage =
                    pictureData[Math.floor(Math.random() * pictureData.length)]
                      .id;
                  setSelectedImage(randomImage);
                }}
                className="rounded-full border-3 border-[#C81E23] bg-transparent px-10 py-5 text-lg font-black text-[#C81E23] transition-all duration-300 hover:bg-[#C81E23]/10"
              >
                SHOW ME RANDOM MOMENT
              </button>
            </div>

            <div className="mt-12 text-sm text-gray-500">
              <p className="font-bold">BE THE NEXT STORY WE TELL</p>
              <p className="mt-2 italic">
                Your photo could be here in our next gallery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center">
              <div className="text-3xl font-black text-gray-900 text-center">
                TRADFIT RHYTHMS
              </div>
              <div className="mt-2 text-gray-600 font-medium">
                Move to the Beat of Your Heritage
              </div>
              <div className="mt-4">
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-1 w-1 rounded-full bg-[#C81E23]"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            {/* <div className="inline-block rounded-full bg-gray-100 px-6 py-3">
              <p className="text-sm font-bold text-gray-700">
                GALLERY VIEWED BY {Math.floor(Math.random() * 1000) + 300} PEOPLE TODAY
              </p>
            </div> */}

            <div className="mt-8 text-sm text-gray-500">
              <p className="mt-2 font-medium">
                Celebrating Indigenous Heritage Through Fitness
              </p>
              <p className="my-1 text-xs text-gray-400">
                Cultural Revival • Wellness Movement • Community Connection
              </p>
              <p>
                © {new Date().getFullYear()} TradFit Rhythms. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}