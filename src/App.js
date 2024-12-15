import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import { generateCalendar } from './utils/CalendarUtils';
import { useLocalStorage } from './hooks/useLocalStorage';
import { CalendarGrid } from './Components/CalendarGrid';
import { EventModal } from './Components/EventModal';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useLocalStorage('events', {});
  const [selectedDate, setSelectedDate] = useState(null);

  const days = generateCalendar(currentDate);

  const addEvent = (date, event) => {
    setEvents((prev) => ({
      ...prev,
      [date.toISOString().split('T')[0]]: [
        ...(prev[date.toISOString().split('T')[0]] || []),
        event,
      ],
    }));
  };

  const editEvent = (date, oldEvent, updatedEvent) => {
    const eventDate = date.toISOString().split('T')[0];
    setEvents((prev) => {
      const updatedEvents = prev[eventDate].map((event) =>
        event === oldEvent ? updatedEvent : event
      );
      return {
        ...prev,
        [eventDate]: updatedEvents,
      };
    });
  };

  const deleteEvent = (date, event) => {
    const eventDate = date.toISOString().split('T')[0];
    setEvents((prev) => {
      const updatedEvents = prev[eventDate].filter(
        (e) => e !== event
      );
      return {
        ...prev,
        [eventDate]: updatedEvents,
      };
    });
  };

  return (
    <div className="mx-auto mt-10 mb-10 max-w-4xl">
      <h1 className="text-center text-2xl font-bold">Dynamic Event Calendar</h1>
      <div className="max-w-3xl mx-auto mt-10 shadow-xl">
        <div className="flex justify-between bg-orange-300 py-5 px-5 rounded-t-xl">
          <button
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
            className="bg-amber-200 py-2 w-20 rounded-xl"
          >
            Previous
          </button>
          <h2 className="text-lg font-bold">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
            className="bg-amber-200 py-2 w-20 rounded-xl"
          >
            Next
          </button>
        </div>
        <div className="w-full h-full border-2 px-2 py-2 rounded-b-xl">
          <CalendarGrid
            days={days}
            onDayClick={setSelectedDate}
            events={events}
            selectedDate={selectedDate}
          />
          {selectedDate && (
            <EventModal
              date={selectedDate}
              events={events[selectedDate.toISOString().split('T')[0]] || []}
              onAddEvent={(date, event) => {
                if (!date) return setSelectedDate(null);
                addEvent(date, event);
              }}
              onEditEvent={editEvent}
              onDeleteEvent={deleteEvent}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
