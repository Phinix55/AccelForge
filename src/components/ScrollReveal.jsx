import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, width = "100%", delay = 0, className = "", style = {} }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            style={{ width, ...style }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
