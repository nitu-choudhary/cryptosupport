import React from 'react';
import { Container, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        User-specific information and actions will be available here.
      </Typography>
    </Container>
  );
};

export default Dashboard;
