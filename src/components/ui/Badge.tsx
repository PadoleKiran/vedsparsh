import { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

type Props = PropsWithChildren<{
  color?: "brand" | "green" | "blue" | "gray";
}>;

export default function Badge({ children, color = "brand" }: Props) {
  const styles = {
    brand: "bg-brand-100 text-brand-700 ring-1 ring-brand-200",
    green: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
    blue: "bg-sky-100 text-sky-800 ring-1 ring-sky-200",
    gray: "bg-zinc-100 text-zinc-800 ring-1 ring-zinc-200",
  } as const;
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", styles[color])}>
      {children}
    </span>
  );
}
