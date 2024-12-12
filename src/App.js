import React from "react";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout"; // Import MainLayout

function App() {
  return (
    <div>
      {/* Navbar at the top */}
      {/* <Navbar /> */}
      {/* MainLayout handles the layout of Sidebar, AppointmentList, and CalendarView */}
      <MainLayout />
    </div>
  );
}

export default App;
