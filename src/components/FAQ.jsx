import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';


const faqData = [
    {
        question: "What makes AccelForge different?",
        answer: "We combine strategy with execution. While other consultants hand you a plan and leave, we work embedded with your team to implement, measure, and refine. You get integrated growth—not fragmented advice."
    },
    {
        question: "Who should work with AccelForge?",
        answer: "B2B enterprises and mid-market companies ($5M-$100M+) ready to scale. If you're experiencing growth plateaus, sales-marketing misalignment, or need predictable revenue systems, we're a fit."
    },
    {
        question: "How long until we see results?",
        answer: "30-60 days for initial improvements in pipeline or efficiency. 90-180 days for significant revenue acceleration as systems compound. We measure and adjust every month."
    },
    {
        question: "How do you track success?",
        answer: "Through revenue metrics: pipeline generation, sales cycle time, win rate, CAC, and customer retention. You get monthly dashboards showing real performance against targets."
    },
    {
        question: "What does an engagement cost?",
        answer: "Flexible models: project-based ($15K-$75K+ per project), retainer-based ($15K-$75K+/month), or hybrid. ROI typically far exceeds investment. We'll propose custom pricing after discovery."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`bg-white dark:bg-white/5 rounded-2xl p-6 px-8 cursor-pointer transition-all duration-200 ease-out overflow-hidden border border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/10 max-[768px]:p-4 max-[768px]:px-5 shadow-sm dark:shadow-none ${isOpen ? 'bg-gray-50 dark:bg-white/10 border-accent-primary/20 scale-[1.01]' : ''}`} onClick={onClick}>
            <div className="flex justify-between items-center">
                <h3 className={`text-[1.1rem] font-medium m-0 max-[768px]:text-[1rem] max-[768px]:text-left transition-colors ${isOpen ? 'text-[#37ABD6]' : 'text-gray-900 dark:text-white'}`}>{question}</h3>
                <span className={`flex items-center justify-center transition-transform duration-300 ease-out ${isOpen ? 'rotate-180 text-[#37ABD6]' : 'text-gray-500 dark:text-white'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </div>
            <div className={`max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : ''}`}>
                <p className="text-gray-600 dark:text-gray-400 leading-[1.6] text-[1rem]">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="p-0 mb-8 bg-premium-white-pattern dark:bg-bg-primary transition-colors duration-300">
            <div className="py-16 px-8 max-[1024px]:px-8 max-[768px]:py-12 max-[768px]:px-4 max-[768px]:mx-auto max-[768px]:mb-4">
                <div className="text-center mb-12 max-w-[1000px] mx-auto max-[768px]:mb-8">
                    <h2 className="text-[3rem] font-normal leading-tight mb-6 text-gray-900 dark:text-white max-[1024px]:text-[2.5rem] max-[768px]:text-[2rem] max-[480px]:text-[1.75rem] max-[768px]:mb-4 transition-colors">
                        Getting Started Your <br />
                        Essential Questions <span className="italic font-normal bg-gradient-to-r from-[#37ABD6] to-[#0B71B3] bg-clip-text text-transparent">Answered</span>
                    </h2>
                    <p className="text-[1rem] text-gray-600 dark:text-gray-500 max-w-[600px] mx-auto leading-[1.6] max-[768px]:text-[0.95rem] max-[768px]:px-2 transition-colors">
                        Explore the answers to common queries, and if you don't find what you're looking for, our support team is always ready to assist you.
                    </p>
                </div>

                <div className="flex flex-col gap-4 max-w-[800px] mx-auto">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleItem(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
