// client/src/components/UserSuggestions.js

import React from 'react';
import { Box, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, Divider, Link } from '@mui/material';

const UserSuggestions = () => {
  const suggestions = [
    { id: 1, username: 'kendalljenner', avatar: '/assets/images/kendalljenner.png', recommendation: 'Instagram recommended' },
    { id: 2, username: 'itsrossa910', avatar: '/assets/images/itsrossa910.png', recommendation: 'Instagram recommended' },
    { id: 3, username: 'arbeloa', avatar: '/assets/images/arbeloa.png', recommendation: 'Instagram recommended' },
    { id: 4, username: 'parineetichopra', avatar: '/assets/images/parineetichopra.png', recommendation: 'Instagram recommended' },
    { id: 5, username: 'miguel', avatar: '/assets/images/miguel.png', recommendation: 'Instagram recommended' },
  ];

  return (
    <Box sx={{ width: 300, padding: 2 }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <Typography variant="h6">Suggested for you</Typography>
        <Link href="#" variant="body2" underline="hover">See All</Link>
      </Box>

      {/* Suggestions List */}
      <List>
        {suggestions.map(user => (
          <ListItem key={user.id} sx={{ paddingY: 1 }}>
            <ListItemAvatar>
              <Avatar src={user.avatar} />
            </ListItemAvatar>
            <ListItemText 
              primary={user.username} 
              secondary={user.recommendation} 
            />
            <Button variant="contained" color="primary" size="small">Follow</Button>
          </ListItem>
        ))}
      </List>

      {/* Divider */}
      <Divider sx={{ marginY: 3 }} />

      {/* Footer Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
        <Link href="#" variant="caption" underline="hover" sx={{ color: 'grey.600' }}>About</Link>
        <Link href="#" variant="caption" underline="hover" sx={{ color: 'grey.600' }}>Help</Link>
        <Link href="#" variant="caption" underline="hover" sx={{ color: 'grey.600' }}>Press</Link>
        <Link href="#" variant="caption" underline="hover" sx={{ color: 'grey.600' }}>API</Link>
        <Link href="#" variant="caption" underline="hover" sx={{ color: 'grey.600' }}>Jobs</Link>
        <Link href="#" variant="caption" underline="hover" sx={{ color: 'grey.600' }}>Privacy</Link>
        <Link href="#" variant="caption" underline="hover" sx={{ color: 'grey.600' }}>Terms</Link>
        <Link href="#" variant="caption" underline="hover" sx={{ color: 'grey.600' }}>Locations</Link>
        <Link href="#" variant="caption" underline="hover" sx={{ color: 'grey.600' }}>Language</Link>
        <Link href="#" variant="caption" underline="hover" sx={{ color: 'grey.600' }}>Meta Verified</Link>
      </Box>

      <Typography variant="caption" color="textSecondary" sx={{ textAlign: 'center', marginTop: 2 }}>
        © 2024 Instagram from Meta
      </Typography>
    </Box>
  );
};

export default UserSuggestions;
