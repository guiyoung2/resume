import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Workflow from "@/components/workflow/Workflow";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Workflow />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
