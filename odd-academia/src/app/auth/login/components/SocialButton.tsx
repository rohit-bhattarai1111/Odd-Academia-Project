'use client';

import type { ReactNode } from 'react';

interface SocialButtonProps {
  label: string;
  icon: ReactNode;
  onClick: () => void;
}

export default function SocialButton({ label, icon, onClick }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full min-h-[44px] items-center justify-center gap-2.5 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-[#0A66C2] shadow-sm transition hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <span
        className="inline-flex size-4 shrink-0 items-center justify-center overflow-hidden [&_svg]:block [&_svg]:size-4 [&_svg]:max-h-4 [&_svg]:max-w-4"
        aria-hidden
      >
        {icon}
      </span>
      <span className="leading-tight">{label}</span>
    </button>
  );
}
