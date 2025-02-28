// untuk penamaan file ada 3 macam jenis :
// camelCase -> digunakan untuk memberikan nama pada file/variabel
// PascalCase -> digunakan untuk memberikan nama file pada sebuah object Class
// snake_case -> digunakan apabila ada spasi di dalamnya

// 1. String -> karakter atau teks
let username = "John Doe";
let greeting = "Hello World";

// console.log(username)
// console.log(greeting)

// 2. Number
let age = 26; // -> integer
let height = 5.9;
let negativeNumber = -10; // -> negative number

// console.log(typeof age)
// console.log(typeof height)
// console.log(typeof negativeNumber)

// 3. Bigint -> angka yang sangat besar
let bigNumber = 12345678901234567890123456789012345678901234567890
// console.log(bigNumber)

// 4. Boolean -> true atau false
let isVerified = false
let hasDriveLicense = true

// use case : menentukan kelulusan
let isGraduated = false

if(isGraduated){
    // console.log("Belum lulus");
}else{
    // console.log("Sudah lulus")
}

// use case menentukan tipe data tahun
let currentYearNumber = 2025
let currentYearStr = "2025"

if(currentYearNumber == currentYearStr){
    // console.log('equal value')
}

let middlename = null;
// console.log(middlename)

let lastName
// console.log(lastname)

// -- Non Primitive
//objek

let laptop = {
    typeName : "Macbook Air",
    color : "matte black",
    year: 2018,
    resolution: "13-inch",
    memory: {
        storage: "128 GB SSD",
        RAM: "8"
    }
}

// console.log(laptop.memory.storage)

// let fruitGroup = ['apple', 'orange', 'banana', 'kecubung']

// console.log(fruitGroup[0])

let original = "HelloWorld";
// let reversed = original.reverse();

// console.log(reserved)

//operator
let numA = 5, numB = 10;

//postfix
let numC = 5
// console.log(numC++) //penambahan dilakukan setelah nilai dicetak

let nama = prompt("Masukkan nama kamu:");
console.log(nama);