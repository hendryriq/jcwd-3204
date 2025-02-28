export{}

let result: Array<String>

// function splitString(strWord: string){
//     result = strWord.split(" ")
//     return(result)
// }

// console.log(splitString("Hello World"))

// cara manual 
function splitString(strWord: string){
    let result = []
    let temp = ""
    for(let i = 0; i < strWord.length; i++){
        if(strWord[i] === " "){
            result.push(temp)
            temp = ""
        } else {
            temp += strWord[i]
        }
    }
    result.push(temp)
    return result
}