import { useNavigate } from "react-router-dom";
import useStudentStore from "../stores/useStudentStore";
import { useState } from "react";

export const StudentForm = () => {
  const { addStudent } = useStudentStore() as any;
  const navigate = useNavigate();

  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    studentId: 0,
    dept: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addStudent(studentData);
      alert("Student added successfully !");
      navigate("/");
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to add student. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-900 font-semibold mb-4"
          >
            ← Back to List
          </button>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Add Student</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>

              <input
                name="name"
                value={studentData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter student name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <input
                name="email"
                value={studentData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter student email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Student ID
              </label>

              <input
                name="studentId"
                value={studentData.studentId}
                onChange={handleChange}
                type="number"
                placeholder="Enter student ID"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Dept
              </label>

              <input
                name="dept"
                value={studentData.dept}
                onChange={handleChange}
                type="text"
                placeholder="Enter student Dept"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address
              </label>

              <input
                name="address"
                value={studentData.address}
                onChange={handleChange}
                type="text"
                placeholder="Enter student Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
