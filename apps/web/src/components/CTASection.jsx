import Input from "./ui/Input";
import Button from "./ui/Button";

const CTASection = () => {
  return (
    <section
      className="section"
      style={{ borderTop: "1px solid #000000" }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <h2 className="text-headline-lg text-primary-col">Ready to focus?</h2>
        <p className="text-body-md text-text-muted">
          Join 500+ developers reclaiming their mornings.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <Input
            id="cta-email"
            placeholder="Enter your work email"
            type="email"
          />
          <Button id="cta-submit" fullWidth>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
