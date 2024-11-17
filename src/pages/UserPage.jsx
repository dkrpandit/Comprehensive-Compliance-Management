import React from "react";

// Mock user data
const userComplianceData = {
  name: "John Doe",
  compliances: [
    {
      id: 1,
      type: "Hostel Fees",
      status: "Completed",
      completionDate: "2024-11-05",
      dueDate: null,
    },
    {
      id: 2,
      type: "Academic Fees",
      status: "Pending",
      completionDate: null,
      dueDate: "2024-11-20",
    },
    {
      id: 3,
      type: "Library Dues",
      status: "Pending",
      completionDate: null,
      dueDate: "2024-12-10",
    },
  ],
};

const UserPage = () => {
  const { name, compliances } = userComplianceData;

  // Generate notifications
  const pendingNotifications = compliances
    .filter((compliance) => compliance.status === "Pending")
    .map(
      (compliance) =>
        `Reminder: Your ${compliance.type} is due on ${compliance.dueDate}.`
    );

  const completedNotifications = compliances
    .filter((compliance) => compliance.status === "Completed")
    .map(
      (compliance) =>
        `Info: You completed your ${compliance.type} on ${compliance.completionDate}.`
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* User Greeting */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome, {name}!</h1>
        <p className="text-gray-600 mt-2">
          Here you can view your compliance details and notifications.
        </p>
      </div>

      {/* Notifications Section */}
      <div className="max-w-4xl mx-auto mb-6">
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

      {/* Compliance Details Table */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Compliances</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Compliance ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Completion Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {compliances.map((compliance) => (
                <tr key={compliance.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{compliance.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{compliance.type}</td>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      compliance.status === "Completed"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }`}
                  >
                    {compliance.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {compliance.completionDate || "—"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {compliance.dueDate || "—"}
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

export default UserPage;
