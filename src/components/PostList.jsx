// client/src/components/PostList.js

import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';
import StoryList from './StoryList';

const PostList = () => {
  const posts = [
    {
      id: 1,
      username: 'user1',
      image: '/assets/images/flower.jpeg',
      caption: 'This is a caption for user1’s post',
    },
    {
      id: 2,
      username: 'user2',
      image: '/assets/images/samosa.jpg',
      caption: 'This is a caption for user2’s post',
    },
    {
      id: 3,
      username: 'user3',
      image: '/assets/images/ai.jpg',
      caption: 'This is a caption for user3’s post',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      {/* Story Section */}
      <StoryList />

      {/* Post Section */}
      {posts.map(post => (
        <Post
          key={post.id}
          username={post.username}
          image={post.image}
          caption={post.caption}
        />
      ))}
    </Box>
  );
};

export default PostList;
