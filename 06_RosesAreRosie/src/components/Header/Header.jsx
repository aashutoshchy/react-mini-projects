import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='w-full py-4 flex'>
            <nav className='w-full h-full flex items-center justify-between gap-6 px-5 md:px-30'>
                <div>
                    <Link to="/">
                        <img src="https://www.rosesarerosie.com/sites/g/files/g2000019111/files/2024-09/Rosie%20Logo.svg" alt="" className='h-5' />
                    </Link>
                </div>
                <ul className='sm:flex gap-5 hidden font-semibold text-sm'>
                    <li><NavLink to="/" className={({ isActive }) => `${isActive ? "text-[#9A1829]" : "text-black"} font-semibold hover:font-bold`}>HOME</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => `${isActive ? "text-[#9A1829]" : "text-black"} font-semibold hover:font-bold`}>ABOUT</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-[#9A1829]" : "text-black"} font-semibold hover:font-bold`}>CONTACT</NavLink></li>
                    <li><NavLink to="/catalog" className={({ isActive }) => `${isActive ? "text-[#9A1829]" : "text-black"} font-semibold hover:font-bold`}>CATALOG</NavLink></li>
                </ul>
                <div className='flex gap-4'>
                    <button className='bg-[#9A1829] text-white text-sm px-5 py-1 rounded-3xl hidden md:block'>Login</button>
                    <button className='bg-gray-400 text-black text-sm px-5 py-1 rounded-3xl  hidden md:block'>Signup</button>
                </div>
                <div className='text-[#9A1829] font-extrabold text-xl sm:hidden'>☰</div>
            </nav>
        </header>
    )
}

export default Header
