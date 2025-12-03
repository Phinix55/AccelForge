import React from 'react';
import styles from './LogoMarquee.module.css';

const LOGOS = [
    { name: 'Logoipsum 1', url: 'https://logoipsum.com/logo/logo-1.svg' },
    { name: 'Logoipsum 2', url: 'https://logoipsum.com/logo/logo-2.svg' },
    { name: 'Logoipsum 3', url: 'https://logoipsum.com/logo/logo-3.svg' },
    { name: 'Logoipsum 4', url: 'https://logoipsum.com/logo/logo-4.svg' },
    { name: 'Logoipsum 5', url: 'https://logoipsum.com/logo/logo-5.svg' },
    { name: 'Logoipsum 6', url: 'https://logoipsum.com/logo/logo-6.svg' },
];

const LogoMarquee = () => {
    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
                {/* Render logos twice for seamless loop */}
                {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                    <div key={index} className={styles.logoItem}>
                        {/* Using text placeholder styled as logo if image fails, or actual SVG if available */}
                        <span className={styles.logoText}>Logoipsum</span>
                    </div>
                ))}
            </div>
            <div className={styles.fadeLeft}></div>
            <div className={styles.fadeRight}></div>
        </div>
    );
};

export default LogoMarquee;
