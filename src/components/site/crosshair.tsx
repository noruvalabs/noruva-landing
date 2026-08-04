export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute z-40 transform -translate-x-1/2 -translate-y-1/2 text-action-blue opacity-50 ${className}`}
    >
      <path d="M7.5 0V15M0 7.5H15" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
