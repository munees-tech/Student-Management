import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStudentStore from "../stores/useStudentStore";

export const StudentList = () => {
  const navigate = useNavigate();

  const { isLoading, students, getStudent, deleteStudent } =
    useStudentStore() as any;

  useEffect(() => {
    getStudent();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteStudent(id);
        alert("Student deleted successfully !");
      } catch (error) {
        console.error("Error deleting student:", error);
        alert("Failed to delete student.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Student Management
          </h1>

          <button
            onClick={() => navigate("/create")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition w-full sm:w-auto"
          >
            + Add Student
          </button>
        </div>

        {/* Responsive Table */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                  ID
                </th>

                <th className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                  Name
                </th>

                <th className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                  Email
                </th>

                <th className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                  Department
                </th>

                <th className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                  Address
                </th>

                <th className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-6 text-gray-500"
                  >
                    Loading...
                  </td>
                </tr>
              ) : students?.length > 0 ? (
                students.map((student: any) => (
                  <tr
                    key={student?.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="px-3 py-4 sm:px-6 whitespace-nowrap">
                      {student?.id}
                    </td>

                    <td className="px-3 py-4 sm:px-6 whitespace-nowrap">
                      {student?.name}
                    </td>

                    <td className="px-3 py-4 sm:px-6 whitespace-nowrap">
                      {student?.email}
                    </td>

                    <td className="px-3 py-4 sm:px-6 whitespace-nowrap">
                      {student?.StudentDetail?.[0]?.dept || "N/A"}
                    </td>

                    <td className="px-3 py-4 sm:px-6 whitespace-nowrap">
                      {student?.StudentDetail?.[0]?.address || "N/A"}
                    </td>

                    <td className="px-3 py-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        {/* Edit Button */}
                        <button
                          onClick={() =>
                            navigate(`/edit/${student.id}`)
                          }
                          className="text-green-600 hover:text-green-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                            <path d="m15 5 4 4" />
                          </svg>
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() =>
                            handleDelete(student.id)
                          }
                          className="text-red-600 hover:text-red-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M3 6h18" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-6 text-gray-500"
                  >
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};