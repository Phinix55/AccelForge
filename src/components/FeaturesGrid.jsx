import React from 'react';
import { Database, Cpu, Zap, ArrowRight } from 'lucide-react';

const FeaturesGrid = () => {
    const features = [
        {
            icon: Database,
            title: "Digital Marketing & Demand Generation",
            description: "From strategy to execution, we build marketing systems that generate qualified leads and drive predictable pipeline growth through content, SEO, and performance marketing.",
        },
        {
            icon: Cpu,
            title: "Go-To-Market Strategy & RevOps",
            description: "We design GTM strategies and optimize your revenue operations so marketing, sales, and service teams work in perfect harmony—eliminating silos and accelerating growth.",
        },
        {
            icon: Zap,
            title: "Lead Generation & Sales Infrastructure",
            description: "We build pre-sales systems that qualify opportunities faster, structure your sales team, and optimize CRM to help you close deals with predictable efficiency.",
        },
        {
            icon: Zap,
            title: "Customer Experience & Retention",
            description: "Transform customers into advocates. We optimize the entire customer journey to maximize lifetime value, reduce churn, and build sustainable competitive advantage.",
        },
        {
            icon: Zap,
            title: "OKR Alignment & Performance",
            description: "VWe implement OKR frameworks and drive accountability across your organization—ensuring every team's goals directly contribute to revenue growth.",
        }
    ];

    return (
        <section className="w-auto max-w-7xl mx-auto px-8 mb-16 py-16 max-[768px]:px-4 max-[768px]:mb-8 max-[768px]:py-8">
            <div className="text-center mb-16">
                <h2 className="font-serif text-5xl font-medium text-text-primary leading-tight max-[1024px]:text-[2.5rem] max-[768px]:text-[2.2rem] max-[768px]:mb-8">Your Revenue Growth <br/> Starts Here</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6 max-[768px]:gap-6">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="bg-[#f8f9fb] rounded-2xl border-2 border-[#c5d5ed] p-8 flex flex-col transition-all duration-300 cursor-default hover:-translate-y-2 hover:shadow-xl hover:border-[#a0b5d8] w-full md:w-[calc(33.333%-1rem)] md:max-w-[400px]"
                        >
                            <div className="mb-6">
                                <Icon size={40} className="text-[#5b8fd9]" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-text-primary">
                                {feature.title}
                            </h3>
                            <p className="text-[#6b7280] leading-relaxed mb-6 grow">
                                {feature.description}
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-[#3b7dd6] font-medium hover:gap-3 transition-all">
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