import { useState } from "react";

// Mock data for students and compliance status
const mockStudents = [
    {
      id: "T21139",
      name: "Rahul Patel",
      compliance: "Completed",
      completionDate: "2024-11-01",
      dueDate: null,
      totalFees: 50000,
      pendingFees: 0,
    },
    {
      id: "T21140",
      name: "Aisha Khan",
      compliance: "Pending",
      completionDate: null,
      dueDate: "2024-11-20",
      totalFees: 50000,
      pendingFees: 20000,
    },
    {
      id: "T21141",
      name: "Siddharth Sharma",
      compliance: "Completed",
      completionDate: "2024-11-05",
      dueDate: null,
      totalFees: 45000,
      pendingFees: 0,
    },
    {
      id: "T21142",
      name: "Priya Singh",
      compliance: "Pending",
      completionDate: null,
      dueDate: "2024-11-22",
      totalFees: 55000,
      pendingFees: 15000,
    },
    {
      id: "T21143",
      name: "Arjun Kumar",
      compliance: "Completed",
      completionDate: "2024-11-10",
      dueDate: null,
      totalFees: 60000,
      pendingFees: 0,
    },
    {
      id: "T21144",
      name: "Neha Gupta",
      compliance: "Pending",
      completionDate: null,
      dueDate: "2024-11-25",
      totalFees: 48000,
      pendingFees: 12000,
    },
    {
      id: "T21145",
      name: "Rohan Verma",
      compliance: "Completed",
      completionDate: "2024-11-12",
      dueDate: null,
      totalFees: 52000,
      pendingFees: 0,
    },
    {
      id: "T21146",
      name: "Anjali Mishra",
      compliance: "Pending",
      completionDate: null,
      dueDate: "2024-11-28",
      totalFees: 56000,
      pendingFees: 18000,
    },
    {
      id: "T21147",
      name: "Nikhil Rao",
      compliance: "Completed",
      completionDate: "2024-11-15",
      dueDate: null,
      totalFees: 49000,
      pendingFees: 0,
    },
    {
      id: "T21148",
      name: "Anika Chatterjee",
      compliance: "Pending",
      completionDate: null,
      dueDate: "2024-11-30",
      totalFees: 53000,
      pendingFees: 16000,
    },
  ];
const WardenDashboard = () => {
  const [filter, setFilter] = useState("All");

  // Filtered data based on the selected filter
  const filteredStudents =
    filter === "All"
      ? mockStudents
      : mockStudents.filter((student) => student.compliance === filter);

  // Notifications
  const pendingNotifications = mockStudents
    .filter((student) => student.compliance === "Pending")
    .map(
      (student) =>
        `Reminder: ${student.name} has a pending compliance due on ${student.dueDate}.`
    );

  const completedNotifications = mockStudents
    .filter((student) => student.compliance === "Completed")
    .map(
      (student) =>
        `Info: ${student.name} completed their compliance on ${student.completionDate}.`
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <header className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-slate-900 py-4 px-6">
        <h1 className="text-2xl font-bold">Warden Dashboard ( KL Rahul ) </h1>
      </header>
      {/* Notifications Section */}
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
        <ul className="space-y-2 mt-4">
          {pendingNotifications.map((note, index) => (
            <li
              key={index}
              className="p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg text-yellow-800"
            >
              {note}
            </li>
          ))}
          {completedNotifications.map((note, index) => (
            <li
              key={index}
              className="p-3 bg-green-100 border-l-4 border-green-500 rounded-lg text-green-800"
            >
              {note}
            </li>
          ))}
        </ul>
      </div>

      {/* Dashboard Table */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Student Dashboard
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              filter === "All"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-gray-800 hover:text-white transition`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Completed")}
            className={`ml-2 px-4 py-2 text-sm font-medium rounded-lg ${
              filter === "Completed"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-gray-800 hover:text-white transition`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("Pending")}
            className={`ml-2 px-4 py-2 text-sm font-medium rounded-lg ${
              filter === "Pending"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-gray-800 hover:text-white transition`}
          >
            Pending
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Student ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Compliance Status
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Completion Date
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Due Date
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Total Fees
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Pending Fees
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {student.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {student.name}
                  </td>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      student.compliance === "Completed"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }`}
                  >
                    {student.compliance}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {student.compliance === "Completed"
                      ? student.completionDate
                      : "—"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {student.compliance === "Pending" ? student.dueDate : "—"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ₹{student.totalFees.toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ₹{student.pendingFees.toLocaleString()}
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

export default WardenDashboard;