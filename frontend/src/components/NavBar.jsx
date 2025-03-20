import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'; // ✅ Fixed incorrect import

// React icons
import { FaBarsStaggered, FaBook, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../context/AuthProvider';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const { user } = useContext(AuthContext);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Nav Items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Blog", path: "/blog" },
        { link: "Shop", path: "/Shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
    ];

    return (
        <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
            <nav className={`py-6 lg:px-24 px-6 ${isSticky ? "sticky top-0 left-0 right-0 bg-red-300" : ""}`}>
                <div className="flex justify-between items-center text-base gap-8">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-red-700 flex items-center gap-2">
                        <FaBook className="inline-block" />Books
                    </Link>

                    {/* Desktop Nav Items */}
                    <ul className="md:flex space-x-5 hidden items-end gap-4">
                        {navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-red-700">
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/* User Info & Button for Large Screens */}
                    <div className="space-x-5 hidden lg:flex items-center">
                        <button><FaBarsStaggered className="w-5 hover:text-red-700" /></button>
                        {user ? user.email : ""}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Moved Down with `mt-12`) */}
                <div className={`space-y-2 px-2 mt-12 py-3 bg-red-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} to={path} className="block text-base text-white uppercase">{link}</Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
