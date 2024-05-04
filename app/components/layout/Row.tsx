import React from "react";

interface RowProps {
  fullscreen?: boolean;
  containerWidth?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Row({
  fullscreen,
  containerWidth,
  children,
  className,
}: RowProps) {
  return (
    <div
      className={`row relative mx-auto ${containerWidth} ${fullscreen ? "-mx-5 md:-mx-16" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
