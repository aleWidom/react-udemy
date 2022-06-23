import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const fetchQuotes = async () => {
        
        setState(
            {
                ...state,
                isLoading: true,
            }
        )

        const response = await fetch(url)
        const data = await response.json()

        setState(
            {
                ...state,
                data,
                isLoading: false,
            }
        )
    }


    //el efecto se ejecuta luego de que se renderizo el componente, pero no es que reinicia el componente esto sucede si hay un setState() para reiniciarlo
    useEffect(() => {
        fetchQuotes()
    }, [url])




    return {
        data: state.data,
        isLoading: state.isLoading, 
        hasError: state.hasError
    }
}
