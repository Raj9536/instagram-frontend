import React, { useState } from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Divider, Box, Button, Stack } from "@mui/material";

export default function TypographyMenu() {
  const [menuOpen, setMenuOpen] = useState(true); // Start with the menu open
  const [reportBoxOpen, setReportBoxOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");

  const handleOutsideClick = () => {
    setMenuOpen(false);
    setReportBoxOpen(false);
    setSelectedReason(""); // Clear selected reason when closing
  };

  const handleMenuItemClick = (item) => {
    if (item === "Report") {
      setReportBoxOpen(true);
    }
    setMenuOpen(false); // Close the menu
  };

  const handleReasonSelect = (reason) => {
    setSelectedReason(reason);
  };

  const handleSubmit = () => {
    if (selectedReason) {
      alert(`Submitted reason: ${selectedReason}`);
      // Perform actual submission logic here
      handleOutsideClick(); // Close the report box after submission
    }
  };

  return (
    <>
      {/* Overlay to blur the background when the menu is open */}
      {menuOpen && (
        <Box
          onClick={handleOutsideClick} // Close the menu when clicking outside
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
            backdropFilter: "blur(5px)", // Blur effect
            zIndex: 1, // One less than the menu's z-index
          }}
        />
      )}

      {/* Menu */}
      {menuOpen && (
        <Paper
          sx={{
            width: 250,
            borderRadius: "15px",
            zIndex: 2,
            position: "fixed",
            right: "10rem",
            top: "8rem",
            height: "19vh",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            color: "#000",
            fontFamily: "sans-serif",
          }}
        >
          <MenuList>
            <MenuItem sx={{ justifyContent: "center" }} onClick={() => handleMenuItemClick("Report")}>
              <Typography
                variant="inherit"
                sx={{
                  color: "red",
                  fontSize: "1rem", // Adjusted from fontWeight to fontSize
                }}
              >
                Report
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem sx={{ justifyContent: "center" }} onClick={() => handleMenuItemClick("Copy link")}>
              <Typography variant="inherit">Copy link</Typography>
            </MenuItem>
            <Divider />
            <MenuItem sx={{ justifyContent: "center" }} onClick={() => handleMenuItemClick("Cancel")}>
              <Typography variant="inherit" noWrap>
                Cancel
              </Typography>
            </MenuItem>
          </MenuList>
        </Paper>
      )}

      {/* Report Box */}
      {reportBoxOpen && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#fff",
            zIndex: 2,
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "16px" }}>
            Why are you reporting this post?
          </Typography>
          <MenuList>
            <MenuItem onClick={() => handleReasonSelect("Spam")}>Spam</MenuItem>
            <MenuItem onClick={() => handleReasonSelect("Inappropriate Content")}>Inappropriate Content</MenuItem>
            <MenuItem onClick={() => handleReasonSelect("Violance")}>Violance</MenuItem>
            <MenuItem onClick={() => handleReasonSelect("Fraud or Scam")}>Fraud or Scam</MenuItem>
            <MenuItem onClick={() => handleReasonSelect("Other")}>Other</MenuItem>
          </MenuList>
          <Stack direction="row" spacing={2} sx={{ marginTop: "16px" }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!selectedReason} // Disable button if no reason is selected
            >
              Submit
            </Button>
            <Button variant="outlined" onClick={handleOutsideClick}>
              Cancel
            </Button>
          </Stack>
        </Box>
      )}
    </>
  );
}