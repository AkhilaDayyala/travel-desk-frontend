import React from 'react';
 
const UserGrid = ({ users, setEditingUser, deleteUser }) => {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Employee ID</th>
          <th>Department</th>
          <th>Role</th>
          <th>Manager Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.employeeId}</td>
            <td>{user.department}</td>
            <td>{user.role}</td>
            <td>{user.managerName}</td>
            <td>
              <button className="btn btn-warning" onClick={() => setEditingUser(user)}>Edit</button>
              <button className="btn btn-danger ml-2" onClick={() => deleteUser(user.id)}>Delete</button>
              <button className="btn btn-primary ml-2">Assign Role</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
 
export default UserGrid;