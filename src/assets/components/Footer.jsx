import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-gradient-to-t from-[#0D3B66] via-[#1E3A8A] to-transparent text-white pt-16 px-8 border-t border-white/10 mt-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                    {/* About Me */}
                    <div>
                        <h1 className="text-2xl font-bold tracking-wider mb-4">About Me</h1>
                        <p className="text-white/80 text-sm leading-relaxed max-w-xl">
                            I am a passionate software engineer with a strong background in AI and web development. I enjoy solving complex problems and creating innovative solutions. My goal is to leverage technology to make a positive impact on the world.
                        </p>
                    </div>

                    {/* Links & Social */}
                    <div className="flex flex-col items-end gap-6 p-6">
                        <div className="flex flex-col gap-2">
                            <a href="#" className="text-white/70 hover:text-blue-400 text-sm">Resume</a>
                            <a href="#" className="text-white/70 hover:text-blue-400 text-sm">Contact</a>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <img src="/assets/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
                            <img src="/assets/icons/github.png" alt="GitHub" className="w-6 h-6 hover:opacity-80 transition" />
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-white/40 text-sm tracking-wide p-6">
                    © 2025 JDRE Portfolio. All rights reserved.
                </div>
            </footer>

        </>
    )
}
