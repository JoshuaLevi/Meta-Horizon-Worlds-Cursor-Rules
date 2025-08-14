// Minimal stubs for Player APIs
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace hzPlayer {
  // Minimal property type used across stubs
  interface Prop<T> { get(): T; set(v: T): void }

  // Non-authoritative input actions subset
  enum PlayerInputAction {
    Jump = 0,
    Sprint = 1,
    Interact = 2,
    Primary = 3,
    Secondary = 4,
  }

  // Non-authoritative Player surface for offline hints only
  class Player {
    locomotionSpeed: Prop<number>;
    jumpSpeed: Prop<number>;
    gravity: Prop<number>;
    avatarScale: Prop<number>;
    enterFocusedInteractionMode(): void;
    exitFocusedInteractionMode(): void;
    // Animation (shape may differ in real API)
    playAvatarAnimation(asset: any, opts?: { callback?: () => void }): void;
    stopAvatarAnimation(): void;
    // Aim assist (placeholder)
    clearAimAssistTarget?(): void;
  }
}
export {};
