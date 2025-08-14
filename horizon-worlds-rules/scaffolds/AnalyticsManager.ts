// Scaffold: minimal Analytics manager using Turbo
// Uses the stubbed types only for IntelliSense; replace with real imports in project.
import type {} from "../stubs/horizon-analytics";
import type {} from "../stubs/horizon-core";

export class AnalyticsManager {
  private registered = false;
  register(settings?: any) {
    if (this.registered) return;
    // @ts-ignore - runtime provided by Horizon
    const { Turbo, TurboDefaultSettings } = (globalThis as any).hzAnalytics ?? {};
    if (Turbo) {
      Turbo.register(this, settings ?? TurboDefaultSettings);
      this.registered = true;
    }
  }
  areaEnter(player: any, area: string) {
    // @ts-ignore
    const { Turbo, TurboEvents } = (globalThis as any).hzAnalytics ?? {};
    if (!Turbo) return;
    Turbo.send(TurboEvents?.OnAreaEnter ?? "OnAreaEnter", {
      actionArea: area,
      actionAreaIsLobbySection: false,
      actionAreaIsPlayerReadyZone: false,
      player,
    });
  }
}
