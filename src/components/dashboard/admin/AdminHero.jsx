"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const AdminHero = () => {
  // Sample data for registered teams
  const [teams, setTeams] = useState([]);


  const getToken = () => {
    const token = localStorage.getItem("accessToken"); 
    if (token) {
      return token;
    }
    return null;
  };

  // Fetch payment proofs from local storage (if using local storage)
  useEffect(() => {
    const fetchPaymentProofs = async () => {
   

      try {
        const response = await axios.get("/api/getTeams", {
          headers: {
            token: getToken(),
          },
        });

      

        // const proofs = JSON.parse(localStorage.getItem("paymentProofs")) || [];
        // // Update teams with payment proofs
        // const updatedTeams = teams.map((team) => {
        //   const proof = proofs.find((p) => p.teamName === team.name);
        //   return proof ? { ...team, paymentProof: proof.file } : team;
        // });
        setTeams(response?.data);
      } catch (error) {
        console.error("Failed to fetch payment proofs:", error);
      }
    };

    fetchPaymentProofs();
  }, []);

  // Function to confirm payment for a team
  const confirmPayment = async (teamId) => {
    try {
      // Send a PUT request to update the payment status
      const response = await fetch("/api/status", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: getToken(),  
        },
        body: JSON.stringify({
          teamId: teamId,  
          status: "Confirmed",  
        }),
      });
  
      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();

        
        // Notify the user of success
        toast.error(data.message, {
          position: "top-center",
        });

      } else {
        // Handle server errors
        const data = await response.json();
        toast.error(data.message || "Failed to update payment status", {
          position: "top-center",
        });
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error updating payment status:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
      });
    }
  };

  const rejectPayment = async (teamId) => {
    try {
      // Send a PUT request to update the payment status
      const response = await fetch("/api/status", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: getToken(),  
        },
        body: JSON.stringify({
          teamId: teamId,  
          status: "Rejected",  
        }),
      });
  
      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();

     
        // Notify the user of success
        toast.success(data.message, {
          position: "top-center",
        });

      } else {
        // Handle server errors
        const data = await response.json();
        toast.error(data.message || "Failed to update payment status", {
          position: "top-center",
        });
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error updating payment status:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
      });
    }
  };

 

  const confirmedPayments = teams.filter(
    (item) => item.payment_status === "Confirmed"
  ).length;

  // Count pending payment reviews
  const pendingPayments = teams.filter(
    (item) => item.payment_status === "Pending"
  ).length;
  const paidPayments = teams.filter(
    (item) => item.payment_status === "Paid"
  ).length;

  return (
    <div className="p-2 lg:w-[960px] tracking-tight">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
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
          <p className="text-3xl font-bold">{confirmedPayments}</p>
        </div>
        <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-[#C81E23] mb-2">
            Pending Reviews
          </h2>
          <p className="text-3xl font-bold">{pendingPayments + paidPayments}</p>
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
               <th className="text-left py-2">Email</th> 
                <th className="text-left py-2">Coach</th>
                <th className="text-left py-2">Payment Proof</th>
                <th className="text-left py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id} className="border-b border-[#1F1F1F]">
                  <td className="py-4">{team?.team_name}</td>
                  <td className="py-4">
                    <span
                      className={`px-2 py-1 rounded ${
                        team?.payment_status === "Confirmed"
                          ? "bg-green-500"
                          : team?.payment_status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {team?.payment_status}
                    </span>
                  </td>
                  <td className="py-4">{team.email}</td>
                  <td className="py-4">{team?.manager_name}</td>
                  <td className="py-4">
                    {team?.payment_proof ? (
                      <a
                        href={`${process.env.BASE_URL}/${team?.payment_proof}`}
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
                    {team.payment_status !== "Confirmed" && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => confirmPayment(team._id)}
                          className="px-3 py-1 bg-green-500 rounded hover:bg-green-600 transition"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => rejectPayment(team._id)}
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
