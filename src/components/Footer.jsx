import React, { useState, useEffect } from 'react';
import logo2 from '../assets/logo2.png';


const Footer = () => {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (showForm) {
            const loadTally = () => {
                if (typeof Tally !== 'undefined') {
                    Tally.loadEmbeds();
                } else {
                    document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
                        e.src = e.dataset.tallySrc;
                    });
                }
            };

            const scriptUrl = "https://tally.so/widgets/embed.js";
            if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
                const script = document.createElement("script");
                script.src = scriptUrl;
                script.onload = loadTally;
                script.onerror = loadTally;
                document.body.appendChild(script);
            } else {
                loadTally();
            }
        }
    }, [showForm]);

    return (
        <div>

            <section className="bg-brand-black dark:bg-bg-primary pt-16 px-14 text-brand-white dark:text-white relative overflow-hidden min-h-[500px] flex flex-col max-[768px]:pt-12 max-[768px]:px-5 max-[768px]:pb-8 border-t border-white/10 dark:border-white/5 transition-colors duration-300">
                {/* Subscribe Section */}
                <div className="text-center max-w-[800px] mx-auto mb-16 relative z-10 max-[768px]:mb-10 max-[768px]:text-left">
                    <h2 className="text-[3rem] font-normal leading-tight mb-4 max-[1024px]:text-[2.5rem] max-[768px]:text-[1.8rem] max-[768px]:text-center max-[768px]:mb-3 transition-colors">
                        Stay Ahead with Revenue <br />
                        <span className="italic text-accent-primary">Growth Insights</span>
                    </h2>
                    <p className="text-brand-white dark:text-gray-400 mb-8 leading-[1.6] max-[768px]:text-[0.95rem] max-[768px]:text-left max-[768px]:mb-6 transition-colors">
                        Subscribe to our newsletter for expert strategies, proven tactics, and the latest trends in B2B revenue acceleration.
                    </p>

                    {!showForm ? (
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-accent-primary text-black border-none rounded-xl py-3 px-8 font-medium cursor-pointer transition-all duration-200 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(67,217,217,0.3)] shadow-[0_0_10px_rgba(67,217,217,0.2)]"
                        >
                            Register your interest
                        </button>
                    ) : (
                        <div className="w-full mt-8">
                            <iframe
                                data-tally-src="https://tally.so/embed/9q9VL1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                                loading="lazy"
                                width="100%"
                                height="1000"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                title="Let’s See If We’re a Fit"
                                className="w-full invert hue-rotate-180"
                            ></iframe>
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
                            <a href="#" className="text-brand-white dark:text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-accent-primary dark:hover:text-white">Home</a>
                            <a href="#" className="text-brand-white dark:text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-accent-primary dark:hover:text-white">About Us</a>
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
