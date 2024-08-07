import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 30px;
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.white};
  }

  tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const TravelRequests = () => {
  const [requests, setRequests] = useState([]); // Replace with real data fetching
  const [newRequest, setNewRequest] = useState({ employeeName: '', travelDate: '', status: '' });

  const handleAddRequest = () => {
    setRequests([...requests, { ...newRequest, id: requests.length + 1 }]);
    setNewRequest({ employeeName: '', travelDate: '', status: '' });
  };

  const handleDeleteRequest = (id) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  return (
    <Container>
      <Title>Travel Requests</Title>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddRequest();
        }}
      >
        <input
          type="text"
          placeholder="Employee Name"
          value={newRequest.employeeName}
          onChange={(e) => setNewRequest({ ...newRequest, employeeName: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="Travel Date"
          value={newRequest.travelDate}
          onChange={(e) => setNewRequest({ ...newRequest, travelDate: e.target.value })}
          required
        />
        <select
          value={newRequest.status}
          onChange={(e) => setNewRequest({ ...newRequest, status: e.target.value })}
          required
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
        <Button type="submit">Add Request</Button>
      </form>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Travel Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.employeeName}</td>
              <td>{request.travelDate}</td>
              <td>{request.status}</td>
              <td>
                <Button onClick={() => handleDeleteRequest(request.id)}>Delete</Button>
                {/* Add edit functionality as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TravelRequests;
