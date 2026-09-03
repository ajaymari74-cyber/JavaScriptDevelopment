let date = new Date()
console.log(date);


//Date getFullYear()
console.log(date.getFullYear());

//Date.getMonth
console.log(date.getMonth()+1);

//Date.getDate
console.log(date.getDate());

//Date.getHours
console.log(date.getHours());

//Date.getSeconds
console.log(date.getSeconds());

//Date.getMilliSecond
console.log(date.getMilliseconds());

//Date.getMinutes
console.log(date.getMinutes());

//Date.setFullYear(Year, month, Days)
date.setFullYear(2025)
console.log(date);

//Date.setMonth(Month,day)
date.setMonth(5,17)
console.log(date);
console.log(date.toLocaleDateString())
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(date.toLocaleTimeString())

