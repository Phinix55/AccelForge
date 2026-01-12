import React from 'react';
import { ArrowRight, Wifi } from 'lucide-react';
import logo1 from '../assets/logo1.png';
import { useForm } from '../context/FormContext';


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
    const { openForm } = useForm();
    return (
        <section className="bg-brand-deep dark:bg-bg-primary px-6 lg:px-28 py-12 lg:py-0 overflow-hidden flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[450px] relative transition-colors duration-300 shadow-2xl dark:shadow-none gap-10 lg:gap-0">
            <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-primary-blue/20 to-bg-primary z-0 pointer-events-none transition-colors duration-300"></div>

            {/* Text Content */}
            <div className="flex-1 max-w-full lg:max-w-[550px] z-2 text-brand-white dark:text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-[2.2rem] lg:text-[3rem] font-medium mb-4 leading-[1.2] lg:leading-[1.1] drop-shadow-sm dark:drop-shadow-lg transition-colors">
                    Driving Sales Growth through <span className="italic font-normal text-brand-white dark:bg-gradient-to-r dark:from-[#37ABD6] dark:to-[#0B71B3] dark:bg-clip-text dark:text-transparent">Digital Strategy</span>
                </h2>
                <p className="text-[1rem] leading-normal mb-8 opacity-85 max-w-[480px] text-brand-white dark:text-gray-300 transition-colors">
                    We help businesses scale revenue with data-driven marketing, conversion optimization, and growth consulting.
                </p>
                <button
                    onClick={openForm}
                    className="bg-gradient-to-r from-[#FFD62F] to-[#FFAF45] text-black border-none py-[0.8rem] px-[1.8rem] rounded-4xl font-semibold text-[0.95rem] cursor-pointer inline-flex items-center gap-2 transition-all duration-200 ease-out hover:scale-105 hover:shadow-[0_0_20px_rgba(255,175,69,0.4)]"
                >
                    Let's Talk <ArrowRight size={18} />
                </button>
            </div>

            {/* Visual/Cards Section */}
            <div className="flex-1 relative w-full flex justify-center lg:justify-end items-center min-h-[300px] lg:h-full z-10">
                <div className="relative w-full max-w-[400px] lg:w-[500px] flex justify-center lg:block h-full">
                    {/* Cards Container - Adjusted for mobile centering */}
                    <div className="relative w-full h-[300px] lg:h-full lg:absolute lg:-right-5 lg:-top-5">
                        <CreditCard className="left-1/2 -translate-x-1/2 top-4 lg:translate-x-0 lg:left-10 lg:-rotate-15 z-1 shadow-xl dark:shadow-2xl border border-gray-100 dark:border-none scale-90 lg:scale-100 origin-center" />
                        <CreditCard className="left-1/2 -translate-x-[40%] top-16 lg:translate-x-0 lg:left-40 lg:-rotate-15 lg:top-20 z-2 shadow-xl dark:shadow-2xl border border-gray-100 dark:border-none scale-90 lg:scale-100 origin-center" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
