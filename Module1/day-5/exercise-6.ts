// function sumNumber(randomArray: Array<any>){
//     const length = randomArray.length
//     let total: number = 0

//     for (let i: number = 0; i < length; i++){
//         if (typeof(randomArray[i]) === "number"){
//             total += randomArray[i]
//         }
//     }

//     return total
// }

function sumNumber(randomArray: any[]): number {
    return randomArray.reduce((total, num) => 
        typeof num === "number" ? total + num : total, 0);
}

console.log(sumNumber(["3", 1, "string", null, false, undefined, 2]))