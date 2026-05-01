import { Footer } from "@/components/nav/Footer";
import { Navbar } from "@/components/nav/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import {
  AwardsSection,
  CertificationsSection,
  SkillsSection,
} from "@/components/sections/SkillsCertsAwards";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillsSection />
        <CertificationsSection />
        <AwardsSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
