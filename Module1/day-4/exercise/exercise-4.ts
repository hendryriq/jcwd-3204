export{}



function removeOddNumber (array: Array<any>){
    let newArray: Array<Number> = []
    for (let i = 1; i <= array.length; i++){
        if (array[i] % 2 !== 0){
            newArray.push(i)
        }
    }
    return(newArray)
}

console.log(removeOddNumber([1,2,3,4,5,6,7,8,9,10]))