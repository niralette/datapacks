import { mkdir } from 'node:fs/promises';

export function ensureDirectoryExists(path: Parameters<typeof mkdir>[0]) {
  return mkdir(path, { recursive: true });
}
