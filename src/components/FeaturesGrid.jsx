import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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
        <section className="w-auto max-w-7xl mx-auto px-8 mb-24 py-16 max-[768px]:px-4 max-[768px]:mb-12 max-[768px]:py-8">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-medium text-text-primary leading-tight max-[1024px]:text-[2.5rem] max-[768px]:text-[2.2rem] max-[768px]:mb-8">
                    Your Revenue Growth <br /> Starts <span className="italic font-normal">Here</span>
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[500px]">
                {/* Left Side: Navigation List */}
                <div className="flex-1 flex flex-col gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveFeature(index)}
                            className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${activeFeature === index
                                ? 'bg-[#001855] text-white border-[#001855] shadow-lg scale-[1.02]'
                                : 'bg-white text-text-primary border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            <h3 className={`text-xl font-semibold ${activeFeature === index ? 'text-white' : 'text-text-primary'}`}>
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Right Side: Content Display */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200 flex items-center min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFeature}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <div className="mb-8">
                                <img
                                    src={features[activeFeature].icon}
                                    alt=""
                                    className="w-24 h-24 object-contain"
                                />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 text-text-primary leading-tight">
                                {features[activeFeature].title}
                            </h3>
                            <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
                                {features[activeFeature].description}
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-[#001855] font-bold text-lg hover:gap-3 transition-all">
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