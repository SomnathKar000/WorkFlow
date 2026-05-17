const Card = ({ title, children, className = "", ...props }) => {
  return (
    <div className={`problem-card ${className}`} {...props}>
      {title && (
        <h3
          className="text-headline-sm text-primary-col"
          style={{ marginBottom: "0.5rem" }}
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;
