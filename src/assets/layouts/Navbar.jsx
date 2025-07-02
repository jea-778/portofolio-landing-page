import { div } from 'framer-motion/client';
import React, { useState, useEffect } from 'react'


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 430);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <>
            <div className="flex w-full">
                <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#B983FF]/100 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

                <nav
                    className={`fixed top-4 z-50 left-[45%] flex items-center justify-center transition-all duration-300 ease-in-out
                                ${scrolled && 'flex left-[600px] gap-9 px-4 py-2 bg-white/10 backdrop-blur rounded-xl transition-all duration-300 ease-in-out'}
                            `}
                >

                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#ffffff"><path d="M400-160h160v-160H400v160ZM160-400h160v-160H160v160Zm240 0h160v-160H400v160Zm240 0h160v-160H640v160Zm0-240h160v-160H640v160ZM320-80v-240H80v-320h480v-240h320v560H640v240H320Z" /></svg>
                        <a href='#' className="font-[900] text-white text-[24px] fon-sora drop-shadow-[0_2px_6px_rgba(26,128,229,0.6)] select-none">
                            JDRE
                        </a>
                    </div>
                    {scrolled && (
                        <div className='grid grid-cols-2 gap-3'>
                            <button className="w-full px-2 py-2 text-sm border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1A80E5] transition-transform shadow duration-200 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md">
                                View Projects
                            </button>
                            <button className="w-full px-2 py-2 text-sm border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1A80E5] transition-transform shadow duration-200 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md">
                                About Me
                            </button>
                        </div>
                    )}


                    {/* Hamburger menu for mobile */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className='focus:outline-none group'
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
