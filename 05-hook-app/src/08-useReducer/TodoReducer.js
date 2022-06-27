
export const todoReducer = (initialState = [], actions) => {

    switch (actions.type) {
        case '[TODO] Add Todo':
            return [...initialState, actions.payload]
            break;

        case '[TODO] Remove Todo':
            return initialState.filter((todo) => todo.id !== actions.payload)
            break;

        case '[TODO] Updated Todo':
            return initialState.map((todo) => {
                if(todo.id === actions.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
            break;

        default:
            return initialState;
    }



}

