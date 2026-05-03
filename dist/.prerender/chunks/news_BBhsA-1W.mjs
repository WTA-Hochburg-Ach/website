function sortByDateDescending(entries) {
  return [...entries].sort((left, right) => right.data.date.getTime() - left.data.date.getTime());
}
function sortByDateAscending(entries) {
  return [...entries].sort((left, right) => left.data.date.getTime() - right.data.date.getTime());
}
function isEvent(entry) {
  return entry.data.type === "event";
}
function formatDate(date, locale = "de-DE") {
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function formatDateRange(startDate, endDate, locale = "de-DE") {
  if (!endDate) {
    return formatDate(startDate, locale);
  }
  const sameMonth = startDate.getFullYear() === endDate.getFullYear() && startDate.getMonth() === endDate.getMonth();
  if (sameMonth) {
    return `${startDate.getDate()}.-${endDate.getDate()}. ${startDate.toLocaleDateString(locale, {
      month: "long",
      year: "numeric"
    })}`;
  }
  return `${formatDate(startDate, locale)} - ${formatDate(endDate, locale)}`;
}
function monthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}
function buildMonthLabel(date, locale = "de-DE") {
  return date.toLocaleDateString(locale, {
    month: "long",
    year: "numeric"
  });
}
function getMonthMatrix(referenceDate) {
  const year = referenceDate.getFullYear();
  const month = referenceDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstWeekday = (firstDay.getDay() + 6) % 7;
  const daysInMonth = lastDay.getDate();
  const weeks = [];
  let currentWeek = Array.from({ length: 7 }, () => null);
  for (let index = 0; index < firstWeekday; index += 1) {
    currentWeek[index] = null;
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    const weekdayIndex = (firstWeekday + day - 1) % 7;
    currentWeek[weekdayIndex] = day;
    if (weekdayIndex === 6 || day === daysInMonth) {
      weeks.push(currentWeek);
      currentWeek = Array.from({ length: 7 }, () => null);
    }
  }
  return weeks;
}

export { sortByDateAscending as a, buildMonthLabel as b, formatDateRange as f, getMonthMatrix as g, isEvent as i, monthKey as m, sortByDateDescending as s };
