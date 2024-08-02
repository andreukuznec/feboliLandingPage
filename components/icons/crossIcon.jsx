export function CrossIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient
          id="gradientCrossIcon"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="1" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gradientCrossIcon)"
        fillRule="evenodd"
        d="M10 8.586l4.243-4.243a1 1 0 0 1 1.414 1.414L11.414 10l4.243 4.243a1 1 0 0 1-1.414 1.414L10 11.414l-4.243 4.243a1 1 0 0 1-1.414-1.414L8.586 10 4.343 5.757a1 1 0 0 1 1.414-1.414L10 8.586z"
        clipRule="evenodd"
      />
    </svg>
  );
}
