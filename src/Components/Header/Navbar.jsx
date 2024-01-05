import { NavLink } from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="wrapper-navbar">
                <div className="navbar py-3">
                    <NavLink  className="nav-link text-light bar" to="/"><i class='bx bx-home'></i><span>Home</span></NavLink>
                    <NavLink  className="nav-link text-light bar" to="/products"><span>Products</span></NavLink>
                    <NavLink  className="nav-link text-light bar" to="/contact"><span>Contact</span></NavLink>
                    <NavLink  className="nav-link text-light bar" to="/about"><span>About</span></NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar