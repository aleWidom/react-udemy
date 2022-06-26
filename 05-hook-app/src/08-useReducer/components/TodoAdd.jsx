import { useFormTodos } from "../../hooks/useFormTodos"

export const TodoAdd = ({ handleNewTodo }) => {

    const { input, onInputChange, onSubmitTodos } = useFormTodos(handleNewTodo)

    return (
        <form onSubmit={onSubmitTodos}>
            <input type='text' placeholder='Que hay que hacer?' value={input} onChange={onInputChange} />
            <button type='submit'>Agregar</button>
        </form>
    )
}
