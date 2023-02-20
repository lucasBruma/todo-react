import React from 'react';
import './TodoSearch.css';


function TodoSearch({searchValue, setSearchValue}){
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
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