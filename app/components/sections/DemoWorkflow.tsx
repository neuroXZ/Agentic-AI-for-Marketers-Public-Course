import { demoWorkflowSteps } from "../../content";

export default function DemoWorkflow() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center text-gray-900">
        Use-Case: Auto-Reply Lead
      </h2>
      <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
        Bina workflow auto reply anda!
      </p>
      <div className="grid sm:grid-cols-3 gap-5">
        {demoWorkflowSteps.map((item) => (
          <div
            key={item.step}
            className="border border-gray-200 rounded-xl p-6 text-center"
            style={{ backgroundColor: "#13007C" }}
          >
            <p className="text-gold-400 text-sm font-semibold mb-2">
              {item.step}
            </p>
            <p className="text-white">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
