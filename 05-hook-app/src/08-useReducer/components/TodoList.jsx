import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos, handleDeleteTodo, handleUpdatedDone }) => {

    return (
        <ul>
            {todos.map((todo) => {
                return <TodoItem key={todo.id} {...todo} handleDeleteTodo={handleDeleteTodo} handleUpdatedDone={handleUpdatedDone} />
            })}
        </ul>
    )
}
