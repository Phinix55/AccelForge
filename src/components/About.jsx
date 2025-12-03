import React from 'react';
import styles from './About.module.css';
import ScrollReveal from './ScrollReveal';

const About = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.topContent}>
                <div className={styles.badgeContainer}>
                    <ScrollReveal>
                        <span className={styles.badge}>About Us</span>
                    </ScrollReveal>
                </div>
                <div className={styles.textContent}>
                    <ScrollReveal delay={0.1}>
                        <h2 className={styles.heading}>
                            The Growth Partner Your Enterprise Deserve
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className={styles.subtext}>
                            Your go-to-market strategy, demand generation, sales operations, and customer success shouldn't require five different vendors. AccelForge delivers integrated growth consulting and execution—designed specifically for enterprises ready to scale strategically and sustainably.
                            <br /><br />
                            We combine strategic insight with operational excellence to turn revenue potential into revenue reality.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className={styles.statsRow}>
                <ScrollReveal delay={0.3} className={styles.statItem}>
                    <div className={styles.statNumber}>2500+</div>
                    <div className={styles.statLabel}>Partners & customers</div>
                </ScrollReveal>
                <div className={styles.divider}></div>
                <ScrollReveal delay={0.4} className={styles.statItem}>
                    <div className={styles.statNumber}>$2'259.56</div>
                    <div className={styles.statLabel}>Raise Invest in 2024</div>
                </ScrollReveal>
                <div className={styles.divider}></div>
                <ScrollReveal delay={0.5} className={styles.statItem}>
                    <div className={styles.statNumber}>5.0</div>
                    <div className={styles.statLabel}>Custome review</div>
                </ScrollReveal>
                <div className={styles.divider}></div>
                <ScrollReveal delay={0.6} className={styles.statItem}>
                    <div className={styles.statNumber}>205+</div>
                    <div className={styles.statLabel}>Produces</div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default About;
