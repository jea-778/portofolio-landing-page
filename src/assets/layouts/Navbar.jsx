import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
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
                <div className="w-[700px] h-[500px] absolute top-[-150px] left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#B983FF]/100 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
                <nav
                    className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center transition-all duration-300 ease-in-out
                                ${scrolled && 'w-[90%] sm:w-auto flex justify-between items-start px-3 py-2 gap-4 sm:gap-6 md:gap-9 2xl:gap-12 bg-white/10 backdrop-blur rounded-xl transition-all duration-300 ease-in-out'}
                            `}
                >

                    <div className='flex justify-center items-center cursor-pointer'>
                        <svg
                            className="
                            2xl:w-[28px] 2xl:h-[28px]
                            lg:w-[26px]  lg:h-[26px]
                            md:w-[24px]  md:h-[24px]
                            w-[18px]     h-[18px]
                            "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            fill="#ffffff"><path d="M400-160h160v-160H400v160ZM160-400h160v-160H160v160Zm240 0h160v-160H400v160Zm240 0h160v-160H640v160Zm0-240h160v-160H640v160ZM320-80v-240H80v-320h480v-240h320v560H640v240H320Z" /></svg>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="font-[900] text-white text-base sm:text-md md:text-xl 2xl:text-2xl font-sora drop-shadow-[0_2px_6px_rgba(26,128,229,0.6)] select-none">
                            JDRE
                        </Link>
                    </div>

                    {scrolled && (
                        <div className='grid grid-cols-2 gap-1'>
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="w-full text-[14px] md:text-base lg:text-md text-white rounded-lg font-semibold hover:text-[gold] cursor-pointer whitespace-nowrap">
                                View Projects
                            </Link>
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="w-full px-3 text-[14px] md:text-base lg:text-md text-white rounded-lg font-semibold hover:text-[gold] cursor-pointer whitespace-nowrap">
                                About Me
                            </Link>
                        </div>
                    )}
                </nav>
            </div>
        </>
    )
}
