const moment = require("moment");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday"
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let day = daysOfWeek[moment().day()];
let month = monthNames[moment().month()];
let numberDay = moment().date();
let year = moment().year();
let actualDate = `${day}, ${month} ${numberDay}th ${year}`;
console.log(actualDate);

const now = moment();
const oldDate = "1974-11-26";
const difference = now.diff(oldDate, "years");
console.log(`${oldDate} was  ${difference} years ago`);
