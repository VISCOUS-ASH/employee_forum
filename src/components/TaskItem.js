import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import Modal from './Modal';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true); // Show the modal when the delete button is clicked
  };

  const confirmDelete = () => {
    dispatch(deleteTask(task.id)); // Dispatch delete action
    setShowModal(false); 
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal without deleting
  };

  return (
    <div className={`flex justify-between items-center p-2 md:p-4 mb-3 rounded-md shadow ${task.completed ? 'bg-gray-200' : 'bg-white'}`}>
      <span
        onClick={() => dispatch({ type: 'tasks/toggleTask', payload: task.id })}
        className={`cursor-pointer text-sm md:text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
      >
        {task.title}
      </span>
      <button
        onClick={handleDelete}
        className="px-3 md:px-4 py-1 md:py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600 transition duration-300"
      >
        Delete
      </button>

      {/* Modal Component */}
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default TaskItem;
