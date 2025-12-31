import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const HowItWorks = () => {
    return (
        <section className="bg-premium-white-pattern dark:bg-bg-primary py-16 px-8 relative overflow-hidden dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px] text-gray-900 dark:text-white text-center max-[768px]:py-10 max-[768px]:px-4 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-bg-primary dark:via-transparent dark:to-bg-primary z-0 pointer-events-none transition-colors duration-300"></div>
            <div className="max-w-[1000px] mx-auto mb-16 max-[768px]:mb-10 relative z-10">
                <ScrollReveal>
                    <h2 className="text-[3rem] font-medium mb-6 tracking-[-0.02em] leading-[1.2] max-[1024px]:text-[2.5rem] max-[768px]:text-[2rem] max-[480px]:text-[1.8rem] max-[768px]:mb-4 text-gray-900 dark:text-white transition-colors">Why Choose Us?</h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className="text-[1.8rem] leading-[1.6] opacity-90 font-light max-w-[800px] mx-auto text-gray-600 dark:text-gray-300 max-[1024px]:text-[1.5rem] max-[768px]:text-[1.2rem] max-[480px]:text-[1rem] max-[768px]:mb-4 max-[768px]:px-2 transition-colors">
                        Sales is not an art. It is <span className="text-accent-primary font-normal">science</span>.
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-[1200px] mx-auto mb-4 max-[1024px]:grid-cols-1 max-[1024px]:max-w-[600px] max-[768px]:gap-4 max-[768px]:mb-8 relative z-10">
                <ScrollReveal delay={0.2} className="h-full">
                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm text-gray-900 dark:text-white rounded-3xl p-10 pb-8 text-left min-h-[280px] h-full flex flex-col transition-all duration-300 ease-out cursor-default hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(67,217,217,0.15)] hover:border-accent-primary/30 max-[768px]:p-6 max-[768px]:min-h-0 max-[768px]:rounded-[20px] group shadow-sm dark:shadow-none">
                        <div className="text-[3.5rem] font-normal mb-2 text-gray-200 dark:text-white/20 group-hover:text-accent-primary/50 transition-colors opacity-100 max-[768px]:text-[3rem] max-[768px]:mb-1">1</div>
                        <h3 className="text-[1.4rem] font-semibold mb-3 tracking-[-0.01em] text-accent-primary max-[1024px]:text-[1.15rem] max-[1024px]:mb-2 max-[768px]:text-[1.25rem] max-[768px]:mb-2">Strategic Discovery & Planning</h3>
                        <p className="text-[1rem] text-gray-600 dark:text-gray-400 leading-[1.6] max-[1024px]:text-[0.9rem] max-[1024px]:leading-normal max-[768px]:text-[0.95rem] transition-colors">
                            We audit your current revenue operations, identify gaps, and design a customized growth blueprint aligned with your market opportunity and business goals.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.3} className="h-full">
                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm text-gray-900 dark:text-white rounded-3xl p-10 text-left min-h-[280px] h-full flex flex-col transition-all duration-300 ease-out cursor-default hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(67,217,217,0.15)] hover:border-accent-primary/30 max-[768px]:p-6 max-[768px]:min-h-0 max-[768px]:rounded-[20px] group shadow-sm dark:shadow-none">
                        <div className="text-[3.5rem] font-normal mb-2 text-gray-200 dark:text-white/20 group-hover:text-accent-primary/50 transition-colors opacity-100 max-[768px]:text-[3rem] max-[768px]:mb-1">2</div>
                        <h3 className="text-[1.4rem] font-semibold mb-3 tracking-[-0.01em] text-accent-primary max-[1024px]:text-[1.15rem] max-[1024px]:mb-2 max-[768px]:text-[1.25rem] max-[768px]:mb-2">Execution & Implementation</h3>
                        <p className="text-[1rem] text-gray-600 dark:text-gray-400 leading-[1.6] max-[1024px]:text-[0.9rem] max-[1024px]:leading-normal max-[768px]:text-[0.95rem] transition-colors">
                            From demand generation to sales optimization and RevOps alignment, we work closely with your team to deliver results and build lasting capabilities.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.4} className="h-full">
                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm text-gray-900 dark:text-white rounded-3xl p-10 text-left min-h-[280px] h-full flex flex-col transition-all duration-300 ease-out cursor-default hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(67,217,217,0.15)] hover:border-accent-primary/30 max-[768px]:p-6 max-[768px]:min-h-0 max-[768px]:rounded-[20px] group shadow-sm dark:shadow-none">
                        <div className="text-[3.5rem] font-normal mb-2 text-gray-200 dark:text-white/20 group-hover:text-accent-primary/50 transition-colors opacity-100 max-[768px]:text-[3rem] max-[768px]:mb-1">3</div>
                        <h3 className="text-[1.4rem] font-semibold mb-3 tracking-[-0.01em] text-accent-primary max-[1024px]:text-[1.15rem] max-[1024px]:mb-2 max-[768px]:text-[1.25rem] max-[768px]:mb-2">Optimize, Scale & Sustain</h3>
                        <p className="text-[1rem] text-gray-600 dark:text-gray-400 leading-[1.6] max-[1024px]:text-[0.9rem] max-[1024px]:leading-normal max-[768px]:text-[0.95rem] transition-colors">
                            We monitor performance, refine processes, and scale what works. Using real-time analytics and continuous testing, we ensure your revenue engine runs efficiently and compounds growth over time.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default HowItWorks;
