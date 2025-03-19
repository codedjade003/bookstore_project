import React, { useState, useEffect} from 'react'
import { Link } from 'react-router';

//react icons
import { FaBarsStaggered, FaBook, FaXmark } from "react-icons/fa6";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    // togle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    // navItems here
    const navItems = [
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        {link: "Blog", path: "/blog"},
        {link: "Shop", path: "/Shop"},
        {link: "Sell Your Book", path: "/admin/dashboard"},
    ]

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-6 lg:px-24 px-6 ${isSticky ? "sticky top-0 left-0 right-0 bg-red-300" : ""}`}>
            <div className='flex justify-between items-centre text-base gap-8'>
                {/* logo */}
                <Link to = "/" className = 'text-2xl font-bold text-red-700 flex items-center gap-2'><FaBook className='inline-block'/>Books</Link>

                {/* nav items for large devices */}
                <ul className='md:flex space-x-5 hidden flex items-end gap-4'>
                    {
                        navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-point hover:text-red-700'>{link}</Link>)
                    }
                </ul>
                {/* button for large devices */}
                <div className='space-x-5 hidden lg:flex items-centre'>
                    <button><FaBarsStaggered className='w-5 hover:text-red-700'/></button>
                </div>
                {/* button for large devices */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {isMenuOpen? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered  className='h-5 w-5 text-black'/>

                        }
                    </button>
                </div>
            </div>
            {/* navitems for sm devices */}
            <div className={`space-y-2 px-2 mt-18 py-3 bg-red-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-white uppercase'>{link}</Link>)
                }
            </div>
            
        </nav>
    </header>
  )
}

export default NavBar