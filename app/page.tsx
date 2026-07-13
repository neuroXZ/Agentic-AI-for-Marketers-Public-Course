import Hero from "./components/sections/Hero";
import WhyDifferent from "./components/sections/WhyDifferent";
import Outcomes from "./components/sections/Outcomes";
import DemoWorkflow from "./components/sections/DemoWorkflow";
import Agenda from "./components/sections/Agenda";
import Trainer from "./components/sections/Trainer";
import Included from "./components/sections/Included";
import FinalCta from "./components/sections/FinalCta";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Hero />
      <WhyDifferent />
      <Outcomes />
      <DemoWorkflow />
      <Agenda />
      <Trainer />
      <Included />
      <FinalCta />
      <Footer />
    </main>
  );
}
