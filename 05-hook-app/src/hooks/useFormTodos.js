import { useState } from "react"

export const useFormTodos = (handleNewTodo) => {

    const [input, setInput] = useState('')

    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const onSubmitTodos = (event) => {
        event.preventDefault()
        if (input.length < 2) return;

        const newTodo = {
            id: new Date().getTime(),
            description: input,
            done: false
        }
        setInput('')
        handleNewTodo(newTodo)
    }

    return {
        input,
        onInputChange,
        onSubmitTodos,
    }
}
