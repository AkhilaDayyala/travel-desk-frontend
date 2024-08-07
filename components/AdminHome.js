import React, { useState } from 'react';
import UserForm from './UserForm';
import UserGrid from './Usergrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminHome.css';
 
const AdminHome = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
 
  const addUser = (user) => {
    setUsers([...users, user]);
  };
 
  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    setEditingUser(null);
  };
 
  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };
 
  const countUsersByRole = (role) => {
    return users.filter(user => user.role === role).length;
  };
 
  return (
    <div className="admin-home">
      <h1 className="text-center text-white py-4">Admin Home Page</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <UserGrid users={users} setEditingUser={setEditingUser} deleteUser={deleteUser} />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <h3 className="text-white">Total Users by Role</h3>
            <ul className="list-group">
              {/* <li className="list-group-item admin">Admins: {countUsersByRole('admin')}</li> */}
              <li className="list-group-item employee">Employees: {countUsersByRole('employee')}</li>
              {/* <li className="list-group-item hr-travel">HR/Travel: {countUsersByRole('hr/travel')}</li> */}
              <li className="list-group-item manager">Managers: {countUsersByRole('manager')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default AdminHome;
 