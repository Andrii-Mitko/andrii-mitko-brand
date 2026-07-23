import Header from "@/components/layout/Header/Header";
import About from "@/components/sections/About/About";
import Education from "@/components/sections/Education/Education";
import Experience from "@/components/sections/Experience/Experience";
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
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}
