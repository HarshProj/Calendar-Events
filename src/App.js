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
      [date.toISOString().split('T')[0]]: [...(prev[date.toISOString().split('T')[0]] || []), event],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex justify-between mb-4">
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>Previous</button>
        <h2 className="text-lg font-bold">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>Next</button>
      </div>
      <CalendarGrid days={days} onDayClick={setSelectedDate} selectedDate={selectedDate} />
      {selectedDate && (
        <EventModal
          date={selectedDate}
          events={events[selectedDate.toISOString().split('T')[0]] || []}
          onAddEvent={(date, event) => {
            if (!date) return setSelectedDate(null);
            addEvent(date, event);
          }}
        />
      )}
    </div>
  );
}

export default App;
