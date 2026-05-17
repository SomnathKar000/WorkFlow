import React, { createContext, useContext, useState, useCallback } from "react";

const SnackbarContext = createContext(null);

export const SnackbarProvider = ({ children }) => {
  const [snackbars, setSnackbars] = useState([]);

  const showSnackbar = useCallback((message, type = "success") => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    setSnackbars((prev) => [...prev, { id, message, type }]);

    // Auto-remove snackbar after 4 seconds
    setTimeout(() => {
      setSnackbars((prev) => prev.filter((item) => item.id !== id));
    }, 4000);
  }, []);

  const removeSnackbar = useCallback((id) => {
    setSnackbars((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <div className="snackbar-container">
        {snackbars.map((sb) => (
          <div key={sb.id} className={`snackbar ${sb.type}`}>
            <span className="icon-wrapper material-symbols-outlined" style={{ fontSize: "20px" }}>
              {sb.type === "success" ? "check_circle" : "error"}
            </span>
            <div style={{ flex: 1, paddingRight: "0.5rem", lineHeight: "1.4" }}>
              {sb.message}
            </div>
            <button
              onClick={() => removeSnackbar(sb.id)}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                opacity: 0.6,
                transition: "opacity 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0.6}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                close
              </span>
            </button>
          </div>
        ))}
      </div>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
