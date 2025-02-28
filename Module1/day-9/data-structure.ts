// Stack 
// prinsip Last-in First-Out (LIFO)
// class Stack{
//     private items: string[] = []

//     pushElement(item: string): void{
//         this.items.push(item)
//     }
//     popElement(){
//         return this.items.pop()
//     }
//     peekElement(){
//         return this.items[this.items.length - 1]
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     sizeElement(){
//         return this.items.length
//     }
// }

// const browserStack = new Stack()
// browserStack.pushElement('deepseek.com')
// browserStack.pushElement('purwadika.com')
// browserStack.pushElement('openai.com')

// console.log('ukuran stack saat ini : ', browserStack.sizeElement())
// console.log('elemen terakhir di stack saat ini : ', browserStack.peekElement())

// console.log('--- melakukan back button ---')
// browserStack.popElement()

// console.log('ukuran stack setelah ')

// contoh 2

class UndoStack {
    private actions: string[] = []
    private redoArray: string[] = []

    addAction(action: string): void {
        this.actions.push(action)
    }
    undo(): string | undefined {
        this.redoArray.push(this.peekOfCharacter())
        return this.actions.pop()
    }
    checkLengthOfCharacter(){
        return this.actions.length
    }
    peekOfCharacter(){
        return this.actions[this.checkLengthOfCharacter() - 1]
    }
    redo(): void {
        this.actions.push(this.redoArray[this.redoArray.length - 1])
        this.redoArray.pop()
    }

    showAllData(){
        return this.actions
    }
}

const editor = new UndoStack()
editor.addAction("Mengetik: Hello")
editor.addAction("Mengetik: World")
editor.undo()
// console.log('sesudah undo')
// console.log(editor.showAllData())
// console.log(editor.checkLengthOfCharacter())
// console.log(editor.peekOfCharacter())
editor.redo()
// console.log('sesudah redo')
// console.log(editor.showAllData())
// console.log(editor.checkLengthOfCharacter())
// console.log(editor.peekOfCharacter())

// console.log(editor.checkLengthOfCharacter())
// console.log(editor.peekOfCharacter())
// console.log(editor.checkLengthOfCharacter())

// Queue
// -> menganut prinsip First-in, First Out (FIFO)

// contoh 1 : mengantri di mie gacoan
class AntrianGacoan {
    private queue: string[] = []

    enqueue(person: string){
        this.queue.push(person)
    }

    dequeue(){
        return this.queue.shift()
    }

    peekFront(){
        return this.queue[0]
    }
}

const antrianGacoan = new AntrianGacoan()
antrianGacoan.enqueue("person 1")
antrianGacoan.enqueue("person 2")
antrianGacoan.enqueue("person 3")
antrianGacoan.enqueue("person 4")
antrianGacoan.enqueue("person 5")

// console.log("orang pertama yang dilayani kasir : ", antrianGacoan.peekFront())
// console.log("sedang menunggu pesanan : ", antrianGacoan.dequeue())
// console.log("orang pertama di antrian : ", antrianGacoan.peekFront())
// console.log("sedang menunggu pesanan : ", antrianGacoan.dequeue())

// set
const guestSet = new Set<string>()

guestSet.add("Salma")
guestSet.add("Dewa")
guestSet.add("Aldo")
guestSet.add("Aldo")

// console.log(guestSet)

// contoh 2 : nomor di kursi bioskop

const seatNumbers = new Set<number>()
seatNumbers.add(12)
seatNumbers.add(15)
seatNumbers.add(12)

// console.log('cek kursi bioskop', seatNumbers)
for (let value of seatNumbers){
    // console.log(value)
} //-> cek isi dari set


// Hash table / Map

// Contoh 1: kontak nomor telepon
const phoneBook = new Map<string, string>()

phoneBook.set("Budi", "081234567")
phoneBook.set("Agus", "082222222")

// console.log("data kontak : ", phoneBook)
// console.log("mendapatkan kontak agus: ", phoneBook.get("Agus"))

// contoh 2 : ID card
const idCard = new Map<number, string>()

idCard.set(12345, "Budi")
idCard.set(54321, "test")

// console.log("data id card :", idCard)
// console.log("mendapatkan id card budi: ", idCard.get(12345))

// single linked list

class MainNode{
    value: number
    next : MainNode | null = null

    constructor(value: number){
        this.value = value
    }
}

class SingleLinkedList{
    head : MainNode | null = null

    insert(value: number){
        const newNode = new MainNode(value)
        newNode.next = this.head
        this.head = newNode
    }
}

const studentList = new SingleLinkedList()
studentList.insert(101)
studentList.insert(102)
studentList.insert(103)
studentList.insert(104)
studentList.insert(105)

// console.log("data student : ", studentList)

// Double linked List
// class DoubleNode{
//     value: string
//     next: DoubleNode | null = null
//     prev: DoubleNode | null = null

//     constructor(value: string){
//         this.value = value
//     }
// }

// class DoubleLinkedList{
//     head: DoubleNode | null = null
//     tail: DoubleNode | null = null

//     insert(value: string){
//         const newNode = new DoubleNode(value)
//         if(!this.head){
//             this.head = this.tail = newNode
//         }else{
//             if(this.tail){
//                 this.tail.next = newNode
//                 newNode.prev = this.tail
//                 this.tail = newNode
//             }
//         }
//     }

//     displayForward(){
//         let current = this.head
//         while(current){
//             console.log(current.value)
//             current = current.next
//         }
//         if(current === null){
//             return "Tidak ada lagu lagi"
//         }
//     }

//     displayBackward(){
//         let current = this.tail
//         while(current){
//             console.log(current.value)
//             current = current.prev
//         }
//         if(current === null){
//             return "Tidak ada lagu lagi"
//         }
//     }
// }

// const spotify = new DoubleLinkedList()
// spotify.insert("garam")
// spotify.insert("harimau")
// spotify.insert("dor dor")
// console.log(spotify)
// console.log("\n")
// console.log(spotify.displayForward())
// console.log("\n")
// console.log(spotify.displayBackward())

// Kelas untuk Node dalam Circular Doubly Linked List
// class DoubleNode {
//     value: string;
//     next: DoubleNode | null = null;
//     prev: DoubleNode | null = null;

//     constructor(value: string) {
//         this.value = value;
//     }
// }

// Kelas untuk Circular Doubly Linked List
// Kelas untuk Node dalam Circular Doubly Linked List

// Kelas untuk Circular Double Linked List
// class CircularDoubleLinkedList {
//     head: DoubleNode | null = null;
//     tail: DoubleNode | null = null;

//     // Menambahkan node ke linked list
//     insert(value: string): void {
//         const newNode = new DoubleNode(value);

//         if (!this.head) {
//             // Jika list kosong, head dan tail sama dengan node baru
//             this.head = this.tail = newNode;
//             this.head.next = this.head; // Circular: next menunjuk ke diri sendiri
//             this.head.prev = this.head; // Circular: prev menunjuk ke diri sendiri
//         } else {
//             if (this.tail) {
//                 this.tail.next = newNode;
//                 newNode.prev = this.tail;
//                 newNode.next = this.head; // Circular: newNode.next menunjuk ke head
//                 this.head.prev = newNode; // Circular: head.prev menunjuk ke newNode
//                 this.tail = newNode; // Update tail ke node baru
//             }
//         }
//     }

//     // Menampilkan isi Linked List secara maju (forward)
//     displayForward(): void {
//         if (!this.head) {
//             console.log("Linked List kosong");
//             return;
//         }

//         let current = this.head;
//         do {
//             console.log(current.value);
//             current = current.next!;
//         } while (current !== this.head); // Berhenti saat kembali ke head
//     }
// }

// Contoh Penggunaan
// const playlist = new CircularDoubleLinkedList();
// playlist.insert("Lagu 1");
// playlist.insert("Lagu 2");
// playlist.insert("Lagu 3");
// playlist.insert("Lagu 4");

// Menampilkan playlist maju dan mundur
// console.log("Playlist Forward:");
// playlist.displayForward();

// Circular double linked List

class DoubleCircularNode{
    value: string
    id : string
    next: DoubleCircularNode | null = null
    prev: DoubleCircularNode | null = null

    constructor(value: string, id: string){
        this.value = value
        this.id = id
    }
}
class CircularDoubleLinkedList {
    head: DoubleCircularNode | null = null;
    tail: DoubleCircularNode | null = null;

    insert(id: string, value: string){
        const newNode = new DoubleCircularNode(id, value)
        if(!this.head){
            this.head = this.tail = newNode
            this.head.next = this.head
            this.head.prev = this.head
        } else{
        let last = this.head.prev!
        last.next = newNode
        newNode.prev = last
        newNode.next = this.head
        this.head.prev = newNode
        }
    }
}

let warehouse = new CircularDoubleLinkedList()
warehouse.insert("001", "Electronic")
warehouse.insert("002", "Furniture")
warehouse.insert("003", "Food")
// warehouse.insert("004", "Clothing")
// warehouse.insert("005", "Toys")
// warehouse.insert("006", "Stationery")

console.log(warehouse)