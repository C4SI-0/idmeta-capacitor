import { registerPlugin } from '@capacitor/core';

import type { IdMetaCapacitorPlugin } from './definitions';

const IdMetaCapacitor = registerPlugin<IdMetaCapacitorPlugin>('IdMetaCapacitor', {
  web: () => import('./web').then(m => new m.IdMetaCapacitorWeb()),
});

export * from './definitions';
export { IdMetaCapacitor };
