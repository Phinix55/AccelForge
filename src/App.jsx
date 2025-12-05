import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import FeaturesGrid from './components/FeaturesGrid';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import LogoMarquee from './components/LogoMarquee';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div>
      <Header />
      <main>
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>
        <ScrollReveal>
          <FeaturesGrid />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
      </main>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;
