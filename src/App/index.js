// import './App.css';
import React from "react";
import { useTodos } from "./useTodos"
import {TodoCounter} from "../TodoCounter"
import {TodoSearch} from "../TodoSearch"
import {TodoList} from "../TodoList"
import {TodoItem} from "../TodoItem"
import {CreateTodoButton} from "../CreateTodoButton"
import { Modal } from "../Modal"
import {TodoForm} from "../TodoForm"
import {Loading} from "../Loading"
import { TodoHeader } from '../TodoHeader';


function App() {
  const {
    error, 
    loading,
    searchedTodos,
    useLocalStorage,
    saveTodos, 
    openModal,
    setOpenModal,
    completedTodos, 
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    todos
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
            completedTodos={completedTodos}
            totalTodos={totalTodos}
        />
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList>
        {error && <p>Hubo un error...</p>}
        {loading && <Loading/>}
        {(!loading && !searchedTodos.length && todos.length) && <p>No se encontraron resultados</p>}
        {(!loading && !todos.length) && <p>Crea tu primer todo!</p>}
    
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
          <TodoForm
            openModal={openModal}
            setOpenModal={setOpenModal}
            addTodo={addTodo} 
          />
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

export default App;
