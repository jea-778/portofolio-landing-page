import React from 'react'
import { motion } from 'framer-motion';

import profile from '../../../public/assets/images/Profile.jpg'

export default function IntroPersonalBrand() {
  return (
    <div className="flex items-center justify-center mt-[150px] ">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}>
        <img
          src={profile}
          alt="Profile"
          className="w-[449px] h-[277px] rounded-lg shadow-lg mr-8 object-cover transition-transform duration-300 ease-in-out hover:shadow-2xl"
          style={{ aspectRatio: "16/10" }}
        />
      </motion.div>
      <div>
        <h1 className="text-[48px] font-black leading-[60px] tracking-[-2px] pb-2 text-white">
          HI, I'm Jea Darmarifa<br />a Software Engineer
        </h1>
        <p className="text-[16px] leading-[24px] pb-[32px] text-[#E2E8F0]">
          I specialize in building scalable web applications and AI-<br />powered solutions. Explore my portfolio to see my work <br /> and skills.
        </p>

        <div className='grid grid-cols-2 gap-3'>
          <button className="w-full h-[48px] border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1A80E5] transition-transform shadow duration-200 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md">
            View Projects
          </button>
          <button className="w-full h-[48px] border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1A80E5] transition-transform shadow duration-200 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md">
            About Me
          </button>
        </div>

      </div>
    </div>
  )
}
