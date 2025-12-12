import { cn } from "../../lib/utils.js";

const Button = ({
  children,
  variant = "primary",
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-8 py-3  text-base font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary: "bg-[#C05078] text-white hover:bg-[#D66D92] focus:ring-[#C05078]",
    secondary:
      "bg-transparent border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white focus:ring-[#2C3E50]",
    secondaryInverse:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C3E50] focus:ring-white",
  };

  return (
    <button
      disabled={disabled}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
