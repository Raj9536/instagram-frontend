import React, { useState, useEffect } from "react";
import { Box, Avatar, Typography, Divider, Tabs, Tab, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidenav";
import { styled } from "@mui/material/styles";

const username = localStorage.getItem('username');
const accessToken = localStorage.getItem('accessToken');
const id = localStorage.getItem('id');
console.log('id:', id);
console.log('accessToken:', accessToken);
console.log('username:', username);
// Styled components
const StyledAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  marginRight: 2,
});

const StyledTabs = styled(Tabs)({
  marginBottom: 16,
  ".MuiTab-root": {
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "10px 20px",
  },
  ".MuiTabs-indicator": {
    height: 3,
  },
});

const MetaTypography = styled(Typography)({
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
});

const Profile = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [user, setUser] = useState(null);

  // Fetch user data from backend
  useEffect(() => {
    const fetchUserProfile = async () => {
      const username = localStorage.getItem('username');
      const accessToken = localStorage.getItem('accessToken');

      if (!username || !accessToken) {
        console.error("No username or access token found");
        return;
      }

      try {
        const response = await fetch(`http://localhost:8000/api/v1/users/${username}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data.data);
        } else {
          console.error("Failed to fetch user data", await response.text());
        }
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleEditProfile = () => {
    navigate("/editprofile");
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <Box
        sx={{
          marginLeft: "30rem",
          width: "40%",
          position: "relative",
          marginTop: "20px",
          overflow: { xs: "auto", sm: "initial" },
          padding: 3,
        }}
      >
        {/* Profile Header */}
        <Box sx={{ display: "flex", alignItems: "center", padding: 2 ,width: 150, height: 150 }}>
          <StyledAvatar
            src={user.profilePicture || "/images/defaultavatar.png"} // Fallback image path
            alt={user.username}
          />
          <Box
            sx={{
              marginLeft: 4,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
              <MetaTypography fontWeight="medium" variant="h5">
                {user.username}
              </MetaTypography>
              <Link
                component="button"
                variant="body2"
                onClick={handleEditProfile}
                sx={{
                  marginLeft: 3,
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                Edit Profile
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 6,
                mt: 1.5,
                alignItems: "center",
              }}
            >
              <Box>
                <MetaTypography variant="body2" fontWeight="bold">
                  Posts
                </MetaTypography>
                <MetaTypography>{user.posts ? user.posts.length : 0}</MetaTypography>

              </Box>
              <Box>
                <MetaTypography variant="body2" fontWeight="bold">
                  Followers
                </MetaTypography>
                <MetaTypography>{user.followers ? user.followers.length : 0}</MetaTypography>
              </Box>
              <Box>
                <MetaTypography variant="body2" fontWeight="bold">
                  Following
                </MetaTypography>
                <MetaTypography>{user.followings ? user.followings.length : 0}</MetaTypography>
              </Box>
            </Box>
            {/* Display user bio if available */}
            {user.description ? (
              <MetaTypography
                variant="body2"
                color="textSecondary"
                sx={{ mt: 2, width: "100%" }}
              >
                {user.description}
              </MetaTypography>
            ) : (
              <MetaTypography
                variant="body2"
                color="textSecondary"
                sx={{ mt: 2, width: "100%" }}
              >
                Bio goes here.
              </MetaTypography>
            )}
          </Box>
        </Box>

        {/* Story Highlights */}
        <Box sx={{ padding: 2 }}>
          <MetaTypography
            sx={{
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Highlights
          </MetaTypography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 1 }}>
            {(user.highlights || []).map((highlight, index) => (
              <Avatar
                key={index}
                src={highlight.image || `/assets/images/default-highlight.jpg`} // Placeholder image
                alt={`Highlight ${index}`}
                sx={{
                  width: 50,
                  height: 50,
                  border: "2px solid #f0f0f0",
                }}
              />
            ))}
          </Box>
          <Divider sx={{ mb: 2 }} />
        </Box>

        {/* Tab Navigation */}
        <StyledTabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
        >
          <Tab label="Posts" />
          <Tab label="Tagged" />
          <Tab label="Reels" />
        </StyledTabs>

        {/* Tab Content */}
        <Box>
          {selectedTab === 0 && (
            <MetaTypography variant="body2" align="center">
              No posts to show.
            </MetaTypography>
          )}
          {selectedTab === 1 && (
            <MetaTypography variant="body2" align="center">
              No tags to show.
            </MetaTypography>
          )}
          {selectedTab === 2 && (
            <MetaTypography variant="body2" align="center">
              No reels to show.
            </MetaTypography>
          )}
        </Box>
      </Box>

      <Sidebar />
    </>
  );
};

export default Profile;
