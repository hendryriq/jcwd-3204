function excelSheet(input: string):number{
    let aphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = 0
    for (let i = 0; i < input.length; i++) {
        let char = input[i]
        let index = aphabet.indexOf(char) + 1
        console.log(index)
        result = result * 26 + index
    }
    return result
}

console.log(excelSheet("BE"))
// console.log(excelSheet("Z"))
// console.log(excelSheet("AB"))

