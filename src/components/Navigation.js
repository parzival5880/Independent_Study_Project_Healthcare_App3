import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'; // Dropdown icon

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLogout = () => {
    console.log('Logged out'); // Replace with actual logout logic
  };

  const handleChangePassword = () => {
    console.log('Change password'); // Replace with routing to change password logic
  };

  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Healthcare Dashboard</div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 text-red-500 hover:text-red-700"
        >
          <span>Logout</span>
          <FiChevronDown className="h-4 w-4" />
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
            <button
              onClick={handleLogout}
              className="block px-4 py-2 w-full text-left hover:bg-gray-100"
            >
              Logout
            </button>
            <button
              onClick={handleChangePassword}
              className="block px-4 py-2 w-full text-left hover:bg-gray-100"
            >
              Change Password
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
