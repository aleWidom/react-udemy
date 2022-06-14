import React from 'react'

export const GifGridItem = ({id,title,url}) => {

    
    /*
    esto es si hubiese utilizado en el componente padre cuando utilizo este componente
    de esta manera

    console.log(props.data.id)
    console.log(props.data.url)
    console.log(props.data.title)
    
    { images.map((e)=> (
                    <GifGridItem key={e.id}  data={e}
    />   
    ))}
    */


    return (
        <div className="card animate__animated animate__bounce">
            <h2>{title}</h2>
            <img src={url} alt={title}/>
        </div>
    )
}
