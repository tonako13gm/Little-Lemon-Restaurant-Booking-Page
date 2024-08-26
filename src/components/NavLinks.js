import { Link } from "react-router-dom"

function NavLinks () {
    return (
        <>
            <Link to="/" >Home</Link>
            <Link to='/about' >About</Link>
            <Link to="/Under_Maintenace" >Menu</Link>
            <Link to="/Under_Maintenace" >Reservations</Link>
            <Link to="/booking" >Order Online</Link>
            <Link to="/Under_Maintenace" >Login</Link>
            <Link to="/Under_Maintenace" >Login</Link>
        </>
    )
}

export default NavLinks