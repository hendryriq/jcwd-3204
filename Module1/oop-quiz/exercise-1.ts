export{}

class Product {
    id: number;
    name: string;
    price: number;
    quantity: number;

    constructor(id: number, name: string, price: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;

        if(quantity < 0 || price < 0){
            throw new Error('Invalid quantity or price');
        }
    }
}

class Electronics extends Product {
    constructor(id: number, name: string, price: number, quantity: number, waranty: number) {
        super(id, name, price, quantity);
    }
}

class Clothing extends Product {
    constructor(id: number, name: string, price: number, quantity: number, size: string, material: string) {
        super(id, name, price, quantity);
    }
}

class Grocery extends Product {
    expirationDate: Date;

    constructor(id: number, name: string, price: number, expirationDate: Date) {
        super(id, name, price, 1);
        this.expirationDate = expirationDate;
    }
}

class Warehouse{
    products: Product[] = [];

    addProduct(product: Product){
        this.products.push(product);
    }

    updateProduct(id: number, quantity: number){
        const product = this.products.find(product => product.id === id);
        if(product){
            product.quantity = quantity;
        }
    }

    removeProduct(id: number){
        this.products = this.products.filter(product => product.id !== id);
    }

    getProducts(id: number){
        return this.products.find(product => product.id === id);
    }

    listProducts(){
        return this.products;
    }

    deleteProduct(id: number){
        this.products = this.products.filter(product => product.id !== id);
    }
}

const warehouse = new Warehouse();
warehouse.addProduct(new Electronics(1, 'Laptop', 1000, 10, 24));
warehouse.addProduct(new Clothing(2, 'T-Shirt', 20, 50, 'M', 'Cotton'));
warehouse.addProduct(new Grocery(3, 'Milk', 100, new Date('2021-01-01')));

console.log(warehouse.getProducts(2));
warehouse.updateProduct(1, 15);
warehouse.removeProduct(3);
console.log('---------------- list products ----------------');
console.log(warehouse.listProducts());

