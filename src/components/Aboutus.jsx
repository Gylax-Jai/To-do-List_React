import React from 'react';

const Aboutus = () => {
  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">
        About Our To-Do List App
      </h1>
      <h3 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium mb-6">
        Organize Your Life, One Task at a Time
      </h3>
      <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg leading-relaxed mb-4">
        Our To-Do List app is designed to help you stay productive and organized.
        Whether you have daily errands, work projects, or long-term goals, enjoy a clean and intuitive interface to manage your tasks anywhere.
      </p>
      <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg leading-relaxed mb-4">
        Features like <span className="font-semibold text-indigo-600 dark:text-indigo-400">task prioritization</span>,
        <span className="font-semibold text-indigo-600 dark:text-indigo-400"> deadline reminders</span>, and
        <span className="font-semibold text-indigo-600 dark:text-indigo-400"> easy categorization</span> help you focus on what matters, boosting your productivity cross-device.
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-8">
        © 2025 To-Do List App. All rights reserved.
      </p>
    </div>
  );
};

export default Aboutus;
