export{}

// soal 1 -------------------------------------------------------------------------------------------------------------
class Book {
    protected title: string;
    protected author: string;

    constructor(title: string, author: string){
        this.title = title;
        this.author = author;
    }

    getDetails(): string {
        return `${this.title} oleh ${this.author}`
    }
}

class FictionBook extends Book {
    private genre: string;
    constructor(title: string, author: string, genre: string){
        super(title, author)
        this.genre = genre;
    }

    getDetails(): string {
        return `${this.title} oleh ${this.author} - Genre: ${this.genre}`
    }
}

class NonFictionBook extends Book {
    private category: string;
    constructor(title: string, author: string, category: string){
        super(title, author)
        this.category = category
    }

    getDetails(): string{
        return `${this.title} oleh ${this.author} - Kategori: ${this.category}`
    }
}

const fictionBook = new FictionBook("Harry Potter", "J.K. Rowling", "Fantasi")
const nonFictionBook = new NonFictionBook("Sapiens", "Yuval Noah Harari", "Sejarah");

console.log(fictionBook.getDetails())
console.log(nonFictionBook.getDetails())

// soal 2 -------------------------------------------------------------------------------------------------------------
class Hero {
    protected name: string
    protected hp: number

    constructor(name: string, hp: number){
        this.name = name
        this.hp= hp
    }

    public getName(): string{
        return this.name
    }

    public getHp(): number{
        return this.hp
    }

    getDetails(): string{
        return `Hero ${this.getName()}, HP: ${this.getHp()}`
    }
}

class Mage extends Hero{
    private mana: number

    constructor(name: string, hp: number, mana: number){
        super(name, hp)
        this.mana = mana
    }
    
    public getMana(): number{
        return this.mana
    }

    attack(): string{
        return `${this.getName()} menyerang dengan sihir! Mana tersisa: ${this.getMana()}`
    }
}

class Marksman extends Hero{
    private damage: number

    constructor(name: string, hp: number, damage: number){
        super(name, hp)
        this.damage = damage
    }

    attack(): string{
        return `${this.name} menembak musuh! Damage tambahan: ${this.damage}`
    }
}

const mage = new Mage("Eudora", 2000, 90)
const marksman = new Marksman("Miya", 1800, 50)

console.log("\n")
console.log(mage.getDetails())
console.log(mage.attack())
console.log(marksman.getDetails())
console.log(marksman.attack())

// soal 3 ---------------------------------------------------------------------------------------------------------
class Products {
    private name: string;
    private price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
    public getName(): string{
        return this.name;
    }

    public getPrice(): number{
        return this.price;
    }
}

class FoodProducts extends Products {
    private expiredDate: string;

    constructor(name: string, price: number, expiredDate: string){
        super(name, price);
        this.expiredDate = expiredDate;
    }

    public getExpiredDate(): string{
        return this.expiredDate;
    }

    public getDetails(): string{
        return `Produk: ${this.getName()}, Rp. ${this.getPrice()}, Expired Date: ${this.getExpiredDate()}`
    }
}

class ElectronicProducts extends Products {
    private warranty: number;

    constructor(name: string, price: number, warranty: number){
        super(name, price);
        this.warranty = warranty;
    }

    public getWarranty(): number{
        return this.warranty;
    }

    public getDetails(): string{
        return `Produk: ${this.getName()}, Rp. ${this.getPrice()}, Garansi: ${this.getWarranty()} bulan`
    }
}

const foodProduct = new FoodProducts("Roti", 15000, "2025-01-01")
const electronicProduct = new ElectronicProducts("Laptop", 15000000, 24)

console.log("\n")
console.log(foodProduct.getDetails())
console.log(electronicProduct.getDetails())
