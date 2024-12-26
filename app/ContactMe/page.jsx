"use client";

import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Basic validation (can be enhanced)
        if (!name || !email || !comment) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            // Send data to server (replace with your actual backend logic)
            let url = "https://my-portfolio-backend-wb2z.onrender.com/send-mail"
            // const response = await fetch(`${process.env.NEXT_PUBLIC_URL}send-mail`, {
                const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, comment }),
            });

            if (true) {
                alert('Message sent successfully!');
                // Clear form fields
                setName('');
                setEmail('');
                setComment('');
            } else {
                alert('Error sending message. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6 mt-5">Contact Me</h2>
            <form className="bg-gray-800 p-6 rounded-lg shadow-md max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-white">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="comment" className="block text-white">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 rounded bg-[#e11d48] text-white hover:bg-[#be163d]"
                    style={{
                        boxShadow: "0 5px 10px #e11d48"
                    }}
                >
                    SUBMIT
                </button>
            </form>

            {/* Social media links below the form */}
            <div className="mt-6">
                <div className="flex justify-center items-center space-x-8">
                    <a href="https://www.linkedin.com/in/anirban-goswami-a73930254/" target="_blank" rel="noopener noreferrer">
                        {/* <FaLinkedin className="text-white text-4xl hover:text-[#e11d48]" /> */}
                        <img className="h-16 w-16" src="/linkedln.png" alt="" />
                    </a>
                    <a href="https://x.com/Anirban2114" target="_blank" rel="noopener noreferrer">
                        {/* <FaTwitter className="text-white text-4xl hover:text-[#e11d48]" /> */}
                        <img className="h-16 w-16" src="/x.png" alt="" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anirbangoswami323@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img className='h-12 w-12' src="mail.png" alt="Mail Icon" />
                    </a>

                    <a href="https://github.com/AnirbanGoswamiban" target="_blank" rel="noopener noreferrer">
                        {/* <FaGithub className="text-white text-4xl hover:text-[#e11d48]" /> */}
                        <img className="h-16 w-16" src="/github2.jpg" alt="" />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ContactForm;
