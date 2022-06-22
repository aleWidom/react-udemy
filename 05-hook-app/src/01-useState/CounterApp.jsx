
import { useState } from "react"

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    }
    )

    const handleClick1 = () => {
        const newState = {
            ...state,
            counter1: state.counter1 + 1
        }
        setState(newState)
    }

    const handleClick2 = () => {
        const newState = {
            ...state,
            counter2: state.counter2 + 1
        }
        setState(newState)
    }

    const handleClick3 = () => {
        const newState = {
            ...state,
            counter3: state.counter3 + 1
        }
        setState(newState)
    }

    return (
        <>
            <h2>Counter: {state.counter1}</h2>
            <h2>Counter: {state.counter2}</h2>
            <h2>Counter: {state.counter3}</h2>
            <hr />
            <button onClick={handleClick1}>+1</button>
            <button onClick={handleClick2}>+1</button>
            <button onClick={handleClick3}>+1</button>

        </>
    )
}

