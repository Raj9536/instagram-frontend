import React, { useState, useEffect } from "react";
import Footer from "../footer";
import { Button, Box, Link, Typography, Stack, InputAdornment, IconButton, TextField, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast

//----------------------------- Image URLs -----------------------------
const LoginImage1 = "/images/loginpage1.png";
const LoginImage2 = "/images/loginpage2.png";
const LoginImage3 = "/images/loginpage3.png";
const LoginImage4 = "/images/loginpage4.png";
const LoginBackground = "/images/loginpage.png";
const InstagramLogoUrl = "/images/insta.png";

//----------------------------- Styled Components -----------------------------
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: '2.5rem',
    backgroundColor: '#fafafa',
    borderRadius: '2px',
  },
  '& .MuiInputBase-input': {
    padding: '0.5rem',
    fontSize: '0.8rem',
  },
  width: '95%',
  marginBottom: '2px',
}));

const FormStyle = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  width: '100%',
  maxWidth: 310,
  gap: '1rem', // Add spacing between green and blue boxes
});

const InstagramLogo = styled(Box)({
  backgroundImage: `url(${InstagramLogoUrl})`,
  backgroundPosition: '0px 0px',
  backgroundSize: '175px 51px',
  width: '175px',
  height: '51px',
  marginTop: '25px',
  backgroundRepeat: 'no-repeat',
  display: 'inline-block',
});

//----------------------------- Login Component -----------------------------
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [show1, setShow1] = useState(1);
  const navigate = useNavigate();

  // Effect to handle image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setShow1((prev) => (prev < 4 ? prev + 1 : 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle password visibility toggle
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: form.username, // Username from the first box
          password: form.password, // Password from the second box
        }),
      });
  
      if (response.ok) {
        // Login successful
        toast.success('Login successful! Redirecting...');
        setTimeout(() => navigate('/home'), 2000); // Redirect after 2 seconds
      } else if (response.status === 401) {
        // Unauthorized access
        toast.error('Invalid credentials. Please try again.');
      } else {
        // Other errors
        const errorData = await response.json();
        toast.error(errorData.message || 'An error occurred');
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred');
    }
  };
  
  
  

  return (
    <>
    <ToastContainer/>

      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          paddingBottom: 10, // Adjust the padding to ensure space for the footer
        }}
        >
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', marginTop: 10 }}>
          <Box sx={{ display: 'flex', width: '58%', height: '70%' }}>
            {/*-------------------------colour box start-----------------------------*/}
            {/* Background Image with Slideshow */}
            <Box
              sx={{
                flex: 1,
                display: { xs: 'none', md: 'flex' },
                position: 'relative',
                width: '0%',
                height: 650,
                backgroundImage: `url(${LoginBackground})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: "17px",
                margin: "0",
                marginTop: "-68px",
                overflow: 'hidden',
                marginLeft: "-55px"
              }}
              >
              {[LoginImage1, LoginImage2, LoginImage3, LoginImage4].map((src, index) => (
                <Fade in={show1 === index + 1} timeout={1500} key={index}>
                  <img
                    src={src}
                    alt=""
                    style={{
                      position: 'absolute',
                      top: 50,
                      right: 30,
                      opacity: show1 === index + 1 ? 1 : 0,
                      transition: 'opacity 1.5s ease-in-out',
                    }}
                    />
                </Fade>
              ))}
            </Box>
            {/*-------------------------colour box end-----------------------------*/}

            <FormStyle>
              {/*-------------------------green box start-----------------------------*/}
              {/* Login Form */}
              <Box
                p={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  border: '5px ',
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                  bgcolor: 'white',
                }}
                >
                <InstagramLogo />
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    fontSize: '0.94rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mb: 1,
                    mt: 2,
                    color: 'grey',
                  }}
                  >
                  Sign in to see photos and videos <br /> from your friends.
                </Typography>
                <Stack spacing={0.6} width="100%" alignItems="center">
                  <StyledTextField
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    placeholder="username"
                    name="username"
                    value={form.username}
                    onChange={handleInputChange}
                    />
                  <StyledTextField
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    />
                </Stack>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  sx={{ mt: 2, fontSize: '0.75rem', textAlign: 'center' }}
                  >
                  People who use our service may have uploaded your contact information
                  to Instagram. <Link href="#" sx={{ fontSize: '0.75rem' }}>Learn More</Link>
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  sx={{ fontSize: '0.75rem', textAlign: 'center' }}
                  >
                  By signing in, you agree to our <Link href="#" sx={{ fontSize: '0.75rem' }}>Terms</Link>,
                  <Link href="#" sx={{ fontSize: '0.75rem' }}>Privacy Policy</Link> and
                  <Link href="#" sx={{ fontSize: '0.75rem' }}>Cookies Policy</Link>.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: 'rgb(0, 149, 246)',
                    color: 'white',
                    width: '94%',
                    mt: 1.3,
                    mb: 0.5,
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    borderRadius: 1.5,
                    boxShadow: 'none',
                  }}
                  onClick={handleLogin} // Add click handler
                  >
                  Sign in
                </Button>
              </Box>
              {/*-------------------------green box end-----------------------------*/}

              {/*-------------------------blue box start-----------------------------*/}
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                width={279}
                height={33}
                sx={{
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
                >
                <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                 Don't have an account?{' '}
                  <Link href="/signup" sx={{ fontSize: '0.875rem' }}>
                    Sign up
                  </Link>
                </Typography>
              </Box>
              {/*-------------------------blue box end-----------------------------*/}
            </FormStyle>
          </Box>
        </Box>
      
          <Box
            width={280}
            p={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt={1}
            sx={{ border: 'none', bgcolor: 'white', marginLeft:"611px", marginTop: "-80px" }}
            >
            <Typography
              variant="body2"
              sx={{ fontSize: '0.8rem', color: '#262626', fontWeight: 'bold' }}
              >
              Get the app
            </Typography>
            <Box display="flex" justifyContent="center" mt={1}>
              <Link href="https://www.microsoft.com/store/apps" sx={{ mr: 1 }}>
                <img
                  src="/images/Get_it_from_microsoft.png"
                  alt="Get it from Microsoft"
                  style={{ width: 'auto', height: 43.5 }}
                  />
              </Link>
              <Link href="https://play.google.com/store/apps" sx={{ ml: 1 }}>
                <img
                  src="/images/Get_it_from_google_play.png"
                  alt="Get it from Google Play"
                  style={{ width: 'auto', height: 43.5 }}
                  />
              </Link>
            </Box>
          </Box>

        <Footer />
      </Container>
    
    </>
  );
};

export default Login;
