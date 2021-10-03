import React from "react";

const formatDate = (dateString) => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const date = new Date(dateString);
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // Select locale
  const locale = navigator.language;

  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "short",
  };

  const dateTimeFormatter = new Intl.DateTimeFormat(locale, options);
  return dateTimeFormatter.format(date);
};

const CustomDate = ({ dateString }) => {
  return <div data-testid="date-string">{formatDate(dateString)}</div>;
};

export default CustomDate;
