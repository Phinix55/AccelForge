import logo2 from '../assets/logo2.png';


const Footer = () => {
    return (
        <div>
            <section className="bg-[#0c110f] pt-16 px-14 text-white relative overflow-hidden min-h-[600px] flex flex-col max-[768px]:pt-10 max-[768px]:px-5 max-[768px]:pb-0 max-[768px]:min-h-0">
                {/* Subscribe Section */}
                <div className="text-center max-w-[800px] mx-auto mb-16 relative z-2 max-[768px]:mb-8 max-[768px]:text-left">
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
                <div className="flex justify-between mt-auto pb-48 relative z-2 max-[768px]:flex-col max-[768px]:gap-10 max-[768px]:pb-32 max-[768px]:text-left">
                    <div className="max-w-[300px]">
                        <img src={logo2} alt="Company Logo" className="w-40 h-auto object-contain mb-2" />
                        <p className="text-gray-400 text-[0.9rem] leading-normal">
                            Forging your Accelerated Sales Led Growth
                        </p>
                    </div>

                    <div className="flex gap-16 max-[768px]:flex-wrap max-[768px]:gap-8 max-[768px]:justify-start">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[1rem] font-semibold mb-2">Information Links</h4>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Home</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">About Us</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Digital Marketing Services</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">GTM & RevOps</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Pre-Sales and Demand Management</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Customer Experience Consulting</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">OKR Championship</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[1rem] font-semibold mb-2">Contact Info</h4>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Licensing</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Style Guide</a>
                            <a href="#" className="text-gray-400 no-underline text-[0.9rem] transition-colors duration-200 hover:text-white">Powered by Webflow</a>
                        </div>
                    </div>
                </div>

                {/* Watermark */}
                <div className="absolute -bottom-45 left-1/2 -translate-x-1/2 font-sans text-[18vw] font-bold text-white/5 whitespace-nowrap pointer-events-none z-1 max-[768px]:-bottom-10">
                    AccelForge
                </div>

        </section>
                <div className='text-white text-center bg-black py-3'>
                    Copyright © 2025 accelforge.com. All Rights Reserved
                </div>
        </div>
    );
};

export default Footer;
