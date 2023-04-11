import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Nav/Nav";

function App() {
    let name = "Eric"; //string

    const handleEventClick = (event) => {
        console.log(">>> click me", event.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello world with React and {name}!</h1>
                <input
                    type="text"
                    value="Eric"
                    onClick={(event) => handleEventClick(event)}
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
