import React, { useState } from "react";
import EventForm from "./eventform.jsx";
import DeleteEvent from "./deleteevent.jsx";

const event1 = {
  id: 1,
  name: "Birthday",
  date: "2021-09-01",
  description: "A birthday party for my best friend",
  category: "Celebration",
};

const event2 = {
  id: 2,
  name: "Graduation",
  date: "2021-08-01",
  description: "The class of 2021 graduates from East High",
  category: "Education",
};

const event3 = {
  id: 3,
  name: "JS Study Session",
  date: "2021-10-01",
  description: "A chance to practice Javascript interview questions",
  category: "Education",
};

function Events() {
  ////////////////// USE STATES ///////////////////
  //   const [events, setEvents] = React.useState([]); << when the server comes in
  const [events, setEvents] = useState([event1, event2, event3]);

  const handleSubmit = (newEvent) => {
    setEvents([...events, newEvent]);
    // this is where you will need to reset the initialState to clear the fields;
  };

  const deleteEvent = (id) => {
    const newEvents = events.filter((i) => i.id != id);
    console.log(id);
    console.log(newEvents);
    setEvents(newEvents);
  };

  return (
    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <ul id="events-list">
          {events.map((event) => (
            <li>{event.name}</li>
          ))}
        </ul>

        <h3>Add Event</h3>
        <EventForm handleSubmit={handleSubmit} />

        <DeleteEvent deleteEvent={deleteEvent} />
      </div>
    </section>
  );
}

export default Events;
