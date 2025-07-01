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
        <div className="relative w-full overflow-hidden rounded-2xl shadow border border-[#E5E7EB]">
            <img
                src={images[index]}
                alt={`Project ${index + 1}`}
                className="w-full h-[650px]

                        object-cover bg-[#F5F5F5] rounded-lg shadow-md"
            />
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2563EB] px-3 py-1 rounded-full shadow"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2563EB] px-3 py-1 rounded-full shadow"
            >
                ›
            </button>
        </div>
    );
};

export default function Projects() {
    return (
        <div className='w-[90%] bg-white/10 p-9 backdrop-blur-md border border-white/10 rounded-xl mt-10 text-white shadow-xl mx-auto'>
            <div className="flex justify-center pb-5">
                <h1 className="font-bold text-white/90 leading-7 tracking-0 
        text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px]">
                    Projects
                </h1>
            </div>

            <section
                className="
        flex justify-center items-center pt-4 gap-3
        xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col
      "
            >
                <div className="w-full rounded-3xl">
                    <ProjectSlider images={["../../../public/assets/images/project1.webp", "../../../public/assets/images/project2.webp", "../../../public/assets/images/project3.jpg"]} />
                </div>


            </section >
        </div>
    )
}
