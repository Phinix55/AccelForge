import React, { useState } from 'react';
import styles from './Header.module.css';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoIcon}>
                        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>AccelForge</span>
                </div>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href}>{link.name}</a>
                    ))}
                </nav>

                <div className={styles.desktopActions}>
                    <button className={styles.contactBtn}>Contact us</button>
                </div>

                <div className={styles.mobileActions}>
                    <button className={styles.menuBtn} onClick={toggleDrawer}>
                        <Menu size={24} color="#ffffff" />
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <motion.div
                        className={styles.mobileDrawer}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <div className={styles.drawerHeader}>
                            <button className={styles.closeBtn} onClick={toggleDrawer}>
                                <X size={32} />
                            </button>
                        </div>
                        <nav className={styles.mobileNav}>
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} onClick={toggleDrawer}>
                                    {link.name}
                                </a>
                            ))}
                            <button className={styles.mobileContactBtn} onClick={toggleDrawer}>Contact us</button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
