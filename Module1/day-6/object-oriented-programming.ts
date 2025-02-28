// interface concept

//case 1 : definisikan objek tabung
interface Clynder{
    type : string,
    diameter : number,
    color: string,
    height: number,
    outline: string
}

let clynder : Clynder = {
    type: 'clynder',
    diameter: 12,
    color: "brown",
    height: 20,
    outline: "black"
}

//case 2 : definisikan objek user

interface User{
    name: string,
    email: string,
    age: number
}

let user : User = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    age: 27
}

// Types Concept
// case 1 : definisikan variabel bernama username

type Username = string;
let username : Username = "john doe"

// case 2 : definisikan objek bernama car
type Car = {
    brand: string,
    model: string,
    price: number
}

let car: Car = {
    brand: "BMW",
    model: "X1",
    price: 450000000
}

// property & method

interface Hero {
    name: string,
    role: string,
    health: number,
    attackPower: number,
    attack: (target: Hero) => void,
    ultimate: (target: Hero) => void
}

let alucard: Hero = {
    name: "Alucard",
    role: "Fighter",
    health: 3000,
    attackPower: 250,
    attack(target){
        // console.log(this.name, " menyerang ", target.name, " dengan power ", this.attackPower)
    },
    ultimate(target){
        let damage = this.attackPower * 2
        // console.log(this.name, " menggunakan ultimate dan memberikan ", damage, " damage ke ", target.name)
        target.health -= damage;
    }
}

let layla: Hero = {
    name: "Layla",
    role: "Marksman",
    health: 2500,
    attackPower: 300,
    attack(target){
        // console.log(this.name, " menyerang ", target.name, " dengan power ", this.attackPower)
    },
    ultimate(target){
        let damage = this.attackPower * 2
        // console.log(this.name, " menggunakan ultimate dan memberikan ", damage, " damage ke ", target.name)
        target.health -= damage;
    }
}

// simulasi serangan
alucard.attack(layla)
layla.ultimate(alucard)

// console.log(alucard)
// console.log(layla)


type DetailInfo = {
    address: string,
    hobbies: string[]
}

interface Employee {
    name: string,
    age: number,
    job?: string,
    detail: DetailInfo
}

let employee: Employee = {
    name: "John Doe",
    age: 27,
    detail: {
        address: "jl sudirman",
        hobbies: ["catur", "sepeda"]

    }
}

employee.detail.address = "jl sudirman"
employee.detail.hobbies = ["programming", "learning"]

// console.log(employee)

// Mendefenisikan data student

type Modules = {
    exam: number,
    code_challenge: number
}

interface Student {
    name: string,
    program: string,
    info: {
        isRemedial: boolean,
        scores: Modules[],
    }
}

let student: Student = {
    name: "bob",
    program: "JCWD",
    info: {
        isRemedial: false,
        scores:[
            {
                exam: 85,
                code_challenge: 80
            },
            {
                exam: 90,
                code_challenge: 85
            },
            {
                exam: 70,
                code_challenge: 65
            }
        ]
    }
}

// console.log('Total score of module 2: ', student.info.scores[1].code_challenge)

// mengambil nilai rata-rata dari code challenge, kalau hasil rata-ratanya dibawah 80 berati harus remedial

function checkScore(score: Array<any>){
    let length = student.info.scores.length
    let total: any
    total = 0

    for(let i: number = 0; i < length; i++){
        total +=  student.info.scores[i].code_challenge
    }
    
    let average = total / length
    return average
}

let ccAverage = checkScore(student.info.scores)

function remedialStatus(average: number){
    if (average < 80){
        student.info.isRemedial = true
    }
}

remedialStatus(ccAverage)
// console.log(student)
// console.log(ccAverage)

// console.log(checkScore(student.info.scores))

// Accressing key
// objek bisa diambil key dan propertinya

let vehicle: Car = {
    brand: "Tesla",
    model: "Model S",
    price: 2000000000
}

// cara ke 2
// for(let key in vehicle){
//     console.log(key)
// }

let fruits = ["apple", "mango", "banana", "strawberry"]
// console.log("Sebelum menambahkan durian: ", fruits)
// fruits.push[0]("durian")
// console.log("Setelah menambahkan durian: ", fruits)

// destructure

let randomNumbers = [10, 20,30]
let [first, second,third] = randomNumbers


// clone object
let smarthphone = {
    type: "samsung",
    operatingSystem: "android"
}

let clonedSmarthphone = {...smarthphone}

// console.log(clonedSmarthphone)

// object build in method
let source = {a: 1, b: 2, c: 3, d: 4}
let target = {a: 3, b: 4, d: 5, f: 1}
let returnedTarget = Object.assign(target, source)
console.log("result of returnet target: ", returnedTarget)

// Object.freeze

let laptop = {
    type: "macbook pro",
    year: 2019
}

// Object.freeze(laptop)
let keyOfLaptop = Object.entries(laptop)
// laptop.year = 2020
console.log("result after freeze: ", keyOfLaptop)


