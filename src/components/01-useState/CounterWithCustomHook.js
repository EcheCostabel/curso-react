import React from 'react'
import './counter.css'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {state, increment , decrement, reset } = useCounter();


  return (
    <>
    <h1>Counter With Hook: {state}</h1>
    <hr />

    <button className='btn' onClick={ increment}> +1</button>
    <button className='btn' onClick={ decrement}> -1</button>
    <button className='btn' onClick={reset}> Reset</button>
    </>
  )
}
