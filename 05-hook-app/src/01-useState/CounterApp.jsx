
import { useState } from "react"

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    console.log(state.counter1)

    return (
        <>
            <h1>Counter: {state.counter1}</h1>
            <h1>Counter: {state.counter2}</h1>
            <h1>Counter: {state.counter3}</h1>
            <hr />
            <button onClick={() => setState(state.counter1 + 1)}>+1</button>
            <button onClick={() => setState(state.counter2 + 1)}>+1</button>
            <button onClick={() => setState(state.counter3 + 1)}>+1</button>
        </>
    )
}

