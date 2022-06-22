import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(5)

  return (
    <>
    <h1>CounterWithCustomHook: {counter}</h1>
    <hr />
{   /*  onClick={(evento) => increment(evento) es lo mismo a hacer onclick={increment}}>*/}
    <button onClick={(evento, value) => increment(evento, 2)}>+ Numero que quiero sumar</button>
    <button onClick={reset}>Reset</button> 
    {/* poner así es lo mismo que  onClick={(evento, value) => decrement(evento, 1)} */}
    <button  onClick={() => decrement(1)}>-1</button>
    </>

  )
}

