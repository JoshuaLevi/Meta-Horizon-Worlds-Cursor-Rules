// Scaffold: Social / Avatar Image fetch flow (conceptual)
// Integrate with the Social API in your environment.

export async function getAvatarImage(playerId: string, opts?: { size?: "Small"|"Medium"|"Large" }) {
  // Pseudocode; replace with real Social API call
  const size = opts?.size ?? "Medium";
  const social = (globalThis as any).hzSocial;
  if (!social?.getAvatarImage) return null;
  return await social.getAvatarImage(playerId, { size });
}
