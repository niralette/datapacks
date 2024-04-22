import type { Config } from './types';
import { ClearDirectoryError, clearDirectory } from './utils/clear-directory';
import { copyDirectory } from './utils/copy-directory';
import { ensureDirectoryExists } from './utils/ensure-directory-exists';
import { writeJson } from './utils/write-json';
import { zipDirectory } from './utils/zip-directory';

export { definePackConfig } from './utils/define-pack-config';

export async function buildDataPack({
  dist = 'dist',
  meta,
  src = 'src',
  zip = true,
}: Config) {
  try {
    await clearDirectory(dist);
  } catch (error) {
    if (!(error instanceof ClearDirectoryError)) {
      throw error;
    }
  }

  await ensureDirectoryExists(dist);

  await Promise.all([
    writeJson(`${dist}/pack.mcmeta`, { pack: meta }),
    copyDirectory(src, dist),
  ]);

  if (!zip) {
    return;
  }

  return zipDirectory(dist, `${dist}.zip`);
}
