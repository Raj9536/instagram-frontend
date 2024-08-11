// client/src/components/Story.js
import React from 'react';
import { Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled container for each story
const StoryContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: theme.spacing(2),
}));

// Styled avatar for the story
const StoryAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  border: `2px solid ${theme.palette.primary.main}`, // Border around the avatar
}));

const Story = ({ avatar, username }) => {
  return (
    <StoryContainer>
      <StoryAvatar src={avatar} />
      <Box sx={{ marginTop: 1, fontSize: '12px' }}>{username}</Box>
    </StoryContainer>
  );
};

export default Story;
