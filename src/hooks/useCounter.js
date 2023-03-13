import { useState } from "react"


export const useCounter = ( initialState = 10) => {
 
    const [state, setState] = useState(initialState)  // Si me mandan algo, ese va a ser el valor, sino va a ser 10

    const increment = () => {
        setState(state + 1)
    }
    const decrement = () => {
        setState(state - 1)
    }

    const reset = () => {
        setState(initialState)
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}
