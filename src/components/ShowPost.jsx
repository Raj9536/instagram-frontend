import React, { useContext, useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Avatar } from '@mui/material';
import { NotificationManager } from 'react-notifications';
import { AuthContext } from './AuthContext/AuthContext';

function ShowPost(props) {
  const { user } = useContext(AuthContext);
  const [yourComment, setYourComment] = useState('');
  const [comments, setComments] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const newComment = {
        username: user.data.username,
        userPicture: user.data.profilePicture,
        description: yourComment,
        _id: Math.random(), // Unique ID placeholder
      };
      setComments((prevComments) => [newComment, ...prevComments]);
      setYourComment('');
      NotificationManager.success('Success', 'Comment has been created', 3000);
    } catch (error) {
      NotificationManager.error('Error', 'Failed to add comment', 3000);
    }
  };

  useEffect(() => {
    // Simulated comment fetching (replace with real data fetching if needed)
    const fetchedComments = [
      {
        _id: 1,
        username: 'John Doe',
        userPicture: 'DEFAULT_USER_PICTURE_URL',
        description: 'This is a sample comment.',
      },
      // Add more sample comments if needed
    ];
    setComments(fetchedComments);
  }, [props.post._id]);

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          value={yourComment}
          onChange={(e) => setYourComment(e.target.value)}
          placeholder="Your Comment!"
          variant="outlined"
          fullWidth
          sx={{ mr: 1 }}
        />
        <Button
          onClick={submitHandler}
          variant="contained"
          color="primary"
        >
          Add Comment
        </Button>
      </Box>
      <Box sx={{ maxHeight: '30vh', overflowY: 'auto' }}>
        {comments.map((comment) => (
          <Box key={comment._id} sx={{ display: 'flex', mb: 1 }}>
            <Avatar src={comment.userPicture} alt="" sx={{ width: 32, height: 32 }} />
            <Box sx={{ ml: 1, p: 1, border: '1px solid #cecdcd', borderRadius: 1, width: '100%' }}>
              <Typography variant="body2" fontWeight="bold">{comment.username}</Typography>
              <Typography variant="body2">{comment.description}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ShowPost;
