import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import HeroVisual from './HeroVisual';

const Hero = () => {
    return (
        <section className="grid grid-cols-2 gap-4 p-4 min-h-[75vh] max-[1024px]:grid-cols-1 max-[1024px]:p-4">
            <div className="bg-white rounded-3xl p-12 flex flex-col justify-center items-start max-[1200px]:p-6 max-[1024px]:items-center max-[1024px]:text-center max-[768px]:p-6 max-[768px]:items-start max-[768px]:text-left">
                <ScrollReveal delay={0.1}>
                    <div className="bg-gray-100 px-4 py-2 rounded-full text-[0.9rem] font-semibold text-accent-primary mb-8 flex items-center gap-2 max-[1024px]:mb-6">
                        <span className="text-accent-primary">+</span> 1500 reviews
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <h1 className="font-serif text-[4rem] leading-[1.1] text-text-primary mb-6 max-[1200px]:text-[3rem] max-[1024px]:text-[3rem] max-[1024px]:mb-4 max-[768px]:text-[2.2rem] max-[768px]:leading-[1.2]">
                        Enterprise Growth That Moves Faster
                    </h1>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <p className="text-[1.1rem] text-gray-600 mb-12 max-w-[600px] leading-relaxed max-[1024px]:mx-auto max-[1024px]:mb-8 max-[1024px]:text-[1rem] max-[768px]:m-0 max-[768px]:mb-5 max-[768px]:max-w-full max-[768px]:text-[1rem]">
                        From strategy to execution. AccelForge partners with ambitious enterprises to build predictable sales pipelines, optimize revenue operations, and capture market opportunities faster.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                    <div className="flex gap-4 max-[1024px]:flex-col max-[1024px]:w-full">
                        <button className="bg-accent-primary text-white border-none py-4 px-8 rounded-full text-[1rem] font-semibold flex items-center justify-center gap-2 cursor-pointer transition-opacity duration-200 hover:opacity-90 max-[1024px]:w-full">
                            Download app <ArrowRight size={20} />
                        </button>
                        <button className="bg-transparent text-text-primary border border-gray-200 py-4 px-8 rounded-full text-[1rem] font-semibold cursor-pointer transition-all duration-200 hover:border-text-primary max-[1024px]:w-full">
                            Free trial
                        </button>
                    </div>
                </ScrollReveal>
            </div>

            <div className="relative rounded-3xl overflow-hidden max-[1024px]:h-[500px]">
                <ScrollReveal delay={0.5} style={{ height: '100%' }}>
                    {/* Green Background Container */}
                    <div className="bg-accent-primary w-full h-full relative bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]">
                        <HeroVisual />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Hero;
