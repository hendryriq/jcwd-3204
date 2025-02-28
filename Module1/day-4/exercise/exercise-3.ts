export{}

let bmi: number
let result: string

function bmiMeter (height: number , weight: number){
    bmi = weight / height ** 2

    if (bmi < 18.5){
        result = "less weight"
    } else if (bmi > 18.5 && bmi < 24.9){
        result = "ideal"
    } else if (bmi > 25 && bmi < 29.9){
        result = "overweight"
    } else if (bmi > 30 && bmi < 39.9){
        result = "very overweight"
    } else {
        result = "obesity"
    }

    return (result)
}

console.log(bmiMeter(1.8,80))

//tinggi input cm ?