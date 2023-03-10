import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

    const [images, setimages] = useState([])

    useEffect(() => {
        getGift()

    }, [])

    const getGift = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=76yeVqfKmzDKiuR5LLoshSQ0pYwqORR1'
        const resp = await axios(url)
        const {data} = await resp.data

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs)
        setimages(gifs)
    }

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
