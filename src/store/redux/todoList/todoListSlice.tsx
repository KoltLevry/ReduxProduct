import { createAppSlice } from 'store/createAppSlice';

import { TodoList, TodoListState } from './types';

const todoListInitialState: TodoListState = {todos: []};

export const todoListSlice = createAppSlice({
    name: "TODOLIST",
    initialState: todoListInitialState,
    reducers: create => ({
        addTodo: create.reducer((state, action: {payload: string}) => {
            state.todos.push({
                id: state.todos.length + 1,
                text: action.payload,
                completed: false
            });
        }),
        removeTodo: create.reducer((state, action: {payload: number}) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }),
        toggleTodo: create.reducer((state, action: {payload: number}) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }),
        clearTodos: create.reducer(state => {
            state.todos = [];
        })
    }),
    selectors: {
        selectTodos: (state: TodoListState) => state.todos,
    }
});

export const todoActions = todoListSlice.actions;
export const todoSelectors = todoListSlice.selectors;
// 🔹 todoActions містить усі екшени (addTodo, removeTodo, toggleTodo, clearTodos).
// 🔹 todoSelectors містить селектори (selectTodos).