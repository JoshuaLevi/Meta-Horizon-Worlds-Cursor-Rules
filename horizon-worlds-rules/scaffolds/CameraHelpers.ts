// Scaffold: Camera helpers for common transitions
import type {} from "../stubs/horizon-camera";

export async function focusPanel(camera: any, target: any) {
  if (camera?.overrideCameraFOV) await camera.overrideCameraFOV(50, { duration: 0.4 });
  if (camera?.forceLookAt) camera.forceLookAt(target, { duration: 0.3 });
}

export function resetCamera(camera: any) {
  camera?.stopForceLookAt?.();
  camera?.resetCameraFOV?.();
}
