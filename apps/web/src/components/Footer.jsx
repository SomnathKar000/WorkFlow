const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <div className="brand-logo" style={{ fontSize: "20px" }}>
            WorkFlow
          </div>
          <p className="text-label-sm text-text-muted">
            © 2024 WorkFlow. Functional minimalism for deep work.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
