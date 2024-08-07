import React, { useState, useEffect } from 'react';
 
const UserForm = ({ addUser, updateUser, editingUser }) => {
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    employeeId: '',
    department: '',
    role: '',
    managerName: '',
  });
 
  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData({
        id: '',
        firstName: '',
        lastName: '',
        employeeId: '',
        department: '',
        role: '',
        managerName: '',
      });
    }
  }, [editingUser]);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(formData);
    } else {
      addUser({ ...formData, id: Date.now().toString() });
    }
    setFormData({
      id: '',
      firstName: '',
      lastName: '',
      employeeId: '',
      department: '',
      role: '',
      managerName: '',
    });
  };
 
  return (
    <div className="card p-4">
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <label>First Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <label>Last Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            placeholder="Employee ID"
            required
          />
          <label>Employee ID</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
            required
          />
          <label>Department</label>
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-control"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Choose role</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
            <option value="hr/travel">HR/Travel</option>
            <option value="manager">Manager</option>
          </select>
          <label>Role</label>
        </div>
        {formData.role !== 'manager' && (
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="managerName"
              value={formData.managerName}
              onChange={handleChange}
              placeholder="Manager Name"
            />
            <label>Manager Name</label>
          </div>
        )}
        <button type="submit" className="btn btn-success w-100">
          {editingUser ? 'Update User' : 'Add User'}
        </button>
      </form>
    </div>
  );
};
 
export default UserForm;
 