import Card from "./ui/Card";

const problems = [
  {
    id: "repetitive-work",
    title: "Repetitive Work",
    description:
      "You already pushed the code and updated the ticket. Why do you have to write it a third time for the Slack channel?",
  },
  {
    id: "fragmented-data",
    title: "Fragmented Data",
    description:
      "Context is scattered across pull requests, Figma comments, and thread replies. Manual updates always miss the nuance.",
  },
  {
    id: "updates-disappear",
    title: "Updates Disappear",
    description:
      "Once a standup is posted, it's buried. There's no searchable history of what actually happened last week.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-bordered">
      <p className="section-label">The Problem</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {problems.map((problem) => (
          <Card key={problem.id} id={problem.id} title={problem.title}>
            <p className="text-body-md text-text-muted">{problem.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
