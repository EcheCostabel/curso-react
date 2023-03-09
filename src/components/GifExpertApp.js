import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

// apiKey = 76yeVqfKmzDKiuR5LLoshSQ0pYwqORR1

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);



  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={setCategories} categories={categories }/>

    <hr />
    <ol>
        {
            categories.map( category =>  
            <GifGrid category={category}
            key={category}
            />
            )
        }
    </ol>
    </>
  )
}
