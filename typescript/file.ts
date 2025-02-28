function countdown(num: number){
    console.log(num);
    let nextNumber = num - 1

    if(nextNumber > 0){
        countdown(nextNumber)
    }
}

countdown(5)