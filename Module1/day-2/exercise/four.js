let inputNumber = 6
let factorialNumber = inputNumber
let total = 1

while(factorialNumber > 0){
    total *= factorialNumber
    factorialNumber--
}

console.log("Nilai faktorial dari " + inputNumber + " adalah " + total)