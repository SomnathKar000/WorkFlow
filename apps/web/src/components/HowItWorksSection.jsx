const steps = [
  {
    number: "1",
    title: "Connect",
    description:
      "Securely link your version control and project management tools in one click.",
  },
  {
    number: "2",
    title: "We Read",
    description:
      "Our agent parses commit messages, PR descriptions, and task status changes.",
  },
  {
    number: "3",
    title: "AI Writes",
    description:
      "We synthesize a clean, human-readable update that highlights your impact, not just your activity.",
  },
  {
    number: "4",
    title: "Send to Slack",
    description:
      "Review your draft and post it to your team channel instantly. 10 seconds, done.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section">
      <p className="section-label">How it works</p>
      <div
        className="steps-container"
        style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
      >
        {steps.map((step) => (
          <div key={step.number} className="step-item">
            <div className="step-number">{step.number}</div>
            <h4 className="text-headline-md text-primary-col">{step.title}</h4>
            <p className="text-body-md text-text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
