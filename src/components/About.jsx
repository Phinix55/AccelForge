import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const AnimatedNumber = ({ value, duration = 1000, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) {
      return;
    }

    hasAnimated.current = true;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = startValue + (value - startValue) * easeOutQuart;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  // Determine decimal places based on the target value
  const decimals = value % 1 !== 0 ? 1 : 0;
  
  return <span ref={ref}>{displayValue.toFixed(decimals)}{suffix}</span>;
};

const About = () => {
    return (
        <section className="py-24 px-16 max-[1024px]:py-16 max-[1024px]:px-8 max-[768px]:p-6 max-[768px]:mx-4 max-[768px]:mb-4">
            <div className="max-w-[1200px] mx-auto mb-24 flex justify-between items-start gap-16 max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:text-center max-[1024px]:gap-8 max-[1024px]:mb-16 max-[768px]:mb-6 max-[768px]:items-start max-[768px]:text-left">
                <div className="shrink-0">
                    <ScrollReveal>
                        <span className="bg-accent-light text-accent-primary py-3 px-6 rounded-full font-semibold text-[0.95rem] inline-block">About Us</span>
                    </ScrollReveal>
                </div>
                <div className="max-w-[800px]">
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-[50px] leading-tight text-text-primary mb-8 mt-0 max-w-full max-[1024px]:text-[2.5rem] max-[768px]:text-[28px] max-[768px]:mb-2 max-[768px]:leading-[1.3]">
                            Working together to deliver value
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-[1.1rem] text-gray-600 leading-[1.6] max-w-full max-[768px]:text-[16px] max-[768px]:m-0">
                            AccelForge supports business growth for organizations via sales planning, digital marketing, consulting, employee hiring and training, and consulting support. <br></br> Our team of experts are excellent listeners and have terrific execution skills. If you have a persistent business issue, consider it gone for good with AccelForge. We consider all aspects, including breakdowns, before we kick start the smallest of tasks. Thus delivering solutions that eliminate risks, satisfy customers, and bring in unmatched ROIs.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="flex justify-between items-center max-w-[1200px] mx-auto pt-8 max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:gap-8 max-[768px]:p-0">
                <ScrollReveal delay={0.3} className="flex flex-col gap-2 text-center">
                    <div className="text-[3.5rem] font-normal text-text-primary max-[768px]:text-[2rem]">
                        <AnimatedNumber value={2500} suffix="+" />
                    </div>
                    <div className="text-gray-400 text-[1rem] max-[768px]:text-[0.9rem]">Partners & customers</div>
                </ScrollReveal>
                <div className="w-px h-20 bg-gray-200 max-[768px]:hidden"></div>
                <ScrollReveal delay={0.3} className="flex flex-col gap-2 text-center">
                    <div className="text-[3.5rem] font-normal text-text-primary max-[768px]:text-[2rem]">
                        $<AnimatedNumber value={2259.56} duration={1200} />
                    </div>
                    <div className="text-gray-400 text-[1rem] max-[768px]:text-[0.9rem]">Raise Invest in 2024</div>
                </ScrollReveal>
                <div className="w-px h-20 bg-gray-200 max-[768px]:hidden"></div>
                <ScrollReveal delay={0.3} className="flex flex-col gap-2 text-center">
                    <div className="text-[3.5rem] font-normal text-text-primary max-[768px]:text-[2rem]">
                        <AnimatedNumber value={5.0} />
                    </div>
                    <div className="text-gray-400 text-[1rem] max-[768px]:text-[0.9rem]">Custome review</div>
                </ScrollReveal>
                <div className="w-px h-20 bg-gray-200 max-[768px]:hidden"></div>
                <ScrollReveal delay={0.3} className="flex flex-col gap-2 text-center">
                    <div className="text-[3.5rem] font-normal text-text-primary max-[768px]:text-[2rem]">
                        <AnimatedNumber value={205} suffix="+" />
                    </div>
                    <div className="text-gray-400 text-[1rem] max-[768px]:text-[0.9rem]">Produces</div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default About;