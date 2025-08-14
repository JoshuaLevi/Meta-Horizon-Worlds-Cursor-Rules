// Scaffold: Simple NavMesh patrol loop
import type {} from "../stubs/horizon-navmesh";

export function startPatrol(agent: any, waypoints: any[], opts?: { stopDistance?: number }) {
  const stop = opts?.stopDistance ?? 0.5;
  function next() {
    const i = Math.floor(Math.random() * waypoints.length);
    agent.destination.set(waypoints[i]);
  }
  if (!agent.destination.get()) next();
  return setInterval(() => {
    try {
      const remain = agent.remainingDistance.get();
      const thresh = (agent.stoppingDistance?.get?.() ?? stop) + 0.2;
      if (remain < thresh) next();
    } catch {}
  }, 300);
}
