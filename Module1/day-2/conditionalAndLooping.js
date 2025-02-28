//conditional looping

let balance = 100;
if (balance > 50) {
  if (balance > 80) {
    // console.log("saldo cukup untuk transaksi kecil");
  }
}

//if else
// let score = 85;
// if (score > 90) {
//   console.log("Nilai A");
// } else if (score > 75) {
//   console.log("Nilai B");
// } else {
//   console.log("Nilai C");
// }

//switch case
let userRole = "admin";
let isLoggedIn = true;

switch (userRole) {
  case "admin":
    if (isLoggedIn) {
    //   console.log( "Selamat datang, Admin! Anda memiliki akses seluruh agus shop");
    } else {
    //   console.log("Silahkan login dulu untuk mengakses admin dashboard");
    }
    break;
  case "user":
    if (isLoggedIn) {
    //   console.log("Selamat datang, selamat berbelanja di Agus Shop");
    } else {
    //   console.log("Silahkan login dulu untuk mengakses Agus Shop");
    }
    break;
  default:
    console.log("Role tidak valid");
}

//gerbang logika
// && lebih prioritas dibanding ||
let statementOne = 10 >= 11;
let statementTwo = 4 < 30;

//1. false
//2. true
//3. false
//4. true

// ternary operator statement
let age = 18;
let canDrive =
  age >= 18 ? "Anda sudah bisa membuat SIM" : "Anda belum bisa membuat SIM";

//kalau di translate menjadi if else biasa

if (age >= 18) {
//   console.log("Anda sudah bisa membuat SIM");
} else {
//   console.log("Anda belum bisa membuat SIM");
}

// console.log(canDrive)

// USE CASE : Undian berhadiah
// kita punya 5 jenis kategori hadiah : smarthphone, laptop, smartwatch, voucher belanja, headset

let undian = Math.floor(Math.random() * 10) + 1;

let hadiah;

switch (undian) {
  case 1:
    hadiah: "smarthphone";
    break;
  case 2:
    hadiah: "laptop";
    break;
  case 3:
    hadiah: "smartwatch";
    break;
  case 4:
    hadiah: "voucher belanja";
    break;
  case 5:
    hadiah: "headset";
    break;
  default:
    hadiah: null;
}
// console.log(undian)

//looping statement

for (let i = 0; i <= 2; i++){
    // console.log("Hello World")
}

//menampilkan isi array menggunakan looping
let fruits = ['apple', 'banana', 'orange']
for ( let i = 0; i < fruits.length; i++){
    // console.log(fruits[i])
}

// menampilkan angka genap dari 1 hingga 10
for( let i = 1; i < 11 ; i++){
    if(i % 2 == 0){
        // console.log(i)
    }
}

//membuat pohon natal
let rows = 6
for (let i = 1; i <= rows; i++){
    let stars = ""
    let final = ""
    for (let j = 1; j <= i; j++){
        stars += "*"
        final 
    }
    // console.log(stars)
}

// case 2 : menghitung lemparan koin
let coin; // menyimpan hasil lemparan koin
let outcomes = ["Kepala", "Buntut"]; // kemungkinan hasil yang ditemukan
let attempts = 0; // menentukan sudah berapa kali melempar
let wasFind = false

// do {
//   numbers = Math.random() * 10;
//   numbers = Math.floor(numbers)
//   console.log(numbers)
//   if (numbers < 5) {
//     side = outcomes[0];
//     wasFind = false;
//   } else {
//     side = outcomes[1];
//     wasFind = true
//   }
//   attempts++;
//   console.log("percobaan ke -", attempts, "menampilkan :", side);
// } while (wasFind);
// console.log("sisi kepala sudah muncul setelah", attempts, " kali percobaan");


//cara efektif
do {
  coin = outcomes[Math.floor(Math.random() * outcomes.length)]
  console.log(outcomes.length)
  attempts++
  console.log(`percobaan ke ${attempts} : menambilkan koin ${coin}`)
} while(coin !== "Kepala")

console.log(`Membutuhkan ${attempts} kali percobaan`)


