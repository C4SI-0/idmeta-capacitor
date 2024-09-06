'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const IdMetaCapacitor = core.registerPlugin('IdMetaCapacitor', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.IdMetaCapacitorWeb()),
});

class IdMetaCapacitorWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async startIdmetaFlow() {
        console.log('startIdmetaFlow is not supported on the web.');
        // Handle or throw an error if needed
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IdMetaCapacitorWeb: IdMetaCapacitorWeb
});

exports.IdMetaCapacitor = IdMetaCapacitor;
//# sourceMappingURL=plugin.cjs.js.map
