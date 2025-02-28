// return sum of duplicate values

function sumDuplicate(nArray: Array<number>){
    return nArray.filter((item, index) => nArray.indexOf(item) !== index);
}

console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]))