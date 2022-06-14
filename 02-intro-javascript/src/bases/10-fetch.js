const apiKey = "Absxb7cpE4KisuwgZnO07FLlZqNz8kfr";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then((resp) => resp.json())
.then(({data}) => {   //puedo desestructurar
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);

})
.catch(console.warn)