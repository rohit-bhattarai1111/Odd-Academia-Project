export default function AuthDivider() {
  return (
    <div className="relative flex items-center justify-center py-1" role="separator">
      <div className="absolute inset-x-0 h-px bg-gray-200" aria-hidden />
      <span className="relative rounded-full bg-white px-3 text-xs font-semibold uppercase text-gray-400">OR</span>
    </div>
  );
}
