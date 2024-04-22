export interface DataPackMeta {
  description: string;
  pack_format: 9;
}

export interface Config {
  dist?: string;
  src?: string;
  meta: DataPackMeta;
  zip?: boolean;
}
