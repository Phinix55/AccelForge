import React from 'react';


const Footer = () => {
    return (
        <section className="p-0 mb-8">
            <div className="bg-[#0c110f] rounded-3xl pt-16 px-8 pb-0 mx-4 mb-8 text-white relative overflow-hidden min-h-[600px] flex flex-col max-[768px]:pt-10 max-[768px]:px-5 max-[768px]:pb-0 max-[768px]:min-h-0">
                {/* Subscribe Section */}
                <div className="text-center max-w-[800px] mx-auto mb-16 relative z-[2] max-[768px]:mb-8 max-[768px]:text-left">
                    <h2 className="font-serif text-[3rem] font-normal leading-[1.2] mb-4 max-[768px]:text-[1.8rem] max-[768px]:text-center max-[768px]:mb-3">
                        Stay Ahead with Revenue <br />
                        <span className="font-serif italic">Growth Insights</span>
                    </h2>
                    <p className="text-gray-400 mb-8 leading-[1.6] max-[768px]:text-left max-[768px]:text-[1rem] max-[768px]:mb-5">
                        Subscribe to our newsletter for expert strategies, proven tactics, and the latest trends in B2B revenue acceleration.
                    </p>
                    <form className="flex gap-4 max-w-[500px] mx-auto max-[768px]:flex-col max-[768px]:gap-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-white font-sans placeholder:text-gray-500"
                        />
                        <button type="submit" className="bg-accent-primary text-white border-none rounded-xl py-3 px-8 font-medium cursor-pointer transition-colors duration-200 hover:bg-[#00123d]">
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="h-px bg-white/10 w-full mb-16 max-[768px]:mb-12"></div>

                {/* Main Content */}
                <div className="flex justify-between mt-auto pb-48 relative z-[2] max-[768px]:flex-col max-[768px]:gap-10 max-[768px]:pb-32 max-[768px]:text-left">
                    <div className="max-w-[300px]">
                        <div className="flex items-center gap-2 text-[1.5rem] font-semibold text-white mb-4">
                            <div className="flex gap-[2px]">
                                <div className="w-[6px] h-[20px] bg-accent-light rounded-[4px] -skew-x-[15deg]" style={{ opacity: 0.6 }}></div>
                                <div className="w-[6px] h-[20px] bg-accent-light rounded-[4px] -skew-x-[15deg]" style={{ opacity: 0.8 }}></div>
                                <div className="w-[6px] h-[20px] bg-accent-light rounded-[4px] -skew-x-[15deg]"></div>
                            </div>
                            AccelForge
                        </div>
                        <p className="text-gray-400 text-[0.9rem] leading-[1.5]">
                            Make your complicated <br />
                            finance more simple
                        </p>
                    </div>

                    <div className="flex gap-16 max-[768px]:flex-wrap max-[768px]:gap-8 max-[768px]:justify-start">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[1rem] font-semibold mb-2">Extra links</h4>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Features</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Pricing</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Contact</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Blog</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[1rem] font-semibold mb-2">Social media</h4>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Instagram</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">YouTube</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Facebook</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">X</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[1rem] font-semibold mb-2">AccelForge</h4>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Licensing</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Style Guide</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Powered by Webflow</a>
                        </div>
                    </div>
                </div>

                {/* Watermark */}
                <div className="absolute -bottom-[5%] left-1/2 -translate-x-1/2 font-sans text-[18vw] font-bold text-white/5 whitespace-nowrap pointer-events-none z-[1] leading-none max-[768px]:text-[22vw] max-[768px]:bottom-0">
                    AccelForge
                </div>
            </div>
        </section>
    );
};

export default Footer;
