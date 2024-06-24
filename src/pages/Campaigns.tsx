import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const dummyCampaigns = [
  { id: 1, title: "Campaign 1", description: "Description for Campaign 1", imageUrl: "https://via.placeholder.com/150" },
  { id: 2, title: "Campaign 2", description: "Description for Campaign 2", imageUrl: "https://via.placeholder.com/150" },
  { id: 3, title: "Campaign 3", description: "Description for Campaign 3", imageUrl: "https://via.placeholder.com/150" },
  { id: 4, title: "Campaign 4", description: "Description for Campaign 4", imageUrl: "https://via.placeholder.com/150" },
  { id: 5, title: "Campaign 5", description: "Description for Campaign 5", imageUrl: "https://via.placeholder.com/150" },
];

const Campaigns: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Active Campaigns
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: 4, paddingBottom: 4 }}>
        {dummyCampaigns.map((campaign) => (
          <Card
            key={campaign.id}
            sx={{
              width: 300,
              '&:hover': {
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={campaign.imageUrl}
              alt={campaign.title}
            />
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
