


export const TodoItem = ({ description, id, done, handleDeleteTodo, handleUpdatedDone }) => {
    return (
        <li >
            <span onClick={()=> handleUpdatedDone(id)}>{description}</span>
            <button onClick={()=> handleDeleteTodo(id)}>Borrar</button>
        </li>
    )
}
