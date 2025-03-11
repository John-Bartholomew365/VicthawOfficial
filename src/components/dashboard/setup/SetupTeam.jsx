// "use client";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { FaUpload } from "react-icons/fa";
// import { toast, ToastContainer } from "react-toastify";

// const getUserData = () => {
//   // Retrieve user data from localStorage
//   const userData = localStorage.getItem("userData");

//   // If userData exists, parse and return it
//   if (userData) {
//     return JSON.parse(userData);
//   }

//   // If userData doesn't exist, remove the accessToken (if any) and return null
//   localStorage.removeItem("accessToken");
//   return null;
// };
// const SetupTeam = () => {
//   const [showPaymentReview, setShowPaymentReview] = useState(false);
//   // Simulate payment confirmation after 5 minutes
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewURL, setPreviewURL] = useState(null);
//   const [teamName, setTeamName] = useState("null");

//   // State to manage player profile photos
//   const [playerPhotos, setPlayerPhotos] = useState(Array(18).fill(null));
//   const [coachPhoto, setCoachPhoto] = useState(null);
//   const [assistantCoachPhoto, setAssistantCoachPhoto] = useState(null);

//   const [playerNames, setPlayersNames] = useState([]);

//   const [name, setName] = useState("");
//   const [role, setRole] = useState("");

//   // State to manage payment review notification visibility

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       if (file.type.startsWith("image/")) {
//         setPreviewURL(URL.createObjectURL(file)); // Show image preview
//       } else {
//         setPreviewURL(null);
//       }
//     }
//   };
//   // Player names
//   // const playerNames = [
//   //   "Chinedu Okoro",
//   //   "Aisha Bello",
//   //   "Emeka Nwankwo",
//   //   "Fatima Ahmed",
//   //   "Oluwatobi Adeyemi",
//   //   "Ngozi Eze",
//   //   "Ibrahim Musa",
//   //   "Chioma Okafor",
//   //   "Tunde Balogun",
//   //   "Amina Suleiman",
//   //   "Segun Adebayo",
//   //   "Zainab Ibrahim",
//   //   "Kunle Oladele",
//   //   "Halima Usman",
//   //   "Femi Ogunleye",
//   //   "Binta Mohammed",
//   //   "Yusuf Abdullahi",
//   //   "Grace Okonkwo",
//   // ];

//   // Function to handle image upload
//   const handleImageUpload = (index, setImage) => (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         if (setImage === setPlayerPhotos) {
//           const newPhotos = [...playerPhotos];
//           newPhotos[index] = e.target.result;
//           setPlayerPhotos(newPhotos);
//         } else {
//           setImage(e.target.result);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   useEffect(() => {
//     const user = getUserData();
//     // Check if user exists and their payment status is not "Confirmed"

//     setTeamName(user.team_name);
//     if (user && user.payment_status !== "Confirmed") {
//       setShowPaymentReview(true); // Hide the payment review notification
//     }
//   }, []);

//   const handlePlayerSubmit = async () => {
//     // Validate inputs
//     if (!name || !role) {
//       toast.error("Please fill out all fields.");
//       return;
//     }

//     if (!selectedFile) {
//       toast.error("Please upload an image or PDF before submitting.");
//       return;
//     }

//     // Create FormData object
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("role", role);
//     formData.append("image", selectedFile);

//     try {
//       // Send POST request to the server
//       const response = await axios.post("/api/players", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           token: getToken(),
//         },
//       });

//       // Show success message
//       toast.success(response.data.message);

//       // Reset form fields
//       setName("");
//       setRole("");
//       setSelectedFile(null);
//       setPreviewURL("");
//     } catch (error) {
//       // Handle errors
//       const errorMessage =
//         error.response?.data?.message || "An error occurred. Please try again.";
//       toast.error(errorMessage);
//       console.error("Registration error:", error);
//     }
//   };
//   const getToken = () => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       return token;
//     }
//     return null;
//   };

//   useEffect(() => {
//     const fetchPlayers = async () => {
//       try {
//         const response = await axios.get("/api/players", {
//           headers: {
//             token: getToken(),
//           },
//         });

//         setPlayersNames(response?.data.teamMembers);

//         // setTeams(response?.data);
//       } catch (error) {
//         console.error("Failed to fetch payment proofs:", error);
//       }
//     };

//     fetchPlayers();
//   }, []);

//   const players = playerNames.filter((d) => d.role === "Player");
//   const coaches = playerNames.filter(
//     (d) => d.role === "Coach" || d.role === "Assistant Coach"
//   );
//   return (
//     <div className="lg:p-6 p-2 max-w-4xl mx-auto tracking-tight">
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
//       {/* Payment Review Notification */}
//       {showPaymentReview && (
//         <div className="p-6 rounded-lg mb-8">
//           <h2 className="text-lg font-bold text-[#C81E23] mb-2">
//             Registration Payment Under Review
//           </h2>
//           <p className="text-[#B0B3B8]">
//             Your registration payment is currently under review. You will
//             receive a notification on the notification page once it is
//             confirmed. In the meantime, you can set up your team.
//           </p>
//         </div>
//       )}

//       {/* Team Setup Section */}
//       <div>
//         <h1 className="lg:text-[30px] text-[24px] font-bold leading-tight text-[#C81E23] lg:text-start text-center">
//           Welcome to your team's dashboard!
//         </h1>
//         <h1 className="text-[#B0B3B8] mt-2 lg:text-start text-center">
//           Now, setup your team a maximum of 18 players, a coach and an assistant
//           coach
//         </h1>
//       </div>
//       <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg">
//         <h2 className="text-lg font-bold text-[#C81E23] mb-4">Team Setup</h2>

//         {/* Team Logo, Name, and Rating */}
//         {/* <div className="flex flex-col items-center mb-8"> */}
//         <div className="">
//           {/* <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
//             <img
//               src="/one.png"
//               alt="Team Logo"
//               className="w-full h-full object-cover"
//             />
//           </div> */}
//           <h3 className="text-4xl font-bold">{teamName} team</h3>
//           {/* <p className="text-[#B0B3B8]">Rating: 4.5/5</p> */}
//         </div>

//         {/* Players List */}
//         {/* <div className="mb-8">
//           <h3 className="text-lg font-bold mb-4">Players</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 space-y-4 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-4">
//             {playerNames.map((name, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="w-24 h-24 rounded-full overflow-hidden mb-2 relative border-2 border-[#C81E23]">
//                   <img
//                     src={
//                       playerPhotos[index] || "https://via.placeholder.com/100"
//                     }
//                     alt={name}
//                     className="w-full h-full object-cover"
//                   />
//                   <label
//                     htmlFor={`player-photo-${index}`}
//                     className="absolute bottom-0 right-0 bg-[#C81E23] p-2 rounded-full cursor-pointer hover:bg-[#A3181C] transition"
//                   >
//                     <FaUpload className="text-white text-lg" />
//                   </label>
//                   <input
//                     type="file"
//                     id={`player-photo-${index}`}
//                     className="hidden"
//                     onChange={handleImageUpload(index, setPlayerPhotos)}
//                   />
//                 </div>
//                 <p className="text-sm font-semibold text-center">{name}</p>
//               </div>
//             ))}
//           </div>
//         </div> */}

//         {/* Input field for players */}

//         <div className="my-8">
//           <h2 className="text-md font-bold">Submit player list</h2>
//           <div className="my-3">
//             <label htmlFor="name"> Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 rounded-lg bg-[#000000] text-white focus:outline-none focus:border-[#C81E23] "
//             />
//           </div>
//           <div className="my-3">
//             <label htmlFor="role">Role</label>
//             <input
//               type="text"
//               id="role"
//               name="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full p-3 bg-[#000000] text-white rounded-lg focus:outline-none focus:border-[#C81E23]"
//             />
//           </div>
//           <div className="space-y-3">
//             {/* Custom File Input */}
//             <label className="block w-full bg-[#0F0F0F] p-3 rounded-lg border border-gray-600 cursor-pointer text-white text-center">
//               {selectedFile ? selectedFile.name : "Choose File"}
//               <input
//                 type="file"
//                 accept="image/*, .pdf"
//                 className="hidden"
//                 onChange={handleFileChange}
//               />
//             </label>

//             {/* File Preview */}
//             {previewURL && (
//               <div className="mt-4">
//                 <p className="text-white text-sm mb-2">Player Image preview</p>
//                 <img
//                   src={previewURL}
//                   alt="File preview"
//                   className="w-24 h-24 rounded-full  object-cover"
//                 />
//               </div>
//             )}
//             {selectedFile && selectedFile.type === "application/pdf" && (
//               <p className="text-gray-400 text-sm text-center mt-2">
//                 PDF selected: Preview not available
//               </p>
//             )}

//             <button
//               onClick={handlePlayerSubmit}
//               className="mt-4 px-4 py-2 bg-[#C81E23] lg:w-[180px] w-full text-white rounded-lg hover:bg-[#A3181C] transition"
//             >
//               Submit
//             </button>
//           </div>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-lg font-bold mb-4">Players</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//             {players.map((d, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="w-24 h-24 rounded-full overflow-hidden mb-2 relative border-2 border-[#C81E23]">
//                   <img
//                     src={
//                       `${process.env.BASE_URL}/${d.image}` ||
//                       "https://via.placeholder.com/100"
//                     }
//                     alt={name}
//                     className="w-full h-full object-cover"
//                   />
//                   <label
//                     htmlFor={`player-photo-${index}`}
//                     className="absolute bottom-0 right-0 bg-[#C81E23] p-2 rounded-full cursor-pointer hover:bg-[#A3181C] transition"
//                   >
//                     <FaUpload className="text-white text-lg" />
//                   </label>
//                   <input
//                     type="file"
//                     id={`player-photo-${index}`}
//                     className="hidden"
//                     onChange={handleImageUpload(index, setPlayerPhotos)}
//                   />
//                 </div>
//                 <p className="text-md font-bold text-center">{d.name}</p>
//                 <p className="text-xs font-semibold text-center">{d.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Coach and Assistant Coach */}
//         <div className="mb-8 mt-24">
//           <h3 className="text-lg font-bold mb-4">Coaching Staff</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {/* Coach */}
//             {coaches.map((d, i) => (
//               <div key={i} className="flex flex-col items-center">
//                 <div className="w-24 h-24 rounded-full overflow-hidden mb-2 relative border-2 border-[#C81E23]">
//                   <img
//                     src={
//                       `${process.env.BASE_URL}/${d.image}` ||
//                       "https://via.placeholder.com/100"
//                     }
//                     alt="Coach"
//                     className="w-full h-full object-cover"
//                   />
//                   <label
//                     htmlFor="coach-photo"
//                     className="absolute bottom-0 right-0 bg-[#C81E23] p-2 rounded-full cursor-pointer hover:bg-[#A3181C] transition"
//                   >
//                     <FaUpload className="text-white text-lg" />
//                   </label>
//                   <input
//                     type="file"
//                     id="coach-photo"
//                     className="hidden"
//                     onChange={handleImageUpload(0, setCoachPhoto)}
//                   />
//                 </div>
//                 <p className="text-md font-bold text-center">{d.name}</p>
//                 <p className="text-xs font-semibold text-center">{d.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SetupTeam;




"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const getUserData = () => {
  // Retrieve user data from localStorage
  const userData = localStorage.getItem("userData");

  // If userData exists, parse and return it
  if (userData) {
    return JSON.parse(userData);
  }

  // If userData doesn't exist, remove the accessToken (if any) and return null
  localStorage.removeItem("accessToken");
  return null;
};
const SetupTeam = () => {
  const [showPaymentReview, setShowPaymentReview] = useState(false);
  // Simulate payment confirmation after 5 minutes
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [teamName, setTeamName] = useState("null");

  // State to manage player profile photos
  const [playerPhotos, setPlayerPhotos] = useState(Array(18).fill(null));
  const [coachPhoto, setCoachPhoto] = useState(null);
  const [assistantCoachPhoto, setAssistantCoachPhoto] = useState(null);

  const [playerNames, setPlayersNames] = useState([]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  // State to manage loading
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  // State to manage payment review notification visibility

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      if (file.type.startsWith("image/")) {
        setPreviewURL(URL.createObjectURL(file)); // Show image preview
      } else {
        setPreviewURL(null);
      }
    }
  };
  // Player names
  // const playerNames = [
  //   "Chinedu Okoro",
  //   "Aisha Bello",
  //   "Emeka Nwankwo",
  //   "Fatima Ahmed",
  //   "Oluwatobi Adeyemi",
  //   "Ngozi Eze",
  //   "Ibrahim Musa",
  //   "Chioma Okafor",
  //   "Tunde Balogun",
  //   "Amina Suleiman",
  //   "Segun Adebayo",
  //   "Zainab Ibrahim",
  //   "Kunle Oladele",
  //   "Halima Usman",
  //   "Femi Ogunleye",
  //   "Binta Mohammed",
  //   "Yusuf Abdullahi",
  //   "Grace Okonkwo",
  // ];

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

  useEffect(() => {
    const user = getUserData();
    // Check if user exists and their payment status is not "Confirmed"

    setTeamName(user.team_name);
    if (user && user.payment_status !== "Confirmed") {
      setShowPaymentReview(true); // Hide the payment review notification
    }
  }, []);

  const handlePlayerSubmit = async () => {
    // Validate inputs
    if (!name || !role) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!selectedFile) {
      toast.error("Please upload an image or PDF before submitting.");
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("image", selectedFile);

    setIsLoading(true); // Set loading to true when submission starts
    try {
      // Send POST request to the server
      const response = await axios.post("/api/players", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          token: getToken(),
        },
      });

      // Show success message
      toast.success(response.data.message);

      // Reset form fields
      setName("");
      setRole("");
      setSelectedFile(null);
      setPreviewURL("");
    } catch (error) {
      // Handle errors
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      toast.error(errorMessage);
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false); // Set loading to false when submission ends
    }
  };
  const getToken = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      return token;
    }
    return null;
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("/api/players", {
          headers: {
            token: getToken(),
          },
        });

        setPlayersNames(response?.data.teamMembers);

        // setTeams(response?.data);
      } catch (error) {
        console.error("Failed to fetch payment proofs:", error);
      }
    };

    fetchPlayers();
  }, []);

  const players = playerNames.filter((d) => d.role === "Player");
  const coaches = playerNames.filter(
    (d) => d.role === "Coach" || d.role === "Assistant Coach"
  );
  return (
    <div className="lg:p-6 p-2 max-w-4xl mx-auto tracking-tight">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
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
      <div>
        <h1 className="lg:text-[30px] text-[24px] font-bold leading-tight text-[#C81E23] lg:text-start text-center">
          Welcome to your team's dashboard!
        </h1>
        <h1 className="text-[#6B6F76] mt-2 lg:text-start text-center">
          Now, setup your team a maximum of 18 players, a coach and an assistant
          coach
        </h1>
      </div>
      <div className="bg-[#FAFAFA] mt-5 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-[#C81E23] mb-4">Team Setup</h2>

        {/* Team Logo, Name, and Rating */}
        {/* <div className="flex flex-col items-center mb-8"> */}
        <div className="">
          {/* <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <img
              src="/one.png"
              alt="Team Logo"
              className="w-full h-full object-cover"
            />
          </div> */}
          <h3 className="text-4xl font-bold">{teamName} team</h3>
          {/* <p className="text-[#B0B3B8]">Rating: 4.5/5</p> */}
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

        {/* Input field for players */}

        <div className="my-8">
          <h2 className="text-md font-bold">Submit player list</h2>
          <div className="my-3">
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#FFFFFF] text-black focus:outline-none focus:border-[#C81E23] "
            />
          </div>
          <div className="my-3">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 bg-[#FFFFFF] text-black rounded-lg focus:outline-none focus:border-[#C81E23]"
            />
          </div>
          <div className="space-y-3">
            {/* Custom File Input */}
            <label className="block w-full bg-[#FFFFFF] p-3 rounded-lg border border-gray-600 cursor-pointer text-black text-center">
              {selectedFile ? selectedFile.name : "Choose File"}
              <input
                type="file"
                accept="image/*, .pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {/* File Preview */}
            {previewURL && (
              <div className="mt-4">
                <p className="text-white text-sm mb-2">Player Image preview</p>
                <img
                  src={previewURL}
                  alt="File preview"
                  className="w-24 h-24 rounded-full  object-cover"
                />
              </div>
            )}
            {selectedFile && selectedFile.type === "application/pdf" && (
              <p className="text-gray-400 text-sm text-center mt-2">
                PDF selected: Preview not available
              </p>
            )}

            <button
              onClick={handlePlayerSubmit}
              className={`mt-4 px-4 py-2 bg-[#C81E23] lg:w-[180px] w-full text-white rounded-lg ${
                isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#A3181C]"
              } transition`}
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Players</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map((d, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-2 relative border-2 border-[#C81E23]">
                  <img
                    src={
                      `${process.env.BASE_URL}/${d.image}` ||
                      "https://via.placeholder.com/100"
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
                <p className="text-md font-bold text-center">{d.name}</p>
                <p className="text-xs font-semibold text-center">{d.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coach and Assistant Coach */}
        <div className="mb-8 mt-24">
          <h3 className="text-lg font-bold mb-4">Coaching Staff</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Coach */}
            {coaches.map((d, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-2 relative border-2 border-[#C81E23]">
                  <img
                    src={
                      `${process.env.BASE_URL}/${d.image}` ||
                      "https://via.placeholder.com/100"
                    }
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
                <p className="text-md font-bold text-center">{d.name}</p>
                <p className="text-xs font-semibold text-center">{d.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupTeam;