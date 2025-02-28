"use client";
import React, { useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";

const SetupTeam = () => {
  // State to manage player profile photos
  const [playerPhotos, setPlayerPhotos] = useState(Array(18).fill(null));
  const [coachPhoto, setCoachPhoto] = useState(null);
  const [assistantCoachPhoto, setAssistantCoachPhoto] = useState(null);

  // State to manage payment review notification visibility
  const [showPaymentReview, setShowPaymentReview] = useState(true);

  // Player names
  const playerNames = [
    "Chinedu Okoro",
    "Aisha Bello",
    "Emeka Nwankwo",
    "Fatima Ahmed",
    "Oluwatobi Adeyemi",
    "Ngozi Eze",
    "Ibrahim Musa",
    "Chioma Okafor",
    "Tunde Balogun",
    "Amina Suleiman",
    "Segun Adebayo",
    "Zainab Ibrahim",
    "Kunle Oladele",
    "Halima Usman",
    "Femi Ogunleye",
    "Binta Mohammed",
    "Yusuf Abdullahi",
    "Grace Okonkwo",
  ];

  // Function to handle image upload
  const handleImageUpload = (index, setImage) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (setImage === setPlayerPhotos) {
          const newPhotos = [...playerPhotos];
          newPhotos[index] = e.target.result;
          setPlayerPhotos(newPhotos);
        } else {
          setImage(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Simulate payment confirmation after 5 minutes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPaymentReview(false); // Hide the payment review notification after 5 minutes
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto tracking-tight">
      {/* Payment Review Notification */}
      {showPaymentReview && (
        <div className="p-6 rounded-lg mb-8">
          <h2 className="text-lg font-bold text-[#C81E23] mb-2">
            Registration Payment Under Review
          </h2>
          <p className="text-[#B0B3B8]">
            Your registration payment is currently under review. You will
            receive a notification on the notification page once it is
            confirmed. In the meantime, you can set up your team.
          </p>
        </div>
      )}

      {/* Team Setup Section */}
      <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-[#C81E23] mb-4">Team Setup</h2>

        {/* Team Logo, Name, and Rating */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <img
              src="/one.png"
              alt="Team Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold">Storm FC</h3>
          <p className="text-[#B0B3B8]">Rating: 4.5/5</p>
        </div>

        {/* Players List */}
        {/* <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Players</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 space-y-4 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-4">
            {playerNames.map((name, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-2 relative border-2 border-[#C81E23]">
                  <img
                    src={
                      playerPhotos[index] || "https://via.placeholder.com/100"
                    }
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                  <label
                    htmlFor={`player-photo-${index}`}
                    className="absolute bottom-0 right-0 bg-[#C81E23] p-2 rounded-full cursor-pointer hover:bg-[#A3181C] transition"
                  >
                    <FaUpload className="text-white text-lg" />
                  </label>
                  <input
                    type="file"
                    id={`player-photo-${index}`}
                    className="hidden"
                    onChange={handleImageUpload(index, setPlayerPhotos)}
                  />
                </div>
                <p className="text-sm font-semibold text-center">{name}</p>
              </div>
            ))}
          </div>
        </div> */}

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Players</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {playerNames.map((name, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-2 relative border-2 border-[#C81E23]">
                  <img
                    src={
                      playerPhotos[index] || "https://via.placeholder.com/100"
                    }
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                  <label
                    htmlFor={`player-photo-${index}`}
                    className="absolute bottom-0 right-0 bg-[#C81E23] p-2 rounded-full cursor-pointer hover:bg-[#A3181C] transition"
                  >
                    <FaUpload className="text-white text-lg" />
                  </label>
                  <input
                    type="file"
                    id={`player-photo-${index}`}
                    className="hidden"
                    onChange={handleImageUpload(index, setPlayerPhotos)}
                  />
                </div>
                <p className="text-sm font-semibold text-center">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coach and Assistant Coach */}
        <div className="mb-8 mt-24">
          <h3 className="text-lg font-bold mb-4">Coaching Staff</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Coach */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-2 relative border-2 border-[#C81E23]">
                <img
                  src={coachPhoto || "https://via.placeholder.com/100"}
                  alt="Coach"
                  className="w-full h-full object-cover"
                />
                <label
                  htmlFor="coach-photo"
                  className="absolute bottom-0 right-0 bg-[#C81E23] p-2 rounded-full cursor-pointer hover:bg-[#A3181C] transition"
                >
                  <FaUpload className="text-white text-lg" />
                </label>
                <input
                  type="file"
                  id="coach-photo"
                  className="hidden"
                  onChange={handleImageUpload(0, setCoachPhoto)}
                />
              </div>
              <p className="text-sm font-semibold">Coach</p>
            </div>

            {/* Assistant Coach */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-2 relative border-2 border-[#C81E23]">
                <img
                  src={assistantCoachPhoto || "https://via.placeholder.com/100"}
                  alt="Assistant Coach"
                  className="w-full h-full object-cover"
                />
                <label
                  htmlFor="assistant-coach-photo"
                  className="absolute bottom-0 right-0 bg-[#C81E23] p-2 rounded-full cursor-pointer hover:bg-[#A3181C] transition"
                >
                  <FaUpload className="text-white text-lg" />
                </label>
                <input
                  type="file"
                  id="assistant-coach-photo"
                  className="hidden"
                  onChange={handleImageUpload(0, setAssistantCoachPhoto)}
                />
              </div>
              <p className="text-sm font-semibold">Assistant Coach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupTeam;
