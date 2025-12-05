import React from 'react';
import { ArrowRight, Wifi } from 'lucide-react';


const CreditCard = ({ className }) => (
    <div className={`w-[320px] h-[480px] bg-white rounded-3xl p-10 absolute shadow-[0_25px_50px_rgba(0,0,0,0.25)] flex flex-col justify-between overflow-hidden max-[1024px]:w-[260px] max-[1024px]:h-[400px] max-[1024px]:p-6 ${className}`}>
        <div className="flex justify-between items-start">
            <div className="flex items-center gap-[0.8rem] font-bold text-[1.6rem] text-text-primary tracking-[-0.03em]">
                <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-6">
                    <path d="M6 0L0 24H8L14 0H6Z" fill="#001a57" />
                    <path d="M18 0L12 24H20L26 0H18Z" fill="#001a57" />
                    <path d="M30 0L24 24H32L38 0H30Z" fill="#001a57" />
                </svg>
                <span>AccelForge</span>
            </div>
            <div className="w-[48px] h-[58px] border-[1.5px] border-gray-200 rounded-[10px] flex flex-col justify-between p-[6px] bg-transparent">
                <div className="h-px bg-gray-200 w-full"></div>
                <div className="h-px bg-gray-200 w-full"></div>
                <div className="h-px bg-gray-200 w-full"></div>
                <div className="h-px bg-gray-200 w-full"></div>
            </div>
        </div>
        <div className="absolute top-[110px] right-[52px] text-gray-300">
            <Wifi size={28} style={{ transform: 'rotate(90deg)' }} />
        </div>
        <div className="mt-auto mb-8 z-[2]">
            <div className="text-[0.85rem] text-gray-500 mb-2 font-medium">Card Number</div>
            <div className="font-mono text-[1.5rem] text-gray-700 tracking-[2px] font-semibold">1234 0000 6723 0088</div>
        </div>
        <div className="absolute -bottom-[60px] -right-[60px] w-[220px] h-[220px] bg-[#eefbf8] rounded-full z-[1] before:content-[''] before:absolute before:-top-[40px] before:left-[40px] before:w-[220px] before:h-[220px] before:bg-[#eefbf8] before:rounded-full before:opacity-60"></div>
    </div>
);

const CTASection = () => {
    return (
        <section className="p-4 mb-8">
            <div className="bg-accent-primary rounded-[32px] px-20 relative overflow-hidden flex justify-between items-center h-[450px] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] max-[1024px]:flex-col max-[1024px]:px-5 max-[1024px]:py-10 max-[1024px]:text-left max-[1024px]:h-auto">
                <div className="flex-1 max-w-[550px] z-[2] text-white max-[1024px]:mb-10 max-[1024px]:max-w-full max-[768px]:flex max-[768px]:flex-col">
                    <h2 className="font-serif text-[3rem] font-medium mb-4 leading-[1.1] max-[1024px]:text-[2.2rem] max-[1024px]:text-center max-[1024px]:mb-3 max-[768px]:text-[1.6rem] max-[768px]:leading-[1.2] max-[768px]:mb-6 max-[768px]:text-center">
                        Ready to Transform Your <br />
                        Financial <span className="italic font-serif font-normal">Management?</span>
                    </h2>
                    <p className="text-[1rem] leading-[1.5] mb-8 opacity-85 max-w-[480px] max-[1024px]:text-left max-[1024px]:mb-5 max-[1024px]:text-[1rem] max-[768px]:text-[0.95rem] max-[768px]:mb-8 max-[768px]:text-left">
                        Experience the future of finance with our cutting-edge SaaS platform. Start optimizing your financial operations today!
                    </p>
                    <button className="bg-white text-text-primary border-none py-[0.8rem] px-[1.8rem] rounded-[2rem] font-semibold text-[0.95rem] cursor-pointer inline-flex items-center gap-2 transition-transform duration-200 ease-out hover:scale-105 max-[768px]:self-center">
                        Download app <ArrowRight size={18} />
                    </button>
                </div>

                <div className="flex-1 relative h-full max-[1024px]:w-full max-[1024px]:h-[400px] max-[1024px]:justify-center">
                    <div className="absolute -right-5 -top-5 w-[500px] h-[110%] flex items-center justify-center max-[1024px]:relative max-[1024px]:right-auto max-[1024px]:top-auto max-[1024px]:transform-none max-[1024px]:w-full max-[1024px]:justify-center max-[1024px]:mt-4">
                        <CreditCard className="-top-[10px] left-[40px] -rotate-[15deg] z-[1] opacity-100 brightness-[0.98] max-[1024px]:left-[10px] max-[1024px]:top-0" />
                        <CreditCard className="top-[40px] left-[160px] -rotate-[15deg] z-[2] max-[1024px]:left-[40px] max-[1024px]:top-[30px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
