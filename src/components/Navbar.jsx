import React, {useState } from "react";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPeronLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
 

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <h1 className="font-thin text-2xl italic font-serif">NG</h1>
            </div>
    {/* Menu */}
    <ul className="hidden md:flex gap-x-8">
        <li>
            <Link to='home' smooth={true} duration={500} >
            Home
            </Link>
        </li>
        <li>
            <Link to='about' smooth={true} duration={500} >
            About
            </Link>
            </li>
            <li>
            <Link to='skills' smooth={true} duration={500} >
            Skills
            </Link>
        </li>
        <li>
            <Link to='mywork' smooth={true} duration={500} >
            My Work
            </Link>
        </li>
        <li>
            <Link to='contact' smooth={true} duration={500} >
            Contact
            </Link>
        </li>
    </ul>
    <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
    </div>

{/* This is the menu for mobile */}
        </div>
    )
}


export default Navbar;
