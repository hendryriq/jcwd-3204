export{}

let result: string = ""

function concatenating(fruit: any){
    let last = fruit.pop("");
    let result = fruit.join(", ") + ", and " +last

    return result
}

console.log(concatenating(["apple", "banana", "cherry", "date"]))