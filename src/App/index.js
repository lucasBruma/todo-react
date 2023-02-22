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
import { TodoHeader } from '../TodoHeader';
import { TodosError } from "../TodosError";
import {Loading} from "../Loading"
import {SearchFailed} from "../SearchFailed";
import {EmptyTodos} from "../EmptyTodos";
import { ChangeAlert } from "../ChangeAlert";


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
    todos,
    sincronizeTodos
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            // loading={loading}
        />
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            // loading={loading}
        />
      </TodoHeader>

      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        todos={todos}
        onError = {() => <TodosError/>}
        onLoading = {() => <Loading/>}
        onEmptyTodos = {() => <EmptyTodos/>}
        onEmptySearchTodos = {() => <SearchFailed searchValue={searchValue}/>}
        // render = {todo=>(
        //   <TodoItem 
        //     key={todo.text} 
        //     text={todo.text}
        //     completed={todo.completed}
        //     todos={searchedTodos}
        //     saveTodos={saveTodos}
        //     />
        // ) 
        // }
      >       
        {todo=>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            todos={searchedTodos}
            saveTodos={saveTodos}
            />
          ) 
        }
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

      <ChangeAlert sincronize={sincronizeTodos}/>

    </React.Fragment>
);
}

export default App;
