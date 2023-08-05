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
            <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <Link to='/' className='home'>
                    <li>Hello</li>
                </Link>
                <Link to='/about' className='home'>
                    <li>About</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)} >
                {Mobile ? <FiX /> : <FaBars />}
            </button>
        </nav>
    )
}

export default Navbar;