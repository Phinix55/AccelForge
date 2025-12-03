import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Subscribe Section */}
                <div className={styles.subscribeSection}>
                    <h2 className={styles.title}>
                        Stay Ahead with Revenue <br />
                        <span className={styles.italic}>Growth Insights</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Subscribe to our newsletter for expert strategies, proven tactics, and the latest trends in B2B revenue acceleration.
                    </p>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.input}
                        />
                        <button type="submit" className={styles.button}>
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className={styles.divider}></div>

                {/* Main Content */}
                <div className={styles.mainContent}>
                    <div className={styles.brandColumn}>
                        <div className={styles.logo}>
                            <div className={styles.logoIcon}>
                                <div className={styles.bar} style={{ opacity: 0.6 }}></div>
                                <div className={styles.bar} style={{ opacity: 0.8 }}></div>
                                <div className={styles.bar}></div>
                            </div>
                            AccelForge
                        </div>
                        <p className={styles.tagline}>
                            Make your complicated <br />
                            finance more simple
                        </p>
                    </div>

                    <div className={styles.linksContainer}>
                        <div className={styles.column}>
                            <h4 className={styles.columnTitle}>Extra links</h4>
                            <a href="#" className={styles.link}>Features</a>
                            <a href="#" className={styles.link}>Pricing</a>
                            <a href="#" className={styles.link}>Contact</a>
                            <a href="#" className={styles.link}>Blog</a>
                        </div>
                        <div className={styles.column}>
                            <h4 className={styles.columnTitle}>Social media</h4>
                            <a href="#" className={styles.link}>Instagram</a>
                            <a href="#" className={styles.link}>YouTube</a>
                            <a href="#" className={styles.link}>Facebook</a>
                            <a href="#" className={styles.link}>X</a>
                        </div>
                        <div className={styles.column}>
                            <h4 className={styles.columnTitle}>AccelForge</h4>
                            <a href="#" className={styles.link}>Licensing</a>
                            <a href="#" className={styles.link}>Style Guide</a>
                            <a href="#" className={styles.link}>Powered by Webflow</a>
                        </div>
                    </div>
                </div>

                {/* Watermark */}
                <div className={styles.watermark}>
                    AccelForge
                </div>
            </div>
        </section>
    );
};

export default Footer;
