export{}

let num: any = ""
let output: any = ""

function multiples(input: number){
    for (let i = 1; i <= input; i++){
		if (i % 3 == 0 && i % 5 == 0){
            num = "FizzBuzz"
        } else if (i % 3 == 0){
            num = "Fizz"
        } else if(i % 5 == 0){
            num = "Buzz"
        } else{
            num = i
        }
        if(i == input){
            output += num 
        } else{
            output += num + ", "
        }
    }
    return(output)
}

console.log(multiples(15))