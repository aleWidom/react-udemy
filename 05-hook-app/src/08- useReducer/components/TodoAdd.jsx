import { useFormTodos } from "../../hooks/useFormTodos"

export const TodoAdd = ({ todos }) => {

    const { input, onInputChange, onSubmitTodos } = useFormTodos(todos)

    return (
        <form>
            <input type='text' placeholder='Que hay que hacer?' value={input} onChange={onInputChange} />
            <button onClick={onSubmitTodos} type='submit'>Agregar</button>
        </form>
    )
}
