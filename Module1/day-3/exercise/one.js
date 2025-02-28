"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputText = "The QuiCk BrOwN Fox";
var separate = inputText.split('');
var length = inputText.length;
var i = 0;
var text = '';
var result = [];
for (i = 0; i < length; i++) {
    text = separate[i];
    if (text === text.toLowerCase()) {
        result[i] = text.toUpperCase();
    }
    else {
        result[i] = text.toLowerCase();
    }
}
var finalResult = result.join('');
console.log(finalResult);
