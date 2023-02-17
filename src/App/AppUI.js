import React from 'react';
import { TodoContext } from "../TodoContext"
import {TodoCounter} from "../TodoCounter"
import {TodoSearch} from "../TodoSearch"
import {TodoList} from "../TodoList"
import {TodoItem} from "../TodoItem"
import {CreateTodoButton} from "../CreateTodoButton"
import { Modal } from "../Modal"
import {TodoForm} from "../TodoForm"
import {Loading} from "../Loading"


function AppUI(){
  const {
    error, 
    loading,
    searchedTodos,
    useLocalStorage,
    saveTodos, 
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

  return (
      <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
          {error && <p>Hubo un error...</p>}
          {loading && <Loading/>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer todo!</p>}
      
            {searchedTodos.map(todo=>(
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                todos={searchedTodos}
                saveTodos={saveTodos}
                />
            ) 
            )}
        </TodoList>

        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}

        <CreateTodoButton 
          useLocalStorage={useLocalStorage}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />

      </React.Fragment>
  );
}

export { AppUI }