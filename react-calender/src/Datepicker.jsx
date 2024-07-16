import React, { useState } from "react";
import "./Datepicker.css";

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const generateCalendar = (date) => {
    const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevMonthDays = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    const daysArray = [];
    for (let i = startDay - 1; i >= 0; i--) {
      daysArray.push({
        day: prevMonthDays - i,
        currentMonth: false,
      });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push({
        day: i,
        currentMonth: true,
      });
    }

    const remainingDays = 35 - daysArray.length; // 35 is the maximum number of cells in a 7x5 calendar grid
    for (let i = 1; i <= remainingDays; i++) {
      daysArray.push({
        day: i,
        currentMonth: false,
      });
    }

    // Ensure the array length is 35
    if (remainingDays < 0) {
      daysArray.splice(35);
    }

    return daysArray;
  };
  const handleDateClick = (day, currentMonth) => {
    if (currentMonth) {
      const clickedDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        day
      );
      if (!startDate || clickedDate < startDate) {
        setStartDate(clickedDate);
        setEndDate(null);
      } else if (!endDate || clickedDate >= startDate) {
        setEndDate(clickedDate);
      }
    }
  };

  const changeMonth = (direction) => {
    setSelectedDate(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + direction,
        1
      )
    );
  };

  const daysArray = generateCalendar(selectedDate);
  const today = new Date();

  return (
    <div className="datepicker">
      <div className="datepicker-header">
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <div>
          {selectedDate.getFullYear()}年
          {selectedDate.toLocaleString("default", { month: "long" })}
        </div>
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </div>
      <div className="datepicker-grid">
        {daysArray.map((dayObj, index) => {
          const currentDate = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            dayObj.day
          );
          const isToday = currentDate.toDateString() === today.toDateString();
          const isStartDate =
            startDate &&
            currentDate.toDateString() === startDate.toDateString() &&
            dayObj.currentMonth;
          const isEndDate =
            endDate &&
            currentDate.toDateString() === endDate.toDateString() &&
            dayObj.currentMonth;
          const isInRange =
            startDate &&
            endDate &&
            dayObj.currentMonth &&
            currentDate > startDate &&
            currentDate < endDate;

          return (
            <div
              key={index}
              className={`datepicker-day ${
                dayObj.currentMonth ? "" : "non-current-month"
              } ${isToday ? "today" : ""} ${isStartDate ? "selected" : ""} ${
                isEndDate ? "selected" : ""
              } ${isInRange ? "selected" : ""}`}
              onClick={() => handleDateClick(dayObj.day, dayObj.currentMonth)}
            >
              {dayObj.day}日
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Datepicker;
