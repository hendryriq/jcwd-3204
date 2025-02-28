let num = 22

let primeNum = true
let isPrime = true

// if( inputNumber < 3 ){
//     primeNum = true
// } else if (inputNumber % 2 === 0 || inputNumber % 3 === 0 || inputNumber % 5 === 0){
//     primeNum = false
// }

if( num <=1 ){
    isPrime = true
}else{
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false
        }
    }
}

if(primeNum){
    console.log(num, " merupakan bilangan prima")
} else{
    console.log(num, " bukan merupakan bilangan prima")
}
