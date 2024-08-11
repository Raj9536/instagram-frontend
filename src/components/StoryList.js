// client/src/components/StoryList.js
import React from 'react';
import { Box } from '@mui/material';
import Story from './Story';

const StoryList = () => {
  const stories = [
    { id: 1, username: 'user1', avatar: '/path/to/avatar1.jpg' },
    { id: 2, username: 'user2', avatar: '/path/to/avatar2.jpg' },
    { id: 3, username: 'user3', avatar: '/path/to/avatar3.jpg' },
    { id: 4, username: 'user4', avatar: '/path/to/avatar4.jpg' },
    { id: 5, username: 'user5', avatar: '/path/to/avatar5.jpg' },
  ];

  return (
    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 }}>
      {stories.map(story => (
        <Story key={story.id} username={story.username} avatar={story.avatar} />
      ))}
    </Box>
  );
};

export default StoryList;
