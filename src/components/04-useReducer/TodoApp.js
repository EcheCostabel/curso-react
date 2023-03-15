import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const  [ {description}, handleInputChange, reset ] = useForm({  //hago destructuring de description para no poner formValues.description pero es lo mismo
        description:'',

    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)) //localStorage solo guarda strings por eso tengo que pasarlo
    },[todos]);

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    };

    const handleToggle = (todoId) => {
        dispatch({
            type:'toggle',
            payload: todoId
        })
    }

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

        const action = {
            type:'add',
            payload: newTodo
        }

        dispatch(action);
        reset();   //este reset lo saco de useForm, lo hice para limpiar el input una vez enviado. Buscar.
    };

  return (
    <div>
        <h1>TodoApp ({todos.length})</h1>
        <hr />


       <div className='row'>
        <div className='col-7'>
            <TodoList  
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            />
        </div> 

        <div className='col-5'>
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

        </div>

       </div>
    </div>
  )
}
