import React, { useState, useEffect } from "react";
import { useEventStorage } from "../hooks/useLocalStorage";

const EventForm = ({ day, onClose, event = null }) => {
  const [name, setName] = useState(event ? event.name : "");
  const [startTime, setStartTime] = useState(event ? event.startTime : "");
  const [endTime, setEndTime] = useState(event ? event.endTime : "");
  const [description, setDescription] = useState(event ? event.description : "");
  
  const { addEvent, editEvent } = useEventStorage();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { name, startTime, endTime, description, day };
    if (event) {
      editEvent({ ...newEvent, id: event.id });
    } else {
      addEvent(newEvent);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Event Name" 
        required 
      />
      <input 
        type="time" 
        value={startTime} 
        onChange={(e) => setStartTime(e.target.value)} 
        required 
      />
      <input 
        type="time" 
        value={endTime} 
        onChange={(e) => setEndTime(e.target.value)} 
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Event Description" 
      />
      <button type="submit">{event ? "Edit" : "Add"} Event</button>
    </form>
  );
};

export default EventForm;
