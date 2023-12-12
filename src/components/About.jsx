import React from 'react';

const About = () => {
    return (
        <div
        name="about"
        id="about"
        className="w-full h-screen bg-gradient-to-r from-cyan-400 to-teal-100 text-slate-900">
            <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="py-14 rounded-md bg-gradient-to-r from-indigo-500 to-violet-300 flex flex-col justify-center items-center w-4/6">
            <div className="max-w-[1000px] w-full mb-4">
            <div className="sm:text-center pb-6 pl-4">
            <p className="text-4xl font-bold inline border-b-2 border-cyan-500">
            About Me!
            </p>
            </div>
            </div>
            
            <div className="max-w-[1000px] w-full gap-8 px-4">
            <div className=" sm:text-center text-4xl font-bold ">
            
            {/* <div>
                <img 
                src={aboutpic}
                alt="my-profile"
                className=" sm:right-2 mx-auto px-6 py-5"
                />
            </div> */}
            </div>
            <p className='text-lg font-semibold'>
                {" "}
                I'm a freelance web developer living in Croydon, South London. <p className="py-2">In November 2022 
                I started a Front-End Web Development course and I've been addicted ever since. 
                After completing the course I have been pushing myself to develop my skills further by any means 
                necessary! Although I am relatively new to the tech industry, I am an exceptionally hard worker and 
                will always make sure my clients get what they want and will provide the best customer service possible.</p> <p className='py-2'>I want to work with businesses and organisations to provide them with visually pleasing and functional websites. </p> <p className="py-2">Outside of web development, I am an Account Manager for a radiation detector manufacturer. 
                I also studied music production at university and graduated in 2014.</p> <p>I also create my own music (mainly Electronic music) and DJ from time to time.</p>
                <p className='py-2'>My other passions include Formula 1 and American Football (Raiders supporter here!).</p>
                <p className="py-2">
                If you have any exciting projects that you need help with, please contact me and I will be more than happy to discuss some great ideas with you.</p>
            </p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default About