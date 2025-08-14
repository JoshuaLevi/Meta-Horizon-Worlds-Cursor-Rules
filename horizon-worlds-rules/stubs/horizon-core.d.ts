// Minimal, non-authoritative stubs to help AI autocomplete offline.
// Do NOT rely on these for runtime; consult official docs for exact signatures.

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace hzCore {
  type Vec3 = { x: number; y: number; z: number };
  type Quaternion = { x: number; y: number; z: number; w: number };

  interface ReadableHorizonProperty<T> { get(): T }
  interface WritableHorizonProperty<T> extends ReadableHorizonProperty<T> { set(v: T): void }

  class Entity {
    name: string;
    position: WritableHorizonProperty<Vec3>;
    rotation: WritableHorizonProperty<Quaternion>;
    scale: WritableHorizonProperty<Vec3>;
  }

  class Player {
    avatarScale: WritableHorizonProperty<number>;
    locomotionSpeed: WritableHorizonProperty<number>;
    jumpSpeed: WritableHorizonProperty<number>;
    gravity: WritableHorizonProperty<number>;
    enterFocusedInteractionMode(): void;
    exitFocusedInteractionMode(): void;
  }

  class WorldClass {
    onUpdate: unknown; // Event
  }

  const World: WorldClass;

  abstract class Component<T = any> {
    entity: Entity;
    async: { setTimeout(cb: () => void, ms: number): void };
    connectLocalBroadcastEvent(evt: unknown, cb: (e: any) => void): { dispose(): void };
    connectCodeBlockEvent(target: Entity, evt: unknown, cb: (...args: any[]) => void): { dispose(): void };
    start?(): void | Promise<void>;
    stop?(): void | Promise<void>;
  }
}

export {};
