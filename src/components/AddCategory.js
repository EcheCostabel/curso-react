import React, { useState } from 'react'

export const AddCategory = ({setCategories, categories}) => {

    const [inputValue, setInputValue ] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputValue.trim().length > 2) {
            setCategories([ inputValue, ...categories ])
            setInputValue('')
        }
    }



  return (
    <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        value= {inputValue}
        onChange={handleInputChange}
        />
    </form>
   
  )
}
