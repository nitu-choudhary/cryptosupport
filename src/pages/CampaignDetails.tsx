import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import Web3 from 'web3';

const dummyCampaigns = [
  { id: 1, title: "Campaign 1", description: "Description for Campaign 1", imageUrl: "https://via.placeholder.com/150", details: "Detailed information about Campaign 1", goal: "1000000000000000000", raised: "500000000000000000" },
  { id: 2, title: "Campaign 2", description: "Description for Campaign 2", imageUrl: "https://via.placeholder.com/150", details: "Detailed information about Campaign 2", goal: "2000000000000000000", raised: "1000000000000000000" },
  { id: 3, title: "Campaign 3", description: "Description for Campaign 3", imageUrl: "https://via.placeholder.com/150", details: "Detailed information about Campaign 3", goal: "3000000000000000000", raised: "1500000000000000000" },
  { id: 4, title: "Campaign 4", description: "Description for Campaign 4", imageUrl: "https://via.placeholder.com/150", details: "Detailed information about Campaign 4", goal: "4000000000000000000", raised: "2000000000000000000" },
];

const CampaignDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [campaign, setCampaign] = useState<any>(null);
  const [donationAmount, setDonationAmount] = useState<string>('');

  useEffect(() => {
    // Fetch campaign details from the blockchain using id
    // const fetchCampaign = async () => {
    //   // Assuming you have a smart contract instance
    //   const campaignDetails = await contract.methods.getCampaign(id).call();
    //   setCampaign(campaignDetails);
    // };

    // fetchCampaign();

    // Simulate campaign details
    const campaignData = dummyCampaigns.find(c => c.id === parseInt(id ?? '', 10));
    setCampaign(campaignData);
  }, [id]);

  const handleDonate = async () => {
    // const web3 = new Web3(Web3.givenProvider);
    // const accounts = await web3.eth.requestAccounts();
    // const amountInWei = web3.utils.toWei(donationAmount, 'ether');
    
    // await contract.methods.donateToCampaign(id).send({
    //   from: accounts[0],
    //   value: amountInWei,
    // });

    // Display message that donation was successful
    alert(`Thank you for donating ${donationAmount} ETH!`);
  };

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 4 }}>
        <img src={campaign.imageUrl} alt={campaign.title} style={{ height: 140 }} />
        <Typography variant="h4" gutterBottom>
          {campaign.title}
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom>
        {campaign.details}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Goal: {Web3.utils.fromWei(campaign.goal, 'ether')} ETH
      </Typography>
      <Typography variant="body1" gutterBottom>
        Raised: {Web3.utils.fromWei(campaign.raised, 'ether')} ETH
      </Typography>
      <Box mt={4}>
        <TextField
          label="Amount to Donate (ETH)"
          variant="outlined"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleDonate}
          fullWidth
          sx={{ mt: 2 }}
        >
          Donate
        </Button>
      </Box>
    </Container>
  );
};

export default CampaignDetails;
