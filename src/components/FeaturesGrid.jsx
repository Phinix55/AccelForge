import React from 'react';
import { Settings, ArrowRight, X, User, Wallet, Database, Globe, CreditCard, Bitcoin } from 'lucide-react';
import styles from './FeaturesGrid.module.css';
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

    const features = [
        {
            title: "Digital Marketing & Demand Generation",
            description: "From strategy to execution, we build marketing systems that generate qualified leads and drive predictable pipeline growth through content, SEO, and performance marketing.",
            delay: 0.1
        },
        {
            title: "Go-To-Market Strategy & RevOps",
            description: "We design GTM strategies and optimize your revenue operations so marketing, sales, and service teams work in perfect harmony—eliminating silos and accelerating growth.",
            delay: 0.2
        },
        {
            title: "Lead Generation & Sales Infrastructure",
            description: "We build pre-sales systems that qualify opportunities faster, structure your sales team, and optimize CRM to help you close deals with predictable efficiency.",
            delay: 0.3
        },
        {
            title: "Customer Experience & Retention",
            description: "Transform customers into advocates. We optimize the entire customer journey to maximize lifetime value, reduce churn, and build sustainable competitive advantage.",
            delay: 0.4
        },
        {
            title: "OKR Alignment & Performance",
            description: "We implement OKR frameworks and drive accountability across your organization—ensuring every team's goals directly contribute to revenue growth.",
            delay: 0.5
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.mainHeading}>Your Revenue Growth Starts Here</h2>
            </div>
            <div className={styles.grid}>
                {/* Card 1: Digital Marketing (Bar Chart) */}
                <motion.div
                    className={styles.card}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    custom={0.1}
                >
                    <div className={styles.visualArea}>
                        <div className={styles.chartVisual}>
                            <div className={`${styles.chartBar} ${styles.bar1}`}></div>
                            <div className={`${styles.chartBar} ${styles.bar2}`}></div>
                            <div className={`${styles.chartBar} ${styles.bar3}`}></div>
                            <div className={`${styles.chartBar} ${styles.bar4}`}></div>
                            <div className={`${styles.chartBar} ${styles.bar5}`}></div>
                        </div>
                    </div>
                    <div className={styles.contentArea}>
                        <h3 className={styles.title}>Digital Marketing & Demand Generation</h3>
                        <p className={styles.description}>
                            From strategy to execution, we build marketing systems that generate qualified leads and drive predictable pipeline growth through content, SEO, and performance marketing.
                        </p>
                        <a href="#" className={styles.learnMore}>
                            LEARN MORE <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Card 2: GTM Strategy (Orbit) */}
                <motion.div
                    className={styles.card}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    custom={0.2}
                >
                    <div className={styles.visualArea}>
                        <div className={styles.orbitSystem}>
                            <div className={styles.orbitRingOuter}></div>
                            <div className={styles.orbitRingInner}></div>
                            <div className={styles.centerLogo}>
                                <div className={styles.logoIcon}></div>
                            </div>
                            <div className={`${styles.orbitIcon} ${styles.pos1}`}><Globe size={18} /></div>
                            <div className={`${styles.orbitIcon} ${styles.pos2}`}><Database size={18} /></div>
                            <div className={`${styles.orbitIcon} ${styles.pos3}`}><Settings size={18} /></div>
                            <div className={`${styles.orbitIcon} ${styles.pos4}`}><User size={18} /></div>
                        </div>
                    </div>
                    <div className={styles.contentArea}>
                        <h3 className={styles.title}>Go-To-Market Strategy & RevOps</h3>
                        <p className={styles.description}>
                            We design GTM strategies and optimize your revenue operations so marketing, sales, and service teams work in perfect harmony—eliminating silos and accelerating growth.
                        </p>
                        <a href="#" className={styles.learnMore}>
                            LEARN MORE <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Card 3: Lead Generation (Stacked Cards) */}
                <motion.div
                    className={styles.card}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    custom={0.3}
                >
                    <div className={styles.visualArea}>
                        <div className={styles.stackedCards}>
                            <div className={`${styles.stackCard} ${styles.card3}`}>
                                <div className={styles.cardAvatar}></div>
                                <div className={styles.cardLine}></div>
                            </div>
                            <div className={`${styles.stackCard} ${styles.card2}`}>
                                <div className={styles.cardAvatar}></div>
                                <div className={styles.cardLine}></div>
                            </div>
                            <div className={`${styles.stackCard} ${styles.card1}`}>
                                <div className={styles.cardAvatar}></div>
                                <div className={styles.cardLine}></div>
                                <Settings size={16} color="#ccc" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentArea}>
                        <h3 className={styles.title}>Lead Generation & Sales Infrastructure</h3>
                        <p className={styles.description}>
                            We build pre-sales systems that qualify opportunities faster, structure your sales team, and optimize CRM to help you close deals with predictable efficiency.
                        </p>
                        <a href="#" className={styles.learnMore}>
                            LEARN MORE <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Card 4: Customer Experience (Chat) */}
                <motion.div
                    className={styles.card}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    custom={0.4}
                >
                    <div className={styles.visualArea}>
                        <div className={styles.chatInterface}>
                            <div className={styles.chatBubble}>
                                How can we improve retention?
                            </div>
                            <div className={styles.chatReply}>
                                Optimizing the user journey...
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentArea}>
                        <h3 className={styles.title}>Customer Experience & Retention</h3>
                        <p className={styles.description}>
                            Transform customers into advocates. We optimize the entire customer journey to maximize lifetime value, reduce churn, and build sustainable competitive advantage.
                        </p>
                        <a href="#" className={styles.learnMore}>
                            LEARN MORE <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Card 5: OKR Alignment (Checklist) */}
                <motion.div
                    className={styles.card}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    custom={0.5}
                >
                    <div className={styles.visualArea}>
                        <div className={styles.checklistVisual}>
                            <div className={styles.checkItem}>
                                <div className={styles.checkCircle}>✓</div>
                                <div className={`${styles.checkLine} ${styles.long}`}></div>
                            </div>
                            <div className={styles.checkItem}>
                                <div className={styles.checkCircle}>✓</div>
                                <div className={`${styles.checkLine} ${styles.short}`}></div>
                            </div>
                            <div className={styles.checkItem}>
                                <div className={styles.checkCircle}>✓</div>
                                <div className={`${styles.checkLine} ${styles.long}`}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentArea}>
                        <h3 className={styles.title}>OKR Alignment & Performance</h3>
                        <p className={styles.description}>
                            We implement OKR frameworks and drive accountability across your organization—ensuring every team's goals directly contribute to revenue growth.
                        </p>
                        <a href="#" className={styles.learnMore}>
                            LEARN MORE <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
