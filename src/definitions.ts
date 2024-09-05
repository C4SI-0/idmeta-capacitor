export interface IdMetaCapacitorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
