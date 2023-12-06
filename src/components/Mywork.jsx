import React from "react";
import skillmatch from "../assets/skillmatchNavbarLogo.jpg";

const Mywork = () => {
    return (
        <div name='mywork' className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 w-full flex justify-center items-center flex-col">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">My Work</p>
                    <p className="py-6 text-2xl">Here are some of the projects that I have worked on.</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div style={{ backgroundImage: `url(${skillmatch})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                            <span className="text-lg font-bold text-white tracking-wider">
                                Skill Match
                            </span>
                            <p className="text-center">A job search application that allows you to match your skills with your job search. <p className="py-2">Built with React.</p></p>
                            <div className="pt-8 text-center">
                                <a href='https://skillmatch-jobs.netlify.app/'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Link
                                    </button>
                                </a>
                                <a href='https://github.com/ngalvin1991/skillmatch'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div> 

                    <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                            <span className="text-lg font-bold text-white tracking-wider">
                                Coming Soon
                            </span>
                            <p className="text-center">""<p className="py-2">Built with ""</p></p>
                            <div className="pt-8 text-center">
                                <a href='/'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Link
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div> 

                    <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                            <span className="text-lg font-bold text-white tracking-wider">
                                Coming Soon
                            </span>
                            <p className="text-center">""<p className="py-2">Built with ""</p></p>
                            <div className="pt-8 text-center">
                                <a href='/'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Link
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div> 
                    

                </div>
            </div>
        </div>
    )
}

export default Mywork;