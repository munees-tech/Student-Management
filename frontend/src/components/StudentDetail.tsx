
import useStudentStore from "../stores/useStudentStore";

export const StudentDetail = () => {
  const { getStudent } = useStudentStore() as any;

  const student = getStudent();

  console.log(student)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button className="text-blue-600 hover:text-blue-900 font-semibold mb-4">
            ← Back to List
          </button>
        </div>

        {/* Detail Card */}
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Student Details
          </h1>

          <div className="space-y-6">
            {/* ID */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ID
              </label>

              <p className="text-lg text-gray-900 bg-gray-100 p-3 rounded">
                {student?.id}
              </p>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>

              <p className="text-lg text-gray-900 bg-gray-100 p-3 rounded">
                {student?.name}
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <p className="text-lg text-gray-900 bg-gray-100 p-3 rounded">
                {student?.email}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex space-x-4">
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
              Edit
            </button>

            <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};