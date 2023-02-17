import './TodoList.css';

function TodoList(props){
    return (
        <section className='list'>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList}