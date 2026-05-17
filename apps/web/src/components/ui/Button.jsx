const Button = ({ children, className = "", fullWidth = false, ...props }) => {
  const buttonClass = fullWidth ? "btn-primary-full" : "btn-primary";
  return (
    <button className={`${buttonClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
