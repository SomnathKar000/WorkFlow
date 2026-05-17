import Input from "./ui/Input";
import Button from "./ui/Button";

const HeroSection = () => {
  return (
    <section className="section">
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <h1 className="text-display text-primary-col">
          Never write a standup again.
        </h1>
        <p className="text-body-lg text-text-muted">
          WorkFlow connects to your GitHub, Jira, and Slack to automatically
          draft your daily updates. Spend your mornings on deep work, not status
          reporting.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
          className="hero-cta-row"
        >
          <div style={{ display: "flex", gap: "0", flexWrap: "wrap" }}>
            <Input
              id="hero-email"
              style={{ minWidth: "0", flex: "1 1 200px" }}
              placeholder="Enter your work email"
              type="email"
            />
            <Button id="hero-cta">
              Get Started
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#16a34a",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "16px" }}
            >
              check_circle
            </span>
            <span className="text-label-sm" style={{ color: "#16a34a" }}>
              No credit card required. Free for small teams.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
