import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/tasks/taskSlice';
// import timetable from '.././images/timetable.png';
// import photo_bg from '.././images/photo_bg.png';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between items-center bg-blue-500 p-4 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="../../public/assets/timetable.png" alt="Logo" className="h-8 w-8 mr-3" />
        <h1 className="text-white text-lg font-bold">Task Manager</h1>
      </div>

      {/* Filters Section */}
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(setFilter('all'))}
          className="text-white font-medium hover:text-gray-300"
        >
          All Tasks
        </button>
        <button
          onClick={() => dispatch(setFilter('completed'))}
          className="text-white font-medium hover:text-gray-300"
        >
          Completed
        </button>
        <button
          onClick={() => dispatch(setFilter('incomplete'))}
          className="text-white font-medium hover:text-gray-300"
        >
          Incomplete
        </button>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center space-x-3">
        <span className="text-white font-medium">Ashutosh Singh</span>
        <img
          src="../../public/assets/photobg.png"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
