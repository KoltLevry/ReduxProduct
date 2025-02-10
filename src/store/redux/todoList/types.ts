export interface TodoList {
    id: number;
    text: string;
    completed: boolean;
}
// 🔹 Todo — описує кожне завдання:
  
  export interface TodoListState {
    todos: TodoList[];
}
// 🔹 TodoState — зберігає список завдань у масиві todos.