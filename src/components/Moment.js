import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Avatar , Dialog, DialogTitle, DialogContent,Button,DialogActions} from "@mui/material"; // Import Material UI Avatar
import "./Moment.css"; // Import custom CSS styles
import { CalendarToday } from "@mui/icons-material";

const localizer = momentLocalizer(moment);



const events = [
  {id:"1", title: "Albert", start: new Date(2024, 11, 8, 8, 0), end: new Date(2024, 11, 8, 9, 0), color: "lightpink", avatarUrl: "https://i.pravatar.cc/40?img=1", className: "event-1" },
  {id:"2", title: "Albert", start: new Date(2024, 11, 8, 8, 0), end: new Date(2024, 11, 8, 9, 0), color: "paleturquoise", avatarUrl: "https://i.pravatar.cc/40?img=2", className: "event-2" },
  {id:"3", title: "Albert", start: new Date(2024, 11, 8, 8, 0), end: new Date(2024, 11, 8, 9, 0), color: "paleturquoise", avatarUrl: "https://i.pravatar.cc/40?img=2", className: "event-2" },
  {id:"4", title: "Albert", start: new Date(2024, 11, 8, 8, 0), end: new Date(2024, 11, 8, 9, 0), color: "paleturquoise", avatarUrl: "https://i.pravatar.cc/40?img=2", className: "event-2" },
  //{id:"5", title: "Albert", start: new Date(2024, 11, 8, 8, 0), end: new Date(2024, 11, 8, 9, 0), color: "paleturquoise", avatarUrl: "https://i.pravatar.cc/40?img=2", className: "event-2" },
  //{id:"6", title: "Albert", start: new Date(2024, 11, 8, 8, 30), end: new Date(2024, 11, 8, 9, 0), color: "paleturquoise", avatarUrl: "https://i.pravatar.cc/40?img=2", className: "event-2" },
  //{id:"7", title: "Albert", start: new Date(2024, 11, 8, 8, 30), end: new Date(2024, 11, 8, 9, 0), color: "paleturquoise", avatarUrl: "https://i.pravatar.cc/40?img=2", className: "event-2" },
  //{id:"8", title: "Albert", start: new Date(2024, 11, 8, 8, 30), end: new Date(2024, 11, 8, 9, 0), color: "paleturquoise", avatarUrl: "https://i.pravatar.cc/40?img=2", className: "event-2" },
  //{id:"9", title: "Albert", start: new Date(2024, 11, 8, 8, 30), end: new Date(2024, 11, 8, 9, 0), color: "paleturquoise", avatarUrl: "https://i.pravatar.cc/40?img=2", className: "event-2" },
  
 //{ id:"10",title: "Albert", start: new Date(2024, 11, 8, 10, 0), end: new Date(2024, 11, 8, 11, 0), color: "paleturquoise", avatarUrl: "https://i.pravatar.cc/40?img=3", className: "event-3" },
  //{id:"11", title: "Albert", start: new Date(2024, 11, 8, 10, 0), end: new Date(2024, 11, 8, 11, 0), color: "paleturquoise", avatarUrl: "https://i.pravatar.cc/40?img=3", className: "event-4" },
  //{id:"12", title: "Albert", start: new Date(2024, 11, 8, 10, 0), end: new Date(2024, 11, 8, 11, 0), color: "paleturquoise", avatarUrl: "https://i.pravatar.cc/40?img=4", className: "event-z" },
  //{id:"13", title: "Albert", start: new Date(2024, 11, 8, 10, 0), end: new Date(2024, 11, 8, 11, 0), color: "paleturquoise", avatarUrl: "https://i.pravatar.cc/40?img=5", className: "event-5" },
  //{id:"14", title: "Albert", start: new Date(2024, 11, 8, 13, 0), end: new Date(2024, 11, 8, 14, 0), color: "#e9ecef", avatarUrl: "https://i.pravatar.cc/40?img=6", className: "event-6" },
  //{id:"15", title: "Albert", start: new Date(2024, 11, 8, 13, 0), end: new Date(2024, 11, 8, 14, 0), color: "#e9ecef", avatarUrl: "https://i.pravatar.cc/40?img=7", className: "event-7" },
  //{ id:"16",title: "Albert", start: new Date(2024, 11, 8, 13, 0), end: new Date(2024, 11, 8, 14, 0), color: "#e9ecef", avatarUrl: "https://i.pravatar.cc/40?img=8", className: "event-8" },
];

const timeRanges = [
  { start: new Date(2024, 11, 8, 8, 0), end: new Date(2024, 11, 8, 9, 0) }, // 8 AM to 9 AM
  { start: new Date(2024, 11, 8, 10, 0), end: new Date(2024, 11, 8, 11, 0) }, // 10 AM to 11 AM
  { start: new Date(2024, 11, 8, 13, 0), end: new Date(2024, 11, 8, 14, 0) }, // 1 PM to 2 PM
];
const filterEventsByTime = (events, range) => {
  return events.filter(event => event.start >= range.start && event.start < range.end);
};

// Separate events into different arrays based on time ranges

// const MyCalendar = () => {
//   const [showMore, setShowMore] = useState(false);

// Custom Event Rendering Component
// Custom Event Rendering Component
const CustomEvent = ({ event }) => {
  const startTime = moment(event.start).format("h:mm A");
  const endTime = moment(event.end).format("h:mm A");

  return (
    <div
      className={`custom-event ${event.className}`}
      style={{
        backgroundColor: event.color,
        borderRadius: "5px",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={event.avatarUrl} alt={event.title} style={{ marginRight: "10px" }} />
        <div>
          <p style={{ margin: "0", fontWeight: "bold" }}>{event.title}</p>
          <p style={{ margin: "0", fontSize: "1em", marginTop: "10px" }}>
            {startTime} - {endTime}
          </p>
        </div>
      </div>
    </div>
  );
};

// Custom Toolbar Component
const CustomToolbar = (toolbar) => {
  const goToToday = () => {
    const today = new Date();
    toolbar.onNavigate("TODAY", today);
  };

  const goToCustomDate = () => {
    const customDate = new Date(2024, 11, 15); // Example custom date
    toolbar.onNavigate("DATE", customDate);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div>
        <button
          style={{
            padding: "5px 20px",
            backgroundColor: "white",
            border: "2px solid aliceblue",
            color: "black",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
            height: "35px",
          }}
          onClick={goToToday}
        >
          Today
        </button>
        <button
          style={{
            padding: "5px 20px",
            backgroundColor: "white",
            color: "black",
            height: "35px",
            border: "2px solid aliceblue",
            borderRadius: "5px",
            cursor: "pointer",
            textAlign: "center",
          }}
          onClick={goToCustomDate}
        >
          Custom
          <CalendarToday
            style={{
              marginLeft: "25px",
              fontSize: "18px",
              color: "black",
            }}
          />
        </button>
      </div>
      <div>
        {toolbar.views.map((view) => (
          <button
            key={view}
            style={{
              padding: "5px 10px",
              backgroundColor: toolbar.view === view ? "blue" : "#e9ecef",
              color: toolbar.view === view ? "white" : "black",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => toolbar.onView(view)}
          >
            {view.charAt(0).toUpperCase() + view.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

// Main Calendar Component
const MyCalendar = () => {
  
  const [showMore, setShowMore] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [popupEvents, setPopupEvents] = useState([]);
  // Display first 3 events by default
  const displayedEvents = events.slice(0, 3);
  const remainingEvents = events.slice(3);

  const handleShowMoreClick = () => {
    setOpenPopup(true);
    setPopupEvents(remainingEvents); // Show the remaining events in the popup
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const eventStyleGetter = (event) => {
    const textColor = event.color && (parseInt(event.color.replace('#', ''), 16) > 0xFFFFFF / 2) ? 'black' : 'white';
    
    return {
      className: event.className,
      style: {
        backgroundColor: event.color || "#3174ad",
        borderRadius: "5px",
        padding: "15px",
        color: textColor,
        opacity: "0.6",
      },
    };
  };

  return (
    <div style={{ backgroundColor: "#e9ecef", padding: "20px" }}>
      <div className="main" style={{ position: "relative", backgroundColor: "white" }}>
        <div style={{ height: "180vh", padding: "20px" }}>
          <Calendar
            localizer={localizer}
            // events={events}
            events={displayedEvents}
            views={["day", "week", "month"]}
            step={60}
            timeslots={1}
            min={new Date(2024, 11, 5, 7, 0)}
            max={new Date(2024, 11, 5, 19, 0)}
            eventPropGetter={eventStyleGetter}
            components={{
              event: CustomEvent,
              toolbar: CustomToolbar,
            }}
           />
          {/* Add overflow button */}
          {/* Show "+2" button if there are remaining events */}
          {remainingEvents.length > 0 && (
            <button
              style={{
                position: "absolute",
                top: "280px",
                left: "95%",
                transform: "translateX(-50%)",
                padding: "10px 20px",
                backgroundColor: "blue",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
              }}
              onClick={handleShowMoreClick}
            >
              +{remainingEvents.length} 
            </button>
          )}
        </div>
      </div>

     <Dialog open={openPopup} onClose={handleClosePopup}>
  <DialogTitle>Additional Events</DialogTitle>
  <DialogContent>
    {popupEvents.length > 0 ? (
      popupEvents.map((event, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar src={event.avatarUrl} alt={event.title} style={{ marginRight: "10px" }} />
            <div>
              <p style={{ margin: "0", fontWeight: "bold" }}>{event.title}</p>
              <p style={{ margin: "0", fontSize: "1em", marginTop: "10px" }}>
                {moment(event.start).format("h:mm A")} - {moment(event.end).format("h:mm A")}
              </p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>No additional events</p>
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClosePopup} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>

    </div>
  );
};

export default MyCalendar;