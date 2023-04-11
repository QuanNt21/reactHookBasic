import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Nav/Nav";
import { useState } from "react";

function App() {
    let [name, setName] = useState("Eric");
    const [address, setAddress] = useState("");

    const handleEventClick = (event) => {
        setName(address);
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
