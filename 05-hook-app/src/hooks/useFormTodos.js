import { useState } from "react"

export const useFormTodos = (todos) => {

    const [input, setInput] = useState('')
    const [stateTodos, setTodos] = useState(todos)

    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    console.log(stateTodos)

    const onSubmitTodos = (event) => {
        event.preventDefault()
        if (input.length < 2) return;
        setTodos([
            ...stateTodos,
            {
                id: new Date().getTime(),
                description: input,
                done: false
            }
        ])
        setInput('')
    }

    return {
        input,
        onInputChange,
        onSubmitTodos
    }
}
