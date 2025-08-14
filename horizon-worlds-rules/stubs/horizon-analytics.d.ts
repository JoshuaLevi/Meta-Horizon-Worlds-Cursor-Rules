// Minimal stubs for Analytics (Turbo)
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace hzAnalytics {
  interface ITurboSettings { [k: string]: any }
  const TurboDefaultSettings: ITurboSettings;
  enum TurboEvents {
    OnAreaEnter = "OnAreaEnter",
    OnAreaExit = "OnAreaExit"
  }
  class Turbo {
    static register(owner: any, settings: ITurboSettings): void;
    static send(event: TurboEvents | string, payload: any): void;
  }
}
export {};
