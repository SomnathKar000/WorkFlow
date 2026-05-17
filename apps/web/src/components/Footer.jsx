const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div className="brand-logo" style={{ fontSize: "20px" }}>
            Standup
          </div>
          <p className="text-label-sm text-text-muted">
            © 2024 Standup. Functional minimalism for deep work.
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a href="#" className="footer-link">
            Privacy
          </a>
          <a href="#" className="footer-link">
            Terms
          </a>
          <a href="#" className="footer-link">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
