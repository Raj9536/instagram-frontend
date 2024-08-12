import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField, Button, Snackbar, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CreatePopup = ({ open, onClose }) => {
  const [step, setStep] = useState(1); // Step state: 1 for file selection, 2 for caption
  const [caption, setCaption] = useState(''); // State for caption
  const [isSnackbarOpen, setSnackbarOpen] = useState(false); // Snackbar state

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePost = () => {
    // Show snackbar
    setSnackbarOpen(true);
    
    // Close the popup after a slight delay to ensure Snackbar is shown first
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

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
          padding: '40px',
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
        </IconButton>

        {step === 1 ? (
          <>
            <Typography variant="h5" gutterBottom>
              Create New Post
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Drag photos and videos here
            </Typography>
            <TextField
              type="file"
              inputProps={{
                accept: 'image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime',
                multiple: true,
              }}
              sx={{ display: 'block', marginBottom: '20px', padding: '10px' }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextStep}
              sx={{ marginTop: '20px' }}
            >
              Next
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5" gutterBottom>
              Add Caption
            </Typography>
            <TextField
              label="Write a caption..."
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              sx={{ marginBottom: '20px' }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handlePost}
              fullWidth
            >
              Post
            </Button>
          </>
        )}
      </Box>

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Positioned at the top center
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          icon={<CheckCircleIcon fontSize="inherit" />}
          sx={{ width: '100%', backgroundColor: 'green', color: 'white' }}
        >
          Post Created
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreatePopup;
