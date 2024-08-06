import { Link } from "react-router-dom"

function NavLinks () {
    return (
        <>
            <Link to="/" className="nav-item">Home</Link>
            <Link to='/try' className="nav-item">About</Link>
            <Link to="/" className="nav-item">Menu</Link>
            <Link to="/" className="nav-item">Reservations</Link>
            <Link to="/" className="nav-item">Order Online</Link>
            <Link to="/" className="nav-item">Login</Link>
        </>
    )
}

export default NavLinks