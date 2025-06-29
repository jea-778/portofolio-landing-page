export default function Navbar() {
    return (
        <>
            <div>
                <nav className="bg-white border px-6 py-4 flex justify-between items-center">
                    <h1 className="font-sans font-bold text-[18px] pl-[72px] ">Portofolio</h1>
                    <ul className="flex justify-center items-center space-x-8 pr-[40px]">
                        <li>
                            <a href="#" className="font-medium text-[#0D141C] font-sans leading-[21px] tracking-[0px] text-[14px] hover:text-blue-600 transition">Home</a>
                        </li>
                        <li>
                            <a href="#" className="font-medium text-[#0D141C] font-sans leading-[21px] tracking-[0px] text-[14px] hover:text-blue-600 transition">Skills</a>
                        </li>
                        <li>
                            <a href="#" className="font-medium text-[#0D141C] font-sans leading-[21px] tracking-[0px] text-[14px] hover:text-blue-600 transition">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="font-medium text-[#0D141C] font-sans leading-[21px] tracking-[0px] text-[14px] hover:text-blue-600 transition">About</a>
                        </li>
                        <button className="w-[88px] h-[40px]  bg-[#1A80E5] text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                            <a href="#" className="font-sans font-bold text-[14px] leading-[21px] tracking-[0px] text-white ">Contact</a>
                        </button>
                    </ul>
                </nav>
            </div></>
    )
}
