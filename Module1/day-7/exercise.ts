export{}
// soal nomor 1
function areObjectsEqual<T extends object>(obj1: T, obj2: T): boolean {
    // Check if both arguments are objects
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all keys and their values are the same
    for (let key of keys1) {
        if (!keys2.includes(key) || obj1[key as keyof T] !== obj2[key as keyof T]) {
            return false;
        }
    }

    return true;
}

// Example usage
console.log(areObjectsEqual({ a: 2 }, { a: 1 }));

// soal nomor 2
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

function mergeStudentArrays(arr1: Student[], arr2: Student[]): Student[] {
    const mergedArray = [...arr1, ...arr2]; // Gabungkan kedua array

    // Gunakan Map untuk menghapus duplikat berdasarkan email
    const uniqueStudents = new Map<string, Student>();
    
    mergedArray.forEach(student => {
        uniqueStudents.set(student.email, student);
    });

    return Array.from(uniqueStudents.values()); // Konversi Map kembali ke array
}

// Contoh penggunaan
const array1: Student[] = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" }
];

const array2: Student[] = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" }
];

const result = mergeStudentArrays(array1, array2);
console.log(result);

// soal nomor 4
function switchKeysAndValues(arr: Record<string, any>[]): Record<string, any>[] {
    return arr.map(obj => {
        const swappedObj: Record<string, any> = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                swappedObj[String(obj[key])] = key; // Menukar key dan value
            }
        }
        return swappedObj;
    });
}

// Contoh penggunaan
const input = [{ name: "David", age: 20 }];
const output = switchKeysAndValues(input);

console.log(output); 
// Output: [{ David: "name", 20: "age" }]

// soal nomor 5
function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive call
}

// Fungsi untuk menampilkan format output dengan proses perhitungan
function factorialWithSteps(n: number): string {
    if (n < 0) return "Factorial is not defined for negative numbers.";

    const result = factorial(n);
    const steps = Array.from({ length: n }, (_, i) => n - i).join(" × "); // Membuat format "5 × 4 × 3 × 2 × 1"
    
    return `${n}! = ${steps} = ${result}`;
}

// Contoh penggunaan
console.log(factorialWithSteps(5));
// Output: "5! = 5 × 4 × 3 × 2 × 1 = 120"



