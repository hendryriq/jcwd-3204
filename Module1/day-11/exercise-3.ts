function anagram(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
        return false;
    }

    const str1Arr = str1.split('').sort();
    const str2Arr = str2.split('').sort();
    console.log(str1Arr)
    console.log(str2Arr)

    for (let i = 0; i < str1Arr.length; i++) {
        if (str1Arr[i] !== str2Arr[i]) {
            return false;
        }
    }
    return true;
}

console.log(anagram('romand', 'dormna'));