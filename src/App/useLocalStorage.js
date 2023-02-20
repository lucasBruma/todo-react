import React from "react";


//CUSTOM HOOK (podemos llamar a otros react hooks dentro)
function useLocalStorage(itemName,initialValue){  
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    //simulacion de como si fueramos a obtener datos de una API.
    // nos devuelve el valor verdadero q' es el guardado en el localstorage
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          let parsedItem;
          const localStorageTodos = localStorage.getItem(itemName);
          
          if(!localStorageTodos){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue;
          }else {
            parsedItem = JSON.parse(localStorageTodos);
          }
          
          setItem(parsedItem);
          setLoading(false) //una vez todo cargado ya no va a estar más cargando je
          // al cambiar el estado aca, se modifica en todas partes. I mean, en AppUI no entrará al condicional.
        } catch(error){
          setError(error)
        }
          
      }, 1000);
    },[]);
  
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }catch(error){
        setError(error)
      }
    };
  
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  }

export {useLocalStorage}