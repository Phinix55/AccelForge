import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const HowItWorks = () => {
    return (
        <section className="bg-accent-primary py-16 px-8 mb-4 relative overflow-hidden bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[60px_60px] text-white text-center max-[768px]:py-10 max-[768px]:px-4">
            <div className="max-w-[1000px] mx-auto mb-16 max-[768px]:mb-8">
                <ScrollReveal>
                    <h2 className="font-serif text-[3rem] font-medium mb-6 tracking-[-0.02em] leading-[1.2] max-[1024px]:text-[2.5rem] max-[1024px]:mb-1 max-[768px]:text-[2.2rem] max-[768px]:mb-3 max-[768px]:leading-[1.2]">How We Build Revenue Systems That Scale</h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className="text-[1.1rem] leading-[1.6] opacity-90 font-light max-w-[800px] mx-auto max-[768px]:text-[1rem] max-[768px]:mb-8 max-[768px]:px-2">
                        Growth without strategy is chaos. Growth without execution is fantasy. We deliver both—combining rigorous planning with hands-on execution to create sustainable, predictable revenue growth.
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-[1200px] mx-auto mb-12 max-[1024px]:grid-cols-1 max-[1024px]:max-w-[600px] max-[768px]:gap-4 max-[768px]:mb-8">
                <ScrollReveal delay={0.2}>
                    <div className="bg-white text-text-primary rounded-3xl p-10 pb-8 text-left min-h-[280px] flex flex-col transition-all duration-300 ease-out cursor-default hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] max-[768px]:p-6 max-[768px]:min-h-0 max-[768px]:rounded-[20px]">
                        <div className="text-[3.5rem] font-normal mb-2 font-sans text-text-primary opacity-100 max-[768px]:text-[3rem] max-[768px]:mb-1">1</div>
                        <h3 className="text-[1.4rem] font-semibold mb-3 tracking-[-0.01em] max-[1024px]:text-[1.15rem] max-[1024px]:mb-2 max-[768px]:text-[1.25rem] max-[768px]:mb-2">Strategic Discovery & Planning</h3>
                        <p className="text-[1rem] text-gray-500 leading-[1.6] max-[1024px]:text-[0.9rem] max-[1024px]:leading-normal max-[768px]:text-[0.95rem]">
                            We audit your current revenue operations, identify gaps, and design a customized growth blueprint aligned with your market opportunity and business goals.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <div className="bg-white text-text-primary rounded-3xl p-10 text-left min-h-[280px] flex flex-col transition-all duration-300 ease-out cursor-default hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] max-[768px]:p-6 max-[768px]:min-h-0 max-[768px]:rounded-[20px]">
                        <div className="text-[3.5rem] font-normal mb-2 font-sans text-text-primary opacity-100 max-[768px]:text-[3rem] max-[768px]:mb-1">2</div>
                        <h3 className="text-[1.4rem] font-semibold mb-3 tracking-[-0.01em] max-[1024px]:text-[1.15rem] max-[1024px]:mb-2 max-[768px]:text-[1.25rem] max-[768px]:mb-2">Execution & Implementation</h3>
                        <p className="text-[1rem] text-gray-500 leading-[1.6] max-[1024px]:text-[0.9rem] max-[1024px]:leading-normal max-[768px]:text-[0.95rem]">
                            From demand generation to sales optimization and RevOps alignment, we execute your strategy with precision. Our hands-on team works seamlessly with yours to drive immediate results while building internal capabilities.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                    <div className="bg-white text-text-primary rounded-3xl p-10 text-left min-h-[280px] flex flex-col transition-all duration-300 ease-out cursor-default hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] max-[768px]:p-6 max-[768px]:min-h-0 max-[768px]:rounded-[20px]">
                        <div className="text-[3.5rem] font-normal mb-2 font-sans text-text-primary opacity-100 max-[768px]:text-[3rem] max-[768px]:mb-1">3</div>
                        <h3 className="text-[1.4rem] font-semibold mb-3 tracking-[-0.01em] max-[1024px]:text-[1.15rem] max-[1024px]:mb-2 max-[768px]:text-[1.25rem] max-[768px]:mb-2">Optimize, Scale & Sustain</h3>
                        <p className="text-[1rem] text-gray-500 leading-[1.6] max-[1024px]:text-[0.9rem] max-[1024px]:leading-normal max-[768px]:text-[0.95rem]">
                            We monitor performance, refine processes, and scale what works. Using real-time analytics and continuous testing, we ensure your revenue engine runs efficiently and compounds growth over time.
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            <div className="max-w-[600px] mx-auto">
                <ScrollReveal delay={0.5}>
                    <p className="opacity-90 leading-[1.6] text-[1.05rem] max-[1024px]:text-[0.9rem] max-[1024px]:px-4 max-[768px]:mb-6">
                        Streamline your growth with AccelForge. Save time, reduce complexity, and take control with ease.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default HowItWorks;
