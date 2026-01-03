import Chip from "./Chip";

type Item = { label: string; href: string; active?: boolean };

export default function ChipsRow({ items }: { items: Item[] }) {
  return (
    <div className="relative -mx-4 px-4 overflow-x-auto">
      <div className="flex gap-2 min-w-max py-2">
        {items.map((it) => (
          <Chip key={it.href} label={it.label} href={it.href} active={it.active} />
        ))}
      </div>
    </div>
  );
}
