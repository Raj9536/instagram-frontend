// path: client/src/components/Post.js

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Avatar, CardMedia, Typography, IconButton, Menu, MenuItem, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = ({ username, avatar, image, caption }) => {
  const [liked, setLiked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // State for managing the menu

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCopyURL = () => {
    navigator.clipboard.writeText(window.location.href);
    handleMenuClose();
  };

  const handleReportPost = () => {
    alert('Report submitted!');
    handleMenuClose();
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar src={avatar} />}
        title={username}
        action={
          <>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                component: Paper,
                elevation: 3,
                sx: {
                  borderRadius: '10px', // Rounded borders
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Slight shadow
                },
              }}
            >
              <MenuItem onClick={handleCopyURL}>Copy URL</MenuItem>
              <MenuItem onClick={handleReportPost}>Report Post</MenuItem>
            </Menu>
          </>
        }
      />
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={`${username}'s post`}
      />
      <CardContent>
        <Typography variant="body1">{caption}</Typography>
        <IconButton onClick={handleLike} color={liked ? "secondary" : "default"}>
          <FavoriteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Post;
