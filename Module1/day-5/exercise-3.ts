//cara 1
// function secondSmallest(nArray: Array<Number>){
//     let length: number = nArray.length

//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - i; j++) {
//             if (nArray[j] > nArray[j + 1]) {
//                 let temp = nArray[j];
//                 nArray[j] = nArray[j + 1];
//                 nArray[j + 1] = temp;
//             }
//         }
//     }
//     return nArray
// }

//cara 2
export{}

function secondSmallest(nArray: Array<number>){
    nArray.sort((a, b) => a - b);
    return nArray[1]
}

console.log(secondSmallest([5, 3, 1, 7, 2, 6]))