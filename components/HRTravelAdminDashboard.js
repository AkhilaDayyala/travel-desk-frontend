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

const StatisticsCard = styled(DashboardCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HRTravelAdminDashboard = () => {
  return (
    <DashboardContainer>
      <DashboardHeader>HR Travel Admin Dashboard</DashboardHeader>
      <DashboardSection>
        <DashboardCard>
          <h2>Manage Travel Requests</h2>
          {/* Implement functionality to manage travel requests here */}
        </DashboardCard>
      </DashboardSection>
      <DashboardSection>
        <StatisticsCard>
          <div>
            <h2>Total Requests</h2>
            {/* Display total number of travel requests */}
          </div>
          <div>
            <h2>Pending Requests</h2>
            {/* Display number of pending travel requests */}
          </div>
        </StatisticsCard>
      </DashboardSection>
      <DashboardSection>
        <DashboardCard>
          <h2>Travel Statistics</h2>
          {/* Implement functionality to view travel statistics */}
        </DashboardCard>
      </DashboardSection>
      <DashboardSection>
        <DashboardCard>
          <h2>Employee Reports</h2>
          {/* Implement functionality to generate employee reports */}
        </DashboardCard>
      </DashboardSection>
    </DashboardContainer>
  );
};

export default HRTravelAdminDashboard;
