export function GradientLine({ height }) {
  return (
    <svg
      width="100%"
      height={height ? height : 10}
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="1" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100" height="10" fill="url(#gradient1)" />
    </svg>
  );
}
