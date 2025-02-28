export{}
function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // Perbarui harga beli terendah
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice); // Hitung profit maksimum
        }
    }

    return maxProfit;
}

// 🔹 Contoh Penggunaan
console.log(maxProfit([7,1,5,3,6,4])); // Output: 5
console.log(maxProfit([7,6,4,3,1])); // Output: 0
console.log(maxProfit([2,4,1])); // Output: 2
