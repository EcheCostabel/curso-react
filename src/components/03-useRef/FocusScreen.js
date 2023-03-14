import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <div>
        <h1>FocusScreen</h1>
        <hr />

        <input className='form-control mb-5'
        placeholder='Su nombre'
        ref={inputRef}
        />
        <button className='btn btn-outline' onClick={handleClick}>
          Focus
        </button>
    </div>
  )
}
