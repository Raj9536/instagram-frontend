import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import Footer from '../footer';

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

const InstagramLogo = styled(Box)({
  backgroundImage: 'url(/images/insta.png)',
  backgroundPosition: '0px 0px',
  backgroundSize: '175px 51px',
  width: '175px',
  height: '51px',
  marginTop: '25px',
  backgroundRepeat: 'no-repeat',
  display: 'inline-block',
});

function Signup() {
  const [form, setForm] = useState({
    email: '',
    fullName: '',
    username: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    const value = event.target.value;
    setForm({ ...form, [prop]: value });
  };

  const handleClickShowPassword = () => {
    setForm({ ...form, showPassword: !form.showPassword });
  };

  return (
    <>
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        sx={{ bgcolor: 'background.paper' }}
      >
        <Box
          width={310}
          p={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{
            border: '1px solid #dbdbdb',
            bgcolor: 'white',
          }}
        >
          <InstagramLogo />
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: '0.94rem',
              textAlign: 'center',
              mb: 1,
              mt: 2,
              color: 'grey',
              fontWeight: 'bold',
            }}
          >
            Sign up to see photos and videos <br /> from your friends.
          </Typography>
          <Stack spacing={0.6} width="100%" alignItems="center">
            <StyledTextField
              variant="outlined"
              margin="dense"
              fullWidth
              placeholder="Mobile number or email"
              value={form.email}
              onChange={handleChange('email')}
              InputProps={{ style: { fontSize: '0.6rem' } }}
            />
            <StyledTextField
              variant="outlined"
              margin="dense"
              fullWidth
              placeholder="Full name"
              value={form.fullName}
              onChange={handleChange('fullName')}
              InputProps={{ style: { fontSize: '0.6rem' } }}
            />
            <StyledTextField
              variant="outlined"
              margin="dense"
              fullWidth
              placeholder="Username"
              value={form.username}
              onChange={handleChange('username')}
              InputProps={{ style: { fontSize: '0.6rem' } }}
            />
            <StyledTextField
              variant="outlined"
              margin="dense"
              fullWidth
              placeholder="Password"
              type={form.showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange('password')}
              InputProps={{
                style: { fontSize: '0.6rem' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {form.showPassword ? <Visibility /> : <VisibilityOff />}
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
            By signing up, you agree to our <Link href="#" sx={{ fontSize: '0.75rem' }}>Terms</Link>,
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
          >
            Sign Up
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={1}
          p={2}
          width={310}
          height={33}
          sx={{ bgcolor: 'white', border: '1px solid #dbdbdb' }}
        >
          <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
            Have an account?{' '}
            <Link href="/login" sx={{ fontSize: '0.875rem' }}>
              Log in
            </Link>
          </Typography>
        </Box>
        <Box
          width={280}
          p={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={1}
          sx={{ border: 'none', bgcolor: 'white' }}
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
      </Box>
    </Box>
    <Footer/>
    </>
  );
}

export default Signup;
