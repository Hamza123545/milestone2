// app/skills/page.tsx
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaRegKeyboard } from 'react-icons/fa';
import { SiAngular, SiNextdotjs, SiPhp, SiMicrosoftsqlserver, SiCsharp, SiDotnet } from 'react-icons/si';

const SkillsPage = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100" id="Skills">
            <div className="container mx-auto px-6">
                
                {/* Page Title */}
                <h1 className="text-4xl font-bold text-center mb-12">
                    My <span className="text-purple-600">Skills</span>
                </h1>

                {/* Technical Skills Section */}
                <h2 className="text-2xl font-semibold text-center mb-8">Technical Skills</h2>
                <div className="space-y-8">
                    {[
                        { icon: <FaHtml5 className="text-5xl text-orange-600 mr-4" />, skill: 'HTML', percentage: '90%', color: 'bg-orange-600' },
                        { icon: <FaCss3Alt className="text-5xl text-blue-600 mr-4" />, skill: 'CSS', percentage: '85%', color: 'bg-blue-600' },
                        { icon: <FaJs className="text-5xl text-yellow-500 mr-4" />, skill: 'JavaScript', percentage: '80%', color: 'bg-yellow-500' },
                        { icon: <FaRegKeyboard className="text-5xl text-blue-500 mr-4" />, skill: 'TypeScript', percentage: '75%', color: 'bg-blue-500' },
                        { icon: <SiAngular className="text-5xl text-red-600 mr-4" />, skill: 'AngularJS', percentage: '70%', color: 'bg-red-600' },
                        { icon: <SiNextdotjs className="text-5xl text-gray-800 mr-4" />, skill: 'Next.js', percentage: '65%', color: 'bg-gray-800' },
                        { icon: <SiPhp className="text-5xl text-purple-600 mr-4" />, skill: 'PHP', percentage: '70%', color: 'bg-purple-600' },
                        { icon: <SiMicrosoftsqlserver className="text-5xl text-blue-800 mr-4" />, skill: 'SQL Server', percentage: '65%', color: 'bg-blue-800' },
                        { icon: <SiCsharp className="text-5xl text-green-600 mr-4" />, skill: 'C#', percentage: '70%', color: 'bg-green-600' },
                        { icon: <SiDotnet className="text-5xl text-teal-500 mr-4" />, skill: 'ASP .NET Core', percentage: '60%', color: 'bg-teal-500' },
                    ].map(({ icon, skill, percentage, color }) => (
                        <div className="flex items-center" key={skill}>
                            {icon}
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium text-lg">{skill}</span>
                                    <span className="font-semibold">{percentage}</span>
                                </div>
                                <div className="w-full bg-gray-300 rounded-full h-2">
                                    <div className={`${color} h-2 rounded-full`} style={{ width: percentage }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;
