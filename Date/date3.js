var today = new Date("2025-12-12T16:55")
console.log(today)

//2 dates... diff...
const startDate = new Date("2005-10-29")
console.log("start date ",startDate)
const endDate = new Date("2025-01-27")
console.log("start date ",endDate)

//first find diff mills...
//1sec has 1000 mils
//1 min has 60 sec
//1 hour has 60 min
//1 day has 24 hours
//1 month has 30 days
//1 year has 12 months

var diffTime = endDate-startDate;
console.log("millisecond :== ", diffTime)
//years
var diffYears = diffTime / (1000*60*60*24*30*12);
console.log("Years :- " , diffYears);

//Month
var diffMonths = diffTime / (1000*60*60*24*30);
console.log("Months:-  " , diffMonths);

//Day
var diffDays = diffTime / (1000*60*60*24);
console.log("Days " ,diffDays);

//Hours
var diffHours = diffTime / (1000*60*60);
console.log("Hours: " ,diffHours);