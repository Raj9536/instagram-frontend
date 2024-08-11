// client/src/pages/HomePage.jsx
import React from 'react';
import { Grid, Box } from '@mui/material';
import UserSuggestions from '../UserSuggestion';
import PostList from '../PostList';
import SideNav from '../Sidenav';
import Footer from '../footer'

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideNav />
      <Box sx={{ marginLeft: '240px', flexGrow: 1 }}> {/* Adjust marginLeft to match the sidebar width */}
        <Grid container spacing={2}>
          {/* Timeline / Feed */}
          <Grid item xs={8}>
            <PostList />
          </Grid>

          {/* User Suggestions / Followed Users */}
          <Grid item xs={4}>
            <UserSuggestions />
          </Grid>
        </Grid>
      <Footer/>
      </Box>
    </Box>
  );
};

export default HomePage;
