import React, { useState, useEffect } from "react";
import Sidenav from "./Sidenav";
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  Avatar,
  TextareaAutosize,
} from "@mui/material";

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState(""); // State for new username input
  const [profilePicture, setProfilePicture] = useState("");
  const [gender, setGender] = useState("");
  const [customGender, setCustomGender] = useState("");
  const [bio, setBio] = useState("");  // bio corresponds to 'description' in your database
  const [isEditingUsername, setIsEditingUsername] = useState(false);  // State to handle username editing
  const maxBioLength = 150;

  useEffect(() => {
    const fetchUserData = async () => {
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
          const user = data.data;
          setUsername(user.username);
          setNewUsername(user.username); // Initialize with current username
          setProfilePicture(user.profilePicture || "/path/to/profile-photo.jpg");
          setGender(user.gender || "");
          setCustomGender(user.customGender || "");
          setBio(user.description || "");  // Set bio from the 'description' field
        } else {
          console.error("Failed to fetch user data", await response.text());
        }
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    if (event.target.value !== "Custom") {
      setCustomGender("");
    }
  };

  const handleBioChange = (event) => {
    const value = event.target.value;
    if (value.length <= maxBioLength) {
      setBio(value);
    }
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const accessToken = localStorage.getItem('accessToken');
    const id = localStorage.getItem('id');
  
    if (!username || !accessToken || !id) {
      console.error("No username, access token, or user ID found");
      return;
    }
  
    const normalizedGender = gender.toLowerCase();
  
    try {
      const response = await fetch(`http://localhost:8000/api/v1/users/user/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: newUsername, // Send the new username
          profilePicture,
          gender: normalizedGender,
          customGender,
          description: bio,
        }),
      });
  
      if (response.ok) {
        // Update the username in local storage
        localStorage.setItem('username', newUsername);
        setUsername(newUsername); // Update local state
        alert("Profile updated successfully");
      } else {
        console.error("Failed to update profile", await response.text());
        alert("Failed to update profile");
      }
    } catch (error) {
      console.error("Failed to update profile", error);
      alert("Failed to update profile");
    }
  };

  const toggleUsernameEdit = () => {
    setIsEditingUsername(!isEditingUsername);
    if (!isEditingUsername) {
      setNewUsername(username); // Reset newUsername to current username when starting to edit
    }
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          marginTop: 6.5,
          padding: 4,
          border: "1px solid #ddd",
          borderRadius: 2,
          fontFamily: "sans-serif",
          marginLeft: "25%",
          background: 'white',
          overflow: 'auto',
        }}
      >
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 5,
          }}
          variant="h4"
          gutterBottom
        >
          Edit Profile
        </Typography>

        <Box
          sx={{
            marginBottom: 4,
            display: "flex",
            alignItems: "center",
            background: "#EFEFEF",
            borderRadius: "16px",
            padding: "16px",
          }}
        >
          <Avatar
            sx={{ width: 80, height: 80, marginRight: 3 }}
            src={profilePicture}
            alt="Profile Photo"
          />
          <Box sx={{ flexGrow: 1 }}>
            {isEditingUsername ? (
              <TextField
                sx={{
                  fontWeight: "bold",
                }}
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                label="Username"
                variant="outlined"
                margin="normal"
              />
            ) : (
              <Typography sx={{ fontWeight: "bold" }}>{username}</Typography>
            )}
          </Box>
          <Button
            sx={{
              marginLeft: "auto",
              borderRadius: "8px",
              width: "200px",
              height: "20px",
              padding: "15px",
              fontSize: "14px",
              marginTop: "14px",
            }}
            variant="contained"
            color="primary"
            component="label"
          >
            Change Photo
            <input type="file" hidden onChange={handleProfilePictureChange} />
          </Button>
        </Box>

        <Button
          sx={{
            marginBottom: 4,
            borderRadius: "8px",
            width: "200px",
            height: "40px",
            padding: "10px",
            fontSize: "14px",
          }}
          variant="contained"
          color="secondary"
          onClick={toggleUsernameEdit}
        >
          {isEditingUsername ? "Cancel Edit" : "Edit Username"}
        </Button>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            sx={{
              fontWeight: "bold", marginBottom: 0,
            }}
          >
            Website
          </Typography>
          <TextField
            sx={{
              borderRadius: "16px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                background: "#EFEFEF",
              },
              "& .MuiInputLabel-root": {
                background: "#EFEFEF",
              },
              "& .MuiFormHelperText-root": {
                background: "transparent",
              },
            }}
            label="https://url/xzy///cdcbcbbcdc///nkw/youtube.com"
            variant="outlined"
            margin="normal"
            helperText="Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio."
          />
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            sx={{
              fontWeight: "bold", marginBottom: 2,
            }}
            gutterBottom
          >
            Bio
          </Typography>
          <Box
            sx={{
              width: "97%",
              maxHeight: "120px",
              borderRadius: 4,
              padding: 1,
              border: "1px solid #ddd",
            }}
          >
            <TextareaAutosize
              minRows={3}
              maxRows={5}
              style={{
                width: "97%",
                padding: 8,
                border: "none",
                background: "transparent",
                resize: "none",
              }}
              value={bio}
              onChange={handleBioChange}
              placeholder="Write your bio..."
            />
          </Box>
          <Typography variant="caption" color="textSecondary">
            {`${bio.length} / ${maxBioLength}`}
          </Typography>
        </Box>

        <Typography sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Gender
        </Typography>
        <Box sx={{ marginBottom: 4 }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Gender</InputLabel>
            <Select
              value={gender}
              onChange={handleGenderChange}
              label="Gender"
              sx={{ borderRadius: "16px" }}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Custom">Custom</MenuItem>
              <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
            </Select>
          </FormControl>
          {gender === "Custom" && (
            <TextField
              fullWidth
              label="Custom Gender"
              variant="outlined"
              margin="normal"
              value={customGender}
              onChange={(e) => setCustomGender(e.target.value)}
              sx={{ borderRadius: "16px" }}
            />
          )}
        </Box>

        <Button
          sx={{
            width: "42%",
            borderRadius: "16px",
            marginLeft: "20rem",
          }}
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
      <div>
        <Sidenav />
      </div>
    </>
  );
};

export default EditProfile;
