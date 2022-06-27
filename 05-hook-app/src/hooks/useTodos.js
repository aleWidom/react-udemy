import { useReducer, useEffect } from 'react'
import {todoReducer} from '../08-useReducer/TodoReducer'


export const useTodos = () => {
  
    
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatchTodo] = useReducer(todoReducer, [] , init)

    useEffect(() => {
        //en el localStorage se puede grabar solamente strings
        localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatchTodo(action)
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatchTodo(action)
    }


    const handleUpdatedDone = (id) => {
        const action = {
            type: '[TODO] Updated Todo',
            payload: id
        }
        dispatchTodo(action)
    }

    const pendingTodosCount = todos.filter((todo)=> todo.done === false).length
  
    return {
    todos,
    todosCount: todos.length, 
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleUpdatedDone
  }
}
