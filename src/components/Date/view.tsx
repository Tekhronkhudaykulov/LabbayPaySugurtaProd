import React, { useEffect, useState } from "react";

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const dayNames = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ];
      const monthNames = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];

      const day = dayNames[now.getDay()];
      const date = now.getDate();
      const month = monthNames[now.getMonth()];
      const year = now.getFullYear();

      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      const formattedDateTime = `${day}, ${date} ${month} ${year}, ${hours}:${minutes}:${seconds}`;

      setDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="text-[24px] italic">{dateTime}</div>;
};

export default DateTimeDisplay;
