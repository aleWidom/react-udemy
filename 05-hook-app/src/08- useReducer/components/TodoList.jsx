import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos }) => {

    return (
        <ul>
            {todos.map((todo) => {
                return <TodoItem key={todo.id} {...todo} />
            })}
        </ul>
    )
}
