import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Nav/Nav";
import { useState } from "react";
import Todo from "./Todo/Todo";

function App() {
    const [name, setName] = useState("Eric");
    const [address, setAddress] = useState("");
    const [todos, setTodos] = useState([
        { id: "todo1", title: "Watching Hoi Dan IT Channel" },
        { id: "todo2", title: "Doing homework" },
        { id: "todo3", title: "Playing game" },
    ]);

    const handleEventClick = (event) => {
        if (!address) {
            alert("emtpy input");
            return;
        }
        //hook not merge state
        //...spread syntax array js
        let newTodo = { id: "abc", title: address };
        setTodos([...todos, newTodo]);
        setAddress("");
    };

    const handleOnchangeInput = (event) => {
        setAddress(event.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello world with React and {name}!</h1>
                <Todo todos={todos} title={"All todos"} />
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
            </header>
        </div>
    );
}

export default App;
