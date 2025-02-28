export{}
// class Employee{
//     private name: string;
//     private workingHours: number;

//     constructor(name: string,workingHours: number){
//         this.name = name;
//         this.workingHours = workingHours;
//     }

//     getRole(): string{
//         return this.name;
//     }
//     getWorkingHours(): number{
//         return this.workingHours;
//     }
// }

// class FullTimeEmployee extends Employee{
//     private salary: number = 0;

//     constructor(name: string, workingHours: number){
//         super(name, workingHours);
//     }

//     getSalary(): number {
//         console.log(this.getWorkingHours());
//         if (this.getWorkingHours() < 6){
//             this.salary = 100000 * this.getWorkingHours();
//             console.log(this.salary);
//         }else{
//             this.salary = 600000 + ((this.getWorkingHours() - 6) * 75000);
//         }

//         return this.salary;
//     }



//     getDetail(): string{
//         return `Role: ${this.getRole()}, Salary: ${this.getSalary()}, Working Hours: ${this.getWorkingHours()}`
//     }
// }

// class HalfTimeEmployee extends Employee{
//     private salary: number = 0;

//     constructor(name: string, workingHours: number){
//         super(name, workingHours);
//     }

//     getSalary(): number {
//         if (this.getWorkingHours() < 6){
//             this.salary = 50000 * this.getWorkingHours();
//         }else{
//             this.salary = 300000 + ((this.getWorkingHours() - 6) * 30000);
//         }

//         return this.salary;
//     }

//     getDetail(): string{
//         return `Role: ${this.getRole()}, Salary: ${this.getSalary()}, Working Hours: ${this.getWorkingHours()}`
//     }
// }

// const fullTimeEmployee = new FullTimeEmployee("Full Time", 8);
// console.log(fullTimeEmployee.getDetail());
// const halfTimeEmployees = new HalfTimeEmployee("Half Time", 8);
// console.log(halfTimeEmployees.getDetail());


// cara ke 2

class Employee{
    public name: string
    public workingHours: number[]

    constructor(name: string){
        this.name = name
        this.workingHours = []
    }

    addWorkingHours(hours: number): void{
        if(hours > 0){
            this.workingHours.push(hours)
        }
    }

    calculateTotalSalary(): number{
        return 0 // akan di override ke FullTimeEmployee dan HalfHourEmployee
    }
}

class FullTimeEmployee extends Employee{
    private hourlyRate: number = 100000
    private reducedRate: number = 75000

    calculateTotalSalary(): number{
        let totalSalary = 0;
        for(let i = 0; i < this.workingHours.length; i++){
            if (this.workingHours[i] > 6 ){
                totalSalary += this.workingHours[i] * this.reducedRate
            }else {
                totalSalary += this.workingHours[i] * this.hourlyRate
            }
        }
        return totalSalary
    }
}



