import { useState } from "react";
import { FaBell } from "react-icons/fa"; // Notification icon
import { MdKeyboardArrowDown } from "react-icons/md"; // Dropdown arrow
import { DoughnutChart, LineChart } from "../Pages/Charts"; // Assuming you have a LineChart component

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="bg-[#004056] text-white py-3 px-4 sm:py-4 sm:px-6 shadow-lg">
  <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
    {/* App Name */}
    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight hover:tracking-wide transition-all duration-300 mb-2 sm:mb-0">
      YourAppName
    </h1>

    {/* Admin Section */}
    <div className="flex items-center space-x-4 sm:space-x-6">
      {/* Notification Icon */}
      <div className="relative">
        <FaBell className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-[#C9FFD5] transition-colors duration-200" />
        <div className="absolute top-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#74CEB7] rounded-full"></div>
      </div>

      {/* Admin Name + Avatar + Dropdown */}
      <div className="relative">
        <div
          className="flex items-center cursor-pointer space-x-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Admin Name */}
          <span className="hidden sm:block text-sm md:text-base font-medium">
            Admin Name
          </span>
          {/* Avatar */}
          <img
            src="https://via.placeholder.com/40"
            alt="Admin Avatar"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
          />
          {/* Dropdown Arrow */}
          <MdKeyboardArrowDown className="text-lg md:text-2xl" />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-36 sm:w-40 md:w-48 bg-[#FFFFCB] text-[#004056] rounded-lg shadow-lg py-2 z-20">
            <a
              href="#profile"
              className="block px-4 py-2 hover:bg-[#C9FFD5] transition-colors duration-200"
            >
              Profile
            </a>
            <a
              href="#settings"
              className="block px-4 py-2 hover:bg-[#C9FFD5] transition-colors duration-200"
            >
              Settings
            </a>
            <a
              href="#logout"
              className="block px-4 py-2 hover:bg-[#C9FFD5] transition-colors duration-200"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
</header>


      <div className="p-6">
        <h1 className="text-3xl font-bold text-[#004056]">Dashboard</h1>

        {/* Grid container for charts */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LineChart with responsive size control */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-[#004056]">
              Messages Over Time
            </h2>
            <div className="relative w-full h-64 lg:h-72 xl:h-80">
              <LineChart />
            </div>
          </div>

          {/* DoughnutChart with responsive size control */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-[#004056]">
              Task Distribution
            </h2>
            <div className="relative w-full h-64 lg:h-72 xl:h-80">
              <DoughnutChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
