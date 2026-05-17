const Loader = ({ className = "", size = "24px", style = {}, ...props }) => {
  return (
    <div
      style={{
        display: "inline-block",
        width: size,
        height: size,
        border: "2px solid #E5E5E5",
        borderTopColor: "#000000",
        borderRadius: "50%",
        ...style,
      }}
      className={`animate-spin ${className}`}
      {...props}
    />
  );
};

export default Loader;
