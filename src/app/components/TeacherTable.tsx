'use client';

type Teacher = {
  name: string;
  subject: string;
  email: string;
  phone: string;
};

export default function TeacherTable({
  teachers,
  onDelete,
}: {
  teachers: Teacher[];
  onDelete: (index: number) => void;
}) {
  return (
    <div className="mt-10 overflow-x-auto rounded-xl shadow-md">
      <table className="min-w-full divide-y divide-gray-200 bg-white dark:bg-gray-900 dark:text-white">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Subject
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {teachers.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center px-6 py-4 text-sm text-gray-500">
                No teachers added yet.
              </td>
            </tr>
          ) : (
            teachers.map((teacher, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="px-6 py-4 whitespace-nowrap">{teacher.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => onDelete(index)}
                    className="text-red-600 hover:text-red-800 font-medium"
                    aria-label={`Delete ${teacher.name}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
