import React from 'react';
import { Container, Typography } from '@mui/material';

const Donate: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Donate
      </Typography>
      <Typography variant="body1">
        Donation form and payment options will be available here.
      </Typography>
    </Container>
  );
};

export default Donate;