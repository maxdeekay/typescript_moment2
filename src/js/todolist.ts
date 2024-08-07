const Priorities = [1, 2, 3] as const;
type Priority = typeof Priorities[number];

export interface Todo {
    task: string,
    completed: boolean,
    priority: Priority
}

export class TodoList {
    private todos: Todo[] = [];

    public constructor() {
        this.loadFromLocalStorage();
        this.clearTodos = this.clearTodos.bind(this);
    }

    public addTodo(task: string, prioInput: string): boolean {
        // converts the value from prioInput into a Priority type
        const priority: Priority = parseInt(prioInput) as Priority;

        // validates input, if invalid it returns false
        if (task === "" || !Priorities.includes(priority)) {
            return false;
        }

        // if input is valid - create newTodo and push it to the saved array
        const newTodo: Todo = { task, completed: false, priority };
        this.todos.push(newTodo);
        this.saveToLocalStorage();
        return true;
    }

    public markTodoComplete(todoIndex: number): void {
        // error handling if todoIndex is a bad value
        if (todoIndex < 0 || todoIndex >= this.todos.length) {
            console.error("Invalid todo index");
            return;
        }

        // toggles completed between true and false
        this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
        this.saveToLocalStorage();
    }

    public getTodos(): Todo[] {
        // method to acquire complete list of todos
        return this.todos;
    }

    // acquires "todos" from localStorage and creates the todo-array
    private loadFromLocalStorage(): void {
        const data = localStorage.getItem("todos");
        this.todos = (data === null) ? [] : JSON.parse(data);
    }

    // saves current todos to localStorage
    public saveToLocalStorage(): void {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    // clears the todos-array and localStorage
    public clearTodos() {
        this.todos = [];
        this.saveToLocalStorage();
    }
}