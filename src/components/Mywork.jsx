import React from "react";

const Mywork = () => {
    return (
        <div name='work' className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 w-full flex justify-center items-center flex-col">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">My Work</p>
                    <p className="py-6 text-2xl">Here are some of the projects that I have worked on.</p>
                </div>
            </div>
        </div>
    )
}

export default Mywork;