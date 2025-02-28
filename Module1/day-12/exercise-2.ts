function romanNumber(input: string): number {
    var roman: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var result = 0;

    for (var i = 0; i < input.length; i++) {
        var roman: { [key: string]: number } = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        };
        if (roman[input[i]] < roman[input[i + 1]]) {
            result += roman[input[i + 1]] - roman[input[i]];
            i++;
        } else {
            result += roman[input[i]];
        }
    }
    return result;

}

console.log(romanNumber("XXIV"));