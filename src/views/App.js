import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Nav/Nav";

function App() {
    let name = "Eric"; //string
    let obj = { name: "ERic", channel: "Hoi Dan IT" };
    let link =
        "https://www.youtube.com/watch?v=frVHVZDpsp4&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E";

    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello world with React and {name}!</h1>
                <p>{JSON.stringify(obj)}</p>
                <a href={link} target="_blank" rel="noreferrer">
                    Visit my channel
                </a>
            </header>
        </div>
    );
}

export default App;
