import { registerPlugin } from '@capacitor/core';


interface IdMetaCapacitorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  startIdmetaFlow(options: { flowId: string; userToken: string }): Promise<void>;
}

const IdMetaCapacitor = registerPlugin<IdMetaCapacitorPlugin>('IdMetaCapacitor', {
  web: () => import('./web').then(m => new m.IdMetaCapacitorWeb()),
});


export * from './definitions';
export { IdMetaCapacitor };