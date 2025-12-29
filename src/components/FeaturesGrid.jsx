import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i5 from '../assets/i5.png';

const FeaturesGrid = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: i1,
            title: "Top-Notch Digital Marketing Services At Your Doorstep",
            description: "From pushing the best content to ranking keywords, managing social media, and running ads that get in revenue, we do it all with zeal and power-packed insights as our rock-solid support.",
        },
        {
            icon: i2,
            title: "GTM & RevOps",
            description: "Sales Led Growth is the proven path to rapid revenue growth and market dominance and crafting a GTM strategy is crucial for sales success. Let's create strategies that leads to increased sales, improved efficiency, enhanced customer satisfaction, and a competitive edge.",
        },
        {
            icon: i3,
            title: "Comprehensive Guidance to Pre-Sales and Demand Management",
            description: "Tired of chasing unqualified leads? Let us handle the heavy lifting. We specialize in generating high-quality leads that are perfectly aligned with your target audience. Our data-driven approach ensures you get the right leads at the right time, so you can focus on closing deals and growing your business.",
        },
        {
            icon: i4,
            title: "End-to-End Customer Experience Consulting",
            description: "Elevate your customer experience and drive long-term growth. Our customer success experts are dedicated to building strong, lasting relationships with your customers. We focus on maximizing customer value, minimizing churn, and driving long-term growth. Let us help you build a loyal customer base and increase revenue.",
        },
        {
            icon: i5,
            title: "OKR Championship",
            description: "Unlock your team's full potential with our OKR expertise. We'll help you set clear, ambitious goals, track progress effectively, and celebrate successes. Our proven approach will drive alignment, focus, and accountability, leading to measurable results. Let's transform your team's performance together.",
        }
    ];

    return (
        <section className="w-auto max-w-7xl mx-auto px-8 mb-24 py-16 max-[1024px]:px-6 max-[768px]:px-4 max-[768px]:mb-12 max-[768px]:py-8 text-brand-white dark:text-white transition-colors duration-300 bg-brand-deep dark:bg-transparent rounded-3xl shadow-xl dark:shadow-none">
            <div className="text-center mb-16 max-[768px]:mb-10">
                <h2 className="text-5xl font-medium text-brand-white dark:text-white leading-tight max-[1024px]:text-[3.5rem] max-[768px]:text-[2rem] max-[480px]:text-[1.8rem] max-[768px]:mb-4 transition-colors">
                    Your Revenue Growth <br /> Starts <span className="italic font-normal text-accent-primary">Here</span>
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[500px]">
                {/* Left Side: Navigation List (Mobile Accordion / Desktop Tabs) */}
                <div className="flex-1 flex flex-col gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveFeature(index)}
                            className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${activeFeature === index
                                ? 'bg-white dark:bg-primary-blue/30 text-[#034C8C] dark:text-white border-accent-primary shadow-lg dark:shadow-[0_0_15px_rgba(67,217,217,0.2)] scale-[1.02]'
                                : 'bg-white/10 dark:bg-white/5 text-gray-200 dark:text-gray-300 border-white/10 dark:border-white/10 hover:border-white/30 hover:bg-white/20 dark:hover:bg-white/10 shadow-sm'
                                }`}
                        >
                            <div className="flex justify-between items-center w-full">
                                <h3 className={`text-xl font-semibold pr-4 ${activeFeature === index ? 'text-[#034C8C] dark:text-accent-primary' : 'text-white'}`}>
                                    {feature.title}
                                </h3>
                                {/* Mobile Chevron Cue */}
                                <ChevronDown
                                    className={`lg:hidden transition-transform duration-300 shrink-0 ${activeFeature === index ? 'rotate-180 text-accent-primary' : 'text-gray-400'}`}
                                    size={24}
                                />
                            </div>

                            {/* Mobile Content Accordion */}
                            <AnimatePresence>
                                {activeFeature === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="lg:hidden overflow-hidden"
                                    >
                                        <div className="pt-4 border-t border-gray-200 dark:border-white/20 mt-4">
                                            {/* Icon removed for mobile view as requested */}
                                            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                                                {feature.description}
                                            </p>
                                            <a href="#" className="inline-flex items-center gap-2 text-accent-primary font-bold text-base hover:gap-3 transition-all">
                                                Learn More <ArrowRight size={18} />
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Right Side: Content Display (Desktop Only) */}
                <div className="hidden lg:flex flex-1 bg-white/10 dark:bg-white/5 rounded-2xl p-8 lg:p-12 border border-white/20 dark:border-white/10 items-center min-h-[600px] backdrop-blur-sm relative overflow-hidden shadow-xl dark:shadow-none transition-colors duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/20 dark:bg-accent-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFeature}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full relative z-10"
                        >
                            <div className="mb-8 p-4 bg-white/10 dark:bg-white/10 rounded-full w-fit backdrop-blur-md border border-white/20 dark:border-white/10">
                                <img
                                    src={features[activeFeature].icon}
                                    alt=""
                                    className="w-16 h-16 object-contain brightness-0 invert"
                                />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 text-white dark:text-white leading-tight transition-colors">
                                {features[activeFeature].title}
                            </h3>
                            <p className="text-gray-200 dark:text-gray-300 text-lg leading-relaxed mb-8 transition-colors">
                                {features[activeFeature].description}
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-accent-primary font-bold text-lg hover:gap-3 transition-all shadow-cyan- glow">
                                Learn More <ArrowRight size={20} />
                            </a>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;