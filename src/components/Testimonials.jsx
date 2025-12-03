import React from 'react';
import styles from './Testimonials.module.css';

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
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.heading}>What Our Clients <span className={styles.italic}>Are Saying</span></h2>
                <p className={styles.subtext}>
                    Our users love how Mondal CRM simplifies their processes and streamlines operations
                </p>
            </div>

            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeTrack}>
                    {/* Render cards twice for seamless loop */}
                    {[...testimonialsData, ...testimonialsData].map((item, index) => (
                        <div key={`${item.id}-${index}`} className={styles.card}>
                            <p className={styles.quote}>{item.quote}</p>
                            <div className={styles.profile}>
                                <img src={item.image} alt={item.name} className={styles.avatar} />
                                <div className={styles.info}>
                                    <h4 className={styles.name}>{item.name}</h4>
                                    <span className={styles.role}>{item.role}</span>
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
