import { demoWorkflowSteps } from "../../content";

export default function DemoWorkflow() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
        Use-Case: Auto-Reply Lead
      </h2>
      <p className="text-white/60 text-center mb-10 max-w-2xl mx-auto">
        Workflow yang akan anda bina bersama semasa sesi hands-on
      </p>
      <div className="grid sm:grid-cols-3 gap-5">
        {demoWorkflowSteps.map((item) => (
          <div
            key={item.step}
            className="bg-navy-900/60 border border-white/10 rounded-xl p-6 text-center"
          >
            <p className="text-gold-400 text-sm font-semibold mb-2">
              {item.step}
            </p>
            <p className="text-white/80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
