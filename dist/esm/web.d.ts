import { WebPlugin } from '@capacitor/core';
import type { IdMetaCapacitorPlugin } from './definitions';
export declare class IdMetaCapacitorWeb extends WebPlugin implements IdMetaCapacitorPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    startIdmetaFlow(): Promise<void>;
}
