import Link from "next/link";
import { cn } from "@/utils/cn";
import Icon, { IconName } from "./Icon";

type Props = {
  label: string;
  href: string;
  active?: boolean;
  icon?: IconName;
};

export default function Chip({ label, href, active, icon }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1.5 text-sm ring-1 gap-2",
        active
          ? "bg-brand-600 text-white ring-brand-600"
          : "bg-white text-zinc-700 ring-zinc-200 hover:bg-zinc-50"
      )}
    >
      {icon ? <Icon name={icon} size={16} /> : null}
      <span>{label}</span>
    </Link>
  );
}
