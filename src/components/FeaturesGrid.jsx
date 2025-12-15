import React from 'react';
import { ArrowRight } from 'lucide-react';
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i5 from '../assets/i5.png';

const FeaturesGrid = () => {
    const features = [
        {
            icon: i1,
            title: "Top-Notch Digital Marketing Services At Your Doorstep",
            description: "From pushing the best content to ranking keywords, managing social media, and running ads that get in revenue, we do it all with zeal and power-packed insights as our rock-solid support.",
        },
        {
            icon: i2,
            title: "GTM & RevOps",
            description: "Sales Led Growth is the proven path to rapid revenue growth and market dominance and crafting a GTM strategy is crucial for sales success. Let`s create strategies that leads to increased sales, improved efficiency, enhanced customer satisfaction, and a competitive edge.",
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
        <section className="w-auto max-w-7xl mx-auto px-8 mb-16 py-16 max-[768px]:px-4 max-[768px]:mb-8 max-[768px]:py-8">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-medium text-text-primary leading-tight max-[1024px]:text-[2.5rem] max-[768px]:text-[2.2rem] max-[768px]:mb-8">Your Revenue Growth <br/> Starts <span className="italic font-normal">Here</span></h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6 max-[768px]:gap-6">
                {features.map((feature, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-bg-primary rounded-2xl border-2 border-[#d0d0d0] p-8 flex flex-col transition-all duration-300 cursor-default hover:-translate-y-2 hover:shadow-xl hover:border-[#a0a0a0] w-full md:w-[calc(33.333%-1rem)] md:max-w-[400px]"
                        >
                            <div className="mb-2">
                                <img src={feature.icon} alt="" className="w-15 h-15 object-contain" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-text-primary">
                                {feature.title}
                            </h3>
                            <p className="text-[#6b7280] leading-relaxed mb-6 grow">
                                {feature.description}
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-[#1a1a1a] font-medium hover:gap-3 transition-all">
                                Learn More <ArrowRight size={16} />
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeaturesGrid;