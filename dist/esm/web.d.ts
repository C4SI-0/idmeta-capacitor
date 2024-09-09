import { WebPlugin } from '@capacitor/core';
import type { IdMetaCapacitorPlugin } from './definitions';
export declare class IdMetaCapacitorWeb extends WebPlugin implements IdMetaCapacitorPlugin {
    startIdmetaFlow(): Promise<void>;
}
