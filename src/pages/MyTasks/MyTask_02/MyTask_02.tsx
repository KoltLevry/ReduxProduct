import { useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { TaskWrapper } from "./styles";
import { todoSelectors, todoActions } from "store/redux/todoList/todolistSlice";

function MyTask_02() {

    const todos = useAppSelector(todoSelectors.selectTodos);
    const dispatch = useAppDispatch();
    const [task, setTask] = useState("");

    const addTask = () => {
        if(task.trim()) {
            dispatch(todoActions.addTodo(task));
            setTask("");
        }
    };

    return(
        <TaskWrapper>
            <h1>Hi task 2 - TODO list</h1>
            <>
            <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={addTask}>Add</button>
            <button onClick={() => {}}>Clear all</button>
            </>
            <ul>
                {todos.map(todo => (
                <li key={todo.id}>
                    <span 
                    onClick={() => dispatch(todoActions.toggleTodo(todo.id))}
                    style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
                    >
                    {todo.text}
                    </span>
                    <button onClick={() => dispatch(todoActions.removeTodo(todo.id))}>X</button>
                </li>
                ))}
            </ul>
        </TaskWrapper>
    );
}

// 🔹 Опис функціоналу
// Користувач може додавати завдання.
// Користувач може видаляти завдання.
// Користувач може позначати завдання як виконане.
// Користувач може очистити всі завдання.

export default MyTask_02;