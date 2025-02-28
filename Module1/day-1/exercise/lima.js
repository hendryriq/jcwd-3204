//input jumlah hari
let daysInput = 400;

let oneYear = 365;
let oneMonth = 30;

let years = Math.floor(daysInput / oneYear);
//cara lain
let years2 = daysInput - (daysInput % oneYear) / oneYear
// console.log()
let remainingDays = daysInput % oneYear;
let months = Math.floor(remainingDays / oneMonth);
let days = remainingDays % oneMonth;

console.log("Hasil : " + years + " tahun, " + months + " bulan, " + days + " hari")