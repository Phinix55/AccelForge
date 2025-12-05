import React from 'react';
import { Settings, ArrowRight, X, User, Wallet, Database, Globe, CreditCard, Bitcoin } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesGrid = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: delay, ease: "easeOut" }
        })
    };

    return (
        <section className="w-auto max-w-none mx-4 mb-16 p-0 max-[768px]:mx-4 max-[768px]:mb-8">
            <div className="text-center mb-16">
                <h2 className="font-serif text-[3rem] font-medium text-text-primary leading-[1.2] max-[1024px]:text-[2.5rem] max-[768px]:text-[2.2rem] max-[768px]:mb-8">Your Revenue Growth Starts Here</h2>
            </div>
            <div className="grid grid-cols-6 gap-6 max-[1024px]:grid-cols-1 max-[768px]:gap-6">
                {/* Card 1: Digital Marketing (Bar Chart) */}
                <motion.div
                    className="col-span-3 max-[1024px]:col-auto bg-white rounded-3xl overflow-hidden border border-[#d6e4ff] flex flex-col transition-all duration-300 ease-out cursor-default h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-transparent max-[768px]:rounded-[20px]"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    custom={0.1}
                >
                    <div className="bg-[#fcfcfc] h-[280px] flex items-center justify-center relative overflow-hidden border-b border-[#f0f0f0]">
                        <div className="flex items-end gap-3 h-[120px] pb-2.5 border-b-2 border-[#eee]">
                            <div className="w-[30px] bg-accent-light rounded-t-md transition-[height] duration-500 relative h-[40px]"></div>
                            <div className="w-[30px] bg-accent-light rounded-t-md transition-[height] duration-500 relative h-[70px]"></div>
                            <div className="w-[30px] bg-accent-light rounded-t-md transition-[height] duration-500 relative h-[55px]"></div>
                            <div className="w-[30px] bg-accent-primary rounded-t-md transition-[height] duration-500 relative h-[90px]"></div>
                            <div className="w-[30px] bg-accent-primary rounded-t-md transition-[height] duration-500 relative h-[110px]"></div>
                        </div>
                    </div>
                    <div className="p-10 text-center flex flex-col items-center grow max-[768px]:p-6">
                        <h3 className="font-serif text-[1.5rem] font-semibold mb-4 text-text-primary tracking-[-0.01em] leading-[1.3] max-[768px]:text-[1.3rem]">Digital Marketing & Demand Generation</h3>
                        <p className="text-[1rem] text-[#666] leading-[1.6] mb-8 max-w-[400px]">
                            From strategy to execution, we build marketing systems that generate qualified leads and drive predictable pipeline growth through content, SEO, and performance marketing.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 font-bold text-[0.9rem] text-accent-primary no-underline transition-all duration-200 uppercase tracking-[0.05em] mt-auto hover:gap-3">
                            LEARN MORE <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Card 2: GTM Strategy (Orbit) */}
                <motion.div
                    className="col-span-3 max-[1024px]:col-auto bg-white rounded-3xl overflow-hidden border border-[#d6e4ff] flex flex-col transition-all duration-300 ease-out cursor-default h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-transparent max-[768px]:rounded-[20px]"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    custom={0.2}
                >
                    <div className="bg-[#fcfcfc] h-[280px] flex items-center justify-center relative overflow-hidden border-b border-[#f0f0f0]">
                        <div className="w-[260px] h-[260px] relative flex items-center justify-center">
                            <div className="absolute w-[220px] h-[220px] border border-dashed border-gray-300 rounded-full animate-spin [animation-duration:20s]"></div>
                            <div className="absolute w-[140px] h-[140px] border border-dashed border-gray-300 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]"></div>
                            <div className="w-[70px] h-[70px] bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center z-10">
                                <div className="w-[30px] h-[30px] bg-accent-primary rounded-md"></div>
                            </div>
                            <div className="absolute w-[36px] h-[36px] bg-accent-primary rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.15)] text-white -top-[18px] left-1/2 -translate-x-1/2"><Globe size={18} /></div>
                            <div className="absolute w-[36px] h-[36px] bg-accent-primary rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.15)] text-white -bottom-[18px] left-1/2 -translate-x-1/2"><Database size={18} /></div>
                            <div className="absolute w-[36px] h-[36px] bg-accent-primary rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.15)] text-white top-1/2 -right-[18px] -translate-y-1/2"><Settings size={18} /></div>
                            <div className="absolute w-[36px] h-[36px] bg-accent-primary rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.15)] text-white top-1/2 -left-[18px] -translate-y-1/2"><User size={18} /></div>
                        </div>
                    </div>
                    <div className="p-10 text-center flex flex-col items-center grow max-[768px]:p-6">
                        <h3 className="font-serif text-[1.5rem] font-semibold mb-4 text-text-primary tracking-[-0.01em] leading-[1.3] max-[768px]:text-[1.3rem]">Go-To-Market Strategy & RevOps</h3>
                        <p className="text-[1rem] text-[#666] leading-[1.6] mb-8 max-w-[400px]">
                            We design GTM strategies and optimize your revenue operations so marketing, sales, and service teams work in perfect harmony—eliminating silos and accelerating growth.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 font-bold text-[0.9rem] text-accent-primary no-underline transition-all duration-200 uppercase tracking-[0.05em] mt-auto hover:gap-3">
                            LEARN MORE <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Card 3: Lead Generation (Stacked Cards) */}
                <motion.div
                    className="col-span-2 max-[1024px]:col-auto bg-white rounded-3xl overflow-hidden border border-[#d6e4ff] flex flex-col transition-all duration-300 ease-out cursor-default h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-transparent max-[768px]:rounded-[20px]"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    custom={0.3}
                >
                    <div className="bg-[#fcfcfc] h-[280px] flex items-center justify-center relative overflow-hidden border-b border-[#f0f0f0]">
                        <div className="relative w-[220px] h-[140px]">
                            <div className="absolute w-full h-[100px] bg-white rounded-2xl p-4 shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-[#eee] flex items-center gap-4 top-0 z-[1] scale-90 opacity-60">
                                <div className="w-8 h-8 bg-[#e0e0e0] rounded-full"></div>
                                <div className="h-2 bg-[#f0f0f0] rounded-full grow"></div>
                            </div>
                            <div className="absolute w-full h-[100px] bg-white rounded-2xl p-4 shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-[#eee] flex items-center gap-4 top-[20px] z-[2] scale-95 opacity-80">
                                <div className="w-8 h-8 bg-[#e0e0e0] rounded-full"></div>
                                <div className="h-2 bg-[#f0f0f0] rounded-full grow"></div>
                            </div>
                            <div className="absolute w-full h-[100px] bg-white rounded-2xl p-4 shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-[#eee] flex items-center gap-4 top-[40px] z-[3] scale-100">
                                <div className="w-8 h-8 bg-[#e0e0e0] rounded-full"></div>
                                <div className="h-2 bg-[#f0f0f0] rounded-full grow"></div>
                                <Settings size={16} color="#ccc" />
                            </div>
                        </div>
                    </div>
                    <div className="p-10 text-center flex flex-col items-center grow max-[768px]:p-6">
                        <h3 className="font-serif text-[1.5rem] font-semibold mb-4 text-text-primary tracking-[-0.01em] leading-[1.3] max-[768px]:text-[1.3rem]">Lead Generation & Sales Infrastructure</h3>
                        <p className="text-[1rem] text-[#666] leading-[1.6] mb-8 max-w-[400px]">
                            We build pre-sales systems that qualify opportunities faster, structure your sales team, and optimize CRM to help you close deals with predictable efficiency.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 font-bold text-[0.9rem] text-accent-primary no-underline transition-all duration-200 uppercase tracking-[0.05em] mt-auto hover:gap-3">
                            LEARN MORE <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Card 4: Customer Experience (Chat) */}
                <motion.div
                    className="col-span-2 max-[1024px]:col-auto bg-white rounded-3xl overflow-hidden border border-[#d6e4ff] flex flex-col transition-all duration-300 ease-out cursor-default h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-transparent max-[768px]:rounded-[20px]"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    custom={0.4}
                >
                    <div className="bg-[#fcfcfc] h-[280px] flex items-center justify-center relative overflow-hidden border-b border-[#f0f0f0]">
                        <div className="w-[240px] bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-5 border border-[#eee]">
                            <div className="bg-gray-100 p-3 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none text-[0.8rem] text-[#555] mb-4 relative before:content-[''] before:absolute before:-bottom-1.5 before:left-0 before:w-3 before:h-3 before:bg-gray-100 before:[clip-path:polygon(0_0,100%_0,0_100%)]">
                                How can we improve retention?
                            </div>
                            <div className="bg-accent-primary text-white p-3 rounded-tl-xl rounded-tr-xl rounded-br-none rounded-bl-xl text-[0.8rem] ml-auto max-w-[80%]">
                                Optimizing the user journey...
                            </div>
                        </div>
                    </div>
                    <div className="p-10 text-center flex flex-col items-center grow max-[768px]:p-6">
                        <h3 className="font-serif text-[1.5rem] font-semibold mb-4 text-text-primary tracking-[-0.01em] leading-[1.3] max-[768px]:text-[1.3rem]">Customer Experience & Retention</h3>
                        <p className="text-[1rem] text-[#666] leading-[1.6] mb-8 max-w-[400px]">
                            Transform customers into advocates. We optimize the entire customer journey to maximize lifetime value, reduce churn, and build sustainable competitive advantage.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 font-bold text-[0.9rem] text-accent-primary no-underline transition-all duration-200 uppercase tracking-[0.05em] mt-auto hover:gap-3">
                            LEARN MORE <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Card 5: OKR Alignment (Checklist) */}
                <motion.div
                    className="col-span-2 max-[1024px]:col-auto bg-white rounded-3xl overflow-hidden border border-[#d6e4ff] flex flex-col transition-all duration-300 ease-out cursor-default h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-transparent max-[768px]:rounded-[20px]"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    custom={0.5}
                >
                    <div className="bg-[#fcfcfc] h-[280px] flex items-center justify-center relative overflow-hidden border-b border-[#f0f0f0]">
                        <div className="w-[220px] bg-white rounded-[20px] p-6 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-[#eee]">
                            <div className="flex items-center gap-3 mb-3 last:mb-0">
                                <div className="w-5 h-5 rounded-full bg-accent-light flex items-center justify-center text-accent-primary text-[12px] font-bold">✓</div>
                                <div className="h-2 bg-[#f0f0f0] rounded-full w-full"></div>
                            </div>
                            <div className="flex items-center gap-3 mb-3 last:mb-0">
                                <div className="w-5 h-5 rounded-full bg-accent-light flex items-center justify-center text-accent-primary text-[12px] font-bold">✓</div>
                                <div className="h-2 bg-[#f0f0f0] rounded-full w-[70%]"></div>
                            </div>
                            <div className="flex items-center gap-3 mb-3 last:mb-0">
                                <div className="w-5 h-5 rounded-full bg-accent-light flex items-center justify-center text-accent-primary text-[12px] font-bold">✓</div>
                                <div className="h-2 bg-[#f0f0f0] rounded-full w-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10 text-center flex flex-col items-center grow max-[768px]:p-6">
                        <h3 className="font-serif text-[1.5rem] font-semibold mb-4 text-text-primary tracking-[-0.01em] leading-[1.3] max-[768px]:text-[1.3rem]">OKR Alignment & Performance</h3>
                        <p className="text-[1rem] text-[#666] leading-[1.6] mb-8 max-w-[400px]">
                            We implement OKR frameworks and drive accountability across your organization—ensuring every team's goals directly contribute to revenue growth.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 font-bold text-[0.9rem] text-accent-primary no-underline transition-all duration-200 uppercase tracking-[0.05em] mt-auto hover:gap-3">
                            LEARN MORE <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
