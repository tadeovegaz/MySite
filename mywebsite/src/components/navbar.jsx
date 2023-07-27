import { Link } from "react-router-dom";
import "../css/navbar.css"


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h3 className="logo">Logo</h3>
                <ul className="nav-links">
                    <Link to='/' className='home'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about' className='home'>
                        <li>About</li>
                    </Link>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;