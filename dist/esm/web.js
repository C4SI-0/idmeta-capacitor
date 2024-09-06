import { WebPlugin } from '@capacitor/core';
export class IdMetaCapacitorWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async startIdmetaFlow() {
        console.log('startIdmetaFlow is not supported on the web.');
        // Handle or throw an error if needed
    }
}
//# sourceMappingURL=web.js.map