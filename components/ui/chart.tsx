// components/ui/chart.tsx

import * as React from "react";

export type ChartConfig = {
  [key: string]: {
    label: string;
    color?: string;
  };
};

export function ChartContainer({ children, config, className }: { children: React.ReactNode; config: any; className?: string }) {
  return <div className={`relative ${className}`}>{children}</div>;
}

export function ChartLegend({ content }: { content: React.ReactNode }) {
  return <div className="absolute bottom-0 left-0 p-2">{content}</div>;
}

export function ChartLegendContent() {
  return <div className="text-xs text-gray-500">Legend Content</div>;
}

export function ChartTooltip({ cursor, content }: { cursor: boolean; content: React.ReactNode }) {
  return <div className="absolute">{content}</div>;
}

export function ChartTooltipContent({ labelFormatter, indicator }: { labelFormatter: (value: any) => string; indicator: string }) {
  return <div className="text-xs">{labelFormatter(indicator)}</div>;
}