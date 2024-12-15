import React, { useEffect } from 'react';
import { format } from 'date-fns';

export const CalendarGrid = ({ days, events, onDayClick, selectedDate }) => {
  useEffect(() => {
    // This ensures that whenever events change, the component will re-render.
    console.log('Grid Updated');
  }, [events]); // Dependency array ensures it runs when events change

  return (
    <div className="grid grid-cols-7 gap-2">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div key={day} className="font-semibold text-center">{day}</div>
      ))}
      {days.map((day, index) => (
        <div
          key={index}
          className={`p-4 border text-center ${
            events[day?.toISOString().split('T')[0]]?.length? 'bg-green-200' : '' // bg-green-200 if event exists
          } ${day ? 'cursor-pointer hover:bg-gray-200' : ''} ${
            selectedDate && day && format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? 'bg-blue-100' : ''
          }`}
          onClick={() => {
            day && onDayClick(day);
            console.log(day);
          }}
        >
          {day ? format(day, 'd') : ''}
        </div>
      ))}
    </div>
  );
};
