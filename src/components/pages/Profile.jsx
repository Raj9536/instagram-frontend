import React from "react";
import {
  Box,
  Avatar,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidenav";
import { styled } from "@mui/material/styles";

// Styled components
const StyledCard = styled(Card)({
  width: "97%",
  flexWrap: "wrap",
  border: 0,
  overflow: "auto",
  resize: "horizontal",
  padding: 2,
});

const StyledAvatar = styled(Avatar)({
  width: 100,
  height: 100,
  marginRight: 2,
});

const StyledStoryAvatar = styled(Avatar)({
  width: 60, // Reduced width
  height: 60, // Reduced height
  marginRight: 2,
});

const EditProfileButton = styled("button")({
  position: "absolute",
  top: 8,
  right: 8,
  padding: "6px 16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#fff",
  cursor: "pointer",
  zIndex: 1,
});

const Profile = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/editprofile"); // Navigate to the edit-profile page
  };

  return (
    <>
      <Box
        sx={{
          marginLeft: "30rem",
          width: "40%",
          position: "relative",
          marginTop: "20px",
          overflow: { xs: "auto", sm: "initial" },
          padding: 3, // Added padding for better spacing
        }}
      >
        {/* Edit Profile Button */}
        <EditProfileButton
          sx={{
            marginTop: "50px",
            marginRight: "100px",
            background: "#1976d2",
          }}
          onClick={handleEditProfile}
        >
          <Typography>Edit Profile</Typography>
        </EditProfileButton>

        <StyledCard orientation="horizontal">
          <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
            <StyledAvatar
              src="http://localhost:3000/editprofile"
              alt="Profile Photo"
            />
            <CardContent>
              <Typography fontWeight="lg">Alex Morrison</Typography>
              <Box
                sx={{
                  bgcolor: "background.level1",
                  borderRadius: "sm",
                  p: 1.5,
                  my: 1.5,
                  display: "flex",
                  gap: 12,
                  "& > div": { flex: 1 },
                }}
              >
                <div>
                  <Typography variant="body2" fontWeight="lg">
                    Post
                  </Typography>
                  <Typography fontWeight="lg">98</Typography>
                </div>
                <div>
                  <Typography variant="body2" fontWeight="lg">
                    Followers
                  </Typography>
                  <Typography fontWeight="lg">899</Typography>
                </div>
                <div>
                  <Typography variant="body2" fontWeight="lg">
                    Following
                  </Typography>
                  <Typography fontWeight="lg">579</Typography>
                </div>
              </Box>
              <Typography variant="body2" fontWeight="lg" color="textSecondary">
                Bio
                <br />.<br />.<br />.
              </Typography>
            </CardContent>
          </Box>
        </StyledCard>

        {/* Story Highlights */}
        <Box sx={{ padding: 2 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Highlights
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 1, width: "100px" }}>
            {[1, 2, 3].map((story, index) => (
              <StyledStoryAvatar
                key={index}
                src={`/assets/images/create.jpg`} // Placeholder image
                alt={`Story ${story}`}
                sx={{
                  border: "2px solid #f0f0f0",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(-50%, 50%)",
                    bgcolor: "background.paper",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "16px",
                    color: "text.primary",
                  }}
                ></Typography>
              </StyledStoryAvatar>
            ))}
          </Box>
          <Divider sx={{ mb: 2 }} />
        </Box>

        {/* Posts Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            mt: 1, // Reduced margin-top
            padding: 1,
            width: "38rem",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((post, index) => (
            <Box
              key={index}
              sx={{
                height: 200, // Adjusted height
                bgcolor: "background.level2",
                borderRadius: "md",
                overflow: "hidden", // Added to ensure image fits within the box
              }}
            >
              {/* Placeholder content for the post */}
              <img
                src={`https://via.placeholder.com/200?text=Post+${post}`} // Adjusted size
                alt={`Post ${post}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Sidebar />
    </>
  );
};

export default Profile;
