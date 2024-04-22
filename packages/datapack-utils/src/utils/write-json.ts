import { writeFile } from 'node:fs/promises';

export async function writeJson(
  path: Parameters<typeof writeFile>[0],
  data: any,
) {
  return writeFile(path, JSON.stringify(data, null, 2), { encoding: 'utf8' });
}
