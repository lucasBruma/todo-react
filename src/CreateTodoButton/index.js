import './CreateTodoButton.css'
import React, { useEffect } from 'react';
import { BiPlus } from 'react-icons/bi'

function CreateTodoButton({useLocalStorage, setOpenModal, openModal}){
    const {item: count, saveItem: setCount} = useLocalStorage('Contador', 0);

    useEffect(()=>{
        console.log('El contador se ha actualizado')
    },[count])

    return (
        <React.Fragment>
            <button 
                className='add-btn'
                onClick={() => setOpenModal(!openModal)}
            > <BiPlus/> 
            </button>
        </React.Fragment>
    )
}

export {CreateTodoButton}