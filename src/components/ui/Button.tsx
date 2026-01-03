import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ className, variant = "primary", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 gap-2";
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-600",
    secondary: "bg-amber-100 text-amber-900 hover:bg-amber-200 focus-visible:ring-amber-400",
    ghost: "bg-transparent hover:bg-zinc-100 text-zinc-900 focus-visible:ring-zinc-300",
  } as const;
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
