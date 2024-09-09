interface IdMetaCapacitorPlugin {
    startIdmetaFlow(options: {
        flowId: string;
        userToken: string;
    }): Promise<void>;
}
declare const IdMetaCapacitor: IdMetaCapacitorPlugin;
export * from './definitions';
export { IdMetaCapacitor };
