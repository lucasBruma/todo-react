import { TodoContext } from '../TodoContext';
import React from 'react';
import './TodoCounter.css'

function TodoCounter(){ // ya no recibo props ya que voy a usar useContext
    const {completedTodos, totalTodos} = React.useContext(TodoContext)

    return (
        <h2 className="todo-counter">Has completado {completedTodos} de {totalTodos} tareas!</h2>
    )
}

export {TodoCounter};