import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Nav/Nav";
import { useState, useEffect } from "react";
import ListTodo from "./Todo/ListTodo";
import Covid from "./Covid/Covid";
import Blog from "./Blog/Blog";
import DetailBlog from "./Blog/DetailBlog";
import { NewCountDown } from "./CountDown/CountDown";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [address, setAddress] = useState("");
    const [todos, setTodos] = useState([
        { id: "todo1", title: "Watching Hoi Dan IT Channel", type: "eric" },
        { id: "todo2", title: "Doing homework", type: "eric" },
        { id: "todo3", title: "Playing game", type: "hoidanit" },
        { id: "todo4", title: "Reading books", type: "hoidanit" },
    ]);

    useEffect(() => {
        // console.log("run use effect");
    }, [address]);

    useEffect(() => {
        // console.log("run use effect todos");
    }, [todos]);

    const handleEventClick = (event) => {
        if (!address) {
            alert("emtpy input");
            return;
        }
        //hook not merge state
        //...spread syntax array js
        let newTodo = { id: "abc", title: address, type: "eric" };
        setTodos([...todos, newTodo]);
        setAddress("");
    };

    const handleOnchangeInput = (event) => {
        setAddress(event.target.value);
    };

    const deleteDataTodo = (id) => {
        let currentTodos = todos;
        currentTodos = currentTodos.filter((item) => item.id !== id);
        setTodos(currentTodos);
    };

    const onTimesup = () => {
        alert("times up");
    };

    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    <Routes>
                        <Route path="/" exact element={<Covid />} />
                        <Route
                            path="/timer"
                            element={<NewCountDown onTimesup={onTimesup} />}
                        />
                        <Route
                            path="/todo"
                            element={
                                <ListTodo
                                    todos={todos}
                                    address={address}
                                    title={"All todos"}
                                    deleteDataTodo={deleteDataTodo}
                                    handleEventClick={handleEventClick}
                                    handleOnchangeInput={handleOnchangeInput}
                                />
                            }
                        ></Route>
                        <Route path="/blog" exact element={<Blog />} />
                        <Route path="/blog/:id" element={<DetailBlog />} />
                    </Routes>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
