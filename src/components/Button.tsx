interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center gap-1 bg-xplore-pink-100 hover:bg-xplore-pink-200 px-4 py-2 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
