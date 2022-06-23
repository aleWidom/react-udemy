import { useCounter, useFetch } from "../hooks/"
import { Loading, Quote } from "./"


export const MultiplesCustomHooks = () => {

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
