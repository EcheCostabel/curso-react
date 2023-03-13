import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { GifGridItem } from './GifGridItem'
// import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({category}) => {

    // const [images, setimages] = useState([])
    const  {loading} = useFetchGifs();
    console.log(loading)
  

    // useEffect(() => {
    //     getGifs(category)
    //     .then(imgs => setimages(imgs))
    // }, [category])


  return (
    <>
        <h3>{category}</h3>
        {
          loading ? 'Cargando...' : 'Data Cargada'
        }

      {/* <div className='card-grid'>
            {
                images.map(img => {
                    return <GifGridItem  key={img.id}
                    {...img }
                    />
                })
            }
       
     </div> */}
            </>
  )
}
