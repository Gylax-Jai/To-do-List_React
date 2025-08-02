import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
            <nav className="navbar flex justify-around items-center p-4 bg-emerald-600 text-white shadow-xl relative">
                <div>
                    <a className="navbar-brand font-extrabold text-3xl neon" href="#"><h1>iTask</h1></a>
                </div>

                {/* Hamburger button */}
                <div className="md:hidden block">
                    <button onClick={toggleMenu}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <ul className='flex gap-10 list-none text-lg font-semibold'>
                        <li className='cursor-pointer hover:scale-[1.08] hover:text-black transition-all relative'>
                            <a href="#home">HOME</a>
                            <div className="underline-line"></div>
                        </li>
                        <li className='cursor-pointer hover:scale-[1.08] hover:text-black transition-all relative'>
                            <a href="#about">ABOUT</a>
                            <div className="underline-line"></div>
                        </li>
                        <li className='cursor-pointer hover:scale-[1.08] hover:text-black transition-all relative'>
                            <a href="#contact">CONTACT US</a>
                            <div className="underline-line"></div>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-emerald-600 shadow-lg md:hidden z-50">
                        <ul className='flex flex-col gap-4 p-4 text-lg font-semibold'>
                            <li className='cursor-pointer hover:text-black'><a href="#home">HOME</a></li>
                            <li className='cursor-pointer hover:text-black'><a href="#about">ABOUT</a></li>
                            <li className='cursor-pointer hover:text-black'><a href="#contact">CONTACT US</a></li>
                        </ul>
                    </div>
                )}
            </nav>

            <style>
                {`
                    .neon {
                        text-shadow:
                            0 0 5px #fff,
                            0 0 10px #0ff,
                            0 0 20px #0ff,
                            0 0 40px #0ff;
                    }
                    .underline-line {
                        height: 2px;
                        background: black;
                        width: 0%;
                    }
                    @keyframes animate {
                        from { width: 0%; }
                        to { width: 100%; }
                    }
                    li:hover .underline-line {
                        animation: animate 0.5s forwards;
                    }
                `}
            </style>
        </div>
    )
}

export default Navbar
