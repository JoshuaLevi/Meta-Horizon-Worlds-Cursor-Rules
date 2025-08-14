// Scaffold: Performance Sampler (count / duration / marker) with game loop hook
// Conceptual helper; wire to your loop via connectToWorldUpdate() or manual update(dt).

export type CountMap = Record<string, number>;
export type DurationSample = { name: string; ms: number };
export type Marker = { name: string; at: number };

export class PerformanceSampler {
  private counts: CountMap = {};
  private durations: DurationSample[] = [];
  private markers: Marker[] = [];
  private lastFlush = Date.now();
  private intervalMs = 5000;
  private unsub?: { dispose(): void };
  private onFlush?: (payload: { counts: CountMap; durations: DurationSample[]; markers: Marker[] }) => void;
  private timers = new Map<string, number>();

  constructor(opts?: { flushIntervalMs?: number; onFlush?: PerformanceSampler["onFlush"] }) {
    if (opts?.flushIntervalMs) this.intervalMs = opts.flushIntervalMs;
    this.onFlush = opts?.onFlush;
  }

  inc(name: string, by = 1) {
    this.counts[name] = (this.counts[name] ?? 0) + by;
  }

  start(name: string) {
    this.timers.set(name, performance.now ? performance.now() : Date.now());
  }

  end(name: string) {
    const t0 = this.timers.get(name);
    if (t0 == null) return;
    const t1 = performance.now ? performance.now() : Date.now();
    this.durations.push({ name, ms: t1 - t0 });
    this.timers.delete(name);
  }

  mark(name: string) {
    this.markers.push({ name, at: performance.now ? performance.now() : Date.now() });
  }

  update(dtMs: number) {
    const now = Date.now();
    if (now - this.lastFlush >= this.intervalMs) {
      this.flush();
      this.lastFlush = now;
    }
  }

  flush() {
    const payload = { counts: { ...this.counts }, durations: [...this.durations], markers: [...this.markers] };
    this.counts = {};
    this.durations = [];
    this.markers = [];
    try { this.onFlush?.(payload) } catch {}
  }

  // Hook into Horizon World's update loop (pseudo): pass a component with connectLocalBroadcastEvent
  connectToWorldUpdate(component: any, worldUpdateEvent?: any) {
    if (this.unsub) return this.unsub;
    const evt = worldUpdateEvent ?? component?.World?.onUpdate ?? (globalThis as any)?.hzCore?.World?.onUpdate;
    if (component?.connectLocalBroadcastEvent && evt) {
      this.unsub = component.connectLocalBroadcastEvent(evt, ({ deltaTime }: { deltaTime: number }) => this.update(deltaTime * 1000));
    } else {
      // Fallback to timer at ~60 FPS
      const id = setInterval(() => this.update(1000 / 60), 1000 / 60);
      this.unsub = { dispose: () => clearInterval(id) };
    }
    return this.unsub;
  }

  dispose() { this.unsub?.dispose?.(); this.unsub = undefined }
}
