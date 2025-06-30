import React, { useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="w-full">
                <nav className="bg-white border px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center w-full">
                    <h1 className="font-sans font-bold text-[16px] sm:text-[18px] md:text-[20px] pl-2 sm:pl-[32px] md:pl-[56px] lg:pl-[72px]">
                        Portofolio
                    </h1>
                    {/* Hamburger menu for mobile */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="focus:outline-none group"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className={`w-6 h-6 transition duration-200 ${menuOpen ? 'text-blue-600' : 'text-black'} group-hover:scale-110 group-hover:text-blue-500`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    transition: 'color 0.2s, transform 0.2s'
                                }}
                            >
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    {/* Desktop menu */}
                    <ul className="hidden md:flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 pr-2 sm:pr-[20px] md:pr-[32px] lg:pr-[40px]">
                        <li>
                            <a
                                href="#"
                                className="font-medium text-[#0D141C] font-sans leading-[18px] sm:leading-[21px] tracking-[0px] text-[12px] sm:text-[14px] md:text-[15px] hover:text-blue-600 transition"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="font-medium text-[#0D141C] font-sans leading-[18px] sm:leading-[21px] tracking-[0px] text-[12px] sm:text-[14px] md:text-[15px] hover:text-blue-600 transition"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="font-medium text-[#0D141C] font-sans leading-[18px] sm:leading-[21px] tracking-[0px] text-[12px] sm:text-[14px] md:text-[15px] hover:text-blue-600 transition"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="font-medium text-[#0D141C] font-sans leading-[18px] sm:leading-[21px] tracking-[0px] text-[12px] sm:text-[14px] md:text-[15px] hover:text-blue-600 transition"
                            >
                                About
                            </a>
                        </li>
                        <button
                            className='max-w-full sm:w-[88px] h-[36px] sm:h-[40px] bg-[#1A80E5] text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition'
                        >
                            <a
                                href="#"
                                className="font-sans font-bold text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] tracking-[0px] text-white block w-full"
                            >
                                Contact
                            </a>
                        </button>
                    </ul>
                    {/* Mobile dropdown menu with slide-down and fade-in animation */}
                    <div
                        className={`
                            fixed left-0 top-0 w-full max-w-full bg-white shadow-md z-50 md:hidden
                            transition-all duration-300 ease-in-out
                            ${menuOpen ? 'menu-open' : 'menu-closed'}
                        `}
                        style={{
                            willChange: 'transform, opacity',
                            transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s 0.2s'
                        }}
                    >
                        <ul className="flex flex-col items-center space-y-2 mt-[64px]">
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 font-medium text-[#0D141C] font-sans text-[15px] hover:text-blue-600 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 font-medium text-[#0D141C] font-sans text-[15px] hover:text-blue-600 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 font-medium text-[#0D141C] font-sans text-[15px] hover:text-blue-600 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 font-medium text-[#0D141C] font-sans text-[15px] hover:text-blue-600 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About
                                </a>
                            </li>
                            <div className='flex justify-center w-full p-4'>
                                <button
                                    className="w-full sm:w-[200px] h-[40px] bg-[#1A80E5] text-white rounded-lg hover:bg-blue-500 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <a
                                        href="#"
                                        className="font-sans font-bold text-[14px] leading-[21px] tracking-[0px] text-white block w-full"
                                    >
                                        Contact
                                    </a>
                                </button>
                            </div>
                        </ul>
                    </div>
                    {/* Overlay for mobile menu */}
                    {menuOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
                            onClick={() => setMenuOpen(false)}
                            style={{
                                animation: 'fadeInOverlay 0.2s'
                            }}
                        />
                    )}
                </nav>
            </div>
            {/* Custom keyframes for overlay fade-in and menu slide-down */}
            <style>{`
                @keyframes fadeInOverlay {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .menu-open {
                    transform: translateY(0);
                    opacity: 1;
                    pointer-events: auto;
                    transition-delay: 0.2s;
                }
                .menu-closed {
                    transform: translateY(-100%);
                    opacity: 0;
                    pointer-events: none;
                    transition-delay: 0s;
                }
            `}</style>
        </>
    )
}
