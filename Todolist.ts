interface iTodoItem {
    id: number;
    task: string;
    completed: boolean;
}

interface iWhenDue extends iTodoItem {
    dueDate: Date;
}

class TodoList {
    private todos: iWhenDue[] = [];

    addTodo(task: string, dueDate: Date): void {
        const newTodo: iWhenDue = {
            id: this.todos.length + 1,
            task,
            completed: false,
            dueDate
        };
        this.todos.push(newTodo);
    }

    completeTodo(id: number): void {
        const todo = this.todos.find(item => item.id === id);
        if (todo) {
            todo.completed = true;
        } else {
            console.log(`Todo with id ${id} not found.`);
        }
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter(item => item.id !== id);
    }

    listTodos(): iWhenDue[] {
        return this.todos;
    }

    filterTodos(completed: boolean): iWhenDue[] {
        return this.todos.filter(item => item.completed === completed);
    }

    updateTodo(id: number, newTask: string): void {
        const todo = this.todos.find(item => item.id === id);
        if (todo) {
            todo.task = newTask;
        } else {
            console.log(`Todo with id ${id} not found.`);
        }
    }

    clearCompletedTodos(): void {
        this.todos = this.todos.filter(item => !item.completed);
    }

    filterByDueDate(date: Date): iWhenDue[] {
        return this.todos.filter(item => item.dueDate.toDateString() === date.toDateString());
    }
}
