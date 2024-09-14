import React from 'react';
import { Grid, Card, Typography, Box, CardContent } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';

const DashBoard = () => {
  
  const transactions = useSelector((state) => state.expenses);
  
  const totalIncome = 10000;  

  
  const totalExpenses = transactions.reduce((total, transaction) => {
    const amount = parseFloat(transaction.amount);  
    return total + (isNaN(amount) ? 0 : amount);   
  }, 0);
  
  const currentBalance = totalIncome - totalExpenses;  
  const savingsGoals = 2000;  
  
  console.log("Total Expenses:", totalExpenses);
  console.log("Current Balance:", currentBalance);
  console.log("Savings Goals:", savingsGoals);
  

  // Prepare data for the spending chart
  const spendingData = transactions.map(transaction => ({
    date: transaction.date,
    spending: transaction.amount,
  }));

 
  const cardBackgroundColors = ['#2dfa59', '#ffcc80', '#90caf9', '#ffd54f'];

  return (
    <Box sx={{
      flexGrow: 1, padding: 3, background: 'linear-gradient(145deg, #f3e7e9, #e3edf7)',
      borderRadius: 6, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)',
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
                backgroundColor: cardBackgroundColors[index], 
                borderRadius: 3,
                padding: 2,
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                '&:hover': {
                  transform: 'scale(1.05)', 
                  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', 
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
                 
                  <YAxis domain={[0, Math.max(...spendingData.map((d) => d.spending)) * 1.1]} />

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
                    transition: 'background-color 0.3s ease', 
                    '&:hover': {
                      backgroundColor: '#f0f0f0', 
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
