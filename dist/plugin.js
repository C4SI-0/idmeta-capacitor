var capacitorIdMetaCapacitor = (function (exports, core) {
    'use strict';

    const IdMetaCapacitor = core.registerPlugin('IdMetaCapacitor', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.IdMetaCapacitorWeb()),
    });

    class IdMetaCapacitorWeb extends core.WebPlugin {
        async startIdmetaFlow() {
            console.log('startIdmetaFlow is not supported on the web.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        IdMetaCapacitorWeb: IdMetaCapacitorWeb
    });

    exports.IdMetaCapacitor = IdMetaCapacitor;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
