import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStudentStore from "../stores/useStudentStore";

export const UpdateStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { getStudentById, updateStudent } =
    useStudentStore() as any;

  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    dept: "",
    address: "",
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await getStudentById(id);

        const student = res.student;

        setStudentData({
          name: student.name || "",
          email: student.email || "",
          dept: student.StudentDetail?.[0]?.dept || "",
          address: student.StudentDetail?.[0]?.address || "",
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setStudentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await updateStudent(Number(id), studentData);

      alert("Student updated successfully");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Failed to update student");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-900 font-semibold mb-4"
          >
            ← Back to List
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Update Student
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
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
                Dept
              </label>

              <input
                name="dept"
                value={studentData.dept}
                onChange={handleChange}
                type="text"
                placeholder="Enter department"
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
                placeholder="Enter address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Update
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