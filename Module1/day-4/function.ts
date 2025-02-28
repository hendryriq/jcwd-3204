// const greetingDavid = greeting("David");
// console.log(greetingDavid()); // Hello David
// console.log(greeting("Arnold")()); // Hello Arnold

// Currying
// function multiplier(factor: number) {
//     return function (number: number) {
//         return factor * number;
//     };
// }

// const mul3 = multiplier(3);
// const mul5 = mul3(5); // 3 * 5

// console.log(mul5); // 15
// console.log(multiplier(3)(5)); // 15
// // return function dari currying memiliki parameter

// const penjumlahan = (a: number) => (b: number) => a + b;
// console.log(penjumlahan(20)(10)); // 30

// const factor = (number: number) : number =>{

// }

let result: number = 0

function factorial(factor: number){
    result += factor
    factor--

    if (factor > 0){
        factorial(factor)
    }
    return result
}

// console.log(factorial(5))

// FUNCTION
// pakai function biasa
function sum(a: number, b: number): number {
    return a + b;
}

// arrow function
const sum2 = (a: number, b: number): number => {
    return a + b;
}

// a dan b -> sebagai parameter

// console.log(sum(10, 5));
// console.log(sum(10, 5));
// console.log(sum(4, 5));

// Rest parameter
// case 1 -> multiply with rest parameter
function multiply(...numbers: number[]){
    return numbers.reduce((acc, curr) => acc * curr, 1)
}

// console.log(multiply(1, 2, 3, 4, 5, 6))

// case 2 -> concatenate string
function concatenateStrings(separator: string, ...words: string[]){
    return words.join(separator)
}

// console.log(concatenateStrings("-", "Hello", "World", "Typescript", "Is", "Funny"))

// Nested function
function outerFunc(name: string){
    function innerFunc(greeting: string){
        return greeting + "," + name
    }

    return innerFunc("Hello")
}

// console.log(outerFunc("Budi"))

// case 2 -> count average
function totalAverage(...arr: number[]){
    let result = arr.reduce((acc, curr) => acc + curr, 0)
    function average(length: number){
        return result / length
    }
    return average(arr.length)
}

console.log(totalAverage(1, 2, 3, 4, 5))