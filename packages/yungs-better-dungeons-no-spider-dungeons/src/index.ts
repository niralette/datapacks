import { definePackConfig } from './utils/define-pack-config';
import { ensureDir } from './utils/ensure-dir';
import { writeJson } from './utils/write-json';

const OUTPUT_DIRECTORY = './dist';

await ensureDir(OUTPUT_DIRECTORY);

const packConfig = definePackConfig({
  description: `YUNG's Better Dungeons - No Spider Dungeons`,
  pack_format: 9,
});

await writeJson(`${OUTPUT_DIRECTORY}/pack.mcmeta`, packConfig);
