import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Loader from "./ui/Loader";
import { isValidEmail } from "../utils/validators";
import { waitlistService } from "../services/waitlist.service";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [message, setMessage] = useState(
    "Your commits already tell the story. Let Workflow write the update.",
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter an email address.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const response = await waitlistService.submitEmail(email);
      if (response.success) {
        setStatus("success");
        setMessage(response.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        <form
          onSubmit={handleSubmit}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <Button
              id="hero-cta"
              type="submit"
              disabled={loading}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "140px",
              }}
            >
              {loading ? (
                <Loader size="16px" style={{ borderTopColor: "#FFFFFF" }} />
              ) : (
                "Get Started"
              )}
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color:
                status === "success"
                  ? "#16a34a"
                  : status === "error"
                    ? "#dc2626"
                    : "#6B7280",
              transition: "color 0.25s ease",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "16px" }}
            >
              {status === "success"
                ? "check_circle"
                : status === "error"
                  ? "error"
                  : "check_circle"}
            </span>
            <span className="text-label-sm">{message}</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
