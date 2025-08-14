// Minimal stubs for Camera APIs
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace hzCamera {
  interface TransitionOptions { duration?: number }
  interface ForceLookAtOptions { duration?: number; holdDuration?: number }
  interface OrbitCameraOptions { radius?: number }
  interface PanCameraOptions { speed?: number }
  // Mode types (names approximate)
  interface FirstPersonCameraMode {}
  interface ThirdPersonCameraMode {}
  interface OrbitCameraMode { target?: any; options?: OrbitCameraOptions }
  interface PanCameraMode { target?: any; options?: PanCameraOptions }
  // Non-authoritative reasons enum
  enum CameraTransitionEndReason {
    Completed = 0,
    Interrupted = 1,
    Canceled = 2,
  }
  class Camera {
    overrideCameraFOV(fov: number, opts?: TransitionOptions): Promise<void> | void;
    resetCameraFOV(): void;
    forceLookAt(target: any, opts?: ForceLookAtOptions): void;
    stopForceLookAt(): void;
    setCameraModeFirstPerson(): void;
    setCameraModeThirdPerson(): void;
    setCameraModeOrbit(target: any, opts?: OrbitCameraOptions): void;
    setCameraModePan(target: any, opts?: PanCameraOptions): void;
  }
}
export {};
