import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navigation: React.FC = () => {
    return (
        <AppBar position="fixed">
            <Toolbar disableGutters sx={{ paddingLeft: 0, paddingRight: 0 }}>
                <Box component="img" src={logo} alt="CryptoSupport Logo" sx={{ height: 60}} />
                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    CryptoSupport
                </Typography> */}
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ dispplay: 'flex', gap: 2 }}>
                    <Button color="inherit" component={RouterLink} to="/" sx={{ fontWeight: 'bold' }}>
                        Home
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/campaigns" sx={{ fontWeight: 'bold' }}>
                        Campaigns
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/donate" sx={{ fontWeight: 'bold' }}>
                        Donate
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/dashboard" sx={{ fontWeight: 'bold' }}>
                        Dashboard
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;