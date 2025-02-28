export{}
let inputValue = "hello"
let pesan : number = 0

if(typeof inputValue == "string"){
    pesan = 1
}else if (typeof inputValue == "number"){
    pesan = 2
}else{
    pesan = 3
}

console.log(pesan)