import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';


function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
        console.log(event.target.value)
    }

    return (
        <input 
            type="search" 
            placeholder="Busca.." 
            className="search"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )


}

export {TodoSearch};