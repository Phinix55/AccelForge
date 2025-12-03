import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './HowItWorks.module.css';
import ScrollReveal from './ScrollReveal';

const HowItWorks = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <ScrollReveal>
                    <h2 className={styles.heading}>How We Build Revenue Systems That Scale</h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className={styles.subtext}>
                        Growth without strategy is chaos. Growth without execution is fantasy. We deliver both—combining rigorous planning with hands-on execution to create sustainable, predictable revenue growth.
                    </p>
                </ScrollReveal>
            </div>

            <div className={styles.cardsContainer}>
                <ScrollReveal delay={0.2} className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <div className={styles.stepNumber}>1</div>
                        <h3 className={styles.cardTitle}>Strategic Discovery & Planning</h3>
                        <p className={styles.cardText}>
                            We audit your current revenue operations, identify gaps, and design a customized growth blueprint aligned with your market opportunity and business goals.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.3} className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <div className={styles.stepNumber}>2</div>
                        <h3 className={styles.cardTitle}>Execution & Implementation</h3>
                        <p className={styles.cardText}>
                            From demand generation to sales optimization and RevOps alignment, we execute your strategy with precision. Our hands-on team works seamlessly with yours to drive immediate results while building internal capabilities.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.4} className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <div className={styles.stepNumber}>3</div>
                        <h3 className={styles.cardTitle}>Optimize, Scale & Sustain</h3>
                        <p className={styles.cardText}>
                            We monitor performance, refine processes, and scale what works. Using real-time analytics and continuous testing, we ensure your revenue engine runs efficiently and compounds growth over time.
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            <div className={styles.footer}>
                <ScrollReveal delay={0.5}>
                    <p className={styles.footerText}>
                        Streamline your growth with AccelForge. Save time, reduce complexity, and take control with ease.
                    </p>
                    <button className={styles.ctaBtn}>
                        Free trial <ArrowRight size={18} />
                    </button>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default HowItWorks;
