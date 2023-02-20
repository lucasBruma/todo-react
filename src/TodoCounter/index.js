import React from 'react';
import './TodoCounter.css'

function TodoCounter({completedTodos, totalTodos}){
    return (
        <h2 className="todo-counter">Has completado {completedTodos} de {totalTodos} tareas!</h2>
    )
}

export {TodoCounter};