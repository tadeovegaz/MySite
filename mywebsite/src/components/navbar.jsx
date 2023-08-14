import { Link } from "react-router-dom";
import "../css/navbar.css"
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useState } from "react";
import { FiX } from "react-icons/fi";


const Navbar = () => {
    const [Mobile, setMobile] = useState(false)

    return (
        <nav className="navbar">
            <h3 className="logo pl-4">icoris</h3>
        </nav>
    )
}

export default Navbar;