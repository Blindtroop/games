import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import logo from './assets/logo.png'; // Adjust the path as needed

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        document.body.classList.toggle('no-scroll');
    };

    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
    };

    return (
        <header>
            <img src={logo} alt="Logo" className="logo" />
            <nav ref={navRef}>
                <Link to="home-container" smooth={true} duration={900} onClick={hideNavbar}>Home</Link>
                <Link to="about" smooth={true} duration={900} onClick={hideNavbar}>About</Link>
                <Link to="contact-us" className='contact' smooth={true} duration={900} onClick={hideNavbar}>Contact Us</Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={hideNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
