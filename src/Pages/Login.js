import { Container, Paper, Typography, Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import RegbackGroundImgL from "../img/mobile-expense-management-abstract-illustration_335657-4984.avif"
import { useNavigate, Link } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const emailChangedHandler = (event) => {
        setEmail(event.target.value)
    }
    const passwordChangedHandler = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isLoading) return; // Prevent multiple submissions

        setIsLoading(true);
        const loginData = {
            email: email,
            password: password,
        };

        try {
            await addLoginData(loginData);
            setEmail('');
            setPassword('');
            navigate('/db');
        } catch (error) {
            console.error('Submission error:', error);
            alert('Login failed. Please check your credentials and try again.');
        } finally {
            setIsLoading(false);
        }
    };

    async function addLoginData(loginData) {
        try {
            const response = await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC42844vo45bTWRHyiPEk5m-_7LsoPWjBc',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: loginData.email, // Make sure 'email' is correct
                        password: loginData.password, // Ensure 'password' is correctly mapped
                        returnSecureToken: true,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                const data = await response.json();
                let errorMessage = 'Login failed.';
                if (data && data.error && data.error.message) {
                    errorMessage = data.error.message;
                }
                alert(errorMessage);
                throw new Error(errorMessage);
            }

            const lg_data = await response.json();
            console.log('Login successful:', lg_data);
            navigate('/home'); // Redirect on successful login
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 8,
                    minHeight: '100vh',

                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: 4,
                }}
            >
                <Paper
                    sx={{
                        padding: 4,
                        width: '100%',
                        maxWidth: 500,
                        borderRadius: 8,
                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)', // Custom shadow
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: adds a slight white background to the form
                        backgroundImage: `url(${RegbackGroundImgL})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left',
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                    }}
                >

                    <Typography
                        variant="h4"
                        gutterBottom
                        align="center"
                        sx={{
                            fontWeight: 'bold',
                            color: '#333', // Text color
                            fontSize: '3rem', // Font size
                            letterSpacing: '0.5px', // Letter spacing
                            textTransform: 'uppercase', // Text transformation
                            marginBottom: 2, // Bottom margin
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Text shadow
                        }}
                    >
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={emailChangedHandler}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            required
                            sx={{
                                '& .MuiInputLabel-root': {
                                    fontWeight: 'bold', // Style the label
                                    color: '#333', // Label color
                                },
                                '& .MuiOutlinedInput-root': {
                                    borderColor: '#4a90e2', // Border color
                                    borderRadius: '8px', // Rounded corners
                                    '&:hover fieldset': {
                                        borderColor: '#1a73e8', // Border color on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1a73e8', // Border color when focused
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    fontWeight: 'bold', // Style the input text
                                    color: '#333', // Input text color
                                },
                                '& .MuiFormHelperText-root': {
                                    color: '#d32f2f', // Error text color
                                },
                            }}
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={passwordChangedHandler}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            required
                            sx={{
                                '& .MuiInputLabel-root': {
                                    fontWeight: 'bold', // Style the label
                                    color: '#333', // Label color
                                },
                                '& .MuiOutlinedInput-root': {
                                    borderColor: '#4a90e2', // Border color
                                    borderRadius: '8px', // Rounded corners
                                    '&:hover fieldset': {
                                        borderColor: '#1a73e8', // Border color on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1a73e8', // Border color when focused
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    fontWeight: 'bold', // Style the input text
                                    color: '#333', // Input text color
                                },
                                '& .MuiFormHelperText-root': {
                                    color: '#d32f2f', // Error text color
                                },
                            }}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                            Login
                        </Button>
                    </form>
                    <Typography
                        variant="body1"
                        align="center"
                        underline="hover" 
                        sx={{ mt: 4, color: '#333', fontWeight: 'bold' }}
                    >
                        Don't have an account?{' '}
                        <Link component={RouterLink} to="/register">
                            Register
                        </Link>
                        <br />
                    </Typography>
                    <Typography
                        variant="body1"
                        mt={2}
                        align="center"
                        underline="hover" 
                        sx={{ color: '#333', fontWeight: 'bold' }}
                    >
                        Forgot Password?{' '}
                        <Link component={RouterLink} to="/forgotPassword">
                            Forgot Password
                        </Link>
                    </Typography>
                </Paper>
            </Box>
        </Container>
    )
}

export default Login