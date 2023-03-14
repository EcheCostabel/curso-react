import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
       window.addEventListener('mousemove', (e) => {
        
       })
    
      return () => {
        console.log('componente desmontado')
      }
    }, [])
    

  return (
    <div>
        <h3>Hola mundo</h3>
    </div>
  )
}
