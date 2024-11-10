import Image from 'next/image';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="home flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="home-content flex flex-col items-center mt-10">
                <Image 
                    src="/profile.png" // Replace with your image URL
                    alt="Muhammad Hamza's Picture" 
                    width={150} 
                    height={150}  
                    className="rounded-full mb-6 shadow-xl"
                />
                <h3 className="text-2xl font-semibold text-white">Hello, I'm</h3>
                <h1 className="text-5xl font-extrabold text-white mt-2">Muhammad Hamza</h1>
                
                <p className="mt-6 text-lg max-w-3xl mx-auto text-center text-white opacity-90">
                    I'm a passionate web developer with a focus on frontend technologies like React, Vue, and Tailwind CSS. 
                    I enjoy bringing ideas to life by creating beautiful, responsive, and user-friendly web applications.<br />
                    Whether it's building dynamic UIs or improving backend systems, I love solving complex problems and optimizing code.<br />
                    Let's collaborate and build something amazing together!
                </p>

          

                <Link href="https://github.com/Hamza123545" className="bg-blue-700 text-white py-2 px-6 rounded-lg mt-8 shadow-md hover:bg-blue-800 transition-all duration-300">
                    Visit My GitHub
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
