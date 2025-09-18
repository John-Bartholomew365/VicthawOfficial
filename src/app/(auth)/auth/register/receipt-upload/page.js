"use client";
import PageLoader from "@/components/PageLoader";
import ReceiptUploadPage from "@/components/tradfit/register/receipt-upload/Receipt";
import { Howl } from "howler";
import { useEffect, useRef, useState } from "react";

const Page = () => {
  const soundRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize Howler sound - same as main page
    soundRef.current = new Howl({
      src: ["/bg-song.mp3"],
      loop: true,
      volume: 0.5,
      autoplay: true,
      mute: true, // Start muted to increase autoplay chances
      preload: true, // Preload the audio file
      onload: () => {
        console.log("Audio file loaded successfully");
      },
      onloaderror: (id, err) => {
        console.error("Load error:", err);
        setError("Failed to load audio file. Check file path or format.");
      },
      onplay: () => {
        console.log("Audio started playing");
        // Unmute after a short delay
        setTimeout(() => {
          soundRef.current.mute(false);
          console.log("Audio unmuted");
        }, 1000);
      },
      onplayerror: (id, err) => {
        console.error("Play error:", err);
        setError("Auto-play blocked by browser. Trying fallback...");
        // Fallback: Try unmuted playback
        soundRef.current.mute(false);
        soundRef.current.play();
      },
    });

    // Cleanup: Stop audio on unmount
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.unload();
        console.log("Audio stopped and unloaded");
      }
    };
  }, []);

  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black tracking-tight">
        {error && (
          <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
            {error}
          </div>
        )}
        <div>
          <ReceiptUploadPage />
        </div>
      </div>
    </PageLoader>
  );
};

export default Page;
