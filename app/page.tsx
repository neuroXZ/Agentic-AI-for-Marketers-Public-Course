import Hero from "./components/sections/Hero";
import WhyDifferent from "./components/sections/WhyDifferent";
import Outcomes from "./components/sections/Outcomes";
import DemoWorkflow from "./components/sections/DemoWorkflow";
import Agenda from "./components/sections/Agenda";
import Trainer from "./components/sections/Trainer";
import Included from "./components/sections/Included";
import FinalCta from "./components/sections/FinalCta";
import Footer from "./components/sections/Footer";
import RegisterForm from "./components/RegisterForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyDifferent />
      <Outcomes />
      <DemoWorkflow />
      <Agenda />
      <Trainer />
      <Included />
      <FinalCta />
      <section
        id="daftar"
        className="px-6 py-20"
        style={{ backgroundColor: "#0a0a23" }}
      >
        <div className="max-w-6xl mx-auto">
          <RegisterForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
