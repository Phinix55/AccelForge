import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logo2 from '../assets/logo2.png';
import { useForm } from '../context/FormContext';


import ContactForm from './ContactForm';


const Footer = () => {
    const { isFormOpen, setIsFormOpen } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSuccess = () => {
        setIsSubmitted(true);
        setTimeout(() => {
            setIsFormOpen(false);
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div id="register-interest">

            <section className="bg-brand-black dark:bg-bg-primary pt-16 px-14 text-brand-white dark:text-white relative overflow-hidden min-h-[500px] flex flex-col max-[768px]:pt-12 max-[768px]:px-5 max-[768px]:pb-8 border-t border-white/10 dark:border-white/5 transition-colors duration-300">
                {/* Subscribe Section */}
                <div className="text-center max-w-[800px] mx-auto mb-16 relative z-10 max-[768px]:mb-10 max-[768px]:text-center">
                    <h2 className="text-[3rem] font-normal leading-tight mb-4 max-[1024px]:text-[2.5rem] max-[768px]:text-[1.8rem] max-[768px]:text-center max-[768px]:mb-3 transition-colors">
                        Stay Ahead with Revenue <br />
                        <span className="italic bg-gradient-to-r from-[#37ABD6] to-[#0B71B3] bg-clip-text text-transparent">Growth Insights</span>
                    </h2>
                    <p className="text-brand-white dark:text-gray-400 mb-8 leading-[1.6] max-[768px]:text-[0.95rem] max-[768px]:text-center max-[768px]:mb-6 transition-colors">
                        Subscribe to our newsletter for expert strategies, proven tactics, and the latest trends in B2B revenue acceleration.
                    </p>

                    {!isFormOpen ? (
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="bg-gradient-to-r from-[#FFD62F] to-[#FFAF45] text-black border-none rounded-xl py-3 px-8 font-medium cursor-pointer transition-all duration-200 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,175,69,0.3)] shadow-[0_0_10px_rgba(255,175,69,0.2)]"
                        >
                            Register your interest
                        </button>
                    ) : (
                        <div className="w-full mt-14 transition-all duration-500 ease-in-out relative bg-[#0D0D0D] p-8 rounded-2xl border border-white/5 shadow-2xl max-[768px]:p-6 max-[768px]:pt-12">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsFormOpen(false)}
                                className="absolute top-4 right-4 bg-white/10 text-white border border-white/20 p-2 rounded-full cursor-pointer hover:bg-white/20 transition-all duration-200 z-50 flex items-center justify-center opacity-80 hover:opacity-100 max-[768px]:top-3 max-[768px]:right-3 max-[768px]:p-1.5"
                                aria-label="Close form"
                            >
                                <X size={20} />
                            </button>

                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center py-20 px-4 animate-fadeIn text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#37ABD6] to-[#0B71B3] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(55,171,214,0.4)]">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-semibold text-white mb-3">Thank You!</h3>
                                    <p className="text-gray-400 text-lg">We've received your details and will be in touch shortly.</p>
                                </div>
                            ) : (
                                <ContactForm onSuccess={handleFormSuccess} />
                            )}
                        </div>
                    )}
                </div>

                <div className="h-px bg-white/10 dark:bg-white/10 w-full mb-16 max-[768px]:mb-12 transition-colors"></div>

                {/* Main Content */}
                <div className="flex justify-between mt-auto pb-48 relative z-10 max-[1024px]:pb-24 max-[768px]:flex-col max-[768px]:gap-10 max-[768px]:pb-32 max-[768px]:text-left">
                    <div className="max-w-[300px] max-[768px]:max-w-full">
                        <img src={logo2} alt="Company Logo" className="w-40 h-auto object-contain mb-4 filter brightness-0 invert" />
                        <p className="text-brand-white dark:text-gray-400 text-[0.9rem] leading-normal transition-colors">
                            Forging your Accelerated Sales Led Growth
                        </p>
                    </div>

                    <div className="flex gap-16 max-[768px]:flex-wrap max-[768px]:gap-10 max-[768px]:justify-between">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[1rem] font-semibold mb-2 text-brand-white dark:text-white transition-colors">Information Links</h4>
                            <a href="#" className="text-brand-white dark:text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-[#37ABD6] dark:hover:text-[#37ABD6]">Home</a>
                            <a href="#" className="text-brand-white dark:text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-[#37ABD6] dark:hover:text-[#37ABD6]">About Us</a>
                            <a href="#" className="text-brand-white dark:text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-accent-primary dark:hover:text-white">Digital Marketing Services</a>
                            <a href="#" className="text-brand-white dark:text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-accent-primary dark:hover:text-white">GTM & RevOps</a>
                            <a href="#" className="text-brand-white dark:text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-accent-primary dark:hover:text-white">Pre-Sales</a>
                            <a href="#" className="text-brand-white dark:text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-accent-primary dark:hover:text-white">Customer Experience</a>
                            <a href="#" className="text-brand-white dark:text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-accent-primary dark:hover:text-white">OKR Championship</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[1rem] font-semibold mb-2 text-white dark:text-white transition-colors">Contact Info</h4>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <p className="text-brand-white dark:text-white text-[0.9rem] font-medium mb-1 transition-colors">EMAIL:</p>
                                    <a href="mailto:sandeep@accelforge.com" className="text-brand-white dark:text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-accent-primary dark:hover:text-white">sandeep@accelforge.com</a>
                                </div>
                                <div>
                                    <p className="text-brand-white dark:text-white text-[0.9rem] font-medium mb-1 transition-colors">PHONE:</p>
                                    <a href="tel:+919652870848" className="text-brand-white dark:text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-accent-primary dark:hover:text-white">+91 9652870848</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Watermark */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[18vw] font-bold text-white/5 dark:text-white/5 whitespace-nowrap pointer-events-none z-0 max-[768px]:-bottom-5 max-[768px]:text-[20vw] transition-colors">
                    AccelForge
                </div>

            </section>
            <div className='text-gray-400 dark:text-white text-center bg-brand-black dark:bg-black py-4 border-t border-white/10 dark:border-white/10 text-sm transition-colors'>
                Copyright © 2025 accelforge.com. All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;
