import { getDay, startOfMonth, endOfMonth, eachDayOfInterval,addMonths, subMonths } from 'date-fns';

export function generateCalendar(currentDate) {
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);

  const days = eachDayOfInterval({ start, end });

  const prefix = Array.from({ length: getDay(start) }).map(() => null);
  const suffix = Array.from({ length: 6 - getDay(end) }).map(() => null);

  return [...prefix, ...days, ...suffix];
}
