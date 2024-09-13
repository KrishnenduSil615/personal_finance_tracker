import { configureStore } from "@reduxjs/toolkit";
import  expensesReducer from './Features/Expenses/ExpensesSlice';
export const Store = configureStore({
    reducer: expensesReducer,
})
   