import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    expenses: [{ id: 1, date: '13/09/2024', amount: '100', category: 'Groceries' }]
};

export const ExpensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            const expense = {
                id: nanoid(),
                date: action.payload.date,
                amount: action.payload.amount,
                category: action.payload.category,
            }
            state.expenses.push([])
        },
        deleteExpense: (state, action) => {
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload)
        }
    }
})
export const { addExpense, deleteExpense } = ExpensesSlice.actions;
export default ExpensesSlice.reducer;



