import './TodoItem.css'

function TodoItem({key , text, completed,todos, saveTodos}){

    const onComplete = () =>{
        const updateTodos = todos.map((todo) =>{
            if (todo.text === text){
                todo.completed = !completed;
            }
            return todo
        });
        saveTodos(updateTodos);
    }

    const onDelete = () => {
        const updateTodos = todos.filter((todo) => todo.text !== text);
        saveTodos(updateTodos);
    }

    return (
        <li className={`todo-item`}>
            <i 
                className={`fa-regular fa-circle ${completed && 'hide'}`}
                onClick={onComplete}
            ></i>
            <i 
                className={`fa-solid fa-circle-check ${!completed && 'hide'}`}
                onClick={onComplete}
            ></i>
            <p className={`todo-item__p ${completed && 'todo-item__p--completed'}`}>{text}</p>
            <i 
                className="fa-regular fa-trash-can"
                onClick={onDelete}
            ></i>
        </li>
    )
}

export {TodoItem};