'use client';

import { useState } from 'react';
import TeacherForm from './components/TeacherForm';
import TeacherTable from './components/TeacherTable';

type Teacher = {
  name: string;
  subject: string;
  email: string;
  phone: string;
};

export default function Home() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const handleAddTeacher = (newTeacher: Teacher) => {
    setTeachers([...teachers, newTeacher]);
  };

  const handleDeleteTeacher = (index: number) => {
    const updatedList = teachers.filter((_, i) => i !== index);
    setTeachers(updatedList);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Teacher Management Interface
        </h1>
        <TeacherForm onAdd={handleAddTeacher} />
        <TeacherTable teachers={teachers} onDelete={handleDeleteTeacher} />
      </div>
    </main>
  );
}
