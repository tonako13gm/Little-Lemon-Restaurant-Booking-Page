import { Routes, Route, Link } from "react-router-dom"
import TestLink from "../components/testLink"

function NavLinks () {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Menu</Link>
            <Link to="/">Reservations</Link>
            <Link to="/">Order Online</Link>
            <Link to="/">Login</Link>
            <Routes> 
                <Route path="../components/TestLink" element={<TestLink />}></Route>
                {/* <Route path="/about" element={<AboutLittleLemon />}></Route>
                <Route path="/contact" element={<Contact />}></Route> */}
            </Routes> 
        </>
    )
}

export default NavLinks