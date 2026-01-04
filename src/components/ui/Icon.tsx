import { HTMLAttributes } from "react";

export type IconName =
  | "crown"
  | "leaf"
  | "drop"
  | "grain"
  | "sparkles"
  | "cart"
  | "search";

type Props = HTMLAttributes<SVGSVGElement> & {
  name: IconName;
  size?: number;
  strokeWidth?: number;
};

export default function Icon({ name, size = 16, strokeWidth = 1.8, className, ...rest }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    ...rest,
  };

  switch (name) {
    case "crown":
      return (
        <svg {...common}>
          <path d="M3 10l4 3 5-7 5 7 4-3v8H3v-8z" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M5 19c7 0 12-5 12-12V5h-2C8 5 3 10 3 17v2h2z" />
        </svg>
      );
    case "drop":
      return (
        <svg {...common}>
          <path d="M12 3s6 6 6 10a6 6 0 11-12 0c0-4 6-10 6-10z" />
        </svg>
      );
    case "grain":
      return (
        <svg {...common}>
          <path d="M12 2v20M8 6c2 0 4 2 4 4s-2 4-4 4M16 4c2 0 4 2 4 4s-2 4-4 4" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4zM18 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
        </svg>
      );
    case "cart":
      return (
        <svg {...common}>
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="17" cy="20" r="1.5" />
          <path d="M3 4h2l2 12h10l2-8H7" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      );
    default:
      return null;
  }
}
