import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`w-full px-5 md:px-16 ${className}`}>{children}</div>;
}
