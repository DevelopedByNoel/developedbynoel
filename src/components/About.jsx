import React, { useState } from "react";

import aboutpic from '../assets/1698927434837 (1).jpg'

const About = () => {
    return (
        <div
        name="about"
        id="about"
        className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="py-14 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-6 pl-4">
            <p className="text-4xl font-bold inline border-b-2 border-cyan-500">
            About Me!
            </p>
            </div>
            </div>
            
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className=" sm:text-right text-4xl font-bold ">
            <p>
                Hi, <p className="py-4">I'm Noel</p> 
            </p>
            {/* <div>
                <img 
                src={aboutpic}
                alt="my-profile"
                className=" sm:right-2 mx-auto px-6 py-5"
                />
            </div> */}
            </div>
            <p>
                {" "}
                I am just starting my career as a freelance web developer. <p className="py-2">In November 2022 
                I started a Front-End Web Development course and I've been addicted ever since. </p>
                <p>After completing the course I have been pushing myself to develop my skills further by any means 
                necessary!</p> <p className="py-2">Outside of web development, I am an Account Manager for a radiation detector manufacturer. 
                I also studied music production at university, and create my own music and DJ from time to time.</p>
                My other passions include Formula 1 and American Football (Raiders supporter here!).
                <p className="py-2">
                Anyway that's enough about me now, follow me on my journey to becoming an amazing web developer!</p>
            </p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default About