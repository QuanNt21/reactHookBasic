const Todo = (props) => {
    //properties
    // parent => child, top => bottom
    const {
        todos,
        address,
        handleEventClick,
        handleOnchangeInput,
        deleteDataTodo,
    } = props;

    return (
        <div className="todos-container">
            <div className="title">{props.title}</div>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <li className="todo-child">
                            {" "}
                            {todo.title}
                            &nbsp; &nbsp;{" "}
                            <span onClick={() => deleteDataTodo(todo.id)}>
                                x
                            </span>
                        </li>
                    </div>
                );
            })}
            <div className="add-todo">
                <input
                    type="text"
                    value={address}
                    onChange={(event) => handleOnchangeInput(event)}
                />
                <button
                    type="button"
                    onClick={(event) => handleEventClick(event)}
                >
                    Click me
                </button>
            </div>
        </div>
    );
};

export default Todo;
