import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    expenses: [
        { id: 1, date: "2024-09-13", amount: "250", category: "Groceries" },
    ],
    saveings: {
        currentBlance: "5000",
    }
}
       
        

export const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            const expense = {
                id: nanoid(),
                date: action.payload.date,
                amount: action.payload.amount,
                category: action.payload.category,
            }
            state.expenses.push(expense)
        },
        removeExpense: (state, action) => {
            state.expenses = state.expenses.filter((expense) => {
                return expense.id !== action.payload
            })
        },
        updateExpense: (state, action) => {
            const { id, date, amount, category } = action.payload;
            const existingExpense = state.expenses.find(expense => expense.id === id);
            if (existingExpense) {
                existingExpense.date = date;
                existingExpense.amount = amount;
                existingExpense.category = category;
            }
        }
    } 
})

export const { addExpense, removeExpense, updateExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
