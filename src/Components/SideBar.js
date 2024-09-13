import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Toolbar, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import DashboardIcon from '@mui/icons-material/Dashboard';
import SavingsIcon from '@mui/icons-material/Savings';  // Icon for Savings Goals
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

function SideBar() {
    const [selectedIndex, setSelectedIndex] = useState(null); // State to keep track of selected item

    const handleItemClick = (index) => {
        setSelectedIndex(index); // Set the selected index on item click
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#c9b5eb', // Updated to match the style of the DashBoard cards
                    borderRight: '1px solid #ddd',
                    marginTop: '64px', // Adjust to match AppBar height
                    boxShadow: 3, // Adding shadow for a cohesive look with the DashBoard
                },
            }}
        >
            <Toolbar />
            <Box
                sx={{
                    overflow: 'auto',
                    padding: '1rem',
                }}
            >
                <List>
                    <ListItem
                        button
                        to="/db"
                        component={RouterLink}
                        key="Dashboard"
                        onClick={() => handleItemClick(0)} // Update selected index
                        sx={{
                            backgroundColor: selectedIndex === 0 ? '#bbdefb' : '#e3f2fd', // Conditional background color
                            '&:hover': {
                                backgroundColor: selectedIndex === 0 ? '#bbdefb' : '#bbdefb', // Same color on hover if selected
                            },
                            marginBottom: '8px', // Space between items
                            borderRadius: '8px', // Rounded corners
                            transition: 'background-color 0.3s, transform 0.2s', // Smooth transition for background color and transform
                            transform: selectedIndex === 0 ? 'scale(1.02)' : 'scale(1)', // Scale effect for selected item
                            border: selectedIndex === 0 ? '2px solid #1565c0' : 'none', // Highlight border for selected item
                        }}
                    >
                        <ListItemIcon>
                            <DashboardIcon sx={{ color: selectedIndex === 0 ? '#0d47a1' : '#1565c0', transition: 'color 0.3s' }} /> {/* Conditional icon color with transition */}
                        </ListItemIcon>
                        <ListItemText
                            primary="Dashboard"
                            sx={{
                                color: selectedIndex === 0 ? '#0d47a1' : '#1565c0',
                                fontWeight: selectedIndex === 0 ? 'bold' : 'normal',
                                fontStyle: selectedIndex === 0 ? 'italic' : 'normal',
                                transition: 'color 0.3s, font-weight 0.3s, font-style 0.3s',
                            }}
                        />
                    </ListItem>

                    <ListItem
                        button
                        to="/sg"
                        component={RouterLink}
                        key="Savings Goals"
                        onClick={() => handleItemClick(1)} // Update selected index
                        sx={{
                            backgroundColor: selectedIndex === 1 ? '#c8e6c9' : '#e8f5e9', // Conditional background color
                            '&:hover': {
                                backgroundColor: selectedIndex === 1 ? '#c8e6c9' : '#c8e6c9', // Same color on hover if selected
                            },
                            marginBottom: '8px', // Space between items
                            borderRadius: '8px', // Rounded corners
                            transition: 'background-color 0.3s, transform 0.2s', // Smooth transition for background color and transform
                            transform: selectedIndex === 1 ? 'scale(1.02)' : 'scale(1)', // Scale effect for selected item
                            border: selectedIndex === 1 ? '2px solid #2e7d32' : 'none', // Highlight border for selected item
                        }}
                    >
                        <ListItemIcon>
                            <SavingsIcon sx={{ color: selectedIndex === 1 ? '#2e7d32' : '#388e3c', transition: 'color 0.3s' }} /> {/* Conditional icon color with transition */}
                        </ListItemIcon>
                        <ListItemText
                            primary="Savings Goals"
                            sx={{
                                color: selectedIndex === 1 ? '#2e7d32' : '#388e3c',
                                fontWeight: selectedIndex === 1 ? 'bold' : 'normal',
                                fontStyle: selectedIndex === 1 ? 'italic' : 'normal',
                                transition: 'color 0.3s, font-weight 0.3s, font-style 0.3s',
                            }}
                        />
                    </ListItem>

                    <ListItem
                        button
                        to="/tp"
                        component={RouterLink}
                        key="Transactions"
                        onClick={() => handleItemClick(2)} // Update selected index
                        sx={{
                            backgroundColor: selectedIndex === 2 ? '#ffe0b2' : '#fff3e0', // Conditional background color
                            '&:hover': {
                                backgroundColor: selectedIndex === 2 ? '#ffe0b2' : '#ffe0b2', // Same color on hover if selected
                            },
                            marginBottom: '8px', // Space between items
                            borderRadius: '8px', // Rounded corners
                            transition: 'background-color 0.3s, transform 0.2s', // Smooth transition for background color and transform
                            transform: selectedIndex === 2 ? 'scale(1.02)' : 'scale(1)', // Scale effect for selected item
                            border: selectedIndex === 2 ? '2px solid #e65100' : 'none', // Highlight border for selected item
                        }}
                    >
                        <ListItemIcon>
                            <AccountBalanceWalletIcon sx={{ color: selectedIndex === 2 ? '#e65100' : '#f57c00', transition: 'color 0.3s' }} /> {/* Conditional icon color with transition */}
                        </ListItemIcon>
                        <ListItemText
                            primary="Transactions"
                            sx={{
                                color: selectedIndex === 2 ? '#e65100' : '#f57c00',
                                fontWeight: selectedIndex === 2 ? 'bold' : 'normal',
                                fontStyle: selectedIndex === 2 ? 'italic' : 'normal',
                                transition: 'color 0.3s, font-weight 0.3s, font-style 0.3s',
                            }}
                        />
                    </ListItem>

                   

                </List>
            </Box>
        </Drawer>
    );
}

export default SideBar;
