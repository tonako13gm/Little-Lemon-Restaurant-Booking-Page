import { Routes, Route, Link, Switch } from "react-router-dom"
import TestLink from "./TestLink"

function NavLinks () {
    return (
        <nav>
            <Link to="/" className="nav-item">Home</Link>
            <Link to='/try' className="nav-item">About</Link>
            <Link to="/" className="nav-item">Menu</Link>
            <Link to="/" className="nav-item">Reservations</Link>
            <Link to="/" className="nav-item">Order Online</Link>
            <Link to="/" className="nav-item">Login</Link>
            {/* <Routes>  */}
                {/* <Route path="/try" element={<TestLink />}></Route> */}
                {/* <Route path="../public/#root" component={TestLink} />
                <Route path="/about" element={<AboutLittleLemon />}></Route>
                <Route path="/contact" element={<Contact />}></Route> */}
            {/* </Routes>  */}
        </nav>
    )
}

export default NavLinks