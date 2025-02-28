// Each time you can take either 1 or 2 steps. In how many distinct ways can you climb to the top?
function climbStaircase(input: number){
    let result: number[] = []
    for (let i = 0; i < input; i++){
        if (i == 0){
            result[i] = 1
        } else if (i == 1){
            result[i] = 2
        } else{
            result[i] = result[i - 1] + result[i - 2]
        }
    }
    console.log(result)
    return result[input - 1]
}

// console.log(climbStaircase(4));
// console.log(climbStaircase(5));
// console.log(climbStaircase(6));
console.log(climbStaircase(7));

