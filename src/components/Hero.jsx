import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';
import heroImage from '../assets/Image for hero section.webp';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.leftColumn}>
                <ScrollReveal delay={0.1}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>+</span> 1500 reviews
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <h1 className={styles.heading}>
                        Enterprise Growth That Moves Faster
                    </h1>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <p className={styles.subtext}>
                        From strategy to execution. AccelForge partners with ambitious enterprises to build predictable sales pipelines, optimize revenue operations, and capture market opportunities faster.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                    <div className={styles.ctaGroup}>
                        <button className={styles.primaryBtn}>
                            Download app <ArrowRight size={20} />
                        </button>
                        <button className={styles.secondaryBtn}>
                            Free trial
                        </button>
                    </div>
                </ScrollReveal>
            </div>

            <div className={styles.rightColumn}>
                <ScrollReveal delay={0.5} style={{ height: '100%' }}>
                    {/* Green Background Container */}
                    <div className={styles.visualContainer}>
                        {/* Mockups removed per user request */}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Hero;
