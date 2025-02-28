export{}
let nArray: Array<string>

function handGame(input: string) {
    let opponent = randomPick()
    let result = getResult(input, opponent)
    console.log(opponent)

    return result
}

function randomPick(){
    let i = Math.floor(Math.random() * 3)
    nArray = ["Scissor", "Paper", "Rock"]
    let output = nArray[i]

    return output
}

function getResult(opponent: string, input: string): string {
    if (opponent == input) return "Draw"
    const winConditions: Record<string, string> = {
        "Scissor": "Paper",
        "Paper": "Rock",
        "Rock": "Scissor"
    };

    return winConditions[opponent] === input ? "Win" : "Lose";
}

console.log(handGame("Paper"))