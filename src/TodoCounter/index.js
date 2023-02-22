import React from 'react';
import './TodoCounter.css'

function TodoCounter({completedTodos, totalTodos, loading}){
    return (
        <h2 className={`todo-counter ${loading && 'todo-counter--loading'}`}>Has completado {completedTodos} de {totalTodos} tareas!</h2>
    )
}

export {TodoCounter};