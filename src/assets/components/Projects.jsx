import React, { useState } from 'react';

const ProjectSlider = ({ images }) => {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full overflow-hidden rounded-2xl">
            <img
                src={images[index]}
                alt={`Project ${index + 1}`}
                className="w-full h-[650px] object-cover bg-[#F5F5F5] rounded-lg shadow-md cursor-grab"
            />
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 
                    bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500
                    text-white p-3 rounded-full shadow-lg
                    transition-transform duration-150 active:scale-90
                    hover:scale-105 hover:from-blue-600 hover:to-purple-600
                    focus:outline-none border-2 border-white/40"
                aria-label="Previous Slide"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="inline" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 
                    bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500
                    text-white p-3 rounded-full shadow-lg
                    transition-transform duration-150 active:scale-90
                    hover:scale-105 hover:from-blue-600 hover:to-purple-600
                    focus:outline-none border-2 border-white/40"
                aria-label="Next Slide"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="inline" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default function Projects({ projectName }) {
    return (
        <div className='w-[90%] bg-white/10 p-9 backdrop-blur-md border border-white/10 rounded-xl mt-10 text-white shadow-xl mx-auto'>
            <div className="flex justify-center pb-5">
                <h1 className="font-bold text-white/90 leading-7 tracking-0 
        text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px]">
                    {projectName}
                </h1>
            </div>

            <section
                className="
        flex justify-center items-center pt-4 gap-3
        xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col
      "
            >
                <div className="w-full rounded-3xl">
                    <ProjectSlider images={["../../../public/assets/images/Project1.png", "../../../public/assets/images/Project2.png", "../../../public/assets/images/Project3.png"]} />
                </div>


            </section >
        </div>
    )
}
