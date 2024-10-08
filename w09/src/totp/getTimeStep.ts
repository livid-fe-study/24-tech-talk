export function getTimeStep({ window = 0, duration = 30_000 }: { window?: number; duration?: number } = {}) {
  return Math.floor(Date.now() / duration) + window;
}