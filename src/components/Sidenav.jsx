import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { Instagram as InstagramIcon, Home as HomeIcon, Search as SearchIcon, Explore as ExploreIcon, AddBox as CreateIcon, AccountCircle as ProfileIcon, Menu as MenuIcon } from '@mui/icons-material';
import SearchPanel from './SearchPanel';
import More from './More';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CreatePopup from './CreatePopup';

// Drawer width
const drawerWidth = 240;

// Styled ListItem component
const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

// Instagram Logo styling
const InstagramLogo = styled(Box)({
  backgroundImage: 'url(/images/insta.png)',
  backgroundPosition: '0px 0px',
  backgroundSize: '175px 51px',
  width: '175px',
  height: '51px',
  marginTop: '25px',
  backgroundRepeat: 'no-repeat',
  display: 'inline-block',
});

const SideNav = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const handleSearchClick = () => {
    setSearchOpen(!isSearchOpen);
    setCollapsed(!isCollapsed);
  };

  const handleMoreClick = () => {
    setIsMoreOpen(true);
  };

  const handleCreateClick = () => {
    setIsCreateOpen(true); // Open CreatePopup
  };

  const handleCloseCreatePopup = () => {
    setIsCreateOpen(false); // Close CreatePopup
  };

  const fullNav = (
    <Box
      sx={{
        width: isCollapsed ? 60 : drawerWidth,
        position: 'fixed',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        top: 0,
        left: 0,
        padding: 2,
        backgroundColor: '#fff',
        zIndex: 1300,
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        borderRight: '0.35px solid grey',
      }}
    >
      <Box>
        <Box
          sx={{
            width: '100%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <Link to="/home">
            {!isCollapsed ? (
              <InstagramLogo />
            ) : (
              <InstagramIcon fontSize="large" />
            )}
          </Link>
        </Box>
        <List sx={{ marginTop: '0' }}>
          <StyledListItem button component={Link} to="/home">
            <ListItemIcon sx={{ minWidth: '35px' }}>
              <HomeIcon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Home" />}
          </StyledListItem>
          <StyledListItem button onClick={handleSearchClick}>
            <ListItemIcon sx={{ minWidth: '35px' }}>
              <SearchIcon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Search" />}
          </StyledListItem>
          <StyledListItem button onClick={handleCreateClick}>
            <ListItemIcon sx={{ minWidth: '35px' }}>
              <CreateIcon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Create" />}
          </StyledListItem>
          <StyledListItem button component={Link} to="/profile">
            <ListItemIcon sx={{ minWidth: '35px' }}>
              <ProfileIcon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Profile" />}
          </StyledListItem>
        </List>
      </Box>
      <StyledListItem
        button
        onClick={handleMoreClick}
        sx={{ marginBottom: '1rem' }}
      >
        <ListItemIcon sx={{ minWidth: '35px' }}>
          <MenuIcon />
        </ListItemIcon>
        {!isCollapsed && <ListItemText primary="More" />}
      </StyledListItem>
      <More isMoreOpen={isMoreOpen} setIsMoreOpen={setIsMoreOpen} />
    </Box>
  );

  const bottomNav = (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
        marginBottom: '40px',
        zIndex: 1300,
      }}
    >
      <ListItem button component={Link} to="/">
        <ListItemIcon><HomeIcon /></ListItemIcon>
      </ListItem>
      <ListItem button onClick={handleSearchClick}>
        <ListItemIcon><SearchIcon /></ListItemIcon>
      </ListItem>
      <ListItem button onClick={handleCreateClick}>
        <ListItemIcon><CreateIcon /></ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon><ExploreIcon /></ListItemIcon>
      </ListItem>
      <ListItem button onClick={handleMoreClick}>
        <ListItemIcon><MenuIcon /></ListItemIcon>
      </ListItem>
      <More isMoreOpen={isMoreOpen} setIsMoreOpen={setIsMoreOpen} />
    </Box>
  );

  return (
    <>
      {isSmallScreen ? bottomNav : fullNav}
      <SearchPanel open={isSearchOpen} onClose={handleSearchClick} />
      <CreatePopup open={isCreateOpen} onClose={handleCloseCreatePopup} /> {/* Added close function */}
    </>
  );
};

export default SideNav;
