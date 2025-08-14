// Scaffold: Mobile gestures (tap / pinch / pan) pattern
// This is a conceptual scaffold; wire to your gestures API/events in your project.

export type TapData = { x: number; y: number };
export type PinchData = { scale: number };
export type PanData = { dx: number; dy: number };

export type GestureHandlers = {
  onTap?: (e: TapData) => void;
  onPinch?: (e: PinchData) => void;
  onPan?: (e: PanData) => void;
};

export function attachMobileGestures(target: any, handlers: GestureHandlers) {
  // Pseudocode: replace with hooks to your environment
  const subs: Array<{ dispose(): void }> = [];
  if (target?.gestures) {
    handlers.onTap && subs.push(target.gestures.onTap((e: TapData) => handlers.onTap!(e)));
    handlers.onPinch && subs.push(target.gestures.onPinch((e: PinchData) => handlers.onPinch!(e)));
    handlers.onPan && subs.push(target.gestures.onPan((e: PanData) => handlers.onPan!(e)));
  }
  return { dispose: () => subs.forEach(s => s.dispose()) };
}
