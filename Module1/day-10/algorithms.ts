// Big 0 notation
// Time complexity -> mengukur seberapa cepat sebuah algoritma berjalan
// Space complexity -> mengukur seberapa besar memory yang digunakan oleh sebuah algoritma

// O(1) -> constant time(Waktu Constanta)
// -> ini berati waktu eksekusi tidak berubah walau inputan bertambah

function getFirst(arr: number[]): number {
    return arr[0]
}

// console.log('getFirstElement')
// console.log(getFirst([10, 20, 30, 40, 50, 60, 70, 80, 90]))
// console.timeEnd('getFirstElement')

// O(n) -> linear time(Waktu Linear)
// -> ini berarti waktu eksekusi sebanding dengan inputan

// function findElement(source: number[], target: number): string {
//     for (let i = 0; i < source.length; i++) {
//         if (source[i] === target) {
//             return "Found target"
//         }
//     }
//     return "Not found"
// }

// console.log('findElement')
// console.log(findElement([10, 20, 30, 40, 50, 60, 70, 80, 90], 50))
// console.log(findElement(Array.from({length: 20},() => Math.floor(Math.random() * 100)), 70))
// console.timeEnd('findElement')

// case 1-> menentukan total harga barang belanjaan
interface Grocery {
    name: string
    price: number
}

const grocery = [
    {name: "Beras", price: 10000},
    {name: "Gula", price: 15000},
    {name: "Telur", price: 20000},
    {name: "Minyak", price: 25000},
]

function calculateTotalGrocery(grocery: Grocery[]): number {
    let total = 0
    for (let i = 0; i < grocery.length; i++) {
        total += grocery[i].price
    }
    return total
}

// console.log(calculateTotalGrocery(grocery))
// console.log(grocery[0].price) // O(1) karena langsung mengakses index ke 0
// console.log(calculateTotalGrocery(grocery)) // O(n) karena harus mengakses semua elemen

// Brute force
// -> mencoba semua kemungkinan yang ada

// case 1: mengetahui orang dengan tinggi badan yang sama
interface Friends {
    name: string
    height: number
}

function findingMatchHeights(people: Friends[]){
    for (let i = 0; i < people.length; i++) {
        for (let j = i + 1; j < people.length; j++) {
            if (people[i].height === people[j].height) {
                console.log(`${people[i].name} and ${people[j].name} mempunyai tinggi yang sama`)
            }
        }
    }
}

const friend = [
    { name: "Alice", height: 165 },
    { name: "Bob", height: 180 },
    { name: "Charlie", height: 165 },
    { name: "David", height: 170 },
]

// findingMatchHeights(friend)

// solving check duplicate with extra memory
function checkDuplicate(arr: number[]): boolean {
    let uniqueData = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (uniqueData.has(arr[i])) {
            return true
        }
        uniqueData.add(arr[i])
    }
    return false
}

// solving check duplicate without extra memory
function checkDulicate(arr: number[]){
    arr.sort()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            return true
        }
    }
    return false
}

const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Binary search
// -> mencari data di tengah data yang sudah diurutkan

function binarySearchPrices(prices: number[], target: number){
    let left = 0
    let right = prices.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (prices[middle] === target) {
            return middle
        } else if (prices[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return false
}

const werehousePrices = [2000, 3000, 4000, 5000, 6000, 7000, 8000]
// console.log(binarySearchPrices(werehousePrices, 7000)) // O(log n) karena membagi data menjadi 2 setiap iterasi

// bubble sort
// -> mengurutkan data dengan cara membandingkan data dengan data lainnya

function bubbleSort(arr: number[]){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

const  numbers = [5, 3, 8, 4, 2, 1, 9, 7, 6]
console.log(bubbleSort(numbers)) // O(n^2) karena nested loop

