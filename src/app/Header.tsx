import React from 'react';  
import Link from 'next/link';  
import { Menu } from 'lucide-react'; // Assuming you're using lucide-react for the menu icon  
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';  

const Header: React.FC = () => {  
    return (  
        <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md fixed top-0 left-0 w-full z-50">  
            <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">  
                {/* Logo */}
                <Link href="/" className="text-4xl font-bold text-white hover:text-pink-200 transition-colors duration-300">Hamza</Link>  

                {/* Desktop Navigation */}
                <nav>  
                    <ul className="hidden lg:flex space-x-10">  
                        <li>  
                            <Link href="/" className="text-lg text-white hover:text-pink-200 transition duration-300">Home</Link>  
                        </li>  
                        <li>  
                            <Link href="/about" className="text-lg text-white hover:text-pink-200 transition duration-300">About</Link>  
                        </li>  
                        <li>  
                            <Link href="/skills" className="text-lg text-white hover:text-pink-200 transition duration-300">Skills</Link>  
                        </li>  
                        <li>  
                            <Link href="/services" className="text-lg text-white hover:text-pink-200 transition duration-300">Services</Link>  
                        </li>  
                        <li>  
                            <Link href="/projects" className="text-lg text-white hover:text-pink-200 transition duration-300">Projects</Link>  
                        </li>  
                        <li>  
                            <Link href="/contact" className="text-lg text-white hover:text-pink-200 transition duration-300">Contact</Link>  
                        </li>  
                    </ul>  

                    {/* Mobile Menu Trigger */}
                    <Sheet>  
                        <SheetTrigger className="lg:hidden text-white text-3xl hover:text-pink-200 transition-colors duration-300">  
                            <Menu />  
                        </SheetTrigger>  

                        <SheetContent className="p-4 bg-gradient-to-r from-purple-600 to-pink-600">  
                            <ul className="space-y-6">  
                                <li>  
                                    <Link href="/" className="block text-lg text-white hover:text-pink-200 transition-colors duration-300">Home</Link>  
                                </li>  
                                <li>  
                                    <Link href="/about" className="block text-lg text-white hover:text-pink-200 transition-colors duration-300">About</Link>  
                                </li>  
                                <li>  
                                    <Link href="/skills" className="block text-lg text-white hover:text-pink-200 transition-colors duration-300">Skills</Link>  
                                </li>  
                                <li>  
                                    <Link href="/services" className="block text-lg text-white hover:text-pink-200 transition-colors duration-300">Services</Link>  
                                </li>  
                                <li>  
                                    <Link href="/projects" className="block text-lg text-white hover:text-pink-200 transition-colors duration-300">Projects</Link>  
                                </li>  
                                <li>  
                                    <Link href="/contact" className="block text-lg text-white hover:text-pink-200 transition-colors duration-300">Contact</Link>  
                                </li>  
                            </ul>  
                        </SheetContent>  
                    </Sheet>  
                </nav>  
            </div>  
        </header>  
    );  
};  

export default Header;
