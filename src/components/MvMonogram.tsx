interface MvMonogramProps {
  className?: string;
}

export function MvMonogram({ className = 'h-6 w-auto' }: MvMonogramProps) {
  return (
    <svg
      viewBox="0 0 38 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 5H12.2L17.7 20H13.5L8 5Z" fill="#71717A" />
      <path d="M19 5H23.2L29.2 27H25L19 5Z" fill="#71717A" />
      <path d="M2 27L8 5H12.2L6.2 27H2Z" fill="#09090B" />
      <path d="M13.5 20L19 5H23.2L17.7 20H13.5Z" fill="#09090B" />
      <path d="M25 27L31.8 5H36L29.2 27H25Z" fill="#09090B" />
    </svg>
  );
}
