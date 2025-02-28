function triangle(row: number){
    let count: number = 1
    let output: string = ""
    for (let i :number = 1; i <= row; i++){
        let line: any = ""
        for (let j = 1; j <= i; j++){
            let num: string;
            if (count < 10) {
                num = "0" + count;
            } else {
                num = count.toString();
            }      
            line += num + " "
            console.log(line)
            count++
        }
        output += line + "\n"
    }
    return output
}
console.log(triangle(4));
