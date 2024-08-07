import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.background};
`;

const DashboardHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
`;

const DashboardSection = styled.div`
  margin-top: 20px;
`;

const DashboardCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const EmployeeDashboard = () => {
  return (
    <DashboardContainer>
      <DashboardHeader>Employee Dashboard</DashboardHeader>
      <DashboardSection>
        <DashboardCard>
          <h2>View Travel Requests</h2>
          {/* Implement functionality to view travel requests here */}
        </DashboardCard>
      </DashboardSection>
      <DashboardSection>
        <DashboardCard>
          <h2>Personal Information</h2>
          {/* Implement functionality to view and edit personal information here */}
        </DashboardCard>
      </DashboardSection>
      <DashboardSection>
        <DashboardCard>
          <h2>Upcoming Travel Plans</h2>
          {/* Implement functionality to view upcoming travel plans here */}
        </DashboardCard>
      </DashboardSection>
    </DashboardContainer>
  );
};

export default EmployeeDashboard;
