import React, { useState } from 'react';

export const EventModal = ({ date, events, onAddEvent, onEditEvent, onDeleteEvent }) => {
  const [eventName, setEventName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [editingEvent, setEditingEvent] = useState(null); // For tracking the event being edited

  const handleAddEvent = () => {
    if (!eventName || !startTime || !endTime || !description) {
      return alert('Fill all fields');
    }
    const event = { name: eventName, startTime, endTime, description };
    onAddEvent(date, event);
    resetFields();
  };

  const handleEditEvent = (event) => {
    setEventName(event.name);
    setStartTime(event.startTime);
    setEndTime(event.endTime);
    setDescription(event.description);
    setEditingEvent(event); // Set the event to be edited
  };

  const handleSaveEditedEvent = () => {
    if (!eventName || !startTime || !endTime || !description) {
      return alert('Fill all fields');
    }
    const updatedEvent = { name: eventName, startTime, endTime, description };
    onEditEvent(date, editingEvent, updatedEvent);
    resetFields();
  };

  const handleDeleteEvent = (event) => {
    onDeleteEvent(date, event); // Call the delete function
    resetFields();
  };

  const resetFields = () => {
    setEventName('');
    setStartTime('');
    setEndTime('');
    setDescription('');
    setEditingEvent(null);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-96">
        <h3 className="text-lg font-bold mb-2">Events for {date.toDateString()}</h3>
        <ul className="mb-4">
          {events.map((event, idx) => (
            <li key={idx} className="mb-1 flex justify-between items-center">
              <div>
                {event.name} ({event.startTime} - {event.endTime})
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
              <div>
                <button
                  onClick={() => handleEditEvent(event)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteEvent(event)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Event Form for Adding/Editing */}
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
        ></textarea>

        <div className="flex justify-end">
          {editingEvent ? (
            <>
              <button
                onClick={handleSaveEditedEvent}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={resetFields}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleAddEvent}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Add
            </button>
          )}
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
