import { existsSync } from 'node:fs';
import { mkdir, rm } from 'node:fs/promises';

export async function clearDirectory(path: Parameters<typeof rm>[0]) {
  const directoryExists = existsSync(path);

  if (!directoryExists) {
    throw new ClearDirectoryError(
      `Directory does not exist at ${JSON.stringify(path)}`,
    );
  }

  await rm(path, { recursive: true });

  return mkdir(path);
}

export class ClearDirectoryError extends Error {}
