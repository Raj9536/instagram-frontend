import React from 'react';
import { Box, Typography, Button, IconButton, Divider, Avatar, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';
import SideNav from '../Sidenav'; // Adjust the path as necessary
import Footer from '../footer'; // Adjust the path as necessary

// Styled components
const ProfileHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  justifyContent: 'center', // Center content horizontally
}));

const ProfilePictureContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 150,
  height: 150,
  marginRight: theme.spacing(2), // Spacing between avatar and info section
}));

const ProfilePicture = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
}));

const InfoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  fontSize: '1.2rem', // Increased font size for info section
}));

const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 82,
  width: 400,
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginBottom: theme.spacing(1),
}));

const HighlightButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  borderRadius: '50%',
}));

const TabPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  marginLeft: 240, // Adjust this value based on the width of SideNav
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center all content horizontally
}));

const FooterContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <SideNav /> {/* Sidebar on the left */}

      <MainContent>
        <ProfileHeader>
          <ProfilePictureContainer>
            <ProfilePicture
              src="https://instagram.fhnd6-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg"
              alt="Profile"
            />
            <HighlightButton color="primary">
              {/* Add icon for highlighted story */}
            </HighlightButton>
          </ProfilePictureContainer>

          <InfoSection>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6" sx={{ flex: 1 }}>
                user_name
              </Typography>
              <Button href="/accounts/edit" variant="text">
                Edit Profile
              </Button>
            </Box>
            <InfoBox>
              <Typography variant="body2" fontSize={15} sx={{ marginRight: 2 }}>
                Posts: 0
              </Typography>
              <Typography variant="body2" fontSize={15} sx={{ marginRight: 2 }}>
                Followers: 0
              </Typography>
              <Typography variant="body2" fontSize={15}>
                Following: 0
              </Typography>
            </InfoBox>
            <Typography variant="body1">Name</Typography>
          </InfoSection>
        </ProfileHeader>

        <Box marginY={2} mt={4} width="100%" display="flex" justifyContent="center">
          <Typography variant="body2">
            Demo bio goes here. Add a short description about the user.
          </Typography>
        </Box>

        <Divider />

        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Posts" />
          <Tab label="Saved" />
          <Tab label="Tagged" />
        </Tabs>

        <TabPanel>
          {value === 0 && <Typography>Posts content goes here</Typography>}
          {value === 1 && <Typography>Saved content goes here</Typography>}
          {value === 2 && <Typography>Tagged content goes here</Typography>}
        </TabPanel>
      </MainContent>

      <FooterContainer>
        <Footer /> {/* Footer at the bottom */}
      </FooterContainer>
    </Box>
  );
};

export default Profile;
