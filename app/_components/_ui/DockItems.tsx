"use client";

import { FC } from "react";
import Link from "next/link";

type DockItemsProps = {
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  section?: string;
  isTop?: boolean;
  isBottom?: boolean;
};

const DockItems = ({
  Icon,
  label,
  section,
  isTop,
  isBottom,
}: DockItemsProps) => {
  const href = isTop
    ? "/#home"
    : isBottom
    ? "/#contact"
    : section
    ? `/#${section}`
    : "/";

  return (
    <Link
      href={href}
      aria-label={label}
      className="relative group p-1 bg-gradient-to-t from-zinc-800 bg-[#4e4e4eb7] outline-stone-800 outline-1
        hover:bg-[#636262b7] hover:backdrop-brightness-125
        hover:backdrop-blur-2xl hover:shadow-[2px_3px_140px_#d9db44]
        rounded-xl flex justify-center items-center
        transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9db44]/60"
    >
      <Icon width={30} height={30} aria-hidden="true" />
      <span
        role="tooltip"
        className="absolute top-full left-1/2 -translate-x-1/2 mb-2 text-xs
          opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
      >
        {label}
      </span>
    </Link>
  );
};

export default DockItems;