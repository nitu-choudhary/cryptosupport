import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const dummyCampaigns = [
  { id: 1, title: "Campaign 1", description: "Description for Campaign 1" },
  { id: 2, title: "Campaign 2", description: "Description for Campaign 2" },
  { id: 3, title: "Campaign 3", description: "Description for Campaign 3" },
];

const Campaigns: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Active Campaigns
      </Typography>
      <Box>
        {dummyCampaigns.map((campaign) => (
          <Card key={campaign.id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5">
                {campaign.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {campaign.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to={`/campaigns/${campaign.id}`}
                sx={{ marginTop: 2 }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Campaigns;
