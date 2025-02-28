interface Account{
    name: string
    balance: number
}

interface Info{
    name: string
    amount: number
}

class ATM {
    private account: Map<string, number> = new Map();

    createAccount(account: Account): void {
        this.account.set(account.name, account.balance);
    }

    deposit(info: Info): void{
        if(!this.account.has(info.name)){
            console.log('Rekening tidak ditemukan');
            return
        }
        this.account.set(info.name, this.account.get(info.name) || 0 + info.amount);
    }

    withdraw(info: Info): void{
        if(!this.account.has(info.name)){
            console.log('Rekening tidak ditemukan');
            return
        }
        if(this.account.get(info.name) || 0 < info.amount){
            console.log('Saldo tidak cukup');
            return
        }
    }

    getBalance(name: string): void{
        if(!this.account.has(name)){
            console.log('Rekening tidak ditemukan');
            return
        }
        console.log(`Saldo ${name}  : ${this.account.get(name)}`);
    }
}

const atm = new ATM();
atm.createAccount({name: 'Ariq', balance: 1000});
// atm.deposit({name: 'Ariq', amount: 500});
atm.withdraw({name: 'Ariq', amount: 200});

atm.getBalance('Ariq')