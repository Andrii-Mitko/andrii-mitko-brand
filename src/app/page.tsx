import Header from "@/components/layout/Header/Header";
import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";
import Education from "@/components/sections/Education/Education";
import Experience from "@/components/sections/Experience/Experience";
import Footer from "@/components/sections/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Projects from "@/components/sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
