import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import AppointmentList from "./AppointmentList";
//import doctor_appointment from "./DoctorAppointment";
//import CalendarView from "./CalendarView";
//import CalendarView from "../components/CalendarView";
import Navbar from "./Navbar";
import Moment from "./Moment";

const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      
      <Grid container sx={{ flexGrow: 1, p: 2 }}>
        <Navbar isDrawerOpen={isDrawerOpen} /> {/* Pass Drawer State to Navbar */}

        <Grid item xs={12} md={4} sx={{ p: 2 }}>
          <AppointmentList />
        </Grid>

        <Grid item xs={12} md={8} sx={{ p: 2 }}>
        <Moment />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
