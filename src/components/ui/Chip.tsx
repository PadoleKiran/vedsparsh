import Link from "next/link";
import { cn } from "@/utils/cn";

type Props = {
  label: string;
  href: string;
  active?: boolean;
};

export default function Chip({ label, href, active }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1.5 text-sm ring-1",
        active
          ? "bg-brand-600 text-white ring-brand-600"
          : "bg-white text-zinc-700 ring-zinc-200 hover:bg-zinc-50"
      )}
    >
      {label}
    </Link>
  );
}
