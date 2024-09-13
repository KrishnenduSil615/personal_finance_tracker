import React from 'react';
import { Grid, Card, Typography, Box, CardContent } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for transactions and chart
const transactions = [
  { date: '2024-09-01', amount: 500, category: 'Groceries' },
  { date: '2024-09-02', amount: 150, category: 'Transport' },
  { date: '2024-09-05', amount: 1000, category: 'Entertainment' },
  { date: '2024-09-09', amount: 80, category: 'Entertainment' },
  { date: '2024-09-09', amount: 1080, category: 'Entertainment' },
  { date: '2024-09-09', amount: 100, category: 'Entertainment' },
];

const spendingData = transactions.map(transaction => ({
  date: transaction.date,
  spending: transaction.amount,
}));

const DashBoard = () => {
  // Financial overview data
  const totalIncome = 5000;
  const totalExpenses = 2000;
  const currentBalance = 3000;
  const savingsGoals = 1000;

  // Background colors for financial summary cards
  const cardBackgroundColors = ['#2dfa59', '#ffcc80', '#90caf9', '#ffd54f'];

  return (
    <Box sx={{ flexGrow: 1, padding: 3, background: 'linear-gradient(145deg, #f3e7e9, #e3edf7)', borderRadius: 6, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)'
      ,
    }}>
      <Grid container spacing={4}>
        {/* Financial Summary Cards */}
        {[ 
          { title: 'Total Income', value: totalIncome },
          { title: 'Total Expenses', value: totalExpenses },
          { title: 'Current Balance', value: currentBalance },
          { title: 'Savings Goals', value: savingsGoals },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: cardBackgroundColors[index], // Apply unique background color
                borderRadius: 3,
                padding: 2,
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effects
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly scale up on hover
                  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Deeper shadow on hover
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  ₹{item.value.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Spending Over Time Chart */}
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: '#e0f7fa', borderRadius: 3, padding: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Spending Over Time
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={spendingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="spending" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Transactions */}
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: '#fff3e0', borderRadius: 3, padding: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Transactions
              </Typography>
              {transactions.map((transaction, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '8px 0',
                    borderBottom: index < transactions.length - 1 ? '1px solid #e0e0e0' : 'none',
                    transition: 'background-color 0.3s ease', // Smooth transition for hover effects
                    '&:hover': {
                      backgroundColor: '#f0f0f0', // Light background color on hover
                    },
                  }}
                >
                  <Typography variant="body1">{transaction.date}</Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: transaction.amount > 0 ? 'green' : 'red', fontWeight: 'bold' }}
                  >
                    ₹{transaction.amount.toLocaleString()} ({transaction.category})
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
