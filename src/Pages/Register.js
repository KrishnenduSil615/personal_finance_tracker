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
                    elevation={4} // Controls the shadow depth
                    sx={{
                        padding: 4,
                        width: '100%',
                        maxWidth: 500,
                        borderRadius: 8,
                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)', // Custom shadow
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: adds a slight white background to the form
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
                            color: '#333', // Text color
                            fontSize: '3rem', // Font size
                            letterSpacing: '0.5px', // Letter spacing
                            textTransform: 'uppercase', // Text transformation
                            marginBottom: 2, // Bottom margin
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Text shadow
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
                                    fontWeight: 'bold', // Style the label
                                    color: '#333', // Label color
                                    fontSize: '1.2rem',
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
                                    fontSize: '1.2rem',
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
                                    fontSize: '1.2rem',
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
                                    fontWeight: 'bold', // Style the label
                                    color: '#333', // Label color
                                    fontSize: '1.2rem',
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
                        sx={{ mt: 4, color: '#333', fontWeight: 'bold' }} // Add your preferred styles here
                    >
                        Back to login page{' '}
                        <MuiLink
                            component={Link}
                            to="/"
                            underline="hover" // Style for underline, can be 'none' or 'always'
                            color="primary" // Adjust color according to theme
                            sx={{ fontWeight: 'bold' }} // Additional styling
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
