import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../img/Screenshot_2024-09-13_000422-removebg-preview.png'; // Assume you have a logo.svg in your project
import { useNavigate, Link } from 'react-router-dom';
function AppBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Handle logout logic here
    navigate('/');
    console.log('User logged out');
  };

  return (
    <MuiAppBar 
      position="fixed" 
      sx={{ 
        background: 'linear-gradient(145deg, #f3e7e9, #e3edf7)', // White background for a clean look
        color: '#333', // Dark text color for contrast
        zIndex: (theme) => theme.zIndex.drawer + 1, 
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)', // Slightly more pronounced shadow
        borderBottom: '1px solid #e0e0e0', // Lighter border color for subtle definition
      }}
    >
      <Toolbar sx={{ px: 3 }}>
        {/* Logo */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            flexGrow: 1 
          }}
        >
          <img 
            src={logo} 
            alt="Logo" 
            style={{ 
              width: '7rem', // Adjust logo size
              marginRight: '16px', // Increase margin for spacing
            }} 
          />
          {/* <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography> */}
        </Box>

        {/* Logout Button */}
        <Button
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{
            fontWeight: 'bold',
            backgroundColor: '#007bff', // Blue background for the button
            color: '#ffffff', // White text color for the button
            borderRadius: 2, // Rounded corners
            padding: '8px 16px', // Padding for better button size
            '&:hover': {
              backgroundColor: '#0056b3', // Darker blue on hover
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Add shadow on hover
            },
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
