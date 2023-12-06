import React from "react";
import { useState } from 'react';
import {send} from 'emailjs-com';

const Contact  = () => {
    const [toSend, setToSend] =useState({
        first_name: '',
        last_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_2cwl3x5',
            'template_h66l8pa',
            toSend,
            '9uS9ebygUsaG8uK_7'
        )
        .then((response) => {
            console.log('SUCCESS', response.status, response.text)
        })
        .catch((err) => {
            console.log('FAILED...', err);
        })
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div name='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <div className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">Contact Me</p>
                    <p className="text-gray-300 py-4">Have you got a project in mind that you need some help with? Send me a message and we can discuss your idea further and bring it to life!</p>
                </div>
                    <form onSubmit={onSubmit}>
                    <input className="bg-[#ccd6f6] p-2" type="text" placeholder="First Name" name='first_name' value={toSend.first_name} onChange={handleChange} />
                    <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Last Name" name='last_name' value={toSend.last_name} onChange={handleChange} />
                    <input className="my-4 bg-[#ccd6f6] p-2" type="text" placeholder="Your Email" name='reply_to' value={toSend.reply_name} onChange={handleChange} />
                    <textarea className="bg-[#ccd6f6] p-2" name='message' rows="10" placeholder="Message"></textarea>
                    <button className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-6 py-2 my-4 mx-auto flex items-center" type="submit">Send</button>
                    </form>
            </div>
        </div>
    )
}

export default Contact;