"use client";
import React, { useState } from "react";

const ManageFixtures = () => {
  // Sample fixtures data
  const [fixtures, setFixtures] = useState([
    {
      id: 1,
      homeTeam: "Storm FC",
      awayTeam: "Shadow Rovers",
      date: "12th April 2025",
      time: "10:00 AM",
      venue: "Basin Stadium",
    },
    {
      id: 2,
      homeTeam: "Thunder Strikers",
      awayTeam: "Blaze Warriors",
      date: "13th April 2025",
      time: "12:00 PM",
      venue: "Ilorin Sports Complex",
    },
  ]);

  // State for adding/editing fixtures
  const [newFixture, setNewFixture] = useState({
    homeTeam: "",
    awayTeam: "",
    date: "",
    time: "",
    venue: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFixture({ ...newFixture, [name]: value });
  };

  // Function to add or update a fixture
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update existing fixture
      setFixtures((prevFixtures) =>
        prevFixtures.map((fixture) =>
          fixture.id === editId ? { ...fixture, ...newFixture } : fixture
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      // Add new fixture
      const newId = fixtures.length + 1;
      setFixtures([...fixtures, { id: newId, ...newFixture }]);
    }
    setNewFixture({ homeTeam: "", awayTeam: "", date: "", time: "", venue: "" });
  };

  // Function to edit a fixture
  const handleEdit = (fixture) => {
    setNewFixture(fixture);
    setIsEditing(true);
    setEditId(fixture.id);
  };

  // Function to delete a fixture
  const handleDelete = (id) => {
    setFixtures((prevFixtures) =>
      prevFixtures.filter((fixture) => fixture.id !== id)
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto tracking-tight">
      <h1 className="text-2xl font-bold mb-8 text-center">Fixtures Management</h1>

      {/* Add/Edit Fixture Form */}
      <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-lg font-bold text-[#C81E23] mb-4">
          {isEditing ? "Edit Fixture" : "Add Fixture"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="homeTeam"
              placeholder="Home Team"
              value={newFixture.homeTeam}
              onChange={handleInputChange}
              className="p-3 rounded-lg bg-[#1F1F1F] text-white"
              required
            />
            <input
              type="text"
              name="awayTeam"
              placeholder="Away Team"
              value={newFixture.awayTeam}
              onChange={handleInputChange}
              className="p-3 rounded-lg bg-[#1F1F1F] text-white"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="date"
              placeholder="Date (e.g., 12th April 2025)"
              value={newFixture.date}
              onChange={handleInputChange}
              className="p-3 rounded-lg bg-[#1F1F1F] text-white"
              required
            />
            <input
              type="text"
              name="time"
              placeholder="Time (e.g., 10:00 AM)"
              value={newFixture.time}
              onChange={handleInputChange}
              className="p-3 rounded-lg bg-[#1F1F1F] text-white"
              required
            />
          </div>
          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={newFixture.venue}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-[#1F1F1F] text-white"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#C81E23] text-white rounded-lg hover:bg-[#A3181C] transition"
          >
            {isEditing ? "Update Fixture" : "Add Fixture"}
          </button>
        </form>
      </div>

      {/* Fixtures List */}
      <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-[#C81E23] mb-4">Fixtures</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left py-2">Home Team</th>
                <th className="text-left py-2">Away Team</th>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Time</th>
                <th className="text-left py-2">Venue</th>
                <th className="text-left py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {fixtures.map((fixture) => (
                <tr key={fixture.id} className="border-b border-[#1F1F1F]">
                  <td className="py-4">{fixture.homeTeam}</td>
                  <td className="py-4">{fixture.awayTeam}</td>
                  <td className="py-4">{fixture.date}</td>
                  <td className="py-4">{fixture.time}</td>
                  <td className="py-4">{fixture.venue}</td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(fixture)}
                        className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(fixture.id)}
                        className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
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

export default ManageFixtures;