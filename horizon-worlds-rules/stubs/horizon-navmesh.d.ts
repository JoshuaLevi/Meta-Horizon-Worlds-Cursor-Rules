// Minimal stubs for NavMesh
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace hzNavMesh {
  // Non-authoritative enums (names may differ)
  enum NavMeshState { Idle = 0, Moving = 1 }
  enum NavMeshAgentAlignment { Ground = 0, None = 1 }

  class NavMeshAgent {
    destination: { get(): any; set(p: any): void };
    remainingDistance: { get(): number };
    stoppingDistance: { get(): number };
    acceleration: { set(v: number): void };
    deceleration: { set(v: number): void };
    maxSpeed: { set(v: number): void };
    turnSpeed: { set(v: number): void };
    state?: { get(): NavMeshState };
    alignment?: { get(): NavMeshAgentAlignment; set(v: NavMeshAgentAlignment): void };
  }
}
export {};
