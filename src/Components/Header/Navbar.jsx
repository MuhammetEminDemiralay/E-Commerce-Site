import { NavLink } from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="wrapper-navbar">
                <div className="navbar py-3">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink  className="nav-link" to="/about">About</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar