import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
            <header className="flex items-center justify-between px-8 py-4 bg-white rounded-2xl mx-8 my-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)] relative z-50 max-[900px]:m-4 max-[900px]:p-6">
                <div className="flex items-center gap-3 font-sans font-bold text-2xl text-text-primary">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-primary -rotate-15">
                        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>AccelForge</span>
                </div>

                {/* Desktop Nav */}
                <nav className="flex gap-10 max-[900px]:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="no-underline text-gray-600 font-medium text-base transition-colors duration-200 hover:text-text-primary"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4 max-[900px]:hidden">
                    <button className="bg-accent-primary text-white border-none py-3 px-8 rounded-full cursor-pointer font-semibold transition-colors duration-200 text-[0.95rem] hover:bg-[#00123d]">
                        Contact us
                    </button>
                </div>

                <div className="hidden items-center gap-4 max-[900px]:flex">
                    <button className="bg-accent-primary border-none flex items-center justify-center p-2 rounded-lg cursor-pointer z-[60] text-white" onClick={toggleDrawer}>
                        <Menu size={24} color="#ffffff" />
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-screen bg-white z-[100] p-8 flex flex-col"
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
