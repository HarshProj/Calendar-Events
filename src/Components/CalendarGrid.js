import React from 'react';
import { format } from 'date-fns';

export const CalendarGrid = ({ days, onDayClick, selectedDate }) => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div key={day} className="font-semibold text-center">{day}</div>
      ))}
      {days.map((day, index) => (
        <div
          key={index}
          className={`p-4 border text-center ${
            day ? 'cursor-pointer hover:bg-gray-200' : ''
          } ${selectedDate && day && format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? 'bg-blue-100' : ''}`}
          onClick={() => day && onDayClick(day)}
        >
          {day ? format(day, 'd') : ''}
        </div>
      ))}
    </div>
  );
};
