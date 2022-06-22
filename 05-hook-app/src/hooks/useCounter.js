
import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (event,value) => {
        console.log(event)
        console.log(value)
        setCounter(counter + value)
    }

    const decrement = (value) => {
        if (counter < 1) return
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}