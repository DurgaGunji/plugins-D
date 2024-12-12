import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReportIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = ({ isDrawerOpen, toggleDrawer }) => {
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Appointments", icon: <CalendarMonthIcon /> },
    { text: "Reports", icon: <ReportIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isDrawerOpen ? 240 : 60,
        transition: "width 0.3s",
        "& .MuiDrawer-paper": {
          width: isDrawerOpen ? 240 : 60,
          overflowX: "hidden",
          transition: "width 0.3s",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ display: isDrawerOpen ? "block" : "none",color:"blue" }}
        >
          NN
        </Typography>
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} sx={{ justifyContent: isDrawerOpen ? "flex-start" : "center" }}>
            <ListItemIcon sx={{ minWidth: 0 }}>{item.icon}</ListItemIcon>
            <Typography
              sx={{
                marginLeft: 2,
                display: isDrawerOpen ? "inline" : "none",
              }}
            >
              {item.text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
