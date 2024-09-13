import React, { useState } from 'react';
import {
  Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography,
} from '@mui/material';

function ManageTransactions({ onAddTransaction }) {
  const [transaction, setTransaction] = useState({
    date: '',
    amount: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (transaction.amount && transaction.category && transaction.date) {
      onAddTransaction(transaction);
      setTransaction({ date: '', amount: '', category: '' }); // Reset form
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Manage Transactions
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Date"
          type="date"
          name="date"
          value={transaction.date}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Amount"
          type="number"
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={transaction.category}
            onChange={handleChange}
            label="Category"
          >
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Rent">Rent</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
            <MenuItem value="Transport">Transport</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Transaction
        </Button>
      </form>
    </Box>
  );
}

export default ManageTransactions;
