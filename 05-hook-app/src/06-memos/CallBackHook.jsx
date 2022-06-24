import { useState, useCallback } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    //parecido al useMemo pero memoriza funciones
    const increment = useCallback(
        () => {
            console.log('setCounter(counter+1)')
            setCounter((value) => value + 1)
        },
        [],
    )


    //Si yo mando esto asì nomàs para javascript las funciones y los objetos son espacios diferentes en memoria por tanto va a volver a renderizar la funciòn porque la funciòn es nueva(ocupa un nuevo espacio), por tanto si mando esta funciòn como prop siempre la prop va a ser nueva por tanto el memo no servirìa para esto debo usar el useCallBack
    /*  const increment = () => {
         setCounter(counter + 1)
     } */

    return (
        <>
            <h1>UseCallBack Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </>

    )
}
