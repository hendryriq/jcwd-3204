export{}

let length
let total = 0
let mean
let max
let min
let output = ""

// function numberMath(arrayInput: Array<number>){
//     length = arrayInput.length
//     max = arrayInput[0]
//     let min = max

//     for (let i = 0; i < length; i++){
//         //mencari nilai paling tinggi
//         if(arrayInput[i] > max){
//             max = arrayInput[i]
//         }
//         //mencari nilai paling rendah
//         if(arrayInput[i] < min){
//             min = arrayInput[i]
//         }

//         total += arrayInput[i]
//     }
//     //mencari nilai rata2
//     mean = (total/length).toFixed(4)

//     output = `Lowest = ${min}, Highest = ${max} ,Average = ${mean}`
//     return(output)

// }

function sortMath(nArray: Array<number>){
    length = nArray.length
    nArray.sort((a, b) => a - b);
    max = nArray[length - 1]
    min = nArray[0]

    for (let i = 0; i < length; i++) {
        total += nArray[i]
    }
    mean = (total / length).toFixed(4)
    output = `Lowest = ${min}, Highest = ${max} ,Average = ${mean}`
    return (output)
}

console.log(sortMath([12, 5, 23, 18, 4, 45, 32]))
// console.log(numberMath([12, 5, 23, 18, 4, 45, 32]))
