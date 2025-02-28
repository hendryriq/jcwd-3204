// Class -> untuk membuat template sebuah objek

// contoh 1 : mempresentasikan buku di perpustakaan

class Book{
    title: string = "";
    author: string = "";
    pages: number = 0;

    read() {
        console.log("Reading ", this.title, " by ", this.author);
    }
}

let myBook = new Book();
myBook.title = "The Great Gatsby";
myBook.author = "F. Scott Fitzgerald";
myBook.pages = 180;
// myBook.read();

// contoh 2 : mempresentasikan lampu
class Lamp{
    isOn: boolean = false;

    turnOn(): void{
        this.isOn = true;
        console.log("Lamp is on");
    }

    turnOff(): void{
        this.isOn = false;
        console.log("Lamp is off");
    }
}

let myLamp = new Lamp();
// myLamp.turnOn();

// contoh 3 : mempresentasikan kipas angin
class Fan {
    speed: number = 0;
    increaseSpeed(): void{
        this.speed++;
        console.log("Fan speed increased to ", this.speed);
    }
    decreaseSpeed(): void{
        this.speed--;
        console.log("Fan speed decreased to ", this.speed);
    }
}

let myFan = new Fan();
// myFan.increaseSpeed();
// myFan.decreaseSpeed();

// constructor

class Vehicle{
    type: string;
    wheels: number;

    constructor(type: string, wheels: number){
        this.type = type;
        this.wheels = wheels;
    }

    drive(): void{
        console.log("Driving a ", this.type, " with ", this.wheels, " wheels");
    }
}

let myCar = new Vehicle("car", 4);
// myCar.drive();

// contoh 2 : mempresentasikan smartphone

class Smartphone{
    brand: string;
    model: string;

    constructor(brand: string, model: string, price: number){
        this.brand = brand;
        this.model = model;
    }

    displayInfo(): void{
        console.log("This is a ", this.brand, " ", this.model);
    }
}

let myPhone = new Smartphone("Samsung", "Galaxy S21", 20000000);
// myPhone.displayInfo();

// Public & private acess

class BankAccount{
    public owner: string; // -> bisa diakses diluar class
    private balance: number; // -> tidak bisa diakses diluar class

    constructor(owner: string, balance: number){
        this.owner = owner;
        this.balance = balance;
    }

    public checkBalance(): void{
        console.log(this.owner, " has a balance of ", this.balance);
    }
}

let account = new BankAccount("John Doe", 1000000);
// account.checkBalance();

// Contoh 2 : akun user dengan password yang diamankan

class UserAccount{
    public username: string;
    private password: string;

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }

    public checkPassword(): string{
        return "Password is protected";
    }
}

let userAccount = new UserAccount("johndoe", "123456");
// console.log(userAccount.checkPassword());

// Getter & Setter
//contoh 1 : mempresentasikan AC
class AirConditioner{
    private degree: number = 24;

    set temperature(value: number){
        if(value < 16 || value > 30){
            console.log("Temperature must be between 16 and 30");
        }else{
            this.degree = value;
            console.log("Temperature set to ", this.degree);
        }
    }

    get temperature(){
        return this.degree;
    }
}

let airConditionar = new AirConditioner();
// console.log('before adjust : ', airConditionar.temperature);
// console.log('degrees')

class Parent {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    doingSomething(): void{}
}

class Child extends Parent{
    constructor(name: string, age: number){
        super(name, age);
    }
}

let child = new Child("John", 5);
child.doingSomething();

