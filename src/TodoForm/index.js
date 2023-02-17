import { TodoContext } from '../TodoContext';
import React from 'react';
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { openModal, setOpenModal, addTodo} = React.useContext(TodoContext)

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }

    const onCancel = () =>{
        setOpenModal(false)
    }

    const onSubmit = (event) =>{
        event.preventDefault(); // evita que se recargue la página.
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Crea una nueva tarea!</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder='Cortar cebolla rrey'    
                required
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    className='TodoForm-button TodoForm-button--cancel'
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className='TodoForm-button TodoForm-button--cancel'
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };