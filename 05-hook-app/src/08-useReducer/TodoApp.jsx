import { useTodos } from '../hooks/useTodos'
import { TodoList, TodoAdd } from './components'

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleUpdatedDone } = useTodos()

    return (
        <>
            <h1>TodoApp {todosCount}, <small>pendientes {pendingTodosCount}</small></h1>
            <hr />
            <div>
                <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleUpdatedDone={handleUpdatedDone} />
            </div>
            <div>
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd handleNewTodo={handleNewTodo} />
            </div>
        </>

    )
}
