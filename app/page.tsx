import Hero from "../components/Hero";
import Header from "../components/Header";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <ContactForm />
    </div>
  );
}