interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText = ({ children, className = "" }: GradientTextProps) => {
  return (
    <span className={`bg-gradient-pulse bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
