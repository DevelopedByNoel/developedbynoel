import React, { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-cyan-400 to-teal-100 text-black shadow-md shadow-violet-100">
            <div>
                <h1 className="font-thin text-2xl font-serif">Developed by Noel</h1>
            </div>
            {/* Menu */}
            <ul className="hidden md:flex gap-x-8 font-semibold">
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
            <ul className={
                !nav
                    ? 'hidden'
                    : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='mywork' smooth={true} duration={500}>
                        My Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-100px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-100px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-100px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="/">
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-100px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Navbar;
