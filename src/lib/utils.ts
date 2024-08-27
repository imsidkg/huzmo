import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Camera } from "../../types/canvas";
const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

export const connectionIdToColor = (connectionId: number) => {
  return COLORS[connectionId % COLORS.length];
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function pointerEventToCanvasPoint (e : React.PointerEvent , camera : Camera) {
  const x  = e.clientX - camera.x ;
  const y = e.clientY - camera.y;
  return {x,y}
}
