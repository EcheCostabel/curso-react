import React from 'react'
import axios from 'axios'

export const GifGrid = ({category}) => {

    const getGift = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=76yeVqfKmzDKiuR5LLoshSQ0pYwqORR1'
        const resp = await axios(url)
        const {data} = await resp.data

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.downSized_medium.url
            }
        })

        console.log(data)
    }
    getGift()

  return (
    <div>
        <h3>{category}</h3>
     </div>
  )
}
