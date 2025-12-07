import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo2 from '../assets/logo2.png';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <>
            <div className='bg-accent-primary w-full flex justify-center sticky top-0 z-50'>
                <header className="container flex items-center justify-between max-[900px]:pr-4 py-3 max-[900px]:py-2">
                    <img src={logo2} alt="AccelForge Logo" className="w-32 h-auto" />

                    {/* Desktop Nav */}
                    <nav className="flex gap-15 max-[900px]:hidden">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="no-underline text-gray-400 font-medium text-lg transition-colors duration-200 hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <button className="bg-white max-[900px]:hidden text-black text-lg border-2 border-white py-3 px-7 rounded-full cursor-pointer font-semibold transition-colors duration-200 hover:bg-accent-primary hover:text-white">
                        Contact us
                    </button>

                    <div className="hidden items-center gap-1 max-[900px]:flex">
                        <button className="bg-white text-black text-sm border border-white py-2 px-3 rounded-full cursor-pointer font-semibold transition-colors duration-200 hover:bg-accent-primary hover:text-white">
                            Contact us
                        </button>
                        <button className="bg-accent-primary border-none flex items-center justify-center p-2 rounded-lg cursor-pointer z-60 text-white" onClick={toggleDrawer}>
                            <Menu size={24} color="#ffffff" />
                        </button>
                    </div>
                </header>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-screen bg-white z-100 p-8 flex flex-col"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <div className="flex justify-end mb-16">
                            <button className="bg-none border-none cursor-pointer text-text-primary p-1" onClick={toggleDrawer}>
                                <X size={32} />
                            </button>
                        </div>
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={toggleDrawer}
                                    className="no-underline text-text-primary text-2xl font-semibold transition-colors duration-200 hover:text-accent-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="mt-4 bg-accent-primary text-white border-none py-4 px-12 rounded-full text-lg font-semibold cursor-pointer w-auto" onClick={toggleDrawer}>
                                Contact us
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
