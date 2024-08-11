import React from 'react';
import { Typography, Stack, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        pt: '2.9rem', // Shortened paddingTop
      }}
    >
      <Box sx={{ bgcolor: 'white', width: '100%', py: 2 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={{ xs: 1, sm: 2 }} 
          justifyContent="center"
          alignItems="center"
        >
          {[
            'Meta',
            'About',
            'Blog',
            'Jobs',
            'Help',
            'API',
            'Privacy',
            'Terms',
            'Locations',
            'Instagram Lite',
            'Threads',
            'Contact Uploading & Non-Users',
            'Meta Verified',
          ].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{ fontSize: '0.75rem' }}
            >
              {item}
            </Typography>
          ))}
        </Stack>
        <Typography
          variant="body2"
          align="center"
          sx={{ fontSize: '0.75rem', mt: 1 }}
        >
          © 2024 Instagram from Meta
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
