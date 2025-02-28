class Task {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.completed = false;
        this.createdAt = new Date();
    }
}

class Worktask extends Task {
    priority: string;
    assignedTo: string;

    constructor(id: number, title: string, priority: string, assignedTo: string) {
        super(id, title);
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
}

class Personaltask extends Task {
    priorityLevel: string;

    constructor(id: number, title: string, priorityLevel: 'High' | 'Medium' | 'Low') {
        super(id, title);
        this.priorityLevel = priorityLevel;
    }
}

class TodoList{
    tasks: Task[] = [];
    addTask(task: Task, title: string, createdAt: Date, assignedTo: string){
        this.tasks.push(task);
    }

    completedTask(id: number){
        const task = this.tasks.find(task => task.id === id);
        if(task){
            task.completed = true;
        }
    }

    removeTask(task: Task){
        this.tasks = this.tasks.filter(t => t !== task);
    }

    filterTaskByType(type: string){
        return this.tasks.filter(task => task.constructor.name === type);
    }

    filterDueSoon(){
        return this.tasks.filter(task => {
            const dueDate = new Date(task.createdAt);
            dueDate.setDate(dueDate.getDate() + 3);
            return dueDate > new Date();
        });
    }

    getAllTodo(): Task[]{
        return this.tasks;
    }
}

const todo = new TodoList();

todo.addTask(new Task(1, "Buy Groceries"), "Buy Groceries", new Date("2025-02-15"), "Alice");
todo.addTask(new Worktask(2, "Finish report part 2", "High", "Budi"), "Finish report part 2", new Date(), "Budi");
todo.completedTask(1);

console.log(todo.filterTaskByType("Worktask"));
// console.log(todo.filterDueSoon());

