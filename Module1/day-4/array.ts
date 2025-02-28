let arr: Array<String> = ["A", "B", "C", "D", "E"]
let arr2: String[] = ["A", "B", "C", "D", "E"] // cara ke 2


console.log(arr)


const myFunct= (a: string, b: string, ...manyMore: Array<String>) => {
    console.log(a, a)
    console.log(b, b)
    console.log(manyMore, "many More")
}

// mendefinisikan Array
let randomFruits: string[] = ["banana", "apple", "orange", "pineapple", "blueberry"]
// let randomFruits: Array<string> = ["banana", "apple", "orange", "pineapple", "blueberry"]

// let getRandomNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let getRandomNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// method build in

// concat
let motorbike = ["honda", "Yamaha", "kawasaki", "suzuki"]
let moreMotorbike = ["BMW", "Apprilia"]
let combinedMotorbike = motorbike.concat(moreMotorbike) // -> untuk menggabungkan 2 arrray
// console.log("merged motorbike: " , combinedMotorbike)

// splice
let people =["Budi", "Agus", "Tejo", "Tono"]
let addPeople = people.splice(1, 0, "John", "Bob")
people.splice(1, 3, "john", "bob")
// console.log("after spliced: ", )

// reduce 
let scores: number[] = [3, 2, 5, 4]
let total = scores.reduce((a, b) => a * b, 1)

// console.log("after reduced :", total)

// For of
let snacks = ["chitato", "lays", "doritos", "pocky"]
for (let snack of snacks){
    // console.log(snack)
}

// For in
let animal = {
    name: "cat",
    age: 2,
    color: "black"
}
for (let pet in animal){
    // console.log(pet) // -> key
    // console.log(animal[pet as keyof typeof animal]); // -> value
}

// For each
let colors = ["red", "green", "blue", "yellow"]
let eachColor = colors.forEach((value) => value)
colors.forEach((color) => {
    console.log(color);
});




