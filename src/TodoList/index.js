import './TodoList.css';

function TodoList(props){
    return (
        <section className='TodoList-container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos.length && props.todos.length) && props.onEmptySearchTodos()}
            {(!props.loading && !props.todos.length) && props.onEmptyTodos()}

            <ul>
                {!props.loading && props.searchedTodos.map(props.children || props.render)} 
            </ul>
        </section>
    );
}

export {TodoList}