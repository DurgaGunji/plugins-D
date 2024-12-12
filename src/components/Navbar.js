import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, InputBase,Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"; // Calendar Icon

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 2, color: "black" }}>
          Appointments
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#f0f0f0", borderRadius: 5, p: 0.5 }}>
            {/* Search Icon inside the InputBase */}
            <SearchIcon sx={{ color: "black", ml: 2  }} />
            <InputBase placeholder="Search for anything here.." sx={{ ml: 2,mr:15, color: "black", backgroundColor: "#f0f0f0" }} />
          </Box>
          <Button variant="contained" sx={{ backgroundColor: "blue", display: "flex", alignItems: "center",borderRadius:"15px" }}>
            <CalendarMonthIcon sx={{ mr: 1 }} /> {/* Icon on the left */}
            Book Appointment
          </Button>
          <Box sx={{ position: "relative", display: "inline-flex" }}>
  <Badge
    badgeContent={2} // Badge content
    color="error"
    sx={{
      "& .MuiBadge-badge": {
        position: "absolute",
        top: "25%", // Center vertically
        left: "50%", // Center horizontally
        transform: "translate(-50%, -50%)", // Adjust positioning to fully center
        zIndex: 0, // Ensure it stays above the icon
        width: 20, // Customize size if needed
        height: 20, // Customize size if needed
        borderRadius: "50%", // Circular shape
        fontSize: "12px", // Adjust font size
      },
    }}
  >
    <IconButton>
      <NotificationsIcon />
    </IconButton>
  </Badge>
</Box>

          <Box sx={{ display: "flex", alignItems: "center", color: "black" }}>
            <AccountCircleIcon />
            <Typography variant="subtitle2" sx={{ ml: 1, color: "black" }}>
              Neehar Nairo <br />
              <span style={{ fontSize: "12px", color: "#ccc" }}>Doctor</span>
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
