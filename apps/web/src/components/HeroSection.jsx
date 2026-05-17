import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Loader from "./ui/Loader";
import { isValidEmail } from "../utils/validators";
import { waitlistService } from "../services/waitlist.service";
import { useSnackbar } from "../context/SnackbarContext";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!email.trim()) {
      showSnackbar("Please enter an email address.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showSnackbar("Please enter a valid email address.", "error");
      return;
    }

    setLoading(true);

    try {
      const response = await waitlistService.submitEmail(email);
      if (response.success) {
        showSnackbar(response.message, "success");
        setEmail("");
      } else {
        showSnackbar("Something went wrong. Please try again.", "error");
      }
    } catch (err) {
      showSnackbar(err.message || "Failed to submit. Please try again.", "error");
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
              color: "#6B7280",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "16px" }}
            >
              check_circle
            </span>
            <span className="text-label-sm">
              Your commits already tell the story. Let Workflow write the update.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
