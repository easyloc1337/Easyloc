import { ModuleCards } from "@/components/ModuleCards";
import { ScrollHero } from "@/components/ScrollHero";

export default function HomePage() {
  return (
    <>
      <ScrollHero />
      <main className="home-after-hero home-after-hero-v8">
        <section id="modules" className="container section modules-entry modules-entry-v8">
          <div className="modules-headline modules-headline-v8">
            <span className="kicker">Services EasyLoc</span>
            <h2>Choisissez le service qui vous correspond.</h2>
          </div>
          <ModuleCards />
        </section>
      </main>
    </>
  );
}
