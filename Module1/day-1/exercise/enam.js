let startDate = new Date("2022-01-20");
let endDate = new Date("2022-01-22");  

let differenceInTime = endDate - startDate;
let differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

console.log("Perbedaan hari : " + differenceInDays)

//cara kedua
let firstDate = ("2022-01-20")
let secondDate = ("2022-01-22")

let splitFirst = firstDate.split("-")
let splitSecond = secondDate.split("-")

let firstTotalDays = (splitFirst[0] * 1 * 365) + (splitFirst[1] * 1 * 30) + (splitFirst[2] * 1)
let secondTotalDays = (splitSecond[0] * 1 * 365) + (splitSecond[1] * 1 * 30) + (splitSecond[2] * 1)

let differenceDays = secondTotalDays - firstTotalDays

console.log('Perbedaan hari menggunakan cara kedua : ', differenceDays)
