import React from 'react';
import { ArrowRight } from 'lucide-react';
import LogoMarquee from './LogoMarquee';
import InteractiveGrid from './InteractiveGrid';
import ellipse from '../assets/ellipse.png';
import { useForm } from '../context/FormContext';

const Hero = () => {
    const { openForm } = useForm();
    return (
        <section className="relative flex flex-col items-center bg-premium-white-pattern dark:bg-bg-primary pt-48 pb-20 overflow-hidden text-[#0D0D0D] dark:text-white max-[1024px]:py-20 max-[768px]:pt-[25vh] max-[768px]:pb-16 max-[768px]:px-4 transition-colors duration-300">
            {/* Dark Mode: Premium Gradient Background */}
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_50%_40%,_rgba(12,84,144,0.25)_0%,_rgba(3,76,140,0.1)_40%,_rgba(13,13,13,1)_80%)] z-0 pointer-events-none"></div>
            {/* Dark Mode: Subtle overlay for depth */}
            <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(to_bottom,transparent_0%,#0D0D0D_100%)] z-0 pointer-events-none"></div>

            {/* Light Mode: CLEAN WHITE - No Gradient needed for dual tone contrast */}

            <InteractiveGrid />
            <h1 className="z-10 text-7xl text-center leading-tight mb-10 max-w-[950px] max-[1200px]:text-[4.5rem] max-[1024px]:text-[3.5rem] max-[1024px]:mb-8 max-[768px]:text-[2.8rem] max-[768px]:leading-[1.2] max-[480px]:text-[2.2rem] drop-shadow-sm dark:drop-shadow-2xl transition-all">
                Sales <span className="relative inline-block px-4 max-[768px]:px-2">
                    <img src={ellipse} alt="" className="absolute -top-3 left-1/2 -translate-x-1/2 w-[130%] h-[140%] max-w-none object-contain opacity-80 dark:opacity-60 brightness-100 dark:brightness-150 grayscale-0 sepia-0 hue-rotate-[170deg] saturate-200 pointer-events-none transition-all" />
                    <span className="relative z-10 bg-gradient-to-r from-[#37ABD6] to-[#0B71B3] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(55,171,214,0.3)] dark:drop-shadow-[0_0_15px_rgba(55,171,214,0.5)]">Growth</span>
                </span> <br className="hidden max-[768px]:block" /> and Digital Marketing Consulting for Business Success
            </h1>
            <button
                onClick={openForm}
                className="z-10 mb-14 max-[1024px]:mb-8 border-none py-4 px-8 max-[1024px]:py-3 max-[1024px]:px-4 max-[1024px]:text-base rounded-full text-lg font-semibold flex items-center gap-2 cursor-pointer transition-all duration-300 hover:gap-4 bg-gradient-to-r from-[#FFD62F] to-[#FFAF45] text-black hover:shadow-[0_0_25px_rgba(255,175,69,0.4)] dark:hover:shadow-[0_0_25px_rgba(255,175,69,0.6)] hover:brightness-110"
            >
                Let's Connect <ArrowRight size={24} />
            </button>
            <div className="z-10 w-full opacity-80 hover:opacity-100 transition-opacity duration-500">
                <LogoMarquee />
            </div>
            <div className='z-10 text-4xl max-[1024px]:text-[2rem] leading-relaxed max-[1024px]:leading-12 max-w-3xl text-center mt-12 max-[768px]:mt-[10vh] text-gray-600 dark:text-gray-300 transition-colors'>
                Let's achieve it with the <span className='font-medium bg-gradient-to-r from-[#37ABD6] to-[#0B71B3] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(55,171,214,0.3)] dark:drop-shadow-[0_0_10px_rgba(55,171,214,0.4)]'>right strategies, seamless execution, transparent communication,</span> and services that form the core of business success.
            </div>
        </section>
    );
};

export default Hero;
