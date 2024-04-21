interface DataPackConfig {
  description: string;
  pack_format: 9;
}

export function definePackConfig(config: DataPackConfig) {
  return {
    pack: config,
  };
}
