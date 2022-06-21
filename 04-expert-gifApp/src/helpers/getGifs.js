export const getGifs = async (category) => {

    // encodeURI (prueba) lo que hace es reemplazar los espacios por %20 por ej

    let listadoGifs = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Absxb7cpE4KisuwgZnO07FLlZqNz8kfr&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=en`)

    let { data } = await listadoGifs.json()

    let dataNecesaria = data.map((e) => (
        {
            id: e.id,
            title: e.title,
            //lo va a mostrar solo si existe, es como una condición por lo que entendi (el signo de pregunta)
            url: e.images?.downsized_medium.url
        }
    ))


    return dataNecesaria;


}