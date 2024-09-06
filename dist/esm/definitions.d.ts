export interface IdMetaCapacitorPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    startIdmetaFlow(options: {
        flowId: string;
        userToken: string;
    }): Promise<void>;
}
