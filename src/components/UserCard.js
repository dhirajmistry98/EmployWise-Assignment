import React from "react";

const UserCard = ({ user, onDelete, onEdit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onEdit(user)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
