import { Link } from "react-router-dom"

export function Navbar() {
    return (
    <nav className="nav-bar">
        <Link to="/Home" className="main-site">Home Page</Link>
        <ul>
            <li>
                <Link to="/AddCards" className="pokemonCards">Add Pokemon Cards</Link>
            </li>
            <li>
                <Link to="/AllCards" className="pokemonCards">All Cards</Link>
            </li>
        </ul>
    </nav>
    )
}