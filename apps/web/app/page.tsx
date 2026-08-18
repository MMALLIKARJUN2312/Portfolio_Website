import { Footer, Navigation } from '@/components/layout';
import { About, Contact, Experience, Hero, Projects, Skills } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
