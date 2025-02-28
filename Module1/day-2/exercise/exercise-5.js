// let input = 15
// let number = 1
// let fArray = [0]
// // let fNumber = 0
// // let sNumber = 0

// // console.log(fArray)

// for (let i = 0; i < input; i++){
//     newNumber = fArray[i]
//     if(i !== 0){
//         newNumber = fArray[i-1] + fArray[i]
//     } else{
//         newNumber = 1
//     }
//     // console.log(newNumber)
//     fArray.push(newNumber)
//     console.log(fArray[i+1])
//     // console.log(i)
// }
// console.log(fArray[i])
// console.log(i)

//0, 1, 1, 2, 3, 5, 6

let N = 15
let a = 1
let b = 1
let next

for (let i = 1; i <= N; i++){
    if(i == 1){
        next = a
    }else if(i == 2){
        next = b
    }else{
        a = b
        b = next
    }
    console.log(next)
}
