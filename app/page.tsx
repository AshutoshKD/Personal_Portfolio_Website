import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Project } from "@/components/Project";
import { Numbers } from "@/components/Numbers";
import { Toolkit } from "@/components/Toolkit";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Project />
        <Numbers />
        <Toolkit />
        <Contact />
      </main>
    </>
  );
}
