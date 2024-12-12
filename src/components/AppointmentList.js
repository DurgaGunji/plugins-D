import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

// Utility function to format the current date
const formatDate = () => {
  const options = { weekday: "long", day: "numeric", month: "long" };
  const today = new Date();
  return today.toLocaleDateString("en-US", options);
};

const appointments = [
  { id: 1, name: "Albert Flores", time: "10:00 AM - 11:00 AM", issue: "Headache" },
  { id: 2, name: "John Doe", time: "11:00 AM - 12:00 PM", issue: "Fever" },
  { id: 3, name: "Jane Smith", time: "1:00 PM - 2:00 PM", issue: "Back Pain" },
  { id: 4, name: "Paul Adams", time: "2:00 PM - 3:00 PM", issue: "Flu" },
];

const AppointmentList = () => {
  const [activeId, setActiveId] = useState(null);
  const [activeTab, setActiveTab] = useState("inQueue");
  const [anchorEl, setAnchorEl] = useState(null); // Anchor element for context menu
  const [selectedAppointment, setSelectedAppointment] = useState(null); // Track selected appointment

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Open menu for the selected appointment
  const handleMenuOpen = (event, appointment) => {
    setAnchorEl(event.currentTarget);
    setSelectedAppointment(appointment);
  };

  // Close the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedAppointment(null);
  };

  // Handle menu actions
  const handleViewAppointment = () => {
    alert(`Viewing details for ${selectedAppointment.name}`);
    handleMenuClose();
  };

  const handleCancelAppointment = () => {
    alert(`Cancelling appointment for ${selectedAppointment.name}`);
    handleMenuClose();
  };

  return (
    <Box sx={{ maxHeight: "70vh", overflowY: "auto", mb: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        {/* Today's Appointments Title */}
        <Typography variant="h6" gutterBottom>
  Today's Appointments <span style={{ color: "blue" }}>(20)</span>
</Typography>
        {/* Current Date */}
        <Typography variant="h6" sx={{ color: "gray" }}>
          {formatDate()}
        </Typography>
      </Box>

      {/* Tabs Row */}
      <Box sx={{ display: "flex", gap: 4, mb: 2 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="appointment status tabs">
          <Tab
            label={`In Queue 10`}
            value="inQueue"
            sx={{
              textTransform: "none",
              fontWeight: activeTab === "inQueue" ? "bold" : "normal",
              color: activeTab === "inQueue" ? "blue" : "gray",
              borderBottom: activeTab === "inQueue" ? "2px solid blue" : "none",
            }}
          />
          <Tab
            label={`Completed 5`}
            value="completed"
            sx={{
              textTransform: "none",
              fontWeight: activeTab === "completed" ? "bold" : "normal",
              color: activeTab === "completed" ? "blue" : "gray",
              borderBottom: activeTab === "completed" ? "2px solid blue" : "none",
            }}
          />
          <Tab
            label={`Review 5`}
            value="review"
            sx={{
              textTransform: "none",
              fontWeight: activeTab === "review" ? "bold" : "normal",
              color: activeTab === "review" ? "blue" : "gray",
              borderBottom: activeTab === "review" ? "2px solid blue" : "none",
            }}
          />
        </Tabs>
      </Box>

      <Box sx={{ mt: 2 }}>
        <TextField
          fullWidth
          placeholder="Search for anything here"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ backgroundColor: "#f0f0f0" ,marginBottom:"10px"}}
        />
      </Box>

      {/* Appointment List */}
      <Grid container spacing={2}>
        {appointments.map((appointment) => (
          <Grid item xs={12} key={appointment.id}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                backgroundColor: activeId === appointment.id ? "blue" : "#f0f0f0",
                color: activeId === appointment.id ? "white" : "black",
                cursor: "pointer",
              }}
              onClick={() => setActiveId(appointment.id)}
            >
              <Box>
                <Typography variant="subtitle1">{appointment.name}</Typography>
                <Typography variant="body2">
                  {appointment.time} - {appointment.issue}
                </Typography>
              </Box>
              <MoreVertIcon
                sx={{ cursor: "pointer" }}
                onClick={(event) => handleMenuOpen(event, appointment)}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Context Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleViewAppointment}>View Appointment</MenuItem>
        <MenuItem onClick={handleCancelAppointment}>Cancel Appointment</MenuItem>
      </Menu>
    </Box>
  );
};

export default AppointmentList;
