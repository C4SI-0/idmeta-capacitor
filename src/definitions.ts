export interface IdMetaCapacitorPlugin {
  startIdmetaFlow(options: { flowId: string; userToken: string }): Promise<void>;
}