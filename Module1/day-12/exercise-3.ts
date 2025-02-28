function pascalTriangle(input: number): number[][] {
    let result: number[][] = []
    for (let i = 0; i < input; i++) {
        result[i] = []
        result[i][0] = 1
        for (let j = 1; j < i; j++) {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
        }
        result[i][i] = 1
    }
    return result

}

console.log(pascalTriangle(5))