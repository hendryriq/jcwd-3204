// Soal nomor 2
class Player {
    name: string;
    health: number;
    power: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100; 
        this.power = 10; 
    }

    public damage(power: number): void {
        this.health -= power;
        if (this.health < 0) this.health = 0; 
    }

    public useItem(item: { health: number, power: number }): void {
        this.health += item.health;
        this.power += item.power;
    }

    public showStatus(): void {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }

    public isAlive(): boolean {
        return this.health > 0;
    }
}

class ShootingGame {
    player1: Player;
    player2: Player;

    constructor(player1: Player, player2: Player) {
        this.player1 = player1;
        this.player2 = player2;
    }

    private getRandomItem(): { health: number, power: number } {
        const items = [
            { health: 10, power: 0 },
            { health: 0, power: 10 },
            { health: 0, power: 0 } 
        ];
        return items[Math.floor(Math.random() * items.length)];
    }

    public start(): void {
        console.log("🎯 Shooting Game Started!");
        console.log("=====================================");

        let round = 1;
        while (this.player1.isAlive() && this.player2.isAlive()) {
            console.log(`\n🔄 Round ${round}`);
            console.log("-------------------------------------");

            this.player1.showStatus();
            this.player2.showStatus();

            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();
            this.player1.useItem(item1);
            this.player2.useItem(item2);

            console.log(`${this.player1.name} mendapatkan item (Health: +${item1.health}, Power: +${item1.power})`);
            console.log(`${this.player2.name} mendapatkan item (Health: +${item2.health}, Power: +${item2.power})`);

            this.player2.damage(this.player1.power);
            this.player1.damage(this.player2.power);

            console.log("\n🎯 Status setelah tembakan:");
            this.player1.showStatus();
            this.player2.showStatus();

            round++;
        }

        console.log("\n🎉 Permainan Selesai!");
        console.log("=====================================");

        if (this.player1.isAlive()) {
            console.log(`🏆 Pemenang: ${this.player1.name}`);
        } else if (this.player2.isAlive()) {
            console.log(`🏆 Pemenang: ${this.player2.name}`);
        } else {
            console.log("🤝 Permainan berakhir dengan seri!");
        }
    }
}

// // Contoh penggunaan
// const player1 = new Player("Alice");
// const player2 = new Player("Bob");

// const game = new ShootingGame(player1, player2);
// game.start();

// class Player{
//     private name: string;
//     private health: number;
//     private power: number;

//     constructor(name: string, health: number, power: number){
//         this.name = name;
//         this.health = 100;
//         this.power = 100;
//     }

//     public damage(power: number): void{
//         this.health -= power;
//         if (this.health < 0) this.health = 0;
//     }

//     public useItem(item: {health: number, power: number}){
//         this.health += item.health
//         this.power += item.power
//     }

//     public showStatus(): void{
//         console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`)
//     }

//     public isAlive(): boolean{
//         return this.health > 1
//     }
// }

// class ShootingGame{
//     private player1: string
//     private player2: string

//     constructor(player1: string, player2: string){
//         this.player1 = player1
//         this.player2 = player2
//     }

//     public getRandomItem(){

//     }
// }






