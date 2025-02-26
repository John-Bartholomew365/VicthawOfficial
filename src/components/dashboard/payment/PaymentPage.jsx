// "use client"
// import { useState } from "react";

// export default function PaymentPage() {
//   const [amount, setAmount] = useState("");

//   const handlePayment = () => {
//     if (amount) {
//       alert(`Proceeding with ₦${amount} payment to GTB (0156461679)`);
//       // Add payment logic here
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#000000] p-6">
//       <div className="bg-[#0F0F0F] shadow-lg rounded-lg p-6 max-w-md w-full">
//         <h2 className="text-2xl font-semibold text-gray-900 text-center">
//           Payment Details
//         </h2>

//         <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
//           <p className="text-gray-700">
//             <span className="font-medium">Account Number:</span> 0156461679
//           </p>
//           <p className="text-gray-700">
//             <span className="font-medium">Bank:</span> GTBank (GTB)
//           </p>
//           <p className="text-gray-700">
//             <span className="font-medium">Account Name:</span> Adeniji Gbolabo Victor
//           </p>
//         </div>

//         <div className="mt-6">
//           <label className="block text-[#B0B3B8] font-medium">Enter Amount (₦)</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C81E23] outline-none"
//             placeholder="Enter amount"
//           />
//         </div>

//         <button
//           onClick={handlePayment}
//           disabled={!amount}
//           className={`mt-6 w-full py-3 text-white font-semibold rounded-lg transition ${
//             amount ? "bg-[#C81E23] hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"
//           }`}
//         >
//           Proceed with Payment
//         </button>
//       </div>
//     </div>
//   );
// }

// "use client"
// import React, { useState } from "react";

// const PaymentCheckout = () => {
//   const [agree, setAgree] = useState(false);

//   const handlePayment = () => {
//     if (agree) {
//       // Redirect to payment page
//       window.location.href = "/payment";
//     } else {
//       alert("Please agree to the terms before proceeding.");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Checkout</h2>
//       <p className="text-gray-600 mb-6">All payments should be made securely using the available options.</p>

//       {/* Payment Methods */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Payment Methods</h3>
//         <div className="mt-3 p-4 border rounded-lg">
//           <p className="font-medium">Bank Transfer (GT Bank)</p>
//           <p>Account Number: <strong>0156461679</strong></p>
//           <p>Account Name: <strong>Adeniji Gbolabo Victor</strong></p>
//         </div>
//       </div>

//       {/* Billing Details */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold">Billing Details</h3>
//         <input type="email" placeholder="Email Address" className="w-full p-2 border rounded-md my-2" />
//         <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-md my-2" />
//         <input type="text" placeholder="Country" className="w-full p-2 border rounded-md my-2" />
//         <input type="text" placeholder="Billing ZIP / Postal Code" className="w-full p-2 border rounded-md my-2" />
//       </div>

//       {/* Order Summary */}
//       <div className="mb-6 p-4 border rounded-lg">
//         <h3 className="text-lg font-semibold">Order Summary</h3>
//         <p>Subtotal: <strong>$85.99</strong></p>
//         <p>Tax: <strong>$4.99</strong></p>
//         <p>Total: <strong>$90.98</strong></p>
//       </div>

//       {/* Agreement Checkbox */}
//       <div className="flex items-center mb-4">
//         <input type="checkbox" id="agree" className="mr-2" onChange={() => setAgree(!agree)} />
//         <label htmlFor="agree" className="text-sm text-gray-600">
//           By proceeding, you acknowledge and agree to the <a href="/terms" className="text-red-600">Terms of Payment Service</a>.
//         </label>
//       </div>

//       {/* Proceed Button */}
//       <button onClick={handlePayment} className={`w-full p-3 text-white font-bold rounded-md ${agree ? "bg-green-500" : "bg-gray-400 cursor-not-allowed"}`} disabled={!agree}>
//         Proceed with Payment
//       </button>
//     </div>
//   );
// };

// export default PaymentCheckout;



// "use client";
// import { useState } from "react";
// import { FaCopy, FaCheck } from "react-icons/fa";

// export default function PaymentPage() {
//   const [copied, setCopied] = useState(false);

//   // Account details
//   const accountDetails = {
//     accountNumber: "0156461679",
//     bankName: "GTBank",
//     accountName: "Adeniji Gbolabo Victor",
//   };

//   // Function to copy account details to clipboard
//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(
//       `Account Number: ${accountDetails.accountNumber}\nBank Name: ${accountDetails.bankName}\nAccount Name: ${accountDetails.accountName}`
//     );
//     setCopied(true);
//     setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
//   };

//   // Function to detect banking apps (example implementation)
//   const detectBankingApps = () => {
//     const bankingApps = [
//       { name: "GTBank Mobile App", link: "gtbank://" },
//       { name: "PayPal", link: "paypal://" },
//       { name: "Google Pay", link: "googlepay://" },
//       { name: "Apple Pay", link: "applepay://" },
//     ];

//     const availableApps = bankingApps.filter((app) => {
//       // Check if the app is supported on the device
//       return navigator.userAgent.toLowerCase().includes(app.name.toLowerCase());
//     });

//     return availableApps;
//   };

//   // Get available banking apps
//   const availableBankingApps = detectBankingApps();

//   return (
//     <div className="p-6 max-w-3xl mx-auto tracking-tight">
//       <h1 className="text-2xl font-bold mb-4 text-center">Make Payment</h1>

//       {/* Account Details */}
//       <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg">
//         <h2 className="text-lg font-bold mb-4">Account Details</h2>
//         <div className="space-y-3">
//           <div className="flex justify-between items-center">
//             <p className="text-[#B0B3B8]">Account Number:</p>
//             <p className="font-semibold">{accountDetails.accountNumber}</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <p className="text-[#B0B3B8]">Bank Name:</p>
//             <p className="font-semibold">{accountDetails.bankName}</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <p className="text-[#B0B3B8]">Account Name:</p>
//             <p className="font-semibold">{accountDetails.accountName}</p>
//           </div>
//         </div>

//         {/* Copy Button */}
//         <button
//           onClick={copyToClipboard}
//           className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#C81E23] text-white rounded-lg hover:bg-[#A3181C] transition"
//         >
//           {copied ? (
//             <>
//               <FaCheck className="text-green-500" /> Copied!
//             </>
//           ) : (
//             <>
//               <FaCopy /> Copy Account Details
//             </>
//           )}
//         </button>
//       </div>

//       {/* Available Banking Apps */}
//       <div className="mt-8">
//         <h2 className="text-lg font-bold mb-4">Available Banking Apps</h2>
//         <div className="space-y-3">
//           {availableBankingApps.length > 0 ? (
//             availableBankingApps.map((app, index) => (
//               <a
//                 key={index}
//                 href={app.link}
//                 className="block p-4 border rounded-lg hover:bg-[#000000] transition"
//               >
//                 <p className="font-semibold">{app.name}</p>
//               </a>
//             ))
//           ) : (
//             <p className="text-[#B0B3B8]">
//               No banking apps detected. Please use your preferred banking app to
//               make the payment.
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Payment Confirmation */}
//       <div className="mt-8">
//         <h2 className="text-lg font-bold mb-4">Confirm Payment</h2>
//         <div className="space-y-3">
//           <input
//             type="text"
//             placeholder="Enter Transaction ID"
//             className="w-full p-3 border rounded-lg bg-[#0F0F0F] text-white"
//           />
//           <input
//             type="file"
//             accept="image/*, .pdf"
//             className="w-full p-3 border rounded-lg bg-[#0F0F0F] text-white"
//           />
//           <button className="w-full px-4 py-2 bg-[#C81E23] text-white rounded-lg hover:bg-[#A3181C] transition">
//             Submit Payment Proof
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import { useState, useEffect } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

export default function PaymentPage() {
  const [copied, setCopied] = useState(false);
  const [availableBankingApps, setAvailableBankingApps] = useState([]);

  // Account details
  const accountDetails = {
    accountNumber: "0156461679",
    bankName: "GTBank",
    accountName: "Adeniji Gbolabo Victor",
  };

  // Function to copy account details to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `Account Number: ${accountDetails.accountNumber}\nBank Name: ${accountDetails.bankName}\nAccount Name: ${accountDetails.accountName}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
  };

  // Function to detect banking apps (example implementation)
  const detectBankingApps = () => {
    const bankingApps = [
      { name: "GTBank Mobile App", link: "gtbank://" },
      { name: "PayPal", link: "paypal://" },
      { name: "Google Pay", link: "googlepay://" },
      { name: "Apple Pay", link: "applepay://" },
    ];

    const availableApps = bankingApps.filter((app) => {
      // Check if the app is supported on the device
      return navigator.userAgent.toLowerCase().includes(app.name.toLowerCase());
    });

    return availableApps;
  };

  // Use useEffect to run client-side code
  useEffect(() => {
    setAvailableBankingApps(detectBankingApps());
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto tracking-tight">
      <h1 className="text-2xl font-bold mb-4 text-center">Make Payment</h1>

      {/* Account Details */}
      <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Account Details</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-[#B0B3B8]">Account Number:</p>
            <p className="font-semibold">{accountDetails.accountNumber}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#B0B3B8]">Bank Name:</p>
            <p className="font-semibold">{accountDetails.bankName}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#B0B3B8]">Account Name:</p>
            <p className="font-semibold">{accountDetails.accountName}</p>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#C81E23] text-white rounded-lg hover:bg-[#A3181C] transition"
        >
          {copied ? (
            <>
              <FaCheck className="text-green-500" /> Copied!
            </>
          ) : (
            <>
              <FaCopy /> Copy Account Details
            </>
          )}
        </button>
      </div>

      {/* Available Banking Apps */}
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Available Banking Apps</h2>
        <div className="space-y-3">
          {availableBankingApps.length > 0 ? (
            availableBankingApps.map((app, index) => (
              <a
                key={index}
                href={app.link}
                className="block p-4 border rounded-lg hover:bg-[#000000] transition"
              >
                <p className="font-semibold">{app.name}</p>
              </a>
            ))
          ) : (
            <p className="text-[#B0B3B8]">
              No banking apps detected. Please use your preferred banking app to
              make the payment.
            </p>
          )}
        </div>
      </div>

      {/* Payment Confirmation */}
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Confirm Payment</h2>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter Transaction ID"
            className="w-full p-3 border rounded-lg bg-[#0F0F0F] text-white"
          />
          <input
            type="file"
            accept="image/*, .pdf"
            className="w-full p-3 border rounded-lg bg-[#0F0F0F] text-white"
          />
          <button className="w-full px-4 py-2 bg-[#C81E23] text-white rounded-lg hover:bg-[#A3181C] transition">
            Submit Payment Proof
          </button>
        </div>
      </div>
    </div>
  );
}