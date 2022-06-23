import { useCounter, useFetch } from "../hooks/"
import { Loading, Quote } from "../03-examples"


export const Layout = () => {

    const { counter, increment } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)



    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            {isLoading ? <Loading /> : <Quote data={data} />}
            <button onClick={(event,) => increment(event, 1)}>Next Quote</button>
        </>

    )
}
