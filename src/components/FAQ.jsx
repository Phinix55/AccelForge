import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';

const faqData = [
    {
        question: "What makes AccelForge different?",
        answer: "We combine strategy with execution. While other consultants hand you a plan and leave, we work embedded with your team to implement, measure, and refine. You get integrated growth—not fragmented advice."
    },
    {
        question: "Who should work with AccelForge?",
        answer: "B2B enterprises and mid-market companies ($5M-$100M+) ready to scale. If you're experiencing growth plateaus, sales-marketing misalignment, or need predictable revenue systems, we're a fit."
    },
    {
        question: "How long until we see results?",
        answer: "30-60 days for initial improvements in pipeline or efficiency. 90-180 days for significant revenue acceleration as systems compound. We measure and adjust every month."
    },
    {
        question: "How do you track success?",
        answer: "Through revenue metrics: pipeline generation, sales cycle time, win rate, CAC, and customer retention. You get monthly dashboards showing real performance against targets."
    },
    {
        question: "What does an engagement cost?",
        answer: "Flexible models: project-based ($15K-$75K+ per project), retainer-based ($15K-$75K+/month), or hybrid. ROI typically far exceeds investment. We'll propose custom pricing after discovery."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`${styles.item} ${isOpen ? styles.open : ''}`} onClick={onClick}>
            <div className={styles.questionHeader}>
                <h3 className={styles.question}>{question}</h3>
                <span className={styles.iconWrapper}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </div>
            <div className={`${styles.answerContainer} ${isOpen ? styles.show : ''}`}>
                <p className={styles.answer}>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Getting Started Your <br />
                        Essential Questions <span className={styles.serifItalic}>Answered</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Explore the answers to common queries, and if you don't find what you're looking for, our support team is always ready to assist you.
                    </p>
                </div>

                <div className={styles.list}>
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleItem(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
