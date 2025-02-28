function majorityElement(arr: number[]): number {
    let count = 0
    let candidate = 0

    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i]
        }

        if (candidate === arr[i]) {
            count++
        } else {
            count--
        }
    }

    return candidate

}

console.log(majorityElement([4, 4, 5, 5, 5, 3]))