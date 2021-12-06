const addDays = require("date-fns/addDays");

const dateAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 07, 22), days);
  return `${newDate.getDay}` - `${newDate.getMonth}` - `${newDate.getFullYear}`;
};

module.exports = dateAfterXDays;
