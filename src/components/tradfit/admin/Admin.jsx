"use client";

import { useState, useEffect } from "react";
import {
  Users,
  Crown,
  Search,
  Download,
  Filter,
  Calendar,
  Mail,
  Phone,
  UserCheck,
  Eye,
  CheckCircle,
  XCircle,
  Upload,
  AlertCircle,
} from "lucide-react";

export default function AdminPage() {
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTicketType, setFilterTicketType] = useState("all");
  const [filterAgeRange, setFilterAgeRange] = useState("all");
  const [filterGender, setFilterGender] = useState("all");
  const [filterPaymentStatus, setFilterPaymentStatus] = useState("all");
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load registrations from localStorage
    const storedRegistrations = localStorage.getItem("tradfit_registrations");
    if (storedRegistrations) {
      const data = JSON.parse(storedRegistrations);
      setRegistrations(data);
      setFilteredRegistrations(data);
    }
  }, []);

  useEffect(() => {
    // Apply filters
    const filtered = registrations.filter((reg) => {
      const matchesSearch =
        reg.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.ticketId.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTicketType =
        filterTicketType === "all" || reg.ticketType === filterTicketType;
      const matchesAgeRange =
        filterAgeRange === "all" || reg.ageRange === filterAgeRange;
      const matchesGender =
        filterGender === "all" || reg.gender === filterGender;
      const matchesPaymentStatus =
        filterPaymentStatus === "all" ||
        (filterPaymentStatus === "pending" &&
          (!reg.paymentStatus || reg.paymentStatus === "pending")) ||
        (filterPaymentStatus === "receipt_uploaded" &&
          reg.paymentStatus === "receipt_uploaded") ||
        (filterPaymentStatus === "confirmed" && reg.confirmed);

      return (
        matchesSearch &&
        matchesTicketType &&
        matchesAgeRange &&
        matchesGender &&
        matchesPaymentStatus
      );
    });

    setFilteredRegistrations(filtered);
  }, [
    registrations,
    searchTerm,
    filterTicketType,
    filterAgeRange,
    filterGender,
    filterPaymentStatus,
  ]);

  const handlePaymentAction = (ticketId, action) => {
    const updatedRegistrations = registrations.map((reg) =>
      reg.ticketId === ticketId
        ? {
            ...reg,
            confirmed: action === "approve",
            paymentStatus: action === "approve" ? "confirmed" : "rejected",
          }
        : reg
    );
    setRegistrations(updatedRegistrations);
    localStorage.setItem(
      "tradfit_registrations",
      JSON.stringify(updatedRegistrations)
    );
    setIsModalOpen(false);
  };

  const exportToCSV = () => {
    const headers = [
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Gender",
      "Age Range",
      "Ticket Type",
      "Ticket ID",
      "Registration Date",
      "Payment Status",
      "Confirmed",
    ];
    const csvContent = [
      headers.join(","),
      ...filteredRegistrations.map((reg) =>
        [
          reg.firstName,
          reg.lastName,
          reg.email,
          reg.phone,
          reg.gender,
          reg.ageRange,
          reg.ticketType,
          reg.ticketId,
          new Date(reg.registrationDate).toLocaleDateString(),
          reg.paymentStatus || "pending",
          reg.confirmed ? "Yes" : "No",
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tradfit_registrations_${
      new Date().toISOString().split("T")[0]
    }.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const stats = {
    total: registrations.length,
    vip: registrations.filter((r) => r.ticketType === "vip").length,
    regular: registrations.filter((r) => r.ticketType === "regular").length,
    confirmed: registrations.filter((r) => r.confirmed).length,
    pending: registrations.filter(
      (r) => !r.confirmed && (!r.paymentStatus || r.paymentStatus === "pending")
    ).length,
    receiptsUploaded: registrations.filter(
      (r) => r.paymentStatus === "receipt_uploaded"
    ).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C90A1D]/10 to-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="lg:text-[30px] text-[26px] font-bold text-[#C90A1D] mb-2">
            TRADFIT Admin Dashboard
          </h1>
          <p className="text-[#C90A1D]/80 lg:px-0 px-5 leading-tight">
            Manage event registrations and payment verification
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
          <div className="border border-[#C90A1D]/30 rounded-lg bg-white p-4 text-center">
            <Users
              className="w-8 h-8 text-[#C90A1D] mx-auto mb-2"
              aria-label="Total registrations icon"
            />
            <p className="text-2xl font-bold text-[#C90A1D]">{stats.total}</p>
            <p className="text-sm text-[#C90A1D]/80">Total Registrations</p>
          </div>
          <div className="border border-[#C90A1D]/30 rounded-lg bg-white p-4 text-center">
            <Crown
              className="w-8 h-8 text-[#C90A1D] mx-auto mb-2"
              aria-label="VIP tickets icon"
            />
            <p className="text-2xl font-bold text-[#C90A1D]">{stats.vip}</p>
            <p className="text-sm text-[#C90A1D]/80">VIP Tickets</p>
          </div>
          <div className="border border-[#C90A1D]/30 rounded-lg bg-white p-4 text-center">
            <Users
              className="w-8 h-8 text-[#C90A1D] mx-auto mb-2"
              aria-label="Regular tickets icon"
            />
            <p className="text-2xl font-bold text-[#C90A1D]">{stats.regular}</p>
            <p className="text-sm text-[#C90A1D]/80">Regular Tickets</p>
          </div>
          <div className="border border-[#C90A1D]/30 rounded-lg bg-white p-4 text-center">
            <UserCheck
              className="w-8 h-8 text-[#C90A1D] mx-auto mb-2"
              aria-label="Confirmed icon"
            />
            <p className="text-2xl font-bold text-[#C90A1D]">
              {stats.confirmed}
            </p>
            <p className="text-sm text-[#C90A1D]/80">Confirmed</p>
          </div>
          <div className="border border-[#C90A1D]/30 rounded-lg bg-white p-4 text-center">
            <Upload
              className="w-8 h-8 text-[#C90A1D] mx-auto mb-2"
              aria-label="Receipts uploaded icon"
            />
            <p className="text-2xl font-bold text-[#C90A1D]">
              {stats.receiptsUploaded}
            </p>
            <p className="text-sm text-[#C90A1D]/80">Receipts Uploaded</p>
          </div>
          <div className="border border-[#C90A1D]/30 rounded-lg bg-white p-4 text-center">
            <Calendar
              className="w-8 h-8 text-[#C90A1D] mx-auto mb-2"
              aria-label="Pending icon"
            />
            <p className="text-2xl font-bold text-[#C90A1D]">{stats.pending}</p>
            <p className="text-sm text-[#C90A1D]/80">Pending</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 border border-[#C90A1D]/30 rounded-lg bg-white">
          <div className="p-6">
            <h2 className="text-xl font-bold text-[#C90A1D] flex items-center gap-2">
              <Filter className="w-5 h-5" aria-label="Filter icon" />
              Filters & Search
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="relative">
                <Search
                  className="w-4 h-4 absolute left-3 top-3 text-[#C90A1D]"
                  aria-label="Search icon"
                />
                <input
                  placeholder="Search by name, email, or ticket ID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-2 focus:outline-none"
                  aria-label="Search registrations"
                />
              </div>

              <select
                value={filterTicketType}
                onChange={(e) => setFilterTicketType(e.target.value)}
                className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-2 focus:outline-none"
                aria-label="Filter by ticket type"
              >
                <option value="all">All Tickets</option>
                <option value="regular">Regular</option>
                <option value="vip">VIP</option>
              </select>

              <select
                value={filterAgeRange}
                onChange={(e) => setFilterAgeRange(e.target.value)}
                className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-2 focus:outline-none"
                aria-label="Filter by age range"
              >
                <option value="all">All Ages</option>
                <option value="18-25">18-25</option>
                <option value="25-35">25-35</option>
                <option value="35-45">35-45</option>
                <option value="45-55">45-55</option>
                <option value="55+">55+</option>
              </select>

              <select
                value={filterGender}
                onChange={(e) => setFilterGender(e.target.value)}
                className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-2 focus:outline-none"
                aria-label="Filter by gender"
              >
                <option value="all">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <select
                value={filterPaymentStatus}
                onChange={(e) => setFilterPaymentStatus(e.target.value)}
                className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-2 focus:outline-none"
                aria-label="Filter by payment status"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending Payment</option>
                <option value="receipt_uploaded">Receipt Uploaded</option>
                <option value="confirmed">Confirmed</option>
              </select>

              <button
                onClick={exportToCSV}
                className="bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md p-2 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" aria-label="Download icon" />
                Export CSV
              </button>
            </div>
          </div>
        </div>

        {/* Registrations Table */}
        <div className="border border-[#C90A1D]/30 rounded-lg bg-white">
          <div className="p-6">
            <h2 className="text-xl font-bold text-[#C90A1D]">
              Registration Data ({filteredRegistrations.length} records)
            </h2>
            <p className="text-[#C90A1D]/80 text-sm">
              Review payment receipts and manage participant confirmations
            </p>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[800px] sm:min-w-full">
                <thead>
                  <tr className="bg-[#C90A1D]/10">
                    <th className="p-3 text-left text-[#C90A1D] font-semibold whitespace-nowrap sm:p-2 text-sm sm:text-base">
                      Name
                    </th>
                    <th className="p-3 text-left text-[#C90A1D] font-semibold whitespace-nowrap sm:p-2 text-sm sm:text-base">
                      Contact
                    </th>
                    <th className="p-3 text-left text-[#C90A1D] font-semibold whitespace-nowrap sm:p-2 text-sm sm:text-base">
                      Demographics
                    </th>
                    <th className="p-3 text-left text-[#C90A1D] font-semibold whitespace-nowrap sm:p-2 text-sm sm:text-base">
                      Ticket
                    </th>
                    <th className="p-3 text-left text-[#C90A1D] font-semibold whitespace-nowrap sm:p-2 text-sm sm:text-base">
                      Registration Date
                    </th>
                    <th className="p-3 text-left text-[#C90A1D] font-semibold whitespace-nowrap sm:p-2 text-sm sm:text-base">
                      Payment Status
                    </th>
                    <th className="p-3 text-left text-[#C90A1D] font-semibold whitespace-nowrap sm:p-2 text-sm sm:text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRegistrations.map((registration) => (
                    <tr
                      key={registration.ticketId}
                      className="border-t border-[#C90A1D]/30"
                    >
                      <td className="p-3 sm:p-2 whitespace-nowrap">
                        <div>
                          <p className="font-medium text-[#C90A1D] text-sm sm:text-base">
                            {registration.firstName} {registration.lastName}
                          </p>
                          <p className="text-sm text-[#C90A1D]/80 font-mono">
                            ID: {registration.ticketId}
                          </p>
                        </div>
                      </td>
                      <td className="p-3 sm:p-2 whitespace-nowrap">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Mail
                              className="w-3 h-3 text-[#C90A1D]"
                              aria-label="Mail icon"
                            />
                            <span className="text-[#C90A1D]/80">
                              {registration.email}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Phone
                              className="w-3 h-3 text-[#C90A1D]"
                              aria-label="Phone icon"
                            />
                            <span className="text-[#C90A1D]/80">
                              {registration.phone}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 sm:p-2 whitespace-nowrap">
                        <div className="space-y-1">
                          <span className="border border-[#C90A1D]/30 text-[#C90A1D]/80 text-xs px-2 py-1 rounded">
                            {registration.gender}
                          </span>
                          <p className="text-sm text-[#C90A1D]/80">
                            {registration.ageRange} years
                          </p>
                        </div>
                      </td>
                      <td className="p-3 sm:p-2 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 rounded text-sm font-medium ${
                            registration.ticketType === "vip"
                              ? "bg-[#C90A1D] text-white"
                              : "bg-[#C90A1D]/10 text-[#C90A1D]"
                          }`}
                        >
                          {registration.ticketType === "vip"
                            ? "VIP"
                            : "Regular"}
                        </span>
                      </td>
                      <td className="p-3 sm:p-2 whitespace-nowrap">
                        <p className="text-sm text-[#C90A1D]/80">
                          {new Date(
                            registration.registrationDate
                          ).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-[#C90A1D]/60">
                          {new Date(
                            registration.registrationDate
                          ).toLocaleTimeString()}
                        </p>
                      </td>
                      <td className="p-3 sm:p-2 whitespace-nowrap">
                        <div className="space-y-1">
                          {registration.confirmed ? (
                            <span className="bg-[#C90A1D] hover:bg-[#A30818] text-white px-2 py-1 rounded text-sm font-medium flex items-center gap-1">
                              <CheckCircle
                                className="w-3 h-3"
                                aria-label="Confirmed icon"
                              />
                              Confirmed
                            </span>
                          ) : registration.paymentStatus ===
                            "receipt_uploaded" ? (
                            <span className="bg-[#C90A1D]/80 hover:bg-[#A30818]/80 text-white px-2 py-1 rounded text-sm font-medium flex items-center gap-1">
                              <Upload
                                className="w-3 h-3"
                                aria-label="Receipt uploaded icon"
                              />
                              Receipt Uploaded
                            </span>
                          ) : registration.paymentStatus === "rejected" ? (
                            <span className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-sm font-medium flex items-center gap-1">
                              <XCircle
                                className="w-3 h-3"
                                aria-label="Rejected icon"
                              />
                              Rejected
                            </span>
                          ) : (
                            <span className="bg-[#A30818] hover:bg-[#C90A1D] text-white px-2 py-1 rounded text-sm font-medium flex items-center gap-1">
                              <AlertCircle
                                className="w-3 h-3"
                                aria-label="Pending payment icon"
                              />
                              Pending Payment
                            </span>
                          )}
                          {registration.receiptUploadDate && (
                            <p className="text-xs text-[#C90A1D]/60">
                              Uploaded:{" "}
                              {new Date(
                                registration.receiptUploadDate
                              ).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="p-3 sm:p-2 whitespace-nowrap">
                        <div className="flex gap-2">
                          {registration.receiptUrl && (
                            <>
                              <button
                                onClick={() => {
                                  setSelectedRegistration(registration);
                                  setIsModalOpen(true);
                                }}
                                className="border border-[#C90A1D]/30 text-[#C90A1D] hover:bg-[#C90A1D]/10 rounded-md px-3 py-1 text-sm"
                                aria-label="View receipt"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              {isModalOpen &&
                                selectedRegistration &&
                                selectedRegistration.ticketId ===
                                  registration.ticketId && (
                                  <div
                                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 lg:m-0 m-7"
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-title"
                                    aria-describedby="modal-description"
                                  >
                                    <div className="bg-white max-w-2xl w-full rounded-lg p-6">
                                      <div className="mb-4">
                                        <h3
                                          id="modal-title"
                                          className="text-lg font-bold text-[#C90A1D]"
                                        >
                                          Payment Receipt -{" "}
                                          {registration.ticketId}
                                        </h3>
                                        <p
                                          id="modal-description"
                                          className="text-[#C90A1D]/80 text-sm"
                                        >
                                          {registration.firstName}{" "}
                                          {registration.lastName} (
                                          {registration.ticketType.toUpperCase()}{" "}
                                          Ticket)
                                        </p>
                                      </div>
                                      <div className="space-y-4">
                                        <img
                                          src={
                                            registration.receiptUrl ||
                                            "/placeholder.svg"
                                          }
                                          alt="Payment receipt"
                                          className="max-w-full h-auto max-h-96 mx-auto rounded border border-[#C90A1D]/30"
                                        />
                                        <div className="lg:flex block lg:space-y-0 space-y-3 gap-2 justify-center">
                                          <button
                                            onClick={() =>
                                              handlePaymentAction(
                                                registration.ticketId,
                                                "approve"
                                              )
                                            }
                                            className="bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md px-4 py-2 lg:w-fit w-full flex items-center justify-center gap-2"
                                          >
                                            <CheckCircle
                                              className="w-4 h-4"
                                              aria-label="Approve icon"
                                            />
                                            Approve Payment
                                          </button>
                                          <button
                                            onClick={() =>
                                              handlePaymentAction(
                                                registration.ticketId,
                                                "reject"
                                              )
                                            }
                                            className="bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2 lg:w-fit w-full flex items-center justify-center gap-2"
                                          >
                                            <XCircle
                                              className="w-4 h-4"
                                              aria-label="Reject icon"
                                            />
                                            Reject Payment
                                          </button>
                                          <button
                                            onClick={() =>
                                              setIsModalOpen(false)
                                            }
                                            className="border border-[#C90A1D]/30 text-[#C90A1D] hover:bg-[#C90A1D]/10 rounded-md lg:w-fit w-full flex items-center justify-center px-4 py-2"
                                          >
                                            Close
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                            </>
                          )}
                          {!registration.receiptUrl &&
                            !registration.confirmed && (
                              <button
                                onClick={() =>
                                  handlePaymentAction(
                                    registration.ticketId,
                                    "approve"
                                  )
                                }
                                className="border border-[#C90A1D] text-[#C90A1D] hover:bg-[#C90A1D]/10 rounded-md px-3 py-1 text-sm flex items-center gap-2"
                                aria-label="Manually approve payment"
                              >
                                <CheckCircle className="w-4 h-4" />
                                Manual Approve
                              </button>
                            )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredRegistrations.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-[#C90A1D]/80">
                    No registrations found matching your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
