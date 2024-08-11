import React, { useState } from "react";
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
  const [gender, setGender] = useState("");
  const [customGender, setCustomGender] = useState("");
  const [bio, setBio] = useState("");
  const maxBioLength = 150;

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

  return (
    <>
    <Container
      maxWidth="sm"
      sx={{
        marginTop: 6.5,
        padding: 4,
        border: "1px solid #ddd",
        borderRadius: 2,
        fontFamily:"sans-serif",
        marginLeft:"25%",
        background: 'white',
        overflow:'auto'
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
          src="/path/to/profile-photo.jpg"
          alt="Profile Photo"
        />
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            User_name
          </Typography>
          <Typography>Name</Typography>
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
          <input type="file" hidden />
        </Button>
      </Box>

      <Typography
        sx={{
          fontWeight: "bold", marginBottom:0
        }}
      >
        Website
      </Typography>
      <Box sx={{ marginBottom: 4 }}>
        <TextField
          sx={{
            borderRadius: "16px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px", // Ensures the TextField itself has rounded corners
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
            fontWeight: "bold", marginBottom:2
          }}
          gutterBottom
        >
          Bio
        </Typography>
        <Box
          sx={{
            width: "97%",
            maxHeight: "120px", // Fixed height for the scrollable area
            // overflowX: "auto", // Allows vertical scrolling
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
              resize: "none", // Disables resizing of the textarea
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
      <Typography sx={{fontWeight:"bold", marginBottom:2}}>Gender</Typography>
      <Box sx={{ marginBottom: 4 }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Gender</InputLabel>
          <Select
            value={gender}
            onChange={handleGenderChange}
            label="Gender"
            sx={{ borderRadius: "16px" }} // Ensures the Select dropdown has rounded corners
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
            sx={{
              borderRadius: "16px", // Ensure the TextField has rounded corners
            }}
          />
        )}
        <Typography variant="caption" color="textSecondary">
          This won’t be part of your public profile.
        </Typography>
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
      >
        Submit
      </Button>
    </Container>
    <div>
      <Sidenav/>
    </div>
    </>
  );
};

export default EditProfile;