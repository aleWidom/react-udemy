
import React, { useState, useEffect } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import "./index.css"


const GifExpertApp = () => {

    //cuando utilice el setCategories, y esto cambie react renderiza nuevamente el componente y va a mostrar los cambios.

    const [categories, setCategories] = useState(["Los Simpsons"])

    const onNewCategory = (value) => {
         if (categories.includes(value)){
            return
         } else {
            setCategories([...categories, value]) 
         }
    }
 
    console.log(categories)



/*     const [array, setArray] = useState([1, 2, 3, 4, 5, 67, 8]) */

   /*  useEffect(() => {
        console.log('hola')
        setCategories(['Chavo'])
    }, [categories]) */


    /*  const handleAdd = () => (
          //Dos formas de hacerlo:
  
          //setCategories([...categories, "X Men"]) 
      
          //o setCategories puede recibir un callback en el que el argumneto es el state anterior
  
          setCategories((cats) => [...cats, "X Men"])
          
      )*/


/*     const prueba = () => setArray([...array, "R"]) */


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory onNewCategory={onNewCategory}/>
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
            <h3>Hola</h3>
        </>
    );
}

export default GifExpertApp;