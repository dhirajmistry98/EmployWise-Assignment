import React, { useState, useEffect } from "react";
import api from "../services/api";
import UserCard from "./UserCard";
import EditUserView from "./EditUserView";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.getUsers(page);
      setUsers(response.data);
      setTotalPages(response.total_pages);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch users");
      setLoading(false);
    }
  };

  const handleDeleteUser = (deletedUserId) => {
    setUsers(users.filter((user) => user.id !== deletedUserId));
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(
      users.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
    setEditingUser(null); // Close the edit view
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div className="user-list-container">Loading...</div>;
  if (error) return <div className="user-list-container">{error}</div>;

  return (
    <div className="user-list-container">
      {editingUser ? (
        <EditUserView
          user={editingUser}
          onSave={handleUpdateUser}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          <div className="user-list-header">
            <h1 className="user-list-title">User Management</h1>
            <button className="add-user-button">Add New User</button>
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {filteredUsers.length === 0 ? (
            <div className="no-users">No users found</div>
          ) : (
            <div className="user-grid">
              {filteredUsers.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onDelete={handleDeleteUser}
                  onEdit={() => handleEditClick(user)}
                />
              ))}
            </div>
          )}

          <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`mx-2 px-4 py-2 rounded ${
                    page === pageNum
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {pageNum}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserList;
