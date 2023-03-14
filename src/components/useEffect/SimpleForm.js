import React, { useEffect, useState } from 'react';
import './effects.css';


export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        name:'',
        email: '',
    });

    const { name , email } = formState;

    useEffect(() => {

    }, []);


    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [ e.target.name]: e.target.value
        })
        
    }

  return (
    <>
        <h1>Use Effect</h1>
        <hr />

        <div className='form-group'>
            <input type='text' 
            name='name' 
            className='form-control' 
            placeholder='Tu nombre' 
            value={name}
             onChange={handleInputChange}></input>
        </div>

        <div className='form-group'>
            <input type='text' 
            name='email' 
            className='form-control' 
            placeholder='email@example.com' 
            value={email}
             onChange={handleInputChange}></input>
        </div>

    </>
  )
}
