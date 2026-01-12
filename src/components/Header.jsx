import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo1 from '../assets/logo1.png';
import { useForm } from '../context/FormContext';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { openForm } = useForm();

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
            <div className='w-full fixed top-0 left-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-bg-primary/80 border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none'>
                <header className="container mx-auto flex items-center justify-between py-2 px-6 max-[1024px]:px-8 max-[768px]:px-4 max-[768px]:py-3">
                    <img src={logo1} alt="AccelForge Logo" className="w-32 h-auto max-[768px]:w-24" />

                    {/* Desktop Nav */}
                    <nav className="flex gap-12 max-[900px]:hidden items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="no-underline text-text-secondary font-medium text-lg transition-colors duration-200 hover:text-accent-primary hover:drop-shadow-[0_0_8px_rgba(67,217,217,0.5)]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4 max-[900px]:hidden">
                        <button
                            onClick={openForm}
                            className="group flex items-center bg-transparent text-[#37ABD6] border-2 border-[#37ABD6] rounded-full cursor-pointer font-semibold transition-all duration-300 hover:bg-[#37ABD6] hover:text-white hover:shadow-[0_0_15px_rgba(55,171,214,0.4)] overflow-hidden w-12 hover:w-40 h-12 justify-center hover:justify-start hover:px-5"
                            aria-label="Contact Us"
                        >
                            <Phone size={20} className="shrink-0" />
                            <span className="whitespace-nowrap opacity-0 max-w-0 group-hover:max-w-xs group-hover:ml-2 group-hover:opacity-100 transition-all duration-300 overflow-hidden">Contact us</span>
                        </button>
                    </div>

                    <div className="hidden items-center gap-3 max-[900px]:flex">
                        <button className="bg-transparent text-accent-primary text-sm border border-accent-primary py-2 px-3 rounded-full cursor-pointer font-semibold transition-colors duration-200 hover:bg-accent-primary hover:text-black hover:shadow-[0_0_15px_rgba(67,217,217,0.4)] max-[900px]:hidden">
                            Contact us
                        </button>
                        <button className="bg-transparent border-none flex items-center justify-center p-2 rounded-lg cursor-pointer z-60 text-text-primary" onClick={toggleDrawer}>
                            <Menu size={24} />
                        </button>
                    </div>
                </header>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-bg-primary z-[100] p-8 flex flex-col border-r border-gray-200 dark:border-white/10 overflow-y-auto"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <div className="flex justify-end mb-16">
                            <button className="bg-transparent border-none cursor-pointer text-text-primary p-1 hover:text-accent-primary" onClick={toggleDrawer}>
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
                            <button className="mt-4 bg-accent-primary text-black border-none py-4 px-12 rounded-full text-lg font-semibold cursor-pointer w-auto shadow-[0_0_15px_rgba(67,217,217,0.4)]" onClick={() => { toggleDrawer(); openForm(); }}>
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
