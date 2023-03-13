import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GifGridItem } from './GifGridItem'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({category}) => {

    const [images, setimages] = useState([])

    useEffect(() => {
        getGifs(category)
        .then(imgs => setimages(imgs))

    }, [])


  return (
    <>
        <h3>{category}</h3>
      <div className='card-grid'>
       
            {
                images.map(img => {
                    return <GifGridItem  key={img.id}
                    {...img }
                    />
                })
            }
       
     </div>
            </>
  )
}
