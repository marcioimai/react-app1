import { NavLink } from "react-router-dom";

export default function Header({ onLogout }) {

    return (
        <header>
            <h1>Header</h1>

            <nav style={{ display: "flex" }}>
                <NavLink
                    style={
                        ({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            };
                        }
                    }
                    to="/">Início</NavLink>
                <NavLink
                    style={
                        ({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            };
                        }
                    }
                    to="/unidades">Unidades</NavLink>
                <NavLink
                    style={
                        ({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            };
                        }
                    }
                    to="/" onClick={onLogout}>Logout</NavLink>
            </nav>
        </header>
    )
}