import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Badge = ({ className, children, ...props }: IProps) => {
  return (
    <span
      className={cn(
        "bg-emerald-950 text-emerald-400 px-2 py-1 rounded-3xl text-sm  hover:text-emerald-300",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
