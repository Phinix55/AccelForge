import React from 'react';


const testimonialsData = [
    {
        id: 1,
        quote: "I Never Thought Managing My Personal Finances Could Be This Simple. Moveta's Real-Time Insights Have Helped Me Budget Better And Save More Each Month.",
        name: "Michael Carter",
        role: "Freelance Web Developer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 2,
        quote: "Moveta Has Streamlined Our Workflows And Improved Efficiency. The Interface Is Intuitive And Effective. Highly Recommended!",
        name: "Anita Ramesh",
        role: "Manager at GlobeSync",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 3,
        quote: "As A Global Business, Tracking Multiple Currencies Was Always A Hassle—Until We Found Moveta. Their Platform Is Seamless, And The Support Team Is Phenomenal!",
        name: "Jordyn Saris",
        role: "CEO, Beta Technologies",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 4,
        quote: "The Intuitive Dashboards And Powerful Tools Have Transformed The Way I Approach My Finances. Moveta Truly Delivers On Its Promise Of Simplicity And Efficiency.",
        name: "James Rodriguez",
        role: "Founder of Green Earth",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 5,
        quote: "Managing expenses used to be a nightmare. With Moveta, it's actually become something I look forward to. The automation is a game changer.",
        name: "Sarah Jenkins",
        role: "Small Business Owner",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
];

const Testimonials = () => {
    return (
        <section className="py-8 pb-24 bg-white overflow-hidden max-[768px]:py-8 max-[768px]:pb-16">
            <div className="text-center max-w-[800px] mx-auto mb-16 px-4 max-[768px]:mb-8 max-[768px]:px-6">
                <h2 className="font-serif text-[3.5rem] font-medium mb-4 text-text-primary max-[768px]:text-[2.5rem] max-[768px]:mb-4 max-[768px]:leading-[1.1]">What Our Clients <span className="italic font-serif font-normal">are Saying</span></h2>
                <p className="text-[1rem] text-[#888] leading-[1.6] max-[768px]:text-[1rem] max-[768px]:px-2">
                    Our users love how Mondal CRM simplifies their processes and streamlines operations
                </p>
            </div>

            <div className="relative w-full overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex gap-8 w-max animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
                    {/* Render cards twice for seamless loop */}
                    {[...testimonialsData, ...testimonialsData].map((item, index) => (
                        <div key={`${item.id}-${index}`} className="bg-white border border-[#eee] rounded-3xl p-8 w-[350px] shrink-0 flex flex-col justify-between transition-all duration-300 ease-out cursor-default hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-transparent hover:z-10 max-[768px]:w-full max-[768px]:max-w-[300px] max-[768px]:p-6">
                            <p className="text-[1rem] leading-[1.6] text-[#555] mb-8 font-normal">{item.quote}</p>
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                                <div className="flex flex-col">
                                    <h4 className="text-[1rem] font-bold text-text-primary mb-1">{item.name}</h4>
                                    <span className="text-[0.85rem] text-[#888]">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
