import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, CheckSquare, TrendingUp, Users, Calendar, BarChart3 } from 'lucide-react';

const HeroVisual = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center perspective-[1000px] overflow-hidden max-[768px]:min-h-[400px] max-[768px]:py-8">
            {/* Central Phone/App Interface */}
            <motion.div
                className="w-[280px] h-[480px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.3),0_0_0_8px_rgba(255,255,255,0.1)] p-6 flex flex-col relative z-10 preserve-3d max-[1024px]:w-[240px] max-[1024px]:h-[420px] max-[768px]:w-[200px] max-[768px]:h-[360px]"
                initial={{ y: 40, opacity: 0, rotateX: 10 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                    <span className="font-bold text-[1.1rem] text-accent-primary">AccelForge</span>
                    <div className="flex items-center gap-1.5 text-[0.8rem] text-gray-500 bg-gray-100 px-2 py-1 rounded-xl">
                        <Users size={14} />
                        <span>Team</span>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-3">
                    <div className="bg-gray-100 p-3 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none w-[80%] flex flex-col gap-1.5">
                        <div className="h-1.5 bg-gray-200 rounded-full w-[70%]"></div>
                        <div className="h-1.5 bg-gray-200 rounded-full w-[40%]"></div>
                    </div>
                    <div className="self-end bg-accent-primary p-3 rounded-tl-xl rounded-tr-xl rounded-br-none rounded-bl-xl w-[80%] flex flex-col gap-1.5">
                        <div className="h-1.5 bg-white/30 rounded-full w-[60%]"></div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none w-[80%] flex flex-col gap-1.5">
                        <div className="h-1.5 bg-gray-200 rounded-full w-[50%]"></div>
                    </div>
                </div>

                <div className="mt-auto bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <div className="flex justify-between text-[0.85rem] text-gray-600 mb-2 font-medium">
                        <span>Pipeline Velocity</span>
                        <span className="text-emerald-500 font-semibold">+24%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-accent-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '75%' }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        ></motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Floating Elements */}

            {/* Top Left: Schedule */}
            <motion.div
                className="absolute bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] w-[180px] z-20 max-[1024px]:scale-90 max-[768px]:hidden top-[15%] left-[5%] max-[1024px]:left-[2%]"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
                transition={{
                    x: { duration: 0.8, delay: 0.2 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <div className="flex items-center gap-2 mb-3 text-[0.9rem] font-semibold text-gray-800">
                    <Calendar size={14} className="text-accent-primary" />
                    <span>Q3 Strategy</span>
                </div>
                <div className="flex gap-2.5 mb-2 text-[0.8rem]">
                    <div className="text-gray-400 font-medium w-[35px]">10:00</div>
                    <div className="text-gray-600 font-medium">Revenue Review</div>
                </div>
                <div className="flex gap-2.5 mb-2 text-[0.8rem]">
                    <div className="text-gray-400 font-medium w-[35px]">14:30</div>
                    <div className="text-gray-600 font-medium">GTM Planning</div>
                </div>
            </motion.div>

            {/* Bottom Left: To-do List */}
            <motion.div
                className="absolute bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] w-[180px] z-20 max-[1024px]:scale-90 max-[768px]:hidden bottom-[20%] left-[8%]"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1, y: [0, 8, 0] }}
                transition={{
                    x: { duration: 0.8, delay: 0.4 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
            >
                <div className="flex items-center gap-2 mb-3 text-[0.9rem] font-semibold text-gray-800">
                    <CheckSquare size={14} className="text-accent-primary" />
                    <span>Priorities</span>
                </div>
                <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-4 h-4 border border-emerald-500 bg-emerald-500 rounded flex items-center justify-center">
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full flex-1"></div>
                </div>
                <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center"></div>
                    <div className="h-1.5 bg-gray-100 rounded-full flex-1"></div>
                </div>
                <div className="flex mt-3">
                    <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white -mr-2"></div>
                    <div className="w-6 h-6 rounded-full bg-indigo-100 border-2 border-white -mr-2"></div>
                    <div className="w-6 h-6 rounded-full bg-amber-100 border-2 border-white -mr-2"></div>
                </div>
            </motion.div>

            {/* Right: Stats/Graph */}
            <motion.div
                className="absolute bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] w-[160px] z-20 max-[1024px]:scale-90 max-[768px]:hidden top-[35%] right-[5%] max-[1024px]:right-[2%]"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1, y: [0, -12, 0] }}
                transition={{
                    x: { duration: 0.8, delay: 0.6 },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
            >
                <div className="flex items-center gap-2 mb-3 text-[0.9rem] font-semibold text-gray-800">
                    <BarChart3 size={14} className="text-accent-primary" />
                    <span>Conversion</span>
                </div>
                <div className="flex items-end gap-1.5 h-[60px] mb-3 pb-1 border-b border-gray-100">
                    <div className="flex-1 bg-gray-200 rounded-t h-[40%]"></div>
                    <div className="flex-1 bg-gray-200 rounded-t h-[65%]"></div>
                    <div className="flex-1 bg-gray-200 rounded-t h-[35%]"></div>
                    <div className="flex-1 bg-accent-primary rounded-t h-[85%]"></div>
                    <div className="flex-1 bg-gray-200 rounded-t h-[55%]"></div>
                </div>
                <div className="flex justify-between text-[0.75rem] text-gray-500">
                    <span>Weekly Growth</span>
                    <span className="text-emerald-500 font-semibold">+12.5%</span>
                </div>
            </motion.div>

        </div>
    );
};

export default HeroVisual;
