import { About } from "@/components/about";
import { Achievements } from "@/components/achievements";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Experience />
        {/*
          Selected Work — intentionally deferred until there are 2–3 projects
          worth showing. Drop a <SelectedWork /> section here when ready.
        */}
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
