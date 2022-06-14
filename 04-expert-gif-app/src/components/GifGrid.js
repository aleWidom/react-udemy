/* import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const [images, setImages] = useState([]);

    //si pongo arreglo vacio como segundo parametro, se va a ejecutar solo una vez el usEffect 

    // Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse. 

    useEffect(()=> {
       getGifs(category)
       .then((img)=> (
           setImages(img)  //esto puede ser también then(setImages) porque coinicde el argumento con lo que voy a poner en la función
       ))
    }, [category])  //si la categoria cambia va a mandar devuelta el efecto por eso [category]




    
    return (
      <>
        <h3>{category}</h3>
        <div className="card-grid">
               { images.map((e)=> (
                    <GifGridItem key={e.id} {...e}
                    //otra forma de crear las props en vez de ponerlo como argumento con un nombre mando un objeto, antes mandaba por ej data={e}, entonces cuando lo utilizaba tenía que desetructurar el elemento o llamar las props con lo que traía dentro por separado, ahora de esta manera desestructuro cada propiedad y listo.
                    />   
                ))}
        </div>
      </>
    )


}
 */

import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

 const {data:images,loading} = useFetchGifs(category);
    
    return (
      <>
        <h3>{category}</h3>
        {loading && <p>Loading</p>}
        <div className="card-grid">
               { images.map((e)=> (
                    <GifGridItem key={e.id} {...e}
                    //otra forma de crear las props en vez de ponerlo como argumento con un nombre mando un objeto, antes mandaba por ej data={e}, entonces cuando lo utilizaba tenía que desetructurar el elemento o llamar las props con lo que traía dentro por separado, ahora de esta manera desestructuro cada propiedad y listo.
                    />   
                ))}
        </div>
      </>
    )


}
