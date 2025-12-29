import React from 'react';
import { ArrowRight, Wifi } from 'lucide-react';
import logo1 from '../assets/logo1.png';


const CreditCard = ({ className }) => (
    <div className={`w-[320px] h-[480px] bg-white rounded-3xl p-10 absolute shadow-[0_25px_50px_rgba(0,0,0,0.25)] flex flex-col justify-between overflow-hidden max-[1024px]:w-[260px] max-[1024px]:h-[400px] max-[1024px]:p-6 ${className}`}>
        <div className="flex justify-between items-start">
            <img src={logo1} alt="Company Logo" className="w-30 h-auto object-contain" />
            <div className="w-12 h-[58px] border-[1.5px] border-gray-200 rounded-[10px] flex flex-col justify-between p-1.5 bg-transparent">
                <div className="h-px bg-gray-200 w-full"></div>
                <div className="h-px bg-gray-200 w-full"></div>
                <div className="h-px bg-gray-200 w-full"></div>
                <div className="h-px bg-gray-200 w-full"></div>
            </div>
        </div>
        <div className="absolute top-[110px] right-[52px] text-gray-300">
            <Wifi size={28} style={{ transform: 'rotate(90deg)' }} />
        </div>
        <div className="mt-auto mb-14 z-2">
            <div className="text-[0.85rem] text-gray-500 mb-2 font-medium">Card Number</div>
            <div className="font-mono text-[1.5rem] text-gray-700 tracking-[2px] font-semibold">1234 0000 6723 0088</div>
        </div>
        <div className="absolute -bottom-[60px] -right-[60px] w-[220px] h-[220px] bg-accent-light rounded-full z-1 before:content-[''] before:absolute before:-top-10 before:left-10 before:w-[220px] before:h-[220px] before:bg-accent-light before:rounded-full before:opacity-60"></div>
    </div>
);

const CTASection = () => {
    return (
        <section className="bg-brand-deep dark:bg-bg-primary px-28 overflow-hidden flex justify-between items-center h-[450px] relative transition-colors duration-300 shadow-2xl dark:shadow-none">
            <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-primary-blue/20 to-bg-primary z-0 pointer-events-none transition-colors duration-300"></div>
            <div className="flex-1 max-w-[550px] z-2 text-brand-white dark:text-white max-[1024px]:mb-10 max-[1024px]:max-w-full max-[768px]:flex max-[768px]:flex-col">
                <h2 className="text-[3rem] font-medium mb-4 leading-[1.1] max-[1024px]:text-[2.5rem] max-[1024px]:text-center max-[1024px]:mb-3 max-[768px]:text-[2.1rem] max-[768px]:leading-[1.2] max-[768px]:mb-6 max-[768px]:text-center drop-shadow-sm dark:drop-shadow-lg transition-colors">
                    Driving Sales Growth through <span className="italic font-normal text-brand-white dark:text-accent-primary">Digital Strategy</span>
                </h2>
                <p className="text-[1rem] leading-normal mb-8 opacity-85 max-w-[480px] text-brand-white dark:text-gray-300 max-[1024px]:text-left max-[1024px]:mb-5 max-[1024px]:text-[1rem] max-[768px]:text-[0.95rem] max-[768px]:mb-8 max-[768px]:text-left transition-colors">
                    We help businesses scale revenue with data-driven marketing, conversion optimization, and growth consulting.
                </p>
                <button className="bg-accent-primary text-black border-none py-[0.8rem] px-[1.8rem] rounded-4xl font-semibold text-[0.95rem] cursor-pointer inline-flex items-center gap-2 transition-all duration-200 ease-out hover:scale-105 hover:shadow-[0_0_20px_rgba(67,217,217,0.4)] max-[768px]:self-center">
                    Let's Talk <ArrowRight size={18} />
                </button>
            </div>

            <div className="flex-1 relative h-full max-[1024px]:w-full max-[1024px]:h-[400px] max-[1024px]:justify-center z-10">
                <div className="absolute -right-5 -top-5 w-[500px] h-[110%] flex items-center justify-center max-[1024px]:relative max-[1024px]:-right-15 max-[1024px]:top-auto max-[1024px]:transform-none max-[1024px]:w-full max-[1024px]:justify-center max-[1024px]:mt-4">
                    <CreditCard className="top-15 left-10 -rotate-15 z-1 max-[1024px]:left-0 max-[1024px]:-top-3 shadow-xl dark:shadow-2xl border border-gray-100 dark:border-none" />
                    <CreditCard className="top-26 left-40 -rotate-15 z-2 max-[1024px]:left-20 max-[1024px]:top-8 shadow-xl dark:shadow-2xl border border-gray-100 dark:border-none" />
                </div>
            </div>
        </section>
    );
};

export default CTASection;
