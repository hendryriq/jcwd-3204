export{}

function calculateNumber(arr1: Array<number> , arr2: Array<number> ){
    let length = arr1.length
    let resultArr = []

    for (let i: number = 0; i < length; i++){
        resultArr[i] = arr1[i] + arr2[i]
    }
    
    return resultArr
}

console.log(calculateNumber([1, 2, 3], [3, 2, 1]))