import React from "react";

const Skills = () => {
    return (
        <div name='skills' className="w-full h-screen bg-gradient-to-r from-cyan-400 to-teal-100 text-slate-900">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
                <p className="text-4xl font-bold py-4 inline border-b-4 border-violet-200 text-center " >Skills</p>
                <p className="py-4 text-2xl text-center text-slate-800 font-semibold">I am always looking to improve myself and learn new things. Here is a list of technologies I have used so far on my development journey:</p>


                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-white font-semibold">
                    <div className="shadow-md shadow-[#040c16] bg-gradient-to-r from-indigo-500 to-violet-300 hover:scale-110 duration-500">
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] bg-gradient-to-r from-indigo-500 to-violet-300 hover:scale-110 duration-500">
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] bg-gradient-to-r from-indigo-500 to-violet-300 hover:scale-110 duration-500">
                        <p className="my-4">Javascript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] bg-gradient-to-r from-indigo-500 to-violet-300 hover:scale-110 duration-500">
                        <p className="my-4">React</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] bg-gradient-to-r from-indigo-500 to-violet-300 hover:scale-110 duration-500">
                        <p className="my-4">Next.js</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] bg-gradient-to-r from-indigo-500 to-violet-300 hover:scale-110 duration-500">
                        <p className="my-4">Tailwind CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] bg-gradient-to-r from-indigo-500 to-violet-300 hover:scale-110 duration-500">
                        <p className="my-4">Node.js</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] bg-gradient-to-r from-indigo-500 to-violet-300 hover:scale-110 duration-500">
                        <p className="my-4">MongoDB</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills;
