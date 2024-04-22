import archiver from 'archiver';
import { createWriteStream } from 'node:fs';

export function zipDirectory(
  src: string,
  dist: Parameters<typeof createWriteStream>[0],
) {
  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = createWriteStream(dist);

  return new Promise<void>((resolve, reject) => {
    archive.directory(src, false).on('error', reject).pipe(stream);

    stream.on('close', resolve);
    archive.finalize();
  });
}
