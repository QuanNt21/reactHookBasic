import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                // exact={true}
            >
                Home
            </NavLink>
            <NavLink
                to="/todo"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Todo App
            </NavLink>
            <NavLink
                to="/timer"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Timer App
            </NavLink>
            <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Blogs App
            </NavLink>
            {/* <NavLink
                to="/secret"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Secret
            </NavLink> */}
        </div>
    );
};

export default Nav;
