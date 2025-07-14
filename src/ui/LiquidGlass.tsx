import { cn } from '@/utils/cn';
import React, { ReactNode } from "react";


type Props = {
  children: ReactNode;
  className?: string;
}

export function LiquidGlass({ children, className }: Props) {
  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      {/* Стеклянные слои */}
      <div
        className="
          absolute inset-0 z-0
        "
        style={{
          backdropFilter: "blur(0px)",
          filter: "url(#lg-dist)",
          isolation: "isolate"
        }}
      />
      <div
        className="
          absolute inset-0 z-10
          bg-white/25
        "
      />
      <div
        className="
          absolute inset-0 z-20
          rounded-inherit overflow-hidden
        "
        style={{
          boxShadow:
            "inset 1px 1px 0 rgba(255,255,255,0.75), inset 0 0 5px rgba(255,255,255,0.75)"
        }}
      />
      {/* Слот для любого контента */}
      <div className="relative z-30 flex items-center justify-center w-full h-full">
        {children}
      </div>

      {/* SVG фильтр (важно! только один раз на страницу!) */}
      <svg style={{ display: "none" }}>
        <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurred"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  );
}
