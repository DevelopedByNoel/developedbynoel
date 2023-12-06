import React from "react";

const Contact = () => {
    return (
        <div name='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <div className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">Contact Me</p>
                    <p className="text-gray-300 py-4">Have you got a project in mind that you need some help with? Send me a message and we can discuss your idea further and bring it to life!</p>
                </div>
                    <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name='name' />
                    <input className="my-4 bg-[#ccd6f6] p-2" type="text" placeholder="Email" name='email' />
                    <textarea className="bg-[#ccd6f6] p-2" name='message' rows="10" placeholder="Message"></textarea>
                    <button className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-6 py-2 my-4 mx-auto flex items-center">Send</button>
            </div>
        </div>
    )
}

export default Contact;