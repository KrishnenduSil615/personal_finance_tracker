import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, CircularProgress, Link as MuiLink} from '@mui/material';
import RegbackGroundImg from "../img/flat-monthly-payments-calendar-woman-with-payment-schedule-pay-money-interest-rate-fees-principal-financial-bills-by-month-period-reminder-salary-day-due-date-debt-.avif"
import { Link,useNavigate } from 'react-router-dom';
const Register = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirm_password, setConfirmPassword] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const usernameChangedHandler = (e) => {
        setUsername(e.target.value)
    }
    const emailChangedHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordChangedHandler = (e) => {
        setPassword(e.target.value)
    }
    const confirmPasswordChangedHandler = (e) => {
        setConfirmPassword(e.target.value)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirm_password) {
            alert('Passwords do not match');
            return;
        }
        const registerData = {
            username,
            email,
            password,
        };
        setIsLoading(true);
        console.log(registerData)

        try {
            await addRegisterData(registerData);
            alert('Registration successful');
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            navigate('/');
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
        finally {
            setIsLoading(false);
        }
    };

    async function addRegisterData(registerData) {
        try {
            const response = await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC42844vo45bTWRHyiPEk5m-_7LsoPWjBc',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        username: registerData.username,
                        email: registerData.email,
                        password: registerData.password,
                        returnSecureToken: true,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (!response.ok) {
                const data = await response.json();
                let errormassage = 'Authentication failed';
                if (data && data.error && data.error.message) {
                    errormassage = data.error.message;
                }
                alert(errormassage);
                throw new Error(errormassage);
            }
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.error(error)
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
                    elevation={4}
                    sx={{
                        padding: 4,
                        width: '100%',
                        maxWidth: 500,
                        borderRadius: 8,
                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)', 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                        backgroundImage: `url(${RegbackGroundImg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left',
                    }}
                >

                    <Typography
                        variant="h4"
                        gutterBottom
                        align="center"
                        sx={{
                            fontWeight: 'bold',
                            color: '#333', 
                            fontSize: '3rem', 
                            letterSpacing: '0.5px', 
                            textTransform: 'uppercase', 
                            marginBottom: 2, 
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' 
                        }}
                    >
                        Register
                    </Typography>


                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Username"
                            name="username"
                            value={username}
                            onChange={usernameChangedHandler}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            required
                            sx={{
                                '& .MuiInputLabel-root': {
                                    fontWeight: 'bold', 
                                    color: '#333', 
                                    fontSize: '1.2rem',
                                },
                                '& .MuiOutlinedInput-root': {
                                    borderColor: '#4a90e2', 
                                    borderRadius: '8px', 
                                    '&:hover fieldset': {
                                        borderColor: '#1a73e8', 
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1a73e8', 
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    fontWeight: 'bold',
                                    color: '#333', 
                                },
                                '& .MuiFormHelperText-root': {
                                    color: '#d32f2f',
                                },
                            }}
                        />

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
                                    fontWeight: 'bold', 
                                    color: '#333', 
                                    fontSize: '1.2rem',
                                },
                                '& .MuiOutlinedInput-root': {
                                    borderColor: '#4a90e2',
                                    borderRadius: '8px', 
                                    '&:hover fieldset': {
                                        borderColor: '#1a73e8', 
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1a73e8', 
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    fontWeight: 'bold', 
                                    color: '#333', 
                                },
                                '& .MuiFormHelperText-root': {
                                    color: '#d32f2f',
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
                                    fontWeight: 'bold', 
                                    color: '#333', 
                                    fontSize: '1.2rem',
                                },
                                '& .MuiOutlinedInput-root': {
                                    borderColor: '#4a90e2', 
                                    borderRadius: '8px', 
                                    '&:hover fieldset': {
                                        borderColor: '#1a73e8', 
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1a73e8', 
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    fontWeight: 'bold', 
                                    color: '#333', 
                                },
                                '& .MuiFormHelperText-root': {
                                    color: '#d32f2f', 
                                },
                            }}
                        />
                        <TextField
                            label="Confirm Password"
                            name="confirm_password"
                            type="password"
                            value={confirm_password}
                            onChange={confirmPasswordChangedHandler}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            required
                            sx={{
                                '& .MuiInputLabel-root': {
                                    fontWeight: 'bold', 
                                    color: '#333', 
                                    fontSize: '1.2rem',
                                },
                                '& .MuiOutlinedInput-root': {
                                    borderColor: '#4a90e2', 
                                    borderRadius: '8px', 
                                    '&:hover fieldset': {
                                        borderColor: '#1a73e8', 
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1a73e8', 
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    fontWeight: 'bold', 
                                    color: '#333', 
                                },
                                '& .MuiFormHelperText-root': {
                                    color: '#d32f2f', 
                                },
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={isLoading}
                            sx={{ mt: 2 }}
                        >
                            {isLoading ? 'Registering...' : 'Submit'}
                        </Button>

                        {isLoading && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <CircularProgress color="primary" />
                            </Box>
                        )}
                    <Typography
                        variant="body2"
                        align="center"
                        sx={{ mt: 4, color: '#333', fontWeight: 'bold' }} 
                    >
                        Back to login page{' '}
                        <MuiLink
                            component={Link}
                            to="/"
                            underline="hover" 
                            color="primary" 
                            sx={{ fontWeight: 'bold' }} 
                        >
                            Login
                        </MuiLink>
                    </Typography>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default Register;
