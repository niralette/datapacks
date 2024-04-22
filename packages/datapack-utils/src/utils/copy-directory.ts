import { cp } from 'node:fs/promises';

type CopyParams = Parameters<typeof cp>;

export function copyDirectory(
  source: CopyParams[0],
  destination: CopyParams[1],
  options: Exclude<CopyParams[2], 'recursive'> = {},
) {
  return cp(source, destination, { ...options, recursive: true });
}
