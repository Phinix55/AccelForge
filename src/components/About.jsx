import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
    return (
        <section className="bg-white rounded-3xl mx-4 mb-8 py-24 px-16 max-[1024px]:py-16 max-[1024px]:px-8 max-[768px]:p-6 max-[768px]:mx-4 max-[768px]:mb-4">
            <div className="max-w-[1200px] mx-auto mb-24 flex justify-between items-start gap-16 max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:text-center max-[1024px]:gap-8 max-[1024px]:mb-16 max-[768px]:mb-6 max-[768px]:items-start max-[768px]:text-left">
                <div className="shrink-0">
                    <ScrollReveal>
                        <span className="bg-[#e8e8e8] text-accent-primary py-3 px-6 rounded-full font-semibold text-[0.95rem] inline-block">About Us</span>
                    </ScrollReveal>
                </div>
                <div className="max-w-[800px]">
                    <ScrollReveal delay={0.1}>
                        <h2 className="font-sans text-[50px] leading-[1.2] text-text-primary mb-8 font-normal mt-0 max-w-full max-[1024px]:text-[2.5rem] max-[768px]:text-[28px] max-[768px]:mb-2 max-[768px]:leading-[1.3]">
                            The Growth Partner Your Enterprise Deserve
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-[1.1rem] text-gray-600 leading-[1.6] max-w-full max-[768px]:text-[16px] max-[768px]:m-0">
                            Your go-to-market strategy, demand generation, sales operations, and customer success shouldn't require five different vendors. AccelForge delivers integrated growth consulting and execution—designed specifically for enterprises ready to scale strategically and sustainably.
                            <br /><br />
                            We combine strategic insight with operational excellence to turn revenue potential into revenue reality.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="flex justify-between items-center max-w-[1200px] mx-auto pt-8 max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:gap-8 max-[768px]:p-0">
                <ScrollReveal delay={0.3} className="flex flex-col gap-2 text-center">
                    <div className="text-[3.5rem] font-normal text-text-primary font-sans max-[768px]:text-[2rem]">2500+</div>
                    <div className="text-gray-400 text-[1rem] max-[768px]:text-[0.9rem]">Partners & customers</div>
                </ScrollReveal>
                <div className="w-px h-20 bg-gray-200 max-[768px]:hidden"></div>
                <ScrollReveal delay={0.4} className="flex flex-col gap-2 text-center">
                    <div className="text-[3.5rem] font-normal text-text-primary font-sans max-[768px]:text-[2rem]">$2'259.56</div>
                    <div className="text-gray-400 text-[1rem] max-[768px]:text-[0.9rem]">Raise Invest in 2024</div>
                </ScrollReveal>
                <div className="w-px h-20 bg-gray-200 max-[768px]:hidden"></div>
                <ScrollReveal delay={0.5} className="flex flex-col gap-2 text-center">
                    <div className="text-[3.5rem] font-normal text-text-primary font-sans max-[768px]:text-[2rem]">5.0</div>
                    <div className="text-gray-400 text-[1rem] max-[768px]:text-[0.9rem]">Custome review</div>
                </ScrollReveal>
                <div className="w-px h-20 bg-gray-200 max-[768px]:hidden"></div>
                <ScrollReveal delay={0.6} className="flex flex-col gap-2 text-center">
                    <div className="text-[3.5rem] font-normal text-text-primary font-sans max-[768px]:text-[2rem]">205+</div>
                    <div className="text-gray-400 text-[1rem] max-[768px]:text-[0.9rem]">Produces</div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default About;
