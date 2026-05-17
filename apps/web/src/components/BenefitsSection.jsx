const benefits = [
  {
    id: "no-updates",
    icon: "timer",
    title: "No updates",
    description: "Stop context switching between coding and reporting.",
  },
  {
    id: "keep-focus",
    icon: "psychology",
    title: "Keep focus",
    description:
      "Stay in the flow state longer by automating administrative overhead.",
  },
  {
    id: "manager-clarity",
    icon: "visibility",
    title: "Manager clarity",
    description: "Give leadership exactly what they need without the fluff.",
  },
  {
    id: "searchable",
    icon: "search",
    title: "Searchable",
    description:
      "A permanent record of your progress, easily accessible for reviews.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-bordered">
      <p className="section-label">Benefits</p>
      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            id={benefit.id}
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <span className="material-symbols-outlined text-primary-col">
              {benefit.icon}
            </span>
            <h4 className="text-headline-md text-primary-col">
              {benefit.title}
            </h4>
            <p className="text-body-md text-text-muted">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
