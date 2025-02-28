export{}
//soal nomor 1
function compareData(a: any, b: any){
    if(a === b){
        return true
    } else {
        return false
    }
}

console.log(compareData(2 ,1))

//soal nomor 2
function getObjectIntersection(obj1: Record<string, number>, obj2: Record<string, number>): Record<string, number> {
    const result: Record<string, number> = {};

    for (const key in obj1) {
        if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            result[key] = obj1[key];
        }
    }

    return result;
}

// Contoh penggunaan
const objA = { a: 1, b: 2 };
const objB = { a: 1, c: 3 };

console.log(getObjectIntersection(objA, objB)); // Output: { a: 1 }

// soal nomor 3
type Student = {
    name: string;
    email: string;
};

function mergeArrays(arr1: Student[], arr2: Student[]): Student[] {
    const mergedArray = [...arr1, ...arr2]

    const uniqueData = new Map<string, Student>()

    mergedArray.forEach(student => {
        uniqueData.set(student.email, student)
    })

    return Array.from(uniqueData.values());
}

const array1: Student[] = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" }
];

const array2: Student[] = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" }
];

const result = mergeArrays(array1, array2)
// console.log(result)

// soal no 4
function switchKeysAndValues (data1: any, data2: any){

}

const input = [{ name: 'David', age: 20}]
// const output = switchKeysAndValues

// soal no 5
let factorialResult: number = 0
function factorial(num: number){
    let next = num - 1 
    factorialResult *= next
    console.log(next)
    console.log(result)
    // if (next > 0){
    //     factorial(next)
    // }
    return result
}

factorial(5)
// console.log(factorial(5))