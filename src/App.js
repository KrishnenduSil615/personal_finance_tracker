// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Pages/Root';
import PublicLayout from './Pages/PublicLayout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import TransactionsPage from './Components/TransactionsPage';
import DashBoard from './Components/DashBoard';
import SavingsGoals from './Components/SavingsGoals';
import Home from './Pages/Home';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicLayout />, // Public layout for routes like login, register
      children: [
        { path: '/', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/forgotPassword', element: <ForgotPassword /> },
      ],
    },
    {
      path: '/',
      element: <Root />, // Private layout with Body component
      children: [
        { path: '/home', element: <Home /> },
        { path: '/db', element: <DashBoard /> },
        { path: '/sg', element: <SavingsGoals /> },
        { path: '/tp', element: <TransactionsPage /> },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
