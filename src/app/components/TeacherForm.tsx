// src/components/TeacherForm.tsx
'use client';

import { useState } from 'react';

type Teacher = {
  name: string;
  subject: string;
  email: string;
  phone: string;
};

export default function TeacherForm({ onAdd }: { onAdd: (teacher: Teacher) => void }) {
  const [teacher, setTeacher] = useState<Teacher>({ name: '', subject: '', email: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(teacher);
    setTeacher({ name: '', subject: '', email: '', phone: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-700">Add Teacher</h2>
      <input
        type="text"
        name="name"
        value={teacher.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="text"
        name="subject"
        value={teacher.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="email"
        name="email"
        value={teacher.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="tel"
        name="phone"
        value={teacher.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Add Teacher
      </button>
    </form>
  );
}
