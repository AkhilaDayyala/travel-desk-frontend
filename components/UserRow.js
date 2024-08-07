import React from 'react';
 
const UserRow = ({ user, setEditingUser, deleteUser }) => {
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.employeeId}</td>
      <td>{user.department}</td>
      <td>{user.role}</td>
      <td>{user.managerName}</td>
      <td>
        <button
          className="btn btn-warning mr-2"
          onClick={() => setEditingUser(user)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => deleteUser(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
 
export default UserRow;
 