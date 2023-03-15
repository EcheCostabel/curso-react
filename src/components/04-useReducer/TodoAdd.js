import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const  [ {description}, handleInputChange, reset ] = useForm({  //hago destructuring de description para no poner formValues.description pero es lo mismo
        description:'',

    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length < 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }


        handleAddTodo(newTodo);
        reset();   //este reset lo saco de useForm, lo hice para limpiar el input una vez enviado. Buscar.
    }

  return (
    <>
    <h4>Agregar Todo</h4>
    <hr />

        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='description'
            className='form-control'
            placeholder='Aprender...'
            value={description}
            onChange={handleInputChange}
            />
            <button className='btn btn-outline-primary' type='submit'>
             Agregar
            </button>
 </form>
     </>
  )
}
