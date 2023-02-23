
// import React from "react";

import { useState } from "react"
import { AddCategory, GifGrid } from "./components/";


export const GifExpertApp= () =>{

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes (newCategory) ) return;

        //console.log(newCategory)        
        setCategories([newCategory, ...categories]);

        //setCategories ( cat => [ ...cat, 'Valorant']);

    }

    // Send all elements
    // const onAddCategory = () => {
    //     //console.log('Valorant');
    //     setCategories(['Valorant', ...categories]);
    //     //setCategories ( cat => [ ...cat, 'Valorant']);

    // }

    //console.log(categories)

    return (
        <>
        {/* titulo */}
            <h1> GifExpertApp</h1>

        {/* Input */}

        <AddCategory 
            // setCategories={ setCategories}      Send all elements
             onNewCategory = {(event) => onAddCategory(event)}
        />
        

        {/* Listado de Gif */}
        {/* <button onClick={onAddCategory}> Agregar </button> */}
       
        { 
        categories.map( (category) =>(
            < GifGrid   key = { category} 
                        category={category}/>
        ))
        }
        
        

        {/* Gif item */}

        </>
    )

}