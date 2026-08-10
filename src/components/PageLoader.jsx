"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <Image
              src="/victhaw-logo.svg"
              alt="logo"
              fill
              sizes="96px"
              className="rounded-full animate-rolling-spin"
            />
          </div>
          <div className="text-gray-700 font-medium text-lg">
            Loading
            <span className="inline-block animate-dots">
              <span className="animate-dot-1">.</span>
              <span className="animate-dot-2">.</span>
              <span className="animate-dot-3">.</span>
            </span>
          </div>
        </div>
        
        <style jsx global>{`
          @keyframes rolling-spin {
            0% {
              transform: rotate(0deg) scale(1);
            }
            25% {
              transform: rotate(90deg) scale(1.2);
            }
            50% {
              transform: rotate(180deg) scale(1.4);
            }
            75% {
              transform: rotate(270deg) scale(1.2);
            }
            100% {
              transform: rotate(360deg) scale(1);
            }
          }
          
          @keyframes dot-bounce {
            0%, 100% {
              transform: translateY(0);
              opacity: 0.4;
            }
            50% {
              transform: translateY(-5px);
              opacity: 1;
            }
          }
          
          .animate-rolling-spin {
            animation: rolling-spin 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
          }
          
          .animate-dot-1 {
            animation: dot-bounce 1.5s infinite 0s;
            display: inline-block;
          }
          
          .animate-dot-2 {
            animation: dot-bounce 1.5s infinite 0.2s;
            display: inline-block;
          }
          
          .animate-dot-3 {
            animation: dot-bounce 1.5s infinite 0.4s;
            display: inline-block;
          }
        `}</style>
      </div>
    );
  }

  return <div className="page-transition">{children}</div>;
};

export default PageLoader;