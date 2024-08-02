export function LearnMoreButton({ children, href }) {
  return (
    <a
      href={href}
      className="text-sm font-semibold leading-6 py-2.5 hover:cursor-pointer text-gray-900 hover:text-gray-950 hover:-translate-y-0.5"
    >
      {children ? children : "Узнать больше"} <span aria-hidden="true">→</span>
    </a>
  );
}
