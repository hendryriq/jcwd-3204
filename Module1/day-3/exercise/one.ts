export {};

let inputText = "The QuiCk BrOwN Fox";
let separate = inputText.split(''); 
let length: number = inputText.length; 
let i = 0;
let text: string = ''; 
let result: string[] = [];

for (i = 0; i < length; i++) {
    text = separate[i]; 
    if (text === text.toLowerCase()) {
        result[i] = text.toUpperCase();
    } else {
        result[i] = text.toLowerCase();
    }
}

let finalResult = result.join('');
console.log(finalResult);
