const Input = ({ className = "", style, ...props }) => {
  return (
    <input className={`email-input ${className}`} style={style} {...props} />
  );
};

export default Input;
