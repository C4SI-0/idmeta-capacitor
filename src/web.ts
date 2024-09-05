import { WebPlugin } from '@capacitor/core';

import type { IdMetaCapacitorPlugin } from './definitions';

export class IdMetaCapacitorWeb extends WebPlugin implements IdMetaCapacitorPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
