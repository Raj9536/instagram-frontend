import React from 'react';
import { Drawer, IconButton, Box, TextField, Divider, Typography } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';

const SearchPanel = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 333, // Width of the drawer
          height: '100%',
          position: 'fixed',
          top: 0,
          left: '5rem', // Position drawer to the right edge
          backgroundColor: '#fff',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1300, // Ensure it overlaps everything else
          border: 'none',
          overflow: 'hidden', // Prevent overflow
        },
      }}
    >
      <Box
        sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          boxSizing: 'border-box', // Include padding in width calculations
        }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h4" fontWeight="bold">
            Search
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', marginBottom: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Search"
            fullWidth
            sx={{
              '& .MuiInputBase-root': {
                borderRadius: '1px',
                paddingRight: '2rem',
              },
            }}
            InputProps={{
              endAdornment: (
                <IconButton
                  edge="end"
                  sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }}
                >
                  <ClearIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
        <Divider sx={{ marginBottom: '2rem' }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            No recent searches
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SearchPanel;
