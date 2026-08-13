import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Hero } from "@/components/Hero";
import { HomeAtmosphere } from "@/components/HomeAtmosphere";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <HomeAtmosphere>
      <Hero />
      <About />
      <Capabilities />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </HomeAtmosphere>
  );
}
