import React, { useReducer } from 'react'
import { TodoList, TodoAdd } from './components'
import { todoReducer } from './TodoReducer'

export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            description: 'Recolectar la piedra del alma',
            done: false
        },
        {
            id: new Date().getTime() * 3,
            description: 'Recolectar la piedra del poder',
            done: false
        }
    ]

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState)

    console.log(todos)

    return (
        <>
            <h1>TodoApp 10, <small>pendientes 2</small></h1>
            <hr />
            <div>
                <TodoList todos={todos} />
            </div>
            <div>
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd todos={todos} />
            </div>
        </>

    )
}
