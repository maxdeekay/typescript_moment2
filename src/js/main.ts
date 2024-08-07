// Importerar TodoList-klassen från todolist.ts
import { TodoList, Todo } from "./todoList";

document.addEventListener("DOMContentLoaded", () => {
    const todo = new TodoList(); // creates new todo

    printTodoList(todo); // calls the print-function and draws the list

    const form = document.getElementById("task-form") as HTMLFormElement;
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const task = formData.get("task") as string;
        const priority = formData.get("priority") as string;

        // attempts to add the item, else alerts the user
        todo.addTodo(task, priority)
            ? printTodoList(todo)
            : alert("Fel. Se till att en uppgift är angiven.");
    })

    const clearBtn = document.getElementById("clear-btn") as HTMLButtonElement;
    clearBtn.addEventListener("click", () => {
        todo.clearTodos();
        printTodoList(todo);
    });
});

function printTodoList(todolist: TodoList): void {
    const todos = todolist.getTodos();
    const ul = document.getElementsByTagName("ul")[0] as HTMLElement;
    ul.innerHTML = "";

    if (todos.length === 0) {
        const p = document.createElement("p");
        const pText = document.createTextNode("För tillfället har du inget att göra!");
        p.appendChild(pText);
        ul.appendChild(p);
        return;
    }

    // creating todo-list
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        const liText = document.createTextNode(todo.task);

        // adds the priority-class to change style of text
        li.classList.add(`prio-${todo.priority}`);
        
        // check-mark icon for task completion
        const div = document.createElement("div");
        div.classList.add("complete-btn");
        div.setAttribute("data-index", index.toString());
        div.addEventListener("click", handleCompletion(todolist));

        // adds the "completed"-class where todo.completed === true
        if (todo.completed) {
            div.classList.add("completed");
            div.innerHTML = "X";
        }

        li.appendChild(liText);
        li.appendChild(div);
        ul.appendChild(li);
    });
}

function handleCompletion(todo: TodoList) {
    return (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const index = target.getAttribute("data-index");
        if (index !== null) {
            todo.markTodoComplete(parseInt(index));
        }
        printTodoList(todo);
    }
}