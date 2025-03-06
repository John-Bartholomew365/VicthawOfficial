// "use client";
// import React, { useState } from "react";

// const AdminHero = () => {
//   // Sample data for registered teams
//   const [teams, setTeams] = useState([
//     {
//       id: 1,
//       name: "Storm FC",
//       paymentStatus: "Pending",
//       players: 18,
//       coach: "John Doe",
//       assistantCoach: "Jane Smith",
//     },
//     {
//       id: 2,
//       name: "Thunder Strikers",
//       paymentStatus: "Confirmed",
//       players: 18,
//       coach: "Mike Johnson",
//       assistantCoach: "Sarah Lee",
//     },
//     {
//       id: 3,
//       name: "Shadow Rovers",
//       paymentStatus: "Pending",
//       players: 18,
//       coach: "Chris Green",
//       assistantCoach: "Emily Brown",
//     },
//   ]);

//   // Function to confirm payment for a team
//   const confirmPayment = (teamId) => {
//     setTeams((prevTeams) =>
//       prevTeams.map((team) =>
//         team.id === teamId ? { ...team, paymentStatus: "Confirmed" } : team
//       )
//     );
//   };

//   // Function to reject payment for a team
//   const rejectPayment = (teamId) => {
//     setTeams((prevTeams) =>
//       prevTeams.map((team) =>
//         team.id === teamId ? { ...team, paymentStatus: "Rejected" } : team
//       )
//     );
//   };

//   return (
//     <div className="p-2 lg:w-[960px] tracking-tight">
//       <h1 className="text-2xl font-bold mb-8 text-center">Admin Dashboard</h1>

//       {/* Dashboard Overview */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
//         <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg">
//           <h2 className="text-lg font-bold text-[#C81E23] mb-2">
//             Registered Teams
//           </h2>
//           <p className="text-3xl font-bold">{teams.length}</p>
//         </div>
//         <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg">
//           <h2 className="text-lg font-bold text-[#C81E23] mb-2">
//             Confirmed Payments
//           </h2>
//           <p className="text-3xl font-bold">
//             {teams.filter((team) => team.paymentStatus === "Confirmed").length}
//           </p>
//         </div>
//         <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg">
//           <h2 className="text-lg font-bold text-[#C81E23] mb-2">
//             Pending Reviews
//           </h2>
//           <p className="text-3xl font-bold">
//             {teams.filter((team) => team.paymentStatus === "Pending").length}
//           </p>
//         </div>
//       </div>

//       {/* Team Management */}
//       <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg mb-8">
//         <h2 className="text-lg font-bold text-[#C81E23] mb-4">
//           Team Management
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full">
//             <thead>
//               <tr>
//                 <th className="text-left py-2">Team Name</th>
//                 <th className="text-left py-2">Payment Status</th>
//                 <th className="text-left py-2">Players</th>
//                 <th className="text-left py-2">Coach</th>
//                 <th className="text-left py-2">Assistant Coach</th>
//                 <th className="text-left py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {teams.map((team) => (
//                 <tr key={team.id} className="border-b border-[#1F1F1F]">
//                   <td className="py-4">{team.name}</td>
//                   <td className="py-4">
//                     <span
//                       className={`px-2 py-1 rounded ${
//                         team.paymentStatus === "Confirmed"
//                           ? "bg-green-500"
//                           : team.paymentStatus === "Pending"
//                           ? "bg-yellow-500"
//                           : "bg-red-500"
//                       }`}
//                     >
//                       {team.paymentStatus}
//                     </span>
//                   </td>
//                   <td className="py-4">{team.players}</td>
//                   <td className="py-4">{team.coach}</td>
//                   <td className="py-4">{team.assistantCoach}</td>
//                   <td className="py-4">
//                     {team.paymentStatus === "Pending" && (
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => confirmPayment(team.id)}
//                           className="px-3 py-1 bg-green-500 rounded hover:bg-green-600 transition"
//                         >
//                           Confirm
//                         </button>
//                         <button
//                           onClick={() => rejectPayment(team.id)}
//                           className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition"
//                         >
//                           Reject
//                         </button>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHero;




"use client";
import React, { useState, useEffect } from "react";

const AdminHero = () => {
  // Sample data for registered teams
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Storm FC",
      paymentStatus: "Pending",
      players: 18,
      coach: "John Barthy",
      paymentProof: null, // Add payment proof field
    },
    {
      id: 2,
      name: "Thunder Strikers",
      paymentStatus: "Confirmed",
      players: 18,
      coach: "Mike Johnson",
      paymentProof: "https://example.com/proof1.jpg", // Example payment proof
    },
    {
      id: 3,
      name: "Shadow Rovers",
      paymentStatus: "Pending",
      players: 18,
      coach: "Chris Adebayo",
      paymentProof: null,
    },
  ]);

  // Fetch payment proofs from local storage (if using local storage)
  useEffect(() => {
    const fetchPaymentProofs = () => {
      try {
        const proofs = JSON.parse(localStorage.getItem("paymentProofs")) || [];
        // Update teams with payment proofs
        const updatedTeams = teams.map((team) => {
          const proof = proofs.find((p) => p.teamName === team.name);
          return proof ? { ...team, paymentProof: proof.file } : team;
        });
        setTeams(updatedTeams);
      } catch (error) {
        console.error("Failed to fetch payment proofs:", error);
      }
    };

    fetchPaymentProofs();
  }, []);

  // Function to confirm payment for a team
  const confirmPayment = (teamId) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId ? { ...team, paymentStatus: "Confirmed" } : team
      )
    );
  };

  // Function to reject payment for a team
  const rejectPayment = (teamId) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId ? { ...team, paymentStatus: "Rejected" } : team
      )
    );
  };

  return (
    <div className="p-2 lg:w-[960px] tracking-tight">
      <h1 className="text-2xl font-bold mb-8 text-center">Admin Dashboard</h1>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-[#C81E23] mb-2">
            Registered Teams
          </h2>
          <p className="text-3xl font-bold">{teams.length}</p>
        </div>
        <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-[#C81E23] mb-2">
            Confirmed Payments
          </h2>
          <p className="text-3xl font-bold">
            {teams.filter((team) => team.paymentStatus === "Confirmed").length}
          </p>
        </div>
        <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-[#C81E23] mb-2">
            Pending Reviews
          </h2>
          <p className="text-3xl font-bold">
            {teams.filter((team) => team.paymentStatus === "Pending").length}
          </p>
        </div>
      </div>

      {/* Team Management */}
      <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-lg font-bold text-[#C81E23] mb-4">
          Team Management
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left py-2">Team Name</th>
                <th className="text-left py-2">Payment Status</th>
                <th className="text-left py-2">Players</th>
                <th className="text-left py-2">Coach</th>
                <th className="text-left py-2">Payment Proof</th>
                <th className="text-left py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id} className="border-b border-[#1F1F1F]">
                  <td className="py-4">{team.name}</td>
                  <td className="py-4">
                    <span
                      className={`px-2 py-1 rounded ${
                        team.paymentStatus === "Confirmed"
                          ? "bg-green-500"
                          : team.paymentStatus === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {team.paymentStatus}
                    </span>
                  </td>
                  <td className="py-4">{team.players}</td>
                  <td className="py-4">{team.coach}</td>
                  <td className="py-4">
                    {team.paymentProof ? (
                      <a
                        href={team.paymentProof}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C81E23] hover:underline"
                      >
                        View Proof
                      </a>
                    ) : (
                      <p className="text-[#B0B3B8]">No proof submitted</p>
                    )}
                  </td>
                  <td className="py-4">
                    {team.paymentStatus === "Pending" && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => confirmPayment(team.id)}
                          className="px-3 py-1 bg-green-500 rounded hover:bg-green-600 transition"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => rejectPayment(team.id)}
                          className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHero;