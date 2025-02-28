export{}
// Parent class: Vehicle
class Vehicle {
    protected brand: string;
    protected model: string;
    protected year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getDetails(): string {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}

// Subclass 1: Car
class Car extends Vehicle {
    private numberOfDoors: number;

    constructor(brand: string, model: string, year: number, numberOfDoors: number) {
        super(brand, model, year);
        this.numberOfDoors = numberOfDoors;
    }

    getDetails(): string {
        return `${super.getDetails()} - 🚗 Doors: ${this.numberOfDoors}`;
    }
}

// Subclass 2: Motorcycle
class Motorcycle extends Vehicle {
    private type: string;

    constructor(brand: string, model: string, year: number, type: string) {
        super(brand, model, year);
        this.type = type;
    }

    getDetails(): string {
        return `${super.getDetails()} - 🏍️ Type: ${this.type}`;
    }
}

// Contoh penggunaan
const myCar = new Car("Toyota", "Corolla", 2022, 4);
const myMotorcycle = new Motorcycle("Honda", "CBR500R", 2021, "Sport");

console.log(myCar.getDetails());
console.log(myMotorcycle.getDetails());
