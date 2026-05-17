const TopAppBar = () => {
  return (
    <header className="app-header">
      <div className="header-inner">
        <a href="/" className="brand-logo">
          WorkFlow
        </a>
        <nav className="flex items-center" style={{ gap: "0.75rem" }}></nav>
      </div>
    </header>
  );
};

export default TopAppBar;
