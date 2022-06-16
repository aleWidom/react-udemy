import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getGifs(category)
        .then((imgs)=> {
            setData(imgs)
            setLoading(false) 
        }
        )
     },[category])  

    return {
        data,
        loading
    };

}