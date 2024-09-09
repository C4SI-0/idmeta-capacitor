import { registerPlugin } from '@capacitor/core';
const IdMetaCapacitor = registerPlugin('IdMetaCapacitor', {
    web: () => import('./web').then(m => new m.IdMetaCapacitorWeb()),
});
export * from './definitions';
export { IdMetaCapacitor };
//# sourceMappingURL=index.js.map