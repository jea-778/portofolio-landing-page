import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="h-[500px] ">
                <div className=" flex flex-col pl-[325px] pt-10 gap-4">
                    <h1 className="text-[22px] font-bold leading-7 tracking-0" >About Me</h1>
                    <p className="text-[16px] leading-[24px] tracking-0">
                        I am a passionate software engineer with a strong background in AI and web development.
                        I enjoy solving complex <br /> problems and creating innovative solutions.
                        My goal is to leverage technology to make a positive impact on the world.
                    </p>
                </div>

                <div className="flex justify-around items-center pt-10 gap-4">
                    <h2 className="text-[16px] text-[#4F7396] leading-[24px] tracking-0 pt-10">
                        Resume
                    </h2>
                    <h2 className="text-[16px] text-[#4F7396] leading-[24px] tracking-0 pt-10">
                        Contact
                    </h2>
                </div>

                <div className="flex justify-center items-center pt-10 gap-4">
                    <img src="../../../public/assets/icons/linkedin.png" alt="" />
                    <img src="../../../public/assets/icons/github.png" alt="" />
                </div>

                <div className="flex font-sans justify-center items-center pt-10">
                    <p className="text-[16px] text-[#4F7396] leading-[24px] tracking-0 pt-10">
                        @2025 Jea Portfolio
                    </p>
                </div>
            </footer>
        </>
    )
}
