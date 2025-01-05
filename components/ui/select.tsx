// components/ui/select.tsx

import * as React from "react";

export function Select({ value, onValueChange, children }: { value: string; onValueChange: (value: string) => void; children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function SelectTrigger({ children, className, ariaLabel }: { children: React.ReactNode; className?: string; ariaLabel: string }) {
  return <button className={className} aria-label={ariaLabel}>{children}</button>;
}

export function SelectValue({ placeholder }: { placeholder: string }) {
  return <span>{placeholder}</span>;
}

export function SelectContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function SelectItem({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  return <div className={className} data-value={value}>{children}</div>;
}