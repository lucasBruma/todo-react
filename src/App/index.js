// import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext/index.js"



function App() {

  return (
    <TodoProvider>
      <AppUI/> {/*Todos estos componentes van a poder usar al consumidor*/}
    </TodoProvider>
  );
}

export default App;
