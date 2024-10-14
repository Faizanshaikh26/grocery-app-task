import React from 'react';
import Navbar from './Components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-8 mt-[100px]">
        <h1 className="text-2xl font-bold mb-4">Project Overview</h1>
        <p>
          This project involves creating a responsive login, signup, and dashboard page using React and Tailwind CSS. The goal is to ensure a user-friendly interface with clean, responsive designs that work seamlessly across various devices.
        </p>
        <h2 className="text-xl font-semibold mt-4">Features:</h2>
        <ul className="list-disc pl-8">
          <li>Login and Signup functionality with form validation</li>
          <li>Responsive design using Tailwind CSS</li>
          <li>Basic dashboard layout with sidebar and dynamic content area</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
