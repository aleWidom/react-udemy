

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}]

//un reducer es una simple funciòn pura. Todo se debe resolver dentro de la misma. Siempre debe returnar el state

const todoReducer = (state = initialState, action) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload]
    }

    return state;

}


//no debo modificar el estado con el .push por ej eso hace mutar, y react no funciona asì para cambiar el estado debo enviar una acciòn

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}


const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo //('usualmente se reconoce con el nombre de payload la acciòn que esta en carga')
}

let todos = todoReducer(initialState, addTodoAction)
console.log(todos)