import React from 'react'

export default function Projects() {
    return (
        <>
            <div className="flex justify-between items-center pt-5">
                <h1 className="font-bold leading-7 tracking-0 pl-[325px] 
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
                <div className="flex flex-col items-center">
                    <img
                        className="
          w-[285px] h-[169px] bg-[#F5F5F5] rounded-lg shadow-md
          xl:w-[285px] xl:h-[169px]
          lg:w-[240px] lg:h-[140px]
          md:w-[200px] md:h-[120px]
          sm:w-full sm:h-[180px]
          object-cover
        "
                        alt="AI Chatbot with OpenAI"
                    />
                    <div className="
        flex flex-col gap-1 pt-3
        w-[285px] xl:w-[285px] lg:w-[240px] md:w-[200px]
        sm:max-w-[285px] sm:w-full
        ">
                        <h1 className="font-medium text-[#0D141C]
          text-base xl:text-base lg:text-[15px] md:text-[14px] sm:text-[13px]
        ">
                            AI Chatbot with OpenAI
                        </h1>
                        <p className="text-[#4F7396] leading-[21px] tracking-[0px]
          text-[14px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px]
        ">
                            This project is a simple chatbot that uses the OpenAI API to generate responses to user queries.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        className="
          w-[285px] h-[169px] bg-[#F5F5F5] rounded-lg shadow-md
          xl:w-[285px] xl:h-[169px]
          lg:w-[240px] lg:h-[140px]
          md:w-[200px] md:h-[120px]
          sm:w-full sm:h-[180px]
          object-cover
        "
                        alt="A Digital Book Note"
                    />
                    <div className="
        flex flex-col gap-1 pt-3
        w-[285px] xl:w-[285px] lg:w-[240px] md:w-[200px]
        sm:max-w-[285px] sm:w-full
        ">
                        <h1 className="font-medium text-[#0D141C]
          text-base xl:text-base lg:text-[15px] md:text-[14px] sm:text-[13px]
        ">
                            A Digital Book Note
                        </h1>
                        <p className="text-[#4F7396] leading-[21px] tracking-[0px]
          text-[14px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px]
        ">
                            This project is a digital note-taking application that allows users to create, edit, and organize their notes.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        className="
          w-[285px] h-[169px] bg-[#F5F5F5] rounded-lg shadow-md
          xl:w-[285px] xl:h-[169px]
          lg:w-[240px] lg:h-[140px]
          md:w-[200px] md:h-[120px]
          sm:w-full sm:h-[180px]
          object-cover
        "
                        alt="Portfolio Website"
                    />
                    <div className="
        flex flex-col gap-1 pt-3
        w-[285px] xl:w-[285px] lg:w-[240px] md:w-[200px]
        sm:max-w-[285px] sm:w-full
        ">
                        <h1 className="font-medium text-[#0D141C]
          text-base xl:text-base lg:text-[15px] md:text-[14px] sm:text-[13px]
        ">
                            Portfolio Website
                        </h1>
                        <p className="text-[#4F7396] leading-[21px] tracking-[0px]
          text-[14px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px]
        ">
                            This project is a personal portfolio website that showcases my skills, projects, and experience.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
