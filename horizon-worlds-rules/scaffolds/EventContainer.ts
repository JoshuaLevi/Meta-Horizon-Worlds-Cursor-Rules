// Scaffold: Event container pattern (subscribe/unsubscribe)
import type {} from "../stubs/horizon-core";

type Disposable = { dispose(): void };

export class EventContainer {
  private subs: Disposable[] = [];
  add(d: Disposable) { this.subs.push(d); return d }
  clear() { for (const s of this.subs) try { s.dispose() } catch {} this.subs = [] }
}
