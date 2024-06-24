import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountConnect from '../components/AccountConnect';
import "@coinbase/onchainkit/styles.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    // Redirect to admin login page
    navigate('/admin');
  };

  const handleViewCampaigns = () => {
    // Redirect to campaigns page
    navigate('/campaigns');
  };

  const handleCreateCampaign = () => {
    // Redirect to campaign creation page
    navigate('/campaigns/create');
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
        gap={4}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to CryptoSupport
        </Typography>
        <Typography variant="body1" gutterBottom>
          CryptoSupport is an onchain disaster relief fund platform, allowing users to create and manage fundraising campaigns, donate using cryptocurrencies, and track the distribution of funds.
        </Typography>

        <Grid container spacing={4} mt={4} justifyContent='center'>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Looking to Donate?
              </Typography>
              <Box className="inline-flex h-10 items-center justify-center gap-2 rounded-3xl bg-white px-4 py-2">
                <AccountConnect />
              </Box>             
              <Button
                variant="outlined"
                color="primary"
                onClick={handleViewCampaigns}
                sx={{ mt: 2 }}
              >
                View Campaigns
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Want to Create a Campaign?
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleCreateCampaign}
                sx={{ mt: 2 }}
              >
                Create Campaign
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Admin Access
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleAdminLogin}
                sx={{ mt: 2 }}
              >
                Admin Login
              </Button>
            </Paper>

          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
