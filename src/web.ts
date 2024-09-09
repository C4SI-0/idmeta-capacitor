import { WebPlugin } from '@capacitor/core';

import type { IdMetaCapacitorPlugin } from './definitions';

export class IdMetaCapacitorWeb extends WebPlugin implements IdMetaCapacitorPlugin {

  async startIdmetaFlow(): Promise<void> {
    console.log('startIdmetaFlow is not supported on the web.');
  }
}