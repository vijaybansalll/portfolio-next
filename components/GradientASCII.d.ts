import React, { CSSProperties, ComponentPropsWithoutRef } from "react";

export interface GradientASCIIProps extends ComponentPropsWithoutRef<"div"> {
  colors?: string[];
  shape?: "horizon" | "pinch" | "rise" | "eclipse" | string;
  characters?: string;
  cellSize?: number;
  density?: number;
  glyphOpacity?: number;
  glow?: number;
  depthOfField?: number;
  flicker?: number;
  softness?: number;
  scale?: number;
  flow?: number;
  speed?: number;
  gradientOpacity?: number;
  grain?: number;
  variation?: number;
  mouseInteraction?: boolean;
  scrambleRadius?: number;
  clickEffect?: "none" | "wave" | "burst" | string;
  intro?: boolean;
  lightMode?: boolean;
  fontFamily?: string;
  dpr?: number;
  className?: string;
  style?: CSSProperties;
}

declare const GradientASCII: React.FC<GradientASCIIProps>;
export default GradientASCII;
