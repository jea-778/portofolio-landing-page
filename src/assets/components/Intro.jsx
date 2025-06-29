import React from 'react'

import profile from "../../../public/assets/Profile.jpg"
export default function IntroPersonalBrand() {
  return (
    <div className="flex items-center justify-center mt-[60px] ">
      <div className=''>
        <img
          src={profile}
          alt="Profile"
          className="w-[449px] h-[277px] rounded-lg shadow-lg mr-8 object-cover transition-transform duration-300 ease-in-out hover:shadow-2xl"
          style={{ aspectRatio: "16/10" }}
        />
      </div>
      <div>
        <h1 className="text-[48px] font-sans font-black leading-[60px] tracking-[-2px] pb-2 ">
          HI, I'm Jea, a <br /> Software Engineer
        </h1>
        <p className="text-[16px] font-regular font-normal leading-[24px] tracking-[0px] text-[#0D141C] pb-[32px] " id="profile-desc">
          I specialize in building scalable web applications and AI-<br />powered solutions. Explore my portfolio to see my work <br /> and skills.
        </p>
        <button
          className="w-[100%] h-[48px] bg-[#1A80E5] text-white rounded-lg font-semibold transition-transform shadow duration-200 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md"
        >
          View Projects
        </button>
      </div>
    </div>
  )
}
