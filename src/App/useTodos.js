// This script does almost everything that the app does.
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() { // custom hook
    //states
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const todo = {text, completed: false}
    const newTodos = [...todos];
    newTodos.push(todo);
    saveTodos(newTodos)
  }
  
    return (
          {
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            saveTodos,
            todos,
            useLocalStorage,
            openModal,
            setOpenModal,
            addTodo
          }
    );
}

export {useTodos};