import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Loader from "./ui/Loader";
import { isValidEmail } from "../utils/validators";
import { waitlistService } from "../services/waitlist.service";
import { useSnackbar } from "../context/SnackbarContext";

const CTASection = () => {
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
        showSnackbar(response.message || "Something went wrong. Please try again.", "error");
      }
    } catch (err) {
      showSnackbar(err.message || "Failed to submit. Please try again.", "error");
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
        </form>
      </div>
    </section>
  );
};

export default CTASection;
