
export function Button({ children, className }) {
  return <button className={`p-2 rounded font-bold w-full ${className}`}>{children}</button>;
}
