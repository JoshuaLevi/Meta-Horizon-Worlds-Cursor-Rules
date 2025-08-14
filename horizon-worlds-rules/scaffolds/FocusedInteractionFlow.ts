// Scaffold: Focused Interaction UI flow with optional analytics
import type {} from "../stubs/horizon-player";

export function withFocusedInteraction(player: any, fn: () => void, opts?: { log?: (phase: "enter"|"exit") => void }) {
  try {
    player?.enterFocusedInteractionMode?.();
    opts?.log?.("enter");
    fn();
  } finally {
    opts?.log?.("exit");
    player?.exitFocusedInteractionMode?.();
  }
}
