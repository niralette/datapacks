import { mkdir } from 'node:fs/promises';

export function ensureDir(path: Parameters<typeof mkdir>[0]) {
  return mkdir(path, { recursive: true });
}
