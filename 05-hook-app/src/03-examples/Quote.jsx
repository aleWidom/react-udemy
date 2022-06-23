import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({data}) => {

    const pRef = useRef()

    const [boxSize, setBoxSize] = useState({width: 0, height: 0})

    //dentro de lo posible se recomienda si se puede para lo que lo necesitamos usar el useEffect no obstante veamoslo
    useLayoutEffect(() => {
       const coordenadas = pRef.current.getBoundingClientRect();
       setBoxSize({
           ...boxSize,
           width:  coordenadas.width,
           height: coordenadas.height,
       })
    }, [])

    return (

            <>
            <blockquote style={{display:'flex'}}>
                <p ref={pRef}>{data[0].quote}</p>
                <footer>{data[0].author}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
            </>
    )
}
