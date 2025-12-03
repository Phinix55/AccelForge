import React from 'react';
import { ArrowRight, Wifi } from 'lucide-react';
import styles from './CTASection.module.css';

const CreditCard = ({ className }) => (
    <div className={`${styles.creditCard} ${className}`}>
        <div className={styles.cardTop}>
            <div className={styles.cardLogo}>
                <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoSvg}>
                    <path d="M6 0L0 24H8L14 0H6Z" fill="#001a57" />
                    <path d="M18 0L12 24H20L26 0H18Z" fill="#001a57" />
                    <path d="M30 0L24 24H32L38 0H30Z" fill="#001a57" />
                </svg>
                <span>AccelForge</span>
            </div>
            <div className={styles.cardChip}>
                <div className={styles.chipLine}></div>
                <div className={styles.chipLine}></div>
                <div className={styles.chipLine}></div>
                <div className={styles.chipLine}></div>
            </div>
        </div>
        <div className={styles.contactless}>
            <Wifi size={28} style={{ transform: 'rotate(90deg)' }} />
        </div>
        <div className={styles.cardBottom}>
            <div className={styles.cardNumberLabel}>Card Number</div>
            <div className={styles.cardNumber}>1234 0000 6723 0088</div>
        </div>
        <div className={styles.cardDecoration}></div>
        <div className={styles.cardDecoration2}></div>
    </div>
);

const CTASection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h2 className={styles.heading}>
                        Ready to Transform Your <br />
                        Financial <span className={styles.italic}>Management?</span>
                    </h2>
                    <p className={styles.subtext}>
                        Experience the future of finance with our cutting-edge SaaS platform. Start optimizing your financial operations today!
                    </p>
                    <button className={styles.ctaBtn}>
                        Download app <ArrowRight size={18} />
                    </button>
                </div>

                <div className={styles.rightContent}>
                    <div className={styles.cardsWrapper}>
                        <CreditCard className={styles.cardBack} />
                        <CreditCard className={styles.cardFront} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
