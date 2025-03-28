import React, { useState } from "react";
import "./EditUserView.css";

const EditUserView = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    email: user.email || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...user, ...formData });
  };

  return (
    <div className="edit-user-container">
      <div className="edit-user-card">
        <button className="close-button" onClick={onCancel}>
          &times;
        </button>

        <div className="edit-user-header">
          <img
            src={user.avatar}
            alt={`${formData.first_name} ${formData.last_name}`}
            className="user-avatar"
          />
          <div>
            <h2 className="edit-user-title">Edit User</h2>
            <p className="user-email">{user.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="button-group">
            <button type="button" className="cancel-button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserView;
