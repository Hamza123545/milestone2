// app/services/page.tsx

import { FaHtml5, FaCss3Alt, FaJs, FaAngular, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiCsharp, SiDotnet } from 'react-icons/si';

const ServicesPage = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100" id="services">
            <div className="container mx-auto px-6">
                
                {/* Page Title */}
                <h1 className="text-4xl font-bold text-center mb-12">
                    <span className="text-purple-600">My</span> Skills
                </h1>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    
                    {/* HTML */}
                    <div className="service-card bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <FaHtml5 className="text-5xl text-orange-600 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">HTML</h2>
                        <p className="text-gray-600 mb-6">
                            Building the structural foundation of web applications with semantic HTML.
                        </p>
                    </div>

                    {/* CSS */}
                    <div className="service-card bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <FaCss3Alt className="text-5xl text-blue-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">CSS</h2>
                        <p className="text-gray-600 mb-6">
                            Styling websites for responsive, visually appealing, and consistent design.
                        </p>
                    </div>

                    {/* JavaScript */}
                    <div className="service-card bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <FaJs className="text-5xl text-yellow-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">JavaScript</h2>
                        <p className="text-gray-600 mb-6">
                            Creating interactive functionality and enhancing user experience.
                        </p>
                    </div>

                    {/* TypeScript */}
                    <div className="service-card bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <SiTypescript className="text-5xl text-blue-600 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">TypeScript</h2>
                        <p className="text-gray-600 mb-6">
                            Building reliable, scalable applications with static typing.
                        </p>
                    </div>

                    {/* AngularJS */}
                    <div className="service-card bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <FaAngular className="text-5xl text-red-600 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">AngularJS</h2>
                        <p className="text-gray-600 mb-6">
                            Developing dynamic single-page applications with Angular’s robust framework.
                        </p>
                    </div>

                    {/* Next.js */}
                    <div className="service-card bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <SiNextdotjs className="text-5xl text-gray-800 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Next.js</h2>
                        <p className="text-gray-600 mb-6">
                            Leveraging server-side rendering for optimized and SEO-friendly web applications.
                        </p>
                    </div>

                    {/* PHP */}
                    <div className="service-card bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <FaPhp className="text-5xl text-purple-700 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">PHP</h2>
                        <p className="text-gray-600 mb-6">
                            Developing efficient backend systems and server-side logic.
                        </p>
                    </div>

                    {/* SQL Server */}
                    <div className="service-card bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <FaDatabase className="text-5xl text-indigo-600 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">SQL Server</h2>
                        <p className="text-gray-600 mb-6">
                            Managing databases and optimizing queries for robust data storage solutions.
                        </p>
                    </div>

                    {/* C# */}
                    <div className="service-card bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <SiCsharp className="text-5xl text-green-600 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">C#</h2>
                        <p className="text-gray-600 mb-6">
                            Utilizing C# for object-oriented programming and developing powerful applications.
                        </p>
                    </div>

                    {/* ASP.NET Core */}
                    <div className="service-card bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <SiDotnet className="text-5xl text-purple-600 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">ASP.NET Core</h2>
                        <p className="text-gray-600 mb-6">
                            Building scalable and high-performance web applications with ASP.NET Core.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
