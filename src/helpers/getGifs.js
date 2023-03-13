import axios from "axios"


export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=76yeVqfKmzDKiuR5LLoshSQ0pYwqORR1`
    const resp = await axios(url)
    const {data} = await resp.data //Aca hago destructuring de date, es lo mismo que hacer resp.data.data

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
    
}