// app/contact/page.tsx

import React from "react";

const ContactPage = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white p-10">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center gap-10">

                {/* Contact Information Section */}
                <div className="contact-text mb-8 md:mb-0 md:w-1/2 lg:w-1/3 bg-gray-900 p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-white">Get in Touch</h2>
                    <p className="text-gray-400 mb-4">
                        Have a question, an idea, or a project in mind? I’m here to help bring your vision to life. Reach out via email at{" "}
                        <a href="mailto:hswati517@gmail.com" className="text-blue-400 hover:underline">
                            hswati517@gmail.com
                        </a> or use the form below to connect.
                    </p>

                    {/* Contact Details */}
                    <ul className="contact-list flex flex-col mt-4 space-y-4 text-gray-300">
                        <li className="flex items-center">
                            <i className="bx bxs-envelope text-blue-400 mr-3 text-xl" />
                            <span> hswati517@gmail.com</span>
                        </li>
                        <li className="flex items-center">
                            <i className="bx bxs-phone text-blue-400 mr-3 text-xl" />
                            <span>0318-8361229</span>
                        </li>
                    </ul>

                    {/* Social Media Icons */}
                    <div className="contact-icons flex mt-6 gap-4">
                        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition duration-300">
                            <i className="bx bxl-facebook-circle text-2xl" />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-blue-500 transition duration-300">
                            <i className="bx bxl-instagram text-2xl" />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-500 transition duration-300">
                            <i className="bx bxl-twitter text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/fatima-r-87a1472b5/" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-500 transition duration-300">
                            <i className="bx bxl-linkedin text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form w-full md:w-1/2 lg:w-1/3 bg-gray-900 p-6 rounded-lg shadow-lg">
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            required
                            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                        />
                        <textarea
                            placeholder="Message"
                            required
                            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full p-3 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default ContactPage;
