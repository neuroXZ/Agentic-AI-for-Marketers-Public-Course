import Hero from "./components/sections/Hero";
import Outcomes from "./components/sections/Outcomes";
import DemoWorkflow from "./components/sections/DemoWorkflow";
import Testimonials from "./components/sections/Testimonials";
import Agenda from "./components/sections/Agenda";
import Trainer from "./components/sections/Trainer";
import ValueStack from "./components/sections/ValueStack";
import FAQ from "./components/sections/FAQ";
import FinalCta from "./components/sections/FinalCta";
import Footer from "./components/sections/Footer";
import RegisterForm from "./components/RegisterForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Outcomes />
      <DemoWorkflow />
      <Testimonials />
      <Agenda />
      <Trainer />
      <ValueStack />
      <FAQ />
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
