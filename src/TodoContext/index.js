import React from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext(); // Objeto contexto que tiene dos componentes, provider y consumer

function TodoProvider(props) {
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
        <TodoContext.Provider value={{
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
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};