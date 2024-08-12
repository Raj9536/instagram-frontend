import React from 'react';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CreatePopup = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300,
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '80px',
          position: 'relative',
          width: '80%',
          maxWidth: '500px',
          textAlign: 'center',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        >
          <CloseIcon />
        </IconButton >
        <Typography variant="h5" gutterBottom>
          Create New Post
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Drag photos and videos here
        </Typography>
        <TextField style={{}}
          type="file"
          inputProps={{
            accept: 'image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime',
            multiple: true,
          }}
          sx={{ display: 'block', marginBottom: '20px', padding: "10px" }}
        />
      </Box>
    </Box>
  );
};

export default CreatePopup;
