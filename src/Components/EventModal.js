import React, { useState } from 'react';

export const EventModal = ({ date, events, onAddEvent }) => {
  const [eventName, setEventName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState(''); // New state for description

  const handleAddEvent = () => {
    if (!eventName || !startTime || !endTime || !description) {
      return alert('Fill all fields');
    }
    const event = { name: eventName, startTime, endTime, description };
    onAddEvent(date, event);
    setEventName('');
    setStartTime('');
    setEndTime('');
    setDescription(''); // Reset the description field
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <h3 className="text-lg font-bold mb-2">Events for {date.toDateString()}</h3>
        <ul className="mb-4">
          {events.map((event, idx) => (
            <li key={idx} className="mb-1">
              {event.name} ({event.startTime} - {event.endTime})
              <p className="text-sm text-gray-600">{event.description}</p> {/* Display description */}
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="border p-1 mb-2 w-full"
        />
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="border p-1 mb-2 w-full"
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="border p-1 mb-2 w-full"
        />
        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-1 mb-2 w-full"
        ></textarea> {/* New description field */}
        <div className="flex justify-end">
          <button
            onClick={handleAddEvent}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Add
          </button>
          <button
            onClick={() => onAddEvent(null)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
