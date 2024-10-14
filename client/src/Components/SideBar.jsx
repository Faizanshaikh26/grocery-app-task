import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // List of paths that are functional
  const functionalPaths = ['/dashboard', '/user'];

  const handleLinkClick = (e, path) => {
    if (!functionalPaths.includes(path)) {
      e.preventDefault(); // Prevent navigation for non-functional paths
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-[#1A1A1A] h-screen fixed top-0 left-0 z-50 p-4 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}
      >
        {/* Logo and Toggle */}
        <div className="flex items-center justify-between mb-10">
          <i className={`bx bxl-audible text-white text-2xl ${isOpen ? 'mr-3' : ''}`} />
          <span
            className={`text-white text-xl font-semibold transition-all duration-300 ${isOpen ? 'inline-block' : 'hidden'}`}
          >
           AppName
          </span>
          <i
            className="bx bx-menu text-[30px] text-white cursor-pointer relative bottom-3 left-2"
            onClick={toggleSidebar}
          />
        </div>

        {/* Navigation Links */}
        <ul className="space-y-4">
          {[
            { path: '/dashboard', icon: 'bx-grid-alt', name: 'Dashboard' },
            { path: '/user', icon: 'bx-user', name: 'User' },
            { path: '/contact', icon: 'bx-chat', name: 'Message' },
            { path: '/analytics', icon: 'bx-pie-chart-alt-2', name: 'Analytics' },
            { path: '/files', icon: 'bx-folder', name: 'File Manager' },
            { path: '/order', icon: 'bx-cart-alt', name: 'Order' },
            { path: '/settings', icon: 'bx-cog', name: 'Settings' },
          ].map((link, index) => (
            <li key={index} className="relative group">
              <NavLink
                to={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={({ isActive }) =>
                  `flex items-center text-white p-2 rounded-md hover:bg-[#C4C4C4] hover:text-[#1A1A1A] transition-colors duration-300 ${
                    isActive ? 'bg-[#C4C4C4] text-[#1A1A1A]' : ''
                  } ${!functionalPaths.includes(link.path) ? 'cursor-not-allowed opacity-50' : ''}`
                }
              >
                <i className={`bx ${link.icon} text-xl`} />
                <span
                  className={`ml-4 transition-opacity duration-300 ${isOpen ? 'inline-block' : 'hidden'}`}
                >
                  {link.name}
                </span>
              </NavLink>
              {!isOpen && (
                <span className="absolute left-20 bg-[#FAFAFA] text-[#1A1A1A] py-1 px-3 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {link.name}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Profile Section */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div
            className={`flex items-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src="profile.jpeg"
              alt="profile"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <div className="text-white font-semibold">Anna Jhon</div>
              <div className="text-sm text-gray-300">Admin</div>
            </div>
          </div>
          <i
            className={`bx bx-log-out text-[28px] text-white cursor-pointer mt-4 ${isOpen ? 'absolute left-[80%] top-2' : ''}`}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-grow transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-20'}`}>
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
