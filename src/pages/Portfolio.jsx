import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Blog } from "../components/Blog";
import { Certificates } from "../components/Certificates";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-emerald-50 text-zinc-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Blog />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
