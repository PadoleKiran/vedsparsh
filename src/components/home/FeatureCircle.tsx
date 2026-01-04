"use client";

import Image from "next/image";
import Icon, { IconName } from "@/components/ui/Icon";

type Props = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  icon?: IconName;
};

export default function FeatureCircle({ title, subtitle, imageSrc, icon }: Props) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white ring-1 ring-brand-100 shadow-sm overflow-hidden">
        {imageSrc ? (
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        ) : icon ? (
          <div className="absolute inset-0 flex items-center justify-center text-brand-700">
            <Icon name={icon} size={32} />
          </div>
        ) : null}
      </div>
      <div className="text-center">
        <div className="text-sm font-medium text-zinc-800 max-w-[9rem]">{title}</div>
        {subtitle ? <div className="text-xs text-zinc-600">{subtitle}</div> : null}
      </div>
    </div>
  );
}
