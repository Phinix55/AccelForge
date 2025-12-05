import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import LogoMarquee from './LogoMarquee';
import InteractiveGrid from './InteractiveGrid';

const Hero = () => {
    return (
            <section className="relative flex flex-col items-center bg-accent-primary py-16 px-8 overflow-hidden text-white max-[768px]:py-10 max-[768px]:px-4">
                <InteractiveGrid />
                {/* <ScrollReveal delay={0.2}> */}
                    <h1 className="relative z-10 font-serif text-6xl text-center leading-[1.3] mb-10 max-w-[650px] max-[1200px]:text-[3rem] max-[1024px]:text-[3rem] max-[1024px]:mb-4 max-[768px]:text-[2.2rem]">
                        Enterprise Growth that Moves Faster
                    </h1>
                {/* </ScrollReveal> */}
                {/* <ScrollReveal delay={0.3}> */}
                    {/* <p className="text-lg text-center text-gray-300 mb-12 max-w-[600px] leading-relaxed max-[1024px]:mx-auto max-[1024px]:mb-8 max-[1024px]:text-[1rem] max-[768px]:m-0 max-[768px]:mb-5 max-[768px]:max-w-full max-[768px]:text-[1rem]">
                        From strategy to execution. AccelForge partners with ambitious enterprises to build predictable sales pipelines, optimize revenue operations, and capture market opportunities faster.
                    </p> */}
                {/* </ScrollReveal> */}
                {/* <ScrollReveal delay={0.4}> */}
                    <div className="relative z-10 flex gap-4 mb-16 max-[1024px]:flex-col max-[1024px]:w-full">
                        <button className="bg-white text-[#001855] border-none py-4 px-8 rounded-full text-[1rem] font-semibold flex items-center justify-center gap-2 cursor-pointer transition-opacity duration-200 hover:opacity-90 max-[1024px]:w-full">
                            Download app <ArrowRight size={20} />
                        </button>
                        <button className="bg-transparent text-white border border-white py-4 px-8 rounded-full text-[1rem] font-semibold cursor-pointer transition-all duration-200 hover:bg-white hover:text-[#001855] max-[1024px]:w-full">
                            Free trial
                        </button>
                    </div>
                {/* </ScrollReveal> */}
                <div className="relative z-10 w-full">
                    <LogoMarquee />
                </div>
                <div className='relative z-10 text-4xl leading-relaxed max-w-4xl text-center font-sans'>
                    From strategy to execution. AccelForge partners with ambitious enterprises to build predictable sales pipelines, optimize revenue operations, and capture market opportunities faster.
                </div>
        </section>
    );
};

export default Hero;
