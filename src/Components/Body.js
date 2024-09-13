import React from 'react';
import AppBar from './AppBar';
import SideBar from './SideBar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

function Body() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* AppBar at the top with fixed positioning */}
      <AppBar />

      <Box sx={{ display: 'flex', flexGrow: 1, paddingTop: '64px' }}>
        {/* SideBar on the left */}
        <SideBar />

        {/* Main content area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: '2rem',
            overflow: 'auto',
            backgroundColor: '#f4f4f4', // Optional: Adjust main content background
          }}
        >
          {/* Render child routes here */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Body;
