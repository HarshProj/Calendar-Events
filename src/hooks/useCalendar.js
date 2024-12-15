import { useState } from "react";
import { useEventStorage } from "./useLocalStorage";

export const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const { events } = useEventStorage();
  
  return {
    currentMonth,
    setCurrentMonth,
    events
  };
};
