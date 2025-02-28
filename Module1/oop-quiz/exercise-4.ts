class Person {
    name: string = '';
    isVIP: boolean = false;
}

class TicketQueue{
    private queue: Person[] = []

    addPerson(name: string): void{
        const person: Person = {
            name: name,
            isVIP: false
        }
        this.queue.push(person)
    }

    updateVIPStatus(): void{
        for (let i = 0; i < this.queue.length; i++) {
            this.queue[i].isVIP = (i + 1) % 3 === 0
        }
    }

    dequeue(): void{
        if(this.queue.length === 0){
            console.log('Queue is empty')
        }
        for (let i = 0; i < this.queue.length; i++) {
            if(!this.queue[i].isVIP){
                // console.log(`${this.queue[i].name} is served`)
                this.queue.splice(i, 1)
                this.updateVIPStatus()
                return
            }
        }
        console.log("Only VIPs left, no more dequeue")
    }

    showQueue(): void{
        if(this.queue.length === 0){
            console.log('Queue is empty');
            return;
        }
        console.log('Current Queue: ');
        this.queue.forEach((person) => {
            console.log(person.name + ", status vip: " + person.isVIP);
        });
    }
    

    listNonVIP(): Person[] {
        return this.queue.filter((person) => !person.isVIP);
    }
}

const ticketQueue = new TicketQueue();
console.log('Menambahkan orang ke dalam antrian : ');
ticketQueue.addPerson('user 1');
ticketQueue.addPerson('user 2');
ticketQueue.addPerson('user 3');
ticketQueue.addPerson('user 4');
ticketQueue.addPerson('user 5');
ticketQueue.addPerson('user 6');
ticketQueue.addPerson('user 7');
ticketQueue.addPerson('user 8');
ticketQueue.addPerson('user 9');

while(ticketQueue.listNonVIP().length > 0){
    ticketQueue.dequeue();
    ticketQueue.showQueue();
}

console.log('Antrian selesai')
ticketQueue.showQueue()



