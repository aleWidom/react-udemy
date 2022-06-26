
export const todoReducer = (initialState = [], actions) => {

    switch (actions.type) {
        case '[TODO] Add Todo':
            return [...initialState, actions.payload]
            break;

        default:
            return initialState;
    }



}

