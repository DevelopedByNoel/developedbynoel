import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/nbavatar.png';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div
            name="home" className="h-screen w-full bg-gradient-to-r from-cyan-400 to-teal-100 "
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    Hey, I'm Noel a Web Developer from South London.
                </h2>
                <div className="text-slate-900 py-4 max-w-md text-lg">
                <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("I am just beginning my journey as web developer. I am looking forward to creating amazing applications using React, Tailwind CSS and Next.js.")
                                    .callFunction(() => {
                                        console.log('String typed out');
                                    })
                                    .pauseFor(10)
                                    .callFunction(() => {
                                        console.log('All strings deleted');
                                    })
                                    .start();
                            }}
                        />
                   
                   </div>     
                <div>
                    <Link
                        to="about"
                        smooth
                        duration={500}
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-violet-300 cursor-pointer">
                        About Me
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight size={25} className="ml-3" />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img 
                src={me}
                alt="my-profile"
                className="rounded-2xl mx-auto w-2/2 md:w-full"
                />
            </div>
        </div>
        </div>
    )
}

export default Home;