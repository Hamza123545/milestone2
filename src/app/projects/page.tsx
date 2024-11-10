// app/projects/page.tsx

import React from 'react';
import Image from 'next/image';

const ProjectsPage: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-200" id="projects">
            <div className="container mx-auto px-6">
                
                {/* Page Title */}
                <div className="main-text text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">
                        My Recent <span className="text-purple-600">Projects</span>
                    </h2>
                    <p className="text-gray-600 mt-3 text-lg">A showcase of my recent work in web development</p>
                </div>

                {/* Project Grid */}
                <div className="grid gap-12 md:grid-cols-2">
                    
                    {/* Project Card: Car Information Website */}
                    <div className="project-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-purple-700 mb-2">AUTOWORLD</h3>
                        <p className="text-gray-700 mb-4">
                            <span>Welcome to Our Car Information Hub!

This site is crafted to bring car enthusiasts closer to the details they value. Built with HTML, CSS, and JavaScript, our platform offers sleek, user-friendly navigation, and clean, responsive design. Whether you're exploring car features, specs, or comparing models, this site aims to provide clear, visually engaging, and informative insights.</span>
                        </p>
                        <a 
                            href="https://github.com/Hamza123545/Auto-World-Car-Website.git" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block mb-4 text-blue-500 hover:underline"
                        >
                            GitHub Repository
                        </a>
                        <Image
                            src="/car.png"
                            alt="Analog Clock Project Screenshot"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-md border"
                        />
                    </div>

                    {/* Project Card: Calculator */}
                    <div className="project-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-purple-700 mb-2">Resueme Builder</h3>
                        <p className="text-gray-700 mb-4">
                        Developed with HTML, CSS, and TypeScript, this Resume Builder is a streamlined tool designed to help users create personalized, professional resumes. The platform's clean interface and interactive form fields make it easy to input and organize career details, skills, and accomplishments. Leveraging TypeScript ensures type safety and reliability, enhancing both development efficiency and user experience. With a focus on responsive design, this project adapts seamlessly to various screen sizes, making resume building accessible on any device.
                        </p>
                        <a 
                            href="https://github.com/Hamza123545/Hackathon-Milestones" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block mb-4 text-blue-500 hover:underline"
                        >
                            GitHub Repository
                        </a>
                        <Image
                            src="/CV.png"
                            alt="Calculator Project Screenshot"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-md border"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
