import { WebPlugin } from '@capacitor/core';

import type { IdMetaCapacitorPlugin } from './definitions';

export class IdMetaCapacitorWeb extends WebPlugin implements IdMetaCapacitorPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async startIdmetaFlow(): Promise<void> {
    console.log('startIdmetaFlow is not supported on the web.');
    // Handle or throw an error if needed
  }
}