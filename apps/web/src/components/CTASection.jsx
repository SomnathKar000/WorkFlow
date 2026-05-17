import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Loader from "./ui/Loader";
import { isValidEmail } from "../utils/validators";
import { waitlistService } from "../services/waitlist.service";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [message, setMessage] = useState("");

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
    setMessage("");

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
    <section className="section" style={{ borderTop: "1px solid #000000" }}>
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
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Input
              id="cta-email"
              placeholder="Enter your work email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <Button
              id="cta-submit"
              type="submit"
              fullWidth
              disabled={loading}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {loading ? (
                <Loader size="16px" style={{ borderTopColor: "#FFFFFF" }} />
              ) : (
                "Get Started"
              )}
            </Button>
          </div>
          {message && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                color: status === "success" ? "#16a34a" : "#dc2626",
                transition: "color 0.25s ease",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px" }}
              >
                {status === "success" ? "check_circle" : "error"}
              </span>
              <span className="text-label-sm">{message}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default CTASection;
