import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import FeaturesGrid from './components/FeaturesGrid';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
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
        <div id="about">
          <ScrollReveal>
            <About />
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>
        <div id="services">
          <ScrollReveal>
            <FeaturesGrid />
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
        <div id="faq">
          <ScrollReveal>
            <FAQ />
          </ScrollReveal>
        </div>
      </main>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;
