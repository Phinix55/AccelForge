import React from 'react';
import { ArrowRight } from 'lucide-react';
import LogoMarquee from './LogoMarquee';
import InteractiveGrid from './InteractiveGrid';
import ellipse from '../assets/ellipse.png';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center bg-accent-primary py-28 pb-20 overflow-hidden text-white max-[768px]:py-10 max-[768px]:px-4">
            {/* Premium Gradient Background */}
            {/* <div className="absolute inset-0 bg-[linear-gradient(135deg,#2a2a2a_0%,#1a1a1a_50%,#0a0a0a_100%)] opacity-90 z-0"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(60,60,60,0.4)_0%,transparent_70%)] z-0"></div> */}

            <InteractiveGrid />
            <h1 className="z-10 text-7xl text-center leading-[1.3] mb-10 max-w-[950px] max-[1200px]:text-[3rem] max-[1024px]:text-[3rem] max-[1024px]:mb-6 max-[768px]:text-[2.5rem]">
                Sales <span className="relative inline-block px-6 max-[768px]:px-3">
                    <img src={ellipse} alt="" className="absolute -top-1 left-1/2 -translate-x-1/2 w-[370px] h-[100px] max-[1024px]:w-[280px] max-[1024px]:h-[50px] max-[1024px]:top-0 max-[768px]:w-[200px]" />
                    <span className="relative">Growth</span>
                </span> and Digital Marketing Consulting for Business Success
            </h1>
            <button className="bg-white text-[#1a1a1a] z-10 mb-14 max-[1024px]:mb-8 border-none py-4 px-8 max-[1024px]:py-3 max-[1024px]:px-4 max-[1024px]:text-base rounded-full text-lg font-semibold flex items-center gap-2 cursor-pointer transition-all duration-200 hover:opacity-90 hover:gap-4">
                Let's Connect <ArrowRight size={24} />
            </button>
            <div className="z-10 w-full">
                <LogoMarquee />
            </div>
            <div className='z-10 text-4xl max-[1024px]:text-[2rem] leading-relaxed max-[1024px]:leading-12 max-w-3xl text-center font-sans'>
                Let's achieve it with the <span className='text-yellow-400'>right strategies, seamless execution, transparent communication,</span> and services that form the core of business success.
            </div>
        </section>
    );
};

export default Hero;
