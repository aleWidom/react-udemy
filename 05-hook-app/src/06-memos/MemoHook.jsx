
import { useMemo, useState } from 'react'
import { useCounter } from '../hooks'


const heavyStuff = (iterationNumber = 100) => {
    for (let index = 0; index < iterationNumber; index++) {
        console.log('Ahi Vamos')
    }
    return `${iterationNumber} iteraciones realizadas`
}


export const MemoHook = () => {

    const { counter, increment } = useCounter(4000)

    const [show, setShow] = useState(true)

    //el use memo va a memorizar lo que sea que retorne, este valor se va a mantener memorizzdo a menos que las dependencias cambien
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small> </h1>
            <hr />
            <h4>{memorizedValue}</h4>
            <button onClick={(event) => increment(event, 1)}>+1</button>
            <button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
