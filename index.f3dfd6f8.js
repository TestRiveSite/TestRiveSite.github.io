// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2DBRd":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ccd33e03f3dfd6f8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"lXHDZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _game = require("../Game");
var _gameDefault = parcelHelpers.interopDefault(_game);
var _riveStateMachineEntity = require("../Rive/RiveStateMachineEntity");
var _riveStateMachineEntityDefault = parcelHelpers.interopDefault(_riveStateMachineEntity);
var _riveAnimatorEntity = require("../Rive/RiveAnimatorEntity");
var _riveAnimatorEntityDefault = parcelHelpers.interopDefault(_riveAnimatorEntity);
var _riveEntity = require("../Rive/RiveEntity");
var _riveEntityDefault = parcelHelpers.interopDefault(_riveEntity);
var _debug = require("../Systems/Debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _input = require("../Systems/Input");
var _inputDefault = parcelHelpers.interopDefault(_input);
var _scene = require("../Core/Scene");
var _sceneDefault = parcelHelpers.interopDefault(_scene);
var _scriptableEntity = require("../Core/ScriptableEntity");
var _scriptableEntityDefault = parcelHelpers.interopDefault(_scriptableEntity);
var _riveLoader = require("../Rive/RiveLoader");
var _riveLoaderDefault = parcelHelpers.interopDefault(_riveLoader);
var _tween = require("../Core/Tweens/Tween");
var _tweenDefault = parcelHelpers.interopDefault(_tween);
var _vector = require("../Utils/Vector");
var _vectorDefault = parcelHelpers.interopDefault(_vector);
var _easing = require("../Core/Tweens/Easing");
var _physics = require("../Systems/Physics");
var _physicsDefault = parcelHelpers.interopDefault(_physics);
//================================ 
// !!HORRIBLE CODE!! !!MOSTLY FOR INTERNAL TESTING!!
// Various Samples showing different parts of the engine at work.
// For now they will mostly be no different than playing a standard .riv files.
// More to come.
//================================
async function main() {
    //Uncomment the sample you want.
    await physicsPlusRive();
//physicsTest();
//doubleSceneTest();
//cityOrCountry();
//pokeyPokey();
//turtleScene();
//bigRivFile();
//scalingScene();
//doubleSceneTest();
//animationBlendingTestScene();
//eventsTestScene();
//fashionTestScene();
}
async function physicsPlusRive() {
    var _a, _b, _c;
    await (0, _gameDefault.default).initiate(1920, 1080);
    let file = await (0, _riveLoaderDefault.default).loadFile(new URL(require("c086306ea555ac1")).href);
    const scene = new (0, _sceneDefault.default)("FashionTestScene");
    let bodies = [];
    for(let i = 0; i < 3; i++){
        let artboard = file.artboardByIndex(0);
        let riveEntity = new (0, _riveStateMachineEntityDefault.default)("Fashion", artboard, artboard.stateMachineByIndex(0));
        let x = Math.random() * ((0, _gameDefault.default).resolution.x - 100) + 50;
        let y = Math.random() * ((0, _gameDefault.default).resolution.y - 100) + 50;
        riveEntity.setPosition(new (0, _vectorDefault.default)(x, y));
        let addToPhysics = true;
        scene.add(riveEntity, addToPhysics); //TODO: Check why this works even if false lol
        riveEntity.addCollider((0, _physicsDefault.default).getBoxShape(riveEntity.width, riveEntity.height), 1, 0.3, .2);
        riveEntity.position = new (0, _vectorDefault.default)((0, _gameDefault.default).resolution.x / 2, (0, _gameDefault.default).resolution.y / 2);
        (_a = riveEntity.physicsBody) === null || _a === void 0 || _a.SetTransformXY((0, _physicsDefault.default).toPhysicsTransform(riveEntity.position).x, (0, _physicsDefault.default).toPhysicsTransform(riveEntity.position).y, 0);
        (_b = riveEntity.physicsBody) === null || _b === void 0 || _b.ApplyForceToCenter(new (0, _vectorDefault.default)(99000, 10000), true);
        (_c = riveEntity.physicsBody) === null || _c === void 0 || _c.ApplyAngularImpulse(500 * Math.random(), true);
        if (riveEntity.physicsBody) bodies.push(riveEntity.physicsBody);
    }
    (0, _gameDefault.default).addScene(scene);
    const scriptable = new (0, _scriptableEntityDefault.default)("MouseControl");
    scriptable.setFixedUpdateFunction((fixedDeltaTime)=>{
        if ((0, _inputDefault.default).isMouseClicked) {
            for(let i = 0; i < bodies.length; i++){
                let firstBody = bodies[i];
                if (!firstBody) continue;
                let x = (0, _inputDefault.default).gameMouseX;
                let y = (0, _inputDefault.default).gameMouseY;
                let pos = (0, _physicsDefault.default).toPhysicsTransform(new (0, _vectorDefault.default)(x, y));
                let currentBodyPos = firstBody.GetPosition();
                let direction = new (0, _vectorDefault.default)(pos.x - currentBodyPos.x, pos.y - currentBodyPos.y);
                if (direction.lengthSquared() > 400) continue;
                let strength = 250;
                direction.x *= -strength;
                direction.y *= -strength;
                firstBody.ApplyLinearImpulse(direction, pos, true);
                firstBody.ApplyAngularImpulse(10000, true);
            }
            return;
        }
    /*
        let x = Input.scaledMouseX;
        let y = Input.scaledMouseY;

        let pos = Physics.toPhysicsTransform(new Vector(x, y));

        if (firstBody && Input.isMouseDown) {
        let currentPos = firstBody.GetPosition();

        let direction = new Vector(pos.x - currentPos.x, pos.y - currentPos.y);

        direction.x *= 60;
        direction.y *= 60;
        
        firstBody.SetLinearVelocity(direction);
        firstBody.SetAwake(true);
        }*/ });
    scene.add(scriptable);
}
async function physicsTest() {
    await (0, _gameDefault.default).initiate(400, 400);
    const scene = new (0, _sceneDefault.default)("Box2DTest");
    (0, _gameDefault.default).addScene(scene);
    /*
    TEST CREATE 30 BOXES
    */ const boxShape = (0, _physicsDefault.default).getBoxShape(50, 50);
    const fixtureDef = {
        shape: boxShape,
        density: 1,
        friction: 0.3
    };
    // Create 30 random boxes
    for(let i = 0; i < 30; i++){
        const body = scene.world.CreateBody((0, _physicsDefault.default).dynamicBodyDef);
        // Random position within game resolution
        const x = Math.random() * (0, _gameDefault.default).resolution.x;
        const y = Math.random() * (0, _gameDefault.default).resolution.y;
        const physicsPos = (0, _physicsDefault.default).toPhysicsTransform(new (0, _vectorDefault.default)(x, y));
        body.SetTransformXY(physicsPos.x, physicsPos.y, 0);
        body.CreateFixture(fixtureDef);
    }
    const scriptable = new (0, _scriptableEntityDefault.default)("MouseControl");
    scriptable.setFixedUpdateFunction((fixedDeltaTime)=>{
        let firstBody = scene.world.GetBodyList();
        let x = (0, _inputDefault.default).gameMouseX;
        let y = (0, _inputDefault.default).gameMouseY;
        let pos = (0, _physicsDefault.default).toPhysicsTransform(new (0, _vectorDefault.default)(x, y));
        if (firstBody && (0, _inputDefault.default).isMouseDown) {
            let currentPos = firstBody.GetPosition();
            let direction = new (0, _vectorDefault.default)(pos.x - currentPos.x, pos.y - currentPos.y);
            direction.x *= 60;
            direction.y *= 60;
            firstBody.SetLinearVelocity(direction);
            firstBody.SetAwake(true);
        }
    });
    scene.add(scriptable);
}
/**
 *  Simple test scene showing that by pressing "1" you can toggle different scenes with their own states and updates.
 */ async function doubleSceneTest() {
    await (0, _gameDefault.default).initiate(1600, 1200);
    const file = await (0, _riveLoaderDefault.default).loadFile(new URL(require("b8838d0532b8f376")).href);
    const ro1 = new (0, _riveStateMachineEntityDefault.default)("Turtle1", file.artboardByIndex(0), file.artboardByIndex(0).stateMachineByIndex(0));
    const ro2 = new (0, _riveStateMachineEntityDefault.default)("Turtle2", file.artboardByIndex(0), file.artboardByIndex(0).stateMachineByIndex(0));
    const scene1 = new (0, _sceneDefault.default)("Turtle1");
    scene1.add(ro1);
    (0, _gameDefault.default).addScene(scene1);
    const scene2 = new (0, _sceneDefault.default)("Turtle2");
    scene2.add(ro2);
    scene2.enabled = false;
    (0, _gameDefault.default).addScene(scene2);
    window.addEventListener('keydown', (event)=>{
        if (event.key === '1') {
            scene1.enabled = !scene1.enabled;
            scene2.enabled = !scene2.enabled;
        }
    });
}
/**
 * Simple test scene showing using the Input class to control a Rive state machine.
 */ async function cityOrCountry() {
    await (0, _gameDefault.default).initiate(960, 456);
    const file = await (0, _riveLoaderDefault.default).loadFile(new URL(require("18dc546a5bf88657")).href);
    const scene = new (0, _sceneDefault.default)("CityOrCountry");
    let riveEntity = new (0, _riveStateMachineEntityDefault.default)("CityOrCountry", file.artboardByIndex(0), file.artboardByIndex(0).stateMachineByIndex(0));
    scene.add(riveEntity);
    (0, _gameDefault.default).addScene(scene);
    (0, _riveLoaderDefault.default).logUnpackedRiveFile(file);
    const inputHandler = new (0, _scriptableEntityDefault.default)("CityOrCountryInputs");
    inputHandler.setScriptFunction(()=>{
        //isClickedR fire
        //isHovered R bool
        //isClicked L fire
        //isHovered L bool
        if ((0, _inputDefault.default).isKeyDown((0, _input.KeyCode).A)) riveEntity.inputs[1].smiInput.asBool().value = !riveEntity.inputs[1].smiInput.asBool().value;
        if ((0, _inputDefault.default).isKeyDown((0, _input.KeyCode).S)) riveEntity.inputs[3].smiInput.asBool().value = !riveEntity.inputs[1].smiInput.asBool().value;
        if ((0, _inputDefault.default).isKeyDown((0, _input.KeyCode).D)) riveEntity.inputs[0].smiInput.asTrigger().fire();
        if ((0, _inputDefault.default).isKeyDown((0, _input.KeyCode).F)) riveEntity.inputs[2].smiInput.asTrigger().fire();
    });
    scene.add(inputHandler);
}
/**
 * Just Running a standard .riv file.
 * I run it to see if everything still works.
 */ async function pokeyPokey() {
    await (0, _gameDefault.default).initiate(1080, 1350);
    let file = await (0, _riveLoaderDefault.default).loadFile(new URL(require("ce9d377b0d7ff8f3")).href);
    const scene = new (0, _sceneDefault.default)("PokeyPokey");
    scene.add(new (0, _riveStateMachineEntityDefault.default)("PokeyPokey", file.artboardByIndex(0), file.artboardByIndex(0).stateMachineByIndex(0)));
    (0, _gameDefault.default).addScene(scene);
    (0, _riveLoaderDefault.default).logUnpackedRiveFile(file);
}
/**
 * Just Running a standard .riv file.
 * I run it to see if everything still works.
 */ async function turtleScene(skipGameInitialization = false) {
    if (!skipGameInitialization) await (0, _gameDefault.default).initiate(1600, 1200);
    console.log(new URL(require("b8838d0532b8f376")).href);
    let file = await (0, _riveLoaderDefault.default).loadFile(new URL(require("b8838d0532b8f376")).href);
    let riveEntity = new (0, _riveStateMachineEntityDefault.default)("Turtle", file.artboardByIndex(0), file.artboardByIndex(0).stateMachineByIndex(0));
    const scene = new (0, _sceneDefault.default)("Turtle");
    scene.add(riveEntity);
    (0, _gameDefault.default).addScene(scene);
    const crosshairToggler = new (0, _scriptableEntityDefault.default)("CrosshairToggler");
    crosshairToggler.setScriptFunction((deltaTime)=>{
        if ((0, _inputDefault.default).isKeyDown((0, _input.KeyCode).C)) (0, _debugDefault.default).toggleCrosshair();
    });
    scene.add(crosshairToggler);
}
/**
 * Just Running a standard .riv file.
 * I run it to see if everything still works.
 */ async function bigRivFile() {
    await (0, _gameDefault.default).initiate(1280, 720);
    let file = await (0, _riveLoaderDefault.default).loadFile(new URL(require("86f396a8487af458")).href);
    let riveEntity = new (0, _riveStateMachineEntityDefault.default)("ShroomGloom", file.artboardByIndex(0), file.artboardByIndex(0).stateMachineByIndex(0));
    const scene = new (0, _sceneDefault.default)("BigRivFile");
    scene.add(riveEntity);
    (0, _gameDefault.default).addScene(scene);
}
/**
 * Simple scene to test whether browser scaling and dynamic positioning works
 */ async function scalingScene() {
    await (0, _gameDefault.default).initiate(400, 400);
    let file = await (0, _riveLoaderDefault.default).loadFile(new URL(require("798d332fea5cf0c9")).href);
    const scene = new (0, _sceneDefault.default)("ScalingScene");
    const riveEntity = new (0, _riveEntityDefault.default)("ScalingTest", file.artboardByIndex(2));
    scene.add(riveEntity);
    (0, _gameDefault.default).addScene(scene);
    return;
/*
    //tween example:
    const tween = new Tween(riveEntity.position)
    .to(new Vec2D(100, 100), 2500)
    .easing(Easing.Bounce.InOut)
    .start();

    const tweenUpdater = new ScriptableEntity("TweenUpdater");
    tweenUpdater.setUpdateFunction((deltaTime: number, time: number) => {
        tween.update(time);
    });
    scene.Add(tweenUpdater);
    */ }
/**
 * Simple test showing Tweens in action
 */ async function basketBallTestScene(skipGameInitialization = false) {
    if (!skipGameInitialization) await (0, _gameDefault.default).initiate(1280, 720);
    console.log(new URL(require("6cadf3c6dcf667ea")).href);
    let basket = await (0, _riveLoaderDefault.default).loadFile(new URL(require("6cadf3c6dcf667ea")).href);
    let basketRiveEntity = new (0, _riveAnimatorEntityDefault.default)("Basketball", basket.artboardByIndex(0));
    basketRiveEntity.add(basketRiveEntity.artboard.animationByIndex(0));
    basketRiveEntity.position.x = (0, _gameDefault.default).resolution.x * .5 - basketRiveEntity.width * .5;
    basketRiveEntity.position.y = (0, _gameDefault.default).resolution.y * .5 - basketRiveEntity.height * .5;
    const scene = new (0, _sceneDefault.default)("BasketBallTestScene");
    scene.add(basketRiveEntity);
    (0, _gameDefault.default).addScene(scene);
    //testing tweens:
    let tween = (0, _tweenDefault.default).toProperty((value)=>basketRiveEntity.position = value, ()=>basketRiveEntity.position, new (0, _vectorDefault.default)(200, 100), .5).auto(false).easing((0, _easing.easing).outCubic).setLoops(-1).setLoopType((0, _tween.LoopType).Restart).onUpdate((value)=>{
    //console.log(basketRiveEntity.position);
    });
    scene.add(tween);
    let scriptable = new (0, _scriptableEntityDefault.default)("TweenUpdater");
    scriptable.setScriptFunction((deltaTime)=>{
        if ((0, _inputDefault.default).isKeyDown((0, _input.KeyCode).Space)) {
            if (!tween.isPlaying) tween.play();
            else tween.reset();
        }
    });
    scene.add(scriptable);
}
/**
 * Simple scene showing direct control over animation blends.
 */ async function animationBlendingTestScene() {
    await (0, _gameDefault.default).initiate(1280, 720);
    let html = ` 
    <style>
         #slider-container {
            position: fixed;
            bottom: 10px;
            right: 10px;
            z-index: 1000;
            background-color: rgba(255, 255, 255, 0.8);
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            font-family: sans-serif;
            font-size: 12px;
        }
        #slider-container label {
            display: block;
            margin-bottom: 5px;
        }
        #slider-container input {
            width: 200px;
        }
    </style>
    <div id="slider-container">
        <label for="slider1">Stop:</label>
        <input type="range" id="slider1" min="0" max="1" step="0.01" value="0.0">
        <label for="slider2">Walk:</label>
        <input type="range" id="slider2" min="0" max="1" step="0.01" value="1.0">
    </div>`;
    // Create a new div element
    const newDiv = document.createElement('div');
    // Set the innerHTML of the new div to our HTML string
    newDiv.innerHTML = html;
    // Append the new div to the body
    document.body.appendChild(newDiv);
    let character = await (0, _riveLoaderDefault.default).loadFile(new URL(require("e9f96dd7a15e7")).href);
    let characterRive = new (0, _riveAnimatorEntityDefault.default)("WalkCycle", character.artboardByIndex(0));
    characterRive.position.x = (0, _gameDefault.default).resolution.x * .5 - characterRive.width * .5;
    characterRive.position.y = (0, _gameDefault.default).resolution.y * .5 - characterRive.height * .5;
    //characterRive.addByName("Walk");
    //characterRive.addByName("Stop");
    console.log(`Added: ${characterRive.addByName("Walk")}`);
    console.log(`Added: ${characterRive.addByName("Stop")}`);
    const scene = new (0, _sceneDefault.default)("AnimationBlendingTestScene");
    scene.add(characterRive);
    (0, _gameDefault.default).addScene(scene);
    const slider1 = document.getElementById('slider1');
    const slider2 = document.getElementById('slider2');
    const weightUpdater = new (0, _scriptableEntityDefault.default)("WeightUpdater");
    weightUpdater.setScriptFunction(()=>{
        const weight1 = parseFloat(slider1.value);
        const weight2 = parseFloat(slider2.value);
        characterRive.setWeight("Stop", weight1);
        characterRive.setWeight("Walk", weight2);
    });
    scene.add(weightUpdater);
}
/**
 * Simple scene showing how to capture Rive Events.
 */ async function eventsTestScene() {
    await (0, _gameDefault.default).initiate(1000, 1000);
    let events = await (0, _riveLoaderDefault.default).loadFile(new URL(require("f8cec9c71d4535c")).href);
    let artboard = events.artboardByIndex(0);
    let riveEntity = new (0, _riveStateMachineEntityDefault.default)("EventsTest", artboard, artboard.stateMachineByIndex(0));
    riveEntity.position.x = (0, _gameDefault.default).resolution.x * .5 - riveEntity.width * .5;
    riveEntity.position.y = (0, _gameDefault.default).resolution.y * .5 - riveEntity.height * .5;
    const scene = new (0, _sceneDefault.default)("EventsTestScene");
    scene.add(riveEntity);
    (0, _gameDefault.default).addScene(scene);
    (0, _gameDefault.default).timeScale = .1;
    riveEntity.addRiveEventListener((event)=>{
        console.log(event.name);
        console.log(event === null || event === void 0 ? void 0 : event.properties);
    });
}
/**
 * Simple scene I use to test performance. TODO: Implement batch rendering!
 */ async function fashionTestScene() {
    await (0, _gameDefault.default).initiate(1280, 720);
    let file = await (0, _riveLoaderDefault.default).loadFile(new URL(require("c086306ea555ac1")).href);
    let artboard = file.artboardByIndex(0);
    let riveEntity = new (0, _riveStateMachineEntityDefault.default)("Fashion", artboard, artboard.stateMachineByIndex(0));
    const scene = new (0, _sceneDefault.default)("FashionTestScene");
    scene.add(riveEntity);
    (0, _gameDefault.default).addScene(scene);
    for(let i = 0; i < 8; i++){
        let x = i % 8;
        let y = Math.floor(i / 8);
        artboard = file.artboardByIndex(0);
        riveEntity = new (0, _riveStateMachineEntityDefault.default)("Fashion" + i, artboard, artboard.stateMachineByIndex(0));
        riveEntity.position.x = x * 250;
        riveEntity.position.y = y * 400;
        scene.add(riveEntity);
        var deltaTime;
        continue;
    }
}
main();

},{"../Game":"TyEjs","../Rive/RiveStateMachineEntity":"hCfrJ","../Rive/RiveAnimatorEntity":"bWxP8","../Rive/RiveEntity":"enO6z","../Systems/Debug":"dv4Rb","../Systems/Input":"23uan","../Core/Scene":"kqwwp","../Core/ScriptableEntity":"124sN","../Rive/RiveLoader":"eNCc1","../Core/Tweens/Tween":"9i4IM","../Utils/Vector":"ciqfS","../Core/Tweens/Easing":"6tNJ4","../Systems/Physics":"1UraH","c086306ea555ac1":"lovKR","b8838d0532b8f376":"73fyM","18dc546a5bf88657":"jUy2m","ce9d377b0d7ff8f3":"eNEvN","86f396a8487af458":"bmMc2","798d332fea5cf0c9":"hU8eH","6cadf3c6dcf667ea":"jTWip","e9f96dd7a15e7":"gkGrJ","f8cec9c71d4535c":"aJgHd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"TyEjs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vector = require("./Utils/Vector");
var _vectorDefault = parcelHelpers.interopDefault(_vector);
var _input = require("./Systems/Input");
var _inputDefault = parcelHelpers.interopDefault(_input);
var _debug = require("./Systems/Debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _riveLoader = require("./Rive/RiveLoader");
var _riveLoaderDefault = parcelHelpers.interopDefault(_riveLoader);
const CANVAS_ID = 'gameCanvas';
class Game {
    static get isInitiated() {
        return Game._hasInitiated;
    }
    static async initiate(width, height) {
        if (Game._hasInitiated) throw console.error("Has already been initiated");
        await (0, _riveLoaderDefault.default).loadRive();
        Game._hasInitiated = true;
        Game.resolution = new (0, _vectorDefault.default)(width, height);
        Game.gameCanvas = new OffscreenCanvas(width, height);
        Game.renderer = (0, _riveLoaderDefault.default).rive.makeRenderer(Game.gameCanvas, false);
        Game.finalCanvas = document.getElementById(CANVAS_ID);
        (0, _inputDefault.default).init(Game.gameCanvas, Game.finalCanvas);
        (0, _debugDefault.default).init(Game.gameCanvas, Game.finalCanvas);
        window.addEventListener('resize', Game.onResizeWindow);
        Game.onResizeWindow();
        //TODO: figure out what's the best event for this?
        window.addEventListener('onvisibilitychange', Game.destroy);
        requestAnimationFrame(Game.update);
    }
    static update(time) {
        // Handle first frame with lag spike
        if (Game.elapsedTime === -1) {
            Game.elapsedTime = time;
            requestAnimationFrame(Game.update);
            return;
        }
        let deltaTime = (time - Game.elapsedTime) / 1000;
        deltaTime *= Game.timeScale;
        deltaTime = Math.min(deltaTime, Game.MAX_DELTA_TIME);
        Game.elapsedTime = time;
        (0, _debugDefault.default).update(deltaTime);
        Game.fixedUpdateAccumulator += deltaTime;
        let steps = 0;
        while(Game.fixedUpdateAccumulator >= Game.FIXED_TIME_STEP && steps < Game.MAX_STEPS){
            Game.fixedUpdateAccumulator -= Game.FIXED_TIME_STEP;
            Game.fixedUpdate(Game.FIXED_TIME_STEP);
            steps++;
        }
        Game.interpolationAlpha = Game.fixedUpdateAccumulator / Game.FIXED_TIME_STEP;
        for (const scene of Game.scenes.values())if (scene.enabled) scene.update(deltaTime);
        Game.render();
        (0, _riveLoaderDefault.default).rive.resolveAnimationFrame();
        Game.debugRender();
        Game.finalRenderPass();
        (0, _inputDefault.default).clear();
        requestAnimationFrame(Game.update);
    }
    static fixedUpdate(fixedDeltaTime) {
        for (const scene of Game.scenes.values())if (scene.enabled) scene.fixedUpdate(fixedDeltaTime);
    }
    //================================
    //=========== RENDER =============
    //================================
    static render() {
        Game.renderer.clear();
        for (const scene of Game.scenes.values())if (scene.enabled) scene.render(Game.renderer);
        Game.renderer.flush();
    }
    //HACK! TODO: REMOVE!
    static debugRender() {
        for (const scene of Game.scenes.values())if (scene.enabled) scene.debugRender(Game.gameCanvas);
    }
    static finalRenderPass() {
        // Draw offscreen canvas to main canvas
        const finalContext = Game.finalCanvas.getContext('2d'); // Access underlying 2D context
        if (!finalContext) throw new Error("No 2D context found");
        finalContext.clearRect(0, 0, Game.finalCanvas.width, Game.finalCanvas.height);
        finalContext.drawImage(Game.gameCanvas, 0, 0, Game.finalCanvas.width, Game.finalCanvas.height);
    }
    static onResizeWindow() {
        const aspectRatio = Game.resolution.x / Game.resolution.y;
        let newWidth = window.innerWidth;
        let newHeight = window.innerHeight;
        if (newWidth / newHeight > aspectRatio) // Window is wider than canvas aspect ratio
        newWidth = Math.floor(newHeight * aspectRatio);
        else // Window is taller than canvas aspect ratio
        newHeight = Math.floor(newWidth / aspectRatio);
        // Update canvas dimensions
        Game.finalCanvas.width = newWidth;
        Game.finalCanvas.height = newHeight;
    }
    static addScene(scene) {
        Game.scenes.set(scene.name, scene);
    }
    static getScene(name) {
        return Game.scenes.get(name);
    }
    static removeScene(name) {
        Game.scenes.delete(name);
    }
    //================================
    //========== DESTRUCT ============
    //================================
    static destroy(event) {
        event.preventDefault();
        event.returnValue = true;
        window.alert("Being Destroyed");
        for (const scene of Game.scenes.values())scene.destroy();
        Game.scenes.clear();
    }
}
//================================
//==== GLOBAL STATIC VARIABLES ====
//================================
Game.resolution = new (0, _vectorDefault.default)(400, 400);
//================================
//======== INITIALIZATION ========
//================================
Game._hasInitiated = false;
//================================
//========== UPDATE ==============
//================================
Game.MAX_DELTA_TIME = 0.1;
Game.FIXED_TIME_STEP = 1 / 30; // 60 Hz
Game.MAX_STEPS = 5;
Game.timeScale = 1.0;
Game.elapsedTime = -1;
Game.fixedUpdateAccumulator = 0;
Game.interpolationAlpha = 0;
//================================
//========== SCENES ==============
//================================
Game.scenes = new Map();
exports.default = Game;

},{"./Utils/Vector":"ciqfS","./Systems/Input":"23uan","./Systems/Debug":"dv4Rb","./Rive/RiveLoader":"eNCc1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ciqfS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Vector {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    // Basic operations
    add(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }
    subtract(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }
    multiply(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }
    divide(scalar) {
        if (scalar === 0) throw new Error("Division by zero");
        return new Vector(this.x / scalar, this.y / scalar);
    }
    // Vector products
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
    // 2D cross product returns a scalar representing the z component
    cross(other) {
        return this.x * other.y - this.y * other.x;
    }
    // Vector operations
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    lengthSquared() {
        return this.x * this.x + this.y * this.y;
    }
    normalize() {
        const len = this.length();
        if (len === 0) throw new Error("Cannot normalize zero vector");
        return this.divide(len);
    }
    // Returns angle between vectors in radians
    angleTo(other) {
        return Math.acos(Math.min(1, Math.max(-1, this.dot(other) / (this.length() * other.length()))));
    }
    // Rotation
    rotate(angle, origin) {
        if (!origin) {
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            return new Vector(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
        }
        const translated = new Vector(this.x - origin.x, this.y - origin.y);
        const rotated = translated.rotate(angle);
        return new Vector(rotated.x + origin.x, rotated.y + origin.y);
    }
    // Swizzle operations
    get xx() {
        return new Vector(this.x, this.x);
    }
    get xy() {
        return new Vector(this.x, this.y);
    }
    get yx() {
        return new Vector(this.y, this.x);
    }
    get yy() {
        return new Vector(this.y, this.y);
    }
    // Utility methods
    distanceTo(other) {
        return this.subtract(other).length();
    }
    distanceToSquared(other) {
        return this.subtract(other).lengthSquared();
    }
    // Returns perpendicular vector (rotated 90 degrees counterclockwise)
    perpendicular() {
        return new Vector(-this.y, this.x);
    }
    // Projects this vector onto other vector
    projectOnto(other) {
        const dot = this.dot(other);
        const otherLengthSq = other.lengthSquared();
        if (otherLengthSq === 0) throw new Error("Cannot project onto zero vector");
        return other.multiply(dot / otherLengthSq);
    }
    // Static utility methods
    static degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    static radiansToDegrees(radians) {
        return radians * (180 / Math.PI);
    }
}
exports.default = Vector;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"23uan":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KeyCode", ()=>KeyCode);
var _game = require("../Game");
var _gameDefault = parcelHelpers.interopDefault(_game);
var _riveLoader = require("../Rive/RiveLoader");
var _riveLoaderDefault = parcelHelpers.interopDefault(_riveLoader);
var _a;
//TODO: keyboard events are kind of garbage
class Input {
    static init(gameCanvas, finalCanvas) {
        this.gameCanvas = gameCanvas;
        this.finalCanvas = finalCanvas;
        // Mouse events
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mousedown', this.onMouseDown);
        window.addEventListener('mouseup', this.onMouseUp);
        // Touch events
        window.addEventListener('touchstart', this.onMouseDown);
        window.addEventListener('touchend', this.onMouseUp);
        window.addEventListener('touchmove', this.onTouchMove);
        // Prevent default touch behavior
        window.addEventListener('touchstart', this.preventDefault, {
            passive: false
        });
        window.addEventListener('touchmove', this.preventDefault, {
            passive: false
        });
        // Keyboard events
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
    }
    /**
     * At the end of the frame, clear the input state.
     */ static clear() {
        this.isMouseClicked = false;
        this.isMouseUp = false;
        this.hasMouseMoved = false;
        this.keysPressed.clear();
        this.keysReleased.clear();
    }
    static onClick(event) {
        this.isMouseClicked = true;
        event.preventDefault();
    //console.log('Click or tap detected', event);
    // Your click/tap logic here
    }
    static updateCoordinates(event) {
        if (event instanceof MouseEvent) {
            this.windowMouseX = event.clientX;
            this.windowMouseY = event.clientY;
        } else if (event instanceof TouchEvent && event.touches.length > 0) {
            this.windowMouseX = event.touches[0].clientX;
            this.windowMouseY = event.touches[0].clientY;
        }
        //need to convert from window transform to game canvas transform
        let rect = this.finalCanvas.getBoundingClientRect();
        this.gameMouseX = (this.windowMouseX - rect.left) * (0, _gameDefault.default).resolution.x / rect.width;
        this.gameMouseY = (this.windowMouseY - rect.top) * (0, _gameDefault.default).resolution.y / rect.height;
    }
    static preventDefault(event) {
        event.preventDefault();
    }
    static isKeyDown(keyCode) {
        return this.keysPressed.has(keyCode);
    }
    static isKeyUp(keyCode) {
        return this.keysReleased.has(keyCode);
    }
    static isKey(keyCode) {
        return this.keysDown.has(keyCode);
    }
    static mouseToArtboardSpace(riveRenderer) {
        /*
        In new version of Rive, it needs a fifth parameter which is the scaleFactor. The TS definition says it's optional, but it's not.
        */ let fwdMatrix = (0, _riveLoaderDefault.default).rive.computeAlignment(riveRenderer.fit, riveRenderer.alignment, riveRenderer.frame, riveRenderer.artboard.bounds);
        let inverseViewMatrix = new (0, _riveLoaderDefault.default).rive.Mat2D();
        let x = 0;
        let y = 0;
        // Invert the view matrix in order to go from cursor to artboard space.
        if (fwdMatrix.invert(inverseViewMatrix)) {
            x = inverseViewMatrix.xx * this.gameMouseX + inverseViewMatrix.yx * this.gameMouseY + inverseViewMatrix.tx;
            y = inverseViewMatrix.xy * this.gameMouseX + inverseViewMatrix.yy * this.gameMouseY + inverseViewMatrix.ty;
        }
        return {
            x,
            y
        };
    }
}
_a = Input;
Input.windowMouseX = 0;
Input.windowMouseY = 0;
Input.gameMouseX = 0;
Input.gameMouseY = 0;
Input.isMouseDown = false;
Input.isMouseClicked = false;
Input.isMouseUp = false;
Input.hasMouseMoved = false;
Input.keysDown = new Set();
Input.keysPressed = new Set();
Input.keysReleased = new Set();
Input.onMouseDown = (event)=>{
    _a.isMouseDown = true;
    _a.hasMouseMoved = false;
    _a.updateCoordinates(event);
    event.preventDefault();
};
Input.onMouseUp = (event)=>{
    _a.isMouseDown = false;
    _a.isMouseUp = true;
    _a.updateCoordinates(event);
    if (!_a.hasMouseMoved) _a.onClick(event);
    event.preventDefault();
};
Input.onMouseMove = (event)=>{
    _a.hasMouseMoved = true;
    _a.updateCoordinates(event);
    event.preventDefault();
};
Input.onTouchMove = (event)=>{
    _a.hasMouseMoved = true;
    _a.updateCoordinates(event);
    event.preventDefault();
};
Input.onKeyDown = (event)=>{
    const keyCode = event.keyCode;
    if (!_a.keysDown.has(keyCode)) _a.keysPressed.add(keyCode);
    _a.keysDown.add(keyCode);
};
Input.onKeyUp = (event)=>{
    const keyCode = event.keyCode;
    _a.keysDown.delete(keyCode);
    _a.keysPressed.delete(keyCode);
    _a.keysReleased.add(keyCode);
};
exports.default = Input;
var KeyCode;
(function(KeyCode) {
    // Special Keys
    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
    KeyCode[KeyCode["Tab"] = 9] = "Tab";
    KeyCode[KeyCode["Enter"] = 13] = "Enter";
    KeyCode[KeyCode["Shift"] = 16] = "Shift";
    KeyCode[KeyCode["Ctrl"] = 17] = "Ctrl";
    KeyCode[KeyCode["Alt"] = 18] = "Alt";
    KeyCode[KeyCode["PauseBreak"] = 19] = "PauseBreak";
    KeyCode[KeyCode["CapsLock"] = 20] = "CapsLock";
    KeyCode[KeyCode["Escape"] = 27] = "Escape";
    KeyCode[KeyCode["Space"] = 32] = "Space";
    KeyCode[KeyCode["PageUp"] = 33] = "PageUp";
    KeyCode[KeyCode["PageDown"] = 34] = "PageDown";
    KeyCode[KeyCode["End"] = 35] = "End";
    KeyCode[KeyCode["Home"] = 36] = "Home";
    KeyCode[KeyCode["LeftArrow"] = 37] = "LeftArrow";
    KeyCode[KeyCode["UpArrow"] = 38] = "UpArrow";
    KeyCode[KeyCode["RightArrow"] = 39] = "RightArrow";
    KeyCode[KeyCode["DownArrow"] = 40] = "DownArrow";
    KeyCode[KeyCode["Insert"] = 45] = "Insert";
    KeyCode[KeyCode["Delete"] = 46] = "Delete";
    // Numbers
    KeyCode[KeyCode["Zero"] = 48] = "Zero";
    KeyCode[KeyCode["One"] = 49] = "One";
    KeyCode[KeyCode["Two"] = 50] = "Two";
    KeyCode[KeyCode["Three"] = 51] = "Three";
    KeyCode[KeyCode["Four"] = 52] = "Four";
    KeyCode[KeyCode["Five"] = 53] = "Five";
    KeyCode[KeyCode["Six"] = 54] = "Six";
    KeyCode[KeyCode["Seven"] = 55] = "Seven";
    KeyCode[KeyCode["Eight"] = 56] = "Eight";
    KeyCode[KeyCode["Nine"] = 57] = "Nine";
    // Letters
    KeyCode[KeyCode["A"] = 65] = "A";
    KeyCode[KeyCode["B"] = 66] = "B";
    KeyCode[KeyCode["C"] = 67] = "C";
    KeyCode[KeyCode["D"] = 68] = "D";
    KeyCode[KeyCode["E"] = 69] = "E";
    KeyCode[KeyCode["F"] = 70] = "F";
    KeyCode[KeyCode["G"] = 71] = "G";
    KeyCode[KeyCode["H"] = 72] = "H";
    KeyCode[KeyCode["I"] = 73] = "I";
    KeyCode[KeyCode["J"] = 74] = "J";
    KeyCode[KeyCode["K"] = 75] = "K";
    KeyCode[KeyCode["L"] = 76] = "L";
    KeyCode[KeyCode["M"] = 77] = "M";
    KeyCode[KeyCode["N"] = 78] = "N";
    KeyCode[KeyCode["O"] = 79] = "O";
    KeyCode[KeyCode["P"] = 80] = "P";
    KeyCode[KeyCode["Q"] = 81] = "Q";
    KeyCode[KeyCode["R"] = 82] = "R";
    KeyCode[KeyCode["S"] = 83] = "S";
    KeyCode[KeyCode["T"] = 84] = "T";
    KeyCode[KeyCode["U"] = 85] = "U";
    KeyCode[KeyCode["V"] = 86] = "V";
    KeyCode[KeyCode["W"] = 87] = "W";
    KeyCode[KeyCode["X"] = 88] = "X";
    KeyCode[KeyCode["Y"] = 89] = "Y";
    KeyCode[KeyCode["Z"] = 90] = "Z";
    // Windows Keys
    KeyCode[KeyCode["LeftWindowKey"] = 91] = "LeftWindowKey";
    KeyCode[KeyCode["RightWindowKey"] = 92] = "RightWindowKey";
    // Numpad
    KeyCode[KeyCode["Numpad0"] = 96] = "Numpad0";
    KeyCode[KeyCode["Numpad1"] = 97] = "Numpad1";
    KeyCode[KeyCode["Numpad2"] = 98] = "Numpad2";
    KeyCode[KeyCode["Numpad3"] = 99] = "Numpad3";
    KeyCode[KeyCode["Numpad4"] = 100] = "Numpad4";
    KeyCode[KeyCode["Numpad5"] = 101] = "Numpad5";
    KeyCode[KeyCode["Numpad6"] = 102] = "Numpad6";
    KeyCode[KeyCode["Numpad7"] = 103] = "Numpad7";
    KeyCode[KeyCode["Numpad8"] = 104] = "Numpad8";
    KeyCode[KeyCode["Numpad9"] = 105] = "Numpad9";
    KeyCode[KeyCode["Multiply"] = 106] = "Multiply";
    KeyCode[KeyCode["Add"] = 107] = "Add";
    KeyCode[KeyCode["Subtract"] = 109] = "Subtract";
    KeyCode[KeyCode["DecimalPoint"] = 110] = "DecimalPoint";
    KeyCode[KeyCode["Divide"] = 111] = "Divide";
    // Function Keys
    KeyCode[KeyCode["F1"] = 112] = "F1";
    KeyCode[KeyCode["F2"] = 113] = "F2";
    KeyCode[KeyCode["F3"] = 114] = "F3";
    KeyCode[KeyCode["F4"] = 115] = "F4";
    KeyCode[KeyCode["F5"] = 116] = "F5";
    KeyCode[KeyCode["F6"] = 117] = "F6";
    KeyCode[KeyCode["F7"] = 118] = "F7";
    KeyCode[KeyCode["F8"] = 119] = "F8";
    KeyCode[KeyCode["F9"] = 120] = "F9";
    KeyCode[KeyCode["F10"] = 121] = "F10";
    KeyCode[KeyCode["F11"] = 122] = "F11";
    KeyCode[KeyCode["F12"] = 123] = "F12";
    // Locks
    KeyCode[KeyCode["NumLock"] = 144] = "NumLock";
    KeyCode[KeyCode["ScrollLock"] = 145] = "ScrollLock";
    // Punctuation and Symbols
    KeyCode[KeyCode["SemiColon"] = 186] = "SemiColon";
    KeyCode[KeyCode["EqualSign"] = 187] = "EqualSign";
    KeyCode[KeyCode["Comma"] = 188] = "Comma";
    KeyCode[KeyCode["Dash"] = 189] = "Dash";
    KeyCode[KeyCode["Period"] = 190] = "Period";
    KeyCode[KeyCode["ForwardSlash"] = 191] = "ForwardSlash";
    KeyCode[KeyCode["GraveAccent"] = 192] = "GraveAccent";
    KeyCode[KeyCode["OpenBracket"] = 219] = "OpenBracket";
    KeyCode[KeyCode["BackSlash"] = 220] = "BackSlash";
    KeyCode[KeyCode["CloseBracket"] = 221] = "CloseBracket";
    KeyCode[KeyCode["SingleQuote"] = 222] = "SingleQuote";
})(KeyCode || (KeyCode = {}));

},{"../Game":"TyEjs","../Rive/RiveLoader":"eNCc1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eNCc1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _webglAdvanced = require("@rive-app/webgl-advanced");
var _webglAdvancedDefault = parcelHelpers.interopDefault(_webglAdvanced);
const RIVE_VERSION = '2.21.6'; //LAST IS 2.23.10
//Local WASM loads faster. Remote WASM might be updated if I'm lazy.
const USE_LOCAL_WASM = false;
const LOCAL_WASM_PATH = `../../export/rive.wasm`;
const LOCAL_WASM_URL = new URL(LOCAL_WASM_PATH, "file:///src/Rive/RiveLoader.ts").toString();
const REMOTE_WASM_URL = `https://unpkg.com/@rive-app/webgl-advanced@${RIVE_VERSION}/rive.wasm`;
class RiveLoader {
    static async loadRive() {
        console.log("Loading Rive from ", USE_LOCAL_WASM ? LOCAL_WASM_URL : REMOTE_WASM_URL);
        RiveLoader.rive = await (0, _webglAdvancedDefault.default)({
            locateFile: (_)=>USE_LOCAL_WASM ? LOCAL_WASM_URL : REMOTE_WASM_URL
        });
    }
    static async loadFile(url) {
        if (!RiveLoader.rive) throw new Error("RiveInstance not initialized");
        const bytes = await (await fetch(new Request(url))).arrayBuffer();
        const file = await RiveLoader.rive.load(new Uint8Array(bytes));
        return file;
    }
    static logUnpackedRiveFile(file) {
        let log = "";
        for(let i = 0; i < file.artboardCount(); i++){
            let artboard = file.artboardByIndex(i);
            log += `\n Artboard: ${artboard.name}`;
            log += `\n     ${artboard.stateMachineCount()} State Machines`;
            for(let i = 0; i < artboard.stateMachineCount(); i++){
                let sm = artboard.stateMachineByIndex(i);
                log += `\n ----SM: ${sm.name}`;
                let sm_instance = new RiveLoader.rive.StateMachineInstance(sm, artboard);
                for(let i = 0; i < sm_instance.inputCount(); i++){
                    let smi = sm_instance.input(i);
                    log += `\n -------SMI: ${smi.name} | ${smi.type} | ${smi.value}`;
                }
                sm_instance.delete();
            }
            log += `\n     ${artboard.animationCount()} Animations`;
            for(let i = 0; i < artboard.animationCount(); i++)log += `\n ----AN: ${artboard.animationByIndex(i).name}`;
        }
        console.log(log);
    }
}
exports.default = RiveLoader;

},{"@rive-app/webgl-advanced":"eFTLe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eFTLe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var Rive = (()=>{
    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
    return function(moduleArg = {}) {
        var m = moduleArg, aa, ba;
        m.ready = new Promise((a, b)=>{
            aa = a;
            ba = b;
        });
        function ca() {
            function a(g) {
                const k = d;
                c = b = 0;
                d = new Map();
                k.forEach((q)=>{
                    try {
                        q(g);
                    } catch (n) {
                        console.error(n);
                    }
                });
                this.kb();
                e && e.Mb();
            }
            let b = 0, c = 0, d = new Map(), e = null, f = null;
            this.requestAnimationFrame = function(g) {
                b || (b = requestAnimationFrame(a.bind(this)));
                const k = ++c;
                d.set(k, g);
                return k;
            };
            this.cancelAnimationFrame = function(g) {
                d.delete(g);
                b && 0 == d.size && (cancelAnimationFrame(b), b = 0);
            };
            this.Kb = function(g) {
                f && (document.body.remove(f), f = null);
                g || (f = document.createElement("div"), f.style.backgroundColor = "black", f.style.position = "fixed", f.style.right = 0, f.style.top = 0, f.style.color = "white", f.style.padding = "4px", f.innerHTML = "RIVE FPS", g = function(k) {
                    f.innerHTML = "RIVE FPS " + k.toFixed(1);
                }, document.body.appendChild(f));
                e = new function() {
                    let k = 0, q = 0;
                    this.Mb = function() {
                        var n = performance.now();
                        q ? (++k, n -= q, 1000 < n && (g(1000 * k / n), k = q = 0)) : (q = n, k = 0);
                    };
                }();
            };
            this.kb = function() {};
        }
        function da() {
            console.assert(!0);
            const a = new Map();
            let b = -Infinity;
            this.push = function(c) {
                c = c + 255 >> 8;
                a.has(c) && clearTimeout(a.get(c));
                a.set(c, setTimeout(function() {
                    a.delete(c);
                    0 == a.length ? b = -Infinity : c == b && (b = Math.max(...a.keys()), console.assert(b < c));
                }, 1000));
                b = Math.max(c, b);
                return b << 8;
            };
        }
        const ea = m.onRuntimeInitialized;
        m.onRuntimeInitialized = function() {
            ea && ea();
            let a = m.decodeAudio;
            m.decodeAudio = function(d, e) {
                d = a(d);
                e(d);
            };
            let b = m.decodeFont;
            m.decodeFont = function(d, e) {
                d = b(d);
                e(d);
            };
            const c = m.FileAssetLoader;
            m.ptrToAsset = (d)=>{
                let e = m.ptrToFileAsset(d);
                return e.isImage ? m.ptrToImageAsset(d) : e.isFont ? m.ptrToFontAsset(d) : e.isAudio ? m.ptrToAudioAsset(d) : e;
            };
            m.CustomFileAssetLoader = c.extend("CustomFileAssetLoader", {
                __construct: function({ loadContents: d }) {
                    this.__parent.__construct.call(this);
                    this.Bb = d;
                },
                loadContents: function(d, e) {
                    d = m.ptrToAsset(d);
                    return this.Bb(d, e);
                }
            });
            m.CDNFileAssetLoader = c.extend("CDNFileAssetLoader", {
                __construct: function() {
                    this.__parent.__construct.call(this);
                },
                loadContents: function(d) {
                    let e = m.ptrToAsset(d);
                    d = e.cdnUuid;
                    if ("" === d) return !1;
                    (function(f, g) {
                        var k = new XMLHttpRequest();
                        k.responseType = "arraybuffer";
                        k.onreadystatechange = function() {
                            4 == k.readyState && 200 == k.status && g(k);
                        };
                        k.open("GET", f, !0);
                        k.send(null);
                    })(e.cdnBaseUrl + "/" + d, (f)=>{
                        e.decode(new Uint8Array(f.response));
                    });
                    return !0;
                }
            });
            m.FallbackFileAssetLoader = c.extend("FallbackFileAssetLoader", {
                __construct: function() {
                    this.__parent.__construct.call(this);
                    this.fb = [];
                },
                addLoader: function(d) {
                    this.fb.push(d);
                },
                loadContents: function(d, e) {
                    for (let f of this.fb){
                        if (f.loadContents(d, e)) return !0;
                    }
                    return !1;
                }
            });
        };
        const fa = m.onRuntimeInitialized;
        m.onRuntimeInitialized = function() {
            function a(l) {
                this.F = l;
                this.yb = l.getContext("2d");
                this.Db = e;
                this.R = [];
                this.ja = 0;
                this.clear = function() {
                    console.assert(0 == this.ja);
                    this.R = [];
                    f.delete(this);
                };
                this.save = function() {
                    ++this.ja;
                    this.R.push(e.save.bind(e));
                };
                this.restore = function() {
                    0 < this.ja && (this.R.push(e.restore.bind(e)), --this.ja);
                };
                this.transform = function(r) {
                    this.R.push(e.transform.bind(e, r));
                };
                this.align = function(r, x, z, G) {
                    this.R.push(e.align.bind(e, r, x, z, G));
                };
                this.flush = function() {
                    console.assert(0 == this.ja);
                    f.add(this);
                    d && c();
                };
            }
            function b(l) {
                var r = {
                    alpha: 1,
                    depth: 0,
                    stencil: 8,
                    antialias: 0,
                    premultipliedAlpha: 1,
                    preserveDrawingBuffer: 0,
                    preferLowPowerToHighPerformance: 0,
                    failIfMajorPerformanceCaveat: 0,
                    enableExtensionsByDefault: 1,
                    explicitSwapControl: 0,
                    renderViaOffscreenBackBuffer: 0
                }, x = l.getContext("webgl2", r);
                x || (x = l.getContext("webgl", r));
                var z = x, G = ia(ja), C = {
                    handle: G,
                    attributes: r,
                    version: r.Dc,
                    Ta: z
                };
                z.canvas && (z.canvas.pc = C);
                ja[G] = C;
                ("undefined" == typeof r.Jb || r.Jb) && ka(C);
                la(G);
                r = g(l.width, l.height);
                r.Ab = G;
                r.F = l;
                r.Va = l.width;
                r.Ua = l.height;
                r.zb = x;
                return r;
            }
            function c() {
                if (e) {
                    var l = e.Cb, r = 0, x = 0, z = 0, G = Array(f.size), C = 0;
                    for (var J of f)J.da = Math.min(J.F.width, l), J.ca = Math.min(J.F.height, l), J.Ja = J.ca * J.da, r = Math.max(r, J.da), x = Math.max(x, J.ca), z += J.Ja, G[C++] = J;
                    f.clear();
                    if (!(0 >= z)) {
                        r = 1 << (0 >= r ? 0 : 32 - Math.clz32(r - 1));
                        for(x = 1 << (0 >= x ? 0 : 32 - Math.clz32(x - 1)); x * r < z;)r <= x ? r *= 2 : x *= 2;
                        r = Math.min(r, l);
                        r = Math.min(x, l);
                        G.sort((ha, Fb)=>Fb.Ja - ha.Ja);
                        z = new m.DynamicRectanizer(l);
                        for(J = 0; J < G.length;){
                            z.reset(r, x);
                            for(C = J; C < G.length; ++C){
                                var N = G[C], K = z.addRect(N.da, N.ca);
                                if (0 > K) {
                                    console.assert(C > J);
                                    break;
                                }
                                N.pa = K & 65535;
                                N.qa = K >> 16;
                            }
                            N = q.push(z.drawWidth());
                            K = n.push(z.drawHeight());
                            console.assert(N >= z.drawWidth());
                            console.assert(K >= z.drawHeight());
                            console.assert(N <= l);
                            console.assert(K <= l);
                            e.F.width != N && (e.F.width = N);
                            e.F.height != K && (e.F.height = K);
                            e.clear();
                            for(N = J; N < C; ++N){
                                K = G[N];
                                e.saveClipRect(K.pa, K.qa, K.pa + K.da, K.qa + K.ca);
                                let ha = new m.Mat2D();
                                ha.xx = K.da / K.F.width;
                                ha.yy = K.ca / K.F.height;
                                ha.xy = ha.yx = 0;
                                ha.tx = K.pa;
                                ha.ty = K.qa;
                                e.transform(ha);
                                for (const Fb of K.R)Fb();
                                e.restoreClipRect();
                                K.R = [];
                            }
                            for(e.flush(); J < C; ++J)N = G[J], K = N.yb, K.globalCompositeOperation = "copy", K.drawImage(e.F, N.pa, N.qa, N.da, N.ca, 0, 0, N.F.width, N.F.height);
                            J = C;
                        }
                    }
                }
            }
            fa && fa();
            const d = navigator.userAgent.match(/firefox|fxios/i);
            let e = null;
            const f = new Set(), g = m.makeRenderer;
            m.makeRenderer = function(l, r) {
                return r ? (e || (e = b(document.createElement("canvas")), r = e.zb, e.Cb = Math.min(r.getParameter(r.MAX_RENDERBUFFER_SIZE), r.getParameter(r.MAX_TEXTURE_SIZE))), new a(l)) : b(l);
            };
            const k = m.Artboard.prototype.draw;
            m.Artboard.prototype.draw = function(l) {
                l.R ? l.R.push(k.bind(this, l.Db)) : k.call(this, l);
            };
            const q = new da(), n = new da(), t = new ca();
            m.requestAnimationFrame = t.requestAnimationFrame.bind(t);
            m.cancelAnimationFrame = t.cancelAnimationFrame.bind(t);
            m.enableFPSCounter = t.Kb.bind(t);
            t.kb = c;
            m.resolveAnimationFrame = c;
            let v = m.load;
            m.load = function(l, r, x = !0) {
                const z = new m.FallbackFileAssetLoader();
                void 0 !== r && z.addLoader(r);
                x && (r = new m.CDNFileAssetLoader(), z.addLoader(r));
                return Promise.resolve(v(l, z));
            };
            const y = m.WebGLRenderer.prototype.clear;
            m.WebGLRenderer.prototype.clear = function() {
                la(this.Ab);
                const l = this.F;
                if (this.Va != l.width || this.Ua != l.height) this.resize(l.width, l.height), this.Va = l.width, this.Ua = l.height;
                y.call(this);
            };
            m.decodeImage = function(l, r) {
                l = m.decodeImageSkia(l);
                r(l);
            };
        };
        var ma = Object.assign({}, m), na = "./this.program", oa = "object" == typeof window, pa = "function" == typeof importScripts, qa = "", ra, sa;
        if (oa || pa) pa ? qa = self.location.href : "undefined" != typeof document && document.currentScript && (qa = document.currentScript.src), _scriptDir && (qa = _scriptDir), 0 !== qa.indexOf("blob:") ? qa = qa.substr(0, qa.replace(/[?#].*/, "").lastIndexOf("/") + 1) : qa = "", pa && (sa = (a)=>{
            var b = new XMLHttpRequest();
            b.open("GET", a, !1);
            b.responseType = "arraybuffer";
            b.send(null);
            return new Uint8Array(b.response);
        }), ra = (a, b, c)=>{
            var d = new XMLHttpRequest();
            d.open("GET", a, !0);
            d.responseType = "arraybuffer";
            d.onload = ()=>{
                200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
            };
            d.onerror = c;
            d.send(null);
        };
        var ta = m.print || console.log.bind(console), ua = m.printErr || console.error.bind(console);
        Object.assign(m, ma);
        ma = null;
        m.thisProgram && (na = m.thisProgram);
        var va;
        m.wasmBinary && (va = m.wasmBinary);
        var noExitRuntime = m.noExitRuntime || !0;
        "object" != typeof WebAssembly && wa("no native wasm support detected");
        var xa, p, ya = !1, u, w, A, za, B, D, E, Aa;
        function Ba() {
            var a = xa.buffer;
            m.HEAP8 = u = new Int8Array(a);
            m.HEAP16 = A = new Int16Array(a);
            m.HEAP32 = B = new Int32Array(a);
            m.HEAPU8 = w = new Uint8Array(a);
            m.HEAPU16 = za = new Uint16Array(a);
            m.HEAPU32 = D = new Uint32Array(a);
            m.HEAPF32 = E = new Float32Array(a);
            m.HEAPF64 = Aa = new Float64Array(a);
        }
        var Ca, Da = [], Ea = [], Fa = [];
        function Ga() {
            var a = m.preRun.shift();
            Da.unshift(a);
        }
        var Ha = 0, Ia = null, Ja = null;
        function wa(a) {
            if (m.onAbort) m.onAbort(a);
            a = "Aborted(" + a + ")";
            ua(a);
            ya = !0;
            a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
            ba(a);
            throw a;
        }
        function Ka(a) {
            return a.startsWith("data:application/octet-stream;base64,");
        }
        var La;
        La = "webgl_advanced.wasm";
        if (!Ka(La)) {
            var Ma = La;
            La = m.locateFile ? m.locateFile(Ma, qa) : qa + Ma;
        }
        function Na(a) {
            if (a == La && va) return new Uint8Array(va);
            if (sa) return sa(a);
            throw "both async and sync fetching of the wasm failed";
        }
        function Oa(a) {
            if (!va && (oa || pa)) {
                if ("function" == typeof fetch && !a.startsWith("file://")) return fetch(a, {
                    credentials: "same-origin"
                }).then((b)=>{
                    if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
                    return b.arrayBuffer();
                }).catch(()=>Na(a));
                if (ra) return new Promise((b, c)=>{
                    ra(a, (d)=>b(new Uint8Array(d)), c);
                });
            }
            return Promise.resolve().then(()=>Na(a));
        }
        function Pa(a, b, c) {
            return Oa(a).then((d)=>WebAssembly.instantiate(d, b)).then((d)=>d).then(c, (d)=>{
                ua("failed to asynchronously prepare wasm: " + d);
                wa(d);
            });
        }
        function Qa(a, b) {
            var c = La;
            return va || "function" != typeof WebAssembly.instantiateStreaming || Ka(c) || c.startsWith("file://") || "function" != typeof fetch ? Pa(c, a, b) : fetch(c, {
                credentials: "same-origin"
            }).then((d)=>WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
                    ua("wasm streaming compile failed: " + e);
                    ua("falling back to ArrayBuffer instantiation");
                    return Pa(c, a, b);
                }));
        }
        var Ra, Sa, Wa = {
            692684: (a, b, c, d, e)=>{
                if ("undefined" === typeof window || void 0 === (window.AudioContext || window.webkitAudioContext)) return 0;
                if ("undefined" === typeof window.h) {
                    window.h = {
                        Ea: 0
                    };
                    window.h.H = {};
                    window.h.H.Ca = a;
                    window.h.H.capture = b;
                    window.h.H.La = c;
                    window.h.ha = {};
                    window.h.ha.stopped = d;
                    window.h.ha.sb = e;
                    let f = window.h;
                    f.C = [];
                    f.nc = function(g) {
                        for(var k = 0; k < f.C.length; ++k){
                            if (null == f.C[k]) return f.C[k] = g, k;
                        }
                        f.C.push(g);
                        return f.C.length - 1;
                    };
                    f.xb = function(g) {
                        for(f.C[g] = null; 0 < f.C.length;){
                            if (null == f.C[f.C.length - 1]) f.C.pop();
                            else break;
                        }
                    };
                    f.Kc = function(g) {
                        for(var k = 0; k < f.C.length; ++k){
                            if (f.C[k] == g) return f.xb(k);
                        }
                    };
                    f.ta = function(g) {
                        return f.C[g];
                    };
                    f.wb = [
                        "touchend",
                        "click"
                    ];
                    f.unlock = function() {
                        for(var g = 0; g < f.C.length; ++g){
                            var k = f.C[g];
                            null != k && null != k.I && k.state === f.ha.sb && k.I.resume().then(()=>{
                                Ta(k.lb);
                            }, (q)=>{
                                console.error("Failed to resume audiocontext", q);
                            });
                        }
                        f.wb.map(function(q) {
                            document.removeEventListener(q, f.unlock, !0);
                        });
                    };
                    f.wb.map(function(g) {
                        document.addEventListener(g, f.unlock, !0);
                    });
                }
                window.h.Ea += 1;
                return 1;
            },
            694862: ()=>{
                "undefined" !== typeof window.h && (--window.h.Ea, 0 === window.h.Ea && delete window.h);
            },
            695026: ()=>void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia,
            695130: ()=>{
                try {
                    var a = new (window.AudioContext || window.webkitAudioContext)(), b = a.sampleRate;
                    a.close();
                    return b;
                } catch (c) {
                    return 0;
                }
            },
            695301: (a, b, c, d, e, f)=>{
                if ("undefined" === typeof window.h) return -1;
                var g = {}, k = {};
                a == window.h.H.Ca && 0 != c && (k.sampleRate = c);
                g.I = new (window.AudioContext || window.webkitAudioContext)(k);
                g.I.suspend();
                g.state = window.h.ha.stopped;
                c = 0;
                a != window.h.H.Ca && (c = b);
                g.X = g.I.createScriptProcessor(d, c, b);
                g.X.onaudioprocess = function(q) {
                    if (null == g.ua || 0 == g.ua.length) g.ua = new Float32Array(E.buffer, e, d * b);
                    if (a == window.h.H.capture || a == window.h.H.La) {
                        for(var n = 0; n < b; n += 1)for(var t = q.inputBuffer.getChannelData(n), v = g.ua, y = 0; y < d; y += 1)v[y * b + n] = t[y];
                        Ua(f, d, e);
                    }
                    if (a == window.h.H.Ca || a == window.h.H.La) {
                        for(Va(f, d, e), n = 0; n < q.outputBuffer.numberOfChannels; ++n)for(t = q.outputBuffer.getChannelData(n), v = g.ua, y = 0; y < d; y += 1)t[y] = v[y * b + n];
                    } else for(n = 0; n < q.outputBuffer.numberOfChannels; ++n)q.outputBuffer.getChannelData(n).fill(0.0);
                };
                a != window.h.H.capture && a != window.h.H.La || navigator.mediaDevices.getUserMedia({
                    audio: !0,
                    video: !1
                }).then(function(q) {
                    g.Fa = g.I.createMediaStreamSource(q);
                    g.Fa.connect(g.X);
                    g.X.connect(g.I.destination);
                }).catch(function(q) {
                    console.log("Failed to get user media: " + q);
                });
                a == window.h.H.Ca && g.X.connect(g.I.destination);
                g.lb = f;
                return window.h.nc(g);
            },
            698178: (a)=>window.h.ta(a).I.sampleRate,
            698251: (a)=>{
                a = window.h.ta(a);
                void 0 !== a.X && (a.X.onaudioprocess = function() {}, a.X.disconnect(), a.X = void 0);
                void 0 !== a.Fa && (a.Fa.disconnect(), a.Fa = void 0);
                a.I.close();
                a.I = void 0;
                a.lb = void 0;
            },
            698651: (a)=>{
                window.h.xb(a);
            },
            698701: (a)=>{
                a = window.h.ta(a);
                a.I.resume();
                a.state = window.h.ha.sb;
            },
            698840: (a)=>{
                a = window.h.ta(a);
                a.I.suspend();
                a.state = window.h.ha.stopped;
            }
        }, Xa = (a)=>{
            for(; 0 < a.length;)a.shift()(m);
        }, Ya = (a, b)=>{
            for(var c = 0, d = a.length - 1; 0 <= d; d--){
                var e = a[d];
                "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
            }
            if (b) for(; c; c--)a.unshift("..");
            return a;
        }, Za = (a)=>{
            var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
            (a = Ya(a.split("/").filter((d)=>!!d), !b).join("/")) || b || (a = ".");
            a && c && (a += "/");
            return (b ? "/" : "") + a;
        }, $a = (a)=>{
            var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
            a = b[0];
            b = b[1];
            if (!a && !b) return ".";
            b && (b = b.substr(0, b.length - 1));
            return a + b;
        }, ab = (a)=>{
            if ("/" === a) return "/";
            a = Za(a);
            a = a.replace(/\/$/, "");
            var b = a.lastIndexOf("/");
            return -1 === b ? a : a.substr(b + 1);
        }, bb = ()=>{
            if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return (a)=>crypto.getRandomValues(a);
            wa("initRandomDevice");
        }, cb = (a)=>(cb = bb())(a);
        function db() {
            for(var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--){
                b = 0 <= c ? arguments[c] : "/";
                if ("string" != typeof b) throw new TypeError("Arguments to path.resolve must be strings");
                if (!b) return "";
                a = b + "/" + a;
                b = "/" === b.charAt(0);
            }
            a = Ya(a.split("/").filter((d)=>!!d), !b).join("/");
            return (b ? "/" : "") + a || ".";
        }
        var eb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, F = (a, b, c)=>{
            var d = b + c;
            for(c = b; a[c] && !(c >= d);)++c;
            if (16 < c - b && a.buffer && eb) return eb.decode(a.subarray(b, c));
            for(d = ""; b < c;){
                var e = a[b++];
                if (e & 128) {
                    var f = a[b++] & 63;
                    if (192 == (e & 224)) d += String.fromCharCode((e & 31) << 6 | f);
                    else {
                        var g = a[b++] & 63;
                        e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                        65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
                    }
                } else d += String.fromCharCode(e);
            }
            return d;
        }, fb = [], gb = (a)=>{
            for(var b = 0, c = 0; c < a.length; ++c){
                var d = a.charCodeAt(c);
                127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
            }
            return b;
        }, hb = (a, b, c, d)=>{
            if (!(0 < d)) return 0;
            var e = c;
            d = c + d - 1;
            for(var f = 0; f < a.length; ++f){
                var g = a.charCodeAt(f);
                if (55296 <= g && 57343 >= g) {
                    var k = a.charCodeAt(++f);
                    g = 65536 + ((g & 1023) << 10) | k & 1023;
                }
                if (127 >= g) {
                    if (c >= d) break;
                    b[c++] = g;
                } else {
                    if (2047 >= g) {
                        if (c + 1 >= d) break;
                        b[c++] = 192 | g >> 6;
                    } else {
                        if (65535 >= g) {
                            if (c + 2 >= d) break;
                            b[c++] = 224 | g >> 12;
                        } else {
                            if (c + 3 >= d) break;
                            b[c++] = 240 | g >> 18;
                            b[c++] = 128 | g >> 12 & 63;
                        }
                        b[c++] = 128 | g >> 6 & 63;
                    }
                    b[c++] = 128 | g & 63;
                }
            }
            b[c] = 0;
            return c - e;
        };
        function ib(a, b) {
            var c = Array(gb(a) + 1);
            a = hb(a, c, 0, c.length);
            b && (c.length = a);
            return c;
        }
        var jb = [];
        function kb(a, b) {
            jb[a] = {
                input: [],
                D: [],
                T: b
            };
            lb(a, mb);
        }
        var mb = {
            open: function(a) {
                var b = jb[a.node.Da];
                if (!b) throw new H(43);
                a.s = b;
                a.seekable = !1;
            },
            close: function(a) {
                a.s.T.sa(a.s);
            },
            sa: function(a) {
                a.s.T.sa(a.s);
            },
            read: function(a, b, c, d) {
                if (!a.s || !a.s.T.eb) throw new H(60);
                for(var e = 0, f = 0; f < d; f++){
                    try {
                        var g = a.s.T.eb(a.s);
                    } catch (k) {
                        throw new H(29);
                    }
                    if (void 0 === g && 0 === e) throw new H(6);
                    if (null === g || void 0 === g) break;
                    e++;
                    b[c + f] = g;
                }
                e && (a.node.timestamp = Date.now());
                return e;
            },
            write: function(a, b, c, d) {
                if (!a.s || !a.s.T.Oa) throw new H(60);
                try {
                    for(var e = 0; e < d; e++)a.s.T.Oa(a.s, b[c + e]);
                } catch (f) {
                    throw new H(29);
                }
                d && (a.node.timestamp = Date.now());
                return e;
            }
        }, nb = {
            eb: function() {
                a: {
                    if (!fb.length) {
                        var a = null;
                        "undefined" != typeof window && "function" == typeof window.prompt ? (a = window.prompt("Input: "), null !== a && (a += "\n")) : "function" == typeof readline && (a = readline(), null !== a && (a += "\n"));
                        if (!a) {
                            a = null;
                            break a;
                        }
                        fb = ib(a, !0);
                    }
                    a = fb.shift();
                }
                return a;
            },
            Oa: function(a, b) {
                null === b || 10 === b ? (ta(F(a.D, 0)), a.D = []) : 0 != b && a.D.push(b);
            },
            sa: function(a) {
                a.D && 0 < a.D.length && (ta(F(a.D, 0)), a.D = []);
            },
            Wb: function() {
                return {
                    uc: 25856,
                    wc: 5,
                    tc: 191,
                    vc: 35387,
                    sc: [
                        3,
                        28,
                        127,
                        21,
                        4,
                        0,
                        1,
                        0,
                        17,
                        19,
                        26,
                        0,
                        18,
                        15,
                        23,
                        22,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                };
            },
            Xb: function() {
                return 0;
            },
            Yb: function() {
                return [
                    24,
                    80
                ];
            }
        }, ob = {
            Oa: function(a, b) {
                null === b || 10 === b ? (ua(F(a.D, 0)), a.D = []) : 0 != b && a.D.push(b);
            },
            sa: function(a) {
                a.D && 0 < a.D.length && (ua(F(a.D, 0)), a.D = []);
            }
        };
        function pb(a, b) {
            var c = a.j ? a.j.length : 0;
            c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.j, a.j = new Uint8Array(b), 0 < a.v && a.j.set(c.subarray(0, a.v), 0));
        }
        var I = {
            N: null,
            S () {
                return I.createNode(null, "/", 16895, 0);
            },
            createNode (a, b, c, d) {
                if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new H(63);
                I.N || (I.N = {
                    dir: {
                        node: {
                            W: I.l.W,
                            O: I.l.O,
                            ka: I.l.ka,
                            Aa: I.l.Aa,
                            qb: I.l.qb,
                            vb: I.l.vb,
                            rb: I.l.rb,
                            ob: I.l.ob,
                            Ga: I.l.Ga
                        },
                        stream: {
                            $: I.m.$
                        }
                    },
                    file: {
                        node: {
                            W: I.l.W,
                            O: I.l.O
                        },
                        stream: {
                            $: I.m.$,
                            read: I.m.read,
                            write: I.m.write,
                            ra: I.m.ra,
                            hb: I.m.hb,
                            jb: I.m.jb
                        }
                    },
                    link: {
                        node: {
                            W: I.l.W,
                            O: I.l.O,
                            la: I.l.la
                        },
                        stream: {}
                    },
                    Wa: {
                        node: {
                            W: I.l.W,
                            O: I.l.O
                        },
                        stream: qb
                    }
                });
                c = rb(a, b, c, d);
                16384 === (c.mode & 61440) ? (c.l = I.N.dir.node, c.m = I.N.dir.stream, c.j = {}) : 32768 === (c.mode & 61440) ? (c.l = I.N.file.node, c.m = I.N.file.stream, c.v = 0, c.j = null) : 40960 === (c.mode & 61440) ? (c.l = I.N.link.node, c.m = I.N.link.stream) : 8192 === (c.mode & 61440) && (c.l = I.N.Wa.node, c.m = I.N.Wa.stream);
                c.timestamp = Date.now();
                a && (a.j[b] = c, a.timestamp = c.timestamp);
                return c;
            },
            Ac (a) {
                return a.j ? a.j.subarray ? a.j.subarray(0, a.v) : new Uint8Array(a.j) : new Uint8Array(0);
            },
            l: {
                W (a) {
                    var b = {};
                    b.zc = 8192 === (a.mode & 61440) ? a.id : 1;
                    b.Cc = a.id;
                    b.mode = a.mode;
                    b.Gc = 1;
                    b.uid = 0;
                    b.Bc = 0;
                    b.Da = a.Da;
                    16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.v : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                    b.qc = new Date(a.timestamp);
                    b.Ec = new Date(a.timestamp);
                    b.xc = new Date(a.timestamp);
                    b.Eb = 4096;
                    b.rc = Math.ceil(b.size / b.Eb);
                    return b;
                },
                O (a, b) {
                    void 0 !== b.mode && (a.mode = b.mode);
                    void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                    if (void 0 !== b.size && (b = b.size, a.v != b)) {
                        if (0 == b) a.j = null, a.v = 0;
                        else {
                            var c = a.j;
                            a.j = new Uint8Array(b);
                            c && a.j.set(c.subarray(0, Math.min(b, a.v)));
                            a.v = b;
                        }
                    }
                },
                ka () {
                    throw sb[44];
                },
                Aa (a, b, c, d) {
                    return I.createNode(a, b, c, d);
                },
                qb (a, b, c) {
                    if (16384 === (a.mode & 61440)) {
                        try {
                            var d = tb(b, c);
                        } catch (f) {}
                        if (d) {
                            for(var e in d.j)throw new H(55);
                        }
                    }
                    delete a.parent.j[a.name];
                    a.parent.timestamp = Date.now();
                    a.name = c;
                    b.j[c] = a;
                    b.timestamp = a.parent.timestamp;
                    a.parent = b;
                },
                vb (a, b) {
                    delete a.j[b];
                    a.timestamp = Date.now();
                },
                rb (a, b) {
                    var c = tb(a, b), d;
                    for(d in c.j)throw new H(55);
                    delete a.j[b];
                    a.timestamp = Date.now();
                },
                ob (a) {
                    var b = [
                        ".",
                        ".."
                    ], c;
                    for(c in a.j)a.j.hasOwnProperty(c) && b.push(c);
                    return b;
                },
                Ga (a, b, c) {
                    a = I.createNode(a, b, 41471, 0);
                    a.link = c;
                    return a;
                },
                la (a) {
                    if (40960 !== (a.mode & 61440)) throw new H(28);
                    return a.link;
                }
            },
            m: {
                read (a, b, c, d, e) {
                    var f = a.node.j;
                    if (e >= a.node.v) return 0;
                    a = Math.min(a.node.v - e, d);
                    if (8 < a && f.subarray) b.set(f.subarray(e, e + a), c);
                    else for(d = 0; d < a; d++)b[c + d] = f[e + d];
                    return a;
                },
                write (a, b, c, d, e, f) {
                    b.buffer === u.buffer && (f = !1);
                    if (!d) return 0;
                    a = a.node;
                    a.timestamp = Date.now();
                    if (b.subarray && (!a.j || a.j.subarray)) {
                        if (f) return a.j = b.subarray(c, c + d), a.v = d;
                        if (0 === a.v && 0 === e) return a.j = b.slice(c, c + d), a.v = d;
                        if (e + d <= a.v) return a.j.set(b.subarray(c, c + d), e), d;
                    }
                    pb(a, e + d);
                    if (a.j.subarray && b.subarray) a.j.set(b.subarray(c, c + d), e);
                    else for(f = 0; f < d; f++)a.j[e + f] = b[c + f];
                    a.v = Math.max(a.v, e + d);
                    return d;
                },
                $ (a, b, c) {
                    1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.v);
                    if (0 > b) throw new H(28);
                    return b;
                },
                ra (a, b, c) {
                    pb(a.node, b + c);
                    a.node.v = Math.max(a.node.v, b + c);
                },
                hb (a, b, c, d, e) {
                    if (32768 !== (a.node.mode & 61440)) throw new H(43);
                    a = a.node.j;
                    if (e & 2 || a.buffer !== u.buffer) {
                        if (0 < c || c + b < a.length) a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                        c = !0;
                        b = 65536 * Math.ceil(b / 65536);
                        (e = ub(65536, b)) ? (w.fill(0, e, e + b), b = e) : b = 0;
                        if (!b) throw new H(48);
                        u.set(a, b);
                    } else c = !1, b = a.byteOffset;
                    return {
                        o: b,
                        L: c
                    };
                },
                jb (a, b, c, d) {
                    I.m.write(a, b, 0, d, c, !1);
                    return 0;
                }
            }
        };
        function vb(a, b) {
            var c = 0;
            a && (c |= 365);
            b && (c |= 146);
            return c;
        }
        var wb = null, xb = {}, yb = [], zb = 1, Ab = null, Bb = !0, H = null, sb = {}, Db = (a, b = {})=>{
            a = db(a);
            if (!a) return {
                path: "",
                node: null
            };
            b = Object.assign({
                bb: !0,
                Qa: 0
            }, b);
            if (8 < b.Qa) throw new H(32);
            a = a.split("/").filter((g)=>!!g);
            for(var c = wb, d = "/", e = 0; e < a.length; e++){
                var f = e === a.length - 1;
                if (f && b.parent) break;
                c = tb(c, a[e]);
                d = Za(d + "/" + a[e]);
                c.Ba && (!f || f && b.bb) && (c = c.Ba.root);
                if (!f || b.ab) for(f = 0; 40960 === (c.mode & 61440);){
                    if (c = Cb(d), d = db($a(d), c), c = Db(d, {
                        Qa: b.Qa + 1
                    }).node, 40 < f++) throw new H(32);
                }
            }
            return {
                path: d,
                node: c
            };
        }, Eb = (a)=>{
            for(var b;;){
                if (a === a.parent) return a = a.S.ib, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
                b = b ? `${a.name}/${b}` : a.name;
                a = a.parent;
            }
        }, Gb = (a, b)=>{
            for(var c = 0, d = 0; d < b.length; d++)c = (c << 5) - c + b.charCodeAt(d) | 0;
            return (a + c >>> 0) % Ab.length;
        }, tb = (a, b)=>{
            var c;
            if (c = (c = Hb(a, "x")) ? c : a.l.ka ? 0 : 2) throw new H(c, a);
            for(c = Ab[Gb(a.id, b)]; c; c = c.ac){
                var d = c.name;
                if (c.parent.id === a.id && d === b) return c;
            }
            return a.l.ka(a, b);
        }, rb = (a, b, c, d)=>{
            a = new Ib(a, b, c, d);
            b = Gb(a.parent.id, a.name);
            a.ac = Ab[b];
            return Ab[b] = a;
        }, Jb = (a)=>{
            var b = [
                "r",
                "w",
                "rw"
            ][a & 3];
            a & 512 && (b += "w");
            return b;
        }, Hb = (a, b)=>{
            if (Bb) return 0;
            if (!b.includes("r") || a.mode & 292) {
                if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) return 2;
            } else return 2;
            return 0;
        }, Kb = (a, b)=>{
            try {
                return tb(a, b), 20;
            } catch (c) {}
            return Hb(a, "wx");
        }, Lb = ()=>{
            for(var a = 0; 4096 >= a; a++){
                if (!yb[a]) return a;
            }
            throw new H(33);
        }, Mb = (a)=>{
            a = yb[a];
            if (!a) throw new H(8);
            return a;
        }, Ob = (a, b = -1)=>{
            Nb || (Nb = function() {
                this.h = {};
            }, Nb.prototype = {}, Object.defineProperties(Nb.prototype, {
                object: {
                    get () {
                        return this.node;
                    },
                    set (c) {
                        this.node = c;
                    }
                },
                flags: {
                    get () {
                        return this.h.flags;
                    },
                    set (c) {
                        this.h.flags = c;
                    }
                },
                position: {
                    get () {
                        return this.h.position;
                    },
                    set (c) {
                        this.h.position = c;
                    }
                }
            }));
            a = Object.assign(new Nb(), a);
            -1 == b && (b = Lb());
            a.V = b;
            return yb[b] = a;
        }, qb = {
            open: (a)=>{
                a.m = xb[a.node.Da].m;
                a.m.open && a.m.open(a);
            },
            $: ()=>{
                throw new H(70);
            }
        }, lb = (a, b)=>{
            xb[a] = {
                m: b
            };
        }, Pb = (a, b)=>{
            var c = "/" === b, d = !b;
            if (c && wb) throw new H(10);
            if (!c && !d) {
                var e = Db(b, {
                    bb: !1
                });
                b = e.path;
                e = e.node;
                if (e.Ba) throw new H(10);
                if (16384 !== (e.mode & 61440)) throw new H(54);
            }
            b = {
                type: a,
                Ic: {},
                ib: b,
                $b: []
            };
            a = a.S(b);
            a.S = b;
            b.root = a;
            c ? wb = a : e && (e.Ba = b, e.S && e.S.$b.push(b));
        }, Qb = (a, b, c)=>{
            var d = Db(a, {
                parent: !0
            }).node;
            a = ab(a);
            if (!a || "." === a || ".." === a) throw new H(28);
            var e = Kb(d, a);
            if (e) throw new H(e);
            if (!d.l.Aa) throw new H(63);
            return d.l.Aa(d, a, b, c);
        }, Rb = (a, b, c)=>{
            "undefined" == typeof c && (c = b, b = 438);
            Qb(a, b | 8192, c);
        }, Sb = (a, b)=>{
            if (!db(a)) throw new H(44);
            var c = Db(b, {
                parent: !0
            }).node;
            if (!c) throw new H(44);
            b = ab(b);
            var d = Kb(c, b);
            if (d) throw new H(d);
            if (!c.l.Ga) throw new H(63);
            c.l.Ga(c, b, a);
        }, Cb = (a)=>{
            a = Db(a).node;
            if (!a) throw new H(44);
            if (!a.l.la) throw new H(28);
            return db(Eb(a.parent), a.l.la(a));
        }, Ub = (a, b, c)=>{
            if ("" === a) throw new H(44);
            if ("string" == typeof b) {
                var d = {
                    r: 0,
                    "r+": 2,
                    w: 577,
                    "w+": 578,
                    a: 1089,
                    "a+": 1090
                }[b];
                if ("undefined" == typeof d) throw Error(`Unknown file open mode: ${b}`);
                b = d;
            }
            c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
            if ("object" == typeof a) var e = a;
            else {
                a = Za(a);
                try {
                    e = Db(a, {
                        ab: !(b & 131072)
                    }).node;
                } catch (f) {}
            }
            d = !1;
            if (b & 64) {
                if (e) {
                    if (b & 128) throw new H(20);
                } else e = Qb(a, c, 0), d = !0;
            }
            if (!e) throw new H(44);
            8192 === (e.mode & 61440) && (b &= -513);
            if (b & 65536 && 16384 !== (e.mode & 61440)) throw new H(54);
            if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Jb(b) || b & 512) ? 31 : Hb(e, Jb(b)) : 44)) throw new H(c);
            if (b & 512 && !d) {
                c = e;
                c = "string" == typeof c ? Db(c, {
                    ab: !0
                }).node : c;
                if (!c.l.O) throw new H(63);
                if (16384 === (c.mode & 61440)) throw new H(31);
                if (32768 !== (c.mode & 61440)) throw new H(28);
                if (d = Hb(c, "w")) throw new H(d);
                c.l.O(c, {
                    size: 0,
                    timestamp: Date.now()
                });
            }
            b &= -131713;
            e = Ob({
                node: e,
                path: Eb(e),
                flags: b,
                seekable: !0,
                position: 0,
                m: e.m,
                oc: [],
                error: !1
            });
            e.m.open && e.m.open(e);
            !m.logReadFiles || b & 1 || (Tb || (Tb = {}), a in Tb || (Tb[a] = 1));
            return e;
        }, Vb = (a, b, c)=>{
            if (null === a.V) throw new H(8);
            if (!a.seekable || !a.m.$) throw new H(70);
            if (0 != c && 1 != c && 2 != c) throw new H(28);
            a.position = a.m.$(a, b, c);
            a.oc = [];
        }, Wb = ()=>{
            H || (H = function(a, b) {
                this.name = "ErrnoError";
                this.node = b;
                this.dc = function(c) {
                    this.Z = c;
                };
                this.dc(a);
                this.message = "FS error";
            }, H.prototype = Error(), H.prototype.constructor = H, [
                44
            ].forEach((a)=>{
                sb[a] = new H(a);
                sb[a].stack = "<generic error, no stack>";
            }));
        }, Xb, Zb = (a, b, c)=>{
            a = Za("/dev/" + a);
            var d = vb(!!b, !!c);
            Yb || (Yb = 64);
            var e = Yb++ << 8 | 0;
            lb(e, {
                open: (f)=>{
                    f.seekable = !1;
                },
                close: ()=>{
                    c && c.buffer && c.buffer.length && c(10);
                },
                read: (f, g, k, q)=>{
                    for(var n = 0, t = 0; t < q; t++){
                        try {
                            var v = b();
                        } catch (y) {
                            throw new H(29);
                        }
                        if (void 0 === v && 0 === n) throw new H(6);
                        if (null === v || void 0 === v) break;
                        n++;
                        g[k + t] = v;
                    }
                    n && (f.node.timestamp = Date.now());
                    return n;
                },
                write: (f, g, k, q)=>{
                    for(var n = 0; n < q; n++)try {
                        c(g[k + n]);
                    } catch (t) {
                        throw new H(29);
                    }
                    q && (f.node.timestamp = Date.now());
                    return n;
                }
            });
            Rb(a, d, e);
        }, Yb, $b = {}, Nb, Tb, ac = void 0;
        function bc() {
            ac += 4;
            return B[ac - 4 >> 2];
        }
        function cc(a) {
            if (void 0 === a) return "_unknown";
            a = a.replace(/[^a-zA-Z0-9_]/g, "$");
            var b = a.charCodeAt(0);
            return 48 <= b && 57 >= b ? `_${a}` : a;
        }
        function dc(a, b) {
            a = cc(a);
            return ({
                [a]: function() {
                    return b.apply(this, arguments);
                }
            })[a];
        }
        function ec() {
            this.L = [
                void 0
            ];
            this.cb = [];
        }
        var L = new ec(), fc = void 0;
        function M(a) {
            throw new fc(a);
        }
        var gc = (a)=>{
            a || M("Cannot use deleted val. handle = " + a);
            return L.get(a).value;
        }, hc = (a)=>{
            switch(a){
                case void 0:
                    return 1;
                case null:
                    return 2;
                case !0:
                    return 3;
                case !1:
                    return 4;
                default:
                    return L.ra({
                        pb: 1,
                        value: a
                    });
            }
        };
        function ic(a) {
            var b = Error, c = dc(a, function(d) {
                this.name = a;
                this.message = d;
                d = Error(d).stack;
                void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
            });
            c.prototype = Object.create(b.prototype);
            c.prototype.constructor = c;
            c.prototype.toString = function() {
                return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
            };
            return c;
        }
        var jc = void 0, kc = void 0;
        function O(a) {
            for(var b = ""; w[a];)b += kc[w[a++]];
            return b;
        }
        var lc = [];
        function mc() {
            for(; lc.length;){
                var a = lc.pop();
                a.g.ga = !1;
                a["delete"]();
            }
        }
        var nc = void 0, oc = {};
        function pc(a, b) {
            for(void 0 === b && M("ptr should not be undefined"); a.A;)b = a.na(b), a = a.A;
            return b;
        }
        var qc = {};
        function rc(a) {
            a = sc(a);
            var b = O(a);
            tc(a);
            return b;
        }
        function uc(a, b) {
            var c = qc[a];
            void 0 === c && M(b + " has unknown type " + rc(a));
            return c;
        }
        function vc() {}
        var wc = !1;
        function xc(a) {
            --a.count.value;
            0 === a.count.value && (a.G ? a.K.U(a.G) : a.u.i.U(a.o));
        }
        function yc(a, b, c) {
            if (b === c) return a;
            if (void 0 === c.A) return null;
            a = yc(a, b, c.A);
            return null === a ? null : c.Ib(a);
        }
        var zc = {};
        function Ac(a, b) {
            b = pc(a, b);
            return oc[b];
        }
        var Bc = void 0;
        function Cc(a) {
            throw new Bc(a);
        }
        function Dc(a, b) {
            b.u && b.o || Cc("makeClassHandle requires ptr and ptrType");
            !!b.K !== !!b.G && Cc("Both smartPtrType and smartPtr must be specified");
            b.count = {
                value: 1
            };
            return Ec(Object.create(a, {
                g: {
                    value: b
                }
            }));
        }
        function Ec(a) {
            if ("undefined" === typeof FinalizationRegistry) return Ec = (b)=>b, a;
            wc = new FinalizationRegistry((b)=>{
                xc(b.g);
            });
            Ec = (b)=>{
                var c = b.g;
                c.G && wc.register(b, {
                    g: c
                }, b);
                return b;
            };
            vc = (b)=>{
                wc.unregister(b);
            };
            return Ec(a);
        }
        var Fc = {};
        function Gc(a) {
            for(; a.length;){
                var b = a.pop();
                a.pop()(b);
            }
        }
        function Hc(a) {
            return this.fromWireType(B[a >> 2]);
        }
        var Ic = {}, Jc = {};
        function P(a, b, c) {
            function d(k) {
                k = c(k);
                k.length !== a.length && Cc("Mismatched type converter count");
                for(var q = 0; q < a.length; ++q)Kc(a[q], k[q]);
            }
            a.forEach(function(k) {
                Jc[k] = b;
            });
            var e = Array(b.length), f = [], g = 0;
            b.forEach((k, q)=>{
                qc.hasOwnProperty(k) ? e[q] = qc[k] : (f.push(k), Ic.hasOwnProperty(k) || (Ic[k] = []), Ic[k].push(()=>{
                    e[q] = qc[k];
                    ++g;
                    g === f.length && d(e);
                }));
            });
            0 === f.length && d(e);
        }
        function Lc(a) {
            switch(a){
                case 1:
                    return 0;
                case 2:
                    return 1;
                case 4:
                    return 2;
                case 8:
                    return 3;
                default:
                    throw new TypeError(`Unknown type size: ${a}`);
            }
        }
        function Mc(a, b, c = {}) {
            var d = b.name;
            a || M(`type "${d}" must have a positive integer typeid pointer`);
            if (qc.hasOwnProperty(a)) {
                if (c.Tb) return;
                M(`Cannot register type '${d}' twice`);
            }
            qc[a] = b;
            delete Jc[a];
            Ic.hasOwnProperty(a) && (b = Ic[a], delete Ic[a], b.forEach((e)=>e()));
        }
        function Kc(a, b, c = {}) {
            if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            Mc(a, b, c);
        }
        function Nc(a) {
            M(a.g.u.i.name + " instance already deleted");
        }
        function Oc() {}
        function Pc(a, b, c) {
            if (void 0 === a[b].B) {
                var d = a[b];
                a[b] = function() {
                    a[b].B.hasOwnProperty(arguments.length) || M(`Function '${c}' called with an invalid number of arguments (${arguments.length}) - expects one of (${a[b].B})!`);
                    return a[b].B[arguments.length].apply(this, arguments);
                };
                a[b].B = [];
                a[b].B[d.ea] = d;
            }
        }
        function Qc(a, b, c) {
            m.hasOwnProperty(a) ? ((void 0 === c || void 0 !== m[a].B && void 0 !== m[a].B[c]) && M(`Cannot register public name '${a}' twice`), Pc(m, a, a), m.hasOwnProperty(c) && M(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`), m[a].B[c] = b) : (m[a] = b, void 0 !== c && (m[a].Hc = c));
        }
        function Rc(a, b, c, d, e, f, g, k) {
            this.name = a;
            this.constructor = b;
            this.M = c;
            this.U = d;
            this.A = e;
            this.Nb = f;
            this.na = g;
            this.Ib = k;
            this.mb = [];
        }
        function Sc(a, b, c) {
            for(; b !== c;)b.na || M(`Expected null or instance of ${c.name}, got an instance of ${b.name}`), a = b.na(a), b = b.A;
            return a;
        }
        function Tc(a, b) {
            if (null === b) return this.Na && M(`null is not a valid ${this.name}`), 0;
            b.g || M(`Cannot pass "${Uc(b)}" as a ${this.name}`);
            b.g.o || M(`Cannot pass deleted object as a pointer of type ${this.name}`);
            return Sc(b.g.o, b.g.u.i, this.i);
        }
        function Vc(a, b) {
            if (null === b) {
                this.Na && M(`null is not a valid ${this.name}`);
                if (this.wa) {
                    var c = this.Pa();
                    null !== a && a.push(this.U, c);
                    return c;
                }
                return 0;
            }
            b.g || M(`Cannot pass "${Uc(b)}" as a ${this.name}`);
            b.g.o || M(`Cannot pass deleted object as a pointer of type ${this.name}`);
            !this.va && b.g.u.va && M(`Cannot convert argument of type ${b.g.K ? b.g.K.name : b.g.u.name} to parameter type ${this.name}`);
            c = Sc(b.g.o, b.g.u.i, this.i);
            if (this.wa) switch(void 0 === b.g.G && M("Passing raw pointer to smart pointer is illegal"), this.ic){
                case 0:
                    b.g.K === this ? c = b.g.G : M(`Cannot convert argument of type ${b.g.K ? b.g.K.name : b.g.u.name} to parameter type ${this.name}`);
                    break;
                case 1:
                    c = b.g.G;
                    break;
                case 2:
                    if (b.g.K === this) c = b.g.G;
                    else {
                        var d = b.clone();
                        c = this.cc(c, hc(function() {
                            d["delete"]();
                        }));
                        null !== a && a.push(this.U, c);
                    }
                    break;
                default:
                    M("Unsupporting sharing policy");
            }
            return c;
        }
        function Wc(a, b) {
            if (null === b) return this.Na && M(`null is not a valid ${this.name}`), 0;
            b.g || M(`Cannot pass "${Uc(b)}" as a ${this.name}`);
            b.g.o || M(`Cannot pass deleted object as a pointer of type ${this.name}`);
            b.g.u.va && M(`Cannot convert argument of type ${b.g.u.name} to parameter type ${this.name}`);
            return Sc(b.g.o, b.g.u.i, this.i);
        }
        function Xc(a, b, c, d) {
            this.name = a;
            this.i = b;
            this.Na = c;
            this.va = d;
            this.wa = !1;
            this.U = this.cc = this.Pa = this.nb = this.ic = this.bc = void 0;
            void 0 !== b.A ? this.toWireType = Vc : (this.toWireType = d ? Tc : Wc, this.J = null);
        }
        function Yc(a, b, c) {
            m.hasOwnProperty(a) || Cc("Replacing nonexistant public symbol");
            void 0 !== m[a].B && void 0 !== c ? m[a].B[c] = b : (m[a] = b, m[a].ea = c);
        }
        var Zc = [], Q = (a)=>{
            var b = Zc[a];
            b || (a >= Zc.length && (Zc.length = a + 1), Zc[a] = b = Ca.get(a));
            return b;
        }, $c = (a, b)=>{
            var c = [];
            return function() {
                c.length = 0;
                Object.assign(c, arguments);
                if (a.includes("j")) {
                    var d = m["dynCall_" + a];
                    d = c && c.length ? d.apply(null, [
                        b
                    ].concat(c)) : d.call(null, b);
                } else d = Q(b).apply(null, c);
                return d;
            };
        };
        function R(a, b) {
            a = O(a);
            var c = a.includes("j") ? $c(a, b) : Q(b);
            "function" != typeof c && M(`unknown function pointer with signature ${a}: ${b}`);
            return c;
        }
        var ad = void 0;
        function bd(a, b) {
            function c(f) {
                e[f] || qc[f] || (Jc[f] ? Jc[f].forEach(c) : (d.push(f), e[f] = !0));
            }
            var d = [], e = {};
            b.forEach(c);
            throw new ad(`${a}: ` + d.map(rc).join([
                ", "
            ]));
        }
        function cd(a, b, c, d, e) {
            var f = b.length;
            2 > f && M("argTypes array size mismatch! Must at least get return value and 'this' types!");
            var g = null !== b[1] && null !== c, k = !1;
            for(c = 1; c < b.length; ++c)if (null !== b[c] && void 0 === b[c].J) {
                k = !0;
                break;
            }
            var q = "void" !== b[0].name, n = f - 2, t = Array(n), v = [], y = [];
            return function() {
                arguments.length !== n && M(`function ${a} called with ${arguments.length} arguments, expected ${n} args!`);
                y.length = 0;
                v.length = g ? 2 : 1;
                v[0] = e;
                if (g) {
                    var l = b[1].toWireType(y, this);
                    v[1] = l;
                }
                for(var r = 0; r < n; ++r)t[r] = b[r + 2].toWireType(y, arguments[r]), v.push(t[r]);
                r = d.apply(null, v);
                if (k) Gc(y);
                else for(var x = g ? 1 : 2; x < b.length; x++){
                    var z = 1 === x ? l : t[x - 2];
                    null !== b[x].J && b[x].J(z);
                }
                l = q ? b[0].fromWireType(r) : void 0;
                return l;
            };
        }
        function dd(a, b) {
            for(var c = [], d = 0; d < a; d++)c.push(D[b + 4 * d >> 2]);
            return c;
        }
        function ed(a, b, c) {
            a instanceof Object || M(`${c} with invalid "this": ${a}`);
            a instanceof b.i.constructor || M(`${c} incompatible with "this" of type ${a.constructor.name}`);
            a.g.o || M(`cannot call emscripten binding method ${c} on deleted object`);
            return Sc(a.g.o, a.g.u.i, b.i);
        }
        function fd(a) {
            a >= L.h && 0 === --L.get(a).pb && L.Sb(a);
        }
        function gd(a, b, c) {
            switch(b){
                case 0:
                    return function(d) {
                        return this.fromWireType((c ? u : w)[d]);
                    };
                case 1:
                    return function(d) {
                        return this.fromWireType((c ? A : za)[d >> 1]);
                    };
                case 2:
                    return function(d) {
                        return this.fromWireType((c ? B : D)[d >> 2]);
                    };
                default:
                    throw new TypeError("Unknown integer type: " + a);
            }
        }
        function Uc(a) {
            if (null === a) return "null";
            var b = typeof a;
            return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
        }
        function hd(a, b) {
            switch(b){
                case 2:
                    return function(c) {
                        return this.fromWireType(E[c >> 2]);
                    };
                case 3:
                    return function(c) {
                        return this.fromWireType(Aa[c >> 3]);
                    };
                default:
                    throw new TypeError("Unknown float type: " + a);
            }
        }
        function jd(a, b, c) {
            switch(b){
                case 0:
                    return c ? function(d) {
                        return u[d];
                    } : function(d) {
                        return w[d];
                    };
                case 1:
                    return c ? function(d) {
                        return A[d >> 1];
                    } : function(d) {
                        return za[d >> 1];
                    };
                case 2:
                    return c ? function(d) {
                        return B[d >> 2];
                    } : function(d) {
                        return D[d >> 2];
                    };
                default:
                    throw new TypeError("Unknown integer type: " + a);
            }
        }
        var kd = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, ld = (a, b)=>{
            var c = a >> 1;
            for(var d = c + b / 2; !(c >= d) && za[c];)++c;
            c <<= 1;
            if (32 < c - a && kd) return kd.decode(w.subarray(a, c));
            c = "";
            for(d = 0; !(d >= b / 2); ++d){
                var e = A[a + 2 * d >> 1];
                if (0 == e) break;
                c += String.fromCharCode(e);
            }
            return c;
        }, md = (a, b, c)=>{
            void 0 === c && (c = 2147483647);
            if (2 > c) return 0;
            c -= 2;
            var d = b;
            c = c < 2 * a.length ? c / 2 : a.length;
            for(var e = 0; e < c; ++e)A[b >> 1] = a.charCodeAt(e), b += 2;
            A[b >> 1] = 0;
            return b - d;
        }, nd = (a)=>2 * a.length, od = (a, b)=>{
            for(var c = 0, d = ""; !(c >= b / 4);){
                var e = B[a + 4 * c >> 2];
                if (0 == e) break;
                ++c;
                65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : d += String.fromCharCode(e);
            }
            return d;
        }, pd = (a, b, c)=>{
            void 0 === c && (c = 2147483647);
            if (4 > c) return 0;
            var d = b;
            c = d + c - 4;
            for(var e = 0; e < a.length; ++e){
                var f = a.charCodeAt(e);
                if (55296 <= f && 57343 >= f) {
                    var g = a.charCodeAt(++e);
                    f = 65536 + ((f & 1023) << 10) | g & 1023;
                }
                B[b >> 2] = f;
                b += 4;
                if (b + 4 > c) break;
            }
            B[b >> 2] = 0;
            return b - d;
        }, qd = (a)=>{
            for(var b = 0, c = 0; c < a.length; ++c){
                var d = a.charCodeAt(c);
                55296 <= d && 57343 >= d && ++c;
                b += 4;
            }
            return b;
        }, rd = {};
        function sd(a) {
            var b = rd[a];
            return void 0 === b ? O(a) : b;
        }
        var td = [];
        function ud(a) {
            var b = td.length;
            td.push(a);
            return b;
        }
        function vd(a, b) {
            for(var c = Array(a), d = 0; d < a; ++d)c[d] = uc(D[b + 4 * d >> 2], "parameter " + d);
            return c;
        }
        var wd = [], xd = [];
        function yd(a) {
            var b = a.getExtension("ANGLE_instanced_arrays");
            b && (a.vertexAttribDivisor = function(c, d) {
                b.vertexAttribDivisorANGLE(c, d);
            }, a.drawArraysInstanced = function(c, d, e, f) {
                b.drawArraysInstancedANGLE(c, d, e, f);
            }, a.drawElementsInstanced = function(c, d, e, f, g) {
                b.drawElementsInstancedANGLE(c, d, e, f, g);
            });
        }
        function zd(a) {
            var b = a.getExtension("OES_vertex_array_object");
            b && (a.createVertexArray = function() {
                return b.createVertexArrayOES();
            }, a.deleteVertexArray = function(c) {
                b.deleteVertexArrayOES(c);
            }, a.bindVertexArray = function(c) {
                b.bindVertexArrayOES(c);
            }, a.isVertexArray = function(c) {
                return b.isVertexArrayOES(c);
            });
        }
        function Ad(a) {
            var b = a.getExtension("WEBGL_draw_buffers");
            b && (a.drawBuffers = function(c, d) {
                b.drawBuffersWEBGL(c, d);
            });
        }
        var Bd = 1, Cd = [], Dd = [], Ed = [], Fd = [], Gd = [], Hd = [], Id = [], ja = [], Jd = [], Kd = [], Ld = {}, Md = {}, Nd = 4;
        function S(a) {
            Od || (Od = a);
        }
        function ia(a) {
            for(var b = Bd++, c = a.length; c < b; c++)a[c] = null;
            return b;
        }
        function la(a) {
            T = ja[a];
            m.yc = U = T && T.Ta;
            return !(a && !U);
        }
        function ka(a) {
            a || (a = T);
            if (!a.Ub) {
                a.Ub = !0;
                var b = a.Ta;
                yd(b);
                zd(b);
                Ad(b);
                b.Ya = b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
                b.gb = b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
                2 <= a.version && (b.Za = b.getExtension("EXT_disjoint_timer_query_webgl2"));
                if (2 > a.version || !b.Za) b.Za = b.getExtension("EXT_disjoint_timer_query");
                b.Fc = b.getExtension("WEBGL_multi_draw");
                (b.getSupportedExtensions() || []).forEach(function(c) {
                    c.includes("lose_context") || c.includes("debug") || b.getExtension(c);
                });
            }
        }
        var Od, T;
        function Pd(a, b) {
            U.bindFramebuffer(a, Ed[b]);
        }
        function Qd(a) {
            U.bindVertexArray(Id[a]);
        }
        function Rd(a, b) {
            for(var c = 0; c < a; c++){
                var d = B[b + 4 * c >> 2];
                U.deleteVertexArray(Id[d]);
                Id[d] = null;
            }
        }
        var Sd = [];
        function Td(a, b, c, d) {
            U.drawElements(a, b, c, d);
        }
        function Ud(a, b, c, d) {
            for(var e = 0; e < a; e++){
                var f = U[c](), g = f && ia(d);
                f ? (f.name = g, d[g] = f) : S(1282);
                B[b + 4 * e >> 2] = g;
            }
        }
        function Vd(a, b) {
            Ud(a, b, "createVertexArray", Id);
        }
        function Wd(a, b) {
            if (b) {
                var c = void 0;
                switch(a){
                    case 36346:
                        c = 1;
                        break;
                    case 36344:
                        return;
                    case 34814:
                    case 36345:
                        c = 0;
                        break;
                    case 34466:
                        var d = U.getParameter(34467);
                        c = d ? d.length : 0;
                        break;
                    case 33309:
                        if (2 > T.version) {
                            S(1282);
                            return;
                        }
                        c = 2 * (U.getSupportedExtensions() || []).length;
                        break;
                    case 33307:
                    case 33308:
                        if (2 > T.version) {
                            S(1280);
                            return;
                        }
                        c = 33307 == a ? 3 : 0;
                }
                if (void 0 === c) switch(d = U.getParameter(a), typeof d){
                    case "number":
                        c = d;
                        break;
                    case "boolean":
                        c = d ? 1 : 0;
                        break;
                    case "string":
                        S(1280);
                        return;
                    case "object":
                        if (null === d) switch(a){
                            case 34964:
                            case 35725:
                            case 34965:
                            case 36006:
                            case 36007:
                            case 32873:
                            case 34229:
                            case 36662:
                            case 36663:
                            case 35053:
                            case 35055:
                            case 36010:
                            case 35097:
                            case 35869:
                            case 32874:
                            case 36389:
                            case 35983:
                            case 35368:
                            case 34068:
                                c = 0;
                                break;
                            default:
                                S(1280);
                                return;
                        }
                        else {
                            if (d instanceof Float32Array || d instanceof Uint32Array || d instanceof Int32Array || d instanceof Array) {
                                for(a = 0; a < d.length; ++a)B[b + 4 * a >> 2] = d[a];
                                return;
                            }
                            try {
                                c = d.name | 0;
                            } catch (e) {
                                S(1280);
                                ua("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + e + ")");
                                return;
                            }
                        }
                        break;
                    default:
                        S(1280);
                        ua("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v(" + a + ") and it returns " + d + " of type " + typeof d + "!");
                        return;
                }
                B[b >> 2] = c;
            } else S(1281);
        }
        function Xd(a, b) {
            Wd(a, b);
        }
        var Zd = (a)=>{
            var b = gb(a) + 1, c = Yd(b);
            c && hb(a, w, c, b);
            return c;
        };
        function $d(a) {
            return "]" == a.slice(-1) && a.lastIndexOf("[");
        }
        function ae(a) {
            a -= 5120;
            return 0 == a ? u : 1 == a ? w : 2 == a ? A : 4 == a ? B : 6 == a ? E : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? D : za;
        }
        function be(a, b, c, d, e) {
            a = ae(a);
            var f = 31 - Math.clz32(a.BYTES_PER_ELEMENT), g = Nd;
            return a.subarray(e >> f, e + d * (c * (({
                5: 3,
                6: 4,
                8: 2,
                29502: 3,
                29504: 4,
                26917: 2,
                26918: 2,
                29846: 3,
                29847: 4
            })[b - 6402] || 1) * (1 << f) + g - 1 & -g) >> f);
        }
        function V(a) {
            var b = U.Gb;
            if (b) {
                var c = b.ma[a];
                "number" == typeof c && (b.ma[a] = c = U.getUniformLocation(b, b.tb[a] + (0 < c ? "[" + c + "]" : "")));
                return c;
            }
            S(1282);
        }
        var ce = [], de = [], ee = {}, ge = ()=>{
            if (!fe) {
                var a = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: na || "./this.program"
                }, b;
                for(b in ee)void 0 === ee[b] ? delete a[b] : a[b] = ee[b];
                var c = [];
                for(b in a)c.push(`${b}=${a[b]}`);
                fe = c;
            }
            return fe;
        }, fe, he = (a)=>0 === a % 4 && (0 !== a % 100 || 0 === a % 400), ie = [
            31,
            29,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ], je = [
            31,
            28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ], ke = (a, b, c, d)=>{
            function e(l, r, x) {
                for(l = "number" == typeof l ? l.toString() : l || ""; l.length < r;)l = x[0] + l;
                return l;
            }
            function f(l, r) {
                return e(l, r, "0");
            }
            function g(l, r) {
                function x(G) {
                    return 0 > G ? -1 : 0 < G ? 1 : 0;
                }
                var z;
                0 === (z = x(l.getFullYear() - r.getFullYear())) && 0 === (z = x(l.getMonth() - r.getMonth())) && (z = x(l.getDate() - r.getDate()));
                return z;
            }
            function k(l) {
                switch(l.getDay()){
                    case 0:
                        return new Date(l.getFullYear() - 1, 11, 29);
                    case 1:
                        return l;
                    case 2:
                        return new Date(l.getFullYear(), 0, 3);
                    case 3:
                        return new Date(l.getFullYear(), 0, 2);
                    case 4:
                        return new Date(l.getFullYear(), 0, 1);
                    case 5:
                        return new Date(l.getFullYear() - 1, 11, 31);
                    case 6:
                        return new Date(l.getFullYear() - 1, 11, 30);
                }
            }
            function q(l) {
                var r = l.aa;
                for(l = new Date(new Date(l.ba + 1900, 0, 1).getTime()); 0 < r;){
                    var x = l.getMonth(), z = (he(l.getFullYear()) ? ie : je)[x];
                    if (r > z - l.getDate()) r -= z - l.getDate() + 1, l.setDate(1), 11 > x ? l.setMonth(x + 1) : (l.setMonth(0), l.setFullYear(l.getFullYear() + 1));
                    else {
                        l.setDate(l.getDate() + r);
                        break;
                    }
                }
                x = new Date(l.getFullYear() + 1, 0, 4);
                r = k(new Date(l.getFullYear(), 0, 4));
                x = k(x);
                return 0 >= g(r, l) ? 0 >= g(x, l) ? l.getFullYear() + 1 : l.getFullYear() : l.getFullYear() - 1;
            }
            var n = B[d + 40 >> 2];
            d = {
                lc: B[d >> 2],
                kc: B[d + 4 >> 2],
                Ha: B[d + 8 >> 2],
                Ra: B[d + 12 >> 2],
                Ia: B[d + 16 >> 2],
                ba: B[d + 20 >> 2],
                P: B[d + 24 >> 2],
                aa: B[d + 28 >> 2],
                Jc: B[d + 32 >> 2],
                jc: B[d + 36 >> 2],
                mc: n ? n ? F(w, n) : "" : ""
            };
            c = c ? F(w, c) : "";
            n = {
                "%c": "%a %b %d %H:%M:%S %Y",
                "%D": "%m/%d/%y",
                "%F": "%Y-%m-%d",
                "%h": "%b",
                "%r": "%I:%M:%S %p",
                "%R": "%H:%M",
                "%T": "%H:%M:%S",
                "%x": "%m/%d/%y",
                "%X": "%H:%M:%S",
                "%Ec": "%c",
                "%EC": "%C",
                "%Ex": "%m/%d/%y",
                "%EX": "%H:%M:%S",
                "%Ey": "%y",
                "%EY": "%Y",
                "%Od": "%d",
                "%Oe": "%e",
                "%OH": "%H",
                "%OI": "%I",
                "%Om": "%m",
                "%OM": "%M",
                "%OS": "%S",
                "%Ou": "%u",
                "%OU": "%U",
                "%OV": "%V",
                "%Ow": "%w",
                "%OW": "%W",
                "%Oy": "%y"
            };
            for(var t in n)c = c.replace(new RegExp(t, "g"), n[t]);
            var v = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), y = "January February March April May June July August September October November December".split(" ");
            n = {
                "%a": (l)=>v[l.P].substring(0, 3),
                "%A": (l)=>v[l.P],
                "%b": (l)=>y[l.Ia].substring(0, 3),
                "%B": (l)=>y[l.Ia],
                "%C": (l)=>f((l.ba + 1900) / 100 | 0, 2),
                "%d": (l)=>f(l.Ra, 2),
                "%e": (l)=>e(l.Ra, 2, " "),
                "%g": (l)=>q(l).toString().substring(2),
                "%G": (l)=>q(l),
                "%H": (l)=>f(l.Ha, 2),
                "%I": (l)=>{
                    l = l.Ha;
                    0 == l ? l = 12 : 12 < l && (l -= 12);
                    return f(l, 2);
                },
                "%j": (l)=>{
                    for(var r = 0, x = 0; x <= l.Ia - 1; r += (he(l.ba + 1900) ? ie : je)[x++]);
                    return f(l.Ra + r, 3);
                },
                "%m": (l)=>f(l.Ia + 1, 2),
                "%M": (l)=>f(l.kc, 2),
                "%n": ()=>"\n",
                "%p": (l)=>0 <= l.Ha && 12 > l.Ha ? "AM" : "PM",
                "%S": (l)=>f(l.lc, 2),
                "%t": ()=>"\t",
                "%u": (l)=>l.P || 7,
                "%U": (l)=>f(Math.floor((l.aa + 7 - l.P) / 7), 2),
                "%V": (l)=>{
                    var r = Math.floor((l.aa + 7 - (l.P + 6) % 7) / 7);
                    2 >= (l.P + 371 - l.aa - 2) % 7 && r++;
                    if (r) 53 == r && (x = (l.P + 371 - l.aa) % 7, 4 == x || 3 == x && he(l.ba) || (r = 1));
                    else {
                        r = 52;
                        var x = (l.P + 7 - l.aa - 1) % 7;
                        (4 == x || 5 == x && he(l.ba % 400 - 1)) && r++;
                    }
                    return f(r, 2);
                },
                "%w": (l)=>l.P,
                "%W": (l)=>f(Math.floor((l.aa + 7 - (l.P + 6) % 7) / 7), 2),
                "%y": (l)=>(l.ba + 1900).toString().substring(2),
                "%Y": (l)=>l.ba + 1900,
                "%z": (l)=>{
                    l = l.jc;
                    var r = 0 <= l;
                    l = Math.abs(l) / 60;
                    return (r ? "+" : "-") + String("0000" + (l / 60 * 100 + l % 60)).slice(-4);
                },
                "%Z": (l)=>l.mc,
                "%%": ()=>"%"
            };
            c = c.replace(/%%/g, "\x00\x00");
            for(t in n)c.includes(t) && (c = c.replace(new RegExp(t, "g"), n[t](d)));
            c = c.replace(/\0\0/g, "%");
            t = ib(c, !1);
            if (t.length > b) return 0;
            u.set(t, a);
            return t.length - 1;
        };
        function Ib(a, b, c, d) {
            a || (a = this);
            this.parent = a;
            this.S = a.S;
            this.Ba = null;
            this.id = zb++;
            this.name = b;
            this.mode = c;
            this.l = {};
            this.m = {};
            this.Da = d;
        }
        Object.defineProperties(Ib.prototype, {
            read: {
                get: function() {
                    return 365 === (this.mode & 365);
                },
                set: function(a) {
                    a ? this.mode |= 365 : this.mode &= -366;
                }
            },
            write: {
                get: function() {
                    return 146 === (this.mode & 146);
                },
                set: function(a) {
                    a ? this.mode |= 146 : this.mode &= -147;
                }
            }
        });
        Wb();
        Ab = Array(4096);
        Pb(I, "/");
        Qb("/tmp", 16895, 0);
        Qb("/home", 16895, 0);
        Qb("/home/web_user", 16895, 0);
        (()=>{
            Qb("/dev", 16895, 0);
            lb(259, {
                read: ()=>0,
                write: (d, e, f, g)=>g
            });
            Rb("/dev/null", 259);
            kb(1280, nb);
            kb(1536, ob);
            Rb("/dev/tty", 1280);
            Rb("/dev/tty1", 1536);
            var a = new Uint8Array(1024), b = 0, c = ()=>{
                0 === b && (b = cb(a).byteLength);
                return a[--b];
            };
            Zb("random", c);
            Zb("urandom", c);
            Qb("/dev/shm", 16895, 0);
            Qb("/dev/shm/tmp", 16895, 0);
        })();
        (()=>{
            Qb("/proc", 16895, 0);
            var a = Qb("/proc/self", 16895, 0);
            Qb("/proc/self/fd", 16895, 0);
            Pb({
                S: ()=>{
                    var b = rb(a, "fd", 16895, 73);
                    b.l = {
                        ka: (c, d)=>{
                            var e = Mb(+d);
                            c = {
                                parent: null,
                                S: {
                                    ib: "fake"
                                },
                                l: {
                                    la: ()=>e.path
                                }
                            };
                            return c.parent = c;
                        }
                    };
                    return b;
                }
            }, "/proc/self/fd");
        })();
        Object.assign(ec.prototype, {
            get (a) {
                return this.L[a];
            },
            has (a) {
                return void 0 !== this.L[a];
            },
            ra (a) {
                var b = this.cb.pop() || this.L.length;
                this.L[b] = a;
                return b;
            },
            Sb (a) {
                this.L[a] = void 0;
                this.cb.push(a);
            }
        });
        fc = m.BindingError = class extends Error {
            constructor(a){
                super(a);
                this.name = "BindingError";
            }
        };
        L.L.push({
            value: void 0
        }, {
            value: null
        }, {
            value: !0
        }, {
            value: !1
        });
        L.h = L.L.length;
        m.count_emval_handles = function() {
            for(var a = 0, b = L.h; b < L.L.length; ++b)void 0 !== L.L[b] && ++a;
            return a;
        };
        jc = m.PureVirtualError = ic("PureVirtualError");
        for(var le = Array(256), me = 0; 256 > me; ++me)le[me] = String.fromCharCode(me);
        kc = le;
        m.getInheritedInstanceCount = function() {
            return Object.keys(oc).length;
        };
        m.getLiveInheritedInstances = function() {
            var a = [], b;
            for(b in oc)oc.hasOwnProperty(b) && a.push(oc[b]);
            return a;
        };
        m.flushPendingDeletes = mc;
        m.setDelayFunction = function(a) {
            nc = a;
            lc.length && nc && nc(mc);
        };
        Bc = m.InternalError = class extends Error {
            constructor(a){
                super(a);
                this.name = "InternalError";
            }
        };
        Oc.prototype.isAliasOf = function(a) {
            if (!(this instanceof Oc && a instanceof Oc)) return !1;
            var b = this.g.u.i, c = this.g.o, d = a.g.u.i;
            for(a = a.g.o; b.A;)c = b.na(c), b = b.A;
            for(; d.A;)a = d.na(a), d = d.A;
            return b === d && c === a;
        };
        Oc.prototype.clone = function() {
            this.g.o || Nc(this);
            if (this.g.ia) return this.g.count.value += 1, this;
            var a = Ec, b = Object, c = b.create, d = Object.getPrototypeOf(this), e = this.g;
            a = a(c.call(b, d, {
                g: {
                    value: {
                        count: e.count,
                        ga: e.ga,
                        ia: e.ia,
                        o: e.o,
                        u: e.u,
                        G: e.G,
                        K: e.K
                    }
                }
            }));
            a.g.count.value += 1;
            a.g.ga = !1;
            return a;
        };
        Oc.prototype["delete"] = function() {
            this.g.o || Nc(this);
            this.g.ga && !this.g.ia && M("Object already scheduled for deletion");
            vc(this);
            xc(this.g);
            this.g.ia || (this.g.G = void 0, this.g.o = void 0);
        };
        Oc.prototype.isDeleted = function() {
            return !this.g.o;
        };
        Oc.prototype.deleteLater = function() {
            this.g.o || Nc(this);
            this.g.ga && !this.g.ia && M("Object already scheduled for deletion");
            lc.push(this);
            1 === lc.length && nc && nc(mc);
            this.g.ga = !0;
            return this;
        };
        Xc.prototype.Ob = function(a) {
            this.nb && (a = this.nb(a));
            return a;
        };
        Xc.prototype.Xa = function(a) {
            this.U && this.U(a);
        };
        Xc.prototype.argPackAdvance = 8;
        Xc.prototype.readValueFromPointer = Hc;
        Xc.prototype.deleteObject = function(a) {
            if (null !== a) a["delete"]();
        };
        Xc.prototype.fromWireType = function(a) {
            function b() {
                return this.wa ? Dc(this.i.M, {
                    u: this.bc,
                    o: c,
                    K: this,
                    G: a
                }) : Dc(this.i.M, {
                    u: this,
                    o: a
                });
            }
            var c = this.Ob(a);
            if (!c) return this.Xa(a), null;
            var d = Ac(this.i, c);
            if (void 0 !== d) {
                if (0 === d.g.count.value) return d.g.o = c, d.g.G = a, d.clone();
                d = d.clone();
                this.Xa(a);
                return d;
            }
            d = this.i.Nb(c);
            d = zc[d];
            if (!d) return b.call(this);
            d = this.va ? d.Fb : d.pointerType;
            var e = yc(c, this.i, d.i);
            return null === e ? b.call(this) : this.wa ? Dc(d.i.M, {
                u: d,
                o: e,
                K: this,
                G: a
            }) : Dc(d.i.M, {
                u: d,
                o: e
            });
        };
        ad = m.UnboundTypeError = ic("UnboundTypeError");
        for(var U, W = 0; 32 > W; ++W)Sd.push(Array(W));
        var ne = new Float32Array(288);
        for(W = 0; 288 > W; ++W)ce[W] = ne.subarray(0, W + 1);
        var oe = new Int32Array(288);
        for(W = 0; 288 > W; ++W)de[W] = oe.subarray(0, W + 1);
        var Fe = {
            __syscall_fcntl64: function(a, b, c) {
                ac = c;
                try {
                    var d = Mb(a);
                    switch(b){
                        case 0:
                            var e = bc();
                            return 0 > e ? -28 : Ob(d, e).V;
                        case 1:
                        case 2:
                            return 0;
                        case 3:
                            return d.flags;
                        case 4:
                            return e = bc(), d.flags |= e, 0;
                        case 5:
                            return e = bc(), A[e + 0 >> 1] = 2, 0;
                        case 6:
                        case 7:
                            return 0;
                        case 16:
                        case 8:
                            return -28;
                        case 9:
                            return B[pe() >> 2] = 28, -1;
                        default:
                            return -28;
                    }
                } catch (f) {
                    if ("undefined" == typeof $b || "ErrnoError" !== f.name) throw f;
                    return -f.Z;
                }
            },
            __syscall_ioctl: function(a, b, c) {
                ac = c;
                try {
                    var d = Mb(a);
                    switch(b){
                        case 21509:
                            return d.s ? 0 : -59;
                        case 21505:
                            if (!d.s) return -59;
                            if (d.s.T.Wb) {
                                b = [
                                    3,
                                    28,
                                    127,
                                    21,
                                    4,
                                    0,
                                    1,
                                    0,
                                    17,
                                    19,
                                    26,
                                    0,
                                    18,
                                    15,
                                    23,
                                    22,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0
                                ];
                                var e = bc();
                                B[e >> 2] = 25856;
                                B[e + 4 >> 2] = 5;
                                B[e + 8 >> 2] = 191;
                                B[e + 12 >> 2] = 35387;
                                for(var f = 0; 32 > f; f++)u[e + f + 17 >> 0] = b[f] || 0;
                            }
                            return 0;
                        case 21510:
                        case 21511:
                        case 21512:
                            return d.s ? 0 : -59;
                        case 21506:
                        case 21507:
                        case 21508:
                            if (!d.s) return -59;
                            if (d.s.T.Xb) for(e = bc(), b = [], f = 0; 32 > f; f++)b.push(u[e + f + 17 >> 0]);
                            return 0;
                        case 21519:
                            if (!d.s) return -59;
                            e = bc();
                            return B[e >> 2] = 0;
                        case 21520:
                            return d.s ? -28 : -59;
                        case 21531:
                            e = bc();
                            if (!d.m.Vb) throw new H(59);
                            return d.m.Vb(d, b, e);
                        case 21523:
                            if (!d.s) return -59;
                            d.s.T.Yb && (f = [
                                24,
                                80
                            ], e = bc(), A[e >> 1] = f[0], A[e + 2 >> 1] = f[1]);
                            return 0;
                        case 21524:
                            return d.s ? 0 : -59;
                        case 21515:
                            return d.s ? 0 : -59;
                        default:
                            return -28;
                    }
                } catch (g) {
                    if ("undefined" == typeof $b || "ErrnoError" !== g.name) throw g;
                    return -g.Z;
                }
            },
            __syscall_openat: function(a, b, c, d) {
                ac = d;
                try {
                    b = b ? F(w, b) : "";
                    var e = b;
                    if ("/" === e.charAt(0)) b = e;
                    else {
                        var f = -100 === a ? "/" : Mb(a).path;
                        if (0 == e.length) throw new H(44);
                        b = Za(f + "/" + e);
                    }
                    var g = d ? bc() : 0;
                    return Ub(b, c, g).V;
                } catch (k) {
                    if ("undefined" == typeof $b || "ErrnoError" !== k.name) throw k;
                    return -k.Z;
                }
            },
            _embind_create_inheriting_constructor: function(a, b, c) {
                a = O(a);
                b = uc(b, "wrapper");
                c = gc(c);
                var d = [].slice, e = b.i, f = e.M, g = e.A.M, k = e.A.constructor;
                a = dc(a, function() {
                    e.A.mb.forEach((function(n) {
                        if (this[n] === g[n]) throw new jc(`Pure virtual function ${n} must be implemented in JavaScript`);
                    }).bind(this));
                    Object.defineProperty(this, "__parent", {
                        value: f
                    });
                    this.__construct.apply(this, d.call(arguments));
                });
                f.__construct = function() {
                    this === f && M("Pass correct 'this' to __construct");
                    var n = k.implement.apply(void 0, [
                        this
                    ].concat(d.call(arguments)));
                    vc(n);
                    var t = n.g;
                    n.notifyOnDestruction();
                    t.ia = !0;
                    Object.defineProperties(this, {
                        g: {
                            value: t
                        }
                    });
                    Ec(this);
                    n = t.o;
                    n = pc(e, n);
                    oc.hasOwnProperty(n) ? M(`Tried to register registered instance: ${n}`) : oc[n] = this;
                };
                f.__destruct = function() {
                    this === f && M("Pass correct 'this' to __destruct");
                    vc(this);
                    var n = this.g.o;
                    n = pc(e, n);
                    oc.hasOwnProperty(n) ? delete oc[n] : M(`Tried to unregister unregistered instance: ${n}`);
                };
                a.prototype = Object.create(f);
                for(var q in c)a.prototype[q] = c[q];
                return hc(a);
            },
            _embind_finalize_value_object: function(a) {
                var b = Fc[a];
                delete Fc[a];
                var c = b.Pa, d = b.U, e = b.$a, f = e.map((g)=>g.Rb).concat(e.map((g)=>g.fc));
                P([
                    a
                ], f, (g)=>{
                    var k = {};
                    e.forEach((q, n)=>{
                        var t = g[n], v = q.Pb, y = q.Qb, l = g[n + e.length], r = q.ec, x = q.hc;
                        k[q.Lb] = {
                            read: (z)=>t.fromWireType(v(y, z)),
                            write: (z, G)=>{
                                var C = [];
                                r(x, z, l.toWireType(C, G));
                                Gc(C);
                            }
                        };
                    });
                    return [
                        {
                            name: b.name,
                            fromWireType: function(q) {
                                var n = {}, t;
                                for(t in k)n[t] = k[t].read(q);
                                d(q);
                                return n;
                            },
                            toWireType: function(q, n) {
                                for(var t in k){
                                    if (!(t in n)) throw new TypeError(`Missing field: "${t}"`);
                                }
                                var v = c();
                                for(t in k)k[t].write(v, n[t]);
                                null !== q && q.push(d, v);
                                return v;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: Hc,
                            J: d
                        }
                    ];
                });
            },
            _embind_register_bigint: function() {},
            _embind_register_bool: function(a, b, c, d, e) {
                var f = Lc(c);
                b = O(b);
                Kc(a, {
                    name: b,
                    fromWireType: function(g) {
                        return !!g;
                    },
                    toWireType: function(g, k) {
                        return k ? d : e;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function(g) {
                        if (1 === c) var k = u;
                        else if (2 === c) k = A;
                        else if (4 === c) k = B;
                        else throw new TypeError("Unknown boolean type size: " + b);
                        return this.fromWireType(k[g >> f]);
                    },
                    J: null
                });
            },
            _embind_register_class: function(a, b, c, d, e, f, g, k, q, n, t, v, y) {
                t = O(t);
                f = R(e, f);
                k && (k = R(g, k));
                n && (n = R(q, n));
                y = R(v, y);
                var l = cc(t);
                Qc(l, function() {
                    bd(`Cannot construct ${t} due to unbound types`, [
                        d
                    ]);
                });
                P([
                    a,
                    b,
                    c
                ], d ? [
                    d
                ] : [], function(r) {
                    r = r[0];
                    if (d) {
                        var x = r.i;
                        var z = x.M;
                    } else z = Oc.prototype;
                    r = dc(l, function() {
                        if (Object.getPrototypeOf(this) !== G) throw new fc("Use 'new' to construct " + t);
                        if (void 0 === C.Y) throw new fc(t + " has no accessible constructor");
                        var N = C.Y[arguments.length];
                        if (void 0 === N) throw new fc(`Tried to invoke ctor of ${t} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(C.Y).toString()}) parameters instead!`);
                        return N.apply(this, arguments);
                    });
                    var G = Object.create(z, {
                        constructor: {
                            value: r
                        }
                    });
                    r.prototype = G;
                    var C = new Rc(t, r, G, y, x, f, k, n);
                    C.A && (void 0 === C.A.oa && (C.A.oa = []), C.A.oa.push(C));
                    x = new Xc(t, C, !0, !1);
                    z = new Xc(t + "*", C, !1, !1);
                    var J = new Xc(t + " const*", C, !1, !0);
                    zc[a] = {
                        pointerType: z,
                        Fb: J
                    };
                    Yc(l, r);
                    return [
                        x,
                        z,
                        J
                    ];
                });
            },
            _embind_register_class_class_function: function(a, b, c, d, e, f, g) {
                var k = dd(c, d);
                b = O(b);
                f = R(e, f);
                P([], [
                    a
                ], function(q) {
                    function n() {
                        bd(`Cannot call ${t} due to unbound types`, k);
                    }
                    q = q[0];
                    var t = `${q.name}.${b}`;
                    b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                    var v = q.i.constructor;
                    void 0 === v[b] ? (n.ea = c - 1, v[b] = n) : (Pc(v, b, t), v[b].B[c - 1] = n);
                    P([], k, function(y) {
                        y = cd(t, [
                            y[0],
                            null
                        ].concat(y.slice(1)), null, f, g);
                        void 0 === v[b].B ? (y.ea = c - 1, v[b] = y) : v[b].B[c - 1] = y;
                        if (q.i.oa) for (const l of q.i.oa)l.constructor.hasOwnProperty(b) || (l.constructor[b] = y);
                        return [];
                    });
                    return [];
                });
            },
            _embind_register_class_class_property: function(a, b, c, d, e, f, g, k) {
                b = O(b);
                f = R(e, f);
                P([], [
                    a
                ], function(q) {
                    q = q[0];
                    var n = `${q.name}.${b}`, t = {
                        get () {
                            bd(`Cannot access ${n} due to unbound types`, [
                                c
                            ]);
                        },
                        enumerable: !0,
                        configurable: !0
                    };
                    t.set = k ? ()=>{
                        bd(`Cannot access ${n} due to unbound types`, [
                            c
                        ]);
                    } : ()=>{
                        M(`${n} is a read-only property`);
                    };
                    Object.defineProperty(q.i.constructor, b, t);
                    P([], [
                        c
                    ], function(v) {
                        v = v[0];
                        var y = {
                            get () {
                                return v.fromWireType(f(d));
                            },
                            enumerable: !0
                        };
                        k && (k = R(g, k), y.set = (l)=>{
                            var r = [];
                            k(d, v.toWireType(r, l));
                            Gc(r);
                        });
                        Object.defineProperty(q.i.constructor, b, y);
                        return [];
                    });
                    return [];
                });
            },
            _embind_register_class_constructor: function(a, b, c, d, e, f) {
                var g = dd(b, c);
                e = R(d, e);
                P([], [
                    a
                ], function(k) {
                    k = k[0];
                    var q = `constructor ${k.name}`;
                    void 0 === k.i.Y && (k.i.Y = []);
                    if (void 0 !== k.i.Y[b - 1]) throw new fc(`Cannot register multiple constructors with identical number of parameters (${b - 1}) for class '${k.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                    k.i.Y[b - 1] = ()=>{
                        bd(`Cannot construct ${k.name} due to unbound types`, g);
                    };
                    P([], g, function(n) {
                        n.splice(1, 0, null);
                        k.i.Y[b - 1] = cd(q, n, null, e, f);
                        return [];
                    });
                    return [];
                });
            },
            _embind_register_class_function: function(a, b, c, d, e, f, g, k) {
                var q = dd(c, d);
                b = O(b);
                f = R(e, f);
                P([], [
                    a
                ], function(n) {
                    function t() {
                        bd(`Cannot call ${v} due to unbound types`, q);
                    }
                    n = n[0];
                    var v = `${n.name}.${b}`;
                    b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                    k && n.i.mb.push(b);
                    var y = n.i.M, l = y[b];
                    void 0 === l || void 0 === l.B && l.className !== n.name && l.ea === c - 2 ? (t.ea = c - 2, t.className = n.name, y[b] = t) : (Pc(y, b, v), y[b].B[c - 2] = t);
                    P([], q, function(r) {
                        r = cd(v, r, n, f, g);
                        void 0 === y[b].B ? (r.ea = c - 2, y[b] = r) : y[b].B[c - 2] = r;
                        return [];
                    });
                    return [];
                });
            },
            _embind_register_class_property: function(a, b, c, d, e, f, g, k, q, n) {
                b = O(b);
                e = R(d, e);
                P([], [
                    a
                ], function(t) {
                    t = t[0];
                    var v = `${t.name}.${b}`, y = {
                        get () {
                            bd(`Cannot access ${v} due to unbound types`, [
                                c,
                                g
                            ]);
                        },
                        enumerable: !0,
                        configurable: !0
                    };
                    y.set = q ? ()=>{
                        bd(`Cannot access ${v} due to unbound types`, [
                            c,
                            g
                        ]);
                    } : ()=>{
                        M(v + " is a read-only property");
                    };
                    Object.defineProperty(t.i.M, b, y);
                    P([], q ? [
                        c,
                        g
                    ] : [
                        c
                    ], function(l) {
                        var r = l[0], x = {
                            get () {
                                var G = ed(this, t, v + " getter");
                                return r.fromWireType(e(f, G));
                            },
                            enumerable: !0
                        };
                        if (q) {
                            q = R(k, q);
                            var z = l[1];
                            x.set = function(G) {
                                var C = ed(this, t, v + " setter"), J = [];
                                q(n, C, z.toWireType(J, G));
                                Gc(J);
                            };
                        }
                        Object.defineProperty(t.i.M, b, x);
                        return [];
                    });
                    return [];
                });
            },
            _embind_register_emval: function(a, b) {
                b = O(b);
                Kc(a, {
                    name: b,
                    fromWireType: function(c) {
                        var d = gc(c);
                        fd(c);
                        return d;
                    },
                    toWireType: function(c, d) {
                        return hc(d);
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Hc,
                    J: null
                });
            },
            _embind_register_enum: function(a, b, c, d) {
                function e() {}
                c = Lc(c);
                b = O(b);
                e.values = {};
                Kc(a, {
                    name: b,
                    constructor: e,
                    fromWireType: function(f) {
                        return this.constructor.values[f];
                    },
                    toWireType: function(f, g) {
                        return g.value;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: gd(b, c, d),
                    J: null
                });
                Qc(b, e);
            },
            _embind_register_enum_value: function(a, b, c) {
                var d = uc(a, "enum");
                b = O(b);
                a = d.constructor;
                d = Object.create(d.constructor.prototype, {
                    value: {
                        value: c
                    },
                    constructor: {
                        value: dc(`${d.name}_${b}`, function() {})
                    }
                });
                a.values[c] = d;
                a[b] = d;
            },
            _embind_register_float: function(a, b, c) {
                c = Lc(c);
                b = O(b);
                Kc(a, {
                    name: b,
                    fromWireType: function(d) {
                        return d;
                    },
                    toWireType: function(d, e) {
                        return e;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: hd(b, c),
                    J: null
                });
            },
            _embind_register_function: function(a, b, c, d, e, f) {
                var g = dd(b, c);
                a = O(a);
                e = R(d, e);
                Qc(a, function() {
                    bd(`Cannot call ${a} due to unbound types`, g);
                }, b - 1);
                P([], g, function(k) {
                    Yc(a, cd(a, [
                        k[0],
                        null
                    ].concat(k.slice(1)), null, e, f), b - 1);
                    return [];
                });
            },
            _embind_register_integer: function(a, b, c, d, e) {
                b = O(b);
                -1 === e && (e = 4294967295);
                e = Lc(c);
                var f = (k)=>k;
                if (0 === d) {
                    var g = 32 - 8 * c;
                    f = (k)=>k << g >>> g;
                }
                c = b.includes("unsigned") ? function(k, q) {
                    return q >>> 0;
                } : function(k, q) {
                    return q;
                };
                Kc(a, {
                    name: b,
                    fromWireType: f,
                    toWireType: c,
                    argPackAdvance: 8,
                    readValueFromPointer: jd(b, e, 0 !== d),
                    J: null
                });
            },
            _embind_register_memory_view: function(a, b, c) {
                function d(f) {
                    f >>= 2;
                    var g = D;
                    return new e(g.buffer, g[f + 1], g[f]);
                }
                var e = [
                    Int8Array,
                    Uint8Array,
                    Int16Array,
                    Uint16Array,
                    Int32Array,
                    Uint32Array,
                    Float32Array,
                    Float64Array
                ][b];
                c = O(c);
                Kc(a, {
                    name: c,
                    fromWireType: d,
                    argPackAdvance: 8,
                    readValueFromPointer: d
                }, {
                    Tb: !0
                });
            },
            _embind_register_std_string: function(a, b) {
                b = O(b);
                var c = "std::string" === b;
                Kc(a, {
                    name: b,
                    fromWireType: function(d) {
                        var e = D[d >> 2], f = d + 4;
                        if (c) for(var g = f, k = 0; k <= e; ++k){
                            var q = f + k;
                            if (k == e || 0 == w[q]) {
                                g = g ? F(w, g, q - g) : "";
                                if (void 0 === n) var n = g;
                                else n += String.fromCharCode(0), n += g;
                                g = q + 1;
                            }
                        }
                        else {
                            n = Array(e);
                            for(k = 0; k < e; ++k)n[k] = String.fromCharCode(w[f + k]);
                            n = n.join("");
                        }
                        tc(d);
                        return n;
                    },
                    toWireType: function(d, e) {
                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                        var f = "string" == typeof e;
                        f || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || M("Cannot pass non-string to std::string");
                        var g = c && f ? gb(e) : e.length;
                        var k = Yd(4 + g + 1), q = k + 4;
                        D[k >> 2] = g;
                        if (c && f) hb(e, w, q, g + 1);
                        else {
                            if (f) for(f = 0; f < g; ++f){
                                var n = e.charCodeAt(f);
                                255 < n && (tc(q), M("String has UTF-16 code units that do not fit in 8 bits"));
                                w[q + f] = n;
                            }
                            else for(f = 0; f < g; ++f)w[q + f] = e[f];
                        }
                        null !== d && d.push(tc, k);
                        return k;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Hc,
                    J: function(d) {
                        tc(d);
                    }
                });
            },
            _embind_register_std_wstring: function(a, b, c) {
                c = O(c);
                if (2 === b) {
                    var d = ld;
                    var e = md;
                    var f = nd;
                    var g = ()=>za;
                    var k = 1;
                } else 4 === b && (d = od, e = pd, f = qd, g = ()=>D, k = 2);
                Kc(a, {
                    name: c,
                    fromWireType: function(q) {
                        for(var n = D[q >> 2], t = g(), v, y = q + 4, l = 0; l <= n; ++l){
                            var r = q + 4 + l * b;
                            if (l == n || 0 == t[r >> k]) y = d(y, r - y), void 0 === v ? v = y : (v += String.fromCharCode(0), v += y), y = r + b;
                        }
                        tc(q);
                        return v;
                    },
                    toWireType: function(q, n) {
                        "string" != typeof n && M(`Cannot pass non-string to C++ string type ${c}`);
                        var t = f(n), v = Yd(4 + t + b);
                        D[v >> 2] = t >> k;
                        e(n, v + 4, t + b);
                        null !== q && q.push(tc, v);
                        return v;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Hc,
                    J: function(q) {
                        tc(q);
                    }
                });
            },
            _embind_register_value_object: function(a, b, c, d, e, f) {
                Fc[a] = {
                    name: O(b),
                    Pa: R(c, d),
                    U: R(e, f),
                    $a: []
                };
            },
            _embind_register_value_object_field: function(a, b, c, d, e, f, g, k, q, n) {
                Fc[a].$a.push({
                    Lb: O(b),
                    Rb: c,
                    Pb: R(d, e),
                    Qb: f,
                    fc: g,
                    ec: R(k, q),
                    hc: n
                });
            },
            _embind_register_void: function(a, b) {
                b = O(b);
                Kc(a, {
                    Zb: !0,
                    name: b,
                    argPackAdvance: 0,
                    fromWireType: function() {},
                    toWireType: function() {}
                });
            },
            _emscripten_get_now_is_monotonic: ()=>!0,
            _emscripten_throw_longjmp: ()=>{
                throw Infinity;
            },
            _emval_as: function(a, b, c) {
                a = gc(a);
                b = uc(b, "emval::as");
                var d = [], e = hc(d);
                D[c >> 2] = e;
                return b.toWireType(d, a);
            },
            _emval_call_method: function(a, b, c, d, e) {
                a = td[a];
                b = gc(b);
                c = sd(c);
                var f = [];
                D[d >> 2] = hc(f);
                return a(b, c, f, e);
            },
            _emval_call_void_method: function(a, b, c, d) {
                a = td[a];
                b = gc(b);
                c = sd(c);
                a(b, c, null, d);
            },
            _emval_decref: fd,
            _emval_get_method_caller: function(a, b) {
                var c = vd(a, b), d = c[0];
                b = d.name + "_$" + c.slice(1).map(function(g) {
                    return g.name;
                }).join("_") + "$";
                var e = wd[b];
                if (void 0 !== e) return e;
                var f = Array(a - 1);
                e = ud((g, k, q, n)=>{
                    for(var t = 0, v = 0; v < a - 1; ++v)f[v] = c[v + 1].readValueFromPointer(n + t), t += c[v + 1].argPackAdvance;
                    g = g[k].apply(g, f);
                    for(v = 0; v < a - 1; ++v)c[v + 1].Hb && c[v + 1].Hb(f[v]);
                    if (!d.Zb) return d.toWireType(q, g);
                });
                return wd[b] = e;
            },
            _emval_get_property: function(a, b) {
                a = gc(a);
                b = gc(b);
                return hc(a[b]);
            },
            _emval_incref: function(a) {
                4 < a && (L.get(a).pb += 1);
            },
            _emval_new_cstring: function(a) {
                return hc(sd(a));
            },
            _emval_new_object: function() {
                return hc({});
            },
            _emval_run_destructors: function(a) {
                var b = gc(a);
                Gc(b);
                fd(a);
            },
            _emval_set_property: function(a, b, c) {
                a = gc(a);
                b = gc(b);
                c = gc(c);
                a[b] = c;
            },
            _emval_take_value: function(a, b) {
                a = uc(a, "_emval_take_value");
                a = a.readValueFromPointer(b);
                return hc(a);
            },
            abort: ()=>{
                wa("");
            },
            emscripten_asm_const_int: (a, b, c)=>{
                xd.length = 0;
                var d;
                for(c >>= 2; d = w[b++];)c += 105 != d & c, xd.push(105 == d ? B[c] : Aa[c++ >> 1]), ++c;
                return Wa[a].apply(null, xd);
            },
            emscripten_date_now: function() {
                return Date.now();
            },
            emscripten_get_now: ()=>performance.now(),
            emscripten_glActiveTexture: function(a) {
                U.activeTexture(a);
            },
            emscripten_glAttachShader: function(a, b) {
                U.attachShader(Dd[a], Hd[b]);
            },
            emscripten_glBindAttribLocation: function(a, b, c) {
                U.bindAttribLocation(Dd[a], b, c ? F(w, c) : "");
            },
            emscripten_glBindBuffer: function(a, b) {
                35051 == a ? U.Ka = b : 35052 == a && (U.fa = b);
                U.bindBuffer(a, Cd[b]);
            },
            emscripten_glBindFramebuffer: Pd,
            emscripten_glBindRenderbuffer: function(a, b) {
                U.bindRenderbuffer(a, Fd[b]);
            },
            emscripten_glBindSampler: function(a, b) {
                U.bindSampler(a, Jd[b]);
            },
            emscripten_glBindTexture: function(a, b) {
                U.bindTexture(a, Gd[b]);
            },
            emscripten_glBindVertexArray: Qd,
            emscripten_glBindVertexArrayOES: Qd,
            emscripten_glBlendColor: function(a, b, c, d) {
                U.blendColor(a, b, c, d);
            },
            emscripten_glBlendEquation: function(a) {
                U.blendEquation(a);
            },
            emscripten_glBlendFunc: function(a, b) {
                U.blendFunc(a, b);
            },
            emscripten_glBlitFramebuffer: function(a, b, c, d, e, f, g, k, q, n) {
                U.blitFramebuffer(a, b, c, d, e, f, g, k, q, n);
            },
            emscripten_glBufferData: function(a, b, c, d) {
                2 <= T.version ? c && b ? U.bufferData(a, w, d, c, b) : U.bufferData(a, b, d) : U.bufferData(a, c ? w.subarray(c, c + b) : b, d);
            },
            emscripten_glBufferSubData: function(a, b, c, d) {
                2 <= T.version ? c && U.bufferSubData(a, b, w, d, c) : U.bufferSubData(a, b, w.subarray(d, d + c));
            },
            emscripten_glCheckFramebufferStatus: function(a) {
                return U.checkFramebufferStatus(a);
            },
            emscripten_glClear: function(a) {
                U.clear(a);
            },
            emscripten_glClearColor: function(a, b, c, d) {
                U.clearColor(a, b, c, d);
            },
            emscripten_glClearStencil: function(a) {
                U.clearStencil(a);
            },
            emscripten_glClientWaitSync: function(a, b, c, d) {
                return U.clientWaitSync(Kd[a], b, (c >>> 0) + 4294967296 * d);
            },
            emscripten_glColorMask: function(a, b, c, d) {
                U.colorMask(!!a, !!b, !!c, !!d);
            },
            emscripten_glCompileShader: function(a) {
                U.compileShader(Hd[a]);
            },
            emscripten_glCompressedTexImage2D: function(a, b, c, d, e, f, g, k) {
                2 <= T.version ? U.fa || !g ? U.compressedTexImage2D(a, b, c, d, e, f, g, k) : U.compressedTexImage2D(a, b, c, d, e, f, w, k, g) : U.compressedTexImage2D(a, b, c, d, e, f, k ? w.subarray(k, k + g) : null);
            },
            emscripten_glCompressedTexSubImage2D: function(a, b, c, d, e, f, g, k, q) {
                2 <= T.version ? U.fa || !k ? U.compressedTexSubImage2D(a, b, c, d, e, f, g, k, q) : U.compressedTexSubImage2D(a, b, c, d, e, f, g, w, q, k) : U.compressedTexSubImage2D(a, b, c, d, e, f, g, q ? w.subarray(q, q + k) : null);
            },
            emscripten_glCopyTexSubImage2D: function(a, b, c, d, e, f, g, k) {
                U.copyTexSubImage2D(a, b, c, d, e, f, g, k);
            },
            emscripten_glCreateProgram: function() {
                var a = ia(Dd), b = U.createProgram();
                b.name = a;
                b.za = b.xa = b.ya = 0;
                b.Sa = 1;
                Dd[a] = b;
                return a;
            },
            emscripten_glCreateShader: function(a) {
                var b = ia(Hd);
                Hd[b] = U.createShader(a);
                return b;
            },
            emscripten_glCullFace: function(a) {
                U.cullFace(a);
            },
            emscripten_glDeleteBuffers: function(a, b) {
                for(var c = 0; c < a; c++){
                    var d = B[b + 4 * c >> 2], e = Cd[d];
                    e && (U.deleteBuffer(e), e.name = 0, Cd[d] = null, d == U.Ka && (U.Ka = 0), d == U.fa && (U.fa = 0));
                }
            },
            emscripten_glDeleteFramebuffers: function(a, b) {
                for(var c = 0; c < a; ++c){
                    var d = B[b + 4 * c >> 2], e = Ed[d];
                    e && (U.deleteFramebuffer(e), e.name = 0, Ed[d] = null);
                }
            },
            emscripten_glDeleteProgram: function(a) {
                if (a) {
                    var b = Dd[a];
                    b ? (U.deleteProgram(b), b.name = 0, Dd[a] = null) : S(1281);
                }
            },
            emscripten_glDeleteRenderbuffers: function(a, b) {
                for(var c = 0; c < a; c++){
                    var d = B[b + 4 * c >> 2], e = Fd[d];
                    e && (U.deleteRenderbuffer(e), e.name = 0, Fd[d] = null);
                }
            },
            emscripten_glDeleteSamplers: function(a, b) {
                for(var c = 0; c < a; c++){
                    var d = B[b + 4 * c >> 2], e = Jd[d];
                    e && (U.deleteSampler(e), e.name = 0, Jd[d] = null);
                }
            },
            emscripten_glDeleteShader: function(a) {
                if (a) {
                    var b = Hd[a];
                    b ? (U.deleteShader(b), Hd[a] = null) : S(1281);
                }
            },
            emscripten_glDeleteSync: function(a) {
                if (a) {
                    var b = Kd[a];
                    b ? (U.deleteSync(b), b.name = 0, Kd[a] = null) : S(1281);
                }
            },
            emscripten_glDeleteTextures: function(a, b) {
                for(var c = 0; c < a; c++){
                    var d = B[b + 4 * c >> 2], e = Gd[d];
                    e && (U.deleteTexture(e), e.name = 0, Gd[d] = null);
                }
            },
            emscripten_glDeleteVertexArrays: Rd,
            emscripten_glDeleteVertexArraysOES: Rd,
            emscripten_glDepthMask: function(a) {
                U.depthMask(!!a);
            },
            emscripten_glDisable: function(a) {
                U.disable(a);
            },
            emscripten_glDisableVertexAttribArray: function(a) {
                U.disableVertexAttribArray(a);
            },
            emscripten_glDrawArrays: function(a, b, c) {
                U.drawArrays(a, b, c);
            },
            emscripten_glDrawArraysInstanced: function(a, b, c, d) {
                U.drawArraysInstanced(a, b, c, d);
            },
            emscripten_glDrawArraysInstancedBaseInstanceWEBGL: function(a, b, c, d, e) {
                U.Ya.drawArraysInstancedBaseInstanceWEBGL(a, b, c, d, e);
            },
            emscripten_glDrawBuffers: function(a, b) {
                for(var c = Sd[a], d = 0; d < a; d++)c[d] = B[b + 4 * d >> 2];
                U.drawBuffers(c);
            },
            emscripten_glDrawElements: Td,
            emscripten_glDrawElementsInstanced: function(a, b, c, d, e) {
                U.drawElementsInstanced(a, b, c, d, e);
            },
            emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL: function(a, b, c, d, e, f, g) {
                U.Ya.drawElementsInstancedBaseVertexBaseInstanceWEBGL(a, b, c, d, e, f, g);
            },
            emscripten_glDrawRangeElements: function(a, b, c, d, e, f) {
                Td(a, d, e, f);
            },
            emscripten_glEnable: function(a) {
                U.enable(a);
            },
            emscripten_glEnableVertexAttribArray: function(a) {
                U.enableVertexAttribArray(a);
            },
            emscripten_glFenceSync: function(a, b) {
                return (a = U.fenceSync(a, b)) ? (b = ia(Kd), a.name = b, Kd[b] = a, b) : 0;
            },
            emscripten_glFinish: function() {
                U.finish();
            },
            emscripten_glFlush: function() {
                U.flush();
            },
            emscripten_glFramebufferRenderbuffer: function(a, b, c, d) {
                U.framebufferRenderbuffer(a, b, c, Fd[d]);
            },
            emscripten_glFramebufferTexture2D: function(a, b, c, d, e) {
                U.framebufferTexture2D(a, b, c, Gd[d], e);
            },
            emscripten_glFrontFace: function(a) {
                U.frontFace(a);
            },
            emscripten_glGenBuffers: function(a, b) {
                Ud(a, b, "createBuffer", Cd);
            },
            emscripten_glGenFramebuffers: function(a, b) {
                Ud(a, b, "createFramebuffer", Ed);
            },
            emscripten_glGenRenderbuffers: function(a, b) {
                Ud(a, b, "createRenderbuffer", Fd);
            },
            emscripten_glGenSamplers: function(a, b) {
                Ud(a, b, "createSampler", Jd);
            },
            emscripten_glGenTextures: function(a, b) {
                Ud(a, b, "createTexture", Gd);
            },
            emscripten_glGenVertexArrays: Vd,
            emscripten_glGenVertexArraysOES: Vd,
            emscripten_glGenerateMipmap: function(a) {
                U.generateMipmap(a);
            },
            emscripten_glGetBufferParameteriv: function(a, b, c) {
                c ? B[c >> 2] = U.getBufferParameter(a, b) : S(1281);
            },
            emscripten_glGetError: function() {
                var a = U.getError() || Od;
                Od = 0;
                return a;
            },
            emscripten_glGetFramebufferAttachmentParameteriv: function(a, b, c, d) {
                a = U.getFramebufferAttachmentParameter(a, b, c);
                if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture) a = a.name | 0;
                B[d >> 2] = a;
            },
            emscripten_glGetIntegerv: Xd,
            emscripten_glGetProgramInfoLog: function(a, b, c, d) {
                a = U.getProgramInfoLog(Dd[a]);
                null === a && (a = "(unknown error)");
                b = 0 < b && d ? hb(a, w, d, b) : 0;
                c && (B[c >> 2] = b);
            },
            emscripten_glGetProgramiv: function(a, b, c) {
                if (c) {
                    if (a >= Bd) S(1281);
                    else {
                        if (a = Dd[a], 35716 == b) a = U.getProgramInfoLog(a), null === a && (a = "(unknown error)"), B[c >> 2] = a.length + 1;
                        else if (35719 == b) {
                            if (!a.za) for(b = 0; b < U.getProgramParameter(a, 35718); ++b)a.za = Math.max(a.za, U.getActiveUniform(a, b).name.length + 1);
                            B[c >> 2] = a.za;
                        } else if (35722 == b) {
                            if (!a.xa) for(b = 0; b < U.getProgramParameter(a, 35721); ++b)a.xa = Math.max(a.xa, U.getActiveAttrib(a, b).name.length + 1);
                            B[c >> 2] = a.xa;
                        } else if (35381 == b) {
                            if (!a.ya) for(b = 0; b < U.getProgramParameter(a, 35382); ++b)a.ya = Math.max(a.ya, U.getActiveUniformBlockName(a, b).length + 1);
                            B[c >> 2] = a.ya;
                        } else B[c >> 2] = U.getProgramParameter(a, b);
                    }
                } else S(1281);
            },
            emscripten_glGetRenderbufferParameteriv: function(a, b, c) {
                c ? B[c >> 2] = U.getRenderbufferParameter(a, b) : S(1281);
            },
            emscripten_glGetShaderInfoLog: function(a, b, c, d) {
                a = U.getShaderInfoLog(Hd[a]);
                null === a && (a = "(unknown error)");
                b = 0 < b && d ? hb(a, w, d, b) : 0;
                c && (B[c >> 2] = b);
            },
            emscripten_glGetShaderPrecisionFormat: function(a, b, c, d) {
                a = U.getShaderPrecisionFormat(a, b);
                B[c >> 2] = a.rangeMin;
                B[c + 4 >> 2] = a.rangeMax;
                B[d >> 2] = a.precision;
            },
            emscripten_glGetShaderiv: function(a, b, c) {
                c ? 35716 == b ? (a = U.getShaderInfoLog(Hd[a]), null === a && (a = "(unknown error)"), B[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = U.getShaderSource(Hd[a]), B[c >> 2] = a ? a.length + 1 : 0) : B[c >> 2] = U.getShaderParameter(Hd[a], b) : S(1281);
            },
            emscripten_glGetString: function(a) {
                var b = Ld[a];
                if (!b) {
                    switch(a){
                        case 7939:
                            b = U.getSupportedExtensions() || [];
                            b = b.concat(b.map(function(d) {
                                return "GL_" + d;
                            }));
                            b = Zd(b.join(" "));
                            break;
                        case 7936:
                        case 7937:
                        case 37445:
                        case 37446:
                            (b = U.getParameter(a)) || S(1280);
                            b = b && Zd(b);
                            break;
                        case 7938:
                            b = U.getParameter(7938);
                            b = 2 <= T.version ? "OpenGL ES 3.0 (" + b + ")" : "OpenGL ES 2.0 (" + b + ")";
                            b = Zd(b);
                            break;
                        case 35724:
                            b = U.getParameter(35724);
                            var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                            null !== c && (3 == c[1].length && (c[1] += "0"), b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                            b = Zd(b);
                            break;
                        default:
                            S(1280);
                    }
                    Ld[a] = b;
                }
                return b;
            },
            emscripten_glGetStringi: function(a, b) {
                if (2 > T.version) return S(1282), 0;
                var c = Md[a];
                if (c) return 0 > b || b >= c.length ? (S(1281), 0) : c[b];
                switch(a){
                    case 7939:
                        return c = U.getSupportedExtensions() || [], c = c.concat(c.map(function(d) {
                            return "GL_" + d;
                        })), c = c.map(function(d) {
                            return Zd(d);
                        }), c = Md[a] = c, 0 > b || b >= c.length ? (S(1281), 0) : c[b];
                    default:
                        return S(1280), 0;
                }
            },
            emscripten_glGetUniformLocation: function(a, b) {
                b = b ? F(w, b) : "";
                if (a = Dd[a]) {
                    var c = a, d = c.ma, e = c.ub, f;
                    if (!d) for(c.ma = d = {}, c.tb = {}, f = 0; f < U.getProgramParameter(c, 35718); ++f){
                        var g = U.getActiveUniform(c, f);
                        var k = g.name;
                        g = g.size;
                        var q = $d(k);
                        q = 0 < q ? k.slice(0, q) : k;
                        var n = c.Sa;
                        c.Sa += g;
                        e[q] = [
                            g,
                            n
                        ];
                        for(k = 0; k < g; ++k)d[n] = k, c.tb[n++] = q;
                    }
                    c = a.ma;
                    d = 0;
                    e = b;
                    f = $d(b);
                    0 < f && (d = parseInt(b.slice(f + 1)) >>> 0, e = b.slice(0, f));
                    if ((e = a.ub[e]) && d < e[0] && (d += e[1], c[d] = c[d] || U.getUniformLocation(a, b))) return d;
                } else S(1281);
                return -1;
            },
            emscripten_glInvalidateFramebuffer: function(a, b, c) {
                for(var d = Sd[b], e = 0; e < b; e++)d[e] = B[c + 4 * e >> 2];
                U.invalidateFramebuffer(a, d);
            },
            emscripten_glInvalidateSubFramebuffer: function(a, b, c, d, e, f, g) {
                for(var k = Sd[b], q = 0; q < b; q++)k[q] = B[c + 4 * q >> 2];
                U.invalidateSubFramebuffer(a, k, d, e, f, g);
            },
            emscripten_glIsSync: function(a) {
                return U.isSync(Kd[a]);
            },
            emscripten_glIsTexture: function(a) {
                return (a = Gd[a]) ? U.isTexture(a) : 0;
            },
            emscripten_glLineWidth: function(a) {
                U.lineWidth(a);
            },
            emscripten_glLinkProgram: function(a) {
                a = Dd[a];
                U.linkProgram(a);
                a.ma = 0;
                a.ub = {};
            },
            emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL: function(a, b, c, d, e, f) {
                U.gb.multiDrawArraysInstancedBaseInstanceWEBGL(a, B, b >> 2, B, c >> 2, B, d >> 2, D, e >> 2, f);
            },
            emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL: function(a, b, c, d, e, f, g, k) {
                U.gb.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(a, B, b >> 2, c, B, d >> 2, B, e >> 2, B, f >> 2, D, g >> 2, k);
            },
            emscripten_glPixelStorei: function(a, b) {
                3317 == a && (Nd = b);
                U.pixelStorei(a, b);
            },
            emscripten_glReadBuffer: function(a) {
                U.readBuffer(a);
            },
            emscripten_glReadPixels: function(a, b, c, d, e, f, g) {
                if (2 <= T.version) {
                    if (U.Ka) U.readPixels(a, b, c, d, e, f, g);
                    else {
                        var k = ae(f);
                        U.readPixels(a, b, c, d, e, f, k, g >> 31 - Math.clz32(k.BYTES_PER_ELEMENT));
                    }
                } else (g = be(f, e, c, d, g)) ? U.readPixels(a, b, c, d, e, f, g) : S(1280);
            },
            emscripten_glRenderbufferStorage: function(a, b, c, d) {
                U.renderbufferStorage(a, b, c, d);
            },
            emscripten_glRenderbufferStorageMultisample: function(a, b, c, d, e) {
                U.renderbufferStorageMultisample(a, b, c, d, e);
            },
            emscripten_glSamplerParameteri: function(a, b, c) {
                U.samplerParameteri(Jd[a], b, c);
            },
            emscripten_glSamplerParameteriv: function(a, b, c) {
                U.samplerParameteri(Jd[a], b, B[c >> 2]);
            },
            emscripten_glScissor: function(a, b, c, d) {
                U.scissor(a, b, c, d);
            },
            emscripten_glShaderSource: function(a, b, c, d) {
                for(var e = "", f = 0; f < b; ++f){
                    var g = d ? B[d + 4 * f >> 2] : -1, k = B[c + 4 * f >> 2];
                    g = k ? F(w, k, 0 > g ? void 0 : g) : "";
                    e += g;
                }
                U.shaderSource(Hd[a], e);
            },
            emscripten_glStencilFunc: function(a, b, c) {
                U.stencilFunc(a, b, c);
            },
            emscripten_glStencilFuncSeparate: function(a, b, c, d) {
                U.stencilFuncSeparate(a, b, c, d);
            },
            emscripten_glStencilMask: function(a) {
                U.stencilMask(a);
            },
            emscripten_glStencilMaskSeparate: function(a, b) {
                U.stencilMaskSeparate(a, b);
            },
            emscripten_glStencilOp: function(a, b, c) {
                U.stencilOp(a, b, c);
            },
            emscripten_glStencilOpSeparate: function(a, b, c, d) {
                U.stencilOpSeparate(a, b, c, d);
            },
            emscripten_glTexImage2D: function(a, b, c, d, e, f, g, k, q) {
                if (2 <= T.version) {
                    if (U.fa) U.texImage2D(a, b, c, d, e, f, g, k, q);
                    else if (q) {
                        var n = ae(k);
                        U.texImage2D(a, b, c, d, e, f, g, k, n, q >> 31 - Math.clz32(n.BYTES_PER_ELEMENT));
                    } else U.texImage2D(a, b, c, d, e, f, g, k, null);
                } else U.texImage2D(a, b, c, d, e, f, g, k, q ? be(k, g, d, e, q) : null);
            },
            emscripten_glTexParameterf: function(a, b, c) {
                U.texParameterf(a, b, c);
            },
            emscripten_glTexParameterfv: function(a, b, c) {
                U.texParameterf(a, b, E[c >> 2]);
            },
            emscripten_glTexParameteri: function(a, b, c) {
                U.texParameteri(a, b, c);
            },
            emscripten_glTexParameteriv: function(a, b, c) {
                U.texParameteri(a, b, B[c >> 2]);
            },
            emscripten_glTexStorage2D: function(a, b, c, d, e) {
                U.texStorage2D(a, b, c, d, e);
            },
            emscripten_glTexSubImage2D: function(a, b, c, d, e, f, g, k, q) {
                if (2 <= T.version) {
                    if (U.fa) U.texSubImage2D(a, b, c, d, e, f, g, k, q);
                    else if (q) {
                        var n = ae(k);
                        U.texSubImage2D(a, b, c, d, e, f, g, k, n, q >> 31 - Math.clz32(n.BYTES_PER_ELEMENT));
                    } else U.texSubImage2D(a, b, c, d, e, f, g, k, null);
                } else n = null, q && (n = be(k, g, e, f, q)), U.texSubImage2D(a, b, c, d, e, f, g, k, n);
            },
            emscripten_glUniform1f: function(a, b) {
                U.uniform1f(V(a), b);
            },
            emscripten_glUniform1fv: function(a, b, c) {
                if (2 <= T.version) b && U.uniform1fv(V(a), E, c >> 2, b);
                else {
                    if (288 >= b) for(var d = ce[b - 1], e = 0; e < b; ++e)d[e] = E[c + 4 * e >> 2];
                    else d = E.subarray(c >> 2, c + 4 * b >> 2);
                    U.uniform1fv(V(a), d);
                }
            },
            emscripten_glUniform1i: function(a, b) {
                U.uniform1i(V(a), b);
            },
            emscripten_glUniform1iv: function(a, b, c) {
                if (2 <= T.version) b && U.uniform1iv(V(a), B, c >> 2, b);
                else {
                    if (288 >= b) for(var d = de[b - 1], e = 0; e < b; ++e)d[e] = B[c + 4 * e >> 2];
                    else d = B.subarray(c >> 2, c + 4 * b >> 2);
                    U.uniform1iv(V(a), d);
                }
            },
            emscripten_glUniform2f: function(a, b, c) {
                U.uniform2f(V(a), b, c);
            },
            emscripten_glUniform2fv: function(a, b, c) {
                if (2 <= T.version) b && U.uniform2fv(V(a), E, c >> 2, 2 * b);
                else {
                    if (144 >= b) for(var d = ce[2 * b - 1], e = 0; e < 2 * b; e += 2)d[e] = E[c + 4 * e >> 2], d[e + 1] = E[c + (4 * e + 4) >> 2];
                    else d = E.subarray(c >> 2, c + 8 * b >> 2);
                    U.uniform2fv(V(a), d);
                }
            },
            emscripten_glUniform2i: function(a, b, c) {
                U.uniform2i(V(a), b, c);
            },
            emscripten_glUniform2iv: function(a, b, c) {
                if (2 <= T.version) b && U.uniform2iv(V(a), B, c >> 2, 2 * b);
                else {
                    if (144 >= b) for(var d = de[2 * b - 1], e = 0; e < 2 * b; e += 2)d[e] = B[c + 4 * e >> 2], d[e + 1] = B[c + (4 * e + 4) >> 2];
                    else d = B.subarray(c >> 2, c + 8 * b >> 2);
                    U.uniform2iv(V(a), d);
                }
            },
            emscripten_glUniform3f: function(a, b, c, d) {
                U.uniform3f(V(a), b, c, d);
            },
            emscripten_glUniform3fv: function(a, b, c) {
                if (2 <= T.version) b && U.uniform3fv(V(a), E, c >> 2, 3 * b);
                else {
                    if (96 >= b) for(var d = ce[3 * b - 1], e = 0; e < 3 * b; e += 3)d[e] = E[c + 4 * e >> 2], d[e + 1] = E[c + (4 * e + 4) >> 2], d[e + 2] = E[c + (4 * e + 8) >> 2];
                    else d = E.subarray(c >> 2, c + 12 * b >> 2);
                    U.uniform3fv(V(a), d);
                }
            },
            emscripten_glUniform3i: function(a, b, c, d) {
                U.uniform3i(V(a), b, c, d);
            },
            emscripten_glUniform3iv: function(a, b, c) {
                if (2 <= T.version) b && U.uniform3iv(V(a), B, c >> 2, 3 * b);
                else {
                    if (96 >= b) for(var d = de[3 * b - 1], e = 0; e < 3 * b; e += 3)d[e] = B[c + 4 * e >> 2], d[e + 1] = B[c + (4 * e + 4) >> 2], d[e + 2] = B[c + (4 * e + 8) >> 2];
                    else d = B.subarray(c >> 2, c + 12 * b >> 2);
                    U.uniform3iv(V(a), d);
                }
            },
            emscripten_glUniform4f: function(a, b, c, d, e) {
                U.uniform4f(V(a), b, c, d, e);
            },
            emscripten_glUniform4fv: function(a, b, c) {
                if (2 <= T.version) b && U.uniform4fv(V(a), E, c >> 2, 4 * b);
                else {
                    if (72 >= b) {
                        var d = ce[4 * b - 1], e = E;
                        c >>= 2;
                        for(var f = 0; f < 4 * b; f += 4){
                            var g = c + f;
                            d[f] = e[g];
                            d[f + 1] = e[g + 1];
                            d[f + 2] = e[g + 2];
                            d[f + 3] = e[g + 3];
                        }
                    } else d = E.subarray(c >> 2, c + 16 * b >> 2);
                    U.uniform4fv(V(a), d);
                }
            },
            emscripten_glUniform4i: function(a, b, c, d, e) {
                U.uniform4i(V(a), b, c, d, e);
            },
            emscripten_glUniform4iv: function(a, b, c) {
                if (2 <= T.version) b && U.uniform4iv(V(a), B, c >> 2, 4 * b);
                else {
                    if (72 >= b) for(var d = de[4 * b - 1], e = 0; e < 4 * b; e += 4)d[e] = B[c + 4 * e >> 2], d[e + 1] = B[c + (4 * e + 4) >> 2], d[e + 2] = B[c + (4 * e + 8) >> 2], d[e + 3] = B[c + (4 * e + 12) >> 2];
                    else d = B.subarray(c >> 2, c + 16 * b >> 2);
                    U.uniform4iv(V(a), d);
                }
            },
            emscripten_glUniformMatrix2fv: function(a, b, c, d) {
                if (2 <= T.version) b && U.uniformMatrix2fv(V(a), !!c, E, d >> 2, 4 * b);
                else {
                    if (72 >= b) for(var e = ce[4 * b - 1], f = 0; f < 4 * b; f += 4)e[f] = E[d + 4 * f >> 2], e[f + 1] = E[d + (4 * f + 4) >> 2], e[f + 2] = E[d + (4 * f + 8) >> 2], e[f + 3] = E[d + (4 * f + 12) >> 2];
                    else e = E.subarray(d >> 2, d + 16 * b >> 2);
                    U.uniformMatrix2fv(V(a), !!c, e);
                }
            },
            emscripten_glUniformMatrix3fv: function(a, b, c, d) {
                if (2 <= T.version) b && U.uniformMatrix3fv(V(a), !!c, E, d >> 2, 9 * b);
                else {
                    if (32 >= b) for(var e = ce[9 * b - 1], f = 0; f < 9 * b; f += 9)e[f] = E[d + 4 * f >> 2], e[f + 1] = E[d + (4 * f + 4) >> 2], e[f + 2] = E[d + (4 * f + 8) >> 2], e[f + 3] = E[d + (4 * f + 12) >> 2], e[f + 4] = E[d + (4 * f + 16) >> 2], e[f + 5] = E[d + (4 * f + 20) >> 2], e[f + 6] = E[d + (4 * f + 24) >> 2], e[f + 7] = E[d + (4 * f + 28) >> 2], e[f + 8] = E[d + (4 * f + 32) >> 2];
                    else e = E.subarray(d >> 2, d + 36 * b >> 2);
                    U.uniformMatrix3fv(V(a), !!c, e);
                }
            },
            emscripten_glUniformMatrix4fv: function(a, b, c, d) {
                if (2 <= T.version) b && U.uniformMatrix4fv(V(a), !!c, E, d >> 2, 16 * b);
                else {
                    if (18 >= b) {
                        var e = ce[16 * b - 1], f = E;
                        d >>= 2;
                        for(var g = 0; g < 16 * b; g += 16){
                            var k = d + g;
                            e[g] = f[k];
                            e[g + 1] = f[k + 1];
                            e[g + 2] = f[k + 2];
                            e[g + 3] = f[k + 3];
                            e[g + 4] = f[k + 4];
                            e[g + 5] = f[k + 5];
                            e[g + 6] = f[k + 6];
                            e[g + 7] = f[k + 7];
                            e[g + 8] = f[k + 8];
                            e[g + 9] = f[k + 9];
                            e[g + 10] = f[k + 10];
                            e[g + 11] = f[k + 11];
                            e[g + 12] = f[k + 12];
                            e[g + 13] = f[k + 13];
                            e[g + 14] = f[k + 14];
                            e[g + 15] = f[k + 15];
                        }
                    } else e = E.subarray(d >> 2, d + 64 * b >> 2);
                    U.uniformMatrix4fv(V(a), !!c, e);
                }
            },
            emscripten_glUseProgram: function(a) {
                a = Dd[a];
                U.useProgram(a);
                U.Gb = a;
            },
            emscripten_glVertexAttrib1f: function(a, b) {
                U.vertexAttrib1f(a, b);
            },
            emscripten_glVertexAttrib2fv: function(a, b) {
                U.vertexAttrib2f(a, E[b >> 2], E[b + 4 >> 2]);
            },
            emscripten_glVertexAttrib3fv: function(a, b) {
                U.vertexAttrib3f(a, E[b >> 2], E[b + 4 >> 2], E[b + 8 >> 2]);
            },
            emscripten_glVertexAttrib4fv: function(a, b) {
                U.vertexAttrib4f(a, E[b >> 2], E[b + 4 >> 2], E[b + 8 >> 2], E[b + 12 >> 2]);
            },
            emscripten_glVertexAttribDivisor: function(a, b) {
                U.vertexAttribDivisor(a, b);
            },
            emscripten_glVertexAttribIPointer: function(a, b, c, d, e) {
                U.vertexAttribIPointer(a, b, c, d, e);
            },
            emscripten_glVertexAttribPointer: function(a, b, c, d, e, f) {
                U.vertexAttribPointer(a, b, c, !!d, e, f);
            },
            emscripten_glViewport: function(a, b, c, d) {
                U.viewport(a, b, c, d);
            },
            emscripten_glWaitSync: function(a, b, c, d) {
                U.waitSync(Kd[a], b, (c >>> 0) + 4294967296 * d);
            },
            emscripten_memcpy_big: (a, b, c)=>w.copyWithin(a, b, b + c),
            emscripten_resize_heap: (a)=>{
                var b = w.length;
                a >>>= 0;
                if (2147483648 < a) return !1;
                for(var c = 1; 4 >= c; c *= 2){
                    var d = b * (1 + 0.2 / c);
                    d = Math.min(d, a + 100663296);
                    var e = Math;
                    d = Math.max(a, d);
                    a: {
                        e = e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536) - xa.buffer.byteLength + 65535 >>> 16;
                        try {
                            xa.grow(e);
                            Ba();
                            var f = 1;
                            break a;
                        } catch (g) {}
                        f = void 0;
                    }
                    if (f) return !0;
                }
                return !1;
            },
            emscripten_webgl_get_current_context: function() {
                return T ? T.handle : 0;
            },
            emscripten_webgl_make_context_current: function(a) {
                return la(a) ? 0 : -5;
            },
            environ_get: (a, b)=>{
                var c = 0;
                ge().forEach(function(d, e) {
                    var f = b + c;
                    e = D[a + 4 * e >> 2] = f;
                    for(f = 0; f < d.length; ++f)u[e++ >> 0] = d.charCodeAt(f);
                    u[e >> 0] = 0;
                    c += d.length + 1;
                });
                return 0;
            },
            environ_sizes_get: (a, b)=>{
                var c = ge();
                D[a >> 2] = c.length;
                var d = 0;
                c.forEach(function(e) {
                    d += e.length + 1;
                });
                D[b >> 2] = d;
                return 0;
            },
            fd_close: function(a) {
                try {
                    var b = Mb(a);
                    if (null === b.V) throw new H(8);
                    b.Ma && (b.Ma = null);
                    try {
                        b.m.close && b.m.close(b);
                    } catch (c) {
                        throw c;
                    } finally{
                        yb[b.V] = null;
                    }
                    b.V = null;
                    return 0;
                } catch (c) {
                    if ("undefined" == typeof $b || "ErrnoError" !== c.name) throw c;
                    return c.Z;
                }
            },
            fd_read: function(a, b, c, d) {
                try {
                    a: {
                        var e = Mb(a);
                        a = b;
                        for(var f, g = b = 0; g < c; g++){
                            var k = D[a >> 2], q = D[a + 4 >> 2];
                            a += 8;
                            var n = e, t = k, v = q, y = f, l = u;
                            if (0 > v || 0 > y) throw new H(28);
                            if (null === n.V) throw new H(8);
                            if (1 === (n.flags & 2097155)) throw new H(8);
                            if (16384 === (n.node.mode & 61440)) throw new H(31);
                            if (!n.m.read) throw new H(28);
                            var r = "undefined" != typeof y;
                            if (!r) y = n.position;
                            else if (!n.seekable) throw new H(70);
                            var x = n.m.read(n, l, t, v, y);
                            r || (n.position += x);
                            var z = x;
                            if (0 > z) {
                                var G = -1;
                                break a;
                            }
                            b += z;
                            if (z < q) break;
                            "undefined" !== typeof f && (f += z);
                        }
                        G = b;
                    }
                    D[d >> 2] = G;
                    return 0;
                } catch (C) {
                    if ("undefined" == typeof $b || "ErrnoError" !== C.name) throw C;
                    return C.Z;
                }
            },
            fd_seek: function(a, b, c, d, e) {
                b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
                try {
                    if (isNaN(b)) return 61;
                    var f = Mb(a);
                    Vb(f, b, d);
                    Sa = [
                        f.position >>> 0,
                        (Ra = f.position, 1.0 <= +Math.abs(Ra) ? 0.0 < Ra ? +Math.floor(Ra / 4294967296.0) >>> 0 : ~~+Math.ceil((Ra - +(~~Ra >>> 0)) / 4294967296.0) >>> 0 : 0)
                    ];
                    B[e >> 2] = Sa[0];
                    B[e + 4 >> 2] = Sa[1];
                    f.Ma && 0 === b && 0 === d && (f.Ma = null);
                    return 0;
                } catch (g) {
                    if ("undefined" == typeof $b || "ErrnoError" !== g.name) throw g;
                    return g.Z;
                }
            },
            fd_write: function(a, b, c, d) {
                try {
                    a: {
                        var e = Mb(a);
                        a = b;
                        for(var f, g = b = 0; g < c; g++){
                            var k = D[a >> 2], q = D[a + 4 >> 2];
                            a += 8;
                            var n = e, t = k, v = q, y = f, l = u;
                            if (0 > v || 0 > y) throw new H(28);
                            if (null === n.V) throw new H(8);
                            if (0 === (n.flags & 2097155)) throw new H(8);
                            if (16384 === (n.node.mode & 61440)) throw new H(31);
                            if (!n.m.write) throw new H(28);
                            n.seekable && n.flags & 1024 && Vb(n, 0, 2);
                            var r = "undefined" != typeof y;
                            if (!r) y = n.position;
                            else if (!n.seekable) throw new H(70);
                            var x = n.m.write(n, l, t, v, y, void 0);
                            r || (n.position += x);
                            var z = x;
                            if (0 > z) {
                                var G = -1;
                                break a;
                            }
                            b += z;
                            "undefined" !== typeof f && (f += z);
                        }
                        G = b;
                    }
                    D[d >> 2] = G;
                    return 0;
                } catch (C) {
                    if ("undefined" == typeof $b || "ErrnoError" !== C.name) throw C;
                    return C.Z;
                }
            },
            glBindFramebuffer: Pd,
            glGetIntegerv: Xd,
            invoke_ii: qe,
            invoke_iii: re,
            invoke_iiii: se,
            invoke_iiiii: te,
            invoke_iiiiii: ue,
            invoke_iiiiiii: ve,
            invoke_iiiiiiiiii: we,
            invoke_v: xe,
            invoke_vi: ye,
            invoke_vii: ze,
            invoke_viii: Ae,
            invoke_viiii: Be,
            invoke_viiiiii: Ce,
            invoke_viiiiiii: De,
            invoke_viiiiiiii: Ee,
            strftime_l: (a, b, c, d)=>ke(a, b, c, d)
        };
        (function() {
            function a(c) {
                p = c = c.exports;
                xa = p.memory;
                Ba();
                Ca = p.__indirect_function_table;
                Ea.unshift(p.__wasm_call_ctors);
                Ha--;
                m.monitorRunDependencies && m.monitorRunDependencies(Ha);
                if (0 == Ha && (null !== Ia && (clearInterval(Ia), Ia = null), Ja)) {
                    var d = Ja;
                    Ja = null;
                    d();
                }
                return c;
            }
            var b = {
                env: Fe,
                wasi_snapshot_preview1: Fe
            };
            Ha++;
            m.monitorRunDependencies && m.monitorRunDependencies(Ha);
            if (m.instantiateWasm) try {
                return m.instantiateWasm(b, a);
            } catch (c) {
                ua("Module.instantiateWasm callback failed with error: " + c), ba(c);
            }
            Qa(b, function(c) {
                a(c.instance);
            }).catch(ba);
            return {};
        })();
        var tc = (a)=>(tc = p.free)(a), Yd = (a)=>(Yd = p.malloc)(a), Ta = m._ma_device__on_notification_unlocked = (a)=>(Ta = m._ma_device__on_notification_unlocked = p.ma_device__on_notification_unlocked)(a);
        m._ma_malloc_emscripten = (a, b)=>(m._ma_malloc_emscripten = p.ma_malloc_emscripten)(a, b);
        m._ma_free_emscripten = (a, b)=>(m._ma_free_emscripten = p.ma_free_emscripten)(a, b);
        var Ua = m._ma_device_process_pcm_frames_capture__webaudio = (a, b, c)=>(Ua = m._ma_device_process_pcm_frames_capture__webaudio = p.ma_device_process_pcm_frames_capture__webaudio)(a, b, c), Va = m._ma_device_process_pcm_frames_playback__webaudio = (a, b, c)=>(Va = m._ma_device_process_pcm_frames_playback__webaudio = p.ma_device_process_pcm_frames_playback__webaudio)(a, b, c), pe = ()=>(pe = p.__errno_location)(), sc = (a)=>(sc = p.__getTypeName)(a);
        m.__embind_initialize_bindings = ()=>(m.__embind_initialize_bindings = p._embind_initialize_bindings)();
        var ub = (a, b)=>(ub = p.emscripten_builtin_memalign)(a, b), X = (a, b)=>(X = p.setThrew)(a, b), Y = ()=>(Y = p.stackSave)(), Z = (a)=>(Z = p.stackRestore)(a);
        m.dynCall_iiiij = (a, b, c, d, e, f)=>(m.dynCall_iiiij = p.dynCall_iiiij)(a, b, c, d, e, f);
        m.dynCall_viiij = (a, b, c, d, e, f)=>(m.dynCall_viiij = p.dynCall_viiij)(a, b, c, d, e, f);
        m.dynCall_iiij = (a, b, c, d, e)=>(m.dynCall_iiij = p.dynCall_iiij)(a, b, c, d, e);
        m.dynCall_viij = (a, b, c, d, e)=>(m.dynCall_viij = p.dynCall_viij)(a, b, c, d, e);
        m.dynCall_iiji = (a, b, c, d, e)=>(m.dynCall_iiji = p.dynCall_iiji)(a, b, c, d, e);
        m.dynCall_jiji = (a, b, c, d, e)=>(m.dynCall_jiji = p.dynCall_jiji)(a, b, c, d, e);
        m.dynCall_iiiji = (a, b, c, d, e, f)=>(m.dynCall_iiiji = p.dynCall_iiiji)(a, b, c, d, e, f);
        m.dynCall_iij = (a, b, c, d)=>(m.dynCall_iij = p.dynCall_iij)(a, b, c, d);
        m.dynCall_jii = (a, b, c)=>(m.dynCall_jii = p.dynCall_jii)(a, b, c);
        m.dynCall_viiiiij = (a, b, c, d, e, f, g, k)=>(m.dynCall_viiiiij = p.dynCall_viiiiij)(a, b, c, d, e, f, g, k);
        m.dynCall_viji = (a, b, c, d, e)=>(m.dynCall_viji = p.dynCall_viji)(a, b, c, d, e);
        m.dynCall_ji = (a, b)=>(m.dynCall_ji = p.dynCall_ji)(a, b);
        m.dynCall_vij = (a, b, c, d)=>(m.dynCall_vij = p.dynCall_vij)(a, b, c, d);
        m.dynCall_viijii = (a, b, c, d, e, f, g)=>(m.dynCall_viijii = p.dynCall_viijii)(a, b, c, d, e, f, g);
        m.dynCall_iiiiij = (a, b, c, d, e, f, g)=>(m.dynCall_iiiiij = p.dynCall_iiiiij)(a, b, c, d, e, f, g);
        m.dynCall_iiiiijj = (a, b, c, d, e, f, g, k, q)=>(m.dynCall_iiiiijj = p.dynCall_iiiiijj)(a, b, c, d, e, f, g, k, q);
        m.dynCall_iiiiiijj = (a, b, c, d, e, f, g, k, q, n)=>(m.dynCall_iiiiiijj = p.dynCall_iiiiiijj)(a, b, c, d, e, f, g, k, q, n);
        function qe(a, b) {
            var c = Y();
            try {
                return Q(a)(b);
            } catch (d) {
                Z(c);
                if (d !== d + 0) throw d;
                X(1, 0);
            }
        }
        function ze(a, b, c) {
            var d = Y();
            try {
                Q(a)(b, c);
            } catch (e) {
                Z(d);
                if (e !== e + 0) throw e;
                X(1, 0);
            }
        }
        function ye(a, b) {
            var c = Y();
            try {
                Q(a)(b);
            } catch (d) {
                Z(c);
                if (d !== d + 0) throw d;
                X(1, 0);
            }
        }
        function se(a, b, c, d) {
            var e = Y();
            try {
                return Q(a)(b, c, d);
            } catch (f) {
                Z(e);
                if (f !== f + 0) throw f;
                X(1, 0);
            }
        }
        function Ae(a, b, c, d) {
            var e = Y();
            try {
                Q(a)(b, c, d);
            } catch (f) {
                Z(e);
                if (f !== f + 0) throw f;
                X(1, 0);
            }
        }
        function Be(a, b, c, d, e) {
            var f = Y();
            try {
                Q(a)(b, c, d, e);
            } catch (g) {
                Z(f);
                if (g !== g + 0) throw g;
                X(1, 0);
            }
        }
        function xe(a) {
            var b = Y();
            try {
                Q(a)();
            } catch (c) {
                Z(b);
                if (c !== c + 0) throw c;
                X(1, 0);
            }
        }
        function ve(a, b, c, d, e, f, g) {
            var k = Y();
            try {
                return Q(a)(b, c, d, e, f, g);
            } catch (q) {
                Z(k);
                if (q !== q + 0) throw q;
                X(1, 0);
            }
        }
        function re(a, b, c) {
            var d = Y();
            try {
                return Q(a)(b, c);
            } catch (e) {
                Z(d);
                if (e !== e + 0) throw e;
                X(1, 0);
            }
        }
        function De(a, b, c, d, e, f, g, k) {
            var q = Y();
            try {
                Q(a)(b, c, d, e, f, g, k);
            } catch (n) {
                Z(q);
                if (n !== n + 0) throw n;
                X(1, 0);
            }
        }
        function we(a, b, c, d, e, f, g, k, q, n) {
            var t = Y();
            try {
                return Q(a)(b, c, d, e, f, g, k, q, n);
            } catch (v) {
                Z(t);
                if (v !== v + 0) throw v;
                X(1, 0);
            }
        }
        function te(a, b, c, d, e) {
            var f = Y();
            try {
                return Q(a)(b, c, d, e);
            } catch (g) {
                Z(f);
                if (g !== g + 0) throw g;
                X(1, 0);
            }
        }
        function Ee(a, b, c, d, e, f, g, k, q) {
            var n = Y();
            try {
                Q(a)(b, c, d, e, f, g, k, q);
            } catch (t) {
                Z(n);
                if (t !== t + 0) throw t;
                X(1, 0);
            }
        }
        function ue(a, b, c, d, e, f) {
            var g = Y();
            try {
                return Q(a)(b, c, d, e, f);
            } catch (k) {
                Z(g);
                if (k !== k + 0) throw k;
                X(1, 0);
            }
        }
        function Ce(a, b, c, d, e, f, g) {
            var k = Y();
            try {
                Q(a)(b, c, d, e, f, g);
            } catch (q) {
                Z(k);
                if (q !== q + 0) throw q;
                X(1, 0);
            }
        }
        var Ge;
        Ja = function He() {
            Ge || Ie();
            Ge || (Ja = He);
        };
        function Ie() {
            function a() {
                if (!Ge && (Ge = !0, m.calledRun = !0, !ya)) {
                    m.noFSInit || Xb || (Xb = !0, Wb(), m.stdin = m.stdin, m.stdout = m.stdout, m.stderr = m.stderr, m.stdin ? Zb("stdin", m.stdin) : Sb("/dev/tty", "/dev/stdin"), m.stdout ? Zb("stdout", null, m.stdout) : Sb("/dev/tty", "/dev/stdout"), m.stderr ? Zb("stderr", null, m.stderr) : Sb("/dev/tty1", "/dev/stderr"), Ub("/dev/stdin", 0), Ub("/dev/stdout", 1), Ub("/dev/stderr", 1));
                    Bb = !1;
                    Xa(Ea);
                    aa(m);
                    if (m.onRuntimeInitialized) m.onRuntimeInitialized();
                    if (m.postRun) for("function" == typeof m.postRun && (m.postRun = [
                        m.postRun
                    ]); m.postRun.length;){
                        var b = m.postRun.shift();
                        Fa.unshift(b);
                    }
                    Xa(Fa);
                }
            }
            if (!(0 < Ha)) {
                if (m.preRun) for("function" == typeof m.preRun && (m.preRun = [
                    m.preRun
                ]); m.preRun.length;)Ga();
                Xa(Da);
                0 < Ha || (m.setStatus ? (m.setStatus("Running..."), setTimeout(function() {
                    setTimeout(function() {
                        m.setStatus("");
                    }, 1);
                    a();
                }, 1)) : a());
            }
        }
        if (m.preInit) for("function" == typeof m.preInit && (m.preInit = [
            m.preInit
        ]); 0 < m.preInit.length;)m.preInit.pop()();
        Ie();
        return moduleArg.ready;
    };
})();
exports.default = Rive;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dv4Rb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Needs refactoring.
 */ parcelHelpers.export(exports, "Debug", ()=>Debug);
var _input = require("./Input");
var _inputDefault = parcelHelpers.interopDefault(_input);
class Debug {
    static init(gameCanvas, finalCanvas) {
        Debug.Box = document.getElementById('debug-content');
        Debug.gameCanvas = gameCanvas;
        Debug.finalCanvas = finalCanvas;
    }
    static clear() {
        this.Box.innerHTML = "";
    }
    static add(text) {
        Debug.Box.innerHTML += "<br>" + text;
    }
    static update(deltaTime) {
        Performance.update(deltaTime);
        this.updateDebugInfo();
        if ((0, _inputDefault.default).isKeyDown((0, _input.KeyCode).D)) {
            let debugBoxContainer = document.getElementById('debug');
            if (debugBoxContainer) debugBoxContainer.style.visibility = debugBoxContainer.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }
        if ((0, _inputDefault.default).isKeyDown((0, _input.KeyCode).L)) Performance.downloadCSVOfFPSandMouse();
    }
    static updateDebugInfo() {
        Debug.clear();
        Debug.add(`Canvas Mouse: [${(0, _inputDefault.default).gameMouseX},${(0, _inputDefault.default).gameMouseY}]`);
        Debug.add(`Game Canvas: [${Debug.gameCanvas.width},${Debug.gameCanvas.height}]`);
        Debug.add(`Final Canvas: [${Debug.finalCanvas.width},${Debug.finalCanvas.height}]`);
        Debug.add(`Resolution Scale: [${Debug.finalCanvas.width / Debug.gameCanvas.width}x, ${Debug.finalCanvas.height / Debug.gameCanvas.height}x]`);
        Debug.add(`FPS: ${Performance.FPS}`);
        Debug.add(`Average FPS: ${Performance.averageFPS}`);
    }
    static toggleCrosshair() {
        if (this.crosshair !== null) {
            this.crosshair.remove();
            this.crosshair = null;
            return;
        }
        let html = `
      <style>
          .crosshair-h, .crosshair-v {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: black;
          z-index: 9999;
          }
          .crosshair-h {
          width: 100%;
          height: 2px;
          }
          .crosshair-v {
          width: 2px;
          height: 100%;
          }
      </style>
        <div class="canvas-container">
          <div class="crosshair-h"></div>
          <div class="crosshair-v"></div>
        </div>

      `;
        // Create a new div element
        this.crosshair = document.createElement('div');
        // Set the innerHTML of the new div to our HTML string
        this.crosshair.innerHTML = html;
        // Append the new div to the body
        document.body.appendChild(this.crosshair);
    }
}
Debug.crosshair = null;
exports.default = Debug;
/*
* Crappy AI generated stuff I need to change
*/ class Performance {
    static update(deltaTime) {
        // Calculate delta time and FPS
        let fps = 1 / deltaTime;
        // Update FPS tracking
        Performance.FPSArray.push(fps);
        Performance.mouseClickedArray.push((0, _inputDefault.default).isMouseClicked);
        Performance.mouseUpArray.push((0, _inputDefault.default).isMouseUp);
        Performance.hasMouseMovedArray.push((0, _inputDefault.default).hasMouseMoved);
        if (Performance.FPSArray.length > 10000) {
            Performance.FPSArray = Performance.FPSArray.slice(-100);
            Performance.mouseClickedArray = Performance.mouseClickedArray.slice(-100);
            Performance.mouseUpArray = Performance.mouseUpArray.slice(-100);
            Performance.hasMouseMovedArray = Performance.hasMouseMovedArray.slice(-100);
        }
    }
    static get averageFPS() {
        const last100 = Performance.FPSArray.slice(-100);
        let sum = 0;
        for (let n of last100)sum += n;
        return Math.trunc(sum / last100.length);
    }
    static get FPS() {
        return Math.trunc(Performance.FPSArray[Performance.FPSArray.length - 1]);
    }
    static downloadCSVOfFPSandMouse() {
        // Create CSV header row
        let csv = "FPS,MouseClicked,MouseUp,MouseMoved\n";
        // Add each row of correlated data
        for(let i = 0; i < Performance.FPSArray.length; i++)csv += `${Performance.FPSArray[i]},${Performance.mouseClickedArray[i]},${Performance.mouseUpArray[i]},${Performance.hasMouseMovedArray[i]}\n`;
        let blob = new Blob([
            csv
        ], {
            type: 'text/csv'
        });
        let url = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'fps_mouse_values.csv';
        a.click();
    }
}
Performance.FPSArray = [];
//we also need to keep track of Input.isMouseClicked, Input.isMouseUp, Input.hasMouseMoved to see if there's any correlation
Performance.mouseClickedArray = [];
Performance.mouseUpArray = [];
Performance.hasMouseMovedArray = [];

},{"./Input":"23uan","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hCfrJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RiveStateMachineEntity", ()=>RiveStateMachineEntity);
var _riveSMInput = require("./Parts/RiveSMInput");
var _riveSMInputDefault = parcelHelpers.interopDefault(_riveSMInput);
var _riveEntity = require("./RiveEntity");
var _riveEntityDefault = parcelHelpers.interopDefault(_riveEntity);
var _input = require("../Systems/Input");
var _inputDefault = parcelHelpers.interopDefault(_input);
var _riveLoader = require("./RiveLoader");
var _riveLoaderDefault = parcelHelpers.interopDefault(_riveLoader);
var RiveEventType;
(function(RiveEventType) {
    RiveEventType[RiveEventType["General"] = 128] = "General";
    RiveEventType[RiveEventType["OpenURL"] = 131] = "OpenURL";
    RiveEventType[RiveEventType["Audio"] = 132] = "Audio";
})(RiveEventType || (RiveEventType = {}));
class RiveStateMachineEntity extends (0, _riveEntityDefault.default) {
    constructor(name, artboard, stateMachine){
        super(name, artboard);
        this.inputs = [];
        this._reportedEvents = [];
        this._changedStates = [];
        this.generalEventListeners = [];
        this.openUrlEventListeners = [];
        this.smInstance = new (0, _riveLoaderDefault.default).rive.StateMachineInstance(stateMachine, artboard);
        for(let i = 0; i < this.smInstance.inputCount(); i++){
            let input = this.smInstance.input(i);
            this.inputs.push(new (0, _riveSMInputDefault.default)(input));
        }
    }
    update(deltaTime) {
        this._reportedEvents = [];
        this._changedStates = [];
        let mouseCoords = (0, _inputDefault.default).mouseToArtboardSpace(this);
        //TODO: This is super slow. Only call this shit if within bounding box?
        if ((0, _inputDefault.default).isMouseClicked) this.smInstance.pointerDown(mouseCoords.x, mouseCoords.y);
        if ((0, _inputDefault.default).isMouseUp) this.smInstance.pointerUp(mouseCoords.x, mouseCoords.y);
        if ((0, _inputDefault.default).hasMouseMoved) this.smInstance.pointerMove(mouseCoords.x, mouseCoords.y);
        this.smInstance.advance(deltaTime);
        const reportedEventCount = this.smInstance.reportedEventCount();
        for(let i = 0; i < reportedEventCount; i++){
            const event = this.smInstance.reportedEventAt(i);
            if (event) {
                this._reportedEvents.push(event);
                this.handleEvent(event);
            }
        }
        const stateChangedCount = this.smInstance.stateChangedCount();
        for(let i = 0; i < stateChangedCount; i++){
            const stateName = this.smInstance.stateChangedNameByIndex(i);
            if (stateName) this._changedStates.push(stateName);
        }
        super.update(deltaTime);
    }
    get reportedEvents() {
        return this._reportedEvents;
    }
    get changedStates() {
        return this._changedStates;
    }
    addRiveEventListener(callback) {
        this.generalEventListeners.push(callback);
    }
    addOpenUrlEventListener(callback) {
        this.openUrlEventListeners.push(callback);
    }
    removeRiveEventListener(callback) {
        const index = this.generalEventListeners.indexOf(callback);
        if (index !== -1) this.generalEventListeners.splice(index, 1);
    }
    removeOpenUrlEventListener(callback) {
        const index = this.openUrlEventListeners.indexOf(callback);
        if (index !== -1) this.openUrlEventListeners.splice(index, 1);
    }
    handleEvent(event) {
        if (event.type === RiveEventType.OpenURL) this.openUrlEventListeners.forEach((callback)=>callback(event));
        else this.generalEventListeners.forEach((callback)=>callback(event));
    }
    destroy() {
        this.smInstance.delete();
    }
}
exports.default = RiveStateMachineEntity;

},{"./Parts/RiveSMInput":"gOXZ8","./RiveEntity":"enO6z","../Systems/Input":"23uan","./RiveLoader":"eNCc1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gOXZ8":[function(require,module,exports,__globalThis) {
/**
 * Wrapper class for Rive's SMIInput.
 * Provides a clearer classification of input types and type-safe interactions,
 * replacing magic numbers with meaningful enums and adding runtime type checks.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RiveSMInput", ()=>RiveSMInput);
class RiveSMInput {
    constructor(smiInput){
        this.smiInput = smiInput;
        this.name = smiInput.name;
        this.inputType = this.determineInputType(smiInput.type);
    }
    determineInputType(type) {
        switch(type){
            case 56:
                return RiveSMInput.InputType.Number;
            case 58:
                return RiveSMInput.InputType.Trigger;
            case 59:
                return RiveSMInput.InputType.Boolean;
            default:
                throw new Error(`SMIInput ${this.smiInput.name}: type could not be identified`);
        }
    }
    get value() {
        return this.smiInput.value;
    }
    set value(val) {
        if (this.inputType === RiveSMInput.InputType.Trigger) throw new Error(`SMIInput ${this.smiInput.name}: Cannot set value for a Trigger input`);
        if (this.inputType === RiveSMInput.InputType.Boolean && typeof val !== 'boolean') throw new Error(`SMIInput ${this.smiInput.name}: Expected boolean value for Boolean input`);
        if (this.inputType === RiveSMInput.InputType.Number && typeof val !== 'number') throw new Error(`SMIInput ${this.smiInput.name}: Expected number value for Number input`);
        this.smiInput.value = val;
    }
    fire() {
        if (this.inputType !== RiveSMInput.InputType.Trigger) throw new Error(`SMIInput ${this.smiInput.name}: Tried to fire a non-trigger SMIInput`);
        this.smiInput.fire();
    }
}
RiveSMInput.InputType = {
    Boolean: 'BOOLEAN',
    Number: 'NUMBER',
    Trigger: 'TRIGGER'
};
exports.default = RiveSMInput;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"enO6z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RiveEntity", ()=>RiveEntity);
var _entity = require("../Core/Entity");
var _entityDefault = parcelHelpers.interopDefault(_entity);
var _physics = require("../Systems/Physics");
var _physicsDefault = parcelHelpers.interopDefault(_physics);
var _riveLoader = require("./RiveLoader");
var _riveLoaderDefault = parcelHelpers.interopDefault(_riveLoader);
class RiveEntity extends (0, _entityDefault.default) {
    get frame() {
        let aabb = this.artboard.bounds;
        aabb.minX += this.position.x;
        aabb.maxX += this.position.x;
        aabb.minY += this.position.y;
        aabb.maxY += this.position.y;
        aabb.minX *= this.scale.x;
        aabb.maxX *= this.scale.x;
        aabb.minY *= this.scale.y;
        aabb.maxY *= this.scale.y;
        return aabb;
    }
    get width() {
        return (this.artboard.bounds.maxX - this.artboard.bounds.minX) * this.scale.x;
    }
    get height() {
        return (this.artboard.bounds.maxY - this.artboard.bounds.minY) * this.scale.y;
    }
    constructor(name, artboard){
        super(name);
        this.frameOrigin = false;
        this.fit = (0, _riveLoaderDefault.default).rive.Fit.contain;
        this.alignment = (0, _riveLoaderDefault.default).rive.Alignment.topLeft;
        this.artboard = artboard;
        this.artboard.frameOrigin = this.frameOrigin;
    }
    update(deltaTime) {
        if (this.enabled) this.artboard.advance(deltaTime);
    }
    fixedUpdate(fixedDeltaTime) {
        if (this.physicsBody) {
            if (this.artboard.transformComponent("Root")) this.artboard.transformComponent("Root").rotation = this.physicsBody.GetAngle();
            let targetPos = (0, _physicsDefault.default).toPixelTransform(this.physicsBody.GetPosition());
            this.position.x = targetPos.x - this.width / this.scale.x / 2;
            this.position.y = targetPos.y - this.height / this.scale.y / 2;
        }
    }
    render(renderer) {
        if (!this.enabled) return;
        renderer.save();
        renderer.align(this.fit, this.alignment, this.frame, this.artboard.bounds);
        this.artboard.draw(renderer);
        renderer.restore();
    }
    destroy() {
    //no need to destroy artboards in Rive's WASM.
    }
    setPosition(position) {
        this.position = position;
        if (this.physicsBody) this.physicsBody.SetTransformXY((0, _physicsDefault.default).toPhysicsTransform(this.position).x, (0, _physicsDefault.default).toPhysicsTransform(this.position).y, 0);
    }
}
exports.default = RiveEntity;

},{"../Core/Entity":"2KDnw","../Systems/Physics":"1UraH","./RiveLoader":"eNCc1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2KDnw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vector = require("../Utils/Vector");
var _vectorDefault = parcelHelpers.interopDefault(_vector);
class Entity {
    constructor(name){
        this.enabled = true;
        this.position = new (0, _vectorDefault.default)(0, 0);
        this.scale = new (0, _vectorDefault.default)(1, 1);
        this.rotation = 0;
        this.name = name;
    }
    update(deltaTime) {}
    fixedUpdate(fixedDeltaTime) {}
    destroy() {
    //useful when dealing with RIVE's WASM. It's C++ so it needs cleanup
    }
    initPhysics(body) {
        if (this.physicsBody) throw new Error("Physics already initialized");
        this.physicsBody = body;
    }
    addCollider(shape, density = 1, friction = 0.3, restitution = 0.1) {
        if (!this.physicsBody) throw new Error("Physics not initialized");
        this.physicsBody.CreateFixture({
            shape,
            density,
            friction,
            restitution
        });
    }
}
exports.default = Entity;

},{"../Utils/Vector":"ciqfS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1UraH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _game = require("../Game");
var _gameDefault = parcelHelpers.interopDefault(_game);
var _vector = require("../Utils/Vector");
var _vectorDefault = parcelHelpers.interopDefault(_vector);
var _core = require("@box2d/core");
class Physics {
    static getWorld() {
        if (!(0, _gameDefault.default).isInitiated) throw new Error("Game not initialized");
        const world = (0, _core.b2World).Create(Physics.Gravity);
        const bottomWallShape = Physics.getBoxShape((0, _gameDefault.default).resolution.x, 10);
        const topWallShape = Physics.getBoxShape((0, _gameDefault.default).resolution.x, 10);
        const leftWallShape = Physics.getBoxShape(10, (0, _gameDefault.default).resolution.y);
        const rightWallShape = Physics.getBoxShape(10, (0, _gameDefault.default).resolution.y);
        const bottomWallBody = world.CreateBody(Physics.staticBodyDef);
        const topWallBody = world.CreateBody(Physics.staticBodyDef);
        const leftWallBody = world.CreateBody(Physics.staticBodyDef);
        const rightWallBody = world.CreateBody(Physics.staticBodyDef);
        bottomWallBody.CreateFixture({
            shape: bottomWallShape,
            density: 0,
            friction: 0.3
        });
        topWallBody.CreateFixture({
            shape: topWallShape,
            density: 0,
            friction: 0.3
        });
        leftWallBody.CreateFixture({
            shape: leftWallShape,
            density: 0,
            friction: 0.3
        });
        rightWallBody.CreateFixture({
            shape: rightWallShape,
            density: 0,
            friction: 0.3
        });
        const bottomPos = Physics.toPhysicsTransform(new (0, _vectorDefault.default)((0, _gameDefault.default).resolution.x / 2, (0, _gameDefault.default).resolution.y));
        bottomWallBody.SetTransformXY(bottomPos.x, bottomPos.y, 0);
        const topPos = Physics.toPhysicsTransform(new (0, _vectorDefault.default)((0, _gameDefault.default).resolution.x / 2, 0));
        topWallBody.SetTransformXY(topPos.x, topPos.y, 0);
        const leftPos = Physics.toPhysicsTransform(new (0, _vectorDefault.default)(0, (0, _gameDefault.default).resolution.y / 2));
        leftWallBody.SetTransformXY(leftPos.x, leftPos.y, 0);
        const rightPos = Physics.toPhysicsTransform(new (0, _vectorDefault.default)((0, _gameDefault.default).resolution.x, (0, _gameDefault.default).resolution.y / 2));
        rightWallBody.SetTransformXY(rightPos.x, rightPos.y, 0);
        return world;
    }
    //================================
    //========== CONVERSIONS =========
    //================================
    static pixelToPhysicsScale(n) {
        return n / Physics.PIXELS_PER_METER;
    }
    static physicsToPixelScale(n) {
        return n * Physics.PIXELS_PER_METER;
    }
    static toPhysicsTransform(v) {
        let x = Physics.pixelToPhysicsScale(v.x);
        // Box2D uses a different coordinate system
        let y = v.y; // Game.targetRes.y - v.y;
        y = Physics.pixelToPhysicsScale(v.y);
        return new (0, _core.b2Vec2)(x, y);
    }
    static toPixelTransform(v) {
        let x = Physics.physicsToPixelScale(v.x);
        let y = Physics.physicsToPixelScale(v.y);
        //y = Game.targetRes.y - y;
        return new (0, _vectorDefault.default)(x, y);
    }
    static get staticBodyDef() {
        return {
            type: (0, _core.b2BodyType).b2_staticBody
        };
    }
    static get dynamicBodyDef() {
        return {
            type: (0, _core.b2BodyType).b2_dynamicBody
        };
    }
    static get kinematicBodyDef() {
        return {
            type: (0, _core.b2BodyType).b2_kinematicBody
        };
    }
    static getBoxShape(width = Physics.BOX_SIZE, height = Physics.BOX_SIZE) {
        if (!(0, _gameDefault.default).isInitiated) throw new Error("Game not initialized");
        return new (0, _core.b2PolygonShape)().SetAsBox(Physics.pixelToPhysicsScale(width) / 2, Physics.pixelToPhysicsScale(height) / 2);
    }
}
//================================
//========== SETTINGS ===========
//================================
Physics.VELOCITY_ITERATIONS = 3;
Physics.POSITION_ITERATIONS = 2;
Physics.PIXELS_PER_METER = 30;
Physics.Gravity = new (0, _vectorDefault.default)(0, 9.81);
//================================
//========== UTILS =============
//================================
Physics.stepConfig = {
    velocityIterations: Physics.VELOCITY_ITERATIONS,
    positionIterations: Physics.POSITION_ITERATIONS
};
//================================
//========== COLLIDERS ===============
//================================
Physics.BOX_SIZE = 1;
exports.default = Physics;

},{"../Game":"TyEjs","../Utils/Vector":"ciqfS","@box2d/core":"5BQe1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5BQe1":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2GetBlockSolve = exports.b2SetBlockSolve = exports.b2World = exports.b2BodyType = exports.b2Body = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
__exportStar(require("d6df7f0936402061"), exports);
__exportStar(require("f1473a9ea6573492"), exports);
__exportStar(require("4038f9a60edea96f"), exports);
__exportStar(require("78aa5befc827f6c5"), exports);
__exportStar(require("609d1d39bb77fca9"), exports);
__exportStar(require("db823af9ebdeb91"), exports);
__exportStar(require("644e051366b82f3f"), exports);
__exportStar(require("d6010015fe3f3acb"), exports);
__exportStar(require("c95748d06bb80a39"), exports);
__exportStar(require("9c38aae938986954"), exports);
__exportStar(require("49de8ba56a241810"), exports);
__exportStar(require("f298c78562d541ed"), exports);
__exportStar(require("eab47525a7ee2ee5"), exports);
__exportStar(require("38e0a21fa72f03d7"), exports);
__exportStar(require("21a0a4c65e369e50"), exports);
__exportStar(require("743cac2d217736b2"), exports);
__exportStar(require("4eb45d98dba99824"), exports);
__exportStar(require("a3f1155ef9f62056"), exports);
__exportStar(require("a2c91525573b7e75"), exports);
__exportStar(require("586816ef538efc66"), exports);
__exportStar(require("a5c6e9f2396568e7"), exports);
__exportStar(require("c6c11b98ca814f31"), exports);
var b2_body_1 = require("c124e458d07335da");
Object.defineProperty(exports, "b2Body", {
    enumerable: true,
    get: function() {
        return b2_body_1.b2Body;
    }
});
Object.defineProperty(exports, "b2BodyType", {
    enumerable: true,
    get: function() {
        return b2_body_1.b2BodyType;
    }
});
var b2_world_1 = require("bbfb6080f9f39172");
Object.defineProperty(exports, "b2World", {
    enumerable: true,
    get: function() {
        return b2_world_1.b2World;
    }
});
__exportStar(require("1a6f6c89f28694f4"), exports);
__exportStar(require("42d72592487bd1"), exports);
__exportStar(require("38d75bc1ecb3ff84"), exports);
__exportStar(require("5acc73dde30b72f2"), exports);
__exportStar(require("c33ebce672e2993c"), exports);
var b2_contact_solver_1 = require("b05046eebd5c637e");
Object.defineProperty(exports, "b2SetBlockSolve", {
    enumerable: true,
    get: function() {
        return b2_contact_solver_1.b2SetBlockSolve;
    }
});
Object.defineProperty(exports, "b2GetBlockSolve", {
    enumerable: true,
    get: function() {
        return b2_contact_solver_1.b2GetBlockSolve;
    }
});
__exportStar(require("c5cdb92b54b8706b"), exports);
__exportStar(require("192ac658d7209976"), exports);
__exportStar(require("b59a568fc6e607aa"), exports);
__exportStar(require("afff0ceb3348afe3"), exports);
__exportStar(require("3ba90c76260d334"), exports);
__exportStar(require("b6e8995706a4d355"), exports);
__exportStar(require("e565d57aec7a3a97"), exports);
__exportStar(require("6612a3fea7deb359"), exports);
__exportStar(require("fcc82ad5c2ce5df2"), exports);
__exportStar(require("4d12ca596fc664ed"), exports);
__exportStar(require("d8c80b8d3b416d74"), exports);
__exportStar(require("553bf22661de5ee7"), exports);
__exportStar(require("6adf9a9fdcccfb0"), exports);

},{"d6df7f0936402061":"a1SE4","f1473a9ea6573492":"hZX5U","4038f9a60edea96f":"3MJcc","78aa5befc827f6c5":"cc6XX","609d1d39bb77fca9":"5tBta","db823af9ebdeb91":"cIbnI","644e051366b82f3f":"46sAF","d6010015fe3f3acb":"7dQ45","c95748d06bb80a39":"eLdO6","9c38aae938986954":"daiYW","49de8ba56a241810":"kL16e","f298c78562d541ed":"7DfC6","eab47525a7ee2ee5":"hgu0H","38e0a21fa72f03d7":"iDKyQ","21a0a4c65e369e50":"2odhf","743cac2d217736b2":"1F4NA","4eb45d98dba99824":"6cP2p","a3f1155ef9f62056":"9YwnE","a2c91525573b7e75":"goeYU","586816ef538efc66":"kNv8x","a5c6e9f2396568e7":"kQE36","c6c11b98ca814f31":"1ULEP","c124e458d07335da":"2fDAF","bbfb6080f9f39172":"ePx3X","1a6f6c89f28694f4":"6cbkZ","42d72592487bd1":"eevv5","38d75bc1ecb3ff84":"7MfSP","5acc73dde30b72f2":"6EKpb","c33ebce672e2993c":"i7kJh","b05046eebd5c637e":"7FU5n","c5cdb92b54b8706b":"kS3Lm","192ac658d7209976":"cLWx2","b59a568fc6e607aa":"9lCtr","afff0ceb3348afe3":"h5DdA","3ba90c76260d334":"dNugq","b6e8995706a4d355":"5yHxp","e565d57aec7a3a97":"kwVNE","6612a3fea7deb359":"4rI1j","fcc82ad5c2ce5df2":"8PGWT","4d12ca596fc664ed":"drEGG","d8c80b8d3b416d74":"asMSc","553bf22661de5ee7":"27dFq","6adf9a9fdcccfb0":"e0IeL"}],"a1SE4":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2MakeArray = exports.b2MakeBooleanArray = exports.b2MakeNumberArray = exports.b2_version = exports.b2_angularSleepTolerance = exports.b2_linearSleepTolerance = exports.b2_timeToSleep = exports.b2_toiBaumgarte = exports.b2_baumgarte = exports.b2_maxRotationSquared = exports.b2_maxRotation = exports.b2_maxTranslationSquared = exports.b2_maxTranslation = exports.b2_maxAngularCorrection = exports.b2_maxLinearCorrection = exports.b2_maxTOIContacts = exports.b2_maxSubSteps = exports.b2_polygonRadius = exports.b2_angularSlop = exports.b2_linearSlop = exports.b2_aabbMultiplier = exports.b2_aabbExtension = exports.b2_maxManifoldPoints = exports.b2_epsilon_sq = exports.b2_epsilon = exports.b2_maxFloat = exports.b2Verify = exports.b2Assert = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_settings_1 = require("42e74b6ee225d014");
function b2Assert(condition, message) {
    if (!condition) throw new Error(message);
}
exports.b2Assert = b2Assert;
function b2Verify(value) {
    if (value === null) throw new Error();
    return value;
}
exports.b2Verify = b2Verify;
exports.b2_maxFloat = 1e37; // FLT_MAX instead of Number.MAX_VALUE;
exports.b2_epsilon = 1e-5; // FLT_EPSILON instead of Number.MIN_VALUE;
exports.b2_epsilon_sq = exports.b2_epsilon * exports.b2_epsilon;
// Global tuning constants based on meters-kilograms-seconds (MKS) units.
// Collision
/**
 * The maximum number of contact points between two convex shapes. Do
 * not change this value.
 */ exports.b2_maxManifoldPoints = 2;
/**
 * This is used to fatten AABBs in the dynamic tree. This allows proxies
 * to move by a small amount without triggering a tree adjustment.
 * This is in meters.
 */ exports.b2_aabbExtension = 0.1 * b2_settings_1.b2_lengthUnitsPerMeter;
/**
 * This is used to fatten AABBs in the dynamic tree. This is used to predict
 * the future position based on the current displacement.
 * This is a dimensionless multiplier.
 */ exports.b2_aabbMultiplier = 4;
/**
 * A small length used as a collision and constraint tolerance. Usually it is
 * chosen to be numerically significant, but visually insignificant. In meters.
 */ exports.b2_linearSlop = 0.005 * b2_settings_1.b2_lengthUnitsPerMeter;
/**
 * A small angle used as a collision and constraint tolerance. Usually it is
 * chosen to be numerically significant, but visually insignificant.
 */ exports.b2_angularSlop = 2 / 180 * Math.PI;
/**
 * The radius of the polygon/edge shape skin. This should not be modified. Making
 * this smaller means polygons will have an insufficient buffer for continuous collision.
 * Making it larger may create artifacts for vertex collision.
 */ exports.b2_polygonRadius = 2 * exports.b2_linearSlop;
/** Maximum number of sub-steps per contact in continuous physics simulation. */ exports.b2_maxSubSteps = 8;
// Dynamics
/** Maximum number of contacts to be handled to solve a TOI impact. */ exports.b2_maxTOIContacts = 32;
/**
 * The maximum linear position correction used when solving constraints. This helps to
 * prevent overshoot. Meters.
 */ exports.b2_maxLinearCorrection = 0.2 * b2_settings_1.b2_lengthUnitsPerMeter;
/**
 * The maximum angular position correction used when solving constraints. This helps to
 * prevent overshoot.
 */ exports.b2_maxAngularCorrection = 8 / 180 * Math.PI;
/**
 * The maximum linear translation of a body per step. This limit is very large and is used
 * to prevent numerical problems. You shouldn't need to adjust this. Meters.
 */ exports.b2_maxTranslation = 2 * b2_settings_1.b2_lengthUnitsPerMeter;
exports.b2_maxTranslationSquared = exports.b2_maxTranslation * exports.b2_maxTranslation;
/**
 * The maximum angular velocity of a body. This limit is very large and is used
 * to prevent numerical problems. You shouldn't need to adjust this.
 */ exports.b2_maxRotation = 0.5 * Math.PI;
exports.b2_maxRotationSquared = exports.b2_maxRotation * exports.b2_maxRotation;
/**
 * This scale factor controls how fast overlap is resolved. Ideally this would be 1 so
 * that overlap is removed in one time step. However using values close to 1 often lead
 * to overshoot.
 */ exports.b2_baumgarte = 0.2;
exports.b2_toiBaumgarte = 0.75;
// Sleep
/** The time that a body must be still before it will go to sleep. */ exports.b2_timeToSleep = 0.5;
/** A body cannot sleep if its linear velocity is above this tolerance. */ exports.b2_linearSleepTolerance = 0.01 * b2_settings_1.b2_lengthUnitsPerMeter;
/** A body cannot sleep if its angular velocity is above this tolerance. */ exports.b2_angularSleepTolerance = 2 / 180 * Math.PI;
/**
 * Current version.
 * @see http://en.wikipedia.org/wiki/Software_versioning
 */ exports.b2_version = {
    major: 2,
    minor: 4,
    patch: 1
};
function b2MakeNumberArray(length, init = 0) {
    const result = new Array(length);
    for(let i = 0; i < length; i++)result[i] = init;
    return result;
}
exports.b2MakeNumberArray = b2MakeNumberArray;
function b2MakeBooleanArray(length, init = false) {
    const result = new Array(length);
    for(let i = 0; i < length; i++)result[i] = init;
    return result;
}
exports.b2MakeBooleanArray = b2MakeBooleanArray;
function b2MakeArray(length, Class) {
    const result = new Array(length);
    for(let i = 0; i < length; i++)result[i] = new Class();
    return result;
}
exports.b2MakeArray = b2MakeArray;

},{"42e74b6ee225d014":"hZX5U"}],"hZX5U":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2_maxPolygonVertices = exports.b2_lengthUnitsPerMeter = void 0;
const config_1 = require("afe5956f18de8986");
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// Tunable Constants
/**
 * You can use this to change the length scale used by your game.
 * For example for inches you could use 39.4.
 */ exports.b2_lengthUnitsPerMeter = config_1.settings.lengthUnitsPerMeter;
/**
 * The maximum number of vertices on a convex polygon. You cannot increase
 * this too much because b2BlockAllocator has a maximum object size.
 */ exports.b2_maxPolygonVertices = config_1.settings.maxPolygonVertices;

},{"afe5956f18de8986":"aeMdd"}],"aeMdd":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = exports.settings = void 0;
const defaultSettings = {
    lengthUnitsPerMeter: 1,
    maxPolygonVertices: 8
};
exports.settings = {
    ...defaultSettings
};
function configure(changes) {
    Object.assign(exports.settings, defaultSettings, changes);
}
exports.configure = configure;

},{}],"3MJcc":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2Sweep = exports.b2Transform = exports.b2Rot = exports.b2Mat33 = exports.b2Mat22 = exports.b2Vec3 = exports.b2Vec2 = exports.b2RandomInt = exports.b2RandomFloat = exports.b2Random = exports.b2IsPowerOfTwo = exports.b2NextPowerOfTwo = exports.b2RadToDeg = exports.b2DegToRad = exports.b2Clamp = exports.b2_two_pi = exports.b2_180_over_pi = exports.b2_pi_over_180 = void 0;
const b2_common_1 = require("8457276bd6168fb7");
exports.b2_pi_over_180 = Math.PI / 180;
exports.b2_180_over_pi = 180 / Math.PI;
exports.b2_two_pi = 2 * Math.PI;
function b2Clamp(a, low, high) {
    if (a < low) return low;
    return a > high ? high : a;
}
exports.b2Clamp = b2Clamp;
function b2DegToRad(degrees) {
    return degrees * exports.b2_pi_over_180;
}
exports.b2DegToRad = b2DegToRad;
function b2RadToDeg(radians) {
    return radians * exports.b2_180_over_pi;
}
exports.b2RadToDeg = b2RadToDeg;
/**
 * "Next Largest Power of 2
 * Given a binary integer value x, the next largest power of 2 can be computed by a SWAR algorithm
 * that recursively "folds" the upper bits into the lower bits. This process yields a bit vector with
 * the same most significant 1 as x, but all 1's below it. Adding 1 to that value yields the next
 * largest power of 2. For a 32-bit value:"
 */ function b2NextPowerOfTwo(x) {
    x |= x >> 1;
    x |= x >> 2;
    x |= x >> 4;
    x |= x >> 8;
    x |= x >> 16;
    return x + 1;
}
exports.b2NextPowerOfTwo = b2NextPowerOfTwo;
function b2IsPowerOfTwo(x) {
    return x > 0 && (x & x - 1) === 0;
}
exports.b2IsPowerOfTwo = b2IsPowerOfTwo;
function b2Random() {
    return Math.random() * 2 - 1;
}
exports.b2Random = b2Random;
function b2RandomFloat(lo, hi) {
    return (hi - lo) * Math.random() + lo;
}
exports.b2RandomFloat = b2RandomFloat;
function b2RandomInt(lo, hi) {
    return Math.round((hi - lo) * Math.random() + lo);
}
exports.b2RandomInt = b2RandomInt;
/**
 * A 2D column vector.
 */ class b2Vec2 {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
    Clone() {
        return new b2Vec2(this.x, this.y);
    }
    /**
     * Set this vector to all zeros.
     */ SetZero() {
        this.x = 0;
        this.y = 0;
        return this;
    }
    /**
     * Set this vector to some specified coordinates.
     */ Set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    Copy(other) {
        this.x = other.x;
        this.y = other.y;
        return this;
    }
    /**
     * Add a vector to this vector.
     */ Add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    /**
     * Add a vector to this vector.
     */ AddXY(x, y) {
        this.x += x;
        this.y += y;
        return this;
    }
    /**
     * Subtract a vector from this vector.
     */ Subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    /**
     * Subtract a vector from this vector.
     */ SubtractXY(x, y) {
        this.x -= x;
        this.y -= y;
        return this;
    }
    /**
     * Multiply this vector by a scalar.
     */ Scale(s) {
        this.x *= s;
        this.y *= s;
        return this;
    }
    AddScaled(s, v) {
        this.x += s * v.x;
        this.y += s * v.y;
        return this;
    }
    SubtractScaled(s, v) {
        this.x -= s * v.x;
        this.y -= s * v.y;
        return this;
    }
    /**
     * Perform the dot product on two vectors.
     */ Dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    /**
     * Perform the cross product on two vectors. In 2D this produces a scalar.
     */ Cross(v) {
        return this.x * v.y - this.y * v.x;
    }
    /**
     * Get the length of this vector (the norm).
     */ Length() {
        const { x, y } = this;
        return Math.sqrt(x * x + y * y);
    }
    /**
     * Get the length squared. For performance, use this instead of
     * b2Vec2::Length (if possible).
     */ LengthSquared() {
        const { x, y } = this;
        return x * x + y * y;
    }
    /**
     * Convert this vector into a unit vector. Returns the length.
     */ Normalize() {
        const length = this.Length();
        if (length < b2_common_1.b2_epsilon) return 0;
        const inv_length = 1 / length;
        this.x *= inv_length;
        this.y *= inv_length;
        return length;
    }
    Rotate(radians) {
        const c = Math.cos(radians);
        const s = Math.sin(radians);
        const { x } = this;
        this.x = c * x - s * this.y;
        this.y = s * x + c * this.y;
        return this;
    }
    RotateCosSin(c, s) {
        const { x } = this;
        this.x = c * x - s * this.y;
        this.y = s * x + c * this.y;
        return this;
    }
    /**
     * Does this vector contain finite coordinates?
     */ IsValid() {
        return Number.isFinite(this.x) && Number.isFinite(this.y);
    }
    Abs() {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        return this;
    }
    GetAbs(out) {
        out.x = Math.abs(this.x);
        out.y = Math.abs(this.y);
        return out;
    }
    /**
     * Negate this vector.
     */ Negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    /**
     * Skew this vector such that dot(skew_vec, other) == cross(vec, other)
     */ Skew() {
        const { x } = this;
        this.x = -this.y;
        this.y = x;
        return this;
    }
    static Min(a, b, out) {
        out.x = Math.min(a.x, b.x);
        out.y = Math.min(a.y, b.y);
        return out;
    }
    static Max(a, b, out) {
        out.x = Math.max(a.x, b.x);
        out.y = Math.max(a.y, b.y);
        return out;
    }
    static Clamp(v, lo, hi, out) {
        out.x = b2Clamp(v.x, lo.x, hi.x);
        out.y = b2Clamp(v.y, lo.y, hi.y);
        return out;
    }
    static Rotate(v, radians, out) {
        const v_x = v.x;
        const v_y = v.y;
        const c = Math.cos(radians);
        const s = Math.sin(radians);
        out.x = c * v_x - s * v_y;
        out.y = s * v_x + c * v_y;
        return out;
    }
    /** Perform the dot product on two vectors. */ static Dot(a, b) {
        return a.x * b.x + a.y * b.y;
    }
    /** Perform the cross product on two vectors. In 2D this produces a scalar. */ static Cross(a, b) {
        return a.x * b.y - a.y * b.x;
    }
    /**
     * Perform the cross product on a vector and a scalar. In 2D this produces
     * a vector.
     */ static CrossVec2Scalar(v, s, out) {
        const v_x = v.x;
        out.x = s * v.y;
        out.y = -s * v_x;
        return out;
    }
    static CrossVec2One(v, out) {
        const v_x = v.x;
        out.x = v.y;
        out.y = -v_x;
        return out;
    }
    /**
     * Perform the cross product on a scalar and a vector. In 2D this produces
     * a vector.
     */ static CrossScalarVec2(s, v, out) {
        const v_x = v.x;
        out.x = -s * v.y;
        out.y = s * v_x;
        return out;
    }
    static CrossOneVec2(v, out) {
        const v_x = v.x;
        out.x = -v.y;
        out.y = v_x;
        return out;
    }
    /**
     * Add two vectors component-wise.
     */ static Add(a, b, out) {
        out.x = a.x + b.x;
        out.y = a.y + b.y;
        return out;
    }
    /**
     * Subtract two vectors component-wise.
     */ static Subtract(a, b, out) {
        out.x = a.x - b.x;
        out.y = a.y - b.y;
        return out;
    }
    static Scale(s, v, out) {
        out.x = v.x * s;
        out.y = v.y * s;
        return out;
    }
    static AddScaled(a, s, b, out) {
        out.x = a.x + s * b.x;
        out.y = a.y + s * b.y;
        return out;
    }
    static SubtractScaled(a, s, b, out) {
        out.x = a.x - s * b.x;
        out.y = a.y - s * b.y;
        return out;
    }
    static AddCrossScalarVec2(a, s, v, out) {
        const v_x = v.x;
        out.x = a.x - s * v.y;
        out.y = a.y + s * v_x;
        return out;
    }
    static Mid(a, b, out) {
        out.x = (a.x + b.x) * 0.5;
        out.y = (a.y + b.y) * 0.5;
        return out;
    }
    static Extents(a, b, out) {
        out.x = (b.x - a.x) * 0.5;
        out.y = (b.y - a.y) * 0.5;
        return out;
    }
    static Equals(a, b) {
        return a.x === b.x && a.y === b.y;
    }
    static Distance(a, b) {
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    }
    static DistanceSquared(a, b) {
        return (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
    }
    /**
     * Negate a vector.
     */ static Negate(v, out) {
        out.x = -v.x;
        out.y = -v.y;
        return out;
    }
    static Normalize(v, out) {
        const length_sq = v.x ** 2 + v.y ** 2;
        if (length_sq >= b2_common_1.b2_epsilon_sq) {
            const inv_length = 1 / Math.sqrt(length_sq);
            out.x = inv_length * v.x;
            out.y = inv_length * v.y;
        } else {
            out.x = 0;
            out.y = 0;
        }
        return out;
    }
    /**
     * Skew a vector such that dot(skew_vec, other) == cross(vec, other)
     */ static Skew(v, out) {
        const { x } = v;
        out.x = -v.y;
        out.y = x;
        return out;
    }
}
exports.b2Vec2 = b2Vec2;
b2Vec2.ZERO = new b2Vec2();
b2Vec2.UNITX = new b2Vec2(1, 0);
b2Vec2.UNITY = new b2Vec2(0, 1);
b2Vec2.s_t0 = new b2Vec2();
b2Vec2.s_t1 = new b2Vec2();
b2Vec2.s_t2 = new b2Vec2();
b2Vec2.s_t3 = new b2Vec2();
/**
 * A 2D column vector with 3 elements.
 */ class b2Vec3 {
    constructor(x = 0, y = 0, z = 0){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Clone() {
        return new b2Vec3(this.x, this.y, this.z);
    }
    /**
     * Set this vector to all zeros.
     */ SetZero() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        return this;
    }
    /**
     * Set this vector to some specified coordinates.
     */ Set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    Copy(other) {
        this.x = other.x;
        this.y = other.y;
        this.z = other.z;
        return this;
    }
    /**
     * Negate this vector.
     */ Negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    }
    /**
     * Add a vector to this vector.
     */ Add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    /**
     * Add a vector to this vector.
     */ AddXYZ(x, y, z) {
        this.x += x;
        this.y += y;
        this.z += z;
        return this;
    }
    /**
     * Subtract a vector from this vector.
     */ Subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }
    /**
     * Subtract a vector from this vector.
     */ SubtractXYZ(x, y, z) {
        this.x -= x;
        this.y -= y;
        this.z -= z;
        return this;
    }
    /**
     * Multiply this vector by a scalar.
     */ Scale(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    }
    /**
     * Perform the dot product on two vectors.
     */ static Dot(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }
    /**
     * Perform the cross product on two vectors.
     */ static Cross(a, b, out) {
        const a_x = a.x;
        const a_y = a.y;
        const a_z = a.z;
        const b_x = b.x;
        const b_y = b.y;
        const b_z = b.z;
        out.x = a_y * b_z - a_z * b_y;
        out.y = a_z * b_x - a_x * b_z;
        out.z = a_x * b_y - a_y * b_x;
        return out;
    }
}
exports.b2Vec3 = b2Vec3;
b2Vec3.ZERO = new b2Vec3(0, 0, 0);
b2Vec3.s_t0 = new b2Vec3();
/**
 * A 2-by-2 matrix. Stored in column-major order.
 */ class b2Mat22 {
    constructor(){
        this.ex = new b2Vec2(1, 0);
        this.ey = new b2Vec2(0, 1);
    }
    Clone() {
        return new b2Mat22().Copy(this);
    }
    /**
     * Construct a matrix using columns.
     */ static FromColumns(c1, c2) {
        return new b2Mat22().SetColumns(c1, c2);
    }
    /**
     * Construct a matrix using scalars.
     */ static FromScalars(r1c1, r1c2, r2c1, r2c2) {
        return new b2Mat22().SetScalars(r1c1, r1c2, r2c1, r2c2);
    }
    static FromAngle(radians) {
        return new b2Mat22().SetAngle(radians);
    }
    /**
     * Set this matrix using scalars.
     */ SetScalars(r1c1, r1c2, r2c1, r2c2) {
        this.ex.Set(r1c1, r2c1);
        this.ey.Set(r1c2, r2c2);
        return this;
    }
    /**
     * Initialize this matrix using columns.
     */ SetColumns(c1, c2) {
        this.ex.Copy(c1);
        this.ey.Copy(c2);
        return this;
    }
    SetAngle(radians) {
        const c = Math.cos(radians);
        const s = Math.sin(radians);
        this.ex.Set(c, s);
        this.ey.Set(-s, c);
        return this;
    }
    Copy(other) {
        this.ex.Copy(other.ex);
        this.ey.Copy(other.ey);
        return this;
    }
    /**
     * Set this to the identity matrix.
     */ SetIdentity() {
        this.ex.Set(1, 0);
        this.ey.Set(0, 1);
        return this;
    }
    /**
     * Set this matrix to all zeros.
     */ SetZero() {
        this.ex.SetZero();
        this.ey.SetZero();
        return this;
    }
    GetAngle() {
        return Math.atan2(this.ex.y, this.ex.x);
    }
    /**
     * Solve A * x = b, where b is a column vector. This is more efficient
     * than computing the inverse in one-shot cases.
     */ Solve(b_x, b_y, out) {
        const a11 = this.ex.x;
        const a12 = this.ey.x;
        const a21 = this.ex.y;
        const a22 = this.ey.y;
        let det = a11 * a22 - a12 * a21;
        if (det !== 0) det = 1 / det;
        out.x = det * (a22 * b_x - a12 * b_y);
        out.y = det * (a11 * b_y - a21 * b_x);
        return out;
    }
    Abs() {
        this.ex.Abs();
        this.ey.Abs();
        return this;
    }
    Inverse() {
        this.GetInverse(this);
        return this;
    }
    Add(M) {
        this.ex.Add(M.ex);
        this.ey.Add(M.ey);
        return this;
    }
    Subtract(M) {
        this.ex.Subtract(M.ex);
        this.ey.Subtract(M.ey);
        return this;
    }
    GetInverse(out) {
        const a = this.ex.x;
        const b = this.ey.x;
        const c = this.ex.y;
        const d = this.ey.y;
        let det = a * d - b * c;
        if (det !== 0) det = 1 / det;
        out.ex.x = det * d;
        out.ey.x = -det * b;
        out.ex.y = -det * c;
        out.ey.y = det * a;
        return out;
    }
    GetAbs(out) {
        out.ex.x = Math.abs(this.ex.x);
        out.ex.y = Math.abs(this.ex.y);
        out.ey.x = Math.abs(this.ey.x);
        out.ey.y = Math.abs(this.ey.y);
        return out;
    }
    /**
     * Multiply a matrix times a vector. If a rotation matrix is provided,
     * then this transforms the vector from one frame to another.
     */ static MultiplyVec2(M, v, out) {
        const v_x = v.x;
        const v_y = v.y;
        out.x = M.ex.x * v_x + M.ey.x * v_y;
        out.y = M.ex.y * v_x + M.ey.y * v_y;
        return out;
    }
    /**
     * Multiply a matrix transpose times a vector. If a rotation matrix is provided,
     * then this transforms the vector from one frame to another (inverse transform).
     */ static TransposeMultiplyVec2(M, v, out) {
        const v_x = v.x;
        const v_y = v.y;
        out.x = M.ex.x * v_x + M.ex.y * v_y;
        out.y = M.ey.x * v_x + M.ey.y * v_y;
        return out;
    }
    static Add(A, B, out) {
        out.ex.x = A.ex.x + B.ex.x;
        out.ex.y = A.ex.y + B.ex.y;
        out.ey.x = A.ey.x + B.ey.x;
        out.ey.y = A.ey.y + B.ey.y;
        return out;
    }
    /** A * B */ static Multiply(A, B, out) {
        const A_ex_x = A.ex.x;
        const A_ex_y = A.ex.y;
        const A_ey_x = A.ey.x;
        const A_ey_y = A.ey.y;
        const B_ex_x = B.ex.x;
        const B_ex_y = B.ex.y;
        const B_ey_x = B.ey.x;
        const B_ey_y = B.ey.y;
        out.ex.x = A_ex_x * B_ex_x + A_ey_x * B_ex_y;
        out.ex.y = A_ex_y * B_ex_x + A_ey_y * B_ex_y;
        out.ey.x = A_ex_x * B_ey_x + A_ey_x * B_ey_y;
        out.ey.y = A_ex_y * B_ey_x + A_ey_y * B_ey_y;
        return out;
    }
    /** A^T * B */ static TransposeMultiply(A, B, out) {
        const A_ex_x = A.ex.x;
        const A_ex_y = A.ex.y;
        const A_ey_x = A.ey.x;
        const A_ey_y = A.ey.y;
        const B_ex_x = B.ex.x;
        const B_ex_y = B.ex.y;
        const B_ey_x = B.ey.x;
        const B_ey_y = B.ey.y;
        out.ex.x = A_ex_x * B_ex_x + A_ex_y * B_ex_y;
        out.ex.y = A_ey_x * B_ex_x + A_ey_y * B_ex_y;
        out.ey.x = A_ex_x * B_ey_x + A_ex_y * B_ey_y;
        out.ey.y = A_ey_x * B_ey_x + A_ey_y * B_ey_y;
        return out;
    }
}
exports.b2Mat22 = b2Mat22;
b2Mat22.IDENTITY = new b2Mat22();
/**
 * A 3-by-3 matrix. Stored in column-major order.
 */ class b2Mat33 {
    constructor(){
        this.ex = new b2Vec3(1, 0, 0);
        this.ey = new b2Vec3(0, 1, 0);
        this.ez = new b2Vec3(0, 0, 1);
    }
    Clone() {
        return new b2Mat33().Copy(this);
    }
    /**
     * Set this matrix using columns.
     */ SetColumns(c1, c2, c3) {
        this.ex.Copy(c1);
        this.ey.Copy(c2);
        this.ez.Copy(c3);
        return this;
    }
    Copy(other) {
        this.ex.Copy(other.ex);
        this.ey.Copy(other.ey);
        this.ez.Copy(other.ez);
        return this;
    }
    SetIdentity() {
        this.ex.Set(1, 0, 0);
        this.ey.Set(0, 1, 0);
        this.ez.Set(0, 0, 1);
        return this;
    }
    /**
     * Set this matrix to all zeros.
     */ SetZero() {
        this.ex.SetZero();
        this.ey.SetZero();
        this.ez.SetZero();
        return this;
    }
    Add(M) {
        this.ex.Add(M.ex);
        this.ey.Add(M.ey);
        this.ez.Add(M.ez);
        return this;
    }
    /**
     * Solve A * x = b, where b is a column vector. This is more efficient
     * than computing the inverse in one-shot cases.
     */ Solve33(b_x, b_y, b_z, out) {
        const a11 = this.ex.x;
        const a21 = this.ex.y;
        const a31 = this.ex.z;
        const a12 = this.ey.x;
        const a22 = this.ey.y;
        const a32 = this.ey.z;
        const a13 = this.ez.x;
        const a23 = this.ez.y;
        const a33 = this.ez.z;
        let det = a11 * (a22 * a33 - a32 * a23) + a21 * (a32 * a13 - a12 * a33) + a31 * (a12 * a23 - a22 * a13);
        if (det !== 0) det = 1 / det;
        out.x = det * (b_x * (a22 * a33 - a32 * a23) + b_y * (a32 * a13 - a12 * a33) + b_z * (a12 * a23 - a22 * a13));
        out.y = det * (a11 * (b_y * a33 - b_z * a23) + a21 * (b_z * a13 - b_x * a33) + a31 * (b_x * a23 - b_y * a13));
        out.z = det * (a11 * (a22 * b_z - a32 * b_y) + a21 * (a32 * b_x - a12 * b_z) + a31 * (a12 * b_y - a22 * b_x));
        return out;
    }
    /**
     * Solve A * x = b, where b is a column vector. This is more efficient
     * than computing the inverse in one-shot cases. Solve only the upper
     * 2-by-2 matrix equation.
     */ Solve22(b_x, b_y, out) {
        const a11 = this.ex.x;
        const a12 = this.ey.x;
        const a21 = this.ex.y;
        const a22 = this.ey.y;
        let det = a11 * a22 - a12 * a21;
        if (det !== 0) det = 1 / det;
        out.x = det * (a22 * b_x - a12 * b_y);
        out.y = det * (a11 * b_y - a21 * b_x);
        return out;
    }
    /**
     * Get the inverse of this matrix as a 2-by-2.
     * Returns the zero matrix if singular.
     */ GetInverse22(M) {
        const a = this.ex.x;
        const b = this.ey.x;
        const c = this.ex.y;
        const d = this.ey.y;
        let det = a * d - b * c;
        if (det !== 0) det = 1 / det;
        M.ex.x = det * d;
        M.ey.x = -det * b;
        M.ex.z = 0;
        M.ex.y = -det * c;
        M.ey.y = det * a;
        M.ey.z = 0;
        M.ez.x = 0;
        M.ez.y = 0;
        M.ez.z = 0;
    }
    /**
     * Get the symmetric inverse of this matrix as a 3-by-3.
     * Returns the zero matrix if singular.
     */ GetSymInverse33(M) {
        let det = b2Vec3.Dot(this.ex, b2Vec3.Cross(this.ey, this.ez, b2Vec3.s_t0));
        if (det !== 0) det = 1 / det;
        const a11 = this.ex.x;
        const a12 = this.ey.x;
        const a13 = this.ez.x;
        const a22 = this.ey.y;
        const a23 = this.ez.y;
        const a33 = this.ez.z;
        M.ex.x = det * (a22 * a33 - a23 * a23);
        M.ex.y = det * (a13 * a23 - a12 * a33);
        M.ex.z = det * (a12 * a23 - a13 * a22);
        M.ey.x = M.ex.y;
        M.ey.y = det * (a11 * a33 - a13 * a13);
        M.ey.z = det * (a13 * a12 - a11 * a23);
        M.ez.x = M.ex.z;
        M.ez.y = M.ey.z;
        M.ez.z = det * (a11 * a22 - a12 * a12);
    }
    /**
     * Multiply a matrix times a vector.
     */ static MultiplyVec3(A, v, out) {
        const { x, y, z } = v;
        out.x = A.ex.x * x + A.ey.x * y + A.ez.x * z;
        out.y = A.ex.y * x + A.ey.y * y + A.ez.y * z;
        out.z = A.ex.z * x + A.ey.z * y + A.ez.z * z;
        return out;
    }
    /**
     * Multiply a matrix times a vector.
     */ static MultiplyVec2(A, v, out) {
        const { x, y } = v;
        out.x = A.ex.x * x + A.ey.x * y;
        out.y = A.ex.y * x + A.ey.y * y;
        return out;
    }
}
exports.b2Mat33 = b2Mat33;
b2Mat33.IDENTITY = new b2Mat33();
/**
 * Rotation
 */ class b2Rot {
    /**
     * Initialize from an angle in radians
     */ constructor(angle = 0){
        /** Sine */ this.s = 0;
        /** Cosine */ this.c = 1;
        if (angle) {
            this.s = Math.sin(angle);
            this.c = Math.cos(angle);
        }
    }
    Clone() {
        return new b2Rot().Copy(this);
    }
    Copy(other) {
        this.s = other.s;
        this.c = other.c;
        return this;
    }
    /**
     * Set using an angle in radians.
     */ Set(angle) {
        this.s = Math.sin(angle);
        this.c = Math.cos(angle);
        return this;
    }
    /**
     * Set to the identity rotation
     */ SetIdentity() {
        this.s = 0;
        this.c = 1;
        return this;
    }
    /**
     * Get the angle in radians
     */ GetAngle() {
        return Math.atan2(this.s, this.c);
    }
    /**
     * Get the x-axis
     */ GetXAxis(out) {
        out.x = this.c;
        out.y = this.s;
        return out;
    }
    /**
     * Get the u-axis
     */ GetYAxis(out) {
        out.x = -this.s;
        out.y = this.c;
        return out;
    }
    /**
     * Multiply two rotations: q * r
     */ static Multiply(q, r, out) {
        // [qc -qs] * [rc -rs] = [qc*rc-qs*rs -qc*rs-qs*rc]
        // [qs  qc]   [rs  rc]   [qs*rc+qc*rs -qs*rs+qc*rc]
        // s = qs * rc + qc * rs
        // c = qc * rc - qs * rs
        const s = q.s * r.c + q.c * r.s;
        const c = q.c * r.c - q.s * r.s;
        out.s = s;
        out.c = c;
        return out;
    }
    /**
     * Transpose multiply two rotations: qT * r
     */ static TransposeMultiply(q, r, out) {
        // [ qc qs] * [rc -rs] = [qc*rc+qs*rs -qc*rs+qs*rc]
        // [-qs qc]   [rs  rc]   [-qs*rc+qc*rs qs*rs+qc*rc]
        // s = qc * rs - qs * rc
        // c = qc * rc + qs * rs
        const s = q.c * r.s - q.s * r.c;
        const c = q.c * r.c + q.s * r.s;
        out.s = s;
        out.c = c;
        return out;
    }
    /**
     * Rotate a vector
     */ static MultiplyVec2(q, v, out) {
        const v_x = v.x;
        const v_y = v.y;
        out.x = q.c * v_x - q.s * v_y;
        out.y = q.s * v_x + q.c * v_y;
        return out;
    }
    /**
     * Inverse rotate a vector
     */ static TransposeMultiplyVec2(q, v, out) {
        const v_x = v.x;
        const v_y = v.y;
        out.x = q.c * v_x + q.s * v_y;
        out.y = -q.s * v_x + q.c * v_y;
        return out;
    }
}
exports.b2Rot = b2Rot;
b2Rot.IDENTITY = new b2Rot();
/**
 * A transform contains translation and rotation. It is used to represent
 * the position and orientation of rigid frames.
 */ class b2Transform {
    constructor(){
        this.p = new b2Vec2();
        this.q = new b2Rot();
    }
    Clone() {
        return new b2Transform().Copy(this);
    }
    Copy(other) {
        this.p.Copy(other.p);
        this.q.Copy(other.q);
        return this;
    }
    /**
     * Set this to the identity transform.
     */ SetIdentity() {
        this.p.SetZero();
        this.q.SetIdentity();
        return this;
    }
    /**
     * Set this based on the position and rotation.
     */ SetPositionRotation(position, q) {
        this.p.Copy(position);
        this.q.Copy(q);
        return this;
    }
    /**
     * Set this based on the position and angle.
     */ SetPositionAngle(pos, a) {
        this.p.Copy(pos);
        this.q.Set(a);
        return this;
    }
    SetPosition(position) {
        this.p.Copy(position);
        return this;
    }
    SetPositionXY(x, y) {
        this.p.Set(x, y);
        return this;
    }
    SetRotation(rotation) {
        this.q.Copy(rotation);
        return this;
    }
    SetRotationAngle(radians) {
        this.q.Set(radians);
        return this;
    }
    GetPosition() {
        return this.p;
    }
    GetRotation() {
        return this.q;
    }
    GetAngle() {
        return this.q.GetAngle();
    }
    static MultiplyVec2(T, v, out) {
        const v_x = v.x;
        const v_y = v.y;
        out.x = T.q.c * v_x - T.q.s * v_y + T.p.x;
        out.y = T.q.s * v_x + T.q.c * v_y + T.p.y;
        return out;
    }
    static TransposeMultiplyVec2(T, v, out) {
        const px = v.x - T.p.x;
        const py = v.y - T.p.y;
        out.x = T.q.c * px + T.q.s * py;
        out.y = -T.q.s * px + T.q.c * py;
        return out;
    }
    /**
     * v2 = A.q.Rot(B.q.Rot(v1) + B.p) + A.p
     *    = (A.q * B.q).Rot(v1) + A.q.Rot(B.p) + A.p
     */ static Multiply(A, B, out) {
        b2Rot.Multiply(A.q, B.q, out.q);
        b2Rot.MultiplyVec2(A.q, B.p, out.p).Add(A.p);
        return out;
    }
    /**
     * v2 = A.q' * (B.q * v1 + B.p - A.p)
     *    = A.q' * B.q * v1 + A.q' * (B.p - A.p)
     */ static TransposeMultiply(A, B, out) {
        b2Rot.TransposeMultiply(A.q, B.q, out.q);
        b2Rot.TransposeMultiplyVec2(A.q, b2Vec2.Subtract(B.p, A.p, out.p), out.p);
        return out;
    }
}
exports.b2Transform = b2Transform;
b2Transform.IDENTITY = new b2Transform();
/**
 * This describes the motion of a body/shape for TOI computation.
 * Shapes are defined with respect to the body origin, which may
 * no coincide with the center of mass. However, to support dynamics
 * we must interpolate the center of mass position.
 */ class b2Sweep {
    constructor(){
        /** Local center of mass position */ this.localCenter = new b2Vec2();
        /** Center world position at time 0 */ this.c0 = new b2Vec2();
        /** Center world position at time 1 */ this.c = new b2Vec2();
        /** World angle at time 0 */ this.a0 = 0;
        /** World angle at time 1 */ this.a = 0;
        /**
         * Fraction of the current time step in the range [0,1]
         * c0 and a0 are the positions at alpha0.
         */ this.alpha0 = 0;
    }
    Clone() {
        return new b2Sweep().Copy(this);
    }
    Copy(other) {
        this.localCenter.Copy(other.localCenter);
        this.c0.Copy(other.c0);
        this.c.Copy(other.c);
        this.a0 = other.a0;
        this.a = other.a;
        this.alpha0 = other.alpha0;
        return this;
    }
    /**
     * Get the interpolated transform at a specific time.
     *
     * @param transform The output transform
     * @param beta Is a factor in [0,1], where 0 indicates alpha0.
     * @see https://fgiesen.wordpress.com/2012/08/15/linear-interpolation-past-present-and-future/
     */ GetTransform(xf, beta) {
        const oneMinusBeta = 1 - beta;
        xf.p.x = oneMinusBeta * this.c0.x + beta * this.c.x;
        xf.p.y = oneMinusBeta * this.c0.y + beta * this.c.y;
        const angle = oneMinusBeta * this.a0 + beta * this.a;
        xf.q.Set(angle);
        // Shift to origin
        xf.p.Subtract(b2Rot.MultiplyVec2(xf.q, this.localCenter, b2Vec2.s_t0));
        return xf;
    }
    /**
     * Advance the sweep forward, yielding a new initial state.
     *
     * @param alpha The new initial time.
     */ Advance(alpha) {
        // DEBUG: b2Assert(this.alpha0 < 1);
        const beta = (alpha - this.alpha0) / (1 - this.alpha0);
        this.c0.x += beta * (this.c.x - this.c0.x);
        this.c0.y += beta * (this.c.y - this.c0.y);
        this.a0 += beta * (this.a - this.a0);
        this.alpha0 = alpha;
    }
    /**
     * Normalize an angle in radians to be between -pi and pi
     */ Normalize() {
        const d = exports.b2_two_pi * Math.floor(this.a0 / exports.b2_two_pi);
        this.a0 -= d;
        this.a -= d;
    }
}
exports.b2Sweep = b2Sweep;

},{"8457276bd6168fb7":"a1SE4"}],"cc6XX":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debugColors = exports.b2Color = void 0;
/**
 * Color for debug drawing. Each value has the range [0,1].
 */ class b2Color {
    constructor(r = 0.5, g = 0.5, b = 0.5, a = 1){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    Clone() {
        return new b2Color(this.r, this.g, this.b, this.a);
    }
    Copy(other) {
        this.r = other.r;
        this.g = other.g;
        this.b = other.b;
        this.a = other.a;
        return this;
    }
    IsEqual(color) {
        return this.r === color.r && this.g === color.g && this.b === color.b && this.a === color.a;
    }
    IsZero() {
        return this.r === 0 && this.g === 0 && this.b === 0 && this.a === 0;
    }
    SetByteRGB(r, g, b) {
        this.r = r / 0xff;
        this.g = g / 0xff;
        this.b = b / 0xff;
        return this;
    }
    SetByteRGBA(r, g, b, a) {
        this.r = r / 0xff;
        this.g = g / 0xff;
        this.b = b / 0xff;
        this.a = a / 0xff;
        return this;
    }
    SetRGB(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        return this;
    }
    SetRGBA(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        return this;
    }
    Add(color) {
        this.r += color.r;
        this.g += color.g;
        this.b += color.b;
        this.a += color.a;
        return this;
    }
    Subtract(color) {
        this.r -= color.r;
        this.g -= color.g;
        this.b -= color.b;
        this.a -= color.a;
        return this;
    }
    Scale(s) {
        this.r *= s;
        this.g *= s;
        this.b *= s;
        this.a *= s;
        return this;
    }
    Mix(mixColor, strength) {
        b2Color.MixColors(this, mixColor, strength);
    }
    static Add(colorA, colorB, out) {
        out.r = colorA.r + colorB.r;
        out.g = colorA.g + colorB.g;
        out.b = colorA.b + colorB.b;
        out.a = colorA.a + colorB.a;
        return out;
    }
    static Subtract(colorA, colorB, out) {
        out.r = colorA.r - colorB.r;
        out.g = colorA.g - colorB.g;
        out.b = colorA.b - colorB.b;
        out.a = colorA.a - colorB.a;
        return out;
    }
    static Scale(color, s, out) {
        out.r = color.r * s;
        out.g = color.g * s;
        out.b = color.b * s;
        out.a = color.a * s;
        return out;
    }
    static MixColors(colorA, colorB, strength) {
        const dr = strength * (colorB.r - colorA.r);
        const dg = strength * (colorB.g - colorA.g);
        const db = strength * (colorB.b - colorA.b);
        const da = strength * (colorB.a - colorA.a);
        colorA.r += dr;
        colorA.g += dg;
        colorA.b += db;
        colorA.a += da;
        colorB.r -= dr;
        colorB.g -= dg;
        colorB.b -= db;
        colorB.a -= da;
    }
}
exports.b2Color = b2Color;
b2Color.ZERO = new b2Color(0, 0, 0, 0);
b2Color.RED = new b2Color(1, 0, 0);
b2Color.GREEN = new b2Color(0, 1, 0);
b2Color.BLUE = new b2Color(0, 0, 1);
b2Color.WHITE = new b2Color(1, 1, 1);
b2Color.BLACK = new b2Color(0, 0, 0);
exports.debugColors = {
    badBody: new b2Color(1, 0, 0),
    disabledBody: new b2Color(0.5, 0.5, 0.3),
    staticBody: new b2Color(0.5, 0.9, 0.5),
    kinematicBody: new b2Color(0.5, 0.5, 0.9),
    sleepingBody: new b2Color(0.6, 0.6, 0.6),
    body: new b2Color(0.9, 0.7, 0.7),
    pair: new b2Color(0.3, 0.9, 0.9),
    aabb: new b2Color(0.9, 0.3, 0.9),
    joint1: new b2Color(0.7, 0.7, 0.7),
    joint2: new b2Color(0.3, 0.9, 0.3),
    joint3: new b2Color(0.9, 0.3, 0.3),
    joint4: new b2Color(0.3, 0.3, 0.9),
    joint5: new b2Color(0.4, 0.4, 0.4),
    joint6: new b2Color(0.5, 0.8, 0.8),
    joint7: new b2Color(0, 1, 0),
    joint8: new b2Color(0.8, 0.8, 0.8),
    rope: new b2Color(0.4, 0.5, 0.7),
    ropePointG: new b2Color(0.1, 0.8, 0.1),
    ropePointD: new b2Color(0.7, 0.2, 0.4)
};

},{}],"5tBta":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DrawCenterOfMasses = exports.DrawAABBs = exports.DrawPairs = exports.DrawJoints = exports.DrawShapes = exports.GetShapeColor = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_math_1 = require("502040490c96d5bb");
const b2_draw_1 = require("b989312d84046b72");
const b2_body_1 = require("be8780de2010d118");
const b2_common_1 = require("808316e352401321");
const temp = {
    cA: new b2_math_1.b2Vec2(),
    cB: new b2_math_1.b2Vec2(),
    vs: (0, b2_common_1.b2MakeArray)(4, b2_math_1.b2Vec2),
    xf: new b2_math_1.b2Transform()
};
function GetShapeColor(b) {
    if (b.GetType() === b2_body_1.b2BodyType.b2_dynamicBody && b.m_mass === 0) return b2_draw_1.debugColors.badBody;
    if (!b.IsEnabled()) return b2_draw_1.debugColors.disabledBody;
    if (b.GetType() === b2_body_1.b2BodyType.b2_staticBody) return b2_draw_1.debugColors.staticBody;
    if (b.GetType() === b2_body_1.b2BodyType.b2_kinematicBody) return b2_draw_1.debugColors.kinematicBody;
    if (!b.IsAwake()) return b2_draw_1.debugColors.sleepingBody;
    return b2_draw_1.debugColors.body;
}
exports.GetShapeColor = GetShapeColor;
function testOverlap(fixture, aabb) {
    for(let i = 0; i < fixture.m_proxyCount; i++){
        if (aabb.TestOverlap(fixture.GetAABB(i))) return true;
    }
    return false;
}
function DrawShapes(draw, world, within) {
    for(let b = world.GetBodyList(); b; b = b.m_next){
        const xf = b.m_xf;
        draw.PushTransform(xf);
        for(let f = b.GetFixtureList(); f; f = f.m_next){
            if (within && !testOverlap(f, within)) continue;
            f.GetShape().Draw(draw, GetShapeColor(b));
        }
        draw.PopTransform(xf);
    }
}
exports.DrawShapes = DrawShapes;
function DrawJoints(draw, world) {
    for(let j = world.GetJointList(); j; j = j.m_next)j.Draw(draw);
}
exports.DrawJoints = DrawJoints;
function DrawPairs(draw, world) {
    for(let contact = world.GetContactList(); contact; contact = contact.m_next){
        const fixtureA = contact.GetFixtureA();
        const fixtureB = contact.GetFixtureB();
        const indexA = contact.GetChildIndexA();
        const indexB = contact.GetChildIndexB();
        const cA = fixtureA.GetAABB(indexA).GetCenter(temp.cA);
        const cB = fixtureB.GetAABB(indexB).GetCenter(temp.cB);
        draw.DrawSegment(cA, cB, b2_draw_1.debugColors.pair);
    }
}
exports.DrawPairs = DrawPairs;
function DrawAABBs(draw, world, within) {
    const { vs } = temp;
    for(let b = world.GetBodyList(); b; b = b.m_next){
        if (!b.IsEnabled()) continue;
        for(let f = b.GetFixtureList(); f; f = f.m_next)for(let i = 0; i < f.m_proxyCount; ++i){
            const { aabb } = f.m_proxies[i].treeNode;
            if (within && !within.TestOverlap(aabb)) continue;
            vs[0].Set(aabb.lowerBound.x, aabb.lowerBound.y);
            vs[1].Set(aabb.upperBound.x, aabb.lowerBound.y);
            vs[2].Set(aabb.upperBound.x, aabb.upperBound.y);
            vs[3].Set(aabb.lowerBound.x, aabb.upperBound.y);
            draw.DrawPolygon(vs, 4, b2_draw_1.debugColors.aabb);
        }
    }
}
exports.DrawAABBs = DrawAABBs;
function DrawCenterOfMasses(draw, world) {
    const { xf } = temp;
    for(let b = world.GetBodyList(); b; b = b.m_next){
        xf.q.Copy(b.m_xf.q);
        xf.p.Copy(b.GetWorldCenter());
        draw.DrawTransform(xf);
    }
}
exports.DrawCenterOfMasses = DrawCenterOfMasses;

},{"502040490c96d5bb":"3MJcc","b989312d84046b72":"cc6XX","be8780de2010d118":"2fDAF","808316e352401321":"a1SE4"}],"2fDAF":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2Body = exports.b2BodyType = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_math_1 = require("45e9480e228b1dd9");
const b2_shape_1 = require("ef6f771d9933d90b");
const b2_fixture_1 = require("cb116381eb6de947");
const b2_common_1 = require("505672b11f3277ac");
/**
 * The body type.
 * static: zero mass, zero velocity, may be manually moved
 * kinematic: zero mass, non-zero velocity set by user, moved by solver
 * dynamic: positive mass, non-zero velocity determined by forces, moved by solver
 */ var b2BodyType;
(function(b2BodyType) {
    b2BodyType[b2BodyType["b2_staticBody"] = 0] = "b2_staticBody";
    b2BodyType[b2BodyType["b2_kinematicBody"] = 1] = "b2_kinematicBody";
    b2BodyType[b2BodyType["b2_dynamicBody"] = 2] = "b2_dynamicBody";
})(b2BodyType || (exports.b2BodyType = b2BodyType = {}));
/**
 * A rigid body. These are created via b2World::CreateBody.
 */ class b2Body {
    /** @internal */ constructor(bd, world){
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        /** @internal */ this.m_type = b2BodyType.b2_staticBody;
        /** @internal */ this.m_islandFlag = false;
        /** @internal */ this.m_awakeFlag = false;
        /** @internal */ this.m_autoSleepFlag = false;
        /** @internal */ this.m_bulletFlag = false;
        /** @internal */ this.m_fixedRotationFlag = false;
        /** @internal */ this.m_enabledFlag = false;
        /** @internal */ this.m_toiFlag = false;
        /** @internal */ this.m_islandIndex = 0;
        /** @internal */ this.m_xf = new b2_math_1.b2Transform(); // the body origin transform
        /** @internal */ this.m_sweep = new b2_math_1.b2Sweep(); // the swept motion for CCD
        /** @internal */ this.m_linearVelocity = new b2_math_1.b2Vec2();
        /** @internal */ this.m_angularVelocity = 0;
        /** @internal */ this.m_force = new b2_math_1.b2Vec2();
        /** @internal */ this.m_torque = 0;
        /** @internal */ this.m_prev = null;
        /** @internal */ this.m_next = null;
        /** @internal */ this.m_fixtureList = null;
        /** @internal */ this.m_fixtureCount = 0;
        /** @internal */ this.m_jointList = null;
        /** @internal */ this.m_contactList = null;
        /** @internal */ this.m_mass = 1;
        /** @internal */ this.m_invMass = 1;
        /**
         * Rotational inertia about the center of mass.
         * @internal
         */ this.m_I = 0;
        /** @internal */ this.m_invI = 0;
        /** @internal */ this.m_linearDamping = 0;
        /** @internal */ this.m_angularDamping = 0;
        /** @internal */ this.m_gravityScale = 1;
        /** @internal */ this.m_sleepTime = 0;
        /** @internal */ this.m_userData = {};
        this.m_bulletFlag = (_a = bd.bullet) !== null && _a !== void 0 ? _a : false;
        this.m_fixedRotationFlag = (_b = bd.fixedRotation) !== null && _b !== void 0 ? _b : false;
        this.m_autoSleepFlag = (_c = bd.allowSleep) !== null && _c !== void 0 ? _c : true;
        if (((_d = bd.awake) !== null && _d !== void 0 ? _d : true) && ((_e = bd.type) !== null && _e !== void 0 ? _e : b2BodyType.b2_staticBody) !== b2BodyType.b2_staticBody) this.m_awakeFlag = true;
        this.m_enabledFlag = (_f = bd.enabled) !== null && _f !== void 0 ? _f : true;
        this.m_world = world;
        this.m_xf.p.Copy((_g = bd.position) !== null && _g !== void 0 ? _g : b2_math_1.b2Vec2.ZERO);
        this.m_xf.q.Set((_h = bd.angle) !== null && _h !== void 0 ? _h : 0);
        this.m_sweep.localCenter.SetZero();
        this.m_sweep.c0.Copy(this.m_xf.p);
        this.m_sweep.c.Copy(this.m_xf.p);
        this.m_sweep.a0 = this.m_sweep.a = this.m_xf.q.GetAngle();
        this.m_sweep.alpha0 = 0;
        this.m_linearVelocity.Copy((_j = bd.linearVelocity) !== null && _j !== void 0 ? _j : b2_math_1.b2Vec2.ZERO);
        this.m_angularVelocity = (_k = bd.angularVelocity) !== null && _k !== void 0 ? _k : 0;
        this.m_linearDamping = (_l = bd.linearDamping) !== null && _l !== void 0 ? _l : 0;
        this.m_angularDamping = (_m = bd.angularDamping) !== null && _m !== void 0 ? _m : 0;
        this.m_gravityScale = (_o = bd.gravityScale) !== null && _o !== void 0 ? _o : 1;
        this.m_force.SetZero();
        this.m_torque = 0;
        this.m_sleepTime = 0;
        this.m_type = (_p = bd.type) !== null && _p !== void 0 ? _p : b2BodyType.b2_staticBody;
        this.m_mass = 0;
        this.m_invMass = 0;
        this.m_I = 0;
        this.m_invI = 0;
        if (bd.userData) this.SetUserData(bd.userData);
        this.m_fixtureList = null;
        this.m_fixtureCount = 0;
    }
    /**
     * Creates a fixture and attach it to this body. Use this function if you need
     * to set some fixture parameters, like friction. Otherwise you can create the
     * fixture directly from a shape.
     * If the density is non-zero, this function automatically updates the mass of the body.
     * Contacts are not created until the next time step.
     *
     * @param def The fixture definition.
     * @warning This function is locked during callbacks.
     */ CreateFixture(def) {
        (0, b2_common_1.b2Assert)(!this.m_world.IsLocked());
        const fixture = new b2_fixture_1.b2Fixture(this, def);
        if (this.m_enabledFlag) {
            const broadPhase = this.m_world.m_contactManager.m_broadPhase;
            fixture.CreateProxies(broadPhase, this.m_xf);
        }
        fixture.m_next = this.m_fixtureList;
        this.m_fixtureList = fixture;
        ++this.m_fixtureCount;
        // Adjust mass properties if needed.
        if (fixture.m_density > 0) this.ResetMassData();
        // Let the world know we have a new fixture. This will cause new contacts
        // to be created at the beginning of the next time step.
        this.m_world.m_newContacts = true;
        return fixture;
    }
    /**
     * Destroy a fixture. This removes the fixture from the broad-phase and
     * destroys all contacts associated with this fixture. This will
     * automatically adjust the mass of the body if the body is dynamic and the
     * fixture has positive density.
     * All fixtures attached to a body are implicitly destroyed when the body is destroyed.
     *
     * @param fixture The fixture to be removed.
     * @warning This function is locked during callbacks.
     */ DestroyFixture(fixture) {
        (0, b2_common_1.b2Assert)(!this.m_world.IsLocked());
        // DEBUG: b2Assert(fixture.m_body === this);
        // Remove the fixture from this body's singly linked list.
        // DEBUG: b2Assert(this.m_fixtureCount > 0);
        let node = this.m_fixtureList;
        let ppF = null;
        // DEBUG: let found = false;
        while(node !== null){
            if (node === fixture) {
                if (ppF) ppF.m_next = fixture.m_next;
                else this.m_fixtureList = fixture.m_next;
                break;
            }
            ppF = node;
            node = node.m_next;
        }
        // You tried to remove a shape that is not attached to this body.
        // DEBUG: b2Assert(found);
        const density = fixture.m_density;
        // Destroy any contacts associated with the fixture.
        let edge = this.m_contactList;
        while(edge){
            const c = edge.contact;
            edge = edge.next;
            const fixtureA = c.GetFixtureA();
            const fixtureB = c.GetFixtureB();
            if (fixture === fixtureA || fixture === fixtureB) // This destroys the contact and removes it from
            // this body's contact list.
            this.m_world.m_contactManager.Destroy(c);
        }
        if (this.m_enabledFlag) {
            const broadPhase = this.m_world.m_contactManager.m_broadPhase;
            fixture.DestroyProxies(broadPhase);
        }
        // fixture.m_body = null;
        fixture.m_next = null;
        --this.m_fixtureCount;
        // Reset the mass data.
        // Reset the mass data
        if (density > 0.0) this.ResetMassData();
    }
    /**
     * Set the position of the body's origin and rotation.
     * This breaks any contacts and wakes the other bodies.
     * Manipulating a body's transform may cause non-physical behavior.
     *
     * @param position The world position of the body's local origin.
     * @param angle The world rotation in radians.
     */ SetTransformVec(position, angle) {
        this.SetTransformXY(position.x, position.y, angle);
    }
    SetTransformXY(x, y, angle) {
        (0, b2_common_1.b2Assert)(!this.m_world.IsLocked());
        this.m_xf.q.Set(angle);
        this.m_xf.p.Set(x, y);
        b2_math_1.b2Transform.MultiplyVec2(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
        this.m_sweep.a = angle;
        this.m_sweep.c0.Copy(this.m_sweep.c);
        this.m_sweep.a0 = angle;
        const broadPhase = this.m_world.m_contactManager.m_broadPhase;
        for(let f = this.m_fixtureList; f; f = f.m_next)f.Synchronize(broadPhase, this.m_xf, this.m_xf);
        // Check for new contacts the next step
        this.m_world.m_newContacts = true;
    }
    SetTransform(xf) {
        this.SetTransformVec(xf.p, xf.GetAngle());
    }
    /**
     * Get the body transform for the body's origin.
     *
     * @returns The world transform of the body's origin.
     */ GetTransform() {
        return this.m_xf;
    }
    /**
     * Get the world body origin position.
     *
     * @returns The world position of the body's origin.
     */ GetPosition() {
        return this.m_xf.p;
    }
    /**
     * Get the angle in radians.
     *
     * @returns The current world rotation angle in radians.
     */ GetAngle() {
        return this.m_sweep.a;
    }
    SetAngle(angle) {
        this.SetTransformVec(this.GetPosition(), angle);
    }
    /**
     * Get the world position of the center of mass.
     */ GetWorldCenter() {
        return this.m_sweep.c;
    }
    /**
     * Get the local position of the center of mass.
     */ GetLocalCenter() {
        return this.m_sweep.localCenter;
    }
    /**
     * Set the linear velocity of the center of mass.
     *
     * @param v The new linear velocity of the center of mass.
     */ SetLinearVelocity(v) {
        if (this.m_type === b2BodyType.b2_staticBody) return;
        if (b2_math_1.b2Vec2.Dot(v, v) > 0) this.SetAwake(true);
        this.m_linearVelocity.Copy(v);
    }
    /**
     * Get the linear velocity of the center of mass.
     *
     * @returns The linear velocity of the center of mass.
     */ GetLinearVelocity() {
        return this.m_linearVelocity;
    }
    /**
     * Set the angular velocity.
     *
     * @param omega The new angular velocity in radians/second.
     */ SetAngularVelocity(w) {
        if (this.m_type === b2BodyType.b2_staticBody) return;
        if (w * w > 0) this.SetAwake(true);
        this.m_angularVelocity = w;
    }
    /**
     * Get the angular velocity.
     *
     * @returns The angular velocity in radians/second.
     */ GetAngularVelocity() {
        return this.m_angularVelocity;
    }
    /**
     * Apply a force at a world point. If the force is not
     * applied at the center of mass, it will generate a torque and
     * affect the angular velocity. This wakes up the body.
     *
     * @param force The world force vector, usually in Newtons (N).
     * @param point The world position of the point of application.
     * @param wake Also wake up the body
     */ ApplyForce(force, point, wake = true) {
        if (this.m_type !== b2BodyType.b2_dynamicBody) return;
        if (wake && !this.m_awakeFlag) this.SetAwake(true);
        // Don't accumulate a force if the body is sleeping
        if (this.m_awakeFlag) {
            this.m_force.x += force.x;
            this.m_force.y += force.y;
            this.m_torque += (point.x - this.m_sweep.c.x) * force.y - (point.y - this.m_sweep.c.y) * force.x;
        }
    }
    /**
     * Apply a force to the center of mass. This wakes up the body.
     *
     * @param force The world force vector, usually in Newtons (N).
     * @param wake Also wake up the body
     */ ApplyForceToCenter(force, wake = true) {
        if (this.m_type !== b2BodyType.b2_dynamicBody) return;
        if (wake && !this.m_awakeFlag) this.SetAwake(true);
        // Don't accumulate a force if the body is sleeping
        if (this.m_awakeFlag) {
            this.m_force.x += force.x;
            this.m_force.y += force.y;
        }
    }
    /**
     * Apply a torque. This affects the angular velocity
     * without affecting the linear velocity of the center of mass.
     *
     * @param torque About the z-axis (out of the screen), usually in N-m.
     * @param wake Also wake up the body
     */ ApplyTorque(torque, wake = true) {
        if (this.m_type !== b2BodyType.b2_dynamicBody) return;
        if (wake && !this.m_awakeFlag) this.SetAwake(true);
        // Don't accumulate a force if the body is sleeping
        if (this.m_awakeFlag) this.m_torque += torque;
    }
    /**
     * Apply an impulse at a point. This immediately modifies the velocity.
     * It also modifies the angular velocity if the point of application
     * is not at the center of mass. This wakes up the body.
     *
     * @param impulse The world impulse vector, usually in N-seconds or kg-m/s.
     * @param point The world position of the point of application.
     * @param wake Also wake up the body
     */ ApplyLinearImpulse(impulse, point, wake = true) {
        if (this.m_type !== b2BodyType.b2_dynamicBody) return;
        if (wake && !this.m_awakeFlag) this.SetAwake(true);
        // Don't accumulate velocity if the body is sleeping
        if (this.m_awakeFlag) {
            this.m_linearVelocity.x += this.m_invMass * impulse.x;
            this.m_linearVelocity.y += this.m_invMass * impulse.y;
            this.m_angularVelocity += this.m_invI * ((point.x - this.m_sweep.c.x) * impulse.y - (point.y - this.m_sweep.c.y) * impulse.x);
        }
    }
    /**
     * Apply an impulse to the center of mass. This immediately modifies the velocity.
     *
     * @param impulse The world impulse vector, usually in N-seconds or kg-m/s.
     * @param wake Also wake up the body
     */ ApplyLinearImpulseToCenter(impulse, wake = true) {
        if (this.m_type !== b2BodyType.b2_dynamicBody) return;
        if (wake && !this.m_awakeFlag) this.SetAwake(true);
        // Don't accumulate velocity if the body is sleeping
        if (this.m_awakeFlag) {
            this.m_linearVelocity.x += this.m_invMass * impulse.x;
            this.m_linearVelocity.y += this.m_invMass * impulse.y;
        }
    }
    /**
     * Apply an angular impulse.
     *
     * @param impulse The angular impulse in units of kg*m*m/s
     * @param wake Also wake up the body
     */ ApplyAngularImpulse(impulse, wake = true) {
        if (this.m_type !== b2BodyType.b2_dynamicBody) return;
        if (wake && !this.m_awakeFlag) this.SetAwake(true);
        // Don't accumulate velocity if the body is sleeping
        if (this.m_awakeFlag) this.m_angularVelocity += this.m_invI * impulse;
    }
    /**
     * Get the total mass of the body.
     *
     * @returns The mass, usually in kilograms (kg).
     */ GetMass() {
        return this.m_mass;
    }
    /**
     * Get the rotational inertia of the body about the local origin.
     *
     * @returns The rotational inertia, usually in kg-m^2.
     */ GetInertia() {
        return this.m_I + this.m_mass * b2_math_1.b2Vec2.Dot(this.m_sweep.localCenter, this.m_sweep.localCenter);
    }
    /**
     * Get the mass data of the body.
     *
     * @returns A struct containing the mass, inertia and center of the body.
     */ GetMassData(data) {
        data.mass = this.m_mass;
        data.I = this.m_I + this.m_mass * b2_math_1.b2Vec2.Dot(this.m_sweep.localCenter, this.m_sweep.localCenter);
        data.center.Copy(this.m_sweep.localCenter);
        return data;
    }
    /**
     * Set the mass properties to override the mass properties of the fixtures.
     * Note that this changes the center of mass position.
     * Note that creating or destroying fixtures can also alter the mass.
     * This function has no effect if the body isn't dynamic.
     *
     * @param massData The mass properties.
     */ SetMassData(massData) {
        (0, b2_common_1.b2Assert)(!this.m_world.IsLocked());
        if (this.m_type !== b2BodyType.b2_dynamicBody) return;
        this.m_invMass = 0;
        this.m_I = 0;
        this.m_invI = 0;
        this.m_mass = massData.mass;
        if (this.m_mass <= 0) this.m_mass = 1;
        this.m_invMass = 1 / this.m_mass;
        if (massData.I > 0 && !this.m_fixedRotationFlag) {
            this.m_I = massData.I - this.m_mass * b2_math_1.b2Vec2.Dot(massData.center, massData.center);
            // DEBUG: b2Assert(this.m_I > 0);
            this.m_invI = 1 / this.m_I;
        }
        // Move center of mass.
        const oldCenter = b2Body.SetMassData_s_oldCenter.Copy(this.m_sweep.c);
        this.m_sweep.localCenter.Copy(massData.center);
        b2_math_1.b2Transform.MultiplyVec2(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
        this.m_sweep.c0.Copy(this.m_sweep.c);
        // Update center of mass velocity.
        b2_math_1.b2Vec2.AddCrossScalarVec2(this.m_linearVelocity, this.m_angularVelocity, b2_math_1.b2Vec2.Subtract(this.m_sweep.c, oldCenter, b2_math_1.b2Vec2.s_t0), this.m_linearVelocity);
    }
    /**
     * This resets the mass properties to the sum of the mass properties of the fixtures.
     * This normally does not need to be called unless you called SetMassData to override
     * the mass and you later want to reset the mass.
     */ ResetMassData() {
        // Compute mass data from shapes. Each shape has its own density.
        this.m_mass = 0;
        this.m_invMass = 0;
        this.m_I = 0;
        this.m_invI = 0;
        this.m_sweep.localCenter.SetZero();
        // Static and kinematic bodies have zero mass.
        if (this.m_type === b2BodyType.b2_staticBody || this.m_type === b2BodyType.b2_kinematicBody) {
            this.m_sweep.c0.Copy(this.m_xf.p);
            this.m_sweep.c.Copy(this.m_xf.p);
            this.m_sweep.a0 = this.m_sweep.a;
            return;
        }
        // DEBUG: b2Assert(this.m_type === b2BodyType.b2_dynamicBody);
        // Accumulate mass over all fixtures.
        const localCenter = b2Body.ResetMassData_s_localCenter.SetZero();
        for(let f = this.m_fixtureList; f; f = f.m_next){
            if (f.m_density === 0) continue;
            const massData = f.GetMassData(b2Body.ResetMassData_s_massData);
            this.m_mass += massData.mass;
            localCenter.AddScaled(massData.mass, massData.center);
            this.m_I += massData.I;
        }
        // Compute center of mass.
        if (this.m_mass > 0) {
            this.m_invMass = 1 / this.m_mass;
            localCenter.Scale(this.m_invMass);
        }
        if (this.m_I > 0 && !this.m_fixedRotationFlag) {
            // Center the inertia about the center of mass.
            this.m_I -= this.m_mass * b2_math_1.b2Vec2.Dot(localCenter, localCenter);
            // DEBUG: b2Assert(this.m_I > 0);
            this.m_invI = 1 / this.m_I;
        } else {
            this.m_I = 0;
            this.m_invI = 0;
        }
        // Move center of mass.
        const oldCenter = b2Body.ResetMassData_s_oldCenter.Copy(this.m_sweep.c);
        this.m_sweep.localCenter.Copy(localCenter);
        b2_math_1.b2Transform.MultiplyVec2(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
        this.m_sweep.c0.Copy(this.m_sweep.c);
        // Update center of mass velocity.
        b2_math_1.b2Vec2.AddCrossScalarVec2(this.m_linearVelocity, this.m_angularVelocity, b2_math_1.b2Vec2.Subtract(this.m_sweep.c, oldCenter, b2_math_1.b2Vec2.s_t0), this.m_linearVelocity);
    }
    /**
     * Get the world coordinates of a point given the local coordinates.
     *
     * @param localPoint A point on the body measured relative the the body's origin.
     * @returns The same point expressed in world coordinates.
     */ GetWorldPoint(localPoint, out) {
        return b2_math_1.b2Transform.MultiplyVec2(this.m_xf, localPoint, out);
    }
    /**
     * Get the world coordinates of a vector given the local coordinates.
     *
     * @param localVector A vector fixed in the body.
     * @returns The same vector expressed in world coordinates.
     */ GetWorldVector(localVector, out) {
        return b2_math_1.b2Rot.MultiplyVec2(this.m_xf.q, localVector, out);
    }
    /**
     * Gets a local point relative to the body's origin given a world point.
     *
     * @param a Point in world coordinates.
     * @returns The corresponding local point relative to the body's origin.
     */ GetLocalPoint(worldPoint, out) {
        return b2_math_1.b2Transform.TransposeMultiplyVec2(this.m_xf, worldPoint, out);
    }
    /**
     * Gets a local vector given a world vector.
     *
     * @param a Vector in world coordinates.
     * @returns The corresponding local vector.
     */ GetLocalVector(worldVector, out) {
        return b2_math_1.b2Rot.TransposeMultiplyVec2(this.m_xf.q, worldVector, out);
    }
    /**
     * Get the world linear velocity of a world point attached to this body.
     *
     * @param a Point in world coordinates.
     * @returns The world velocity of a point.
     */ GetLinearVelocityFromWorldPoint(worldPoint, out) {
        return b2_math_1.b2Vec2.AddCrossScalarVec2(this.m_linearVelocity, this.m_angularVelocity, b2_math_1.b2Vec2.Subtract(worldPoint, this.m_sweep.c, b2_math_1.b2Vec2.s_t0), out);
    }
    /**
     * Get the world velocity of a local point.
     *
     * @param a Point in local coordinates.
     * @returns The world velocity of a point.
     */ GetLinearVelocityFromLocalPoint(localPoint, out) {
        return this.GetLinearVelocityFromWorldPoint(this.GetWorldPoint(localPoint, out), out);
    }
    /**
     * Get the linear damping of the body.
     */ GetLinearDamping() {
        return this.m_linearDamping;
    }
    /**
     * Set the linear damping of the body.
     */ SetLinearDamping(linearDamping) {
        this.m_linearDamping = linearDamping;
    }
    /**
     * Get the angular damping of the body.
     */ GetAngularDamping() {
        return this.m_angularDamping;
    }
    /**
     * Set the angular damping of the body.
     */ SetAngularDamping(angularDamping) {
        this.m_angularDamping = angularDamping;
    }
    /**
     * Get the gravity scale of the body.
     */ GetGravityScale() {
        return this.m_gravityScale;
    }
    /**
     * Set the gravity scale of the body.
     */ SetGravityScale(scale) {
        this.m_gravityScale = scale;
    }
    /**
     * Set the type of this body. This may alter the mass and velocity.
     */ SetType(type) {
        (0, b2_common_1.b2Assert)(!this.m_world.IsLocked());
        if (this.m_type === type) return;
        this.m_type = type;
        this.ResetMassData();
        if (this.m_type === b2BodyType.b2_staticBody) {
            this.m_linearVelocity.SetZero();
            this.m_angularVelocity = 0;
            this.m_sweep.a0 = this.m_sweep.a;
            this.m_sweep.c0.Copy(this.m_sweep.c);
            this.m_awakeFlag = false;
            this.SynchronizeFixtures();
        }
        this.SetAwake(true);
        this.m_force.SetZero();
        this.m_torque = 0;
        // Delete the attached contacts.
        let ce = this.m_contactList;
        while(ce){
            const ce0 = ce;
            ce = ce.next;
            this.m_world.m_contactManager.Destroy(ce0.contact);
        }
        this.m_contactList = null;
        // Touch the proxies so that new contacts will be created (when appropriate)
        const broadPhase = this.m_world.m_contactManager.m_broadPhase;
        for(let f = this.m_fixtureList; f; f = f.m_next)for (const proxy of f.m_proxies)broadPhase.TouchProxy(proxy.treeNode);
    }
    /**
     * Get the type of this body.
     */ GetType() {
        return this.m_type;
    }
    /**
     * Should this body be treated like a bullet for continuous collision detection?
     */ SetBullet(flag) {
        this.m_bulletFlag = flag;
    }
    /**
     * Is this body treated like a bullet for continuous collision detection?
     */ IsBullet() {
        return this.m_bulletFlag;
    }
    /**
     * You can disable sleeping on this body. If you disable sleeping, the
     * body will be woken.
     */ SetSleepingAllowed(flag) {
        this.m_autoSleepFlag = flag;
        if (!flag) this.SetAwake(true);
    }
    /**
     * Is this body allowed to sleep
     */ IsSleepingAllowed() {
        return this.m_autoSleepFlag;
    }
    /**
     * Set the sleep state of the body. A sleeping body has very
     * low CPU cost.
     *
     * @param flag Set to true to wake the body, false to put it to sleep.
     */ SetAwake(flag) {
        if (this.m_type === b2BodyType.b2_staticBody) return;
        if (flag) {
            this.m_awakeFlag = true;
            this.m_sleepTime = 0;
        } else {
            this.m_awakeFlag = false;
            this.m_sleepTime = 0;
            this.m_linearVelocity.SetZero();
            this.m_angularVelocity = 0;
            this.m_force.SetZero();
            this.m_torque = 0;
        }
    }
    /**
     * Get the sleeping state of this body.
     *
     * @returns true if the body is awake.
     */ IsAwake() {
        return this.m_awakeFlag;
    }
    /**
     * Allow a body to be disabled. A disabled body is not simulated and cannot
     * be collided with or woken up.
     * If you pass a flag of true, all fixtures will be added to the broad-phase.
     * If you pass a flag of false, all fixtures will be removed from the
     * broad-phase and all contacts will be destroyed.
     * Fixtures and joints are otherwise unaffected. You may continue
     * to create/destroy fixtures and joints on disabled bodies.
     * Fixtures on a disabled body are implicitly disabled and will
     * not participate in collisions, ray-casts, or queries.
     * Joints connected to a disabled body are implicitly disabled.
     * An disabled body is still owned by a b2World object and remains
     * in the body list.
     */ SetEnabled(flag) {
        (0, b2_common_1.b2Assert)(!this.m_world.IsLocked());
        if (flag === this.IsEnabled()) return;
        this.m_enabledFlag = flag;
        const broadPhase = this.m_world.m_contactManager.m_broadPhase;
        if (flag) {
            // Create all proxies.
            for(let f = this.m_fixtureList; f; f = f.m_next)f.CreateProxies(broadPhase, this.m_xf);
            // Contacts are created at the beginning of the next
            this.m_world.m_newContacts = true;
        } else {
            // Destroy all proxies.
            for(let f = this.m_fixtureList; f; f = f.m_next)f.DestroyProxies(broadPhase);
            // Destroy the attached contacts.
            let ce = this.m_contactList;
            while(ce){
                const ce0 = ce;
                ce = ce.next;
                this.m_world.m_contactManager.Destroy(ce0.contact);
            }
            this.m_contactList = null;
        }
    }
    /**
     * Get the active state of the body.
     */ IsEnabled() {
        return this.m_enabledFlag;
    }
    /**
     * Set this body to have fixed rotation. This causes the mass
     * to be reset.
     */ SetFixedRotation(flag) {
        if (this.m_fixedRotationFlag === flag) return;
        this.m_fixedRotationFlag = flag;
        this.m_angularVelocity = 0;
        this.ResetMassData();
    }
    /**
     * Does this body have fixed rotation?
     */ IsFixedRotation() {
        return this.m_fixedRotationFlag;
    }
    /**
     * Get the list of all fixtures attached to this body.
     */ GetFixtureList() {
        return this.m_fixtureList;
    }
    /**
     * Get the list of all joints attached to this body.
     */ GetJointList() {
        return this.m_jointList;
    }
    /**
     * Get the list of all contacts attached to this body.
     *
     * @warning this list changes during the time step and you may
     * miss some collisions if you don't use b2ContactListener.
     */ GetContactList() {
        return this.m_contactList;
    }
    /**
     * Get the next body in the world's body list.
     */ GetNext() {
        return this.m_next;
    }
    /**
     * Get the user data reference that was provided in the body definition.
     */ GetUserData() {
        return this.m_userData;
    }
    /**
     * Set the user data. Use this to store your application specific data.
     * This is a merge operation. Only specified keys will be overridden.
     */ SetUserData(data) {
        Object.assign(this.m_userData, data);
    }
    /**
     * Get the parent world of this body.
     */ GetWorld() {
        return this.m_world;
    }
    /** @internal */ SynchronizeFixtures() {
        const broadPhase = this.m_world.m_contactManager.m_broadPhase;
        if (this.m_awakeFlag) {
            const xf1 = b2Body.SynchronizeFixtures_s_xf1;
            xf1.q.Set(this.m_sweep.a0);
            b2_math_1.b2Rot.MultiplyVec2(xf1.q, this.m_sweep.localCenter, xf1.p);
            b2_math_1.b2Vec2.Subtract(this.m_sweep.c0, xf1.p, xf1.p);
            for(let f = this.m_fixtureList; f; f = f.m_next)f.Synchronize(broadPhase, xf1, this.m_xf);
        } else for(let f = this.m_fixtureList; f; f = f.m_next)f.Synchronize(broadPhase, this.m_xf, this.m_xf);
    }
    /** @internal */ SynchronizeTransform() {
        this.m_xf.q.Set(this.m_sweep.a);
        b2_math_1.b2Rot.MultiplyVec2(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p);
        b2_math_1.b2Vec2.Subtract(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
    }
    /**
     * This is used to prevent connected bodies from colliding.
     * It may lie, depending on the collideConnected flag.
     *
     * @internal
     */ ShouldCollide(other) {
        // At least one body should be dynamic.
        if (this.m_type !== b2BodyType.b2_dynamicBody && other.m_type !== b2BodyType.b2_dynamicBody) return false;
        return this.ShouldCollideConnected(other);
    }
    ShouldCollideConnected(other) {
        // Does a joint prevent collision?
        for(let jn = this.m_jointList; jn; jn = jn.next)if (jn.other === other) {
            if (!jn.joint.m_collideConnected) return false;
        }
        return true;
    }
    /** @internal */ Advance(alpha) {
        // Advance to the new safe time. This doesn't sync the broad-phase.
        this.m_sweep.Advance(alpha);
        this.m_sweep.c.Copy(this.m_sweep.c0);
        this.m_sweep.a = this.m_sweep.a0;
        this.m_xf.q.Set(this.m_sweep.a);
        b2_math_1.b2Rot.MultiplyVec2(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p);
        b2_math_1.b2Vec2.Subtract(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
    }
}
exports.b2Body = b2Body;
b2Body.SetMassData_s_oldCenter = new b2_math_1.b2Vec2();
b2Body.ResetMassData_s_localCenter = new b2_math_1.b2Vec2();
b2Body.ResetMassData_s_oldCenter = new b2_math_1.b2Vec2();
b2Body.ResetMassData_s_massData = new b2_shape_1.b2MassData();
b2Body.SynchronizeFixtures_s_xf1 = new b2_math_1.b2Transform();

},{"45e9480e228b1dd9":"3MJcc","ef6f771d9933d90b":"6cP2p","cb116381eb6de947":"1ULEP","505672b11f3277ac":"a1SE4"}],"6cP2p":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2Shape = exports.b2ShapeType = exports.b2MassData = void 0;
const b2_math_1 = require("8801247191c298ce");
/**
 * This holds the mass data computed for a shape.
 */ class b2MassData {
    constructor(){
        /** The mass of the shape, usually in kilograms. */ this.mass = 0;
        /** The position of the shape's centroid relative to the shape's origin. */ this.center = new b2_math_1.b2Vec2();
        /** The rotational inertia of the shape about the local origin. */ this.I = 0;
    }
}
exports.b2MassData = b2MassData;
var b2ShapeType;
(function(b2ShapeType) {
    b2ShapeType[b2ShapeType["e_unknown"] = -1] = "e_unknown";
    b2ShapeType[b2ShapeType["e_circle"] = 0] = "e_circle";
    b2ShapeType[b2ShapeType["e_edge"] = 1] = "e_edge";
    b2ShapeType[b2ShapeType["e_polygon"] = 2] = "e_polygon";
    b2ShapeType[b2ShapeType["e_chain"] = 3] = "e_chain";
    b2ShapeType[b2ShapeType["e_typeCount"] = 4] = "e_typeCount";
})(b2ShapeType || (exports.b2ShapeType = b2ShapeType = {}));
/**
 * A shape is used for collision detection. You can create a shape however you like.
 * Shapes used for simulation in b2World are created automatically when a b2Fixture
 * is created. Shapes may encapsulate a one or more child shapes.
 */ class b2Shape {
    constructor(type, radius){
        /**
         * Radius of a shape. For polygonal shapes this must be b2_polygonRadius. There is no support for
         * making rounded polygons.
         */ this.m_radius = 0;
        this.m_type = type;
        this.m_radius = radius;
    }
    Copy(other) {
        // DEBUG: b2Assert(this.m_type === other.m_type);
        this.m_radius = other.m_radius;
        return this;
    }
    /**
     * Get the type of this shape. You can use this to down cast to the concrete shape.
     *
     * @returns The shape type.
     */ GetType() {
        return this.m_type;
    }
}
exports.b2Shape = b2Shape;

},{"8801247191c298ce":"3MJcc"}],"1ULEP":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2Fixture = exports.b2FixtureProxy = exports.b2DefaultFilter = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_math_1 = require("9bcf6965773bbc9");
const b2_collision_1 = require("e1756bebbc3a86cc");
const b2_shape_1 = require("2b57b1477a603726");
const b2_common_1 = require("edae1577772e7e28");
const b2_settings_1 = require("1e34c28d01db5db7");
const temp = {
    c1: new b2_math_1.b2Vec2(),
    c2: new b2_math_1.b2Vec2()
};
exports.b2DefaultFilter = {
    categoryBits: 0x0001,
    maskBits: 0xffff,
    groupIndex: 0
};
/**
 * This proxy is used internally to connect fixtures to the broad-phase.
 */ class b2FixtureProxy {
    constructor(fixture, broadPhase, xf, childIndex){
        this.aabb = new b2_collision_1.b2AABB();
        this.fixture = fixture;
        this.childIndex = childIndex;
        fixture.m_shape.ComputeAABB(this.aabb, xf, childIndex);
        this.treeNode = broadPhase.CreateProxy(this.aabb, this);
    }
}
exports.b2FixtureProxy = b2FixtureProxy;
const Synchronize_s_aabb1 = new b2_collision_1.b2AABB();
const Synchronize_s_aabb2 = new b2_collision_1.b2AABB();
const Synchronize_s_displacement = new b2_math_1.b2Vec2();
/**
 * A fixture is used to attach a shape to a body for collision detection. A fixture
 * inherits its transform from its parent. Fixtures hold additional non-geometric data
 * such as friction, collision filters, etc.
 * Fixtures are created via b2Body::CreateFixture.
 *
 * @warning you cannot reuse fixtures.
 */ class b2Fixture {
    /** @internal protected */ get m_proxyCount() {
        return this.m_proxies.length;
    }
    /** @internal protected */ constructor(body, def){
        var _a, _b, _c, _d, _e;
        /** @internal protected */ this.m_density = 0;
        /** @internal protected */ this.m_next = null;
        /** @internal protected */ this.m_friction = 0;
        /** @internal protected */ this.m_restitution = 0;
        /** @internal protected */ this.m_restitutionThreshold = 0;
        /** @internal protected */ this.m_proxies = [];
        /** @internal protected */ this.m_isSensor = false;
        this.m_userData = {};
        this.m_body = body;
        this.m_shape = def.shape.Clone();
        if (def.userData) this.SetUserData(def.userData);
        this.m_friction = (_a = def.friction) !== null && _a !== void 0 ? _a : 0.2;
        this.m_restitution = (_b = def.restitution) !== null && _b !== void 0 ? _b : 0;
        this.m_restitutionThreshold = (_c = def.restitutionThreshold) !== null && _c !== void 0 ? _c : b2_settings_1.b2_lengthUnitsPerMeter;
        this.m_filter = {
            ...exports.b2DefaultFilter,
            ...def.filter
        };
        this.m_isSensor = (_d = def.isSensor) !== null && _d !== void 0 ? _d : false;
        this.m_density = (_e = def.density) !== null && _e !== void 0 ? _e : 0;
    }
    /**
     * Get the type of the child shape. You can use this to down cast to the concrete shape.
     *
     * @returns The shape type.
     */ GetType() {
        return this.m_shape.GetType();
    }
    /**
     * Get the child shape. You can modify the child shape, however you should not change the
     * number of vertices because this will crash some collision caching mechanisms.
     * Manipulating the shape may lead to non-physical behavior.
     */ GetShape() {
        return this.m_shape;
    }
    /**
     * Set if this fixture is a sensor.
     */ SetSensor(sensor) {
        if (sensor !== this.m_isSensor) {
            this.m_body.SetAwake(true);
            this.m_isSensor = sensor;
        }
    }
    /**
     * Is this fixture a sensor (non-solid)?
     *
     * @returns The true if the shape is a sensor.
     */ IsSensor() {
        return this.m_isSensor;
    }
    /**
     * Set the contact filtering data. This will not update contacts until the next time
     * step when either parent body is active and awake.
     * This automatically calls Refilter.
     */ SetFilterData(filter) {
        var _a, _b, _c;
        this.m_filter.categoryBits = (_a = filter.categoryBits) !== null && _a !== void 0 ? _a : exports.b2DefaultFilter.categoryBits;
        this.m_filter.groupIndex = (_b = filter.groupIndex) !== null && _b !== void 0 ? _b : exports.b2DefaultFilter.groupIndex;
        this.m_filter.maskBits = (_c = filter.maskBits) !== null && _c !== void 0 ? _c : exports.b2DefaultFilter.maskBits;
        this.Refilter();
    }
    /**
     * Get the contact filtering data.
     */ GetFilterData() {
        return this.m_filter;
    }
    /**
     * Call this if you want to establish collision that was previously disabled by b2ContactFilter::ShouldCollide.
     */ Refilter() {
        // Flag associated contacts for filtering.
        let edge = this.m_body.GetContactList();
        while(edge){
            const { contact } = edge;
            const fixtureA = contact.GetFixtureA();
            const fixtureB = contact.GetFixtureB();
            if (fixtureA === this || fixtureB === this) contact.FlagForFiltering();
            edge = edge.next;
        }
        const world = this.m_body.GetWorld();
        // Touch each proxy so that new pairs may be created
        const broadPhase = world.m_contactManager.m_broadPhase;
        for (const proxy of this.m_proxies)broadPhase.TouchProxy(proxy.treeNode);
    }
    /**
     * Get the parent body of this fixture.
     *
     * @returns The parent body.
     */ GetBody() {
        return this.m_body;
    }
    /**
     * Get the next fixture in the parent body's fixture list.
     *
     * @returns The next shape.
     */ GetNext() {
        return this.m_next;
    }
    /**
     * Get the user data that was assigned in the fixture definition. Use this to
     * store your application specific data.
     */ GetUserData() {
        return this.m_userData;
    }
    /**
     * Set the user data. Use this to store your application specific data.
     * This is a merge operation. Only specified keys will be overridden.
     */ SetUserData(data) {
        Object.assign(this.m_userData, data);
    }
    /**
     * Test a point for containment in this fixture.
     *
     * @param p A point in world coordinates.
     */ TestPoint(p) {
        return this.m_shape.TestPoint(this.m_body.GetTransform(), p);
    }
    /**
     * Cast a ray against this shape.
     *
     * @param output The ray-cast results.
     * @param input The ray-cast input parameters.
     */ RayCast(output, input, childIndex) {
        return this.m_shape.RayCast(output, input, this.m_body.GetTransform(), childIndex);
    }
    /**
     * Get the mass data for this fixture. The mass data is based on the density and
     * the shape. The rotational inertia is about the shape's origin. This operation
     * may be expensive.
     */ GetMassData(massData = new b2_shape_1.b2MassData()) {
        this.m_shape.ComputeMass(massData, this.m_density);
        return massData;
    }
    /**
     * Set the density of this fixture. This will _not_ automatically adjust the mass
     * of the body. You must call b2Body::ResetMassData to update the body's mass.
     */ SetDensity(density) {
        // DEBUG: b2Assert(Number.isFinite(density) && density >= 0);
        this.m_density = density;
    }
    /**
     * Get the density of this fixture.
     */ GetDensity() {
        return this.m_density;
    }
    /**
     * Get the coefficient of friction.
     */ GetFriction() {
        return this.m_friction;
    }
    /**
     * Set the coefficient of friction. This will _not_ change the friction of
     * existing contacts.
     */ SetFriction(friction) {
        this.m_friction = friction;
    }
    /**
     * Get the coefficient of restitution.
     */ GetRestitution() {
        return this.m_restitution;
    }
    /**
     * Set the coefficient of restitution. This will _not_ change the restitution of
     * existing contacts.
     */ SetRestitution(restitution) {
        this.m_restitution = restitution;
    }
    /** Get the restitution velocity threshold. */ GetRestitutionThreshold() {
        return this.m_restitutionThreshold;
    }
    /**
     * Set the restitution threshold. This will _not_ change the restitution threshold of
     * existing contacts.
     */ SetRestitutionThreshold(threshold) {
        this.m_restitutionThreshold = threshold;
    }
    /**
     * Get the fixture's AABB. This AABB may be enlarge and/or stale.
     * If you need a more accurate AABB, compute it using the shape and
     * the body transform.
     */ GetAABB(childIndex) {
        // DEBUG: b2Assert(0 <= childIndex && childIndex < this.m_proxyCount);
        return this.m_proxies[childIndex].aabb;
    }
    /**
     * These support body activation/deactivation.
     *
     * @internal protected
     */ CreateProxies(broadPhase, xf) {
        (0, b2_common_1.b2Assert)(this.m_proxies.length === 0);
        // Create proxies in the broad-phase.
        this.m_proxies.length = this.m_shape.GetChildCount();
        for(let i = 0; i < this.m_proxies.length; ++i)this.m_proxies[i] = new b2FixtureProxy(this, broadPhase, xf, i);
    }
    /** @internal protected */ DestroyProxies(broadPhase) {
        // Destroy proxies in the broad-phase.
        for (const proxy of this.m_proxies)broadPhase.DestroyProxy(proxy.treeNode);
        this.m_proxies.length = 0;
    }
    /** @internal protected */ Synchronize(broadPhase, transform1, transform2) {
        const { c1, c2 } = temp;
        const displacement = Synchronize_s_displacement;
        for (const proxy of this.m_proxies){
            // Compute an AABB that covers the swept shape (may miss some rotation effect).
            const aabb1 = Synchronize_s_aabb1;
            const aabb2 = Synchronize_s_aabb2;
            this.m_shape.ComputeAABB(aabb1, transform1, proxy.childIndex);
            this.m_shape.ComputeAABB(aabb2, transform2, proxy.childIndex);
            proxy.aabb.Combine2(aabb1, aabb2);
            b2_math_1.b2Vec2.Subtract(aabb2.GetCenter(c2), aabb1.GetCenter(c1), displacement);
            broadPhase.MoveProxy(proxy.treeNode, proxy.aabb, displacement);
        }
    }
}
exports.b2Fixture = b2Fixture;

},{"9bcf6965773bbc9":"3MJcc","e1756bebbc3a86cc":"eLdO6","2b57b1477a603726":"6cP2p","edae1577772e7e28":"a1SE4","1e34c28d01db5db7":"hZX5U"}],"eLdO6":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2ValidateHull = exports.b2ComputeHull = exports.b2TestOverlap = exports.b2ClipSegmentToLine = exports.b2AABB = exports.b2RayCastOutput = exports.b2RayCastInput = exports.b2ClipVertex = exports.b2GetPointStates = exports.b2PointState = exports.b2WorldManifold = exports.b2Manifold = exports.b2ManifoldType = exports.b2ManifoldPoint = exports.b2ContactID = exports.b2ContactFeature = exports.b2ContactFeatureType = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// Structures and functions used for computing contact points, distance queries, and TOI queries.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("35ebc3f124522341");
const b2_math_1 = require("9f2596239176a20c");
const b2_distance_1 = require("2cde4cbc10fc6e85");
const b2_settings_1 = require("1e849bb5fa8efa05");
var b2ContactFeatureType;
(function(b2ContactFeatureType) {
    b2ContactFeatureType[b2ContactFeatureType["e_vertex"] = 0] = "e_vertex";
    b2ContactFeatureType[b2ContactFeatureType["e_face"] = 1] = "e_face";
})(b2ContactFeatureType || (exports.b2ContactFeatureType = b2ContactFeatureType = {}));
/**
 * The features that intersect to form the contact point
 * This must be 4 bytes or less.
 */ class b2ContactFeature {
    constructor(){
        this.m_key = 0;
        this.m_key_invalid = false;
        /** Feature index on shapeA */ this.m_indexA = 0;
        /** Feature index on shapeB */ this.m_indexB = 0;
        /** The feature type on shapeA */ this.m_typeA = b2ContactFeatureType.e_vertex;
        /** The feature type on shapeB */ this.m_typeB = b2ContactFeatureType.e_vertex;
    }
    get key() {
        if (this.m_key_invalid) {
            this.m_key_invalid = false;
            this.m_key = this.m_indexA | this.m_indexB << 8 | this.m_typeA << 16 | this.m_typeB << 24;
        }
        return this.m_key;
    }
    set key(value) {
        this.m_key = value;
        this.m_key_invalid = false;
        this.m_indexA = this.m_key & 0xff;
        this.m_indexB = this.m_key >> 8 & 0xff;
        this.m_typeA = this.m_key >> 16 & 0xff;
        this.m_typeB = this.m_key >> 24 & 0xff;
    }
    get indexA() {
        return this.m_indexA;
    }
    set indexA(value) {
        this.m_indexA = value;
        this.m_key_invalid = true;
    }
    get indexB() {
        return this.m_indexB;
    }
    set indexB(value) {
        this.m_indexB = value;
        this.m_key_invalid = true;
    }
    get typeA() {
        return this.m_typeA;
    }
    set typeA(value) {
        this.m_typeA = value;
        this.m_key_invalid = true;
    }
    get typeB() {
        return this.m_typeB;
    }
    set typeB(value) {
        this.m_typeB = value;
        this.m_key_invalid = true;
    }
}
exports.b2ContactFeature = b2ContactFeature;
/**
 * Contact ids to facilitate warm starting.
 */ class b2ContactID {
    constructor(){
        this.cf = new b2ContactFeature();
    }
    Copy(o) {
        this.key = o.key;
        return this;
    }
    Clone() {
        return new b2ContactID().Copy(this);
    }
    get key() {
        return this.cf.key;
    }
    set key(value) {
        this.cf.key = value;
    }
}
exports.b2ContactID = b2ContactID;
/**
 * A manifold point is a contact point belonging to a contact
 * manifold. It holds details related to the geometry and dynamics
 * of the contact points.
 * The local point usage depends on the manifold type:
 * -e_circles: the local center of circleB
 * -e_faceA: the local center of cirlceB or the clip point of polygonB
 * -e_faceB: the clip point of polygonA
 * This structure is stored across time steps, so we keep it small.
 * Note: the impulses are used for internal caching and may not
 * provide reliable contact forces, especially for high speed collisions.
 */ class b2ManifoldPoint {
    constructor(){
        /** Usage depends on manifold type */ this.localPoint = new b2_math_1.b2Vec2();
        /** The non-penetration impulse */ this.normalImpulse = 0;
        /** The friction impulse */ this.tangentImpulse = 0;
        /** Uniquely identifies a contact point between two shapes */ this.id = new b2ContactID();
    }
    Reset() {
        this.localPoint.SetZero();
        this.normalImpulse = 0;
        this.tangentImpulse = 0;
        this.id.key = 0;
    }
    Copy(o) {
        this.localPoint.Copy(o.localPoint);
        this.normalImpulse = o.normalImpulse;
        this.tangentImpulse = o.tangentImpulse;
        this.id.Copy(o.id);
        return this;
    }
}
exports.b2ManifoldPoint = b2ManifoldPoint;
var b2ManifoldType;
(function(b2ManifoldType) {
    b2ManifoldType[b2ManifoldType["e_circles"] = 0] = "e_circles";
    b2ManifoldType[b2ManifoldType["e_faceA"] = 1] = "e_faceA";
    b2ManifoldType[b2ManifoldType["e_faceB"] = 2] = "e_faceB";
})(b2ManifoldType || (exports.b2ManifoldType = b2ManifoldType = {}));
/**
 * A manifold for two touching convex shapes.
 * Box2D supports multiple types of contact:
 * - clip point versus plane with radius
 * - point versus point with radius (circles)
 * The local point usage depends on the manifold type:
 * -e_circles: the local center of circleA
 * -e_faceA: the center of faceA
 * -e_faceB: the center of faceB
 * Similarly the local normal usage:
 * -e_circles: not used
 * -e_faceA: the normal on polygonA
 * -e_faceB: the normal on polygonB
 * We store contacts in this way so that position correction can
 * account for movement, which is critical for continuous physics.
 * All contact scenarios must be expressed in one of these types.
 * This structure is stored across time steps, so we keep it small.
 */ class b2Manifold {
    constructor(){
        /** The points of contact */ this.points = (0, b2_common_1.b2MakeArray)(b2_common_1.b2_maxManifoldPoints, b2ManifoldPoint);
        /** Not use for Type::e_points */ this.localNormal = new b2_math_1.b2Vec2();
        /** Usage depends on manifold type */ this.localPoint = new b2_math_1.b2Vec2();
        this.type = b2ManifoldType.e_circles;
        /** The number of manifold points */ this.pointCount = 0;
    }
    Reset() {
        for(let i = 0; i < b2_common_1.b2_maxManifoldPoints; ++i)// DEBUG: b2Assert(this.points[i] instanceof b2ManifoldPoint);
        this.points[i].Reset();
        this.localNormal.SetZero();
        this.localPoint.SetZero();
        this.type = b2ManifoldType.e_circles;
        this.pointCount = 0;
    }
    Copy(o) {
        this.pointCount = o.pointCount;
        for(let i = 0; i < b2_common_1.b2_maxManifoldPoints; ++i)// DEBUG: b2Assert(this.points[i] instanceof b2ManifoldPoint);
        this.points[i].Copy(o.points[i]);
        this.localNormal.Copy(o.localNormal);
        this.localPoint.Copy(o.localPoint);
        this.type = o.type;
        return this;
    }
    Clone() {
        return new b2Manifold().Copy(this);
    }
}
exports.b2Manifold = b2Manifold;
/**
 * This is used to compute the current state of a contact manifold.
 */ class b2WorldManifold {
    constructor(){
        /** World vector pointing from A to B */ this.normal = new b2_math_1.b2Vec2();
        /** World contact point (point of intersection) */ this.points = (0, b2_common_1.b2MakeArray)(b2_common_1.b2_maxManifoldPoints, b2_math_1.b2Vec2);
        /** A negative value indicates overlap, in meters */ this.separations = (0, b2_common_1.b2MakeNumberArray)(b2_common_1.b2_maxManifoldPoints);
    }
    /**
     * Evaluate the manifold with supplied transforms. This assumes
     * modest motion from the original state. This does not change the
     * point count, impulses, etc. The radii must come from the shapes
     * that generated the manifold.
     */ Initialize(manifold, xfA, radiusA, xfB, radiusB) {
        if (manifold.pointCount === 0) return;
        switch(manifold.type){
            case b2ManifoldType.e_circles:
                {
                    this.normal.Set(1, 0);
                    const pointA = b2_math_1.b2Transform.MultiplyVec2(xfA, manifold.localPoint, b2WorldManifold.Initialize_s_pointA);
                    const pointB = b2_math_1.b2Transform.MultiplyVec2(xfB, manifold.points[0].localPoint, b2WorldManifold.Initialize_s_pointB);
                    if (b2_math_1.b2Vec2.DistanceSquared(pointA, pointB) > b2_common_1.b2_epsilon_sq) b2_math_1.b2Vec2.Subtract(pointB, pointA, this.normal).Normalize();
                    const cA = b2_math_1.b2Vec2.AddScaled(pointA, radiusA, this.normal, b2WorldManifold.Initialize_s_cA);
                    const cB = b2_math_1.b2Vec2.SubtractScaled(pointB, radiusB, this.normal, b2WorldManifold.Initialize_s_cB);
                    b2_math_1.b2Vec2.Mid(cA, cB, this.points[0]);
                    this.separations[0] = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(cB, cA, b2_math_1.b2Vec2.s_t0), this.normal);
                    break;
                }
            case b2ManifoldType.e_faceA:
                {
                    b2_math_1.b2Rot.MultiplyVec2(xfA.q, manifold.localNormal, this.normal);
                    const planePoint = b2_math_1.b2Transform.MultiplyVec2(xfA, manifold.localPoint, b2WorldManifold.Initialize_s_planePoint);
                    for(let i = 0; i < manifold.pointCount; ++i){
                        const clipPoint = b2_math_1.b2Transform.MultiplyVec2(xfB, manifold.points[i].localPoint, b2WorldManifold.Initialize_s_clipPoint);
                        const s = radiusA - b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(clipPoint, planePoint, b2_math_1.b2Vec2.s_t0), this.normal);
                        const cA = b2_math_1.b2Vec2.AddScaled(clipPoint, s, this.normal, b2WorldManifold.Initialize_s_cA);
                        const cB = b2_math_1.b2Vec2.SubtractScaled(clipPoint, radiusB, this.normal, b2WorldManifold.Initialize_s_cB);
                        b2_math_1.b2Vec2.Mid(cA, cB, this.points[i]);
                        this.separations[i] = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(cB, cA, b2_math_1.b2Vec2.s_t0), this.normal);
                    }
                    break;
                }
            case b2ManifoldType.e_faceB:
                {
                    b2_math_1.b2Rot.MultiplyVec2(xfB.q, manifold.localNormal, this.normal);
                    const planePoint = b2_math_1.b2Transform.MultiplyVec2(xfB, manifold.localPoint, b2WorldManifold.Initialize_s_planePoint);
                    for(let i = 0; i < manifold.pointCount; ++i){
                        const clipPoint = b2_math_1.b2Transform.MultiplyVec2(xfA, manifold.points[i].localPoint, b2WorldManifold.Initialize_s_clipPoint);
                        const s = radiusB - b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(clipPoint, planePoint, b2_math_1.b2Vec2.s_t0), this.normal);
                        const cB = b2_math_1.b2Vec2.AddScaled(clipPoint, s, this.normal, b2WorldManifold.Initialize_s_cB);
                        const cA = b2_math_1.b2Vec2.SubtractScaled(clipPoint, radiusA, this.normal, b2WorldManifold.Initialize_s_cA);
                        b2_math_1.b2Vec2.Mid(cA, cB, this.points[i]);
                        this.separations[i] = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(cA, cB, b2_math_1.b2Vec2.s_t0), this.normal);
                    }
                    // Ensure normal points from A to B.
                    this.normal.Negate();
                    break;
                }
        }
    }
}
exports.b2WorldManifold = b2WorldManifold;
b2WorldManifold.Initialize_s_pointA = new b2_math_1.b2Vec2();
b2WorldManifold.Initialize_s_pointB = new b2_math_1.b2Vec2();
b2WorldManifold.Initialize_s_cA = new b2_math_1.b2Vec2();
b2WorldManifold.Initialize_s_cB = new b2_math_1.b2Vec2();
b2WorldManifold.Initialize_s_planePoint = new b2_math_1.b2Vec2();
b2WorldManifold.Initialize_s_clipPoint = new b2_math_1.b2Vec2();
/**
 * This is used for determining the state of contact points.
 */ var b2PointState;
(function(b2PointState) {
    /** Point does not exist */ b2PointState[b2PointState["b2_nullState"] = 0] = "b2_nullState";
    /** Point was added in the update */ b2PointState[b2PointState["b2_addState"] = 1] = "b2_addState";
    /** Point persisted across the update */ b2PointState[b2PointState["b2_persistState"] = 2] = "b2_persistState";
    /** Point was removed in the update */ b2PointState[b2PointState["b2_removeState"] = 3] = "b2_removeState";
})(b2PointState || (exports.b2PointState = b2PointState = {}));
/**
 * Compute the point states given two manifolds. The states pertain to the transition from manifold1
 * to manifold2. So state1 is either persist or remove while state2 is either add or persist.
 */ function b2GetPointStates(state1, state2, manifold1, manifold2) {
    // Detect persists and removes.
    let i;
    for(i = 0; i < manifold1.pointCount; ++i){
        const { key } = manifold1.points[i].id;
        state1[i] = b2PointState.b2_removeState;
        for(let j = 0; j < manifold2.pointCount; ++j)if (manifold2.points[j].id.key === key) {
            state1[i] = b2PointState.b2_persistState;
            break;
        }
    }
    for(; i < b2_common_1.b2_maxManifoldPoints; ++i)state1[i] = b2PointState.b2_nullState;
    // Detect persists and adds.
    for(i = 0; i < manifold2.pointCount; ++i){
        const { key } = manifold2.points[i].id;
        state2[i] = b2PointState.b2_addState;
        for(let j = 0; j < manifold1.pointCount; ++j)if (manifold1.points[j].id.key === key) {
            state2[i] = b2PointState.b2_persistState;
            break;
        }
    }
    for(; i < b2_common_1.b2_maxManifoldPoints; ++i)state2[i] = b2PointState.b2_nullState;
}
exports.b2GetPointStates = b2GetPointStates;
/**
 * Used for computing contact manifolds.
 */ class b2ClipVertex {
    constructor(){
        this.v = new b2_math_1.b2Vec2();
        this.id = new b2ContactID();
    }
    Copy(other) {
        this.v.Copy(other.v);
        this.id.Copy(other.id);
        return this;
    }
}
exports.b2ClipVertex = b2ClipVertex;
/**
 * Ray-cast input data. The ray extends from p1 to p1 + maxFraction * (p2 - p1).
 */ class b2RayCastInput {
    constructor(){
        this.p1 = new b2_math_1.b2Vec2();
        this.p2 = new b2_math_1.b2Vec2();
        this.maxFraction = 1;
    }
    Copy(o) {
        this.p1.Copy(o.p1);
        this.p2.Copy(o.p2);
        this.maxFraction = o.maxFraction;
        return this;
    }
}
exports.b2RayCastInput = b2RayCastInput;
/**
 * Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
 * come from b2RayCastInput.
 */ class b2RayCastOutput {
    constructor(){
        this.normal = new b2_math_1.b2Vec2();
        this.fraction = 0;
    }
    Copy(o) {
        this.normal.Copy(o.normal);
        this.fraction = o.fraction;
        return this;
    }
}
exports.b2RayCastOutput = b2RayCastOutput;
/**
 * An axis aligned bounding box.
 */ class b2AABB {
    constructor(){
        /** The lower vertex */ this.lowerBound = new b2_math_1.b2Vec2();
        /** The upper vertex */ this.upperBound = new b2_math_1.b2Vec2();
    }
    Copy(o) {
        this.lowerBound.Copy(o.lowerBound);
        this.upperBound.Copy(o.upperBound);
        return this;
    }
    /**
     * Verify that the bounds are sorted.
     */ IsValid() {
        return this.lowerBound.IsValid() && this.upperBound.IsValid() && this.upperBound.x >= this.lowerBound.x && this.upperBound.y >= this.lowerBound.y;
    }
    /**
     * Get the center of the AABB.
     */ GetCenter(out) {
        return b2_math_1.b2Vec2.Mid(this.lowerBound, this.upperBound, out);
    }
    /**
     * Get the extents of the AABB (half-widths).
     */ GetExtents(out) {
        return b2_math_1.b2Vec2.Extents(this.lowerBound, this.upperBound, out);
    }
    /**
     * Get the perimeter length
     */ GetPerimeter() {
        const wx = this.upperBound.x - this.lowerBound.x;
        const wy = this.upperBound.y - this.lowerBound.y;
        return 2 * (wx + wy);
    }
    /**
     * Combine an AABB into this one.
     */ Combine1(aabb) {
        this.lowerBound.x = Math.min(this.lowerBound.x, aabb.lowerBound.x);
        this.lowerBound.y = Math.min(this.lowerBound.y, aabb.lowerBound.y);
        this.upperBound.x = Math.max(this.upperBound.x, aabb.upperBound.x);
        this.upperBound.y = Math.max(this.upperBound.y, aabb.upperBound.y);
        return this;
    }
    /**
     * Combine two AABBs into this one.
     */ Combine2(aabb1, aabb2) {
        this.lowerBound.x = Math.min(aabb1.lowerBound.x, aabb2.lowerBound.x);
        this.lowerBound.y = Math.min(aabb1.lowerBound.y, aabb2.lowerBound.y);
        this.upperBound.x = Math.max(aabb1.upperBound.x, aabb2.upperBound.x);
        this.upperBound.y = Math.max(aabb1.upperBound.y, aabb2.upperBound.y);
        return this;
    }
    static Combine(aabb1, aabb2, out) {
        out.Combine2(aabb1, aabb2);
        return out;
    }
    /**
     * Does this aabb contain the provided AABB.
     */ Contains(aabb) {
        return this.lowerBound.x <= aabb.lowerBound.x && this.lowerBound.y <= aabb.lowerBound.y && aabb.upperBound.x <= this.upperBound.x && aabb.upperBound.y <= this.upperBound.y;
    }
    // From Real-time Collision Detection, p179.
    RayCast(output, input) {
        let tmin = -b2_common_1.b2_maxFloat;
        let tmax = b2_common_1.b2_maxFloat;
        const p_x = input.p1.x;
        const p_y = input.p1.y;
        const d_x = input.p2.x - input.p1.x;
        const d_y = input.p2.y - input.p1.y;
        const absD_x = Math.abs(d_x);
        const absD_y = Math.abs(d_y);
        const { normal } = output;
        if (absD_x < b2_common_1.b2_epsilon) {
            // Parallel.
            if (p_x < this.lowerBound.x || this.upperBound.x < p_x) return false;
        } else {
            const inv_d = 1 / d_x;
            let t1 = (this.lowerBound.x - p_x) * inv_d;
            let t2 = (this.upperBound.x - p_x) * inv_d;
            // Sign of the normal vector.
            let s = -1;
            if (t1 > t2) {
                const t3 = t1;
                t1 = t2;
                t2 = t3;
                s = 1;
            }
            // Push the min up
            if (t1 > tmin) {
                normal.x = s;
                normal.y = 0;
                tmin = t1;
            }
            // Pull the max down
            tmax = Math.min(tmax, t2);
            if (tmin > tmax) return false;
        }
        if (absD_y < b2_common_1.b2_epsilon) {
            // Parallel.
            if (p_y < this.lowerBound.y || this.upperBound.y < p_y) return false;
        } else {
            const inv_d = 1 / d_y;
            let t1 = (this.lowerBound.y - p_y) * inv_d;
            let t2 = (this.upperBound.y - p_y) * inv_d;
            // Sign of the normal vector.
            let s = -1;
            if (t1 > t2) {
                const t3 = t1;
                t1 = t2;
                t2 = t3;
                s = 1;
            }
            // Push the min up
            if (t1 > tmin) {
                normal.x = 0;
                normal.y = s;
                tmin = t1;
            }
            // Pull the max down
            tmax = Math.min(tmax, t2);
            if (tmin > tmax) return false;
        }
        // Does the ray start inside the box?
        // Does the ray intersect beyond the max fraction?
        if (tmin < 0 || input.maxFraction < tmin) return false;
        // Intersection.
        output.fraction = tmin;
        return true;
    }
    TestContain(point) {
        if (point.x < this.lowerBound.x || this.upperBound.x < point.x) return false;
        if (point.y < this.lowerBound.y || this.upperBound.y < point.y) return false;
        return true;
    }
    TestOverlap(other) {
        if (this.upperBound.x < other.lowerBound.x) return false;
        if (this.upperBound.y < other.lowerBound.y) return false;
        if (other.upperBound.x < this.lowerBound.x) return false;
        if (other.upperBound.y < this.lowerBound.y) return false;
        return true;
    }
}
exports.b2AABB = b2AABB;
/**
 * Clipping for contact manifolds.
 * Sutherland-Hodgman clipping.
 */ function b2ClipSegmentToLine(vOut, [vIn0, vIn1], normal, offset, vertexIndexA) {
    // Start with no output points
    let count = 0;
    // Calculate the distance of end points to the line
    const distance0 = b2_math_1.b2Vec2.Dot(normal, vIn0.v) - offset;
    const distance1 = b2_math_1.b2Vec2.Dot(normal, vIn1.v) - offset;
    // If the points are behind the plane
    if (distance0 <= 0) vOut[count++].Copy(vIn0);
    if (distance1 <= 0) vOut[count++].Copy(vIn1);
    // If the points are on different sides of the plane
    if (distance0 * distance1 < 0) {
        // Find intersection point of edge and plane
        const interp = distance0 / (distance0 - distance1);
        const { v, id } = vOut[count];
        v.x = vIn0.v.x + interp * (vIn1.v.x - vIn0.v.x);
        v.y = vIn0.v.y + interp * (vIn1.v.y - vIn0.v.y);
        // VertexA is hitting edgeB.
        id.cf.indexA = vertexIndexA;
        id.cf.indexB = vIn0.id.cf.indexB;
        id.cf.typeA = b2ContactFeatureType.e_vertex;
        id.cf.typeB = b2ContactFeatureType.e_face;
        ++count;
    // b2Assert(count === 2);
    }
    return count;
}
exports.b2ClipSegmentToLine = b2ClipSegmentToLine;
const b2TestOverlap_s_input = new b2_distance_1.b2DistanceInput();
const b2TestOverlap_s_simplexCache = new b2_distance_1.b2SimplexCache();
const b2TestOverlap_s_output = new b2_distance_1.b2DistanceOutput();
/**
 * Determine if two generic shapes overlap.
 */ function b2TestOverlap(shapeA, indexA, shapeB, indexB, xfA, xfB) {
    const input = b2TestOverlap_s_input.Reset();
    input.proxyA.SetShape(shapeA, indexA);
    input.proxyB.SetShape(shapeB, indexB);
    input.transformA.Copy(xfA);
    input.transformB.Copy(xfB);
    input.useRadii = true;
    const simplexCache = b2TestOverlap_s_simplexCache.Reset();
    simplexCache.count = 0;
    const output = b2TestOverlap_s_output.Reset();
    (0, b2_distance_1.b2Distance)(output, simplexCache, input);
    return output.distance < 10 * b2_common_1.b2_epsilon;
}
exports.b2TestOverlap = b2TestOverlap;
const b2RecurseHull_s_e = new b2_math_1.b2Vec2();
const b2RecurseHull_s_c = new b2_math_1.b2Vec2();
const emptyHull = [];
/** quickhull recursion */ function b2RecurseHull(p1, p2, ps) {
    if (ps.length === 0) return emptyHull;
    // create an edge vector pointing from p1 to p2
    const e = b2_math_1.b2Vec2.Subtract(p2, p1, b2RecurseHull_s_e);
    e.Normalize();
    // discard points left of e and find point furthest to the right of e
    const rightPoints = [];
    let bestIndex = 0;
    let bestDistance = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Subtract(ps[bestIndex], p1, b2RecurseHull_s_c), e);
    if (bestDistance > 0) rightPoints.push(ps[bestIndex]);
    for(let i = 1; i < ps.length; ++i){
        const distance = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Subtract(ps[i], p1, b2RecurseHull_s_c), e);
        if (distance > bestDistance) {
            bestIndex = i;
            bestDistance = distance;
        }
        if (distance > 0) rightPoints.push(ps[i]);
    }
    if (bestDistance < 2 * b2_common_1.b2_linearSlop) return emptyHull;
    const bestPoint = ps[bestIndex];
    // compute hull to the right of p1-bestPoint
    const hull1 = b2RecurseHull(p1, bestPoint, rightPoints);
    // compute hull to the right of bestPoint-p2
    const hull2 = b2RecurseHull(bestPoint, p2, rightPoints);
    // stich together hulls
    const hull = [
        ...hull1,
        bestPoint,
        ...hull2
    ];
    (0, b2_common_1.b2Assert)(hull.length < b2_settings_1.b2_maxPolygonVertices);
    return hull;
}
const b2ComputeHull_s_e = new b2_math_1.b2Vec2();
const b2ComputeHull_s_v = new b2_math_1.b2Vec2();
const b2ComputeHull_s_c = new b2_math_1.b2Vec2();
const b2ComputeHull_s_d = new b2_math_1.b2Vec2();
const b2ComputeHull_s_aabb = new b2AABB();
/**
 * Compute the convex hull of a set of points.
 * quickhull algorithm
 * - merges vertices based on b2_linearSlop
 * - removes collinear points using b2_linearSlop
 * - returns an empty hull if it fails
 *
 * Some failure cases:
 * - all points very close together
 * - all points on a line
 * - less than 3 points
 * - more than b2_maxPolygonVertices points
 *
 * This welds close points and removes collinear points.
 *
 * @returns an empty hull if it fails.
 */ function b2ComputeHull(points, count) {
    if (count < 3 || count > b2_settings_1.b2_maxPolygonVertices) // check your data
    return emptyHull;
    count = Math.min(count, b2_settings_1.b2_maxPolygonVertices);
    const aabb = b2ComputeHull_s_aabb;
    aabb.lowerBound.Set(b2_common_1.b2_maxFloat, b2_common_1.b2_maxFloat);
    aabb.upperBound.Set(-b2_common_1.b2_maxFloat, -b2_common_1.b2_maxFloat);
    // Perform aggressive point welding. First point always remains.
    // Also compute the bounding box for later.
    const ps = [];
    const tolSqr = 16 * b2_common_1.b2_linearSlop * b2_common_1.b2_linearSlop;
    for(let i = 0; i < count; ++i){
        b2_math_1.b2Vec2.Min(aabb.lowerBound, points[i], aabb.lowerBound);
        b2_math_1.b2Vec2.Max(aabb.upperBound, points[i], aabb.upperBound);
        const vi = points[i];
        let unique = true;
        for(let j = 0; j < i; ++j){
            const vj = points[j];
            const distSqr = b2_math_1.b2Vec2.DistanceSquared(vi, vj);
            if (distSqr < tolSqr) {
                unique = false;
                break;
            }
        }
        if (unique) ps.push(vi);
    }
    let n = ps.length;
    if (n < 3) // all points very close together, check your data and check your scale
    return emptyHull;
    // Find an extreme point as the first point on the hull
    const c = aabb.GetCenter(b2ComputeHull_s_c);
    let i1 = 0;
    let dsq1 = b2_math_1.b2Vec2.DistanceSquared(c, ps[i1]);
    for(let i = 1; i < n; ++i){
        const dsq = b2_math_1.b2Vec2.DistanceSquared(c, ps[i]);
        if (dsq > dsq1) {
            i1 = i;
            dsq1 = dsq;
        }
    }
    // remove p1 from working set
    const p1 = ps[i1];
    ps[i1] = ps[n - 1];
    n -= 1;
    let i2 = 0;
    let dsq2 = b2_math_1.b2Vec2.DistanceSquared(p1, ps[i2]);
    for(let i = 1; i < n; ++i){
        const dsq = b2_math_1.b2Vec2.DistanceSquared(p1, ps[i]);
        if (dsq > dsq2) {
            i2 = i;
            dsq2 = dsq;
        }
    }
    // remove p2 from working set
    const p2 = ps[i2];
    ps[i2] = ps[n - 1];
    n -= 1;
    // split the points into points that are left and right of the line p1-p2.
    const rightPoints = [];
    const leftPoints = [];
    const e = b2_math_1.b2Vec2.Subtract(p2, p1, b2ComputeHull_s_e);
    e.Normalize();
    for(let i = 0; i < n; ++i){
        const d = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Subtract(ps[i], p1, b2ComputeHull_s_d), e);
        // slop used here to skip points that are very close to the line p1-p2
        if (d >= 2 * b2_common_1.b2_linearSlop) rightPoints.push(ps[i]);
        else if (d <= -2 * b2_common_1.b2_linearSlop) leftPoints.push(ps[i]);
    }
    // compute hulls on right and left
    const hull1 = b2RecurseHull(p1, p2, rightPoints);
    const hull2 = b2RecurseHull(p2, p1, leftPoints);
    if (hull1.length === 0 && hull2.length === 0) // all points collinear
    return emptyHull;
    // stitch hulls together, preserving CCW winding order
    const hull = [
        p1,
        ...hull1,
        p2,
        ...hull2
    ];
    (0, b2_common_1.b2Assert)(hull.length <= b2_settings_1.b2_maxPolygonVertices);
    // merge collinear
    let searching = true;
    while(searching && hull.length > 2){
        searching = false;
        for(let i = 0; i < hull.length; ++i){
            const i1b = i;
            const i2b = (i + 1) % hull.length;
            const i3b = (i + 2) % hull.length;
            const p1b = hull[i1b];
            const p2b = hull[i2b];
            const p3b = hull[i3b];
            const eb = b2_math_1.b2Vec2.Subtract(p3b, p1b, b2ComputeHull_s_e);
            eb.Normalize();
            const v = b2_math_1.b2Vec2.Subtract(p2b, p1b, b2ComputeHull_s_v);
            const distance = b2_math_1.b2Vec2.Cross(v, eb);
            if (distance <= 2 * b2_common_1.b2_linearSlop) {
                // remove midpoint from hull
                hull.splice(i2b, 1);
                // continue searching for collinear points
                searching = true;
                break;
            }
        }
    }
    if (hull.length < 3) // all points collinear, shouldn't be reached since this was validated above
    hull.length = 0;
    return hull;
}
exports.b2ComputeHull = b2ComputeHull;
const b2ValidateHull_s_e = new b2_math_1.b2Vec2();
const b2ValidateHull_s_d = new b2_math_1.b2Vec2();
/**
 * This determines if a hull is valid. Checks for:
 * - convexity
 * - collinear points
 * This is expensive and should not be called at runtime.
 */ function b2ValidateHull(hull, count) {
    if (count < 3 || b2_settings_1.b2_maxPolygonVertices < count) return false;
    // test that every point is behind every edge
    for(let i = 0; i < count; ++i){
        // create an edge vector
        const i1 = i;
        const i2 = i < count - 1 ? i1 + 1 : 0;
        const p = hull[i1];
        const e = b2_math_1.b2Vec2.Subtract(hull[i2], p, b2ValidateHull_s_e);
        e.Normalize();
        for(let j = 0; j < count; ++j){
            // skip points that subtend the current edge
            if (j === i1 || j === i2) continue;
            const distance = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Subtract(hull[j], p, b2ValidateHull_s_d), e);
            if (distance >= 0) return false;
        }
    }
    // test for collinear points
    for(let i = 0; i < count; ++i){
        const i1 = i;
        const i2 = (i + 1) % count;
        const i3 = (i + 2) % count;
        const p1 = hull[i1];
        const p2 = hull[i2];
        const p3 = hull[i3];
        const e = b2_math_1.b2Vec2.Subtract(p3, p1, b2ValidateHull_s_e);
        e.Normalize();
        const distance = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Subtract(p2, p1, b2ValidateHull_s_d), e);
        if (distance <= b2_common_1.b2_linearSlop) // p1-p2-p3 are collinear
        return false;
    }
    return true;
}
exports.b2ValidateHull = b2ValidateHull;

},{"35ebc3f124522341":"a1SE4","9f2596239176a20c":"3MJcc","2cde4cbc10fc6e85":"daiYW","1e849bb5fa8efa05":"hZX5U"}],"daiYW":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2ShapeCast = exports.b2Distance = exports.b2Gjk = exports.b2ShapeCastOutput = exports.b2ShapeCastInput = exports.b2DistanceOutput = exports.b2DistanceInput = exports.b2SimplexCache = exports.b2DistanceProxy = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("302cc6ae9c2eb699");
const b2_math_1 = require("95552e0120448033");
/**
 * A distance proxy is used by the GJK algorithm.
 * It encapsulates any shape.
 */ class b2DistanceProxy {
    constructor(){
        this.m_buffer = (0, b2_common_1.b2MakeArray)(2, b2_math_1.b2Vec2);
        this.m_vertices = this.m_buffer;
        this.m_count = 0;
        this.m_radius = 0;
    }
    Copy(other) {
        if (other.m_vertices === other.m_buffer) {
            this.m_vertices = this.m_buffer;
            // eslint-disable-next-line prefer-destructuring
            this.m_buffer[0] = other.m_buffer[0];
            // eslint-disable-next-line prefer-destructuring
            this.m_buffer[1] = other.m_buffer[1];
        } else this.m_vertices = other.m_vertices;
        this.m_count = other.m_count;
        this.m_radius = other.m_radius;
        return this;
    }
    Reset() {
        this.m_vertices = this.m_buffer;
        this.m_count = 0;
        this.m_radius = 0;
        return this;
    }
    SetShape(shape, index) {
        shape.SetupDistanceProxy(this, index);
    }
    /**
     * Initialize the proxy using the given shape. The shape
     * must remain in scope while the proxy is in use.
     * Initialize the proxy using a vertex cloud and radius. The vertices
     * must remain in scope while the proxy is in use.
     */ SetVerticesRadius(vertices, count, radius) {
        this.m_vertices = vertices;
        this.m_count = count;
        this.m_radius = radius;
    }
    /** Get the supporting vertex index in the given direction. */ GetSupport(d) {
        let bestIndex = 0;
        let bestValue = b2_math_1.b2Vec2.Dot(this.m_vertices[0], d);
        for(let i = 1; i < this.m_count; ++i){
            const value = b2_math_1.b2Vec2.Dot(this.m_vertices[i], d);
            if (value > bestValue) {
                bestIndex = i;
                bestValue = value;
            }
        }
        return bestIndex;
    }
    /** Get the supporting vertex in the given direction. */ GetSupportVertex(d) {
        let bestIndex = 0;
        let bestValue = b2_math_1.b2Vec2.Dot(this.m_vertices[0], d);
        for(let i = 1; i < this.m_count; ++i){
            const value = b2_math_1.b2Vec2.Dot(this.m_vertices[i], d);
            if (value > bestValue) {
                bestIndex = i;
                bestValue = value;
            }
        }
        return this.m_vertices[bestIndex];
    }
    /** Get the vertex count. */ GetVertexCount() {
        return this.m_count;
    }
    /** Get a vertex by index. Used by b2Distance. */ GetVertex(index) {
        // DEBUG: b2Assert(0 <= index && index < this.m_count);
        return this.m_vertices[index];
    }
}
exports.b2DistanceProxy = b2DistanceProxy;
/**
 * Used to warm start b2Distance.
 * Set count to zero on first call.
 */ class b2SimplexCache {
    constructor(){
        /** Length or area */ this.metric = 0;
        this.count = 0;
        /** Vertices on shape A */ this.indexA = [
            0,
            0,
            0
        ];
        /** Vertices on shape B */ this.indexB = [
            0,
            0,
            0
        ];
    }
    Reset() {
        this.metric = 0;
        this.count = 0;
        return this;
    }
}
exports.b2SimplexCache = b2SimplexCache;
/**
 * Input for b2Distance.
 * You have to option to use the shape radii
 * in the computation. Even
 */ class b2DistanceInput {
    constructor(){
        this.proxyA = new b2DistanceProxy();
        this.proxyB = new b2DistanceProxy();
        this.transformA = new b2_math_1.b2Transform();
        this.transformB = new b2_math_1.b2Transform();
        this.useRadii = false;
    }
    Reset() {
        this.proxyA.Reset();
        this.proxyB.Reset();
        this.transformA.SetIdentity();
        this.transformB.SetIdentity();
        this.useRadii = false;
        return this;
    }
}
exports.b2DistanceInput = b2DistanceInput;
/**
 * Output for b2Distance.
 */ class b2DistanceOutput {
    constructor(){
        /** Closest point on shapeA */ this.pointA = new b2_math_1.b2Vec2();
        /** Closest point on shapeB */ this.pointB = new b2_math_1.b2Vec2();
        this.distance = 0;
        /** Number of GJK iterations used */ this.iterations = 0;
    }
    Reset() {
        this.pointA.SetZero();
        this.pointB.SetZero();
        this.distance = 0;
        this.iterations = 0;
        return this;
    }
}
exports.b2DistanceOutput = b2DistanceOutput;
/**
 * Input parameters for b2ShapeCast
 */ class b2ShapeCastInput {
    constructor(){
        this.proxyA = new b2DistanceProxy();
        this.proxyB = new b2DistanceProxy();
        this.transformA = new b2_math_1.b2Transform();
        this.transformB = new b2_math_1.b2Transform();
        this.translationB = new b2_math_1.b2Vec2();
    }
}
exports.b2ShapeCastInput = b2ShapeCastInput;
/**
 * Output results for b2ShapeCast
 */ class b2ShapeCastOutput {
    constructor(){
        this.point = new b2_math_1.b2Vec2();
        this.normal = new b2_math_1.b2Vec2();
        this.lambda = 0;
        this.iterations = 0;
    }
}
exports.b2ShapeCastOutput = b2ShapeCastOutput;
/** GJK using Voronoi regions (Christer Ericson) and Barycentric coordinates. */ exports.b2Gjk = {
    calls: 0,
    iters: 0,
    maxIters: 0,
    reset () {
        this.calls = 0;
        this.iters = 0;
        this.maxIters = 0;
    }
};
class b2SimplexVertex {
    constructor(){
        this.wA = new b2_math_1.b2Vec2(); // support point in proxyA
        this.wB = new b2_math_1.b2Vec2(); // support point in proxyB
        this.w = new b2_math_1.b2Vec2(); // wB - wA
        this.a = 0; // barycentric coordinate for closest point
        this.indexA = 0; // wA index
        this.indexB = 0; // wB index
    }
    Copy(other) {
        this.wA.Copy(other.wA); // support point in proxyA
        this.wB.Copy(other.wB); // support point in proxyB
        this.w.Copy(other.w); // wB - wA
        this.a = other.a; // barycentric coordinate for closest point
        this.indexA = other.indexA; // wA index
        this.indexB = other.indexB; // wB index
        return this;
    }
}
class b2Simplex {
    constructor(){
        this.m_v1 = new b2SimplexVertex();
        this.m_v2 = new b2SimplexVertex();
        this.m_v3 = new b2SimplexVertex();
        this.m_count = 0;
        this.m_vertices = [
            this.m_v1,
            this.m_v2,
            this.m_v3
        ];
    }
    ReadCache(cache, proxyA, transformA, proxyB, transformB) {
        // DEBUG: b2Assert(cache.count <= 3);
        // Copy data from cache.
        this.m_count = cache.count;
        const vertices = this.m_vertices;
        for(let i = 0; i < this.m_count; ++i){
            const v = vertices[i];
            v.indexA = cache.indexA[i];
            v.indexB = cache.indexB[i];
            const wALocal = proxyA.GetVertex(v.indexA);
            const wBLocal = proxyB.GetVertex(v.indexB);
            b2_math_1.b2Transform.MultiplyVec2(transformA, wALocal, v.wA);
            b2_math_1.b2Transform.MultiplyVec2(transformB, wBLocal, v.wB);
            b2_math_1.b2Vec2.Subtract(v.wB, v.wA, v.w);
            v.a = 0;
        }
        // Compute the new simplex metric, if it is substantially different than
        // old metric then flush the simplex.
        if (this.m_count > 1) {
            const metric1 = cache.metric;
            const metric2 = this.GetMetric();
            if (metric2 < 0.5 * metric1 || 2 * metric1 < metric2 || metric2 < b2_common_1.b2_epsilon) // Reset the simplex.
            this.m_count = 0;
        }
        // If the cache is empty or invalid ...
        if (this.m_count === 0) {
            const v = vertices[0];
            v.indexA = 0;
            v.indexB = 0;
            const wALocal = proxyA.GetVertex(0);
            const wBLocal = proxyB.GetVertex(0);
            b2_math_1.b2Transform.MultiplyVec2(transformA, wALocal, v.wA);
            b2_math_1.b2Transform.MultiplyVec2(transformB, wBLocal, v.wB);
            b2_math_1.b2Vec2.Subtract(v.wB, v.wA, v.w);
            v.a = 1;
            this.m_count = 1;
        }
    }
    WriteCache(cache) {
        cache.metric = this.GetMetric();
        cache.count = this.m_count;
        const vertices = this.m_vertices;
        for(let i = 0; i < this.m_count; ++i){
            cache.indexA[i] = vertices[i].indexA;
            cache.indexB[i] = vertices[i].indexB;
        }
    }
    GetSearchDirection(out) {
        switch(this.m_count){
            case 1:
                return b2_math_1.b2Vec2.Negate(this.m_v1.w, out);
            case 2:
                {
                    const e12 = b2_math_1.b2Vec2.Subtract(this.m_v2.w, this.m_v1.w, out);
                    const sgn = b2_math_1.b2Vec2.Cross(e12, b2_math_1.b2Vec2.Negate(this.m_v1.w, b2_math_1.b2Vec2.s_t0));
                    if (sgn > 0) // Origin is left of e12.
                    return b2_math_1.b2Vec2.CrossOneVec2(e12, out);
                    // Origin is right of e12.
                    return b2_math_1.b2Vec2.CrossVec2One(e12, out);
                }
            default:
                // DEBUG: b2Assert(false);
                return out.SetZero();
        }
    }
    GetClosestPoint(out) {
        switch(this.m_count){
            case 0:
                // DEBUG: b2Assert(false);
                return out.SetZero();
            case 1:
                return out.Copy(this.m_v1.w);
            case 2:
                return out.Set(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
            case 3:
                return out.SetZero();
            default:
                // DEBUG: b2Assert(false);
                return out.SetZero();
        }
    }
    GetWitnessPoints(pA, pB) {
        switch(this.m_count){
            case 0:
                break;
            case 1:
                pA.Copy(this.m_v1.wA);
                pB.Copy(this.m_v1.wB);
                break;
            case 2:
                pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
                pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
                pB.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
                pB.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
                break;
            case 3:
                pB.x = pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
                pB.y = pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
                break;
            default:
                break;
        }
    }
    GetMetric() {
        switch(this.m_count){
            case 0:
                // DEBUG: b2Assert(false);
                return 0;
            case 1:
                return 0;
            case 2:
                return b2_math_1.b2Vec2.Distance(this.m_v1.w, this.m_v2.w);
            case 3:
                return b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Subtract(this.m_v2.w, this.m_v1.w, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.Subtract(this.m_v3.w, this.m_v1.w, b2_math_1.b2Vec2.s_t1));
            default:
                // DEBUG: b2Assert(false);
                return 0;
        }
    }
    /**
     * Solve a line segment using barycentric coordinates.
     * p = a1 * w1 + a2 * w2
     * a1 + a2 = 1
     * The vector from the origin to the closest point on the line is
     * perpendicular to the line.
     * e12 = w2 - w1
     * dot(p, e) = 0
     * a1 * dot(w1, e) + a2 * dot(w2, e) = 0
     * 2-by-2 linear system
     * [1      1     ][a1] = [1]
     * [w1.e12 w2.e12][a2] = [0]
     * Define
     * d12_1 =  dot(w2, e12)
     * d12_2 = -dot(w1, e12)
     * d12 = d12_1 + d12_2
     * Solution
     * a1 = d12_1 / d12
     * a2 = d12_2 / d12
     */ Solve2() {
        const w1 = this.m_v1.w;
        const w2 = this.m_v2.w;
        const e12 = b2_math_1.b2Vec2.Subtract(w2, w1, b2Simplex.s_e12);
        // w1 region
        const d12_2 = -b2_math_1.b2Vec2.Dot(w1, e12);
        if (d12_2 <= 0) {
            // a2 <= 0, so we clamp it to 0
            this.m_v1.a = 1;
            this.m_count = 1;
            return;
        }
        // w2 region
        const d12_1 = b2_math_1.b2Vec2.Dot(w2, e12);
        if (d12_1 <= 0) {
            // a1 <= 0, so we clamp it to 0
            this.m_v2.a = 1;
            this.m_count = 1;
            this.m_v1.Copy(this.m_v2);
            return;
        }
        // Must be in e12 region.
        const inv_d12 = 1 / (d12_1 + d12_2);
        this.m_v1.a = d12_1 * inv_d12;
        this.m_v2.a = d12_2 * inv_d12;
        this.m_count = 2;
    }
    /**
     * Possible regions:
     * - points[2]
     * - edge points[0]-points[2]
     * - edge points[1]-points[2]
     * - inside the triangle
     */ Solve3() {
        const w1 = this.m_v1.w;
        const w2 = this.m_v2.w;
        const w3 = this.m_v3.w;
        // Edge12
        // [1      1     ][a1] = [1]
        // [w1.e12 w2.e12][a2] = [0]
        // a3 = 0
        const e12 = b2_math_1.b2Vec2.Subtract(w2, w1, b2Simplex.s_e12);
        const w1e12 = b2_math_1.b2Vec2.Dot(w1, e12);
        const w2e12 = b2_math_1.b2Vec2.Dot(w2, e12);
        const d12_1 = w2e12;
        const d12_2 = -w1e12;
        // Edge13
        // [1      1     ][a1] = [1]
        // [w1.e13 w3.e13][a3] = [0]
        // a2 = 0
        const e13 = b2_math_1.b2Vec2.Subtract(w3, w1, b2Simplex.s_e13);
        const w1e13 = b2_math_1.b2Vec2.Dot(w1, e13);
        const w3e13 = b2_math_1.b2Vec2.Dot(w3, e13);
        const d13_1 = w3e13;
        const d13_2 = -w1e13;
        // Edge23
        // [1      1     ][a2] = [1]
        // [w2.e23 w3.e23][a3] = [0]
        // a1 = 0
        const e23 = b2_math_1.b2Vec2.Subtract(w3, w2, b2Simplex.s_e23);
        const w2e23 = b2_math_1.b2Vec2.Dot(w2, e23);
        const w3e23 = b2_math_1.b2Vec2.Dot(w3, e23);
        const d23_1 = w3e23;
        const d23_2 = -w2e23;
        // Triangle123
        const n123 = b2_math_1.b2Vec2.Cross(e12, e13);
        const d123_1 = n123 * b2_math_1.b2Vec2.Cross(w2, w3);
        const d123_2 = n123 * b2_math_1.b2Vec2.Cross(w3, w1);
        const d123_3 = n123 * b2_math_1.b2Vec2.Cross(w1, w2);
        // w1 region
        if (d12_2 <= 0 && d13_2 <= 0) {
            this.m_v1.a = 1;
            this.m_count = 1;
            return;
        }
        // e12
        if (d12_1 > 0 && d12_2 > 0 && d123_3 <= 0) {
            const inv_d12 = 1 / (d12_1 + d12_2);
            this.m_v1.a = d12_1 * inv_d12;
            this.m_v2.a = d12_2 * inv_d12;
            this.m_count = 2;
            return;
        }
        // e13
        if (d13_1 > 0 && d13_2 > 0 && d123_2 <= 0) {
            const inv_d13 = 1 / (d13_1 + d13_2);
            this.m_v1.a = d13_1 * inv_d13;
            this.m_v3.a = d13_2 * inv_d13;
            this.m_count = 2;
            this.m_v2.Copy(this.m_v3);
            return;
        }
        // w2 region
        if (d12_1 <= 0 && d23_2 <= 0) {
            this.m_v2.a = 1;
            this.m_count = 1;
            this.m_v1.Copy(this.m_v2);
            return;
        }
        // w3 region
        if (d13_1 <= 0 && d23_1 <= 0) {
            this.m_v3.a = 1;
            this.m_count = 1;
            this.m_v1.Copy(this.m_v3);
            return;
        }
        // e23
        if (d23_1 > 0 && d23_2 > 0 && d123_1 <= 0) {
            const inv_d23 = 1 / (d23_1 + d23_2);
            this.m_v2.a = d23_1 * inv_d23;
            this.m_v3.a = d23_2 * inv_d23;
            this.m_count = 2;
            this.m_v1.Copy(this.m_v3);
            return;
        }
        // Must be in triangle123
        const inv_d123 = 1 / (d123_1 + d123_2 + d123_3);
        this.m_v1.a = d123_1 * inv_d123;
        this.m_v2.a = d123_2 * inv_d123;
        this.m_v3.a = d123_3 * inv_d123;
        this.m_count = 3;
    }
}
b2Simplex.s_e12 = new b2_math_1.b2Vec2();
b2Simplex.s_e13 = new b2_math_1.b2Vec2();
b2Simplex.s_e23 = new b2_math_1.b2Vec2();
const b2Distance_s_simplex = new b2Simplex();
const b2Distance_s_saveA = [
    0,
    0,
    0
];
const b2Distance_s_saveB = [
    0,
    0,
    0
];
const b2Distance_s_p = new b2_math_1.b2Vec2();
const b2Distance_s_d = new b2_math_1.b2Vec2();
const b2Distance_s_normal = new b2_math_1.b2Vec2();
const b2Distance_s_supportA = new b2_math_1.b2Vec2();
const b2Distance_s_supportB = new b2_math_1.b2Vec2();
/**
 * Compute the closest points between two shapes. Supports any combination of:
 * b2CircleShape, b2PolygonShape, b2EdgeShape. The simplex cache is input/output.
 * On the first call set b2SimplexCache.count to zero.
 */ function b2Distance(output, cache, input) {
    ++exports.b2Gjk.calls;
    const { proxyA, proxyB, transformA, transformB } = input;
    // Initialize the simplex.
    const simplex = b2Distance_s_simplex;
    simplex.ReadCache(cache, proxyA, transformA, proxyB, transformB);
    // Get simplex vertices as an array.
    const vertices = simplex.m_vertices;
    const k_maxIters = 20;
    // These store the vertices of the last simplex so that we
    // can check for duplicates and prevent cycling.
    const saveA = b2Distance_s_saveA;
    const saveB = b2Distance_s_saveB;
    let saveCount = 0;
    // Main iteration loop.
    let iter = 0;
    while(iter < k_maxIters){
        // Copy simplex so we can identify duplicates.
        saveCount = simplex.m_count;
        for(let i = 0; i < saveCount; ++i){
            saveA[i] = vertices[i].indexA;
            saveB[i] = vertices[i].indexB;
        }
        switch(simplex.m_count){
            case 1:
                break;
            case 2:
                simplex.Solve2();
                break;
            case 3:
                simplex.Solve3();
                break;
        }
        // If we have 3 points, then the origin is in the corresponding triangle.
        if (simplex.m_count === 3) break;
        // Get search direction.
        const d = simplex.GetSearchDirection(b2Distance_s_d);
        // Ensure the search direction is numerically fit.
        if (d.LengthSquared() < b2_common_1.b2_epsilon_sq) break;
        // Compute a tentative new simplex vertex using support points.
        const vertex = vertices[simplex.m_count];
        vertex.indexA = proxyA.GetSupport(b2_math_1.b2Rot.TransposeMultiplyVec2(transformA.q, b2_math_1.b2Vec2.Negate(d, b2_math_1.b2Vec2.s_t0), b2Distance_s_supportA));
        b2_math_1.b2Transform.MultiplyVec2(transformA, proxyA.GetVertex(vertex.indexA), vertex.wA);
        vertex.indexB = proxyB.GetSupport(b2_math_1.b2Rot.TransposeMultiplyVec2(transformB.q, d, b2Distance_s_supportB));
        b2_math_1.b2Transform.MultiplyVec2(transformB, proxyB.GetVertex(vertex.indexB), vertex.wB);
        b2_math_1.b2Vec2.Subtract(vertex.wB, vertex.wA, vertex.w);
        // Iteration count is equated to the number of support point calls.
        ++iter;
        ++exports.b2Gjk.iters;
        // Check for duplicate support points. This is the main termination criteria.
        let duplicate = false;
        for(let i = 0; i < saveCount; ++i)if (vertex.indexA === saveA[i] && vertex.indexB === saveB[i]) {
            duplicate = true;
            break;
        }
        // If we found a duplicate support point we must exit to avoid cycling.
        if (duplicate) break;
        // New vertex is ok and needed.
        ++simplex.m_count;
    }
    exports.b2Gjk.maxIters = Math.max(exports.b2Gjk.maxIters, iter);
    // Prepare output.
    simplex.GetWitnessPoints(output.pointA, output.pointB);
    output.distance = b2_math_1.b2Vec2.Distance(output.pointA, output.pointB);
    output.iterations = iter;
    // Cache the simplex.
    simplex.WriteCache(cache);
    // Apply radii if requested
    if (input.useRadii) {
        if (output.distance < b2_common_1.b2_epsilon) {
            // Shapes are too close to safely compute normal
            const p = b2_math_1.b2Vec2.Mid(output.pointA, output.pointB, b2Distance_s_p);
            output.pointA.Copy(p);
            output.pointB.Copy(p);
            output.distance = 0;
        } else {
            // Keep closest points on perimeter even if overlapped, this way
            // the points move smoothly.
            const rA = proxyA.m_radius;
            const rB = proxyB.m_radius;
            const normal = b2_math_1.b2Vec2.Subtract(output.pointB, output.pointA, b2Distance_s_normal);
            normal.Normalize();
            output.distance = Math.max(0, output.distance - rA - rB);
            output.pointA.AddScaled(rA, normal);
            output.pointB.SubtractScaled(rB, normal);
        }
    }
}
exports.b2Distance = b2Distance;
const b2ShapeCast_s_n = new b2_math_1.b2Vec2();
const b2ShapeCast_s_simplex = new b2Simplex();
const b2ShapeCast_s_wA = new b2_math_1.b2Vec2();
const b2ShapeCast_s_wB = new b2_math_1.b2Vec2();
const b2ShapeCast_s_v = new b2_math_1.b2Vec2();
const b2ShapeCast_s_p = new b2_math_1.b2Vec2();
const b2ShapeCast_s_pointA = new b2_math_1.b2Vec2();
const b2ShapeCast_s_pointB = new b2_math_1.b2Vec2();
/**
 * Perform a linear shape cast of shape B moving and shape A fixed. Determines the hit point, normal, and translation fraction.
 * GJK-raycast
 * Algorithm by Gino van den Bergen.
 * "Smooth Mesh Contacts with GJK" in Game Physics Pearls. 2010
 *
 * @returns true if hit, false if there is no hit or an initial overlap
 */ function b2ShapeCast(output, input) {
    output.iterations = 0;
    output.lambda = 1;
    output.normal.SetZero();
    output.point.SetZero();
    const { proxyA, proxyB } = input;
    const radiusA = Math.max(proxyA.m_radius, b2_common_1.b2_polygonRadius);
    const radiusB = Math.max(proxyB.m_radius, b2_common_1.b2_polygonRadius);
    const radius = radiusA + radiusB;
    const xfA = input.transformA;
    const xfB = input.transformB;
    const r = input.translationB;
    const n = b2ShapeCast_s_n.SetZero();
    let lambda = 0;
    // Initial simplex
    const simplex = b2ShapeCast_s_simplex;
    simplex.m_count = 0;
    // Get simplex vertices as an array.
    // b2SimplexVertex* vertices = &simplex.m_v1;
    const vertices = simplex.m_vertices;
    // Get support point in -r direction
    let indexA = proxyA.GetSupport(b2_math_1.b2Rot.TransposeMultiplyVec2(xfA.q, b2_math_1.b2Vec2.Negate(r, b2_math_1.b2Vec2.s_t1), b2_math_1.b2Vec2.s_t0));
    let wA = b2_math_1.b2Transform.MultiplyVec2(xfA, proxyA.GetVertex(indexA), b2ShapeCast_s_wA);
    let indexB = proxyB.GetSupport(b2_math_1.b2Rot.TransposeMultiplyVec2(xfB.q, r, b2_math_1.b2Vec2.s_t0));
    let wB = b2_math_1.b2Transform.MultiplyVec2(xfB, proxyB.GetVertex(indexB), b2ShapeCast_s_wB);
    const v = b2_math_1.b2Vec2.Subtract(wA, wB, b2ShapeCast_s_v);
    // Sigma is the target distance between polygons
    const sigma = Math.max(b2_common_1.b2_polygonRadius, radius - b2_common_1.b2_polygonRadius);
    const tolerance = 0.5 * b2_common_1.b2_linearSlop;
    // Main iteration loop.
    const k_maxIters = 20;
    let iter = 0;
    while(iter < k_maxIters && v.Length() - sigma > tolerance){
        // DEBUG: b2Assert(simplex.m_count < 3);
        output.iterations += 1;
        // Support in direction -v (A - B)
        indexA = proxyA.GetSupport(b2_math_1.b2Rot.TransposeMultiplyVec2(xfA.q, b2_math_1.b2Vec2.Negate(v, b2_math_1.b2Vec2.s_t1), b2_math_1.b2Vec2.s_t0));
        wA = b2_math_1.b2Transform.MultiplyVec2(xfA, proxyA.GetVertex(indexA), b2ShapeCast_s_wA);
        indexB = proxyB.GetSupport(b2_math_1.b2Rot.TransposeMultiplyVec2(xfB.q, v, b2_math_1.b2Vec2.s_t0));
        wB = b2_math_1.b2Transform.MultiplyVec2(xfB, proxyB.GetVertex(indexB), b2ShapeCast_s_wB);
        const p = b2_math_1.b2Vec2.Subtract(wA, wB, b2ShapeCast_s_p);
        // -v is a normal at p
        v.Normalize();
        // Intersect ray with plane
        const vp = b2_math_1.b2Vec2.Dot(v, p);
        const vr = b2_math_1.b2Vec2.Dot(v, r);
        if (vp - sigma > lambda * vr) {
            if (vr <= 0) return false;
            lambda = (vp - sigma) / vr;
            if (lambda > 1) return false;
            b2_math_1.b2Vec2.Negate(v, n);
            simplex.m_count = 0;
        }
        // Reverse simplex since it works with B - A.
        // Shift by lambda * r because we want the closest point to the current clip point.
        // Note that the support point p is not shifted because we want the plane equation
        // to be formed in unshifted space.
        const vertex = vertices[simplex.m_count];
        vertex.indexA = indexB;
        b2_math_1.b2Vec2.AddScaled(wB, lambda, r, vertex.wA);
        vertex.indexB = indexA;
        vertex.wB.Copy(wA);
        b2_math_1.b2Vec2.Subtract(vertex.wB, vertex.wA, vertex.w);
        vertex.a = 1;
        simplex.m_count += 1;
        switch(simplex.m_count){
            case 1:
                break;
            case 2:
                simplex.Solve2();
                break;
            case 3:
                simplex.Solve3();
                break;
        }
        // If we have 3 points, then the origin is in the corresponding triangle.
        if (simplex.m_count === 3) // Overlap
        return false;
        // Get search direction.
        simplex.GetClosestPoint(v);
        // Iteration count is equated to the number of support point calls.
        ++iter;
    }
    if (iter === 0) // Initial overlap
    return false;
    // Prepare output.
    const pointA = b2ShapeCast_s_pointA;
    const pointB = b2ShapeCast_s_pointB;
    simplex.GetWitnessPoints(pointA, pointB);
    if (v.LengthSquared() > 0) {
        b2_math_1.b2Vec2.Negate(v, n);
        n.Normalize();
    }
    b2_math_1.b2Vec2.AddScaled(pointA, radiusA, n, output.point);
    output.normal.Copy(n);
    output.lambda = lambda;
    output.iterations = iter;
    return true;
}
exports.b2ShapeCast = b2ShapeCast;

},{"302cc6ae9c2eb699":"a1SE4","95552e0120448033":"3MJcc"}],"cIbnI":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2Timer = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
/**
 * Timer for profiling. This has platform specific code and may
 * not work on every platform.
 */ class b2Timer {
    constructor(){
        this.m_start = performance.now();
    }
    /**
     * Reset the timer.
     */ Reset() {
        this.m_start = performance.now();
        return this;
    }
    /**
     * Get the time since construction or the last reset.
     */ GetMilliseconds() {
        return performance.now() - this.m_start;
    }
}
exports.b2Timer = b2Timer;

},{}],"46sAF":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2_augment = void 0;
function b2_augment(host, augmentations) {
    for (const key of Object.keys(augmentations)){
        const augmentation = augmentations[key];
        const original = host[key];
        // eslint-disable-next-line func-names
        const wrapper = function(...args) {
            return augmentation.call(this, original.bind(this), ...args);
        };
        Object.defineProperty(wrapper, "name", {
            value: key
        });
        host[key] = wrapper;
    }
}
exports.b2_augment = b2_augment;

},{}],"7dQ45":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"kL16e":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2BroadPhase = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_common_1 = require("2b88da309e990f8e");
const b2_dynamic_tree_1 = require("55f435e46bf813d7");
/**
 * The broad-phase is used for computing pairs and performing volume queries and ray casts.
 * This broad-phase does not persist pairs. Instead, this reports potentially new pairs.
 * It is up to the client to consume the new pairs and to track subsequent overlap.
 */ class b2BroadPhase {
    constructor(){
        this.m_tree = new b2_dynamic_tree_1.b2DynamicTree();
        this.m_proxyCount = 0;
        this.m_moveCount = 0;
        this.m_moveBuffer = [];
        this.m_pairCount = 0;
        this.m_pairBuffer = [];
        this.m_queryProxy = new b2_dynamic_tree_1.b2TreeNode();
        /** This is called from b2DynamicTree::Query when we are gathering pairs. */ this.QueryCallback = (proxy)=>{
            // A proxy cannot form a pair with itself.
            if (proxy.id === this.m_queryProxy.id) return true;
            if (proxy.moved && proxy.id > this.m_queryProxy.id) // Both proxies are moving. Avoid duplicate pairs.
            return true;
            // Grows the pair buffer as needed.
            this.m_pairBuffer[this.m_pairCount] = proxy.id < this.m_queryProxy.id ? [
                proxy,
                this.m_queryProxy
            ] : [
                this.m_queryProxy,
                proxy
            ];
            ++this.m_pairCount;
            return true;
        };
    }
    /**
     * Create a proxy with an initial AABB. Pairs are not reported until
     * UpdatePairs is called.
     */ CreateProxy(aabb, userData) {
        const proxy = this.m_tree.CreateProxy(aabb, userData);
        ++this.m_proxyCount;
        this.BufferMove(proxy);
        return proxy;
    }
    /**
     * Destroy a proxy. It is up to the client to remove any pairs.
     */ DestroyProxy(proxy) {
        this.UnBufferMove(proxy);
        --this.m_proxyCount;
        this.m_tree.DestroyProxy(proxy);
    }
    /**
     * Call MoveProxy as many times as you like, then when you are done
     * call UpdatePairs to finalized the proxy pairs (for your time step).
     */ MoveProxy(proxy, aabb, displacement) {
        const buffer = this.m_tree.MoveProxy(proxy, aabb, displacement);
        if (buffer) this.BufferMove(proxy);
    }
    /**
     * Call to trigger a re-processing of it's pairs on the next call to UpdatePairs.
     */ TouchProxy(proxy) {
        this.BufferMove(proxy);
    }
    /**
     * Get the number of proxies.
     */ GetProxyCount() {
        return this.m_proxyCount;
    }
    /**
     * Update the pairs. This results in pair callbacks. This can only add pairs.
     */ UpdatePairs(callback) {
        // Reset pair buffer
        this.m_pairCount = 0;
        // Perform tree queries for all moving proxies.
        for(let i = 0; i < this.m_moveCount; ++i){
            const queryProxy = this.m_moveBuffer[i];
            if (queryProxy === null) continue;
            this.m_queryProxy = queryProxy;
            // We have to query the tree with the fat AABB so that
            // we don't fail to create a pair that may touch later.
            const fatAABB = queryProxy.aabb;
            // Query tree, create pairs and add them pair buffer.
            this.m_tree.Query(fatAABB, this.QueryCallback);
        }
        // Send pairs to caller
        for(let i = 0; i < this.m_pairCount; ++i){
            const primaryPair = this.m_pairBuffer[i];
            const userDataA = (0, b2_common_1.b2Verify)(primaryPair[0].userData);
            const userDataB = (0, b2_common_1.b2Verify)(primaryPair[1].userData);
            callback(userDataA, userDataB);
        }
        // Clear move flags
        for(let i = 0; i < this.m_moveCount; ++i){
            const proxy = this.m_moveBuffer[i];
            if (proxy) proxy.moved = false;
        }
        // Reset move buffer
        this.m_moveCount = 0;
    }
    /**
     * Query an AABB for overlapping proxies. The callback class
     * is called for each proxy that overlaps the supplied AABB.
     */ Query(aabb, callback) {
        this.m_tree.Query(aabb, callback);
    }
    QueryPoint(point, callback) {
        this.m_tree.QueryPoint(point, callback);
    }
    /**
     * Ray-cast against the proxies in the tree. This relies on the callback
     * to perform a exact ray-cast in the case were the proxy contains a shape.
     * The callback also performs the any collision filtering. This has performance
     * roughly equal to k * log(n), where k is the number of collisions and n is the
     * number of proxies in the tree.
     *
     * @param input The ray-cast input data. The ray extends from p1 to p1 + maxFraction * (p2 - p1).
     * @param callback A callback class that is called for each proxy that is hit by the ray.
     */ RayCast(input, callback) {
        this.m_tree.RayCast(input, callback);
    }
    /**
     * Get the height of the embedded tree.
     */ GetTreeHeight() {
        return this.m_tree.GetHeight();
    }
    /**
     * Get the balance of the embedded tree.
     */ GetTreeBalance() {
        return this.m_tree.GetMaxBalance();
    }
    /**
     * Get the quality metric of the embedded tree.
     */ GetTreeQuality() {
        return this.m_tree.GetAreaRatio();
    }
    /**
     * Shift the world origin. Useful for large worlds.
     * The shift formula is: position -= newOrigin
     *
     * @param newOrigin The new origin with respect to the old origin
     */ ShiftOrigin(newOrigin) {
        this.m_tree.ShiftOrigin(newOrigin);
    }
    BufferMove(proxy) {
        this.m_moveBuffer[this.m_moveCount] = proxy;
        ++this.m_moveCount;
    }
    UnBufferMove(proxy) {
        const i = this.m_moveBuffer.indexOf(proxy);
        this.m_moveBuffer[i] = null;
    }
}
exports.b2BroadPhase = b2BroadPhase;

},{"2b88da309e990f8e":"a1SE4","55f435e46bf813d7":"7DfC6"}],"7DfC6":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2DynamicTree = exports.b2TreeNode = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("165d9ff0ece9bace");
const b2_math_1 = require("54080cb38cdb3371");
const b2_collision_1 = require("50cbaf59f5094adb");
const temp = {
    stack: [],
    t: new b2_math_1.b2Vec2(),
    r: new b2_math_1.b2Vec2(),
    v: new b2_math_1.b2Vec2(),
    abs_v: new b2_math_1.b2Vec2(),
    segmentAABB: new b2_collision_1.b2AABB(),
    subInput: new b2_collision_1.b2RayCastInput(),
    combinedAABB: new b2_collision_1.b2AABB(),
    aabb: new b2_collision_1.b2AABB(),
    fatAABB: new b2_collision_1.b2AABB(),
    hugeAABB: new b2_collision_1.b2AABB(),
    c: new b2_math_1.b2Vec2(),
    h: new b2_math_1.b2Vec2()
};
let nextNodeid = 0;
/**
 * A node in the dynamic tree. The client does not interact with this directly.
 */ class b2TreeNode {
    constructor(){
        /** Enlarged AABB */ this.aabb = new b2_collision_1.b2AABB();
        this.userData = null;
        this.parent = null; // or next
        this.child1 = null;
        this.child2 = null;
        this.height = 0; // leaf = 0, free node = -1
        this.moved = false;
        this.id = nextNodeid++;
    }
    Reset() {
        this.child1 = null;
        this.child2 = null;
        this.height = -1;
        this.userData = null;
    }
    IsLeaf() {
        return this.child1 === null;
    }
    GetArea() {
        if (this.IsLeaf()) return 0;
        let area = this.aabb.GetPerimeter();
        if (this.child1) area += this.child1.GetArea();
        if (this.child2) area += this.child2.GetArea();
        return area;
    }
    /** Compute the height of a sub-tree. */ ComputeHeight() {
        if (this.IsLeaf()) return 0;
        (0, b2_common_1.b2Assert)(this.child1 !== null && this.child2 !== null);
        const height1 = (0, b2_common_1.b2Verify)(this.child1).ComputeHeight();
        const height2 = (0, b2_common_1.b2Verify)(this.child2).ComputeHeight();
        return 1 + Math.max(height1, height2);
    }
    GetMaxBalance() {
        if (this.height <= 1) return 0;
        const child1 = (0, b2_common_1.b2Verify)(this.child1);
        const child2 = (0, b2_common_1.b2Verify)(this.child2);
        return Math.max(child1.GetMaxBalance(), child2.GetMaxBalance(), Math.abs(child2.height - child1.height));
    }
    ShiftOrigin(newOrigin) {
        if (this.height <= 1) return;
        (0, b2_common_1.b2Verify)(this.child1).ShiftOrigin(newOrigin);
        (0, b2_common_1.b2Verify)(this.child2).ShiftOrigin(newOrigin);
        this.aabb.lowerBound.Subtract(newOrigin);
        this.aabb.upperBound.Subtract(newOrigin);
    }
}
exports.b2TreeNode = b2TreeNode;
/**
 * A dynamic AABB tree broad-phase, inspired by Nathanael Presson's btDbvt.
 * A dynamic tree arranges data in a binary tree to accelerate
 * queries such as volume queries and ray casts. Leafs are proxies
 * with an AABB. In the tree we expand the proxy AABB by b2_fatAABBFactor
 * so that the proxy AABB is bigger than the client object. This allows the client
 * object to move by small amounts without triggering a tree update.
 *
 * Nodes are pooled
 */ class b2DynamicTree {
    constructor(){
        this.m_root = null;
        this.m_freeList = null;
    }
    /**
     * Query an AABB for overlapping proxies. The callback class
     * is called for each proxy that overlaps the supplied AABB.
     */ Query(aabb, callback) {
        const stack = temp.stack;
        stack.length = 0;
        let node = this.m_root;
        while(node){
            if (node.aabb.TestOverlap(aabb)) {
                if (node.IsLeaf()) {
                    const proceed = callback(node);
                    if (!proceed) return;
                } else {
                    stack.push(node.child1);
                    stack.push(node.child2);
                }
            }
            node = stack.pop();
        }
    }
    QueryPoint(point, callback) {
        const stack = temp.stack;
        stack.length = 0;
        let node = this.m_root;
        while(node){
            if (node.aabb.TestContain(point)) {
                if (node.IsLeaf()) {
                    const proceed = callback(node);
                    if (!proceed) return;
                } else {
                    stack.push(node.child1);
                    stack.push(node.child2);
                }
            }
            node = stack.pop();
        }
    }
    /**
     * Ray-cast against the proxies in the tree. This relies on the callback
     * to perform a exact ray-cast in the case were the proxy contains a shape.
     * The callback also performs the any collision filtering. This has performance
     * roughly equal to k * log(n), where k is the number of collisions and n is the
     * number of proxies in the tree.
     * @param input the ray-cast input data. The ray extends from p1 to p1 + maxFraction * (p2 - p1).
     * @param callback a callback class that is called for each proxy that is hit by the ray.
     */ RayCast(input, callback) {
        const { p1, p2 } = input;
        const r = b2_math_1.b2Vec2.Subtract(p2, p1, temp.r);
        // DEBUG: b2Assert(r.LengthSquared() > 0);
        r.Normalize();
        // v is perpendicular to the segment.
        const v = b2_math_1.b2Vec2.CrossOneVec2(r, temp.v);
        const abs_v = v.GetAbs(temp.abs_v);
        // Separating axis for segment (Gino, p80).
        // |dot(v, p1 - c)| > dot(|v|, h)
        let { maxFraction } = input;
        // Build a bounding box for the segment.
        const { segmentAABB, subInput, c, h, t } = temp;
        b2_math_1.b2Vec2.AddScaled(p1, maxFraction, b2_math_1.b2Vec2.Subtract(p2, p1, t), t);
        b2_math_1.b2Vec2.Min(p1, t, segmentAABB.lowerBound);
        b2_math_1.b2Vec2.Max(p1, t, segmentAABB.upperBound);
        const stack = temp.stack;
        stack.length = 0;
        let node = this.m_root;
        while(node){
            if (!node.aabb.TestOverlap(segmentAABB)) {
                node = stack.pop();
                continue;
            }
            // Separating axis for segment (Gino, p80).
            // |dot(v, p1 - c)| > dot(|v|, h)
            node.aabb.GetCenter(c);
            node.aabb.GetExtents(h);
            const separation = Math.abs(b2_math_1.b2Vec2.Dot(v, b2_math_1.b2Vec2.Subtract(p1, c, b2_math_1.b2Vec2.s_t0))) - b2_math_1.b2Vec2.Dot(abs_v, h);
            if (separation > 0) {
                node = stack.pop();
                continue;
            }
            if (node.IsLeaf()) {
                subInput.p1.Copy(input.p1);
                subInput.p2.Copy(input.p2);
                subInput.maxFraction = maxFraction;
                const value = callback(subInput, node);
                if (value === 0) // The client has terminated the ray cast.
                return;
                if (value > 0) {
                    // Update segment bounding box.
                    maxFraction = value;
                    b2_math_1.b2Vec2.AddScaled(p1, maxFraction, b2_math_1.b2Vec2.Subtract(p2, p1, t), t);
                    b2_math_1.b2Vec2.Min(p1, t, segmentAABB.lowerBound);
                    b2_math_1.b2Vec2.Max(p1, t, segmentAABB.upperBound);
                }
            } else {
                stack.push(node.child1);
                stack.push(node.child2);
            }
            node = stack.pop();
        }
    }
    /** Allocate a node from the pool. Grow the pool if necessary. */ AllocateNode() {
        // Expand the node pool as needed.
        if (this.m_freeList === null) return new b2TreeNode();
        const node = this.m_freeList;
        this.m_freeList = node.parent;
        node.parent = null;
        node.child1 = null;
        node.child2 = null;
        node.height = 0;
        node.moved = false;
        return node;
    }
    /** Return a node to the pool. */ FreeNode(node) {
        node.parent = this.m_freeList;
        node.Reset();
        this.m_freeList = node;
    }
    /**
     * Create a proxy. Provide a tight fitting AABB and a userData pointer.
     * Create a proxy in the tree as a leaf node. We return the index
     * of the node instead of a pointer so that we can grow
     * the node pool.
     */ CreateProxy(aabb, userData) {
        const node = this.AllocateNode();
        // Fatten the aabb.
        const r = b2_common_1.b2_aabbExtension;
        node.aabb.lowerBound.Set(aabb.lowerBound.x - r, aabb.lowerBound.y - r);
        node.aabb.upperBound.Set(aabb.upperBound.x + r, aabb.upperBound.y + r);
        node.userData = userData;
        node.height = 0;
        node.moved = true;
        this.InsertLeaf(node);
        return node;
    }
    /** Destroy a proxy. This asserts if the id is invalid. */ DestroyProxy(node) {
        // DEBUG: b2Assert(node.IsLeaf());
        this.RemoveLeaf(node);
        this.FreeNode(node);
    }
    /**
     * Move a proxy with a swepted AABB. If the proxy has moved outside of its fattened AABB,
     * the function returns immediately.
     * @return true if the proxy was re-inserted.
     */ MoveProxy(node, aabb, displacement) {
        // DEBUG: b2Assert(node.IsLeaf());
        // Extend AABB
        const { fatAABB, hugeAABB } = temp;
        const r = b2_common_1.b2_aabbExtension;
        fatAABB.lowerBound.Set(aabb.lowerBound.x - r, aabb.lowerBound.y - r);
        fatAABB.upperBound.Set(aabb.upperBound.x + r, aabb.upperBound.y + r);
        // Predict AABB movement
        const d_x = b2_common_1.b2_aabbMultiplier * displacement.x;
        const d_y = b2_common_1.b2_aabbMultiplier * displacement.y;
        if (d_x < 0) fatAABB.lowerBound.x += d_x;
        else fatAABB.upperBound.x += d_x;
        if (d_y < 0) fatAABB.lowerBound.y += d_y;
        else fatAABB.upperBound.y += d_y;
        const treeAABB = node.aabb;
        if (treeAABB.Contains(aabb)) {
            // The tree AABB still contains the object, but it might be too large.
            // Perhaps the object was moving fast but has since gone to sleep.
            // The huge AABB is larger than the new fat AABB.
            const r4 = 4 * b2_common_1.b2_aabbExtension;
            hugeAABB.lowerBound.Set(fatAABB.lowerBound.x - r4, aabb.lowerBound.y - r4);
            hugeAABB.upperBound.Set(fatAABB.upperBound.x + r4, aabb.upperBound.y + r4);
            if (hugeAABB.Contains(treeAABB)) // The tree AABB contains the object AABB and the tree AABB is
            // not too large. No tree update needed.
            return false;
        // Otherwise the tree AABB is huge and needs to be shrunk
        }
        this.RemoveLeaf(node);
        node.aabb.Copy(fatAABB);
        this.InsertLeaf(node);
        node.moved = true;
        return true;
    }
    InsertLeaf(leaf) {
        if (this.m_root === null) {
            this.m_root = leaf;
            this.m_root.parent = null;
            return;
        }
        // Find the best sibling for this node
        const { combinedAABB, aabb } = temp;
        const leafAABB = leaf.aabb;
        let sibling = this.m_root;
        while(!sibling.IsLeaf()){
            const child1 = (0, b2_common_1.b2Verify)(sibling.child1);
            const child2 = (0, b2_common_1.b2Verify)(sibling.child2);
            const area = sibling.aabb.GetPerimeter();
            combinedAABB.Combine2(sibling.aabb, leafAABB);
            const combinedArea = combinedAABB.GetPerimeter();
            // Cost of creating a new parent for this node and the new leaf
            const cost = 2 * combinedArea;
            // Minimum cost of pushing the leaf further down the tree
            const inheritanceCost = 2 * (combinedArea - area);
            // Cost of descending into child1
            let cost1;
            let oldArea;
            let newArea;
            if (child1.IsLeaf()) {
                aabb.Combine2(leafAABB, child1.aabb);
                cost1 = aabb.GetPerimeter() + inheritanceCost;
            } else {
                aabb.Combine2(leafAABB, child1.aabb);
                oldArea = child1.aabb.GetPerimeter();
                newArea = aabb.GetPerimeter();
                cost1 = newArea - oldArea + inheritanceCost;
            }
            // Cost of descending into child2
            let cost2;
            if (child2.IsLeaf()) {
                aabb.Combine2(leafAABB, child2.aabb);
                cost2 = aabb.GetPerimeter() + inheritanceCost;
            } else {
                aabb.Combine2(leafAABB, child2.aabb);
                oldArea = child2.aabb.GetPerimeter();
                newArea = aabb.GetPerimeter();
                cost2 = newArea - oldArea + inheritanceCost;
            }
            // Descend according to the minimum cost.
            if (cost < cost1 && cost < cost2) break;
            // Descend
            if (cost1 < cost2) sibling = child1;
            else sibling = child2;
        }
        // Create a new parent.
        const oldParent = sibling.parent;
        const newParent = this.AllocateNode();
        newParent.parent = oldParent;
        newParent.userData = null;
        newParent.aabb.Combine2(leafAABB, sibling.aabb);
        newParent.height = sibling.height + 1;
        if (oldParent !== null) {
            // The sibling was not the root.
            if (oldParent.child1 === sibling) oldParent.child1 = newParent;
            else oldParent.child2 = newParent;
            newParent.child1 = sibling;
            newParent.child2 = leaf;
            sibling.parent = newParent;
            leaf.parent = newParent;
        } else {
            // The sibling was the root.
            newParent.child1 = sibling;
            newParent.child2 = leaf;
            sibling.parent = newParent;
            leaf.parent = newParent;
            this.m_root = newParent;
        }
        // Walk back up the tree fixing heights and AABBs
        let node = leaf.parent;
        while(node !== null){
            node = this.Balance(node);
            const child1 = (0, b2_common_1.b2Verify)(node.child1);
            const child2 = (0, b2_common_1.b2Verify)(node.child2);
            node.height = 1 + Math.max(child1.height, child2.height);
            node.aabb.Combine2(child1.aabb, child2.aabb);
            node = node.parent;
        }
    // this.Validate();
    }
    RemoveLeaf(leaf) {
        if (leaf === this.m_root) {
            this.m_root = null;
            return;
        }
        const parent = (0, b2_common_1.b2Verify)(leaf.parent);
        const grandParent = parent.parent;
        const sibling = (0, b2_common_1.b2Verify)(parent.child1 === leaf ? parent.child2 : parent.child1);
        if (grandParent !== null) {
            // Destroy parent and connect sibling to grandParent.
            if (grandParent.child1 === parent) grandParent.child1 = sibling;
            else grandParent.child2 = sibling;
            sibling.parent = grandParent;
            this.FreeNode(parent);
            // Adjust ancestor bounds.
            let node = grandParent;
            while(node !== null){
                node = this.Balance(node);
                const child1 = (0, b2_common_1.b2Verify)(node.child1);
                const child2 = (0, b2_common_1.b2Verify)(node.child2);
                node.aabb.Combine2(child1.aabb, child2.aabb);
                node.height = 1 + Math.max(child1.height, child2.height);
                node = node.parent;
            }
        } else {
            this.m_root = sibling;
            sibling.parent = null;
            this.FreeNode(parent);
        }
    // this.Validate();
    }
    /**
     * Perform a left or right rotation if node A is imbalanced.
     * Returns the new root index.
     */ Balance(A) {
        // DEBUG: b2Assert(A !== null);
        if (A.IsLeaf() || A.height < 2) return A;
        const B = (0, b2_common_1.b2Verify)(A.child1);
        const C = (0, b2_common_1.b2Verify)(A.child2);
        const balance = C.height - B.height;
        // Rotate C up
        if (balance > 1) {
            const F = (0, b2_common_1.b2Verify)(C.child1);
            const G = (0, b2_common_1.b2Verify)(C.child2);
            // Swap A and C
            C.child1 = A;
            C.parent = A.parent;
            A.parent = C;
            // A's old parent should point to C
            if (C.parent !== null) {
                if (C.parent.child1 === A) C.parent.child1 = C;
                else // DEBUG: b2Assert(C.parent.child2 === A);
                C.parent.child2 = C;
            } else this.m_root = C;
            // Rotate
            if (F.height > G.height) {
                C.child2 = F;
                A.child2 = G;
                G.parent = A;
                A.aabb.Combine2(B.aabb, G.aabb);
                C.aabb.Combine2(A.aabb, F.aabb);
                A.height = 1 + Math.max(B.height, G.height);
                C.height = 1 + Math.max(A.height, F.height);
            } else {
                C.child2 = G;
                A.child2 = F;
                F.parent = A;
                A.aabb.Combine2(B.aabb, F.aabb);
                C.aabb.Combine2(A.aabb, G.aabb);
                A.height = 1 + Math.max(B.height, F.height);
                C.height = 1 + Math.max(A.height, G.height);
            }
            return C;
        }
        // Rotate B up
        if (balance < -1) {
            const D = (0, b2_common_1.b2Verify)(B.child1);
            const E = (0, b2_common_1.b2Verify)(B.child2);
            // Swap A and B
            B.child1 = A;
            B.parent = A.parent;
            A.parent = B;
            // A's old parent should point to B
            if (B.parent !== null) {
                if (B.parent.child1 === A) B.parent.child1 = B;
                else // DEBUG: b2Assert(B.parent.child2 === A);
                B.parent.child2 = B;
            } else this.m_root = B;
            // Rotate
            if (D.height > E.height) {
                B.child2 = D;
                A.child1 = E;
                E.parent = A;
                A.aabb.Combine2(C.aabb, E.aabb);
                B.aabb.Combine2(A.aabb, D.aabb);
                A.height = 1 + Math.max(C.height, E.height);
                B.height = 1 + Math.max(A.height, D.height);
            } else {
                B.child2 = E;
                A.child1 = D;
                D.parent = A;
                A.aabb.Combine2(C.aabb, D.aabb);
                B.aabb.Combine2(A.aabb, E.aabb);
                A.height = 1 + Math.max(C.height, D.height);
                B.height = 1 + Math.max(A.height, E.height);
            }
            return B;
        }
        return A;
    }
    /**
     * Compute the height of the binary tree in O(N) time. Should not be
     * called often.
     */ GetHeight() {
        if (this.m_root === null) return 0;
        return this.m_root.height;
    }
    /** Get the ratio of the sum of the node areas to the root area. */ GetAreaRatio() {
        if (this.m_root === null) return 0;
        const root = this.m_root;
        const rootArea = root.aabb.GetPerimeter();
        const totalArea = root.GetArea();
        return totalArea / rootArea;
    }
    /**
     * Get the maximum balance of an node in the tree. The balance is the difference
     * in height of the two children of a node.
     */ GetMaxBalance() {
        if (this.m_root === null) return 0;
        return this.m_root.GetMaxBalance();
    }
    /**
     * Shift the world origin. Useful for large worlds.
     * The shift formula is: position -= newOrigin
     * @param newOrigin the new origin with respect to the old origin
     */ ShiftOrigin(newOrigin) {
        var _a;
        (_a = this.m_root) === null || _a === void 0 || _a.ShiftOrigin(newOrigin);
    }
}
exports.b2DynamicTree = b2DynamicTree;

},{"165d9ff0ece9bace":"a1SE4","54080cb38cdb3371":"3MJcc","50cbaf59f5094adb":"eLdO6"}],"hgu0H":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2TimeOfImpact = exports.b2TOIOutput = exports.b2TOIOutputState = exports.b2TOIInput = exports.b2Toi = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("f8129099c8da83e");
const b2_settings_1 = require("e7c44dd0492a177");
const b2_math_1 = require("c7697fc134f0a921");
const b2_timer_1 = require("257f1bccf0227f6f");
const b2_distance_1 = require("eb9ed2d4f5229f4d");
exports.b2Toi = {
    time: 0,
    maxTime: 0,
    calls: 0,
    iters: 0,
    maxIters: 0,
    rootIters: 0,
    maxRootIters: 0,
    reset () {
        this.time = 0;
        this.maxTime = 0;
        this.calls = 0;
        this.iters = 0;
        this.maxIters = 0;
        this.rootIters = 0;
        this.maxRootIters = 0;
    }
};
const b2TimeOfImpact_s_xfA = new b2_math_1.b2Transform();
const b2TimeOfImpact_s_xfB = new b2_math_1.b2Transform();
const b2TimeOfImpact_s_pointA = new b2_math_1.b2Vec2();
const b2TimeOfImpact_s_pointB = new b2_math_1.b2Vec2();
const b2TimeOfImpact_s_normal = new b2_math_1.b2Vec2();
const b2TimeOfImpact_s_axisA = new b2_math_1.b2Vec2();
const b2TimeOfImpact_s_axisB = new b2_math_1.b2Vec2();
/**
 * Input parameters for b2TimeOfImpact
 */ class b2TOIInput {
    constructor(){
        this.proxyA = new b2_distance_1.b2DistanceProxy();
        this.proxyB = new b2_distance_1.b2DistanceProxy();
        this.sweepA = new b2_math_1.b2Sweep();
        this.sweepB = new b2_math_1.b2Sweep();
        this.tMax = 0; // defines sweep interval [0, tMax]
    }
}
exports.b2TOIInput = b2TOIInput;
var b2TOIOutputState;
(function(b2TOIOutputState) {
    b2TOIOutputState[b2TOIOutputState["e_unknown"] = 0] = "e_unknown";
    b2TOIOutputState[b2TOIOutputState["e_failed"] = 1] = "e_failed";
    b2TOIOutputState[b2TOIOutputState["e_overlapped"] = 2] = "e_overlapped";
    b2TOIOutputState[b2TOIOutputState["e_touching"] = 3] = "e_touching";
    b2TOIOutputState[b2TOIOutputState["e_separated"] = 4] = "e_separated";
})(b2TOIOutputState || (exports.b2TOIOutputState = b2TOIOutputState = {}));
/**
 * Output parameters for b2TimeOfImpact.
 */ class b2TOIOutput {
    constructor(){
        this.state = b2TOIOutputState.e_unknown;
        this.t = 0;
    }
}
exports.b2TOIOutput = b2TOIOutput;
var b2SeparationFunctionType;
(function(b2SeparationFunctionType) {
    b2SeparationFunctionType[b2SeparationFunctionType["e_points"] = 0] = "e_points";
    b2SeparationFunctionType[b2SeparationFunctionType["e_faceA"] = 1] = "e_faceA";
    b2SeparationFunctionType[b2SeparationFunctionType["e_faceB"] = 2] = "e_faceB";
})(b2SeparationFunctionType || (b2SeparationFunctionType = {}));
class b2SeparationFunction {
    constructor(){
        this.m_sweepA = new b2_math_1.b2Sweep();
        this.m_sweepB = new b2_math_1.b2Sweep();
        this.m_type = b2SeparationFunctionType.e_points;
        this.m_localPoint = new b2_math_1.b2Vec2();
        this.m_axis = new b2_math_1.b2Vec2();
    }
    Initialize(cache, proxyA, sweepA, proxyB, sweepB, t1) {
        this.m_proxyA = proxyA;
        this.m_proxyB = proxyB;
        const { count } = cache;
        // DEBUG: b2Assert(0 < count && count < 3);
        this.m_sweepA.Copy(sweepA);
        this.m_sweepB.Copy(sweepB);
        const xfA = this.m_sweepA.GetTransform(b2TimeOfImpact_s_xfA, t1);
        const xfB = this.m_sweepB.GetTransform(b2TimeOfImpact_s_xfB, t1);
        if (count === 1) {
            this.m_type = b2SeparationFunctionType.e_points;
            const localPointA = this.m_proxyA.GetVertex(cache.indexA[0]);
            const localPointB = this.m_proxyB.GetVertex(cache.indexB[0]);
            const pointA = b2_math_1.b2Transform.MultiplyVec2(xfA, localPointA, b2TimeOfImpact_s_pointA);
            const pointB = b2_math_1.b2Transform.MultiplyVec2(xfB, localPointB, b2TimeOfImpact_s_pointB);
            b2_math_1.b2Vec2.Subtract(pointB, pointA, this.m_axis);
            const s = this.m_axis.Normalize();
            return s;
        }
        if (cache.indexA[0] === cache.indexA[1]) {
            // Two points on B and one on A.
            this.m_type = b2SeparationFunctionType.e_faceB;
            const localPointB1 = this.m_proxyB.GetVertex(cache.indexB[0]);
            const localPointB2 = this.m_proxyB.GetVertex(cache.indexB[1]);
            b2_math_1.b2Vec2.CrossVec2One(b2_math_1.b2Vec2.Subtract(localPointB2, localPointB1, b2_math_1.b2Vec2.s_t0), this.m_axis).Normalize();
            const normal = b2_math_1.b2Rot.MultiplyVec2(xfB.q, this.m_axis, b2TimeOfImpact_s_normal);
            b2_math_1.b2Vec2.Mid(localPointB1, localPointB2, this.m_localPoint);
            const pointB = b2_math_1.b2Transform.MultiplyVec2(xfB, this.m_localPoint, b2TimeOfImpact_s_pointB);
            const localPointA = this.m_proxyA.GetVertex(cache.indexA[0]);
            const pointA = b2_math_1.b2Transform.MultiplyVec2(xfA, localPointA, b2TimeOfImpact_s_pointA);
            let s = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(pointA, pointB, b2_math_1.b2Vec2.s_t0), normal);
            if (s < 0) {
                this.m_axis.Negate();
                s = -s;
            }
            return s;
        }
        // Two points on A and one or two points on B.
        this.m_type = b2SeparationFunctionType.e_faceA;
        const localPointA1 = this.m_proxyA.GetVertex(cache.indexA[0]);
        const localPointA2 = this.m_proxyA.GetVertex(cache.indexA[1]);
        b2_math_1.b2Vec2.CrossVec2One(b2_math_1.b2Vec2.Subtract(localPointA2, localPointA1, b2_math_1.b2Vec2.s_t0), this.m_axis).Normalize();
        const normal = b2_math_1.b2Rot.MultiplyVec2(xfA.q, this.m_axis, b2TimeOfImpact_s_normal);
        b2_math_1.b2Vec2.Mid(localPointA1, localPointA2, this.m_localPoint);
        const pointA = b2_math_1.b2Transform.MultiplyVec2(xfA, this.m_localPoint, b2TimeOfImpact_s_pointA);
        const localPointB = this.m_proxyB.GetVertex(cache.indexB[0]);
        const pointB = b2_math_1.b2Transform.MultiplyVec2(xfB, localPointB, b2TimeOfImpact_s_pointB);
        let s = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(pointB, pointA, b2_math_1.b2Vec2.s_t0), normal);
        if (s < 0) {
            this.m_axis.Negate();
            s = -s;
        }
        return s;
    }
    FindMinSeparation(indexA, indexB, t) {
        const xfA = this.m_sweepA.GetTransform(b2TimeOfImpact_s_xfA, t);
        const xfB = this.m_sweepB.GetTransform(b2TimeOfImpact_s_xfB, t);
        switch(this.m_type){
            case b2SeparationFunctionType.e_points:
                {
                    const axisA = b2_math_1.b2Rot.TransposeMultiplyVec2(xfA.q, this.m_axis, b2TimeOfImpact_s_axisA);
                    const axisB = b2_math_1.b2Rot.TransposeMultiplyVec2(xfB.q, b2_math_1.b2Vec2.Negate(this.m_axis, b2_math_1.b2Vec2.s_t0), b2TimeOfImpact_s_axisB);
                    indexA[0] = this.m_proxyA.GetSupport(axisA);
                    indexB[0] = this.m_proxyB.GetSupport(axisB);
                    const localPointA = this.m_proxyA.GetVertex(indexA[0]);
                    const localPointB = this.m_proxyB.GetVertex(indexB[0]);
                    const pointA = b2_math_1.b2Transform.MultiplyVec2(xfA, localPointA, b2TimeOfImpact_s_pointA);
                    const pointB = b2_math_1.b2Transform.MultiplyVec2(xfB, localPointB, b2TimeOfImpact_s_pointB);
                    const separation = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(pointB, pointA, b2_math_1.b2Vec2.s_t0), this.m_axis);
                    return separation;
                }
            case b2SeparationFunctionType.e_faceA:
                {
                    const normal = b2_math_1.b2Rot.MultiplyVec2(xfA.q, this.m_axis, b2TimeOfImpact_s_normal);
                    const pointA = b2_math_1.b2Transform.MultiplyVec2(xfA, this.m_localPoint, b2TimeOfImpact_s_pointA);
                    const axisB = b2_math_1.b2Rot.TransposeMultiplyVec2(xfB.q, b2_math_1.b2Vec2.Negate(normal, b2_math_1.b2Vec2.s_t0), b2TimeOfImpact_s_axisB);
                    indexA[0] = -1;
                    indexB[0] = this.m_proxyB.GetSupport(axisB);
                    const localPointB = this.m_proxyB.GetVertex(indexB[0]);
                    const pointB = b2_math_1.b2Transform.MultiplyVec2(xfB, localPointB, b2TimeOfImpact_s_pointB);
                    const separation = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(pointB, pointA, b2_math_1.b2Vec2.s_t0), normal);
                    return separation;
                }
            case b2SeparationFunctionType.e_faceB:
                {
                    const normal = b2_math_1.b2Rot.MultiplyVec2(xfB.q, this.m_axis, b2TimeOfImpact_s_normal);
                    const pointB = b2_math_1.b2Transform.MultiplyVec2(xfB, this.m_localPoint, b2TimeOfImpact_s_pointB);
                    const axisA = b2_math_1.b2Rot.TransposeMultiplyVec2(xfA.q, b2_math_1.b2Vec2.Negate(normal, b2_math_1.b2Vec2.s_t0), b2TimeOfImpact_s_axisA);
                    indexB[0] = -1;
                    indexA[0] = this.m_proxyA.GetSupport(axisA);
                    const localPointA = this.m_proxyA.GetVertex(indexA[0]);
                    const pointA = b2_math_1.b2Transform.MultiplyVec2(xfA, localPointA, b2TimeOfImpact_s_pointA);
                    const separation = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(pointA, pointB, b2_math_1.b2Vec2.s_t0), normal);
                    return separation;
                }
            default:
                // DEBUG: b2Assert(false);
                indexA[0] = -1;
                indexB[0] = -1;
                return 0;
        }
    }
    Evaluate(indexA, indexB, t) {
        const xfA = this.m_sweepA.GetTransform(b2TimeOfImpact_s_xfA, t);
        const xfB = this.m_sweepB.GetTransform(b2TimeOfImpact_s_xfB, t);
        switch(this.m_type){
            case b2SeparationFunctionType.e_points:
                {
                    const localPointA = this.m_proxyA.GetVertex(indexA);
                    const localPointB = this.m_proxyB.GetVertex(indexB);
                    const pointA = b2_math_1.b2Transform.MultiplyVec2(xfA, localPointA, b2TimeOfImpact_s_pointA);
                    const pointB = b2_math_1.b2Transform.MultiplyVec2(xfB, localPointB, b2TimeOfImpact_s_pointB);
                    const separation = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(pointB, pointA, b2_math_1.b2Vec2.s_t0), this.m_axis);
                    return separation;
                }
            case b2SeparationFunctionType.e_faceA:
                {
                    const normal = b2_math_1.b2Rot.MultiplyVec2(xfA.q, this.m_axis, b2TimeOfImpact_s_normal);
                    const pointA = b2_math_1.b2Transform.MultiplyVec2(xfA, this.m_localPoint, b2TimeOfImpact_s_pointA);
                    const localPointB = this.m_proxyB.GetVertex(indexB);
                    const pointB = b2_math_1.b2Transform.MultiplyVec2(xfB, localPointB, b2TimeOfImpact_s_pointB);
                    const separation = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(pointB, pointA, b2_math_1.b2Vec2.s_t0), normal);
                    return separation;
                }
            case b2SeparationFunctionType.e_faceB:
                {
                    const normal = b2_math_1.b2Rot.MultiplyVec2(xfB.q, this.m_axis, b2TimeOfImpact_s_normal);
                    const pointB = b2_math_1.b2Transform.MultiplyVec2(xfB, this.m_localPoint, b2TimeOfImpact_s_pointB);
                    const localPointA = this.m_proxyA.GetVertex(indexA);
                    const pointA = b2_math_1.b2Transform.MultiplyVec2(xfA, localPointA, b2TimeOfImpact_s_pointA);
                    const separation = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(pointA, pointB, b2_math_1.b2Vec2.s_t0), normal);
                    return separation;
                }
            default:
                (0, b2_common_1.b2Assert)(false);
                return 0;
        }
    }
}
const b2TimeOfImpact_s_timer = new b2_timer_1.b2Timer();
const b2TimeOfImpact_s_cache = new b2_distance_1.b2SimplexCache();
const b2TimeOfImpact_s_distanceInput = new b2_distance_1.b2DistanceInput();
const b2TimeOfImpact_s_distanceOutput = new b2_distance_1.b2DistanceOutput();
const b2TimeOfImpact_s_fcn = new b2SeparationFunction();
const b2TimeOfImpact_s_indexA = [
    0
];
const b2TimeOfImpact_s_indexB = [
    0
];
const b2TimeOfImpact_s_sweepA = new b2_math_1.b2Sweep();
const b2TimeOfImpact_s_sweepB = new b2_math_1.b2Sweep();
/**
 * CCD via the local separating axis method. This seeks progression
 * by computing the largest time at which separation is maintained.
 * Compute the upper bound on time before two shapes penetrate. Time is represented as
 * a fraction between [0,tMax]. This uses a swept separating axis and may miss some intermediate,
 * again.
 * Note: use b2Distance to compute the contact point and normal at the time of impact.
 */ function b2TimeOfImpact(output, input) {
    const timer = b2TimeOfImpact_s_timer.Reset();
    ++exports.b2Toi.calls;
    output.state = b2TOIOutputState.e_unknown;
    output.t = input.tMax;
    const { proxyA, proxyB, tMax } = input;
    const maxVertices = Math.max(b2_settings_1.b2_maxPolygonVertices, proxyA.m_count, proxyB.m_count);
    const sweepA = b2TimeOfImpact_s_sweepA.Copy(input.sweepA);
    const sweepB = b2TimeOfImpact_s_sweepB.Copy(input.sweepB);
    // Large rotations can make the root finder fail, so we normalize the
    // sweep angles.
    sweepA.Normalize();
    sweepB.Normalize();
    const totalRadius = proxyA.m_radius + proxyB.m_radius;
    const target = Math.max(b2_common_1.b2_linearSlop, totalRadius - 3 * b2_common_1.b2_linearSlop);
    const tolerance = 0.25 * b2_common_1.b2_linearSlop;
    // DEBUG: b2Assert(target > tolerance);
    let t1 = 0;
    const k_maxIterations = 20; // TODO_ERIN b2Settings
    let iter = 0;
    // Prepare input for distance query.
    const cache = b2TimeOfImpact_s_cache;
    cache.count = 0;
    const distanceInput = b2TimeOfImpact_s_distanceInput;
    distanceInput.proxyA.Copy(input.proxyA);
    distanceInput.proxyB.Copy(input.proxyB);
    distanceInput.useRadii = false;
    // The outer loop progressively attempts to compute new separating axes.
    // This loop terminates when an axis is repeated (no progress is made).
    for(;;){
        const xfA = sweepA.GetTransform(b2TimeOfImpact_s_xfA, t1);
        const xfB = sweepB.GetTransform(b2TimeOfImpact_s_xfB, t1);
        // Get the distance between shapes. We can also use the results
        // to get a separating axis.
        distanceInput.transformA.Copy(xfA);
        distanceInput.transformB.Copy(xfB);
        const distanceOutput = b2TimeOfImpact_s_distanceOutput;
        (0, b2_distance_1.b2Distance)(distanceOutput, cache, distanceInput);
        // If the shapes are overlapped, we give up on continuous collision.
        if (distanceOutput.distance <= 0) {
            // Failure!
            output.state = b2TOIOutputState.e_overlapped;
            output.t = 0;
            break;
        }
        if (distanceOutput.distance < target + tolerance) {
            // Victory!
            output.state = b2TOIOutputState.e_touching;
            output.t = t1;
            break;
        }
        // Initialize the separating axis.
        const fcn = b2TimeOfImpact_s_fcn;
        fcn.Initialize(cache, proxyA, sweepA, proxyB, sweepB, t1);
        // Compute the TOI on the separating axis. We do this by successively
        // resolving the deepest point. This loop is bounded by the number of vertices.
        let done = false;
        let t2 = tMax;
        let pushBackIter = 0;
        for(;;){
            // Find the deepest point at t2. Store the witness point indices.
            const indexA = b2TimeOfImpact_s_indexA;
            const indexB = b2TimeOfImpact_s_indexB;
            let s2 = fcn.FindMinSeparation(indexA, indexB, t2);
            // Is the final configuration separated?
            if (s2 > target + tolerance) {
                // Victory!
                output.state = b2TOIOutputState.e_separated;
                output.t = tMax;
                done = true;
                break;
            }
            // Has the separation reached tolerance?
            if (s2 > target - tolerance) {
                // Advance the sweeps
                t1 = t2;
                break;
            }
            // Compute the initial separation of the witness points.
            let s1 = fcn.Evaluate(indexA[0], indexB[0], t1);
            // Check for initial overlap. This might happen if the root finder
            // runs out of iterations.
            if (s1 < target - tolerance) {
                output.state = b2TOIOutputState.e_failed;
                output.t = t1;
                done = true;
                break;
            }
            // Check for touching
            if (s1 <= target + tolerance) {
                // Victory! t1 should hold the TOI (could be 0).
                output.state = b2TOIOutputState.e_touching;
                output.t = t1;
                done = true;
                break;
            }
            // Compute 1D root of: f(x) - target = 0
            let rootIterCount = 0;
            let a1 = t1;
            let a2 = t2;
            for(;;){
                // Use a mix of the secant rule and bisection.
                let t;
                if (rootIterCount & 1) // Secant rule to improve convergence.
                t = a1 + (target - s1) * (a2 - a1) / (s2 - s1);
                else // Bisection to guarantee progress.
                t = 0.5 * (a1 + a2);
                ++rootIterCount;
                ++exports.b2Toi.rootIters;
                const s = fcn.Evaluate(indexA[0], indexB[0], t);
                if (Math.abs(s - target) < tolerance) {
                    // t2 holds a tentative value for t1
                    t2 = t;
                    break;
                }
                // Ensure we continue to bracket the root.
                if (s > target) {
                    a1 = t;
                    s1 = s;
                } else {
                    a2 = t;
                    s2 = s;
                }
                if (rootIterCount === 50) break;
            }
            exports.b2Toi.maxRootIters = Math.max(exports.b2Toi.maxRootIters, rootIterCount);
            ++pushBackIter;
            if (pushBackIter === maxVertices) break;
        }
        ++iter;
        ++exports.b2Toi.iters;
        if (done) break;
        if (iter === k_maxIterations) {
            // Root finder got stuck. Semi-victory.
            output.state = b2TOIOutputState.e_failed;
            output.t = t1;
            break;
        }
    }
    exports.b2Toi.maxIters = Math.max(exports.b2Toi.maxIters, iter);
    const time = timer.GetMilliseconds();
    exports.b2Toi.maxTime = Math.max(exports.b2Toi.maxTime, time);
    exports.b2Toi.time += time;
}
exports.b2TimeOfImpact = b2TimeOfImpact;

},{"f8129099c8da83e":"a1SE4","e7c44dd0492a177":"hZX5U","c7697fc134f0a921":"3MJcc","257f1bccf0227f6f":"cIbnI","eb9ed2d4f5229f4d":"daiYW"}],"iDKyQ":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2CollidePolygonAndCircle = exports.b2CollideCircles = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_common_1 = require("e6ecb1d3629e03f7");
const b2_math_1 = require("317bf7f795e4b174");
const b2_collision_1 = require("aa2383706f6a734c");
const b2CollideCircles_s_pA = new b2_math_1.b2Vec2();
const b2CollideCircles_s_pB = new b2_math_1.b2Vec2();
function b2CollideCircles(manifold, circleA, xfA, circleB, xfB) {
    manifold.pointCount = 0;
    const pA = b2_math_1.b2Transform.MultiplyVec2(xfA, circleA.m_p, b2CollideCircles_s_pA);
    const pB = b2_math_1.b2Transform.MultiplyVec2(xfB, circleB.m_p, b2CollideCircles_s_pB);
    const distSqr = b2_math_1.b2Vec2.DistanceSquared(pA, pB);
    const radius = circleA.m_radius + circleB.m_radius;
    if (distSqr > radius * radius) return;
    manifold.type = b2_collision_1.b2ManifoldType.e_circles;
    manifold.localPoint.Copy(circleA.m_p);
    manifold.localNormal.SetZero();
    manifold.pointCount = 1;
    manifold.points[0].localPoint.Copy(circleB.m_p);
    manifold.points[0].id.key = 0;
}
exports.b2CollideCircles = b2CollideCircles;
const b2CollidePolygonAndCircle_s_c = new b2_math_1.b2Vec2();
const b2CollidePolygonAndCircle_s_cLocal = new b2_math_1.b2Vec2();
const b2CollidePolygonAndCircle_s_faceCenter = new b2_math_1.b2Vec2();
function b2CollidePolygonAndCircle(manifold, polygonA, xfA, circleB, xfB) {
    manifold.pointCount = 0;
    // Compute circle position in the frame of the polygon.
    const c = b2_math_1.b2Transform.MultiplyVec2(xfB, circleB.m_p, b2CollidePolygonAndCircle_s_c);
    const cLocal = b2_math_1.b2Transform.TransposeMultiplyVec2(xfA, c, b2CollidePolygonAndCircle_s_cLocal);
    // Find the min separating edge.
    let normalIndex = 0;
    let separation = -b2_common_1.b2_maxFloat;
    const radius = polygonA.m_radius + circleB.m_radius;
    const vertexCount = polygonA.m_count;
    const vertices = polygonA.m_vertices;
    const normals = polygonA.m_normals;
    for(let i = 0; i < vertexCount; ++i){
        const s = b2_math_1.b2Vec2.Dot(normals[i], b2_math_1.b2Vec2.Subtract(cLocal, vertices[i], b2_math_1.b2Vec2.s_t0));
        if (s > radius) // Early out.
        return;
        if (s > separation) {
            separation = s;
            normalIndex = i;
        }
    }
    // Vertices that subtend the incident face.
    const vertIndex1 = normalIndex;
    const vertIndex2 = vertIndex1 + 1 < vertexCount ? vertIndex1 + 1 : 0;
    const v1 = vertices[vertIndex1];
    const v2 = vertices[vertIndex2];
    // If the center is inside the polygon ...
    if (separation < b2_common_1.b2_epsilon) {
        manifold.pointCount = 1;
        manifold.type = b2_collision_1.b2ManifoldType.e_faceA;
        manifold.localNormal.Copy(normals[normalIndex]);
        b2_math_1.b2Vec2.Mid(v1, v2, manifold.localPoint);
        manifold.points[0].localPoint.Copy(circleB.m_p);
        manifold.points[0].id.key = 0;
        return;
    }
    // Compute barycentric coordinates
    const u1 = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(cLocal, v1, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.Subtract(v2, v1, b2_math_1.b2Vec2.s_t1));
    const u2 = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(cLocal, v2, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.Subtract(v1, v2, b2_math_1.b2Vec2.s_t1));
    if (u1 <= 0) {
        if (b2_math_1.b2Vec2.DistanceSquared(cLocal, v1) > radius * radius) return;
        manifold.pointCount = 1;
        manifold.type = b2_collision_1.b2ManifoldType.e_faceA;
        b2_math_1.b2Vec2.Subtract(cLocal, v1, manifold.localNormal).Normalize();
        manifold.localPoint.Copy(v1);
        manifold.points[0].localPoint.Copy(circleB.m_p);
        manifold.points[0].id.key = 0;
    } else if (u2 <= 0) {
        if (b2_math_1.b2Vec2.DistanceSquared(cLocal, v2) > radius * radius) return;
        manifold.pointCount = 1;
        manifold.type = b2_collision_1.b2ManifoldType.e_faceA;
        b2_math_1.b2Vec2.Subtract(cLocal, v2, manifold.localNormal).Normalize();
        manifold.localPoint.Copy(v2);
        manifold.points[0].localPoint.Copy(circleB.m_p);
        manifold.points[0].id.key = 0;
    } else {
        const faceCenter = b2_math_1.b2Vec2.Mid(v1, v2, b2CollidePolygonAndCircle_s_faceCenter);
        const separation2 = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(cLocal, faceCenter, b2_math_1.b2Vec2.s_t1), normals[vertIndex1]);
        if (separation2 > radius) return;
        manifold.pointCount = 1;
        manifold.type = b2_collision_1.b2ManifoldType.e_faceA;
        manifold.localNormal.Copy(normals[vertIndex1]);
        manifold.localPoint.Copy(faceCenter);
        manifold.points[0].localPoint.Copy(circleB.m_p);
        manifold.points[0].id.key = 0;
    }
}
exports.b2CollidePolygonAndCircle = b2CollidePolygonAndCircle;

},{"e6ecb1d3629e03f7":"a1SE4","317bf7f795e4b174":"3MJcc","aa2383706f6a734c":"eLdO6"}],"2odhf":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2CollidePolygons = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_common_1 = require("7311afe018ce2143");
const b2_math_1 = require("fda0ef47064b5ee7");
const b2_collision_1 = require("92b94c7aec159cd0");
const b2FindMaxSeparation_s_xf = new b2_math_1.b2Transform();
const b2FindMaxSeparation_s_n = new b2_math_1.b2Vec2();
const b2FindMaxSeparation_s_v1 = new b2_math_1.b2Vec2();
/** Find the max separation between poly1 and poly2 using edge normals from poly1. */ function b2FindMaxSeparation(edgeIndex, poly1, xf1, poly2, xf2) {
    const count1 = poly1.m_count;
    const count2 = poly2.m_count;
    const n1s = poly1.m_normals;
    const v1s = poly1.m_vertices;
    const v2s = poly2.m_vertices;
    const xf = b2_math_1.b2Transform.TransposeMultiply(xf2, xf1, b2FindMaxSeparation_s_xf);
    let bestIndex = 0;
    let maxSeparation = -b2_common_1.b2_maxFloat;
    for(let i = 0; i < count1; ++i){
        // Get poly1 normal in frame2.
        const n = b2_math_1.b2Rot.MultiplyVec2(xf.q, n1s[i], b2FindMaxSeparation_s_n);
        const v1 = b2_math_1.b2Transform.MultiplyVec2(xf, v1s[i], b2FindMaxSeparation_s_v1);
        // Find deepest point for normal i.
        let si = b2_common_1.b2_maxFloat;
        for(let j = 0; j < count2; ++j){
            const sij = b2_math_1.b2Vec2.Dot(n, b2_math_1.b2Vec2.Subtract(v2s[j], v1, b2_math_1.b2Vec2.s_t0));
            if (sij < si) si = sij;
        }
        if (si > maxSeparation) {
            maxSeparation = si;
            bestIndex = i;
        }
    }
    edgeIndex[0] = bestIndex;
    return maxSeparation;
}
const b2FindIncidentEdge_s_normal1 = new b2_math_1.b2Vec2();
function b2FindIncidentEdge(c, poly1, xf1, edge1, poly2, xf2) {
    const normals1 = poly1.m_normals;
    const count2 = poly2.m_count;
    const vertices2 = poly2.m_vertices;
    const normals2 = poly2.m_normals;
    // DEBUG: b2Assert(0 <= edge1 && edge1 < poly1.m_count);
    // Get the normal of the reference edge in poly2's frame.
    const normal1 = b2_math_1.b2Rot.TransposeMultiplyVec2(xf2.q, b2_math_1.b2Rot.MultiplyVec2(xf1.q, normals1[edge1], b2_math_1.b2Vec2.s_t0), b2FindIncidentEdge_s_normal1);
    // Find the incident edge on poly2.
    let index = 0;
    let minDot = b2_common_1.b2_maxFloat;
    for(let i = 0; i < count2; ++i){
        const dot = b2_math_1.b2Vec2.Dot(normal1, normals2[i]);
        if (dot < minDot) {
            minDot = dot;
            index = i;
        }
    }
    // Build the clip vertices for the incident edge.
    const i1 = index;
    const i2 = i1 + 1 < count2 ? i1 + 1 : 0;
    const c0 = c[0];
    b2_math_1.b2Transform.MultiplyVec2(xf2, vertices2[i1], c0.v);
    const cf0 = c0.id.cf;
    cf0.indexA = edge1;
    cf0.indexB = i1;
    cf0.typeA = b2_collision_1.b2ContactFeatureType.e_face;
    cf0.typeB = b2_collision_1.b2ContactFeatureType.e_vertex;
    const c1 = c[1];
    b2_math_1.b2Transform.MultiplyVec2(xf2, vertices2[i2], c1.v);
    const cf1 = c1.id.cf;
    cf1.indexA = edge1;
    cf1.indexB = i2;
    cf1.typeA = b2_collision_1.b2ContactFeatureType.e_face;
    cf1.typeB = b2_collision_1.b2ContactFeatureType.e_vertex;
}
const b2CollidePolygons_s_incidentEdge = [
    new b2_collision_1.b2ClipVertex(),
    new b2_collision_1.b2ClipVertex()
];
const b2CollidePolygons_s_clipPoints1 = [
    new b2_collision_1.b2ClipVertex(),
    new b2_collision_1.b2ClipVertex()
];
const b2CollidePolygons_s_clipPoints2 = [
    new b2_collision_1.b2ClipVertex(),
    new b2_collision_1.b2ClipVertex()
];
const b2CollidePolygons_s_edgeA = [
    0
];
const b2CollidePolygons_s_edgeB = [
    0
];
const b2CollidePolygons_s_localTangent = new b2_math_1.b2Vec2();
const b2CollidePolygons_s_localNormal = new b2_math_1.b2Vec2();
const b2CollidePolygons_s_planePoint = new b2_math_1.b2Vec2();
const b2CollidePolygons_s_normal = new b2_math_1.b2Vec2();
const b2CollidePolygons_s_tangent = new b2_math_1.b2Vec2();
const b2CollidePolygons_s_ntangent = new b2_math_1.b2Vec2();
const b2CollidePolygons_s_v11 = new b2_math_1.b2Vec2();
const b2CollidePolygons_s_v12 = new b2_math_1.b2Vec2();
/**
 * Find edge normal of max separation on A - return if separating axis is found
 * Find edge normal of max separation on B - return if separation axis is found
 * Choose reference edge as min(minA, minB)
 * Find incident edge
 * Clip

 * The normal points from 1 to 2
 */ function b2CollidePolygons(manifold, polyA, xfA, polyB, xfB) {
    manifold.pointCount = 0;
    const totalRadius = polyA.m_radius + polyB.m_radius;
    const edgeIndexA = b2CollidePolygons_s_edgeA;
    const separationA = b2FindMaxSeparation(edgeIndexA, polyA, xfA, polyB, xfB);
    if (separationA > totalRadius) return;
    const edgeIndexB = b2CollidePolygons_s_edgeB;
    const separationB = b2FindMaxSeparation(edgeIndexB, polyB, xfB, polyA, xfA);
    if (separationB > totalRadius) return;
    let poly1; // reference polygon
    let poly2; // incident polygon
    let xf1;
    let xf2;
    let edge1; // reference edge
    let flip;
    const k_tol = 0.1 * b2_common_1.b2_linearSlop;
    if (separationB > separationA + k_tol) {
        poly1 = polyB;
        poly2 = polyA;
        xf1 = xfB;
        xf2 = xfA;
        // eslint-disable-next-line prefer-destructuring
        edge1 = edgeIndexB[0];
        manifold.type = b2_collision_1.b2ManifoldType.e_faceB;
        flip = 1;
    } else {
        poly1 = polyA;
        poly2 = polyB;
        xf1 = xfA;
        xf2 = xfB;
        // eslint-disable-next-line prefer-destructuring
        edge1 = edgeIndexA[0];
        manifold.type = b2_collision_1.b2ManifoldType.e_faceA;
        flip = 0;
    }
    const incidentEdge = b2CollidePolygons_s_incidentEdge;
    b2FindIncidentEdge(incidentEdge, poly1, xf1, edge1, poly2, xf2);
    const count1 = poly1.m_count;
    const vertices1 = poly1.m_vertices;
    const iv1 = edge1;
    const iv2 = edge1 + 1 < count1 ? edge1 + 1 : 0;
    let v11 = vertices1[iv1];
    let v12 = vertices1[iv2];
    const localTangent = b2_math_1.b2Vec2.Subtract(v12, v11, b2CollidePolygons_s_localTangent);
    localTangent.Normalize();
    const localNormal = b2_math_1.b2Vec2.CrossVec2One(localTangent, b2CollidePolygons_s_localNormal);
    const planePoint = b2_math_1.b2Vec2.Mid(v11, v12, b2CollidePolygons_s_planePoint);
    const tangent = b2_math_1.b2Rot.MultiplyVec2(xf1.q, localTangent, b2CollidePolygons_s_tangent);
    const normal = b2_math_1.b2Vec2.CrossVec2One(tangent, b2CollidePolygons_s_normal);
    v11 = b2_math_1.b2Transform.MultiplyVec2(xf1, v11, b2CollidePolygons_s_v11);
    v12 = b2_math_1.b2Transform.MultiplyVec2(xf1, v12, b2CollidePolygons_s_v12);
    // Face offset.
    const frontOffset = b2_math_1.b2Vec2.Dot(normal, v11);
    // Side offsets, extended by polytope skin thickness.
    const sideOffset1 = -b2_math_1.b2Vec2.Dot(tangent, v11) + totalRadius;
    const sideOffset2 = b2_math_1.b2Vec2.Dot(tangent, v12) + totalRadius;
    // Clip incident edge against extruded edge1 side edges.
    const clipPoints1 = b2CollidePolygons_s_clipPoints1;
    const clipPoints2 = b2CollidePolygons_s_clipPoints2;
    // Clip to box side 1
    const ntangent = b2_math_1.b2Vec2.Negate(tangent, b2CollidePolygons_s_ntangent);
    let np = (0, b2_collision_1.b2ClipSegmentToLine)(clipPoints1, incidentEdge, ntangent, sideOffset1, iv1);
    if (np < 2) return;
    // Clip to negative box side 1
    np = (0, b2_collision_1.b2ClipSegmentToLine)(clipPoints2, clipPoints1, tangent, sideOffset2, iv2);
    if (np < 2) return;
    // Now clipPoints2 contains the clipped points.
    manifold.localNormal.Copy(localNormal);
    manifold.localPoint.Copy(planePoint);
    let pointCount = 0;
    for(let i = 0; i < b2_common_1.b2_maxManifoldPoints; ++i){
        const cv = clipPoints2[i];
        const separation = b2_math_1.b2Vec2.Dot(normal, cv.v) - frontOffset;
        if (separation <= totalRadius) {
            const cp = manifold.points[pointCount];
            b2_math_1.b2Transform.TransposeMultiplyVec2(xf2, cv.v, cp.localPoint);
            cp.id.Copy(cv.id);
            if (flip) {
                // Swap features
                const { cf } = cp.id;
                cf.indexA = cf.indexB;
                cf.indexB = cf.indexA;
                cf.typeA = cf.typeB;
                cf.typeB = cf.typeA;
            }
            ++pointCount;
        }
    }
    manifold.pointCount = pointCount;
}
exports.b2CollidePolygons = b2CollidePolygons;

},{"7311afe018ce2143":"a1SE4","fda0ef47064b5ee7":"3MJcc","92b94c7aec159cd0":"eLdO6"}],"1F4NA":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2CollideEdgeAndPolygon = exports.b2CollideEdgeAndCircle = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("41c3edadbc1694e8");
const b2_math_1 = require("7a39ab7904ed6635");
const b2_collision_1 = require("1b1874fe50fbab1f");
const b2_settings_1 = require("f2f743983a816903");
const b2CollideEdgeAndCircle_s_Q = new b2_math_1.b2Vec2();
const b2CollideEdgeAndCircle_s_e = new b2_math_1.b2Vec2();
const b2CollideEdgeAndCircle_s_d = new b2_math_1.b2Vec2();
const b2CollideEdgeAndCircle_s_e1 = new b2_math_1.b2Vec2();
const b2CollideEdgeAndCircle_s_e2 = new b2_math_1.b2Vec2();
const b2CollideEdgeAndCircle_s_P = new b2_math_1.b2Vec2();
const b2CollideEdgeAndCircle_s_n = new b2_math_1.b2Vec2();
const b2CollideEdgeAndCircle_s_id = new b2_collision_1.b2ContactID();
/**
 * Compute contact points for edge versus circle.
 * This accounts for edge connectivity.
 */ function b2CollideEdgeAndCircle(manifold, edgeA, xfA, circleB, xfB) {
    manifold.pointCount = 0;
    // Compute circle in frame of edge
    const Q = b2_math_1.b2Transform.TransposeMultiplyVec2(xfA, b2_math_1.b2Transform.MultiplyVec2(xfB, circleB.m_p, b2_math_1.b2Vec2.s_t0), b2CollideEdgeAndCircle_s_Q);
    const A = edgeA.m_vertex1;
    const B = edgeA.m_vertex2;
    const e = b2_math_1.b2Vec2.Subtract(B, A, b2CollideEdgeAndCircle_s_e);
    // Normal points to the right for a CCW winding
    const n = b2CollideEdgeAndCircle_s_n.Set(e.y, -e.x);
    const offset = b2_math_1.b2Vec2.Dot(n, b2_math_1.b2Vec2.Subtract(Q, A, b2_math_1.b2Vec2.s_t0));
    const oneSided = edgeA.m_oneSided;
    if (oneSided && offset < 0) return;
    // Barycentric coordinates
    const u = b2_math_1.b2Vec2.Dot(e, b2_math_1.b2Vec2.Subtract(B, Q, b2_math_1.b2Vec2.s_t0));
    const v = b2_math_1.b2Vec2.Dot(e, b2_math_1.b2Vec2.Subtract(Q, A, b2_math_1.b2Vec2.s_t0));
    const radius = edgeA.m_radius + circleB.m_radius;
    const id = b2CollideEdgeAndCircle_s_id;
    id.cf.indexB = 0;
    id.cf.typeB = b2_collision_1.b2ContactFeatureType.e_vertex;
    // Region A
    if (v <= 0) {
        const P = A;
        const d = b2_math_1.b2Vec2.Subtract(Q, P, b2CollideEdgeAndCircle_s_d);
        const dd = b2_math_1.b2Vec2.Dot(d, d);
        if (dd > radius * radius) return;
        // Is there an edge connected to A?
        if (edgeA.m_oneSided) {
            const A1 = edgeA.m_vertex0;
            const B1 = A;
            const e1 = b2_math_1.b2Vec2.Subtract(B1, A1, b2CollideEdgeAndCircle_s_e1);
            const u1 = b2_math_1.b2Vec2.Dot(e1, b2_math_1.b2Vec2.Subtract(B1, Q, b2_math_1.b2Vec2.s_t0));
            // Is the circle in Region AB of the previous edge?
            if (u1 > 0) return;
        }
        id.cf.indexA = 0;
        id.cf.typeA = b2_collision_1.b2ContactFeatureType.e_vertex;
        manifold.pointCount = 1;
        manifold.type = b2_collision_1.b2ManifoldType.e_circles;
        manifold.localNormal.SetZero();
        manifold.localPoint.Copy(P);
        manifold.points[0].id.Copy(id);
        manifold.points[0].localPoint.Copy(circleB.m_p);
        return;
    }
    // Region B
    if (u <= 0) {
        const P = B;
        const d = b2_math_1.b2Vec2.Subtract(Q, P, b2CollideEdgeAndCircle_s_d);
        const dd = b2_math_1.b2Vec2.Dot(d, d);
        if (dd > radius * radius) return;
        // Is there an edge connected to B?
        if (edgeA.m_oneSided) {
            const B2 = edgeA.m_vertex3;
            const A2 = B;
            const e2 = b2_math_1.b2Vec2.Subtract(B2, A2, b2CollideEdgeAndCircle_s_e2);
            const v2 = b2_math_1.b2Vec2.Dot(e2, b2_math_1.b2Vec2.Subtract(Q, A2, b2_math_1.b2Vec2.s_t0));
            // Is the circle in Region AB of the next edge?
            if (v2 > 0) return;
        }
        id.cf.indexA = 1;
        id.cf.typeA = b2_collision_1.b2ContactFeatureType.e_vertex;
        manifold.pointCount = 1;
        manifold.type = b2_collision_1.b2ManifoldType.e_circles;
        manifold.localNormal.SetZero();
        manifold.localPoint.Copy(P);
        manifold.points[0].id.Copy(id);
        manifold.points[0].localPoint.Copy(circleB.m_p);
        return;
    }
    // Region AB
    const den = b2_math_1.b2Vec2.Dot(e, e);
    // DEBUG: b2Assert(den > 0);
    const P = b2CollideEdgeAndCircle_s_P;
    P.x = 1 / den * (u * A.x + v * B.x);
    P.y = 1 / den * (u * A.y + v * B.y);
    const d = b2_math_1.b2Vec2.Subtract(Q, P, b2CollideEdgeAndCircle_s_d);
    const dd = b2_math_1.b2Vec2.Dot(d, d);
    if (dd > radius * radius) return;
    if (offset < 0) n.Set(-n.x, -n.y);
    n.Normalize();
    id.cf.indexA = 0;
    id.cf.typeA = b2_collision_1.b2ContactFeatureType.e_face;
    manifold.pointCount = 1;
    manifold.type = b2_collision_1.b2ManifoldType.e_faceA;
    manifold.localNormal.Copy(n);
    manifold.localPoint.Copy(A);
    manifold.points[0].id.Copy(id);
    manifold.points[0].localPoint.Copy(circleB.m_p);
}
exports.b2CollideEdgeAndCircle = b2CollideEdgeAndCircle;
var b2EPAxisType;
(function(b2EPAxisType) {
    b2EPAxisType[b2EPAxisType["e_unknown"] = 0] = "e_unknown";
    b2EPAxisType[b2EPAxisType["e_edgeA"] = 1] = "e_edgeA";
    b2EPAxisType[b2EPAxisType["e_edgeB"] = 2] = "e_edgeB";
})(b2EPAxisType || (b2EPAxisType = {}));
/** This structure is used to keep track of the best separating axis. */ class b2EPAxis {
    constructor(){
        this.normal = new b2_math_1.b2Vec2();
        this.type = b2EPAxisType.e_unknown;
        this.index = 0;
        this.separation = 0;
    }
}
/** This holds polygon B expressed in frame A. */ class b2TempPolygon {
    constructor(){
        this.vertices = (0, b2_common_1.b2MakeArray)(b2_settings_1.b2_maxPolygonVertices, b2_math_1.b2Vec2);
        this.normals = (0, b2_common_1.b2MakeArray)(b2_settings_1.b2_maxPolygonVertices, b2_math_1.b2Vec2);
        this.count = 0;
    }
}
/** Reference face used for clipping */ class b2ReferenceFace {
    constructor(){
        this.i1 = 0;
        this.i2 = 0;
        this.v1 = new b2_math_1.b2Vec2();
        this.v2 = new b2_math_1.b2Vec2();
        this.normal = new b2_math_1.b2Vec2();
        this.sideNormal1 = new b2_math_1.b2Vec2();
        this.sideOffset1 = 0;
        this.sideNormal2 = new b2_math_1.b2Vec2();
        this.sideOffset2 = 0;
    }
}
const b2ComputeEdgeSeparation_s_axis = new b2EPAxis();
const b2ComputeEdgeSeparation_s_axes = [
    new b2_math_1.b2Vec2(),
    new b2_math_1.b2Vec2()
];
function b2ComputeEdgeSeparation(polygonB, v1, normal1) {
    const axis = b2ComputeEdgeSeparation_s_axis;
    axis.type = b2EPAxisType.e_edgeA;
    axis.index = -1;
    axis.separation = -b2_common_1.b2_maxFloat;
    axis.normal.SetZero();
    const axes = b2ComputeEdgeSeparation_s_axes;
    axes[0].Copy(normal1);
    b2_math_1.b2Vec2.Negate(normal1, axes[1]);
    // Find axis with least overlap (min-max problem)
    for(let j = 0; j < 2; ++j){
        let sj = b2_common_1.b2_maxFloat;
        // Find deepest polygon vertex along axis j
        for(let i = 0; i < polygonB.count; ++i){
            const si = b2_math_1.b2Vec2.Dot(axes[j], b2_math_1.b2Vec2.Subtract(polygonB.vertices[i], v1, b2_math_1.b2Vec2.s_t0));
            if (si < sj) sj = si;
        }
        if (sj > axis.separation) {
            axis.index = j;
            axis.separation = sj;
            axis.normal.Copy(axes[j]);
        }
    }
    return axis;
}
const b2ComputePolygonSeparation_s_axis = new b2EPAxis();
const b2ComputePolygonSeparation_s_n = new b2_math_1.b2Vec2();
function b2ComputePolygonSeparation(polygonB, v1, v2) {
    const axis = b2ComputePolygonSeparation_s_axis;
    axis.type = b2EPAxisType.e_unknown;
    axis.index = -1;
    axis.separation = -b2_common_1.b2_maxFloat;
    axis.normal.SetZero();
    for(let i = 0; i < polygonB.count; ++i){
        const n = b2_math_1.b2Vec2.Negate(polygonB.normals[i], b2ComputePolygonSeparation_s_n);
        const s1 = b2_math_1.b2Vec2.Dot(n, b2_math_1.b2Vec2.Subtract(polygonB.vertices[i], v1, b2_math_1.b2Vec2.s_t0));
        const s2 = b2_math_1.b2Vec2.Dot(n, b2_math_1.b2Vec2.Subtract(polygonB.vertices[i], v2, b2_math_1.b2Vec2.s_t0));
        const s = Math.min(s1, s2);
        if (s > axis.separation) {
            axis.type = b2EPAxisType.e_edgeB;
            axis.index = i;
            axis.separation = s;
            axis.normal.Copy(n);
        }
    }
    return axis;
}
const b2CollideEdgeAndPolygon_s_xf = new b2_math_1.b2Transform();
const b2CollideEdgeAndPolygon_s_centroidB = new b2_math_1.b2Vec2();
const b2CollideEdgeAndPolygon_s_edge1 = new b2_math_1.b2Vec2();
const b2CollideEdgeAndPolygon_s_normal1 = new b2_math_1.b2Vec2();
const b2CollideEdgeAndPolygon_s_edge0 = new b2_math_1.b2Vec2();
const b2CollideEdgeAndPolygon_s_normal0 = new b2_math_1.b2Vec2();
const b2CollideEdgeAndPolygon_s_edge2 = new b2_math_1.b2Vec2();
const b2CollideEdgeAndPolygon_s_normal2 = new b2_math_1.b2Vec2();
const b2CollideEdgeAndPolygon_s_tempPolygonB = new b2TempPolygon();
const b2CollideEdgeAndPolygon_s_ref = new b2ReferenceFace();
const b2CollideEdgeAndPolygon_s_clipPoints = [
    new b2_collision_1.b2ClipVertex(),
    new b2_collision_1.b2ClipVertex()
];
const b2CollideEdgeAndPolygon_s_clipPoints1 = [
    new b2_collision_1.b2ClipVertex(),
    new b2_collision_1.b2ClipVertex()
];
const b2CollideEdgeAndPolygon_s_clipPoints2 = [
    new b2_collision_1.b2ClipVertex(),
    new b2_collision_1.b2ClipVertex()
];
function b2CollideEdgeAndPolygon(manifold, edgeA, xfA, polygonB, xfB) {
    manifold.pointCount = 0;
    const xf = b2_math_1.b2Transform.TransposeMultiply(xfA, xfB, b2CollideEdgeAndPolygon_s_xf);
    const centroidB = b2_math_1.b2Transform.MultiplyVec2(xf, polygonB.m_centroid, b2CollideEdgeAndPolygon_s_centroidB);
    const v1 = edgeA.m_vertex1;
    const v2 = edgeA.m_vertex2;
    const edge1 = b2_math_1.b2Vec2.Subtract(v2, v1, b2CollideEdgeAndPolygon_s_edge1);
    edge1.Normalize();
    // Normal points to the right for a CCW winding
    const normal1 = b2CollideEdgeAndPolygon_s_normal1.Set(edge1.y, -edge1.x);
    const offset1 = b2_math_1.b2Vec2.Dot(normal1, b2_math_1.b2Vec2.Subtract(centroidB, v1, b2_math_1.b2Vec2.s_t0));
    const oneSided = edgeA.m_oneSided;
    if (oneSided && offset1 < 0) return;
    // Get polygonB in frameA
    const tempPolygonB = b2CollideEdgeAndPolygon_s_tempPolygonB;
    tempPolygonB.count = polygonB.m_count;
    for(let i = 0; i < polygonB.m_count; ++i){
        b2_math_1.b2Transform.MultiplyVec2(xf, polygonB.m_vertices[i], tempPolygonB.vertices[i]);
        b2_math_1.b2Rot.MultiplyVec2(xf.q, polygonB.m_normals[i], tempPolygonB.normals[i]);
    }
    const radius = polygonB.m_radius + edgeA.m_radius;
    const edgeAxis = b2ComputeEdgeSeparation(tempPolygonB, v1, normal1);
    if (edgeAxis.separation > radius) return;
    const polygonAxis = b2ComputePolygonSeparation(tempPolygonB, v1, v2);
    if (polygonAxis.separation > radius) return;
    // Use hysteresis for jitter reduction.
    const k_relativeTol = 0.98;
    const k_absoluteTol = 0.001;
    // b2EPAxis primaryAxis;
    let primaryAxis;
    if (polygonAxis.separation - radius > k_relativeTol * (edgeAxis.separation - radius) + k_absoluteTol) primaryAxis = polygonAxis;
    else primaryAxis = edgeAxis;
    if (oneSided) {
        // Smooth collision
        // See https://box2d.org/posts/2020/06/ghost-collisions/
        const edge0 = b2_math_1.b2Vec2.Subtract(v1, edgeA.m_vertex0, b2CollideEdgeAndPolygon_s_edge0);
        edge0.Normalize();
        const normal0 = b2CollideEdgeAndPolygon_s_normal0.Set(edge0.y, -edge0.x);
        const convex1 = b2_math_1.b2Vec2.Cross(edge0, edge1) >= 0;
        const edge2 = b2_math_1.b2Vec2.Subtract(edgeA.m_vertex3, v2, b2CollideEdgeAndPolygon_s_edge2);
        edge2.Normalize();
        const normal2 = b2CollideEdgeAndPolygon_s_normal2.Set(edge2.y, -edge2.x);
        const convex2 = b2_math_1.b2Vec2.Cross(edge1, edge2) >= 0;
        const sinTol = 0.1;
        const side1 = b2_math_1.b2Vec2.Dot(primaryAxis.normal, edge1) <= 0;
        // Check Gauss Map
        if (side1) {
            if (convex1) {
                if (b2_math_1.b2Vec2.Cross(primaryAxis.normal, normal0) > sinTol) // Skip region
                return;
            // Admit region
            } else // Snap region
            primaryAxis = edgeAxis;
        } else if (convex2) {
            if (b2_math_1.b2Vec2.Cross(normal2, primaryAxis.normal) > sinTol) // Skip region
            return;
        // Admit region
        } else // Snap region
        primaryAxis = edgeAxis;
    }
    const clipPoints = b2CollideEdgeAndPolygon_s_clipPoints;
    const ref = b2CollideEdgeAndPolygon_s_ref;
    if (primaryAxis.type === b2EPAxisType.e_edgeA) {
        manifold.type = b2_collision_1.b2ManifoldType.e_faceA;
        // Search for the polygon normal that is most anti-parallel to the edge normal.
        let bestIndex = 0;
        let bestValue = b2_math_1.b2Vec2.Dot(primaryAxis.normal, tempPolygonB.normals[0]);
        for(let i = 1; i < tempPolygonB.count; ++i){
            const value = b2_math_1.b2Vec2.Dot(primaryAxis.normal, tempPolygonB.normals[i]);
            if (value < bestValue) {
                bestValue = value;
                bestIndex = i;
            }
        }
        const i1 = bestIndex;
        const i2 = i1 + 1 < tempPolygonB.count ? i1 + 1 : 0;
        clipPoints[0].v.Copy(tempPolygonB.vertices[i1]);
        clipPoints[0].id.cf.indexA = 0;
        clipPoints[0].id.cf.indexB = i1;
        clipPoints[0].id.cf.typeA = b2_collision_1.b2ContactFeatureType.e_face;
        clipPoints[0].id.cf.typeB = b2_collision_1.b2ContactFeatureType.e_vertex;
        clipPoints[1].v.Copy(tempPolygonB.vertices[i2]);
        clipPoints[1].id.cf.indexA = 0;
        clipPoints[1].id.cf.indexB = i2;
        clipPoints[1].id.cf.typeA = b2_collision_1.b2ContactFeatureType.e_face;
        clipPoints[1].id.cf.typeB = b2_collision_1.b2ContactFeatureType.e_vertex;
        ref.i1 = 0;
        ref.i2 = 1;
        ref.v1.Copy(v1);
        ref.v2.Copy(v2);
        ref.normal.Copy(primaryAxis.normal);
        b2_math_1.b2Vec2.Negate(edge1, ref.sideNormal1);
        ref.sideNormal2.Copy(edge1);
    } else {
        manifold.type = b2_collision_1.b2ManifoldType.e_faceB;
        clipPoints[0].v.Copy(v2);
        clipPoints[0].id.cf.indexA = 1;
        clipPoints[0].id.cf.indexB = primaryAxis.index;
        clipPoints[0].id.cf.typeA = b2_collision_1.b2ContactFeatureType.e_vertex;
        clipPoints[0].id.cf.typeB = b2_collision_1.b2ContactFeatureType.e_face;
        clipPoints[1].v.Copy(v1);
        clipPoints[1].id.cf.indexA = 0;
        clipPoints[1].id.cf.indexB = primaryAxis.index;
        clipPoints[1].id.cf.typeA = b2_collision_1.b2ContactFeatureType.e_vertex;
        clipPoints[1].id.cf.typeB = b2_collision_1.b2ContactFeatureType.e_face;
        ref.i1 = primaryAxis.index;
        ref.i2 = ref.i1 + 1 < tempPolygonB.count ? ref.i1 + 1 : 0;
        ref.v1.Copy(tempPolygonB.vertices[ref.i1]);
        ref.v2.Copy(tempPolygonB.vertices[ref.i2]);
        ref.normal.Copy(tempPolygonB.normals[ref.i1]);
        // CCW winding
        ref.sideNormal1.Set(ref.normal.y, -ref.normal.x);
        b2_math_1.b2Vec2.Negate(ref.sideNormal1, ref.sideNormal2);
    }
    ref.sideOffset1 = b2_math_1.b2Vec2.Dot(ref.sideNormal1, ref.v1);
    ref.sideOffset2 = b2_math_1.b2Vec2.Dot(ref.sideNormal2, ref.v2);
    // Clip incident edge against reference face side planes
    const clipPoints1 = b2CollideEdgeAndPolygon_s_clipPoints1;
    const clipPoints2 = b2CollideEdgeAndPolygon_s_clipPoints2;
    let np;
    // Clip to side 1
    np = (0, b2_collision_1.b2ClipSegmentToLine)(clipPoints1, clipPoints, ref.sideNormal1, ref.sideOffset1, ref.i1);
    if (np < b2_common_1.b2_maxManifoldPoints) return;
    // Clip to side 2
    np = (0, b2_collision_1.b2ClipSegmentToLine)(clipPoints2, clipPoints1, ref.sideNormal2, ref.sideOffset2, ref.i2);
    if (np < b2_common_1.b2_maxManifoldPoints) return;
    // Now clipPoints2 contains the clipped points.
    if (primaryAxis.type === b2EPAxisType.e_edgeA) {
        manifold.localNormal.Copy(ref.normal);
        manifold.localPoint.Copy(ref.v1);
    } else {
        manifold.localNormal.Copy(polygonB.m_normals[ref.i1]);
        manifold.localPoint.Copy(polygonB.m_vertices[ref.i1]);
    }
    let pointCount = 0;
    for(let i = 0; i < b2_common_1.b2_maxManifoldPoints; ++i){
        const separation = b2_math_1.b2Vec2.Dot(ref.normal, b2_math_1.b2Vec2.Subtract(clipPoints2[i].v, ref.v1, b2_math_1.b2Vec2.s_t0));
        if (separation <= radius) {
            const cp = manifold.points[pointCount];
            if (primaryAxis.type === b2EPAxisType.e_edgeA) {
                b2_math_1.b2Transform.TransposeMultiplyVec2(xf, clipPoints2[i].v, cp.localPoint);
                cp.id.Copy(clipPoints2[i].id);
            } else {
                cp.localPoint.Copy(clipPoints2[i].v);
                cp.id.cf.typeA = clipPoints2[i].id.cf.typeB;
                cp.id.cf.typeB = clipPoints2[i].id.cf.typeA;
                cp.id.cf.indexA = clipPoints2[i].id.cf.indexB;
                cp.id.cf.indexB = clipPoints2[i].id.cf.indexA;
            }
            ++pointCount;
        }
    }
    manifold.pointCount = pointCount;
}
exports.b2CollideEdgeAndPolygon = b2CollideEdgeAndPolygon;

},{"41c3edadbc1694e8":"a1SE4","7a39ab7904ed6635":"3MJcc","1b1874fe50fbab1f":"eLdO6","f2f743983a816903":"hZX5U"}],"9YwnE":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2CircleShape = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("49dcf38b0d4e5624");
const b2_math_1 = require("c83f78e321f55eec");
const b2_shape_1 = require("5c08e7ba1a3ffd86");
/**
 * A solid circle shape
 */ class b2CircleShape extends b2_shape_1.b2Shape {
    constructor(radius = 0){
        super(b2_shape_1.b2ShapeType.e_circle, radius);
        /** Position */ this.m_p = new b2_math_1.b2Vec2();
    }
    Set(position, radius = this.m_radius) {
        this.m_p.Copy(position);
        this.m_radius = radius;
        return this;
    }
    /**
     * Implement b2Shape.
     */ Clone() {
        return new b2CircleShape().Copy(this);
    }
    Copy(other) {
        super.Copy(other);
        // DEBUG: b2Assert(other instanceof b2CircleShape);
        this.m_p.Copy(other.m_p);
        return this;
    }
    /**
     * @see b2Shape::GetChildCount
     */ GetChildCount() {
        return 1;
    }
    /**
     * Implement b2Shape.
     */ TestPoint(transform, p) {
        const center = b2_math_1.b2Transform.MultiplyVec2(transform, this.m_p, b2CircleShape.TestPoint_s_center);
        const d = b2_math_1.b2Vec2.Subtract(p, center, b2CircleShape.TestPoint_s_d);
        return b2_math_1.b2Vec2.Dot(d, d) <= this.m_radius ** 2;
    }
    /**
     * Implement b2Shape.
     *
     * @note because the circle is solid, rays that start inside do not hit because the normal is
     * not defined. Collision Detection in Interactive 3D Environments by Gino van den Bergen
     * From Section 3.1.2
     * x = s + a * r
     * norm(x) = radius
     */ RayCast(output, input, transform, _childIndex) {
        const position = b2_math_1.b2Transform.MultiplyVec2(transform, this.m_p, b2CircleShape.RayCast_s_position);
        const s = b2_math_1.b2Vec2.Subtract(input.p1, position, b2CircleShape.RayCast_s_s);
        const b = b2_math_1.b2Vec2.Dot(s, s) - this.m_radius ** 2;
        // Solve quadratic equation.
        const r = b2_math_1.b2Vec2.Subtract(input.p2, input.p1, b2CircleShape.RayCast_s_r);
        const c = b2_math_1.b2Vec2.Dot(s, r);
        const rr = b2_math_1.b2Vec2.Dot(r, r);
        const sigma = c * c - rr * b;
        // Check for negative discriminant and short segment.
        if (sigma < 0 || rr < b2_common_1.b2_epsilon) return false;
        // Find the point of intersection of the line with the circle.
        let a = -(c + Math.sqrt(sigma));
        // Is the intersection point on the segment?
        if (a >= 0 && a <= input.maxFraction * rr) {
            a /= rr;
            output.fraction = a;
            b2_math_1.b2Vec2.AddScaled(s, a, r, output.normal).Normalize();
            return true;
        }
        return false;
    }
    /**
     * @see b2Shape::ComputeAABB
     */ ComputeAABB(aabb, transform, _childIndex) {
        const p = b2_math_1.b2Transform.MultiplyVec2(transform, this.m_p, b2CircleShape.ComputeAABB_s_p);
        aabb.lowerBound.Set(p.x - this.m_radius, p.y - this.m_radius);
        aabb.upperBound.Set(p.x + this.m_radius, p.y + this.m_radius);
    }
    /**
     * @see b2Shape::ComputeMass
     */ ComputeMass(massData, density) {
        const radius_sq = this.m_radius ** 2;
        massData.mass = density * Math.PI * radius_sq;
        massData.center.Copy(this.m_p);
        // inertia about the local origin
        massData.I = massData.mass * (0.5 * radius_sq + b2_math_1.b2Vec2.Dot(this.m_p, this.m_p));
    }
    SetupDistanceProxy(proxy, _index) {
        proxy.m_vertices = proxy.m_buffer;
        proxy.m_vertices[0] = this.m_p;
        proxy.m_count = 1;
        proxy.m_radius = this.m_radius;
    }
    Draw(draw, color) {
        const center = this.m_p;
        const radius = this.m_radius;
        const axis = b2_math_1.b2Vec2.UNITX;
        draw.DrawSolidCircle(center, radius, axis, color);
    }
}
exports.b2CircleShape = b2CircleShape;
b2CircleShape.TestPoint_s_center = new b2_math_1.b2Vec2();
b2CircleShape.TestPoint_s_d = new b2_math_1.b2Vec2();
b2CircleShape.RayCast_s_position = new b2_math_1.b2Vec2();
b2CircleShape.RayCast_s_s = new b2_math_1.b2Vec2();
b2CircleShape.RayCast_s_r = new b2_math_1.b2Vec2();
b2CircleShape.ComputeAABB_s_p = new b2_math_1.b2Vec2();

},{"49dcf38b0d4e5624":"a1SE4","c83f78e321f55eec":"3MJcc","5c08e7ba1a3ffd86":"6cP2p"}],"goeYU":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2PolygonShape = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert, b2_epsilon_sq } from "../common/b2_common";
const b2_common_1 = require("aec3c72c7be08d56");
const b2_math_1 = require("31e33f82ae321654");
const b2_settings_1 = require("e44195634470a559");
const b2_collision_1 = require("3233770ee8993643");
const b2_shape_1 = require("c80b33de279579a7");
const temp = {
    ComputeCentroid: {
        s: new b2_math_1.b2Vec2(),
        p1: new b2_math_1.b2Vec2(),
        p2: new b2_math_1.b2Vec2(),
        p3: new b2_math_1.b2Vec2(),
        e1: new b2_math_1.b2Vec2(),
        e2: new b2_math_1.b2Vec2()
    },
    TestPoint: {
        pLocal: new b2_math_1.b2Vec2()
    },
    ComputeAABB: {
        v: new b2_math_1.b2Vec2()
    },
    ComputeMass: {
        center: new b2_math_1.b2Vec2(),
        s: new b2_math_1.b2Vec2(),
        e1: new b2_math_1.b2Vec2(),
        e2: new b2_math_1.b2Vec2()
    },
    Validate: {
        e: new b2_math_1.b2Vec2(),
        v: new b2_math_1.b2Vec2()
    },
    Set: {
        r: new b2_math_1.b2Vec2(),
        v: new b2_math_1.b2Vec2()
    },
    RayCast: {
        p1: new b2_math_1.b2Vec2(),
        p2: new b2_math_1.b2Vec2(),
        d: new b2_math_1.b2Vec2()
    },
    SetAsBox: {
        xf: new b2_math_1.b2Transform()
    }
};
function ComputeCentroid(vs, count, out) {
    // DEBUG: b2Assert(count >= 3);
    const c = out;
    c.SetZero();
    let area = 0;
    const { s, p1, p2, p3, e1, e2 } = temp.ComputeCentroid;
    // Get a reference point for forming triangles.
    // Use the first vertex to reduce round-off errors.
    s.Copy(vs[0]);
    const inv3 = 1 / 3;
    for(let i = 0; i < count; ++i){
        // Triangle vertices.
        b2_math_1.b2Vec2.Subtract(vs[0], s, p1);
        b2_math_1.b2Vec2.Subtract(vs[i], s, p2);
        b2_math_1.b2Vec2.Subtract(vs[i + 1 < count ? i + 1 : 0], s, p3);
        b2_math_1.b2Vec2.Subtract(p2, p1, e1);
        b2_math_1.b2Vec2.Subtract(p3, p1, e2);
        const D = b2_math_1.b2Vec2.Cross(e1, e2);
        const triangleArea = 0.5 * D;
        area += triangleArea;
        // Area weighted centroid
        c.x += triangleArea * inv3 * (p1.x + p2.x + p3.x);
        c.y += triangleArea * inv3 * (p1.y + p2.y + p3.y);
    }
    // Centroid
    // DEBUG: b2Assert(area > b2_epsilon);
    const f = 1 / area;
    c.x = f * c.x + s.x;
    c.y = f * c.y + s.y;
    return c;
}
const setHull_s_edge = new b2_math_1.b2Vec2();
/**
 * A solid convex polygon. It is assumed that the interior of the polygon is to
 * the left of each edge.
 * Polygons have a maximum number of vertices equal to b2_maxPolygonVertices.
 * In most cases you should not need many vertices for a convex polygon.
 */ class b2PolygonShape extends b2_shape_1.b2Shape {
    constructor(){
        super(b2_shape_1.b2ShapeType.e_polygon, b2_common_1.b2_polygonRadius);
        this.m_centroid = new b2_math_1.b2Vec2();
        this.m_vertices = [];
        this.m_normals = [];
        this.m_count = 0;
    }
    /**
     * Implement b2Shape.
     */ Clone() {
        return new b2PolygonShape().Copy(this);
    }
    Copy(other) {
        super.Copy(other);
        // DEBUG: b2Assert(other instanceof b2PolygonShape);
        this.m_centroid.Copy(other.m_centroid);
        this.m_count = other.m_count;
        this.m_vertices = (0, b2_common_1.b2MakeArray)(this.m_count, b2_math_1.b2Vec2);
        this.m_normals = (0, b2_common_1.b2MakeArray)(this.m_count, b2_math_1.b2Vec2);
        for(let i = 0; i < this.m_count; ++i){
            this.m_vertices[i].Copy(other.m_vertices[i]);
            this.m_normals[i].Copy(other.m_normals[i]);
        }
        return this;
    }
    /**
     * @see b2Shape::GetChildCount
     */ GetChildCount() {
        return 1;
    }
    /**
     * Create a convex hull from the given array of local points.
     * The count must be in the range [3, b2_maxPolygonVertices].
     *
     * @warning the points may be re-ordered, even if they form a convex polygon
     * @warning if this fails then the polygon is invalid
     * @returns true if valid
     */ Set(vertices, count = vertices.length) {
        const hull = (0, b2_collision_1.b2ComputeHull)(vertices, count);
        if (hull.length < 3) return false;
        this.SetHull(hull, hull.length);
        return true;
    }
    /**
     * Create a polygon from a given convex hull (see b2ComputeHull).
     * @warning the hull must be valid or this will crash or have unexpected behavior
     */ SetHull(hull, count) {
        (0, b2_common_1.b2Assert)(count >= 3);
        this.m_count = count;
        // Copy vertices
        this.m_vertices = (0, b2_common_1.b2MakeArray)(count, b2_math_1.b2Vec2);
        for(let i = 0; i < count; ++i)this.m_vertices[i].Copy(hull[i]);
        // Compute normals. Ensure the edges have non-zero length.
        this.m_normals = (0, b2_common_1.b2MakeArray)(count, b2_math_1.b2Vec2);
        for(let i = 0; i < this.m_count; ++i){
            const i1 = i;
            const i2 = i + 1 < this.m_count ? i + 1 : 0;
            const edge = b2_math_1.b2Vec2.Subtract(this.m_vertices[i2], this.m_vertices[i1], setHull_s_edge);
            // DEBUG: b2Assert(edge.LengthSquared() > b2_epsilon * b2_epsilon);
            b2_math_1.b2Vec2.CrossVec2Scalar(edge, 1, this.m_normals[i]);
            this.m_normals[i].Normalize();
        }
        // Compute the polygon centroid.
        ComputeCentroid(this.m_vertices, this.m_count, this.m_centroid);
        return this;
    }
    /**
     * Build vertices to represent an axis-aligned box centered on the local origin.
     *
     * @param hx The half-width.
     * @param hy The half-height.
     * @param center The center of the box in local coordinates.
     * @param angle The rotation of the box in local coordinates.
     */ SetAsBox(hx, hy, center, angle = 0) {
        this.m_count = 4;
        this.m_vertices = (0, b2_common_1.b2MakeArray)(this.m_count, b2_math_1.b2Vec2);
        this.m_normals = (0, b2_common_1.b2MakeArray)(this.m_count, b2_math_1.b2Vec2);
        this.m_vertices[0].Set(-hx, -hy);
        this.m_vertices[1].Set(hx, -hy);
        this.m_vertices[2].Set(hx, hy);
        this.m_vertices[3].Set(-hx, hy);
        this.m_normals[0].Set(0, -1);
        this.m_normals[1].Set(1, 0);
        this.m_normals[2].Set(0, 1);
        this.m_normals[3].Set(-1, 0);
        if (center) {
            this.m_centroid.Copy(center);
            const { xf } = temp.SetAsBox;
            xf.SetPosition(center);
            xf.SetRotationAngle(angle);
            // Transform vertices and normals.
            for(let i = 0; i < this.m_count; ++i){
                b2_math_1.b2Transform.MultiplyVec2(xf, this.m_vertices[i], this.m_vertices[i]);
                b2_math_1.b2Rot.MultiplyVec2(xf.q, this.m_normals[i], this.m_normals[i]);
            }
        } else this.m_centroid.SetZero();
        return this;
    }
    /**
     * @see b2Shape::TestPoint
     */ TestPoint(xf, p) {
        const pLocal = b2_math_1.b2Transform.TransposeMultiplyVec2(xf, p, temp.TestPoint.pLocal);
        for(let i = 0; i < this.m_count; ++i){
            const dot = b2_math_1.b2Vec2.Dot(this.m_normals[i], b2_math_1.b2Vec2.Subtract(pLocal, this.m_vertices[i], b2_math_1.b2Vec2.s_t0));
            if (dot > 0) return false;
        }
        return true;
    }
    /**
     * Implement b2Shape.
     *
     * @note because the polygon is solid, rays that start inside do not hit because the normal is
     * not defined.
     */ RayCast(output, input, xf, _childIndex) {
        // Put the ray into the polygon's frame of reference.
        const p1 = b2_math_1.b2Transform.TransposeMultiplyVec2(xf, input.p1, temp.RayCast.p1);
        const p2 = b2_math_1.b2Transform.TransposeMultiplyVec2(xf, input.p2, temp.RayCast.p2);
        const d = b2_math_1.b2Vec2.Subtract(p2, p1, temp.RayCast.d);
        let lower = 0;
        let upper = input.maxFraction;
        let index = -1;
        for(let i = 0; i < this.m_count; ++i){
            // p = p1 + a * d
            // dot(normal, p - v) = 0
            // dot(normal, p1 - v) + a * dot(normal, d) = 0
            const numerator = b2_math_1.b2Vec2.Dot(this.m_normals[i], b2_math_1.b2Vec2.Subtract(this.m_vertices[i], p1, b2_math_1.b2Vec2.s_t0));
            const denominator = b2_math_1.b2Vec2.Dot(this.m_normals[i], d);
            if (denominator === 0) {
                if (numerator < 0) return false;
            // Note: we want this predicate without division:
            // lower < numerator / denominator, where denominator < 0
            // Since denominator < 0, we have to flip the inequality:
            // lower < numerator / denominator <==> denominator * lower > numerator.
            } else if (denominator < 0 && numerator < lower * denominator) {
                // Increase lower.
                // The segment enters this half-space.
                lower = numerator / denominator;
                index = i;
            } else if (denominator > 0 && numerator < upper * denominator) // Decrease upper.
            // The segment exits this half-space.
            upper = numerator / denominator;
            // The use of epsilon here causes the assert on lower to trip
            // in some cases. Apparently the use of epsilon was to make edge
            // shapes work, but now those are handled separately.
            // if (upper < lower - b2_epsilon)
            if (upper < lower) return false;
        }
        // DEBUG: b2Assert(0 <= lower && lower <= input.maxFraction);
        if (index >= 0) {
            output.fraction = lower;
            b2_math_1.b2Rot.MultiplyVec2(xf.q, this.m_normals[index], output.normal);
            return true;
        }
        return false;
    }
    /**
     * @see b2Shape::ComputeAABB
     */ ComputeAABB(aabb, xf, _childIndex) {
        const lower = b2_math_1.b2Transform.MultiplyVec2(xf, this.m_vertices[0], aabb.lowerBound);
        const upper = aabb.upperBound.Copy(lower);
        for(let i = 1; i < this.m_count; ++i){
            const v = b2_math_1.b2Transform.MultiplyVec2(xf, this.m_vertices[i], temp.ComputeAABB.v);
            b2_math_1.b2Vec2.Min(lower, v, lower);
            b2_math_1.b2Vec2.Max(upper, v, upper);
        }
        const r = this.m_radius;
        lower.SubtractXY(r, r);
        upper.AddXY(r, r);
    }
    /**
     * @see b2Shape::ComputeMass
     */ ComputeMass(massData, density) {
        // Polygon mass, centroid, and inertia.
        // Let rho be the polygon density in mass per unit area.
        // Then:
        // mass = rho * int(dA)
        // centroid.x = (1/mass) * rho * int(x * dA)
        // centroid.y = (1/mass) * rho * int(y * dA)
        // I = rho * int((x*x + y*y) * dA)
        //
        // We can compute these integrals by summing all the integrals
        // for each triangle of the polygon. To evaluate the integral
        // for a single triangle, we make a change of variables to
        // the (u,v) coordinates of the triangle:
        // x = x0 + e1x * u + e2x * v
        // y = y0 + e1y * u + e2y * v
        // where 0 <= u && 0 <= v && u + v <= 1.
        //
        // We integrate u from [0,1-v] and then v from [0,1].
        // We also need to use the Jacobian of the transformation:
        // D = cross(e1, e2)
        //
        // Simplification: triangle centroid = (1/3) * (p1 + p2 + p3)
        //
        // The rest of the derivation is handled by computer algebra.
        // DEBUG: b2Assert(this.m_count >= 3);
        const center = temp.ComputeMass.center.SetZero();
        let area = 0;
        let I = 0;
        // Get a reference point for forming triangles.
        // Use the first vertex to reduce round-off errors.
        const s = temp.ComputeMass.s.Copy(this.m_vertices[0]);
        const k_inv3 = 1 / 3;
        for(let i = 0; i < this.m_count; ++i){
            // Triangle vertices.
            const e1 = b2_math_1.b2Vec2.Subtract(this.m_vertices[i], s, temp.ComputeMass.e1);
            const e2 = b2_math_1.b2Vec2.Subtract(this.m_vertices[i + 1 < this.m_count ? i + 1 : 0], s, temp.ComputeMass.e2);
            const D = b2_math_1.b2Vec2.Cross(e1, e2);
            const triangleArea = 0.5 * D;
            area += triangleArea;
            // Area weighted centroid
            center.AddScaled(triangleArea * k_inv3, b2_math_1.b2Vec2.Add(e1, e2, b2_math_1.b2Vec2.s_t0));
            const ex1 = e1.x;
            const ey1 = e1.y;
            const ex2 = e2.x;
            const ey2 = e2.y;
            const intx2 = ex1 * ex1 + ex2 * ex1 + ex2 * ex2;
            const inty2 = ey1 * ey1 + ey2 * ey1 + ey2 * ey2;
            I += 0.25 * k_inv3 * D * (intx2 + inty2);
        }
        // Total mass
        massData.mass = density * area;
        // Center of mass
        // DEBUG: b2Assert(area > b2_epsilon);
        center.Scale(1 / area);
        b2_math_1.b2Vec2.Add(center, s, massData.center);
        // Inertia tensor relative to the local origin (point s).
        massData.I = density * I;
        // Shift to center of mass then to original body origin.
        massData.I += massData.mass * (b2_math_1.b2Vec2.Dot(massData.center, massData.center) - b2_math_1.b2Vec2.Dot(center, center));
    }
    /**
     * Validate convexity. This is a very time consuming operation.
     * @returns true if valid
     */ Validate() {
        if (this.m_count < 3 || b2_settings_1.b2_maxPolygonVertices < this.m_count) return false;
        return (0, b2_collision_1.b2ValidateHull)(this.m_vertices, this.m_count);
    }
    SetupDistanceProxy(proxy, _index) {
        proxy.m_vertices = this.m_vertices;
        proxy.m_count = this.m_count;
        proxy.m_radius = this.m_radius;
    }
    Draw(draw, color) {
        const vertexCount = this.m_count;
        const vertices = this.m_vertices;
        draw.DrawSolidPolygon(vertices, vertexCount, color);
    }
}
exports.b2PolygonShape = b2PolygonShape;

},{"aec3c72c7be08d56":"a1SE4","31e33f82ae321654":"3MJcc","e44195634470a559":"hZX5U","3233770ee8993643":"eLdO6","c80b33de279579a7":"6cP2p"}],"kNv8x":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2EdgeShape = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("d49ea633181e6409");
const b2_math_1 = require("c9bb211b21e3391f");
const b2_shape_1 = require("a0e299ae64cd6df1");
/**
 * A line segment (edge) shape. These can be connected in chains or loops
 * to other edge shapes. Edges created independently are two-sided and do
 * no provide smooth movement across junctions.
 */ class b2EdgeShape extends b2_shape_1.b2Shape {
    constructor(){
        super(b2_shape_1.b2ShapeType.e_edge, b2_common_1.b2_polygonRadius);
        /** These are the edge vertices */ this.m_vertex1 = new b2_math_1.b2Vec2();
        this.m_vertex2 = new b2_math_1.b2Vec2();
        /** Optional adjacent vertices. These are used for smooth collision. */ this.m_vertex0 = new b2_math_1.b2Vec2();
        this.m_vertex3 = new b2_math_1.b2Vec2();
        /** Uses m_vertex0 and m_vertex3 to create smooth collision. */ this.m_oneSided = false;
    }
    /**
     * Set this as a part of a sequence. Vertex v0 precedes the edge and vertex v3
     * follows. These extra vertices are used to provide smooth movement
     * across junctions. This also makes the collision one-sided. The edge
     * normal points to the right looking from v1 to v2.
     */ SetOneSided(v0, v1, v2, v3) {
        this.m_vertex0.Copy(v0);
        this.m_vertex1.Copy(v1);
        this.m_vertex2.Copy(v2);
        this.m_vertex3.Copy(v3);
        this.m_oneSided = true;
        return this;
    }
    /**
     * Set this as an isolated edge. Collision is two-sided.
     */ SetTwoSided(v1, v2) {
        this.m_vertex1.Copy(v1);
        this.m_vertex2.Copy(v2);
        this.m_oneSided = false;
        return this;
    }
    /**
     * Implement b2Shape.
     */ Clone() {
        return new b2EdgeShape().Copy(this);
    }
    Copy(other) {
        super.Copy(other);
        // DEBUG: b2Assert(other instanceof b2EdgeShape);
        this.m_vertex1.Copy(other.m_vertex1);
        this.m_vertex2.Copy(other.m_vertex2);
        this.m_vertex0.Copy(other.m_vertex0);
        this.m_vertex3.Copy(other.m_vertex3);
        this.m_oneSided = other.m_oneSided;
        return this;
    }
    /**
     * @see b2Shape::GetChildCount
     */ GetChildCount() {
        return 1;
    }
    /**
     * @see b2Shape::TestPoint
     */ TestPoint(_xf, _p) {
        return false;
    }
    /**
     * Implement b2Shape.
     *
     * p = p1 + t * d
     * v = v1 + s * e
     * p1 + t * d = v1 + s * e
     * s * e - t * d = p1 - v1
     */ RayCast(output, input, xf, _childIndex) {
        // Put the ray into the edge's frame of reference.
        const p1 = b2_math_1.b2Transform.TransposeMultiplyVec2(xf, input.p1, b2EdgeShape.RayCast_s_p1);
        const p2 = b2_math_1.b2Transform.TransposeMultiplyVec2(xf, input.p2, b2EdgeShape.RayCast_s_p2);
        const d = b2_math_1.b2Vec2.Subtract(p2, p1, b2EdgeShape.RayCast_s_d);
        const v1 = this.m_vertex1;
        const v2 = this.m_vertex2;
        const e = b2_math_1.b2Vec2.Subtract(v2, v1, b2EdgeShape.RayCast_s_e);
        // Normal points to the right, looking from v1 at v2
        const { normal } = output;
        normal.Set(e.y, -e.x).Normalize();
        // q = p1 + t * d
        // dot(normal, q - v1) = 0
        // dot(normal, p1 - v1) + t * dot(normal, d) = 0
        const numerator = b2_math_1.b2Vec2.Dot(normal, b2_math_1.b2Vec2.Subtract(v1, p1, b2_math_1.b2Vec2.s_t0));
        if (this.m_oneSided && numerator > 0) return false;
        const denominator = b2_math_1.b2Vec2.Dot(normal, d);
        if (denominator === 0) return false;
        const t = numerator / denominator;
        if (t < 0 || input.maxFraction < t) return false;
        const q = b2_math_1.b2Vec2.AddScaled(p1, t, d, b2EdgeShape.RayCast_s_q);
        // q = v1 + s * r
        // s = dot(q - v1, r) / dot(r, r)
        const r = b2_math_1.b2Vec2.Subtract(v2, v1, b2EdgeShape.RayCast_s_r);
        const rr = b2_math_1.b2Vec2.Dot(r, r);
        if (rr === 0) return false;
        const s = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(q, v1, b2_math_1.b2Vec2.s_t0), r) / rr;
        if (s < 0 || s > 1) return false;
        output.fraction = t;
        b2_math_1.b2Rot.MultiplyVec2(xf.q, output.normal, output.normal);
        if (numerator > 0) output.normal.Negate();
        return true;
    }
    /**
     * @see b2Shape::ComputeAABB
     */ ComputeAABB(aabb, xf, _childIndex) {
        const v1 = b2_math_1.b2Transform.MultiplyVec2(xf, this.m_vertex1, b2EdgeShape.ComputeAABB_s_v1);
        const v2 = b2_math_1.b2Transform.MultiplyVec2(xf, this.m_vertex2, b2EdgeShape.ComputeAABB_s_v2);
        b2_math_1.b2Vec2.Min(v1, v2, aabb.lowerBound);
        b2_math_1.b2Vec2.Max(v1, v2, aabb.upperBound);
        const r = this.m_radius;
        aabb.lowerBound.SubtractXY(r, r);
        aabb.upperBound.AddXY(r, r);
    }
    /**
     * @see b2Shape::ComputeMass
     */ ComputeMass(massData, _density) {
        massData.mass = 0;
        b2_math_1.b2Vec2.Mid(this.m_vertex1, this.m_vertex2, massData.center);
        massData.I = 0;
    }
    SetupDistanceProxy(proxy, _index) {
        proxy.m_vertices = proxy.m_buffer;
        proxy.m_vertices[0] = this.m_vertex1;
        proxy.m_vertices[1] = this.m_vertex2;
        proxy.m_count = 2;
        proxy.m_radius = this.m_radius;
    }
    Draw(draw, color) {
        const v1 = this.m_vertex1;
        const v2 = this.m_vertex2;
        draw.DrawSegment(v1, v2, color);
        if (this.m_oneSided === false) {
            draw.DrawPoint(v1, 4, color);
            draw.DrawPoint(v2, 4, color);
        }
    }
}
exports.b2EdgeShape = b2EdgeShape;
b2EdgeShape.RayCast_s_p1 = new b2_math_1.b2Vec2();
b2EdgeShape.RayCast_s_p2 = new b2_math_1.b2Vec2();
b2EdgeShape.RayCast_s_d = new b2_math_1.b2Vec2();
b2EdgeShape.RayCast_s_e = new b2_math_1.b2Vec2();
b2EdgeShape.RayCast_s_q = new b2_math_1.b2Vec2();
b2EdgeShape.RayCast_s_r = new b2_math_1.b2Vec2();
b2EdgeShape.ComputeAABB_s_v1 = new b2_math_1.b2Vec2();
b2EdgeShape.ComputeAABB_s_v2 = new b2_math_1.b2Vec2();

},{"d49ea633181e6409":"a1SE4","c9bb211b21e3391f":"3MJcc","a0e299ae64cd6df1":"6cP2p"}],"kQE36":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2ChainShape = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert, b2_linearSlop } from "../common/b2_common";
const b2_common_1 = require("ab4e3a9f5c702ea4");
const b2_math_1 = require("f8737c95e81a753e");
const b2_shape_1 = require("9bfeba73d39fec04");
const b2_edge_shape_1 = require("beb4c69321d6122f");
/**
 * A chain shape is a free form sequence of line segments.
 * The chain has one-sided collision, with the surface normal pointing to the right of the edge.
 * This provides a counter-clockwise winding like the polygon shape.
 * Connectivity information is used to create smooth collisions.
 *
 * @warning the chain will not collide properly if there are self-intersections.
 */ class b2ChainShape extends b2_shape_1.b2Shape {
    constructor(){
        super(b2_shape_1.b2ShapeType.e_chain, b2_common_1.b2_polygonRadius);
        this.m_vertices = [];
        this.m_prevVertex = new b2_math_1.b2Vec2();
        this.m_nextVertex = new b2_math_1.b2Vec2();
    }
    /**
     * Create a loop. This automatically adjusts connectivity.
     *
     * @param vertices An array of vertices, these are copied
     * @param count The vertex count
     */ CreateLoop(vertices, count = vertices.length) {
        // DEBUG: b2Assert(count >= 3);
        if (count < 3) return this;
        // DEBUG: for (let i =  1; i < count; ++i) {
        // DEBUG:   const v1 = vertices[i - 1];
        // DEBUG:   const v2 = vertices[i];
        // DEBUG:   // If the code crashes here, it means your vertices are too close together.
        // DEBUG:   b2Assert(b2Vec2.DistanceSquared(v1, v2) > b2_linearSlop * b2_linearSlop);
        // DEBUG: }
        this.m_vertices.length = count + 1;
        for(let i = 0; i < count; ++i){
            const { x, y } = vertices[i];
            this.m_vertices[i] = new b2_math_1.b2Vec2(x, y);
        }
        this.m_vertices[count] = this.m_vertices[0].Clone();
        this.m_prevVertex.Copy(this.m_vertices[this.m_vertices.length - 2]);
        this.m_nextVertex.Copy(this.m_vertices[1]);
        return this;
    }
    /**
     * Create a chain with ghost vertices to connect multiple chains together.
     *
     * @param vertices An array of vertices, these are copied
     * @param count The vertex count
     * @param prevVertex Previous vertex from chain that connects to the start
     * @param nextVertex Next vertex from chain that connects to the end
     */ CreateChain(vertices, count, prevVertex, nextVertex) {
        // DEBUG: b2Assert(count >= 2);
        // DEBUG: for (let i =  1; i < count; ++i) {
        // DEBUG:   // If the code crashes here, it means your vertices are too close together.
        // DEBUG:   b2Assert(b2Vec2.DistanceSquared(vertices[i-1], vertices[i]) > b2_linearSlop * b2_linearSlop);
        // DEBUG: }
        this.m_vertices.length = count;
        for(let i = 0; i < count; ++i){
            const { x, y } = vertices[i];
            this.m_vertices[i] = new b2_math_1.b2Vec2(x, y);
        }
        this.m_prevVertex.Copy(prevVertex);
        this.m_nextVertex.Copy(nextVertex);
        return this;
    }
    /**
     * Implement b2Shape. Vertices are cloned using b2Alloc.
     */ Clone() {
        return new b2ChainShape().Copy(this);
    }
    Copy(other) {
        super.Copy(other);
        // DEBUG: b2Assert(other instanceof b2ChainShape);
        return this.CreateChain(other.m_vertices, other.m_vertices.length, other.m_prevVertex, other.m_nextVertex);
    }
    /**
     * @see b2Shape::GetChildCount
     */ GetChildCount() {
        // edge count = vertex count - 1
        return this.m_vertices.length - 1;
    }
    /**
     * Get a child edge.
     */ GetChildEdge(edge, index) {
        // DEBUG: b2Assert(0 <= index && index < this.m_vertices.length - 1);
        edge.m_radius = this.m_radius;
        edge.m_vertex1.Copy(this.m_vertices[index]);
        edge.m_vertex2.Copy(this.m_vertices[index + 1]);
        edge.m_oneSided = true;
        if (index > 0) edge.m_vertex0.Copy(this.m_vertices[index - 1]);
        else edge.m_vertex0.Copy(this.m_prevVertex);
        if (index < this.m_vertices.length - 2) edge.m_vertex3.Copy(this.m_vertices[index + 2]);
        else edge.m_vertex3.Copy(this.m_nextVertex);
    }
    /**
     * This always return false.
     *
     * @see b2Shape::TestPoint
     */ TestPoint(_xf, _p) {
        return false;
    }
    /**
     * Implement b2Shape.
     */ RayCast(output, input, xf, childIndex) {
        // DEBUG: b2Assert(childIndex < this.m_vertices.length);
        const edgeShape = b2ChainShape.RayCast_s_edgeShape;
        const i1 = childIndex;
        let i2 = childIndex + 1;
        if (i2 === this.m_vertices.length) i2 = 0;
        edgeShape.m_vertex1.Copy(this.m_vertices[i1]);
        edgeShape.m_vertex2.Copy(this.m_vertices[i2]);
        return edgeShape.RayCast(output, input, xf, 0);
    }
    /**
     * @see b2Shape::ComputeAABB
     */ ComputeAABB(aabb, xf, childIndex) {
        // DEBUG: b2Assert(childIndex < this.m_vertices.length);
        const i1 = childIndex;
        let i2 = childIndex + 1;
        if (i2 === this.m_vertices.length) i2 = 0;
        const v1 = b2_math_1.b2Transform.MultiplyVec2(xf, this.m_vertices[i1], b2ChainShape.ComputeAABB_s_v1);
        const v2 = b2_math_1.b2Transform.MultiplyVec2(xf, this.m_vertices[i2], b2ChainShape.ComputeAABB_s_v2);
        const lower = b2_math_1.b2Vec2.Min(v1, v2, b2ChainShape.ComputeAABB_s_lower);
        const upper = b2_math_1.b2Vec2.Max(v1, v2, b2ChainShape.ComputeAABB_s_upper);
        aabb.lowerBound.x = lower.x - this.m_radius;
        aabb.lowerBound.y = lower.y - this.m_radius;
        aabb.upperBound.x = upper.x + this.m_radius;
        aabb.upperBound.y = upper.y + this.m_radius;
    }
    /**
     * Chains have zero mass.
     *
     * @see b2Shape::ComputeMass
     */ ComputeMass(massData, _density) {
        massData.mass = 0;
        massData.center.SetZero();
        massData.I = 0;
    }
    SetupDistanceProxy(proxy, index) {
        // DEBUG: b2Assert(0 <= index && index < this.m_vertices.length);
        proxy.m_vertices = proxy.m_buffer;
        proxy.m_vertices[0] = this.m_vertices[index];
        const secondIndex = index + 1 < this.m_vertices.length ? index + 1 : 0;
        proxy.m_vertices[1] = this.m_vertices[secondIndex];
        proxy.m_count = 2;
        proxy.m_radius = this.m_radius;
    }
    Draw(draw, color) {
        const vertices = this.m_vertices;
        let v1 = vertices[0];
        for(let i = 1; i < vertices.length; ++i){
            const v2 = vertices[i];
            draw.DrawSegment(v1, v2, color);
            v1 = v2;
        }
    }
}
exports.b2ChainShape = b2ChainShape;
b2ChainShape.RayCast_s_edgeShape = new b2_edge_shape_1.b2EdgeShape();
b2ChainShape.ComputeAABB_s_v1 = new b2_math_1.b2Vec2();
b2ChainShape.ComputeAABB_s_v2 = new b2_math_1.b2Vec2();
b2ChainShape.ComputeAABB_s_lower = new b2_math_1.b2Vec2();
b2ChainShape.ComputeAABB_s_upper = new b2_math_1.b2Vec2();

},{"ab4e3a9f5c702ea4":"a1SE4","f8737c95e81a753e":"3MJcc","9bfeba73d39fec04":"6cP2p","beb4c69321d6122f":"kNv8x"}],"ePx3X":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2World = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("f61cb50a19be307d");
const b2_math_1 = require("856064acbd1abc7a");
const b2_timer_1 = require("17f59ea8d26948de");
const b2_collision_1 = require("d0fcae25c0961693");
const b2_time_of_impact_1 = require("124912b760be0241");
const b2_joint_1 = require("d11fd0c9d72fbd6d");
const b2_area_joint_1 = require("6c35d46b2249ceac");
const b2_distance_joint_1 = require("553eefdc5692cf78");
const b2_friction_joint_1 = require("4603eef04c0d312d");
const b2_gear_joint_1 = require("2f6d42fa5716399a");
const b2_motor_joint_1 = require("59f6913709f17e97");
const b2_mouse_joint_1 = require("bcfd60893cf554cf");
const b2_prismatic_joint_1 = require("6e5e0fa954895394");
const b2_pulley_joint_1 = require("9c7743714f75ce7f");
const b2_revolute_joint_1 = require("1b22e52462167e93");
const b2_weld_joint_1 = require("3f1cafb81931b2d2");
const b2_wheel_joint_1 = require("f16dcb94efa08f6c");
const b2_body_1 = require("887a3fec554e27a7");
const b2_contact_manager_1 = require("acaca1a5f89fba6e");
const b2_island_1 = require("e0e0bb84dffa9e7f");
const b2_time_step_1 = require("9ab268ae60465516");
/**
 * The world class manages all physics entities, dynamic simulation,
 * and asynchronous queries.
 */ class b2World {
    constructor(gravity){
        /** @internal */ this.m_contactManager = new b2_contact_manager_1.b2ContactManager();
        this.m_bodyList = null;
        this.m_jointList = null;
        this.m_bodyCount = 0;
        this.m_jointCount = 0;
        this.m_gravity = new b2_math_1.b2Vec2();
        this.m_allowSleep = true;
        this.m_destructionListener = null;
        /**
         * This is used to compute the time step ratio to
         * support a variable time step.
         */ this.m_inv_dt0 = 0;
        /** @internal */ this.m_newContacts = false;
        this.m_locked = false;
        this.m_clearForces = true;
        // These are for debugging the solver.
        this.m_warmStarting = true;
        this.m_continuousPhysics = true;
        this.m_subStepping = false;
        this.m_stepComplete = true;
        this.m_profile = new b2_time_step_1.b2Profile();
        this.m_island = new b2_island_1.b2Island(2 * b2_common_1.b2_maxTOIContacts, b2_common_1.b2_maxTOIContacts, 0, this.m_contactManager.m_contactListener);
        this.s_stack = [];
        this.m_gravity.Copy(gravity);
    }
    /**
     * Construct a world object.
     *
     * @param gravity The world gravity vector.
     */ static Create(gravity) {
        return new b2World(gravity);
    }
    /**
     * Register a destruction listener. The listener is owned by you and must
     * remain in scope.
     */ SetDestructionListener(listener) {
        this.m_destructionListener = listener;
    }
    /**
     * Get the current destruction listener
     */ GetDestructionListener() {
        return this.m_destructionListener;
    }
    /**
     * Register a contact filter to provide specific control over collision.
     * Otherwise the default filter is used (b2_defaultFilter). The listener is
     * owned by you and must remain in scope.
     */ SetContactFilter(filter) {
        this.m_contactManager.m_contactFilter = filter;
    }
    /**
     * Register a contact event listener. The listener is owned by you and must
     * remain in scope.
     */ SetContactListener(listener) {
        this.m_contactManager.m_contactListener = listener;
        this.m_island.m_listener = listener;
    }
    /**
     * Create a rigid body given a definition. No reference to the definition
     * is retained.
     *
     * @warning This function is locked during callbacks.
     */ CreateBody(def = {}) {
        (0, b2_common_1.b2Assert)(!this.IsLocked());
        const b = new b2_body_1.b2Body(def, this);
        // Add to world doubly linked list.
        b.m_prev = null;
        b.m_next = this.m_bodyList;
        if (this.m_bodyList) this.m_bodyList.m_prev = b;
        this.m_bodyList = b;
        ++this.m_bodyCount;
        return b;
    }
    /**
     * Destroy a rigid body given a definition. No reference to the definition
     * is retained. This function is locked during callbacks.
     *
     * @warning This automatically deletes all associated shapes and joints.
     * @warning This function is locked during callbacks.
     */ DestroyBody(b) {
        var _a, _b;
        // DEBUG: b2Assert(this.m_bodyCount > 0);
        (0, b2_common_1.b2Assert)(!this.IsLocked());
        // Delete the attached joints.
        let je = b.m_jointList;
        while(je){
            const je0 = je;
            je = je.next;
            (_a = this.m_destructionListener) === null || _a === void 0 || _a.SayGoodbyeJoint(je0.joint);
            this.DestroyJoint(je0.joint);
            b.m_jointList = je;
        }
        b.m_jointList = null;
        // Delete the attached contacts.
        let ce = b.m_contactList;
        while(ce){
            const ce0 = ce;
            ce = ce.next;
            this.m_contactManager.Destroy(ce0.contact);
        }
        b.m_contactList = null;
        // Delete the attached fixtures. This destroys broad-phase proxies.
        const broadPhase = this.m_contactManager.m_broadPhase;
        let f = b.m_fixtureList;
        while(f){
            const f0 = f;
            f = f.m_next;
            (_b = this.m_destructionListener) === null || _b === void 0 || _b.SayGoodbyeFixture(f0);
            f0.DestroyProxies(broadPhase);
            b.m_fixtureList = f;
            b.m_fixtureCount -= 1;
        }
        b.m_fixtureList = null;
        b.m_fixtureCount = 0;
        // Remove world body list.
        if (b.m_prev) b.m_prev.m_next = b.m_next;
        if (b.m_next) b.m_next.m_prev = b.m_prev;
        if (b === this.m_bodyList) this.m_bodyList = b.m_next;
        --this.m_bodyCount;
    }
    static Joint_Create(def) {
        switch(def.type){
            case b2_joint_1.b2JointType.e_distanceJoint:
                return new b2_distance_joint_1.b2DistanceJoint(def);
            case b2_joint_1.b2JointType.e_mouseJoint:
                return new b2_mouse_joint_1.b2MouseJoint(def);
            case b2_joint_1.b2JointType.e_prismaticJoint:
                return new b2_prismatic_joint_1.b2PrismaticJoint(def);
            case b2_joint_1.b2JointType.e_revoluteJoint:
                return new b2_revolute_joint_1.b2RevoluteJoint(def);
            case b2_joint_1.b2JointType.e_pulleyJoint:
                return new b2_pulley_joint_1.b2PulleyJoint(def);
            case b2_joint_1.b2JointType.e_gearJoint:
                return new b2_gear_joint_1.b2GearJoint(def);
            case b2_joint_1.b2JointType.e_wheelJoint:
                return new b2_wheel_joint_1.b2WheelJoint(def);
            case b2_joint_1.b2JointType.e_weldJoint:
                return new b2_weld_joint_1.b2WeldJoint(def);
            case b2_joint_1.b2JointType.e_frictionJoint:
                return new b2_friction_joint_1.b2FrictionJoint(def);
            case b2_joint_1.b2JointType.e_motorJoint:
                return new b2_motor_joint_1.b2MotorJoint(def);
            case b2_joint_1.b2JointType.e_areaJoint:
                return new b2_area_joint_1.b2AreaJoint(def);
        }
        throw new Error();
    }
    CreateJoint(def) {
        (0, b2_common_1.b2Assert)(!this.IsLocked());
        const j = b2World.Joint_Create(def);
        // Connect to the world list.
        j.m_prev = null;
        j.m_next = this.m_jointList;
        if (this.m_jointList) this.m_jointList.m_prev = j;
        this.m_jointList = j;
        ++this.m_jointCount;
        // Connect to the bodies' doubly linked lists.
        j.m_edgeA.prev = null;
        j.m_edgeA.next = j.m_bodyA.m_jointList;
        if (j.m_bodyA.m_jointList) j.m_bodyA.m_jointList.prev = j.m_edgeA;
        j.m_bodyA.m_jointList = j.m_edgeA;
        j.m_edgeB.prev = null;
        j.m_edgeB.next = j.m_bodyB.m_jointList;
        if (j.m_bodyB.m_jointList) j.m_bodyB.m_jointList.prev = j.m_edgeB;
        j.m_bodyB.m_jointList = j.m_edgeB;
        const bodyA = j.m_bodyA;
        const bodyB = j.m_bodyB;
        // If the joint prevents collisions, then flag any contacts for filtering.
        if (!def.collideConnected) {
            let edge = bodyB.GetContactList();
            while(edge){
                if (edge.other === bodyA) // Flag the contact for filtering at the next time step (where either
                // body is awake).
                edge.contact.FlagForFiltering();
                edge = edge.next;
            }
        }
        // Note: creating a joint doesn't wake the bodies.
        return j;
    }
    /**
     * Destroy a joint. This may cause the connected bodies to begin colliding.
     *
     * @warning This function is locked during callbacks.
     */ DestroyJoint(j) {
        (0, b2_common_1.b2Assert)(!this.IsLocked());
        // Remove from the doubly linked list.
        if (j.m_prev) j.m_prev.m_next = j.m_next;
        if (j.m_next) j.m_next.m_prev = j.m_prev;
        if (j === this.m_jointList) this.m_jointList = j.m_next;
        // Disconnect from island graph.
        const bodyA = j.m_bodyA;
        const bodyB = j.m_bodyB;
        const collideConnected = j.m_collideConnected;
        // Wake up connected bodies.
        bodyA.SetAwake(true);
        bodyB.SetAwake(true);
        // Remove from body 1.
        if (j.m_edgeA.prev) j.m_edgeA.prev.next = j.m_edgeA.next;
        if (j.m_edgeA.next) j.m_edgeA.next.prev = j.m_edgeA.prev;
        if (j.m_edgeA === bodyA.m_jointList) bodyA.m_jointList = j.m_edgeA.next;
        j.m_edgeA.prev = null;
        j.m_edgeA.next = null;
        // Remove from body 2
        if (j.m_edgeB.prev) j.m_edgeB.prev.next = j.m_edgeB.next;
        if (j.m_edgeB.next) j.m_edgeB.next.prev = j.m_edgeB.prev;
        if (j.m_edgeB === bodyB.m_jointList) bodyB.m_jointList = j.m_edgeB.next;
        j.m_edgeB.prev = null;
        j.m_edgeB.next = null;
        // DEBUG: b2Assert(this.m_jointCount > 0);
        --this.m_jointCount;
        // If the joint prevents collisions, then flag any contacts for filtering.
        if (!collideConnected) {
            let edge = bodyB.GetContactList();
            while(edge){
                if (edge.other === bodyA) // Flag the contact for filtering at the next time step (where either
                // body is awake).
                edge.contact.FlagForFiltering();
                edge = edge.next;
            }
        }
    }
    /**
     * Take a time step. This performs collision detection, integration,
     * and constraint solution.
     *
     * @param dt The amount of time to simulate, this should not vary.
     * @param iterations Config for the solvers.
     */ Step(dt, iterations) {
        const stepTimer = b2World.Step_s_stepTimer.Reset();
        // If new fixtures were added, we need to find the new contacts.
        if (this.m_newContacts) {
            this.m_contactManager.FindNewContacts();
            this.m_newContacts = false;
        }
        this.m_locked = true;
        const step = b2World.Step_s_step;
        step.dt = dt;
        step.config = {
            ...iterations
        };
        if (dt > 0) step.inv_dt = 1 / dt;
        else step.inv_dt = 0;
        step.dtRatio = this.m_inv_dt0 * dt;
        step.warmStarting = this.m_warmStarting;
        // Update contacts. This is where some contacts are destroyed.
        {
            const timer = b2World.Step_s_timer.Reset();
            this.m_contactManager.Collide();
            this.m_profile.collide = timer.GetMilliseconds();
        }
        // Integrate velocities, solve velocity constraints, and integrate positions.
        if (this.m_stepComplete && step.dt > 0) {
            const timer = b2World.Step_s_timer.Reset();
            this.Solve(step);
            this.m_profile.solve = timer.GetMilliseconds();
        }
        // Handle TOI events.
        if (this.m_continuousPhysics && step.dt > 0) {
            const timer = b2World.Step_s_timer.Reset();
            this.SolveTOI(step);
            this.m_profile.solveTOI = timer.GetMilliseconds();
        }
        if (step.dt > 0) this.m_inv_dt0 = step.inv_dt;
        if (this.m_clearForces) this.ClearForces();
        this.m_locked = false;
        this.m_profile.step = stepTimer.GetMilliseconds();
    }
    /**
     * Manually clear the force buffer on all bodies. By default, forces are cleared automatically
     * after each call to Step. The default behavior is modified by calling SetAutoClearForces.
     * The purpose of this function is to support sub-stepping. Sub-stepping is often used to maintain
     * a fixed sized time step under a variable frame-rate.
     * When you perform sub-stepping you will disable auto clearing of forces and instead call
     * ClearForces after all sub-steps are complete in one pass of your game loop.
     *
     * @see SetAutoClearForces
     */ ClearForces() {
        for(let body = this.m_bodyList; body; body = body.GetNext()){
            body.m_force.SetZero();
            body.m_torque = 0;
        }
    }
    /**
     * Query the world for all fixtures that potentially overlap the
     * provided AABB.
     *
     * @param aabb The query box.
     * @param callback A user implemented callback class or function.
     */ QueryAABB(aabb, callback) {
        this.m_contactManager.m_broadPhase.Query(aabb, (proxy)=>{
            const fixture_proxy = (0, b2_common_1.b2Verify)(proxy.userData);
            // DEBUG: b2Assert(fixture_proxy instanceof b2FixtureProxy);
            return callback(fixture_proxy.fixture);
        });
    }
    QueryAllAABB(aabb, out = []) {
        this.QueryAABB(aabb, (fixture)=>{
            out.push(fixture);
            return true;
        });
        return out;
    }
    /**
     * Query the world for all fixtures that potentially overlap the
     * provided point.
     *
     * @param point The query point.
     * @param callback A user implemented callback class or function.
     */ QueryPointAABB(point, callback) {
        this.m_contactManager.m_broadPhase.QueryPoint(point, (proxy)=>{
            const fixture_proxy = (0, b2_common_1.b2Verify)(proxy.userData);
            // DEBUG: b2Assert(fixture_proxy instanceof b2FixtureProxy);
            return callback(fixture_proxy.fixture);
        });
    }
    QueryAllPointAABB(point, out = []) {
        this.QueryPointAABB(point, (fixture)=>{
            out.push(fixture);
            return true;
        });
        return out;
    }
    QueryFixtureShape(shape, index, transform, callback) {
        const aabb = b2World.QueryFixtureShape_s_aabb;
        shape.ComputeAABB(aabb, transform, index);
        this.m_contactManager.m_broadPhase.Query(aabb, (proxy)=>{
            const fixture_proxy = (0, b2_common_1.b2Verify)(proxy.userData);
            // DEBUG: b2Assert(fixture_proxy instanceof b2FixtureProxy);
            const { fixture } = fixture_proxy;
            const overlap = (0, b2_collision_1.b2TestOverlap)(shape, index, fixture.GetShape(), fixture_proxy.childIndex, transform, fixture.GetBody().GetTransform());
            return !overlap || callback(fixture);
        });
    }
    QueryAllFixtureShape(shape, index, transform, out = []) {
        this.QueryFixtureShape(shape, index, transform, (fixture)=>{
            out.push(fixture);
            return true;
        });
        return out;
    }
    QueryFixturePoint(point, callback) {
        this.m_contactManager.m_broadPhase.QueryPoint(point, (proxy)=>{
            const fixture_proxy = (0, b2_common_1.b2Verify)(proxy.userData);
            // DEBUG: b2Assert(fixture_proxy instanceof b2FixtureProxy);
            const { fixture } = fixture_proxy;
            const overlap = fixture.TestPoint(point);
            return !overlap || callback(fixture);
        });
    }
    QueryAllFixturePoint(point, out = []) {
        this.QueryFixturePoint(point, (fixture)=>{
            out.push(fixture);
            return true;
        });
        return out;
    }
    /**
     * Ray-cast the world for all fixtures in the path of the ray. Your callback
     * controls whether you get the closest point, any point, or n-points.
     * The ray-cast ignores shapes that contain the starting point.
     *
     * @param point1 The ray starting point
     * @param point2 The ray ending point
     * @param callback A user implemented callback class or function.
     */ RayCast(point1, point2, callback) {
        const input = b2World.RayCast_s_input;
        input.maxFraction = 1;
        input.p1.Copy(point1);
        input.p2.Copy(point2);
        this.m_contactManager.m_broadPhase.RayCast(input, (input2, proxy)=>{
            const fixture_proxy = (0, b2_common_1.b2Verify)(proxy.userData);
            // DEBUG: b2Assert(fixture_proxy instanceof b2FixtureProxy);
            const { fixture } = fixture_proxy;
            const index = fixture_proxy.childIndex;
            const output = b2World.RayCast_s_output;
            const hit = fixture.RayCast(output, input2, index);
            if (hit) {
                const { fraction } = output;
                const point = b2World.RayCast_s_point;
                point.Set((1 - fraction) * point1.x + fraction * point2.x, (1 - fraction) * point1.y + fraction * point2.y);
                return callback(fixture, point, output.normal, fraction);
            }
            return input2.maxFraction;
        });
    }
    RayCastOne(point1, point2) {
        let result = null;
        let min_fraction = 1;
        this.RayCast(point1, point2, (fixture, _point, _normal, fraction)=>{
            if (fraction < min_fraction) {
                min_fraction = fraction;
                result = fixture;
            }
            return min_fraction;
        });
        return result;
    }
    RayCastAll(point1, point2, out = []) {
        this.RayCast(point1, point2, (fixture)=>{
            out.push(fixture);
            return 1;
        });
        return out;
    }
    /**
     * Get the world body list. With the returned body, use b2Body::GetNext to get
     * the next body in the world list. A NULL body indicates the end of the list.
     *
     * @returns The head of the world body list.
     */ GetBodyList() {
        return this.m_bodyList;
    }
    /**
     * Get the world joint list. With the returned joint, use b2Joint::GetNext to get
     * the next joint in the world list. A NULL joint indicates the end of the list.
     *
     * @returns The head of the world joint list.
     */ GetJointList() {
        return this.m_jointList;
    }
    /**
     * Get the world contact list. With the returned contact, use b2Contact::GetNext to get
     * the next contact in the world list. A NULL contact indicates the end of the list.
     *
     * @returns The head of the world contact list.
     * @warning contacts are created and destroyed in the middle of a time step.
     * Use b2ContactListener to avoid missing contacts.
     */ GetContactList() {
        return this.m_contactManager.m_contactList;
    }
    /**
     * Enable/disable sleep.
     */ SetAllowSleeping(flag) {
        if (flag === this.m_allowSleep) return;
        this.m_allowSleep = flag;
        if (!this.m_allowSleep) for(let b = this.m_bodyList; b; b = b.m_next)b.SetAwake(true);
    }
    GetAllowSleeping() {
        return this.m_allowSleep;
    }
    /**
     * Enable/disable warm starting. For testing.
     */ SetWarmStarting(flag) {
        this.m_warmStarting = flag;
    }
    GetWarmStarting() {
        return this.m_warmStarting;
    }
    /**
     * Enable/disable continuous physics. For testing.
     */ SetContinuousPhysics(flag) {
        this.m_continuousPhysics = flag;
    }
    GetContinuousPhysics() {
        return this.m_continuousPhysics;
    }
    /**
     * Enable/disable single stepped continuous physics. For testing.
     */ SetSubStepping(flag) {
        this.m_subStepping = flag;
    }
    GetSubStepping() {
        return this.m_subStepping;
    }
    /**
     * Get the number of broad-phase proxies.
     */ GetProxyCount() {
        return this.m_contactManager.m_broadPhase.GetProxyCount();
    }
    /**
     * Get the number of bodies.
     */ GetBodyCount() {
        return this.m_bodyCount;
    }
    /**
     * Get the number of joints.
     */ GetJointCount() {
        return this.m_jointCount;
    }
    /**
     * Get the number of contacts (each may have 0 or more contact points).
     */ GetContactCount() {
        return this.m_contactManager.m_contactCount;
    }
    /**
     * Get the height of the dynamic tree.
     */ GetTreeHeight() {
        return this.m_contactManager.m_broadPhase.GetTreeHeight();
    }
    /**
     * Get the balance of the dynamic tree.
     */ GetTreeBalance() {
        return this.m_contactManager.m_broadPhase.GetTreeBalance();
    }
    /**
     * Get the quality metric of the dynamic tree. The smaller the better.
     * The minimum is 1.
     */ GetTreeQuality() {
        return this.m_contactManager.m_broadPhase.GetTreeQuality();
    }
    /**
     * Change the global gravity vector.
     */ SetGravity(gravity) {
        this.m_gravity.Copy(gravity);
    }
    /**
     * Get the global gravity vector.
     */ GetGravity() {
        return this.m_gravity;
    }
    /**
     * Is the world locked (in the middle of a time step).
     */ IsLocked() {
        return this.m_locked;
    }
    /**
     * Set flag to control automatic clearing of forces after each time step.
     */ SetAutoClearForces(flag) {
        this.m_clearForces = flag;
    }
    /**
     * Get the flag that controls automatic clearing of forces after each time step.
     */ GetAutoClearForces() {
        return this.m_clearForces;
    }
    /**
     * Shift the world origin. Useful for large worlds.
     * The body shift formula is: position -= newOrigin
     *
     * @param newOrigin The new origin with respect to the old origin
     */ ShiftOrigin(newOrigin) {
        (0, b2_common_1.b2Assert)(!this.IsLocked());
        for(let b = this.m_bodyList; b; b = b.m_next){
            b.m_xf.p.Subtract(newOrigin);
            b.m_sweep.c0.Subtract(newOrigin);
            b.m_sweep.c.Subtract(newOrigin);
        }
        for(let j = this.m_jointList; j; j = j.m_next)j.ShiftOrigin(newOrigin);
        this.m_contactManager.m_broadPhase.ShiftOrigin(newOrigin);
    }
    /**
     * Get the contact manager for testing.
     */ GetContactManager() {
        return this.m_contactManager;
    }
    /**
     * Get the current profile.
     */ GetProfile() {
        return this.m_profile;
    }
    /** Find islands, integrate and solve constraints, solve position constraints */ Solve(step) {
        this.m_profile.solveInit = 0;
        this.m_profile.solveVelocity = 0;
        this.m_profile.solvePosition = 0;
        // Size the island for the worst case.
        const island = this.m_island;
        island.Resize(this.m_bodyCount);
        island.Clear();
        // Clear all the island flags.
        for(let b = this.m_bodyList; b; b = b.m_next)b.m_islandFlag = false;
        for(let c = this.m_contactManager.m_contactList; c; c = c.m_next)c.m_islandFlag = false;
        for(let j = this.m_jointList; j; j = j.m_next)j.m_islandFlag = false;
        // Build and simulate all awake islands.
        // DEBUG: const stackSize = this.m_bodyCount;
        const stack = this.s_stack;
        for(let seed = this.m_bodyList; seed; seed = seed.m_next){
            if (seed.m_islandFlag) continue;
            if (!seed.IsAwake() || !seed.IsEnabled()) continue;
            // The seed can be dynamic or kinematic.
            if (seed.GetType() === b2_body_1.b2BodyType.b2_staticBody) continue;
            // Reset island and stack.
            island.Clear();
            let stackCount = 0;
            stack[stackCount++] = seed;
            seed.m_islandFlag = true;
            // Perform a depth first search (DFS) on the constraint graph.
            while(stackCount > 0){
                // Grab the next body off the stack and add it to the island.
                const b = stack[--stackCount];
                (0, b2_common_1.b2Assert)(b !== null);
                // DEBUG: b2Assert(b.IsEnabled());
                island.AddBody(b);
                // To keep islands as small as possible, we don't
                // propagate islands across static bodies.
                if (b.GetType() === b2_body_1.b2BodyType.b2_staticBody) continue;
                // Make sure the body is awake (without resetting sleep timer).
                b.m_awakeFlag = true;
                // Search all contacts connected to this body.
                for(let ce = b.m_contactList; ce; ce = ce.next){
                    const { contact } = ce;
                    // Has this contact already been added to an island?
                    if (contact.m_islandFlag) continue;
                    // Is this contact solid and touching?
                    if (!contact.IsEnabled() || !contact.IsTouching()) continue;
                    // Skip sensors.
                    const sensorA = contact.m_fixtureA.m_isSensor;
                    const sensorB = contact.m_fixtureB.m_isSensor;
                    if (sensorA || sensorB) continue;
                    island.AddContact(contact);
                    contact.m_islandFlag = true;
                    const { other } = ce;
                    // Was the other body already added to this island?
                    if (other.m_islandFlag) continue;
                    // DEBUG: b2Assert(stackCount < stackSize);
                    stack[stackCount++] = other;
                    other.m_islandFlag = true;
                }
                // Search all joints connect to this body.
                for(let je = b.m_jointList; je; je = je.next){
                    if (je.joint.m_islandFlag) continue;
                    const { other } = je;
                    // Don't simulate joints connected to disabled bodies.
                    if (!other.IsEnabled()) continue;
                    island.AddJoint(je.joint);
                    je.joint.m_islandFlag = true;
                    if (other.m_islandFlag) continue;
                    // DEBUG: b2Assert(stackCount < stackSize);
                    stack[stackCount++] = other;
                    other.m_islandFlag = true;
                }
            }
            const profile = new b2_time_step_1.b2Profile();
            island.Solve(profile, step, this.m_gravity, this.m_allowSleep);
            this.m_profile.solveInit += profile.solveInit;
            this.m_profile.solveVelocity += profile.solveVelocity;
            this.m_profile.solvePosition += profile.solvePosition;
            // Post solve cleanup.
            for(let i = 0; i < island.m_bodyCount; ++i){
                // Allow static bodies to participate in other islands.
                const b = island.m_bodies[i];
                if (b.GetType() === b2_body_1.b2BodyType.b2_staticBody) b.m_islandFlag = false;
            }
        }
        for(let i = 0; i < stack.length; ++i){
            if (!stack[i]) break;
            stack[i] = null;
        }
        const timer = new b2_timer_1.b2Timer();
        // Synchronize fixtures, check for out of range bodies.
        for(let b = this.m_bodyList; b; b = b.m_next){
            // If a body was not in an island then it did not move.
            if (!b.m_islandFlag) continue;
            if (b.GetType() === b2_body_1.b2BodyType.b2_staticBody) continue;
            // Update fixtures (for broad-phase).
            b.SynchronizeFixtures();
        }
        // Look for new contacts.
        this.m_contactManager.FindNewContacts();
        this.m_profile.broadphase = timer.GetMilliseconds();
    }
    /**
     * Find TOI contacts and solve them.
     * @internal
     */ SolveTOI(step) {
        const island = this.m_island;
        island.Clear();
        if (this.m_stepComplete) {
            for(let b = this.m_bodyList; b; b = b.m_next){
                b.m_islandFlag = false;
                b.m_sweep.alpha0 = 0;
            }
            for(let c = this.m_contactManager.m_contactList; c; c = c.m_next){
                // Invalidate TOI
                c.m_toiFlag = false;
                c.m_islandFlag = false;
                c.m_toiCount = 0;
                c.m_toi = 1;
            }
        }
        // Find TOI events and solve them.
        for(;;){
            // Find the first TOI.
            let minContact = null;
            let minAlpha = 1;
            for(let c = this.m_contactManager.m_contactList; c; c = c.m_next){
                // Is this contact disabled?
                if (!c.IsEnabled()) continue;
                // Prevent excessive sub-stepping.
                if (c.m_toiCount > b2_common_1.b2_maxSubSteps) continue;
                let alpha = 1;
                if (c.m_toiFlag) // This contact has a valid cached TOI.
                alpha = c.m_toi;
                else {
                    const fA = c.GetFixtureA();
                    const fB = c.GetFixtureB();
                    // Is there a sensor?
                    if (fA.IsSensor() || fB.IsSensor()) continue;
                    const bA = fA.GetBody();
                    const bB = fB.GetBody();
                    const typeA = bA.m_type;
                    const typeB = bB.m_type;
                    // DEBUG: b2Assert(typeA === b2BodyType.b2_dynamicBody || typeB === b2BodyType.b2_dynamicBody);
                    const activeA = bA.IsAwake() && typeA !== b2_body_1.b2BodyType.b2_staticBody;
                    const activeB = bB.IsAwake() && typeB !== b2_body_1.b2BodyType.b2_staticBody;
                    // Is at least one body active (awake and dynamic or kinematic)?
                    if (!activeA && !activeB) continue;
                    const collideA = bA.IsBullet() || typeA !== b2_body_1.b2BodyType.b2_dynamicBody;
                    const collideB = bB.IsBullet() || typeB !== b2_body_1.b2BodyType.b2_dynamicBody;
                    // Are these two non-bullet dynamic bodies?
                    if (!collideA && !collideB) continue;
                    // Compute the TOI for this contact.
                    // Put the sweeps onto the same time interval.
                    let { alpha0 } = bA.m_sweep;
                    if (bA.m_sweep.alpha0 < bB.m_sweep.alpha0) {
                        alpha0 = bB.m_sweep.alpha0;
                        bA.m_sweep.Advance(alpha0);
                    } else if (bB.m_sweep.alpha0 < bA.m_sweep.alpha0) {
                        alpha0 = bA.m_sweep.alpha0;
                        bB.m_sweep.Advance(alpha0);
                    }
                    // DEBUG: b2Assert(alpha0 < 1);
                    const indexA = c.GetChildIndexA();
                    const indexB = c.GetChildIndexB();
                    // Compute the time of impact in interval [0, minTOI]
                    const input = b2World.SolveTOI_s_toi_input;
                    input.proxyA.SetShape(fA.GetShape(), indexA);
                    input.proxyB.SetShape(fB.GetShape(), indexB);
                    input.sweepA.Copy(bA.m_sweep);
                    input.sweepB.Copy(bB.m_sweep);
                    input.tMax = 1;
                    const output = b2World.SolveTOI_s_toi_output;
                    (0, b2_time_of_impact_1.b2TimeOfImpact)(output, input);
                    // Beta is the fraction of the remaining portion of the .
                    const beta = output.t;
                    if (output.state === b2_time_of_impact_1.b2TOIOutputState.e_touching) alpha = Math.min(alpha0 + (1 - alpha0) * beta, 1);
                    else alpha = 1;
                    c.m_toi = alpha;
                    c.m_toiFlag = true;
                }
                if (alpha < minAlpha) {
                    // This is the minimum TOI found so far.
                    minContact = c;
                    minAlpha = alpha;
                }
            }
            if (minContact === null || 1 - 10 * b2_common_1.b2_epsilon < minAlpha) {
                // No more TOI events. Done!
                this.m_stepComplete = true;
                break;
            }
            // Advance the bodies to the TOI.
            const fA = minContact.GetFixtureA();
            const fB = minContact.GetFixtureB();
            const bA = fA.GetBody();
            const bB = fB.GetBody();
            const backup1 = b2World.SolveTOI_s_backup1.Copy(bA.m_sweep);
            const backup2 = b2World.SolveTOI_s_backup2.Copy(bB.m_sweep);
            bA.Advance(minAlpha);
            bB.Advance(minAlpha);
            // The TOI contact likely has some new contact points.
            minContact.Update(this.m_contactManager.m_contactListener);
            minContact.m_toiFlag = false;
            ++minContact.m_toiCount;
            // Is the contact solid?
            if (!minContact.IsEnabled() || !minContact.IsTouching()) {
                // Restore the sweeps.
                minContact.SetEnabled(false);
                bA.m_sweep.Copy(backup1);
                bB.m_sweep.Copy(backup2);
                bA.SynchronizeTransform();
                bB.SynchronizeTransform();
                continue;
            }
            bA.SetAwake(true);
            bB.SetAwake(true);
            // Build the island
            island.Clear();
            island.AddBody(bA);
            island.AddBody(bB);
            island.AddContact(minContact);
            bA.m_islandFlag = true;
            bB.m_islandFlag = true;
            minContact.m_islandFlag = true;
            // Get contacts on bodyA and bodyB.
            for(let i = 0; i < 2; ++i){
                const body = i === 0 ? bA : bB;
                if (body.m_type === b2_body_1.b2BodyType.b2_dynamicBody) for(let ce = body.m_contactList; ce; ce = ce.next){
                    if (island.m_bodyCount === island.m_bodyCapacity) break;
                    if (island.m_contactCount === b2_common_1.b2_maxTOIContacts) break;
                    const { contact } = ce;
                    // Has this contact already been added to the island?
                    if (contact.m_islandFlag) continue;
                    // Only add static, kinematic, or bullet bodies.
                    const { other } = ce;
                    if (other.m_type === b2_body_1.b2BodyType.b2_dynamicBody && !body.IsBullet() && !other.IsBullet()) continue;
                    // Skip sensors.
                    const sensorA = contact.m_fixtureA.m_isSensor;
                    const sensorB = contact.m_fixtureB.m_isSensor;
                    if (sensorA || sensorB) continue;
                    // Tentatively advance the body to the TOI.
                    const backup = b2World.SolveTOI_s_backup.Copy(other.m_sweep);
                    if (!other.m_islandFlag) other.Advance(minAlpha);
                    // Update the contact points
                    contact.Update(this.m_contactManager.m_contactListener);
                    // Was the contact disabled by the user?
                    if (!contact.IsEnabled()) {
                        other.m_sweep.Copy(backup);
                        other.SynchronizeTransform();
                        continue;
                    }
                    // Are there contact points?
                    if (!contact.IsTouching()) {
                        other.m_sweep.Copy(backup);
                        other.SynchronizeTransform();
                        continue;
                    }
                    // Add the contact to the island
                    contact.m_islandFlag = true;
                    island.AddContact(contact);
                    // Has the other body already been added to the island?
                    if (other.m_islandFlag) continue;
                    // Add the other body to the island.
                    other.m_islandFlag = true;
                    if (other.m_type !== b2_body_1.b2BodyType.b2_staticBody) other.SetAwake(true);
                    island.AddBody(other);
                }
            }
            const subStep = b2World.SolveTOI_s_subStep;
            subStep.dt = (1 - minAlpha) * step.dt;
            subStep.inv_dt = 1 / subStep.dt;
            subStep.dtRatio = 1;
            subStep.config = {
                ...step.config,
                positionIterations: 20
            };
            subStep.warmStarting = false;
            island.SolveTOI(subStep, bA.m_islandIndex, bB.m_islandIndex);
            // Reset island flags and synchronize broad-phase proxies.
            for(let i = 0; i < island.m_bodyCount; ++i){
                const body = island.m_bodies[i];
                body.m_islandFlag = false;
                if (body.m_type !== b2_body_1.b2BodyType.b2_dynamicBody) continue;
                body.SynchronizeFixtures();
                // Invalidate all contact TOIs on this displaced body.
                for(let ce = body.m_contactList; ce; ce = ce.next){
                    ce.contact.m_toiFlag = false;
                    ce.contact.m_islandFlag = false;
                }
            }
            // Commit fixture proxy movements to the broad-phase so that new contacts are created.
            // Also, some contacts can be destroyed.
            this.m_contactManager.FindNewContacts();
            if (this.m_subStepping) {
                this.m_stepComplete = false;
                break;
            }
        }
    }
}
exports.b2World = b2World;
b2World.Step_s_step = b2_time_step_1.b2TimeStep.Create();
b2World.Step_s_stepTimer = new b2_timer_1.b2Timer();
b2World.Step_s_timer = new b2_timer_1.b2Timer();
b2World.QueryFixtureShape_s_aabb = new b2_collision_1.b2AABB();
b2World.RayCast_s_input = new b2_collision_1.b2RayCastInput();
b2World.RayCast_s_output = new b2_collision_1.b2RayCastOutput();
b2World.RayCast_s_point = new b2_math_1.b2Vec2();
b2World.SolveTOI_s_subStep = b2_time_step_1.b2TimeStep.Create();
b2World.SolveTOI_s_backup = new b2_math_1.b2Sweep();
b2World.SolveTOI_s_backup1 = new b2_math_1.b2Sweep();
b2World.SolveTOI_s_backup2 = new b2_math_1.b2Sweep();
b2World.SolveTOI_s_toi_input = new b2_time_of_impact_1.b2TOIInput();
b2World.SolveTOI_s_toi_output = new b2_time_of_impact_1.b2TOIOutput();

},{"f61cb50a19be307d":"a1SE4","856064acbd1abc7a":"3MJcc","17f59ea8d26948de":"cIbnI","d0fcae25c0961693":"eLdO6","124912b760be0241":"hgu0H","d11fd0c9d72fbd6d":"kS3Lm","6c35d46b2249ceac":"cLWx2","553eefdc5692cf78":"9lCtr","4603eef04c0d312d":"h5DdA","2f6d42fa5716399a":"dNugq","59f6913709f17e97":"5yHxp","bcfd60893cf554cf":"kwVNE","6e5e0fa954895394":"4rI1j","9c7743714f75ce7f":"8PGWT","1b22e52462167e93":"drEGG","3f1cafb81931b2d2":"asMSc","f16dcb94efa08f6c":"27dFq","887a3fec554e27a7":"2fDAF","acaca1a5f89fba6e":"7MfSP","e0e0bb84dffa9e7f":"hjCwq","9ab268ae60465516":"eevv5"}],"kS3Lm":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2Joint = exports.b2AngularStiffness = exports.b2LinearStiffness = exports.b2JointDef = exports.b2JointEdge = exports.b2JointType = void 0;
const b2_draw_1 = require("f066c4379ef5f1f3");
const b2_math_1 = require("6c01b1af44d5b77d");
const temp = {
    pA: new b2_math_1.b2Vec2(),
    pB: new b2_math_1.b2Vec2()
};
var b2JointType;
(function(b2JointType) {
    b2JointType[b2JointType["e_unknownJoint"] = 0] = "e_unknownJoint";
    b2JointType[b2JointType["e_revoluteJoint"] = 1] = "e_revoluteJoint";
    b2JointType[b2JointType["e_prismaticJoint"] = 2] = "e_prismaticJoint";
    b2JointType[b2JointType["e_distanceJoint"] = 3] = "e_distanceJoint";
    b2JointType[b2JointType["e_pulleyJoint"] = 4] = "e_pulleyJoint";
    b2JointType[b2JointType["e_mouseJoint"] = 5] = "e_mouseJoint";
    b2JointType[b2JointType["e_gearJoint"] = 6] = "e_gearJoint";
    b2JointType[b2JointType["e_wheelJoint"] = 7] = "e_wheelJoint";
    b2JointType[b2JointType["e_weldJoint"] = 8] = "e_weldJoint";
    b2JointType[b2JointType["e_frictionJoint"] = 9] = "e_frictionJoint";
    b2JointType[b2JointType["e_motorJoint"] = 10] = "e_motorJoint";
    b2JointType[b2JointType["e_areaJoint"] = 11] = "e_areaJoint";
})(b2JointType || (exports.b2JointType = b2JointType = {}));
/**
 * A joint edge is used to connect bodies and joints together
 * in a joint graph where each body is a node and each joint
 * is an edge. A joint edge belongs to a doubly linked list
 * maintained in each attached body. Each joint has two joint
 * nodes, one for each attached body.
 */ class b2JointEdge {
    constructor(joint, other){
        /** The previous joint edge in the body's joint list */ this.prev = null;
        /** The next joint edge in the body's joint list */ this.next = null;
        this.joint = joint;
        this.other = other;
    }
}
exports.b2JointEdge = b2JointEdge;
/**
 * Joint definitions are used to construct joints.
 */ class b2JointDef {
    constructor(type){
        /** Use this to attach application specific data to your joints. */ this.userData = {};
        /** Set this flag to true if the attached bodies should collide. */ this.collideConnected = false;
        this.type = type;
    }
}
exports.b2JointDef = b2JointDef;
/**
 * Utility to compute linear stiffness values from frequency and damping ratio
 */ function b2LinearStiffness(def, frequencyHertz, dampingRatio, bodyA, bodyB) {
    const massA = bodyA.GetMass();
    const massB = bodyB.GetMass();
    let mass;
    if (massA > 0 && massB > 0) mass = massA * massB / (massA + massB);
    else if (massA > 0) mass = massA;
    else mass = massB;
    const omega = 2 * Math.PI * frequencyHertz;
    def.stiffness = mass * omega * omega;
    def.damping = 2 * mass * dampingRatio * omega;
}
exports.b2LinearStiffness = b2LinearStiffness;
/**
 * Utility to compute rotational stiffness values frequency and damping ratio
 */ function b2AngularStiffness(def, frequencyHertz, dampingRatio, bodyA, bodyB) {
    const IA = bodyA.GetInertia();
    const IB = bodyB.GetInertia();
    let I;
    if (IA > 0 && IB > 0) I = IA * IB / (IA + IB);
    else if (IA > 0) I = IA;
    else I = IB;
    const omega = 2 * Math.PI * frequencyHertz;
    def.stiffness = I * omega * omega;
    def.damping = 2 * I * dampingRatio * omega;
}
exports.b2AngularStiffness = b2AngularStiffness;
/**
 * The base joint class. Joints are used to constraint two bodies together in
 * various fashions. Some joints also feature limits and motors.
 */ class b2Joint {
    constructor(def){
        // DEBUG: b2Assert(def.bodyA !== def.bodyB);
        var _a;
        this.m_type = b2JointType.e_unknownJoint;
        /** @internal protected */ this.m_prev = null;
        /** @internal protected */ this.m_next = null;
        /** @internal protected */ this.m_islandFlag = false;
        /** @internal protected */ this.m_collideConnected = false;
        this.m_userData = {};
        this.m_type = def.type;
        this.m_edgeA = new b2JointEdge(this, def.bodyB);
        this.m_edgeB = new b2JointEdge(this, def.bodyA);
        this.m_bodyA = def.bodyA;
        this.m_bodyB = def.bodyB;
        this.m_collideConnected = (_a = def.collideConnected) !== null && _a !== void 0 ? _a : false;
        this.SetUserData(def.userData);
    }
    /**
     * Get the type of the concrete joint.
     */ GetType() {
        return this.m_type;
    }
    /**
     * Get the first body attached to this joint.
     */ GetBodyA() {
        return this.m_bodyA;
    }
    /**
     * Get the second body attached to this joint.
     */ GetBodyB() {
        return this.m_bodyB;
    }
    /**
     * Get the next joint the world joint list.
     */ GetNext() {
        return this.m_next;
    }
    /**
     * Get the user data reference.
     */ GetUserData() {
        return this.m_userData;
    }
    /**
     * Set the user data. Use this to store your application specific data.
     * This is a merge operation. Only specified keys will be overridden.
     */ SetUserData(data) {
        Object.assign(this.m_userData, data);
    }
    /**
     * Short-cut function to determine if either body is enabled.
     */ IsEnabled() {
        return this.m_bodyA.IsEnabled() && this.m_bodyB.IsEnabled();
    }
    /**
     * Get collide connected.
     * Note: modifying the collide connect flag won't work correctly because
     * the flag is only checked when fixture AABBs begin to overlap.
     */ GetCollideConnected() {
        return this.m_collideConnected;
    }
    /**
     * Shift the origin for any points stored in world coordinates.
     */ ShiftOrigin(_newOrigin) {}
    /** Debug draw this joint */ Draw(draw) {
        const x1 = this.m_bodyA.GetTransform().p;
        const x2 = this.m_bodyB.GetTransform().p;
        const p1 = this.GetAnchorA(temp.pA);
        const p2 = this.GetAnchorB(temp.pB);
        draw.DrawSegment(x1, p1, b2_draw_1.debugColors.joint6);
        draw.DrawSegment(p1, p2, b2_draw_1.debugColors.joint6);
        draw.DrawSegment(x2, p2, b2_draw_1.debugColors.joint6);
    }
}
exports.b2Joint = b2Joint;

},{"f066c4379ef5f1f3":"cc6XX","6c01b1af44d5b77d":"3MJcc"}],"cLWx2":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2AreaJoint = exports.b2AreaJointDef = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("35fe6a7bd8078a94");
const b2_math_1 = require("b7ab5cd36de08026");
const b2_joint_1 = require("6ef08970319c6db0");
const b2_distance_joint_1 = require("b2b2e9cb0a0e03e0");
class b2AreaJointDef extends b2_joint_1.b2JointDef {
    constructor(){
        super(b2_joint_1.b2JointType.e_areaJoint);
        this.bodies = [];
        this.stiffness = 0;
        this.damping = 0;
    }
    AddBody(body) {
        this.bodies.push(body);
        if (this.bodies.length === 1) this.bodyA = body;
        else if (this.bodies.length === 2) this.bodyB = body;
    }
}
exports.b2AreaJointDef = b2AreaJointDef;
class b2AreaJoint extends b2_joint_1.b2Joint {
    constructor(def){
        var _a, _b;
        super(def);
        this.m_stiffness = 0;
        this.m_damping = 0;
        // Solver shared
        this.m_impulse = 0;
        this.m_targetArea = 0;
        this.m_joints = [];
        this.m_delta = new b2_math_1.b2Vec2();
        // DEBUG: b2Assert(def.bodies.length >= 3, "You cannot create an area joint with less than three bodies.");
        this.m_bodies = def.bodies;
        this.m_stiffness = (_a = def.stiffness) !== null && _a !== void 0 ? _a : 0;
        this.m_damping = (_b = def.damping) !== null && _b !== void 0 ? _b : 0;
        this.m_targetLengths = (0, b2_common_1.b2MakeNumberArray)(def.bodies.length);
        this.m_normals = (0, b2_common_1.b2MakeArray)(def.bodies.length, b2_math_1.b2Vec2);
        this.m_deltas = (0, b2_common_1.b2MakeArray)(def.bodies.length, b2_math_1.b2Vec2);
        const djd = new b2_distance_joint_1.b2DistanceJointDef();
        djd.stiffness = this.m_stiffness;
        djd.damping = this.m_damping;
        this.m_targetArea = 0;
        for(let i = 0; i < this.m_bodies.length; ++i){
            const body = this.m_bodies[i];
            const next = this.m_bodies[(i + 1) % this.m_bodies.length];
            const body_c = body.GetWorldCenter();
            const next_c = next.GetWorldCenter();
            this.m_targetLengths[i] = b2_math_1.b2Vec2.Distance(body_c, next_c);
            this.m_targetArea += b2_math_1.b2Vec2.Cross(body_c, next_c);
            djd.Initialize(body, next, body_c, next_c);
            this.m_joints[i] = body.GetWorld().CreateJoint(djd);
        }
        this.m_targetArea *= 0.5;
    }
    GetAnchorA(out) {
        return out;
    }
    GetAnchorB(out) {
        return out;
    }
    GetReactionForce(inv_dt, out) {
        return out;
    }
    GetReactionTorque(_inv_dt) {
        return 0;
    }
    SetStiffness(stiffness) {
        this.m_stiffness = stiffness;
        for (const joint of this.m_joints)joint.SetStiffness(stiffness);
    }
    GetStiffness() {
        return this.m_stiffness;
    }
    SetDamping(damping) {
        this.m_damping = damping;
        for (const joint of this.m_joints)joint.SetDamping(damping);
    }
    GetDamping() {
        return this.m_damping;
    }
    InitVelocityConstraints(data) {
        for(let i = 0; i < this.m_bodies.length; ++i){
            const prev = this.m_bodies[(i + this.m_bodies.length - 1) % this.m_bodies.length];
            const next = this.m_bodies[(i + 1) % this.m_bodies.length];
            const prev_c = data.positions[prev.m_islandIndex].c;
            const next_c = data.positions[next.m_islandIndex].c;
            const delta = this.m_deltas[i];
            b2_math_1.b2Vec2.Subtract(next_c, prev_c, delta);
        }
        if (data.step.warmStarting) {
            this.m_impulse *= data.step.dtRatio;
            for(let i = 0; i < this.m_bodies.length; ++i){
                const body = this.m_bodies[i];
                const body_v = data.velocities[body.m_islandIndex].v;
                const delta = this.m_deltas[i];
                body_v.x += body.m_invMass * delta.y * 0.5 * this.m_impulse;
                body_v.y += body.m_invMass * -delta.x * 0.5 * this.m_impulse;
            }
        } else this.m_impulse = 0;
    }
    SolveVelocityConstraints(data) {
        let dotMassSum = 0;
        let crossMassSum = 0;
        for(let i = 0; i < this.m_bodies.length; ++i){
            const body = this.m_bodies[i];
            const body_v = data.velocities[body.m_islandIndex].v;
            const delta = this.m_deltas[i];
            dotMassSum += delta.LengthSquared() / body.GetMass();
            crossMassSum += b2_math_1.b2Vec2.Cross(body_v, delta);
        }
        const lambda = -2 * crossMassSum / dotMassSum;
        // lambda = b2Clamp(lambda, -b2_maxLinearCorrection, b2_maxLinearCorrection);
        this.m_impulse += lambda;
        for(let i = 0; i < this.m_bodies.length; ++i){
            const body = this.m_bodies[i];
            const body_v = data.velocities[body.m_islandIndex].v;
            const delta = this.m_deltas[i];
            body_v.x += body.m_invMass * delta.y * 0.5 * lambda;
            body_v.y += body.m_invMass * -delta.x * 0.5 * lambda;
        }
    }
    SolvePositionConstraints(data) {
        let perimeter = 0;
        let area = 0;
        for(let i = 0; i < this.m_bodies.length; ++i){
            const body = this.m_bodies[i];
            const next = this.m_bodies[(i + 1) % this.m_bodies.length];
            const body_c = data.positions[body.m_islandIndex].c;
            const next_c = data.positions[next.m_islandIndex].c;
            const delta = b2_math_1.b2Vec2.Subtract(next_c, body_c, this.m_delta);
            let dist = delta.Length();
            if (dist < b2_common_1.b2_epsilon) dist = 1;
            this.m_normals[i].x = delta.y / dist;
            this.m_normals[i].y = -delta.x / dist;
            perimeter += dist;
            area += b2_math_1.b2Vec2.Cross(body_c, next_c);
        }
        area *= 0.5;
        const deltaArea = this.m_targetArea - area;
        const toExtrude = 0.5 * deltaArea / perimeter;
        let done = true;
        for(let i = 0; i < this.m_bodies.length; ++i){
            const body = this.m_bodies[i];
            const body_c = data.positions[body.m_islandIndex].c;
            const next_i = (i + 1) % this.m_bodies.length;
            const delta = b2_math_1.b2Vec2.Add(this.m_normals[i], this.m_normals[next_i], this.m_delta);
            delta.Scale(toExtrude);
            const norm_sq = delta.LengthSquared();
            if (norm_sq > b2_common_1.b2_maxLinearCorrection ** 2) delta.Scale(b2_common_1.b2_maxLinearCorrection / Math.sqrt(norm_sq));
            if (norm_sq > b2_common_1.b2_linearSlop ** 2) done = false;
            body_c.Add(delta);
        }
        return done;
    }
}
exports.b2AreaJoint = b2AreaJoint;

},{"35fe6a7bd8078a94":"a1SE4","b7ab5cd36de08026":"3MJcc","6ef08970319c6db0":"kS3Lm","b2b2e9cb0a0e03e0":"9lCtr"}],"9lCtr":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2DistanceJoint = exports.b2DistanceJointDef = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_common_1 = require("cb8ced6170cf0b8");
const b2_math_1 = require("e4cdb39d63a6a3a3");
const b2_joint_1 = require("cb15331d8fb5bb38");
const b2_draw_1 = require("22c1026b62f02cb8");
// 1-D constrained system
// m (v2 - v1) = lambda
// v2 + (beta/h) * x1 + gamma * lambda = 0, gamma has units of inverse mass.
// x2 = x1 + h * v2
// 1-D mass-damper-spring system
// m (v2 - v1) + h * d * v2 + h * k *
// C = norm(p2 - p1) - L
// u = (p2 - p1) / norm(p2 - p1)
// Cdot = dot(u, v2 + cross(w2, r2) - v1 - cross(w1, r1))
// J = [-u -cross(r1, u) u cross(r2, u)]
// K = J * invM * JT
//   = invMass1 + invI1 * cross(r1, u)^2 + invMass2 + invI2 * cross(r2, u)^2
const temp = {
    worldPointA: new b2_math_1.b2Vec2(),
    worldPointB: new b2_math_1.b2Vec2(),
    vpA: new b2_math_1.b2Vec2(),
    vpB: new b2_math_1.b2Vec2(),
    vpBA: new b2_math_1.b2Vec2(),
    P: new b2_math_1.b2Vec2(),
    qA: new b2_math_1.b2Rot(),
    qB: new b2_math_1.b2Rot(),
    lalcA: new b2_math_1.b2Vec2(),
    lalcB: new b2_math_1.b2Vec2(),
    Draw: {
        pA: new b2_math_1.b2Vec2(),
        pB: new b2_math_1.b2Vec2(),
        axis: new b2_math_1.b2Vec2(),
        pRest: new b2_math_1.b2Vec2(),
        p1: new b2_math_1.b2Vec2(),
        p2: new b2_math_1.b2Vec2()
    }
};
/**
 * Distance joint definition. This requires defining an anchor point on both
 * bodies and the non-zero distance of the distance joint. The definition uses
 * local anchor points so that the initial configuration can violate the
 * constraint slightly. This helps when saving and loading a game.
 */ class b2DistanceJointDef extends b2_joint_1.b2JointDef {
    constructor(){
        super(b2_joint_1.b2JointType.e_distanceJoint);
        /** The local anchor point relative to bodyA's origin. */ this.localAnchorA = new b2_math_1.b2Vec2();
        /** The local anchor point relative to bodyB's origin. */ this.localAnchorB = new b2_math_1.b2Vec2();
        /** The rest length of this joint. Clamped to a stable minimum value. */ this.length = 1;
        /** Minimum length. Clamped to a stable minimum value. */ this.minLength = 0;
        /** Maximum length. Must be greater than or equal to the minimum length. */ this.maxLength = b2_common_1.b2_maxFloat;
        /** The linear stiffness in N/m. */ this.stiffness = 0;
        /** The linear damping in N*s/m. */ this.damping = 0;
    }
    /**
     * Initialize the bodies, anchors, and rest length using world space anchors.
     * The minimum and maximum lengths are set to the rest length.
     */ Initialize(b1, b2, anchor1, anchor2) {
        this.bodyA = b1;
        this.bodyB = b2;
        this.bodyA.GetLocalPoint(anchor1, this.localAnchorA);
        this.bodyB.GetLocalPoint(anchor2, this.localAnchorB);
        this.length = Math.max(b2_math_1.b2Vec2.Distance(anchor1, anchor2), b2_common_1.b2_linearSlop);
        this.minLength = this.length;
        this.maxLength = this.length;
    }
}
exports.b2DistanceJointDef = b2DistanceJointDef;
/**
 * A distance joint constrains two points on two bodies to remain at a fixed
 * distance from each other. You can view this as a massless, rigid rod.
 */ class b2DistanceJoint extends b2_joint_1.b2Joint {
    /** @internal protected */ constructor(def){
        var _a, _b;
        super(def);
        this.m_bias = 0;
        // Solver shared
        this.m_localAnchorA = new b2_math_1.b2Vec2();
        this.m_localAnchorB = new b2_math_1.b2Vec2();
        this.m_gamma = 0;
        this.m_impulse = 0;
        this.m_lowerImpulse = 0;
        this.m_upperImpulse = 0;
        // Solver temp
        this.m_indexA = 0;
        this.m_indexB = 0;
        this.m_u = new b2_math_1.b2Vec2();
        this.m_rA = new b2_math_1.b2Vec2();
        this.m_rB = new b2_math_1.b2Vec2();
        this.m_localCenterA = new b2_math_1.b2Vec2();
        this.m_localCenterB = new b2_math_1.b2Vec2();
        this.m_currentLength = 0;
        this.m_invMassA = 0;
        this.m_invMassB = 0;
        this.m_invIA = 0;
        this.m_invIB = 0;
        this.m_softMass = 0;
        this.m_mass = 0;
        this.m_localAnchorA.Copy(def.localAnchorA);
        this.m_localAnchorB.Copy(def.localAnchorB);
        this.m_length = Math.max(def.length, b2_common_1.b2_linearSlop);
        this.m_minLength = Math.max(def.minLength, b2_common_1.b2_linearSlop);
        this.m_maxLength = Math.max(def.maxLength, this.m_minLength);
        this.m_stiffness = (_a = def.stiffness) !== null && _a !== void 0 ? _a : 0;
        this.m_damping = (_b = def.damping) !== null && _b !== void 0 ? _b : 0;
    }
    GetAnchorA(out) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
    }
    GetAnchorB(out) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
    }
    /**
     * Get the reaction force given the inverse time step.
     * Unit is N.
     */ GetReactionForce(inv_dt, out) {
        const f = inv_dt * (this.m_impulse + this.m_lowerImpulse - this.m_upperImpulse);
        out.x = f * this.m_u.x;
        out.y = f * this.m_u.y;
        return out;
    }
    /**
     * Get the reaction torque given the inverse time step.
     * Unit is N*m. This is always zero for a distance joint.
     */ GetReactionTorque(_inv_dt) {
        return 0;
    }
    /** The local anchor point relative to bodyA's origin. */ GetLocalAnchorA() {
        return this.m_localAnchorA;
    }
    /** The local anchor point relative to bodyB's origin. */ GetLocalAnchorB() {
        return this.m_localAnchorB;
    }
    /**
     * Set the rest length
     * @returns clamped rest length
     */ SetLength(length) {
        this.m_impulse = 0;
        this.m_length = Math.max(b2_common_1.b2_linearSlop, length);
        return this.m_length;
    }
    /** Get the rest length */ GetLength() {
        return this.m_length;
    }
    /**
     * Set the minimum length
     * @returns the clamped minimum length
     */ SetMinLength(minLength) {
        this.m_lowerImpulse = 0;
        this.m_minLength = (0, b2_math_1.b2Clamp)(minLength, b2_common_1.b2_linearSlop, this.m_maxLength);
        return this.m_minLength;
    }
    /** Get the minimum length */ GetMinLength() {
        return this.m_minLength;
    }
    /**
     * Set the maximum length
     * @returns the clamped maximum length
     */ SetMaxLength(maxLength) {
        this.m_upperImpulse = 0;
        this.m_maxLength = Math.max(maxLength, this.m_minLength);
        return this.m_maxLength;
    }
    /** Get the maximum length */ GetMaxLength() {
        return this.m_maxLength;
    }
    /** Get the current length */ GetCurrentLength() {
        const pA = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, temp.worldPointA);
        const pB = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, temp.worldPointB);
        return b2_math_1.b2Vec2.Distance(pB, pA);
    }
    /** Set the linear stiffness in N/m */ SetStiffness(stiffness) {
        this.m_stiffness = stiffness;
    }
    /** Get the linear stiffness in N/m */ GetStiffness() {
        return this.m_stiffness;
    }
    /** Set linear damping in N*s/m */ SetDamping(damping) {
        this.m_damping = damping;
    }
    /** Get linear damping in N*s/m */ GetDamping() {
        return this.m_damping;
    }
    /** @internal protected */ InitVelocityConstraints(data) {
        this.m_indexA = this.m_bodyA.m_islandIndex;
        this.m_indexB = this.m_bodyB.m_islandIndex;
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
        this.m_invMassA = this.m_bodyA.m_invMass;
        this.m_invMassB = this.m_bodyB.m_invMass;
        this.m_invIA = this.m_bodyA.m_invI;
        this.m_invIB = this.m_bodyB.m_invI;
        const cA = data.positions[this.m_indexA].c;
        const aA = data.positions[this.m_indexA].a;
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const cB = data.positions[this.m_indexB].c;
        const aB = data.positions[this.m_indexB].a;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const { qA, qB, lalcA, lalcB } = temp;
        qA.Set(aA);
        qB.Set(aB);
        b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), this.m_rA);
        b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), this.m_rB);
        this.m_u.x = cB.x + this.m_rB.x - cA.x - this.m_rA.x;
        this.m_u.y = cB.y + this.m_rB.y - cA.y - this.m_rA.y;
        // Handle singularity.
        this.m_currentLength = this.m_u.Length();
        if (this.m_currentLength > b2_common_1.b2_linearSlop) this.m_u.Scale(1 / this.m_currentLength);
        else {
            this.m_u.SetZero();
            this.m_mass = 0;
            this.m_impulse = 0;
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
        }
        const crAu = b2_math_1.b2Vec2.Cross(this.m_rA, this.m_u);
        const crBu = b2_math_1.b2Vec2.Cross(this.m_rB, this.m_u);
        let invMass = this.m_invMassA + this.m_invIA * crAu * crAu + this.m_invMassB + this.m_invIB * crBu * crBu;
        this.m_mass = invMass !== 0 ? 1 / invMass : 0;
        if (this.m_stiffness > 0 && this.m_minLength < this.m_maxLength) {
            // soft
            const C = this.m_currentLength - this.m_length;
            const d = this.m_damping;
            const k = this.m_stiffness;
            // magic formulas
            const h = data.step.dt;
            // gamma = 1 / (h * (d + h * k))
            // the extra factor of h in the denominator is since the lambda is an impulse, not a force
            this.m_gamma = h * (d + h * k);
            this.m_gamma = this.m_gamma !== 0 ? 1 / this.m_gamma : 0;
            this.m_bias = C * h * k * this.m_gamma;
            invMass += this.m_gamma;
            this.m_softMass = invMass !== 0 ? 1 / invMass : 0;
        } else {
            // rigid
            this.m_gamma = 0;
            this.m_bias = 0;
            this.m_softMass = this.m_mass;
        }
        if (data.step.warmStarting) {
            // Scale the impulse to support a variable time step.
            this.m_impulse *= data.step.dtRatio;
            this.m_lowerImpulse *= data.step.dtRatio;
            this.m_upperImpulse *= data.step.dtRatio;
            const { P } = temp;
            b2_math_1.b2Vec2.Scale(this.m_impulse + this.m_lowerImpulse - this.m_upperImpulse, this.m_u, P);
            vA.SubtractScaled(this.m_invMassA, P);
            wA -= this.m_invIA * b2_math_1.b2Vec2.Cross(this.m_rA, P);
            vB.AddScaled(this.m_invMassB, P);
            wB += this.m_invIB * b2_math_1.b2Vec2.Cross(this.m_rB, P);
        } else this.m_impulse = 0;
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolveVelocityConstraints(data) {
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        if (this.m_minLength < this.m_maxLength) {
            if (this.m_stiffness > 0) {
                // Cdot = dot(u, v + cross(w, r))
                const vpA = b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, this.m_rA, temp.vpA);
                const vpB = b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, this.m_rB, temp.vpB);
                const Cdot = b2_math_1.b2Vec2.Dot(this.m_u, b2_math_1.b2Vec2.Subtract(vpB, vpA, temp.vpBA));
                const impulse = -this.m_softMass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse);
                this.m_impulse += impulse;
                const P = b2_math_1.b2Vec2.Scale(impulse, this.m_u, temp.P);
                vA.SubtractScaled(this.m_invMassA, P);
                wA -= this.m_invIA * b2_math_1.b2Vec2.Cross(this.m_rA, P);
                vB.AddScaled(this.m_invMassB, P);
                wB += this.m_invIB * b2_math_1.b2Vec2.Cross(this.m_rB, P);
            }
            // lower
            {
                const C = this.m_currentLength - this.m_minLength;
                const bias = Math.max(0, C) * data.step.inv_dt;
                const vpA = b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, this.m_rA, temp.vpA);
                const vpB = b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, this.m_rB, temp.vpB);
                const Cdot = b2_math_1.b2Vec2.Dot(this.m_u, b2_math_1.b2Vec2.Subtract(vpB, vpA, temp.vpBA));
                let impulse = -this.m_mass * (Cdot + bias);
                const oldImpulse = this.m_lowerImpulse;
                this.m_lowerImpulse = Math.max(0, this.m_lowerImpulse + impulse);
                impulse = this.m_lowerImpulse - oldImpulse;
                const P = b2_math_1.b2Vec2.Scale(impulse, this.m_u, temp.P);
                vA.SubtractScaled(this.m_invMassA, P);
                wA -= this.m_invIA * b2_math_1.b2Vec2.Cross(this.m_rA, P);
                vB.AddScaled(this.m_invMassB, P);
                wB += this.m_invIB * b2_math_1.b2Vec2.Cross(this.m_rB, P);
            }
            // upper
            {
                const C = this.m_maxLength - this.m_currentLength;
                const bias = Math.max(0, C) * data.step.inv_dt;
                const vpA = b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, this.m_rA, temp.vpA);
                const vpB = b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, this.m_rB, temp.vpB);
                const Cdot = b2_math_1.b2Vec2.Dot(this.m_u, b2_math_1.b2Vec2.Subtract(vpA, vpB, temp.vpBA));
                let impulse = -this.m_mass * (Cdot + bias);
                const oldImpulse = this.m_upperImpulse;
                this.m_upperImpulse = Math.max(0, this.m_upperImpulse + impulse);
                impulse = this.m_upperImpulse - oldImpulse;
                const P = b2_math_1.b2Vec2.Scale(-impulse, this.m_u, temp.P);
                vA.SubtractScaled(this.m_invMassA, P);
                wA -= this.m_invIA * b2_math_1.b2Vec2.Cross(this.m_rA, P);
                vB.AddScaled(this.m_invMassB, P);
                wB += this.m_invIB * b2_math_1.b2Vec2.Cross(this.m_rB, P);
            }
        } else {
            // Equal limits
            // Cdot = dot(u, v + cross(w, r))
            const vpA = b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, this.m_rA, temp.vpA);
            const vpB = b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, this.m_rB, temp.vpB);
            const Cdot = b2_math_1.b2Vec2.Dot(this.m_u, b2_math_1.b2Vec2.Subtract(vpB, vpA, temp.vpBA));
            const impulse = -this.m_mass * Cdot;
            this.m_impulse += impulse;
            const P = b2_math_1.b2Vec2.Scale(impulse, this.m_u, temp.P);
            vA.SubtractScaled(this.m_invMassA, P);
            wA -= this.m_invIA * b2_math_1.b2Vec2.Cross(this.m_rA, P);
            vB.AddScaled(this.m_invMassB, P);
            wB += this.m_invIB * b2_math_1.b2Vec2.Cross(this.m_rB, P);
        }
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolvePositionConstraints(data) {
        const cA = data.positions[this.m_indexA].c;
        let aA = data.positions[this.m_indexA].a;
        const cB = data.positions[this.m_indexB].c;
        let aB = data.positions[this.m_indexB].a;
        const { qA, qB, lalcA, lalcB, P } = temp;
        qA.Set(aA);
        qB.Set(aB);
        const rA = b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), this.m_rA);
        const rB = b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), this.m_rB);
        this.m_u.x = cB.x + rB.x - cA.x - rA.x;
        this.m_u.y = cB.y + rB.y - cA.y - rA.y;
        const length = this.m_u.Normalize();
        let C;
        if (this.m_minLength === this.m_maxLength) C = length - this.m_minLength;
        else if (length < this.m_minLength) C = length - this.m_minLength;
        else if (this.m_maxLength < length) C = length - this.m_maxLength;
        else return true;
        const impulse = -this.m_mass * C;
        b2_math_1.b2Vec2.Scale(impulse, this.m_u, P);
        cA.SubtractScaled(this.m_invMassA, P);
        aA -= this.m_invIA * b2_math_1.b2Vec2.Cross(rA, P);
        cB.AddScaled(this.m_invMassB, P);
        aB += this.m_invIB * b2_math_1.b2Vec2.Cross(rB, P);
        data.positions[this.m_indexA].a = aA;
        data.positions[this.m_indexB].a = aB;
        return Math.abs(C) < b2_common_1.b2_linearSlop;
    }
    Draw(draw) {
        const { pA, pB, axis, pRest } = temp.Draw;
        const xfA = this.m_bodyA.GetTransform();
        const xfB = this.m_bodyB.GetTransform();
        b2_math_1.b2Transform.MultiplyVec2(xfA, this.m_localAnchorA, pA);
        b2_math_1.b2Transform.MultiplyVec2(xfB, this.m_localAnchorB, pB);
        b2_math_1.b2Vec2.Subtract(pB, pA, axis);
        axis.Normalize();
        draw.DrawSegment(pA, pB, b2_draw_1.debugColors.joint5);
        b2_math_1.b2Vec2.AddScaled(pA, this.m_length, axis, pRest);
        draw.DrawPoint(pRest, 8, b2_draw_1.debugColors.joint1);
        if (this.m_minLength !== this.m_maxLength) {
            if (this.m_minLength > b2_common_1.b2_linearSlop) {
                const pMin = b2_math_1.b2Vec2.AddScaled(pA, this.m_minLength, axis, temp.Draw.p1);
                draw.DrawPoint(pMin, 4, b2_draw_1.debugColors.joint2);
            }
            if (this.m_maxLength < b2_common_1.b2_maxFloat) {
                const pMax = b2_math_1.b2Vec2.AddScaled(pA, this.m_maxLength, axis, temp.Draw.p1);
                draw.DrawPoint(pMax, 4, b2_draw_1.debugColors.joint3);
            }
        }
    }
}
exports.b2DistanceJoint = b2DistanceJoint;

},{"cb8ced6170cf0b8":"a1SE4","e4cdb39d63a6a3a3":"3MJcc","cb15331d8fb5bb38":"kS3Lm","22c1026b62f02cb8":"cc6XX"}],"h5DdA":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2FrictionJoint = exports.b2FrictionJointDef = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_math_1 = require("4540dc55d154a4d4");
const b2_joint_1 = require("3444421332920e0");
// Point-to-point constraint
// Cdot = v2 - v1
//      = v2 + cross(w2, r2) - v1 - cross(w1, r1)
// J = [-I -r1_skew I r2_skew ]
// Identity used:
// w k % (rx i + ry j) = w * (-ry i + rx j)
// Angle constraint
// Cdot = w2 - w1
// J = [0 0 -1 0 0 1]
// K = invI1 + invI2
const temp = {
    qA: new b2_math_1.b2Rot(),
    qB: new b2_math_1.b2Rot(),
    lalcA: new b2_math_1.b2Vec2(),
    lalcB: new b2_math_1.b2Vec2(),
    Cdot: new b2_math_1.b2Vec2(),
    impulse: new b2_math_1.b2Vec2(),
    oldImpulse: new b2_math_1.b2Vec2()
};
/**
 * Friction joint definition.
 */ class b2FrictionJointDef extends b2_joint_1.b2JointDef {
    constructor(){
        super(b2_joint_1.b2JointType.e_frictionJoint);
        /** The local anchor point relative to bodyA's origin. */ this.localAnchorA = new b2_math_1.b2Vec2();
        /** The local anchor point relative to bodyB's origin. */ this.localAnchorB = new b2_math_1.b2Vec2();
        /** The maximum friction force in N. */ this.maxForce = 0;
        /** The maximum friction torque in N-m. */ this.maxTorque = 0;
    }
    /**
     * Initialize the bodies, anchors, axis, and reference angle using the world
     * anchor and world axis.
     */ Initialize(bA, bB, anchor) {
        this.bodyA = bA;
        this.bodyB = bB;
        this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
        this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
    }
}
exports.b2FrictionJointDef = b2FrictionJointDef;
/**
 * Friction joint. This is used for top-down friction.
 * It provides 2D translational friction and angular friction.
 */ class b2FrictionJoint extends b2_joint_1.b2Joint {
    /** @internal protected */ constructor(def){
        var _a, _b;
        super(def);
        this.m_localAnchorA = new b2_math_1.b2Vec2();
        this.m_localAnchorB = new b2_math_1.b2Vec2();
        // Solver shared
        this.m_linearImpulse = new b2_math_1.b2Vec2();
        this.m_angularImpulse = 0;
        this.m_maxForce = 0;
        this.m_maxTorque = 0;
        // Solver temp
        this.m_indexA = 0;
        this.m_indexB = 0;
        this.m_rA = new b2_math_1.b2Vec2();
        this.m_rB = new b2_math_1.b2Vec2();
        this.m_localCenterA = new b2_math_1.b2Vec2();
        this.m_localCenterB = new b2_math_1.b2Vec2();
        this.m_invMassA = 0;
        this.m_invMassB = 0;
        this.m_invIA = 0;
        this.m_invIB = 0;
        this.m_linearMass = new b2_math_1.b2Mat22();
        this.m_angularMass = 0;
        this.m_localAnchorA.Copy(def.localAnchorA);
        this.m_localAnchorB.Copy(def.localAnchorB);
        this.m_linearImpulse.SetZero();
        this.m_maxForce = (_a = def.maxForce) !== null && _a !== void 0 ? _a : 0;
        this.m_maxTorque = (_b = def.maxTorque) !== null && _b !== void 0 ? _b : 0;
    }
    InitVelocityConstraints(data) {
        this.m_indexA = this.m_bodyA.m_islandIndex;
        this.m_indexB = this.m_bodyB.m_islandIndex;
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
        this.m_invMassA = this.m_bodyA.m_invMass;
        this.m_invMassB = this.m_bodyB.m_invMass;
        this.m_invIA = this.m_bodyA.m_invI;
        this.m_invIB = this.m_bodyB.m_invI;
        const aA = data.positions[this.m_indexA].a;
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const aB = data.positions[this.m_indexB].a;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const { qA, qB, lalcA, lalcB } = temp;
        qA.Set(aA);
        qB.Set(aB);
        // Compute the effective mass matrix.
        b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), this.m_rA);
        b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), this.m_rB);
        // J = [-I -r1_skew I r2_skew]
        //     [ 0       -1 0       1]
        // r_skew = [-ry; rx]
        // Matlab
        // K = [ mA+r1y^2*iA+mB+r2y^2*iB,  -r1y*iA*r1x-r2y*iB*r2x,          -r1y*iA-r2y*iB]
        //     [  -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB,           r1x*iA+r2x*iB]
        //     [          -r1y*iA-r2y*iB,           r1x*iA+r2x*iB,                   iA+iB]
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        const K = this.m_linearMass;
        K.ex.x = mA + mB + iA * this.m_rA.y * this.m_rA.y + iB * this.m_rB.y * this.m_rB.y;
        K.ex.y = -iA * this.m_rA.x * this.m_rA.y - iB * this.m_rB.x * this.m_rB.y;
        K.ey.x = K.ex.y;
        K.ey.y = mA + mB + iA * this.m_rA.x * this.m_rA.x + iB * this.m_rB.x * this.m_rB.x;
        K.Inverse();
        this.m_angularMass = iA + iB;
        if (this.m_angularMass > 0) this.m_angularMass = 1 / this.m_angularMass;
        if (data.step.warmStarting) {
            // Scale impulses to support a variable time step.
            this.m_linearImpulse.Scale(data.step.dtRatio);
            this.m_angularImpulse *= data.step.dtRatio;
            const P = this.m_linearImpulse;
            vA.SubtractScaled(mA, P);
            wA -= iA * (b2_math_1.b2Vec2.Cross(this.m_rA, P) + this.m_angularImpulse);
            vB.AddScaled(mB, P);
            wB += iB * (b2_math_1.b2Vec2.Cross(this.m_rB, P) + this.m_angularImpulse);
        } else {
            this.m_linearImpulse.SetZero();
            this.m_angularImpulse = 0;
        }
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    SolveVelocityConstraints(data) {
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        const h = data.step.dt;
        // Solve angular friction
        {
            const Cdot = wB - wA;
            let impulse = -this.m_angularMass * Cdot;
            const oldImpulse = this.m_angularImpulse;
            const maxImpulse = h * this.m_maxTorque;
            this.m_angularImpulse = (0, b2_math_1.b2Clamp)(this.m_angularImpulse + impulse, -maxImpulse, maxImpulse);
            impulse = this.m_angularImpulse - oldImpulse;
            wA -= iA * impulse;
            wB += iB * impulse;
        }
        // Solve linear friction
        {
            const { Cdot, impulse, oldImpulse } = temp;
            b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, this.m_rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, this.m_rA, b2_math_1.b2Vec2.s_t1), Cdot);
            b2_math_1.b2Mat22.MultiplyVec2(this.m_linearMass, Cdot, impulse).Negate();
            oldImpulse.Copy(this.m_linearImpulse);
            this.m_linearImpulse.Add(impulse);
            const maxImpulse = h * this.m_maxForce;
            if (this.m_linearImpulse.LengthSquared() > maxImpulse * maxImpulse) {
                this.m_linearImpulse.Normalize();
                this.m_linearImpulse.Scale(maxImpulse);
            }
            b2_math_1.b2Vec2.Subtract(this.m_linearImpulse, oldImpulse, impulse);
            vA.SubtractScaled(mA, impulse);
            wA -= iA * b2_math_1.b2Vec2.Cross(this.m_rA, impulse);
            vB.AddScaled(mB, impulse);
            wB += iB * b2_math_1.b2Vec2.Cross(this.m_rB, impulse);
        }
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    SolvePositionConstraints(_data) {
        return true;
    }
    GetAnchorA(out) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
    }
    GetAnchorB(out) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
    }
    GetReactionForce(inv_dt, out) {
        out.x = inv_dt * this.m_linearImpulse.x;
        out.y = inv_dt * this.m_linearImpulse.y;
        return out;
    }
    GetReactionTorque(inv_dt) {
        return inv_dt * this.m_angularImpulse;
    }
    /** The local anchor point relative to bodyA's origin. */ GetLocalAnchorA() {
        return this.m_localAnchorA;
    }
    /** The local anchor point relative to bodyB's origin. */ GetLocalAnchorB() {
        return this.m_localAnchorB;
    }
    /** Set the maximum friction force in N. */ SetMaxForce(force) {
        // DEBUG: b2Assert(Number.isFinite(force) && force >= 0);
        this.m_maxForce = force;
    }
    /** Get the maximum friction force in N. */ GetMaxForce() {
        return this.m_maxForce;
    }
    /** Set the maximum friction torque in N*m. */ SetMaxTorque(torque) {
        // DEBUG: b2Assert(Number.isFinite(torque) && torque >= 0);
        this.m_maxTorque = torque;
    }
    /** Get the maximum friction torque in N*m. */ GetMaxTorque() {
        return this.m_maxTorque;
    }
}
exports.b2FrictionJoint = b2FrictionJoint;

},{"4540dc55d154a4d4":"3MJcc","3444421332920e0":"kS3Lm"}],"dNugq":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2GearJoint = exports.b2GearJointDef = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("18c251768e15e2c3");
const b2_math_1 = require("4aba1e4e42579e7c");
const b2_joint_1 = require("2e5c1a6708c252b1");
// Gear Joint:
// C0 = (coordinate1 + ratio * coordinate2)_initial
// C = (coordinate1 + ratio * coordinate2) - C0 = 0
// J = [J1 ratio * J2]
// K = J * invM * JT
//   = J1 * invM1 * J1T + ratio * ratio * J2 * invM2 * J2T
// Revolute:
// coordinate = rotation
// Cdot = angularVelocity
// J = [0 0 1]
// K = J * invM * JT = invI
// Prismatic:
// coordinate = dot(p - pg, ug)
// Cdot = dot(v + cross(w, r), ug)
// J = [ug cross(r, ug)]
// K = J * invM * JT = invMass + invI * cross(r, ug)^2
const temp = {
    qA: new b2_math_1.b2Rot(),
    qB: new b2_math_1.b2Rot(),
    qC: new b2_math_1.b2Rot(),
    qD: new b2_math_1.b2Rot(),
    lalcA: new b2_math_1.b2Vec2(),
    lalcB: new b2_math_1.b2Vec2(),
    lalcC: new b2_math_1.b2Vec2(),
    lalcD: new b2_math_1.b2Vec2(),
    u: new b2_math_1.b2Vec2(),
    rA: new b2_math_1.b2Vec2(),
    rB: new b2_math_1.b2Vec2(),
    rC: new b2_math_1.b2Vec2(),
    rD: new b2_math_1.b2Vec2(),
    JvAC: new b2_math_1.b2Vec2(),
    JvBD: new b2_math_1.b2Vec2()
};
/**
 * Gear joint definition. This definition requires two existing
 * revolute or prismatic joints (any combination will work).
 *
 * @warning bodyB on the input joints must both be dynamic
 */ class b2GearJointDef extends b2_joint_1.b2JointDef {
    constructor(){
        super(b2_joint_1.b2JointType.e_gearJoint);
        /**
         * The gear ratio.
         *
         * @see b2GearJoint for explanation.
         */ this.ratio = 1;
    }
}
exports.b2GearJointDef = b2GearJointDef;
/**
 * A gear joint is used to connect two joints together. Either joint
 * can be a revolute or prismatic joint. You specify a gear ratio
 * to bind the motions together:
 * coordinate1 + ratio * coordinate2 = constant
 * The ratio can be negative or positive. If one joint is a revolute joint
 * and the other joint is a prismatic joint, then the ratio will have units
 * of length or units of 1/length.
 *
 * @warning You have to manually destroy the gear joint if joint1 or joint2
 * is destroyed.
 */ class b2GearJoint extends b2_joint_1.b2Joint {
    /** @internal protected */ constructor(def){
        var _a;
        super(def);
        this.m_typeA = b2_joint_1.b2JointType.e_unknownJoint;
        this.m_typeB = b2_joint_1.b2JointType.e_unknownJoint;
        // Solver shared
        this.m_localAnchorA = new b2_math_1.b2Vec2();
        this.m_localAnchorB = new b2_math_1.b2Vec2();
        this.m_localAnchorC = new b2_math_1.b2Vec2();
        this.m_localAnchorD = new b2_math_1.b2Vec2();
        this.m_localAxisC = new b2_math_1.b2Vec2();
        this.m_localAxisD = new b2_math_1.b2Vec2();
        this.m_referenceAngleA = 0;
        this.m_referenceAngleB = 0;
        this.m_constant = 0;
        this.m_ratio = 0;
        this.m_tolerance = 0;
        this.m_impulse = 0;
        // Solver temp
        this.m_indexA = 0;
        this.m_indexB = 0;
        this.m_indexC = 0;
        this.m_indexD = 0;
        this.m_lcA = new b2_math_1.b2Vec2();
        this.m_lcB = new b2_math_1.b2Vec2();
        this.m_lcC = new b2_math_1.b2Vec2();
        this.m_lcD = new b2_math_1.b2Vec2();
        this.m_mA = 0;
        this.m_mB = 0;
        this.m_mC = 0;
        this.m_mD = 0;
        this.m_iA = 0;
        this.m_iB = 0;
        this.m_iC = 0;
        this.m_iD = 0;
        this.m_JvAC = new b2_math_1.b2Vec2();
        this.m_JvBD = new b2_math_1.b2Vec2();
        this.m_JwA = 0;
        this.m_JwB = 0;
        this.m_JwC = 0;
        this.m_JwD = 0;
        this.m_mass = 0;
        this.m_joint1 = def.joint1;
        this.m_joint2 = def.joint2;
        this.m_typeA = this.m_joint1.GetType();
        this.m_typeB = this.m_joint2.GetType();
        // DEBUG: b2Assert(this.m_typeA === b2JointType.e_revoluteJoint || this.m_typeA === b2JointType.e_prismaticJoint);
        // DEBUG: b2Assert(this.m_typeB === b2JointType.e_revoluteJoint || this.m_typeB === b2JointType.e_prismaticJoint);
        let coordinateA;
        let coordinateB;
        // TODO_ERIN there might be some problem with the joint edges in b2Joint.
        this.m_bodyC = this.m_joint1.GetBodyA();
        this.m_bodyA = this.m_joint1.GetBodyB();
        // Body B on joint1 must be dynamic
        // DEBUG: b2Assert(this.m_bodyA.m_type === b2BodyType.b2_dynamicBody);
        // Get geometry of joint1
        const xfA = this.m_bodyA.m_xf;
        const aA = this.m_bodyA.m_sweep.a;
        const xfC = this.m_bodyC.m_xf;
        const aC = this.m_bodyC.m_sweep.a;
        if (this.m_typeA === b2_joint_1.b2JointType.e_revoluteJoint) {
            const revolute = def.joint1;
            this.m_localAnchorC.Copy(revolute.m_localAnchorA);
            this.m_localAnchorA.Copy(revolute.m_localAnchorB);
            this.m_referenceAngleA = revolute.m_referenceAngle;
            this.m_localAxisC.SetZero();
            coordinateA = aA - aC - this.m_referenceAngleA;
            // position error is measured in radians
            this.m_tolerance = b2_common_1.b2_angularSlop;
        } else {
            const prismatic = def.joint1;
            this.m_localAnchorC.Copy(prismatic.m_localAnchorA);
            this.m_localAnchorA.Copy(prismatic.m_localAnchorB);
            this.m_referenceAngleA = prismatic.m_referenceAngle;
            this.m_localAxisC.Copy(prismatic.m_localXAxisA);
            const pC = this.m_localAnchorC;
            const pA = b2_math_1.b2Rot.TransposeMultiplyVec2(xfC.q, b2_math_1.b2Rot.MultiplyVec2(xfA.q, this.m_localAnchorA, b2_math_1.b2Vec2.s_t0).Add(xfA.p).Subtract(xfC.p), b2_math_1.b2Vec2.s_t0);
            coordinateA = b2_math_1.b2Vec2.Dot(pA.Subtract(pC), this.m_localAxisC);
            // position error is measured in meters
            this.m_tolerance = b2_common_1.b2_linearSlop;
        }
        this.m_bodyD = this.m_joint2.GetBodyA();
        this.m_bodyB = this.m_joint2.GetBodyB();
        // Body B on joint2 must be dynamic
        // DEBUG: b2Assert(this.m_bodyB.m_type === b2BodyType.b2_dynamicBody);
        // Get geometry of joint2
        const xfB = this.m_bodyB.m_xf;
        const aB = this.m_bodyB.m_sweep.a;
        const xfD = this.m_bodyD.m_xf;
        const aD = this.m_bodyD.m_sweep.a;
        if (this.m_typeB === b2_joint_1.b2JointType.e_revoluteJoint) {
            const revolute = def.joint2;
            this.m_localAnchorD.Copy(revolute.m_localAnchorA);
            this.m_localAnchorB.Copy(revolute.m_localAnchorB);
            this.m_referenceAngleB = revolute.m_referenceAngle;
            this.m_localAxisD.SetZero();
            coordinateB = aB - aD - this.m_referenceAngleB;
        } else {
            const prismatic = def.joint2;
            this.m_localAnchorD.Copy(prismatic.m_localAnchorA);
            this.m_localAnchorB.Copy(prismatic.m_localAnchorB);
            this.m_referenceAngleB = prismatic.m_referenceAngle;
            this.m_localAxisD.Copy(prismatic.m_localXAxisA);
            const pD = this.m_localAnchorD;
            const pB = b2_math_1.b2Rot.TransposeMultiplyVec2(xfD.q, b2_math_1.b2Rot.MultiplyVec2(xfB.q, this.m_localAnchorB, b2_math_1.b2Vec2.s_t0).Add(xfB.p).Subtract(xfD.p), b2_math_1.b2Vec2.s_t0);
            coordinateB = b2_math_1.b2Vec2.Dot(pB.Subtract(pD), this.m_localAxisD);
        }
        this.m_ratio = (_a = def.ratio) !== null && _a !== void 0 ? _a : 1;
        this.m_constant = coordinateA + this.m_ratio * coordinateB;
        this.m_impulse = 0;
    }
    /** @internal protected */ InitVelocityConstraints(data) {
        this.m_indexA = this.m_bodyA.m_islandIndex;
        this.m_indexB = this.m_bodyB.m_islandIndex;
        this.m_indexC = this.m_bodyC.m_islandIndex;
        this.m_indexD = this.m_bodyD.m_islandIndex;
        this.m_lcA.Copy(this.m_bodyA.m_sweep.localCenter);
        this.m_lcB.Copy(this.m_bodyB.m_sweep.localCenter);
        this.m_lcC.Copy(this.m_bodyC.m_sweep.localCenter);
        this.m_lcD.Copy(this.m_bodyD.m_sweep.localCenter);
        this.m_mA = this.m_bodyA.m_invMass;
        this.m_mB = this.m_bodyB.m_invMass;
        this.m_mC = this.m_bodyC.m_invMass;
        this.m_mD = this.m_bodyD.m_invMass;
        this.m_iA = this.m_bodyA.m_invI;
        this.m_iB = this.m_bodyB.m_invI;
        this.m_iC = this.m_bodyC.m_invI;
        this.m_iD = this.m_bodyD.m_invI;
        const aA = data.positions[this.m_indexA].a;
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const aB = data.positions[this.m_indexB].a;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const aC = data.positions[this.m_indexC].a;
        const vC = data.velocities[this.m_indexC].v;
        let wC = data.velocities[this.m_indexC].w;
        const aD = data.positions[this.m_indexD].a;
        const vD = data.velocities[this.m_indexD].v;
        let wD = data.velocities[this.m_indexD].w;
        const { qA, qB, qC, qD } = temp;
        qA.Set(aA);
        qB.Set(aB);
        qC.Set(aC);
        qD.Set(aD);
        this.m_mass = 0;
        if (this.m_typeA === b2_joint_1.b2JointType.e_revoluteJoint) {
            this.m_JvAC.SetZero();
            this.m_JwA = 1;
            this.m_JwC = 1;
            this.m_mass += this.m_iA + this.m_iC;
        } else {
            const { u, rC, rA, lalcA, lalcC } = temp;
            b2_math_1.b2Rot.MultiplyVec2(qC, this.m_localAxisC, u);
            b2_math_1.b2Rot.MultiplyVec2(qC, b2_math_1.b2Vec2.Subtract(this.m_localAnchorC, this.m_lcC, lalcC), rC);
            b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_lcA, lalcA), rA);
            this.m_JvAC.Copy(u);
            this.m_JwC = b2_math_1.b2Vec2.Cross(rC, u);
            this.m_JwA = b2_math_1.b2Vec2.Cross(rA, u);
            this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA;
        }
        if (this.m_typeB === b2_joint_1.b2JointType.e_revoluteJoint) {
            this.m_JvBD.SetZero();
            this.m_JwB = this.m_ratio;
            this.m_JwD = this.m_ratio;
            this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);
        } else {
            const { u, rB, rD, lalcB, lalcD } = temp;
            b2_math_1.b2Rot.MultiplyVec2(qD, this.m_localAxisD, u);
            b2_math_1.b2Rot.MultiplyVec2(qD, b2_math_1.b2Vec2.Subtract(this.m_localAnchorD, this.m_lcD, lalcD), rD);
            b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_lcB, lalcB), rB);
            b2_math_1.b2Vec2.Scale(this.m_ratio, u, this.m_JvBD);
            this.m_JwD = this.m_ratio * b2_math_1.b2Vec2.Cross(rD, u);
            this.m_JwB = this.m_ratio * b2_math_1.b2Vec2.Cross(rB, u);
            this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB;
        }
        // Compute effective mass.
        this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0;
        if (data.step.warmStarting) {
            vA.AddScaled(this.m_mA * this.m_impulse, this.m_JvAC);
            wA += this.m_iA * this.m_impulse * this.m_JwA;
            vB.AddScaled(this.m_mB * this.m_impulse, this.m_JvBD);
            wB += this.m_iB * this.m_impulse * this.m_JwB;
            vC.SubtractScaled(this.m_mC * this.m_impulse, this.m_JvAC);
            wC -= this.m_iC * this.m_impulse * this.m_JwC;
            vD.SubtractScaled(this.m_mD * this.m_impulse, this.m_JvBD);
            wD -= this.m_iD * this.m_impulse * this.m_JwD;
        } else this.m_impulse = 0;
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
        data.velocities[this.m_indexC].w = wC;
        data.velocities[this.m_indexD].w = wD;
    }
    /** @internal protected */ SolveVelocityConstraints(data) {
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const vC = data.velocities[this.m_indexC].v;
        let wC = data.velocities[this.m_indexC].w;
        const vD = data.velocities[this.m_indexD].v;
        let wD = data.velocities[this.m_indexD].w;
        let Cdot = b2_math_1.b2Vec2.Dot(this.m_JvAC, b2_math_1.b2Vec2.Subtract(vA, vC, b2_math_1.b2Vec2.s_t0)) + b2_math_1.b2Vec2.Dot(this.m_JvBD, b2_math_1.b2Vec2.Subtract(vB, vD, b2_math_1.b2Vec2.s_t0));
        Cdot += this.m_JwA * wA - this.m_JwC * wC + (this.m_JwB * wB - this.m_JwD * wD);
        const impulse = -this.m_mass * Cdot;
        this.m_impulse += impulse;
        vA.AddScaled(this.m_mA * impulse, this.m_JvAC);
        wA += this.m_iA * impulse * this.m_JwA;
        vB.AddScaled(this.m_mB * impulse, this.m_JvBD);
        wB += this.m_iB * impulse * this.m_JwB;
        vC.SubtractScaled(this.m_mC * impulse, this.m_JvAC);
        wC -= this.m_iC * impulse * this.m_JwC;
        vD.SubtractScaled(this.m_mD * impulse, this.m_JvBD);
        wD -= this.m_iD * impulse * this.m_JwD;
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
        data.velocities[this.m_indexC].w = wC;
        data.velocities[this.m_indexD].w = wD;
    }
    /** @internal protected */ SolvePositionConstraints(data) {
        const cA = data.positions[this.m_indexA].c;
        let aA = data.positions[this.m_indexA].a;
        const cB = data.positions[this.m_indexB].c;
        let aB = data.positions[this.m_indexB].a;
        const cC = data.positions[this.m_indexC].c;
        let aC = data.positions[this.m_indexC].a;
        const cD = data.positions[this.m_indexD].c;
        let aD = data.positions[this.m_indexD].a;
        const { qA, qB, qC, qD, JvAC, JvBD } = temp;
        qA.Set(aA);
        qB.Set(aB);
        qC.Set(aC);
        qD.Set(aD);
        let coordinateA;
        let coordinateB;
        let JwA;
        let JwB;
        let JwC;
        let JwD;
        let mass = 0;
        if (this.m_typeA === b2_joint_1.b2JointType.e_revoluteJoint) {
            JvAC.SetZero();
            JwA = 1;
            JwC = 1;
            mass += this.m_iA + this.m_iC;
            coordinateA = aA - aC - this.m_referenceAngleA;
        } else {
            const { u, rC, rA, lalcC, lalcA } = temp;
            b2_math_1.b2Rot.MultiplyVec2(qC, this.m_localAxisC, u);
            b2_math_1.b2Rot.MultiplyVec2(qC, b2_math_1.b2Vec2.Subtract(this.m_localAnchorC, this.m_lcC, lalcC), rC);
            b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_lcA, lalcA), rA);
            JvAC.Copy(u);
            JwC = b2_math_1.b2Vec2.Cross(rC, u);
            JwA = b2_math_1.b2Vec2.Cross(rA, u);
            mass += this.m_mC + this.m_mA + this.m_iC * JwC * JwC + this.m_iA * JwA * JwA;
            const pC = lalcC;
            const pA = b2_math_1.b2Rot.TransposeMultiplyVec2(qC, b2_math_1.b2Vec2.Add(rA, cA, b2_math_1.b2Vec2.s_t0).Subtract(cC), b2_math_1.b2Vec2.s_t0);
            coordinateA = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(pA, pC, b2_math_1.b2Vec2.s_t0), this.m_localAxisC);
        }
        if (this.m_typeB === b2_joint_1.b2JointType.e_revoluteJoint) {
            JvBD.SetZero();
            JwB = this.m_ratio;
            JwD = this.m_ratio;
            mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);
            coordinateB = aB - aD - this.m_referenceAngleB;
        } else {
            const { u, rD, rB, lalcD, lalcB } = temp;
            b2_math_1.b2Rot.MultiplyVec2(qD, this.m_localAxisD, u);
            b2_math_1.b2Rot.MultiplyVec2(qD, b2_math_1.b2Vec2.Subtract(this.m_localAnchorD, this.m_lcD, lalcD), rD);
            b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_lcB, lalcB), rB);
            b2_math_1.b2Vec2.Scale(this.m_ratio, u, JvBD);
            JwD = this.m_ratio * b2_math_1.b2Vec2.Cross(rD, u);
            JwB = this.m_ratio * b2_math_1.b2Vec2.Cross(rB, u);
            mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * JwD * JwD + this.m_iB * JwB * JwB;
            const pD = lalcD;
            const pB = b2_math_1.b2Rot.TransposeMultiplyVec2(qD, b2_math_1.b2Vec2.Add(rB, cB, b2_math_1.b2Vec2.s_t0).Subtract(cD), b2_math_1.b2Vec2.s_t0);
            coordinateB = b2_math_1.b2Vec2.Dot(pB.Subtract(pD), this.m_localAxisD);
        }
        const C = coordinateA + this.m_ratio * coordinateB - this.m_constant;
        let impulse = 0;
        if (mass > 0) impulse = -C / mass;
        cA.AddScaled(this.m_mA * impulse, JvAC);
        aA += this.m_iA * impulse * JwA;
        cB.AddScaled(this.m_mB * impulse, JvBD);
        aB += this.m_iB * impulse * JwB;
        cC.SubtractScaled(this.m_mC * impulse, JvAC);
        aC -= this.m_iC * impulse * JwC;
        cD.SubtractScaled(this.m_mD * impulse, JvBD);
        aD -= this.m_iD * impulse * JwD;
        data.positions[this.m_indexA].a = aA;
        data.positions[this.m_indexB].a = aB;
        data.positions[this.m_indexC].a = aC;
        data.positions[this.m_indexD].a = aD;
        if (Math.abs(C) < this.m_tolerance) return true;
        return false;
    }
    GetAnchorA(out) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
    }
    GetAnchorB(out) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
    }
    GetReactionForce(inv_dt, out) {
        return b2_math_1.b2Vec2.Scale(inv_dt * this.m_impulse, this.m_JvAC, out);
    }
    GetReactionTorque(inv_dt) {
        return inv_dt * this.m_impulse * this.m_JwA;
    }
    /** Get the first joint. */ GetJoint1() {
        return this.m_joint1;
    }
    /** Get the second joint. */ GetJoint2() {
        return this.m_joint2;
    }
    /** Get the gear ratio. */ GetRatio() {
        return this.m_ratio;
    }
    /** Set the gear ratio. */ SetRatio(ratio) {
        // DEBUG: b2Assert(Number.isFinite(ratio));
        this.m_ratio = ratio;
    }
}
exports.b2GearJoint = b2GearJoint;

},{"18c251768e15e2c3":"a1SE4","4aba1e4e42579e7c":"3MJcc","2e5c1a6708c252b1":"kS3Lm"}],"5yHxp":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2MotorJoint = exports.b2MotorJointDef = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_math_1 = require("9f455964e04de212");
const b2_joint_1 = require("314314adf464a87e");
// Point-to-point constraint
// Cdot = v2 - v1
//      = v2 + cross(w2, r2) - v1 - cross(w1, r1)
// J = [-I -r1_skew I r2_skew ]
// Identity used:
// w k % (rx i + ry j) = w * (-ry i + rx j)
//
// r1 = offset - c1
// r2 = -c2
// Angle constraint
// Cdot = w2 - w1
// J = [0 0 -1 0 0 1]
// K = invI1 + invI2
const temp = {
    qA: new b2_math_1.b2Rot(),
    qB: new b2_math_1.b2Rot(),
    K: new b2_math_1.b2Mat22(),
    Cdot: new b2_math_1.b2Vec2(),
    impulse: new b2_math_1.b2Vec2(),
    oldImpulse: new b2_math_1.b2Vec2()
};
/**
 * Motor joint definition.
 */ class b2MotorJointDef extends b2_joint_1.b2JointDef {
    constructor(){
        super(b2_joint_1.b2JointType.e_motorJoint);
        /** Position of bodyB minus the position of bodyA, in bodyA's frame, in meters. */ this.linearOffset = new b2_math_1.b2Vec2();
        /** The bodyB angle minus bodyA angle in radians. */ this.angularOffset = 0;
        /** The maximum motor force in N. */ this.maxForce = 1;
        /** The maximum motor torque in N-m. */ this.maxTorque = 1;
        /** Position correction factor in the range [0,1]. */ this.correctionFactor = 0.3;
    }
    /** Initialize the bodies and offsets using the current transforms. */ Initialize(bodyA, bodyB) {
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.bodyA.GetLocalPoint(bodyB.GetPosition(), this.linearOffset);
        const angleA = bodyA.GetAngle();
        const angleB = bodyB.GetAngle();
        this.angularOffset = angleB - angleA;
    }
}
exports.b2MotorJointDef = b2MotorJointDef;
/**
 * A motor joint is used to control the relative motion
 * between two bodies. A typical usage is to control the movement
 * of a dynamic body with respect to the ground.
 */ class b2MotorJoint extends b2_joint_1.b2Joint {
    /** @internal protected */ constructor(def){
        var _a, _b, _c, _d, _e;
        super(def);
        // Solver shared
        this.m_linearOffset = new b2_math_1.b2Vec2();
        this.m_linearImpulse = new b2_math_1.b2Vec2();
        this.m_angularImpulse = 0;
        // Solver temp
        this.m_indexA = 0;
        this.m_indexB = 0;
        this.m_rA = new b2_math_1.b2Vec2();
        this.m_rB = new b2_math_1.b2Vec2();
        this.m_localCenterA = new b2_math_1.b2Vec2();
        this.m_localCenterB = new b2_math_1.b2Vec2();
        this.m_linearError = new b2_math_1.b2Vec2();
        this.m_angularError = 0;
        this.m_invMassA = 0;
        this.m_invMassB = 0;
        this.m_invIA = 0;
        this.m_invIB = 0;
        this.m_linearMass = new b2_math_1.b2Mat22();
        this.m_angularMass = 0;
        this.m_linearOffset.Copy((_a = def.linearOffset) !== null && _a !== void 0 ? _a : b2_math_1.b2Vec2.ZERO);
        this.m_angularOffset = (_b = def.angularOffset) !== null && _b !== void 0 ? _b : 0;
        this.m_linearImpulse.SetZero();
        this.m_maxForce = (_c = def.maxForce) !== null && _c !== void 0 ? _c : 1;
        this.m_maxTorque = (_d = def.maxTorque) !== null && _d !== void 0 ? _d : 1;
        this.m_correctionFactor = (_e = def.correctionFactor) !== null && _e !== void 0 ? _e : 0.3;
    }
    GetAnchorA(out) {
        const pos = this.m_bodyA.GetPosition();
        out.x = pos.x;
        out.y = pos.y;
        return out;
    }
    GetAnchorB(out) {
        const pos = this.m_bodyB.GetPosition();
        out.x = pos.x;
        out.y = pos.y;
        return out;
    }
    GetReactionForce(inv_dt, out) {
        return b2_math_1.b2Vec2.Scale(inv_dt, this.m_linearImpulse, out);
    }
    GetReactionTorque(inv_dt) {
        return inv_dt * this.m_angularImpulse;
    }
    /** Set the target linear offset, in frame A, in meters. */ SetLinearOffset(linearOffset) {
        if (!b2_math_1.b2Vec2.Equals(linearOffset, this.m_linearOffset)) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_linearOffset.Copy(linearOffset);
        }
    }
    /** Get the target linear offset, in frame A, in meters. */ GetLinearOffset() {
        return this.m_linearOffset;
    }
    /** Set the target angular offset, in radians. */ SetAngularOffset(angularOffset) {
        if (angularOffset !== this.m_angularOffset) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_angularOffset = angularOffset;
        }
    }
    /** Get the target angular offset, in radians. */ GetAngularOffset() {
        return this.m_angularOffset;
    }
    /** Set the maximum friction force in N. */ SetMaxForce(force) {
        // DEBUG: b2Assert(Number.isFinite(force) && force >= 0);
        this.m_maxForce = force;
    }
    /** Get the maximum friction force in N. */ GetMaxForce() {
        return this.m_maxForce;
    }
    /** Set the maximum friction torque in N*m. */ SetMaxTorque(torque) {
        // DEBUG: b2Assert(Number.isFinite(torque) && torque >= 0);
        this.m_maxTorque = torque;
    }
    /** Get the maximum friction torque in N*m. */ GetMaxTorque() {
        return this.m_maxTorque;
    }
    /** Get the position correction factor in the range [0,1]. */ GetCorrectionFactor() {
        return this.m_correctionFactor;
    }
    /** Set the position correction factor in the range [0,1]. */ SetCorrectionFactor(factor) {
        // DEBUG: b2Assert(Number.isFinite(factor) && factor >= 0 && factor <= 1);
        this.m_correctionFactor = factor;
    }
    /** @internal protected */ InitVelocityConstraints(data) {
        this.m_indexA = this.m_bodyA.m_islandIndex;
        this.m_indexB = this.m_bodyB.m_islandIndex;
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
        this.m_invMassA = this.m_bodyA.m_invMass;
        this.m_invMassB = this.m_bodyB.m_invMass;
        this.m_invIA = this.m_bodyA.m_invI;
        this.m_invIB = this.m_bodyB.m_invI;
        const cA = data.positions[this.m_indexA].c;
        const aA = data.positions[this.m_indexA].a;
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const cB = data.positions[this.m_indexB].c;
        const aB = data.positions[this.m_indexB].a;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const { qA, qB } = temp;
        qA.Set(aA);
        qB.Set(aB);
        // Compute the effective mass matrix.
        const rA = b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_linearOffset, this.m_localCenterA, b2_math_1.b2Vec2.s_t0), this.m_rA);
        const rB = b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Negate(this.m_localCenterB, b2_math_1.b2Vec2.s_t0), this.m_rB);
        // J = [-I -r1_skew I r2_skew]
        // r_skew = [-ry; rx]
        // Matlab
        // K = [ mA+r1y^2*iA+mB+r2y^2*iB,  -r1y*iA*r1x-r2y*iB*r2x,          -r1y*iA-r2y*iB]
        //     [  -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB,           r1x*iA+r2x*iB]
        //     [          -r1y*iA-r2y*iB,           r1x*iA+r2x*iB,                   iA+iB]
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        // Upper 2 by 2 of K for point to point
        const K = this.m_linearMass;
        K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
        K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
        K.ey.x = K.ex.y;
        K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;
        K.Inverse();
        this.m_angularMass = iA + iB;
        if (this.m_angularMass > 0) this.m_angularMass = 1 / this.m_angularMass;
        b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.Add(cB, rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.Add(cA, rA, b2_math_1.b2Vec2.s_t1), this.m_linearError);
        this.m_angularError = aB - aA - this.m_angularOffset;
        if (data.step.warmStarting) {
            // Scale impulses to support a variable time step.
            this.m_linearImpulse.Scale(data.step.dtRatio);
            this.m_angularImpulse *= data.step.dtRatio;
            const P = this.m_linearImpulse;
            vA.SubtractScaled(mA, P);
            wA -= iA * (b2_math_1.b2Vec2.Cross(rA, P) + this.m_angularImpulse);
            vB.AddScaled(mB, P);
            wB += iB * (b2_math_1.b2Vec2.Cross(rB, P) + this.m_angularImpulse);
        } else {
            this.m_linearImpulse.SetZero();
            this.m_angularImpulse = 0;
        }
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolveVelocityConstraints(data) {
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        const h = data.step.dt;
        const inv_h = data.step.inv_dt;
        // Solve angular friction
        {
            const Cdot = wB - wA + inv_h * this.m_correctionFactor * this.m_angularError;
            let impulse = -this.m_angularMass * Cdot;
            const oldImpulse = this.m_angularImpulse;
            const maxImpulse = h * this.m_maxTorque;
            this.m_angularImpulse = (0, b2_math_1.b2Clamp)(this.m_angularImpulse + impulse, -maxImpulse, maxImpulse);
            impulse = this.m_angularImpulse - oldImpulse;
            wA -= iA * impulse;
            wB += iB * impulse;
        }
        // Solve linear friction
        {
            const { impulse, oldImpulse, Cdot } = temp;
            b2_math_1.b2Vec2.AddScaled(b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, this.m_rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, this.m_rA, b2_math_1.b2Vec2.s_t1), b2_math_1.b2Vec2.s_t2), inv_h * this.m_correctionFactor, this.m_linearError, Cdot);
            b2_math_1.b2Mat22.MultiplyVec2(this.m_linearMass, Cdot, impulse).Negate();
            oldImpulse.Copy(this.m_linearImpulse);
            this.m_linearImpulse.Add(impulse);
            const maxImpulse = h * this.m_maxForce;
            if (this.m_linearImpulse.LengthSquared() > maxImpulse * maxImpulse) {
                this.m_linearImpulse.Normalize();
                this.m_linearImpulse.Scale(maxImpulse);
            }
            b2_math_1.b2Vec2.Subtract(this.m_linearImpulse, oldImpulse, impulse);
            vA.SubtractScaled(mA, impulse);
            wA -= iA * b2_math_1.b2Vec2.Cross(this.m_rA, impulse);
            vB.AddScaled(mB, impulse);
            wB += iB * b2_math_1.b2Vec2.Cross(this.m_rB, impulse);
        }
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolvePositionConstraints(_data) {
        return true;
    }
}
exports.b2MotorJoint = b2MotorJoint;

},{"9f455964e04de212":"3MJcc","314314adf464a87e":"kS3Lm"}],"kwVNE":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2MouseJoint = exports.b2MouseJointDef = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert, b2_epsilon } from "../common/b2_common";
const b2_draw_1 = require("8c315001420a385e");
const b2_math_1 = require("43c49527c4ec02fd");
const b2_joint_1 = require("e5d9bda687413f1e");
// p = attached point, m = mouse point
// C = p - m
// Cdot = v
//      = v + cross(w, r)
// J = [I r_skew]
// Identity used:
// w k % (rx i + ry j) = w * (-ry i + rx j)
const temp = {
    qB: new b2_math_1.b2Rot(),
    lalcB: new b2_math_1.b2Vec2(),
    Cdot: new b2_math_1.b2Vec2(),
    impulse: new b2_math_1.b2Vec2(),
    oldImpulse: new b2_math_1.b2Vec2(),
    pA: new b2_math_1.b2Vec2(),
    pB: new b2_math_1.b2Vec2()
};
/**
 * Mouse joint definition. This requires a world target point,
 * tuning parameters, and the time step.
 */ class b2MouseJointDef extends b2_joint_1.b2JointDef {
    constructor(){
        super(b2_joint_1.b2JointType.e_mouseJoint);
        /**
         * The initial world target point. This is assumed
         * to coincide with the body anchor initially.
         */ this.target = new b2_math_1.b2Vec2();
        /**
         * The maximum constraint force that can be exerted
         * to move the candidate body. Usually you will express
         * as some multiple of the weight (multiplier * mass * gravity).
         */ this.maxForce = 0;
        /** The linear stiffness in N/m */ this.stiffness = 0;
        /** The linear damping in N*s/m */ this.damping = 0;
    }
}
exports.b2MouseJointDef = b2MouseJointDef;
/**
 * A mouse joint is used to make a point on a body track a
 * specified world point. This a soft constraint with a maximum
 * force. This allows the constraint to stretch and without
 * applying huge forces.
 * NOTE: this joint is not documented in the manual because it was
 * developed to be used in the testbed. If you want to learn how to
 * use the mouse joint, look at the testbed.
 */ class b2MouseJoint extends b2_joint_1.b2Joint {
    /** @internal protected */ constructor(def){
        var _a, _b, _c, _d;
        super(def);
        this.m_localAnchorB = new b2_math_1.b2Vec2();
        this.m_targetA = new b2_math_1.b2Vec2();
        this.m_stiffness = 0;
        this.m_damping = 0;
        this.m_beta = 0;
        // Solver shared
        this.m_impulse = new b2_math_1.b2Vec2();
        this.m_maxForce = 0;
        this.m_gamma = 0;
        // Solver temp
        this.m_indexB = 0;
        this.m_rB = new b2_math_1.b2Vec2();
        this.m_localCenterB = new b2_math_1.b2Vec2();
        this.m_invMassB = 0;
        this.m_invIB = 0;
        this.m_mass = new b2_math_1.b2Mat22();
        this.m_C = new b2_math_1.b2Vec2();
        this.m_targetA.Copy((_a = def.target) !== null && _a !== void 0 ? _a : b2_math_1.b2Vec2.ZERO);
        b2_math_1.b2Transform.TransposeMultiplyVec2(this.m_bodyB.GetTransform(), this.m_targetA, this.m_localAnchorB);
        this.m_maxForce = (_b = def.maxForce) !== null && _b !== void 0 ? _b : 0;
        this.m_stiffness = (_c = def.stiffness) !== null && _c !== void 0 ? _c : 0;
        this.m_damping = (_d = def.damping) !== null && _d !== void 0 ? _d : 0;
        this.m_beta = 0;
        this.m_gamma = 0;
    }
    /** Use this to update the target point. */ SetTarget(target) {
        if (!b2_math_1.b2Vec2.Equals(target, this.m_targetA)) {
            this.m_bodyB.SetAwake(true);
            this.m_targetA.Copy(target);
        }
    }
    GetTarget() {
        return this.m_targetA;
    }
    /** Set the maximum force in Newtons. */ SetMaxForce(force) {
        this.m_maxForce = force;
    }
    /** Get the maximum force in Newtons. */ GetMaxForce() {
        return this.m_maxForce;
    }
    /** Set the linear stiffness in N/m */ SetStiffness(stiffness) {
        this.m_stiffness = stiffness;
    }
    /** Get the linear stiffness in N/m */ GetStiffness() {
        return this.m_stiffness;
    }
    /** Set linear damping in N*s/m */ SetDamping(damping) {
        this.m_damping = damping;
    }
    /** Get linear damping in N*s/m */ GetDamping() {
        return this.m_damping;
    }
    /** @internal protected */ InitVelocityConstraints(data) {
        this.m_indexB = this.m_bodyB.m_islandIndex;
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
        this.m_invMassB = this.m_bodyB.m_invMass;
        this.m_invIB = this.m_bodyB.m_invI;
        const cB = data.positions[this.m_indexB].c;
        const aB = data.positions[this.m_indexB].a;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const { qB, lalcB } = temp;
        qB.Set(aB);
        const d = this.m_damping;
        const k = this.m_stiffness;
        // magic formulas
        // gamma has units of inverse mass.
        // beta has units of inverse time.
        const h = data.step.dt;
        this.m_gamma = h * (d + h * k);
        if (this.m_gamma !== 0) this.m_gamma = 1 / this.m_gamma;
        this.m_beta = h * k * this.m_gamma;
        // Compute the effective mass matrix.
        b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), this.m_rB);
        // K    = [(1/m1 + 1/m2) * eye(2) - skew(r1) * invI1 * skew(r1) - skew(r2) * invI2 * skew(r2)]
        //      = [1/m1+1/m2     0    ] + invI1 * [r1.y*r1.y -r1.x*r1.y] + invI2 * [r1.y*r1.y -r1.x*r1.y]
        //        [    0     1/m1+1/m2]           [-r1.x*r1.y r1.x*r1.x]           [-r1.x*r1.y r1.x*r1.x]
        const K = this.m_mass;
        K.ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma;
        K.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y;
        K.ey.x = K.ex.y;
        K.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma;
        K.Inverse();
        b2_math_1.b2Vec2.Add(cB, this.m_rB, this.m_C).Subtract(this.m_targetA);
        this.m_C.Scale(this.m_beta);
        // Cheat with some damping
        wB *= Math.max(0, 1 - 0.02 * (60 * data.step.dt));
        if (data.step.warmStarting) {
            this.m_impulse.Scale(data.step.dtRatio);
            vB.AddScaled(this.m_invMassB, this.m_impulse);
            wB += this.m_invIB * b2_math_1.b2Vec2.Cross(this.m_rB, this.m_impulse);
        } else this.m_impulse.SetZero();
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolveVelocityConstraints(data) {
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        // Cdot = v + cross(w, r)
        const { Cdot, impulse, oldImpulse } = temp;
        b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, this.m_rB, Cdot);
        b2_math_1.b2Mat22.MultiplyVec2(this.m_mass, b2_math_1.b2Vec2.Add(Cdot, this.m_C, impulse).AddScaled(this.m_gamma, this.m_impulse).Negate(), impulse);
        oldImpulse.Copy(this.m_impulse);
        this.m_impulse.Add(impulse);
        const maxImpulse = data.step.dt * this.m_maxForce;
        if (this.m_impulse.LengthSquared() > maxImpulse * maxImpulse) this.m_impulse.Scale(maxImpulse / this.m_impulse.Length());
        b2_math_1.b2Vec2.Subtract(this.m_impulse, oldImpulse, impulse);
        vB.AddScaled(this.m_invMassB, impulse);
        wB += this.m_invIB * b2_math_1.b2Vec2.Cross(this.m_rB, impulse);
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolvePositionConstraints(_data) {
        return true;
    }
    GetAnchorA(out) {
        out.x = this.m_targetA.x;
        out.y = this.m_targetA.y;
        return out;
    }
    GetAnchorB(out) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
    }
    GetReactionForce(inv_dt, out) {
        return b2_math_1.b2Vec2.Scale(inv_dt, this.m_impulse, out);
    }
    GetReactionTorque(_inv_dt) {
        return 0;
    }
    ShiftOrigin(newOrigin) {
        this.m_targetA.Subtract(newOrigin);
    }
    Draw(draw) {
        const p1 = this.GetAnchorA(temp.pA);
        const p2 = this.GetAnchorB(temp.pB);
        draw.DrawPoint(p1, 4, b2_draw_1.debugColors.joint7);
        draw.DrawPoint(p2, 4, b2_draw_1.debugColors.joint7);
        draw.DrawSegment(p1, p2, b2_draw_1.debugColors.joint8);
    }
}
exports.b2MouseJoint = b2MouseJoint;

},{"8c315001420a385e":"cc6XX","43c49527c4ec02fd":"3MJcc","e5d9bda687413f1e":"kS3Lm"}],"4rI1j":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2PrismaticJoint = exports.b2PrismaticJointDef = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_common_1 = require("718a6a2a46ef738b");
const b2_draw_1 = require("86fa8c50ea385114");
const b2_math_1 = require("664187fd0f8fac4e");
const b2_joint_1 = require("4b25889e9985d60f");
// Linear constraint (point-to-line)
// d = p2 - p1 = x2 + r2 - x1 - r1
// C = dot(perp, d)
// Cdot = dot(d, cross(w1, perp)) + dot(perp, v2 + cross(w2, r2) - v1 - cross(w1, r1))
//      = -dot(perp, v1) - dot(cross(d + r1, perp), w1) + dot(perp, v2) + dot(cross(r2, perp), v2)
// J = [-perp, -cross(d + r1, perp), perp, cross(r2,perp)]
//
// Angular constraint
// C = a2 - a1 + a_initial
// Cdot = w2 - w1
// J = [0 0 -1 0 0 1]
//
// K = J * invM * JT
//
// J = [-a -s1 a s2]
//     [0  -1  0  1]
// a = perp
// s1 = cross(d + r1, a) = cross(p2 - x1, a)
// s2 = cross(r2, a) = cross(p2 - x2, a)
// Motor/Limit linear constraint
// C = dot(ax1, d)
// Cdot = -dot(ax1, v1) - dot(cross(d + r1, ax1), w1) + dot(ax1, v2) + dot(cross(r2, ax1), v2)
// J = [-ax1 -cross(d+r1,ax1) ax1 cross(r2,ax1)]
// Predictive limit is applied even when the limit is not active.
// Prevents a constraint speed that can lead to a constraint error in one time step.
// Want C2 = C1 + h * Cdot >= 0
// Or:
// Cdot + C1/h >= 0
// I do not apply a negative constraint error because that is handled in position correction.
// So:
// Cdot + max(C1, 0)/h >= 0
// Block Solver
// We develop a block solver that includes the angular and linear constraints. This makes the limit stiffer.
//
// The Jacobian has 2 rows:
// J = [-uT -s1 uT s2] // linear
//     [0   -1   0  1] // angular
//
// u = perp
// s1 = cross(d + r1, u), s2 = cross(r2, u)
// a1 = cross(d + r1, v), a2 = cross(r2, v)
const temp = {
    K3: new b2_math_1.b2Mat33(),
    K2: new b2_math_1.b2Mat22(),
    qA: new b2_math_1.b2Rot(),
    qB: new b2_math_1.b2Rot(),
    lalcA: new b2_math_1.b2Vec2(),
    lalcB: new b2_math_1.b2Vec2(),
    rA: new b2_math_1.b2Vec2(),
    rB: new b2_math_1.b2Vec2(),
    GetJointTranslation: {
        pA: new b2_math_1.b2Vec2(),
        pB: new b2_math_1.b2Vec2(),
        d: new b2_math_1.b2Vec2(),
        axis: new b2_math_1.b2Vec2()
    },
    InitVelocityConstraints: {
        d: new b2_math_1.b2Vec2(),
        P: new b2_math_1.b2Vec2()
    },
    SolveVelocityConstraints: {
        P: new b2_math_1.b2Vec2(),
        df: new b2_math_1.b2Vec2()
    },
    SolvePositionConstraints: {
        d: new b2_math_1.b2Vec2(),
        impulse: new b2_math_1.b2Vec3(),
        impulse1: new b2_math_1.b2Vec2(),
        P: new b2_math_1.b2Vec2()
    },
    Draw: {
        p1: new b2_math_1.b2Vec2(),
        p2: new b2_math_1.b2Vec2(),
        pA: new b2_math_1.b2Vec2(),
        pB: new b2_math_1.b2Vec2(),
        axis: new b2_math_1.b2Vec2(),
        lower: new b2_math_1.b2Vec2(),
        upper: new b2_math_1.b2Vec2(),
        perp: new b2_math_1.b2Vec2()
    }
};
/**
 * Prismatic joint definition. This requires defining a line of
 * motion using an axis and an anchor point. The definition uses local
 * anchor points and a local axis so that the initial configuration
 * can violate the constraint slightly. The joint translation is zero
 * when the local anchor points coincide in world space. Using local
 * anchors and a local axis helps when saving and loading a game.
 */ class b2PrismaticJointDef extends b2_joint_1.b2JointDef {
    constructor(){
        super(b2_joint_1.b2JointType.e_prismaticJoint);
        /** The local anchor point relative to bodyA's origin. */ this.localAnchorA = new b2_math_1.b2Vec2();
        /** The local anchor point relative to bodyB's origin. */ this.localAnchorB = new b2_math_1.b2Vec2();
        /** The local translation unit axis in bodyA. */ this.localAxisA = new b2_math_1.b2Vec2(1, 0);
        /** The constrained angle between the bodies: bodyB_angle - bodyA_angle. */ this.referenceAngle = 0;
        /** Enable/disable the joint limit. */ this.enableLimit = false;
        /** The lower translation limit, usually in meters. */ this.lowerTranslation = 0;
        /** The upper translation limit, usually in meters. */ this.upperTranslation = 0;
        /** Enable/disable the joint motor. */ this.enableMotor = false;
        /** The maximum motor torque, usually in N-m. */ this.maxMotorForce = 0;
        /** The desired motor speed in radians per second. */ this.motorSpeed = 0;
    }
    /**
     * Initialize the bodies, anchors, axis, and reference angle using the world
     * anchor and unit world axis.
     */ Initialize(bA, bB, anchor, axis) {
        this.bodyA = bA;
        this.bodyB = bB;
        this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
        this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
        this.bodyA.GetLocalVector(axis, this.localAxisA);
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
    }
}
exports.b2PrismaticJointDef = b2PrismaticJointDef;
/**
 * A prismatic joint. This joint provides one degree of freedom: translation
 * along an axis fixed in bodyA. Relative rotation is prevented. You can
 * use a joint limit to restrict the range of motion and a joint motor to
 * drive the motion or to model joint friction.
 */ class b2PrismaticJoint extends b2_joint_1.b2Joint {
    /** @internal protected */ constructor(def){
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        super(def);
        /** @internal protected */ this.m_localAnchorA = new b2_math_1.b2Vec2();
        /** @internal protected */ this.m_localAnchorB = new b2_math_1.b2Vec2();
        /** @internal protected */ this.m_localXAxisA = new b2_math_1.b2Vec2();
        this.m_localYAxisA = new b2_math_1.b2Vec2();
        /** @internal protected */ this.m_referenceAngle = 0;
        this.m_impulse = new b2_math_1.b2Vec2();
        this.m_motorImpulse = 0;
        this.m_lowerImpulse = 0;
        this.m_upperImpulse = 0;
        this.m_lowerTranslation = 0;
        this.m_upperTranslation = 0;
        this.m_maxMotorForce = 0;
        this.m_motorSpeed = 0;
        this.m_enableLimit = false;
        this.m_enableMotor = false;
        // Solver temp
        this.m_indexA = 0;
        this.m_indexB = 0;
        this.m_localCenterA = new b2_math_1.b2Vec2();
        this.m_localCenterB = new b2_math_1.b2Vec2();
        this.m_invMassA = 0;
        this.m_invMassB = 0;
        this.m_invIA = 0;
        this.m_invIB = 0;
        this.m_axis = new b2_math_1.b2Vec2();
        this.m_perp = new b2_math_1.b2Vec2();
        this.m_s1 = 0;
        this.m_s2 = 0;
        this.m_a1 = 0;
        this.m_a2 = 0;
        this.m_K = new b2_math_1.b2Mat22();
        this.m_translation = 0;
        this.m_axialMass = 0;
        this.m_localAnchorA.Copy((_a = def.localAnchorA) !== null && _a !== void 0 ? _a : b2_math_1.b2Vec2.ZERO);
        this.m_localAnchorB.Copy((_b = def.localAnchorB) !== null && _b !== void 0 ? _b : b2_math_1.b2Vec2.ZERO);
        b2_math_1.b2Vec2.Normalize((_c = def.localAxisA) !== null && _c !== void 0 ? _c : b2_math_1.b2Vec2.UNITX, this.m_localXAxisA);
        b2_math_1.b2Vec2.CrossOneVec2(this.m_localXAxisA, this.m_localYAxisA);
        this.m_referenceAngle = (_d = def.referenceAngle) !== null && _d !== void 0 ? _d : 0;
        this.m_lowerTranslation = (_e = def.lowerTranslation) !== null && _e !== void 0 ? _e : 0;
        this.m_upperTranslation = (_f = def.upperTranslation) !== null && _f !== void 0 ? _f : 0;
        // b2Assert(this.m_lowerTranslation <= this.m_upperTranslation);
        this.m_maxMotorForce = (_g = def.maxMotorForce) !== null && _g !== void 0 ? _g : 0;
        this.m_motorSpeed = (_h = def.motorSpeed) !== null && _h !== void 0 ? _h : 0;
        this.m_enableLimit = (_j = def.enableLimit) !== null && _j !== void 0 ? _j : false;
        this.m_enableMotor = (_k = def.enableMotor) !== null && _k !== void 0 ? _k : false;
    }
    /** @internal protected */ InitVelocityConstraints(data) {
        this.m_indexA = this.m_bodyA.m_islandIndex;
        this.m_indexB = this.m_bodyB.m_islandIndex;
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
        this.m_invMassA = this.m_bodyA.m_invMass;
        this.m_invMassB = this.m_bodyB.m_invMass;
        this.m_invIA = this.m_bodyA.m_invI;
        this.m_invIB = this.m_bodyB.m_invI;
        const cA = data.positions[this.m_indexA].c;
        const aA = data.positions[this.m_indexA].a;
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const cB = data.positions[this.m_indexB].c;
        const aB = data.positions[this.m_indexB].a;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const { qA, qB, lalcA, lalcB, rA, rB } = temp;
        qA.Set(aA);
        qB.Set(aB);
        // Compute the effective masses.
        b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), rA);
        b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), rB);
        const d = b2_math_1.b2Vec2.Subtract(cB, cA, temp.InitVelocityConstraints.d).Add(rB).Subtract(rA);
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        // Compute motor Jacobian and effective mass.
        b2_math_1.b2Rot.MultiplyVec2(qA, this.m_localXAxisA, this.m_axis);
        this.m_a1 = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Add(d, rA, b2_math_1.b2Vec2.s_t0), this.m_axis);
        this.m_a2 = b2_math_1.b2Vec2.Cross(rB, this.m_axis);
        this.m_axialMass = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;
        if (this.m_axialMass > 0) this.m_axialMass = 1 / this.m_axialMass;
        // Prismatic constraint.
        b2_math_1.b2Rot.MultiplyVec2(qA, this.m_localYAxisA, this.m_perp);
        this.m_s1 = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Add(d, rA, b2_math_1.b2Vec2.s_t0), this.m_perp);
        this.m_s2 = b2_math_1.b2Vec2.Cross(rB, this.m_perp);
        const k11 = mA + mB + iA * this.m_s1 * this.m_s1 + iB * this.m_s2 * this.m_s2;
        const k12 = iA * this.m_s1 + iB * this.m_s2;
        let k22 = iA + iB;
        if (k22 === 0) // For bodies with fixed rotation.
        k22 = 1;
        this.m_K.ex.Set(k11, k12);
        this.m_K.ey.Set(k12, k22);
        if (this.m_enableLimit) this.m_translation = b2_math_1.b2Vec2.Dot(this.m_axis, d);
        else {
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
        }
        if (!this.m_enableMotor) this.m_motorImpulse = 0;
        if (data.step.warmStarting) {
            // Account for variable time step.
            this.m_impulse.Scale(data.step.dtRatio);
            this.m_motorImpulse *= data.step.dtRatio;
            this.m_lowerImpulse *= data.step.dtRatio;
            this.m_upperImpulse *= data.step.dtRatio;
            const axialImpulse = this.m_motorImpulse + this.m_lowerImpulse - this.m_upperImpulse;
            const { P } = temp.InitVelocityConstraints;
            b2_math_1.b2Vec2.Scale(this.m_impulse.x, this.m_perp, P).AddScaled(axialImpulse, this.m_axis);
            const LA = this.m_impulse.x * this.m_s1 + this.m_impulse.y + axialImpulse * this.m_a1;
            const LB = this.m_impulse.x * this.m_s2 + this.m_impulse.y + axialImpulse * this.m_a2;
            vA.SubtractScaled(mA, P);
            wA -= iA * LA;
            vB.AddScaled(mB, P);
            wB += iB * LB;
        } else {
            this.m_impulse.SetZero();
            this.m_motorImpulse = 0;
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
        }
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolveVelocityConstraints(data) {
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        const { P, df } = temp.SolveVelocityConstraints;
        // Solve linear motor constraint.
        if (this.m_enableMotor) {
            const Cdot = b2_math_1.b2Vec2.Dot(this.m_axis, b2_math_1.b2Vec2.Subtract(vB, vA, b2_math_1.b2Vec2.s_t0)) + this.m_a2 * wB - this.m_a1 * wA;
            let impulse = this.m_axialMass * (this.m_motorSpeed - Cdot);
            const oldImpulse = this.m_motorImpulse;
            const maxImpulse = data.step.dt * this.m_maxMotorForce;
            this.m_motorImpulse = (0, b2_math_1.b2Clamp)(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
            impulse = this.m_motorImpulse - oldImpulse;
            b2_math_1.b2Vec2.Scale(impulse, this.m_axis, P);
            const LA = impulse * this.m_a1;
            const LB = impulse * this.m_a2;
            vA.SubtractScaled(mA, P);
            wA -= iA * LA;
            vB.AddScaled(mB, P);
            wB += iB * LB;
        }
        if (this.m_enableLimit) {
            // Lower limit
            {
                const C = this.m_translation - this.m_lowerTranslation;
                const Cdot = b2_math_1.b2Vec2.Dot(this.m_axis, b2_math_1.b2Vec2.Subtract(vB, vA, b2_math_1.b2Vec2.s_t0)) + this.m_a2 * wB - this.m_a1 * wA;
                let impulse = -this.m_axialMass * (Cdot + Math.max(C, 0) * data.step.inv_dt);
                const oldImpulse = this.m_lowerImpulse;
                this.m_lowerImpulse = Math.max(this.m_lowerImpulse + impulse, 0);
                impulse = this.m_lowerImpulse - oldImpulse;
                b2_math_1.b2Vec2.Scale(impulse, this.m_axis, P);
                const LA = impulse * this.m_a1;
                const LB = impulse * this.m_a2;
                vA.SubtractScaled(mA, P);
                wA -= iA * LA;
                vB.AddScaled(mB, P);
                wB += iB * LB;
            }
            // Upper limit
            // Note: signs are flipped to keep C positive when the constraint is satisfied.
            // This also keeps the impulse positive when the limit is active.
            {
                const C = this.m_upperTranslation - this.m_translation;
                const Cdot = b2_math_1.b2Vec2.Dot(this.m_axis, b2_math_1.b2Vec2.Subtract(vA, vB, b2_math_1.b2Vec2.s_t0)) + this.m_a1 * wA - this.m_a2 * wB;
                let impulse = -this.m_axialMass * (Cdot + Math.max(C, 0) * data.step.inv_dt);
                const oldImpulse = this.m_upperImpulse;
                this.m_upperImpulse = Math.max(this.m_upperImpulse + impulse, 0);
                impulse = this.m_upperImpulse - oldImpulse;
                b2_math_1.b2Vec2.Scale(impulse, this.m_axis, P);
                const LA = impulse * this.m_a1;
                const LB = impulse * this.m_a2;
                vA.AddScaled(mA, P);
                wA += iA * LA;
                vB.SubtractScaled(mB, P);
                wB -= iB * LB;
            }
        }
        // Solve the prismatic constraint in block form.
        {
            const Cdot_x = b2_math_1.b2Vec2.Dot(this.m_perp, b2_math_1.b2Vec2.Subtract(vB, vA, b2_math_1.b2Vec2.s_t0)) + this.m_s2 * wB - this.m_s1 * wA;
            const Cdot_y = wB - wA;
            this.m_K.Solve(-Cdot_x, -Cdot_y, df);
            this.m_impulse.Add(df);
            b2_math_1.b2Vec2.Scale(df.x, this.m_perp, P);
            const LA = df.x * this.m_s1 + df.y;
            const LB = df.x * this.m_s2 + df.y;
            vA.SubtractScaled(mA, P);
            wA -= iA * LA;
            vB.AddScaled(mB, P);
            wB += iB * LB;
        }
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    /**
     * A velocity based solver computes reaction forces(impulses) using the velocity constraint solver.Under this context,
     * the position solver is not there to resolve forces.It is only there to cope with integration error.
     *
     * Therefore, the pseudo impulses in the position solver do not have any physical meaning.Thus it is okay if they suck.
     *
     * We could take the active state from the velocity solver.However, the joint might push past the limit when the velocity
     * solver indicates the limit is inactive.
     *
     * @internal protected
     */ SolvePositionConstraints(data) {
        const cA = data.positions[this.m_indexA].c;
        let aA = data.positions[this.m_indexA].a;
        const cB = data.positions[this.m_indexB].c;
        let aB = data.positions[this.m_indexB].a;
        const { qA, qB, lalcA, lalcB, rA, rB } = temp;
        qA.Set(aA);
        qB.Set(aB);
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        // Compute fresh Jacobians
        const { d, impulse, P } = temp.SolvePositionConstraints;
        b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), rA);
        b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), rB);
        b2_math_1.b2Vec2.Add(cB, rB, d).Subtract(cA).Subtract(rA);
        const axis = b2_math_1.b2Rot.MultiplyVec2(qA, this.m_localXAxisA, this.m_axis);
        const a1 = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Add(d, rA, b2_math_1.b2Vec2.s_t0), axis);
        const a2 = b2_math_1.b2Vec2.Cross(rB, axis);
        const perp = b2_math_1.b2Rot.MultiplyVec2(qA, this.m_localYAxisA, this.m_perp);
        const s1 = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Add(d, rA, b2_math_1.b2Vec2.s_t0), perp);
        const s2 = b2_math_1.b2Vec2.Cross(rB, perp);
        const C1_x = b2_math_1.b2Vec2.Dot(perp, d);
        const C1_y = aB - aA - this.m_referenceAngle;
        let linearError = Math.abs(C1_x);
        const angularError = Math.abs(C1_y);
        let active = false;
        let C2 = 0;
        if (this.m_enableLimit) {
            const translation = b2_math_1.b2Vec2.Dot(axis, d);
            if (Math.abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b2_common_1.b2_linearSlop) {
                C2 = translation;
                linearError = Math.max(linearError, Math.abs(translation));
                active = true;
            } else if (translation <= this.m_lowerTranslation) {
                C2 = Math.min(translation - this.m_lowerTranslation, 0);
                linearError = Math.max(linearError, this.m_lowerTranslation - translation);
                active = true;
            } else if (translation >= this.m_upperTranslation) {
                C2 = Math.max(translation - this.m_upperTranslation, 0);
                linearError = Math.max(linearError, translation - this.m_upperTranslation);
                active = true;
            }
        }
        if (active) {
            const k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
            const k12 = iA * s1 + iB * s2;
            const k13 = iA * s1 * a1 + iB * s2 * a2;
            let k22 = iA + iB;
            if (k22 === 0) // For fixed rotation
            k22 = 1;
            const k23 = iA * a1 + iB * a2;
            const k33 = mA + mB + iA * a1 * a1 + iB * a2 * a2;
            const K = temp.K3;
            K.ex.Set(k11, k12, k13);
            K.ey.Set(k12, k22, k23);
            K.ez.Set(k13, k23, k33);
            K.Solve33(-C1_x, -C1_y, -C2, impulse);
        } else {
            const k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
            const k12 = iA * s1 + iB * s2;
            let k22 = iA + iB;
            if (k22 === 0) k22 = 1;
            const K = temp.K2;
            K.ex.Set(k11, k12);
            K.ey.Set(k12, k22);
            const impulse1 = K.Solve(-C1_x, -C1_y, temp.SolvePositionConstraints.impulse1);
            impulse.x = impulse1.x;
            impulse.y = impulse1.y;
            impulse.z = 0;
        }
        b2_math_1.b2Vec2.Scale(impulse.x, perp, P).AddScaled(impulse.z, axis);
        const LA = impulse.x * s1 + impulse.y + impulse.z * a1;
        const LB = impulse.x * s2 + impulse.y + impulse.z * a2;
        cA.SubtractScaled(mA, P);
        aA -= iA * LA;
        cB.AddScaled(mB, P);
        aB += iB * LB;
        data.positions[this.m_indexA].a = aA;
        data.positions[this.m_indexB].a = aB;
        return linearError <= b2_common_1.b2_linearSlop && angularError <= b2_common_1.b2_angularSlop;
    }
    GetAnchorA(out) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
    }
    GetAnchorB(out) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
    }
    GetReactionForce(inv_dt, out) {
        const f = this.m_motorImpulse + this.m_lowerImpulse - this.m_upperImpulse;
        out.x = inv_dt * (this.m_impulse.x * this.m_perp.x + f * this.m_axis.x);
        out.y = inv_dt * (this.m_impulse.x * this.m_perp.y + f * this.m_axis.y);
        return out;
    }
    GetReactionTorque(inv_dt) {
        return inv_dt * this.m_impulse.y;
    }
    /** The local anchor point relative to bodyA's origin. */ GetLocalAnchorA() {
        return this.m_localAnchorA;
    }
    /** The local anchor point relative to bodyB's origin. */ GetLocalAnchorB() {
        return this.m_localAnchorB;
    }
    /** The local joint axis relative to bodyA. */ GetLocalAxisA() {
        return this.m_localXAxisA;
    }
    /** Get the reference angle. */ GetReferenceAngle() {
        return this.m_referenceAngle;
    }
    /** Get the current joint translation, usually in meters. */ GetJointTranslation() {
        const { pA, pB, axis, d } = temp.GetJointTranslation;
        this.m_bodyA.GetWorldPoint(this.m_localAnchorA, pA);
        this.m_bodyB.GetWorldPoint(this.m_localAnchorB, pB);
        b2_math_1.b2Vec2.Subtract(pB, pA, d);
        this.m_bodyA.GetWorldVector(this.m_localXAxisA, axis);
        const translation = b2_math_1.b2Vec2.Dot(d, axis);
        return translation;
    }
    /** Get the current joint translation speed, usually in meters per second. */ GetJointSpeed() {
        const bA = this.m_bodyA;
        const bB = this.m_bodyB;
        const { lalcA, lalcB, rA, rB } = temp;
        b2_math_1.b2Rot.MultiplyVec2(bA.m_xf.q, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, bA.m_sweep.localCenter, lalcA), rA);
        b2_math_1.b2Rot.MultiplyVec2(bB.m_xf.q, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, bB.m_sweep.localCenter, lalcB), rB);
        const p1 = b2_math_1.b2Vec2.Add(bA.m_sweep.c, rA, b2_math_1.b2Vec2.s_t0);
        const p2 = b2_math_1.b2Vec2.Add(bB.m_sweep.c, rB, b2_math_1.b2Vec2.s_t1);
        const d = b2_math_1.b2Vec2.Subtract(p2, p1, b2_math_1.b2Vec2.s_t2);
        const axis = b2_math_1.b2Rot.MultiplyVec2(bA.m_xf.q, this.m_localXAxisA, this.m_axis);
        const vA = bA.m_linearVelocity;
        const vB = bB.m_linearVelocity;
        const wA = bA.m_angularVelocity;
        const wB = bB.m_angularVelocity;
        const speed = b2_math_1.b2Vec2.Dot(d, b2_math_1.b2Vec2.CrossScalarVec2(wA, axis, b2_math_1.b2Vec2.s_t0)) + b2_math_1.b2Vec2.Dot(axis, b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, rA, b2_math_1.b2Vec2.s_t1), b2_math_1.b2Vec2.s_t0));
        return speed;
    }
    /** Is the joint limit enabled? */ IsLimitEnabled() {
        return this.m_enableLimit;
    }
    /** Enable/disable the joint limit. */ EnableLimit(flag) {
        if (flag !== this.m_enableLimit) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_enableLimit = flag;
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
        }
        return flag;
    }
    /** Get the lower joint limit, usually in meters. */ GetLowerLimit() {
        return this.m_lowerTranslation;
    }
    /** Get the upper joint limit, usually in meters. */ GetUpperLimit() {
        return this.m_upperTranslation;
    }
    /** Set the joint limits, usually in meters. */ SetLimits(lower, upper) {
        // DEBUG: b2Assert(lower <= upper);
        if (lower !== this.m_lowerTranslation || upper !== this.m_upperTranslation) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_lowerTranslation = lower;
            this.m_upperTranslation = upper;
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
        }
    }
    /** Is the joint motor enabled? */ IsMotorEnabled() {
        return this.m_enableMotor;
    }
    /** Enable/disable the joint motor. */ EnableMotor(flag) {
        if (flag !== this.m_enableMotor) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_enableMotor = flag;
        }
        return flag;
    }
    /** Set the motor speed, usually in meters per second. */ SetMotorSpeed(speed) {
        if (speed !== this.m_motorSpeed) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_motorSpeed = speed;
        }
        return speed;
    }
    /** Get the motor speed, usually in meters per second. */ GetMotorSpeed() {
        return this.m_motorSpeed;
    }
    /** Set the maximum motor force, usually in N. */ SetMaxMotorForce(force) {
        if (force !== this.m_maxMotorForce) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_maxMotorForce = force;
        }
    }
    /** Get the maximum motor force, usually in N. */ GetMaxMotorForce() {
        return this.m_maxMotorForce;
    }
    /** Get the current motor force given the inverse time step, usually in N. */ GetMotorForce(inv_dt) {
        return inv_dt * this.m_motorImpulse;
    }
    Draw(draw) {
        const { p1, p2, pA, pB, axis } = temp.Draw;
        const xfA = this.m_bodyA.GetTransform();
        const xfB = this.m_bodyB.GetTransform();
        b2_math_1.b2Transform.MultiplyVec2(xfA, this.m_localAnchorA, pA);
        b2_math_1.b2Transform.MultiplyVec2(xfB, this.m_localAnchorB, pB);
        b2_math_1.b2Rot.MultiplyVec2(xfA.q, this.m_localXAxisA, axis);
        draw.DrawSegment(pA, pB, b2_draw_1.debugColors.joint5);
        if (this.m_enableLimit) {
            const { lower, upper, perp } = temp.Draw;
            b2_math_1.b2Vec2.AddScaled(pA, this.m_lowerTranslation, axis, lower);
            b2_math_1.b2Vec2.AddScaled(pA, this.m_upperTranslation, axis, upper);
            b2_math_1.b2Rot.MultiplyVec2(xfA.q, this.m_localYAxisA, perp);
            draw.DrawSegment(lower, upper, b2_draw_1.debugColors.joint1);
            draw.DrawSegment(b2_math_1.b2Vec2.SubtractScaled(lower, 0.5, perp, p1), b2_math_1.b2Vec2.AddScaled(lower, 0.5, perp, p2), b2_draw_1.debugColors.joint2);
            draw.DrawSegment(b2_math_1.b2Vec2.SubtractScaled(upper, 0.5, perp, p1), b2_math_1.b2Vec2.AddScaled(upper, 0.5, perp, p2), b2_draw_1.debugColors.joint3);
        } else draw.DrawSegment(b2_math_1.b2Vec2.Subtract(pA, axis, p1), b2_math_1.b2Vec2.Add(pA, axis, p2), b2_draw_1.debugColors.joint1);
        draw.DrawPoint(pA, 5, b2_draw_1.debugColors.joint1);
        draw.DrawPoint(pB, 5, b2_draw_1.debugColors.joint4);
    }
}
exports.b2PrismaticJoint = b2PrismaticJoint;

},{"718a6a2a46ef738b":"a1SE4","86fa8c50ea385114":"cc6XX","664187fd0f8fac4e":"3MJcc","4b25889e9985d60f":"kS3Lm"}],"8PGWT":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2PulleyJoint = exports.b2PulleyJointDef = exports.b2_minPulleyLength = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert, b2_epsilon } from "../common/b2_common";
const b2_common_1 = require("c0ea37b34102a355");
const b2_draw_1 = require("1de1bce79e586ca5");
const b2_math_1 = require("9d8465f5ce95f7b7");
const b2_joint_1 = require("d59a79c4fc4b9c7f");
// Pulley:
// length1 = norm(p1 - s1)
// length2 = norm(p2 - s2)
// C0 = (length1 + ratio * length2)_initial
// C = C0 - (length1 + ratio * length2)
// u1 = (p1 - s1) / norm(p1 - s1)
// u2 = (p2 - s2) / norm(p2 - s2)
// Cdot = -dot(u1, v1 + cross(w1, r1)) - ratio * dot(u2, v2 + cross(w2, r2))
// J = -[u1 cross(r1, u1) ratio * u2  ratio * cross(r2, u2)]
// K = J * invM * JT
//   = invMass1 + invI1 * cross(r1, u1)^2 + ratio^2 * (invMass2 + invI2 * cross(r2, u2)^2)
exports.b2_minPulleyLength = 2;
const temp = {
    qA: new b2_math_1.b2Rot(),
    qB: new b2_math_1.b2Rot(),
    lalcA: new b2_math_1.b2Vec2(),
    lalcB: new b2_math_1.b2Vec2(),
    p: new b2_math_1.b2Vec2(),
    PA: new b2_math_1.b2Vec2(),
    PB: new b2_math_1.b2Vec2(),
    vpA: new b2_math_1.b2Vec2(),
    vpB: new b2_math_1.b2Vec2(),
    pA: new b2_math_1.b2Vec2(),
    pB: new b2_math_1.b2Vec2()
};
/**
 * Pulley joint definition. This requires two ground anchors,
 * two dynamic body anchor points, and a pulley ratio.
 */ class b2PulleyJointDef extends b2_joint_1.b2JointDef {
    constructor(){
        super(b2_joint_1.b2JointType.e_pulleyJoint);
        /** The first ground anchor in world coordinates. This point never moves. */ this.groundAnchorA = new b2_math_1.b2Vec2(-1, 1);
        /** The second ground anchor in world coordinates. This point never moves. */ this.groundAnchorB = new b2_math_1.b2Vec2(1, 1);
        /** The local anchor point relative to bodyA's origin. */ this.localAnchorA = new b2_math_1.b2Vec2(-1, 0);
        /** The local anchor point relative to bodyB's origin. */ this.localAnchorB = new b2_math_1.b2Vec2(1, 0);
        /** The a reference length for the segment attached to bodyA. */ this.lengthA = 0;
        /** The a reference length for the segment attached to bodyB. */ this.lengthB = 0;
        /** The pulley ratio, used to simulate a block-and-tackle. */ this.ratio = 1;
        this.collideConnected = true;
    }
    /** Initialize the bodies, anchors, lengths, max lengths, and ratio using the world anchors. */ Initialize(bA, bB, groundA, groundB, anchorA, anchorB, r) {
        this.bodyA = bA;
        this.bodyB = bB;
        this.groundAnchorA.Copy(groundA);
        this.groundAnchorB.Copy(groundB);
        this.bodyA.GetLocalPoint(anchorA, this.localAnchorA);
        this.bodyB.GetLocalPoint(anchorB, this.localAnchorB);
        this.lengthA = b2_math_1.b2Vec2.Distance(anchorA, groundA);
        this.lengthB = b2_math_1.b2Vec2.Distance(anchorB, groundB);
        this.ratio = r;
    // DEBUG: b2Assert(this.ratio > b2_epsilon);
    }
}
exports.b2PulleyJointDef = b2PulleyJointDef;
const defaultGroundAnchorA = new b2_math_1.b2Vec2(-1, 1);
const defaultGroundAnchorB = b2_math_1.b2Vec2.UNITX;
const defaultLocalAnchorA = new b2_math_1.b2Vec2(-1, 0);
const defaultLocalAnchorB = b2_math_1.b2Vec2.UNITX;
/**
 * The pulley joint is connected to two bodies and two fixed ground points.
 * The pulley supports a ratio such that:
 * length1 + ratio * length2 <= constant
 * Yes, the force transmitted is scaled by the ratio.
 * Warning: the pulley joint can get a bit squirrelly by itself. They often
 * work better when combined with prismatic joints. You should also cover the
 * the anchor points with static shapes to prevent one side from going to
 * zero length.
 */ class b2PulleyJoint extends b2_joint_1.b2Joint {
    /** @internal protected */ constructor(def){
        var _a, _b, _c, _d, _e, _f, _g;
        super(def);
        this.m_groundAnchorA = new b2_math_1.b2Vec2();
        this.m_groundAnchorB = new b2_math_1.b2Vec2();
        this.m_lengthA = 0;
        this.m_lengthB = 0;
        // Solver shared
        this.m_localAnchorA = new b2_math_1.b2Vec2();
        this.m_localAnchorB = new b2_math_1.b2Vec2();
        this.m_constant = 0;
        this.m_ratio = 0;
        this.m_impulse = 0;
        // Solver temp
        this.m_indexA = 0;
        this.m_indexB = 0;
        this.m_uA = new b2_math_1.b2Vec2();
        this.m_uB = new b2_math_1.b2Vec2();
        this.m_rA = new b2_math_1.b2Vec2();
        this.m_rB = new b2_math_1.b2Vec2();
        this.m_localCenterA = new b2_math_1.b2Vec2();
        this.m_localCenterB = new b2_math_1.b2Vec2();
        this.m_invMassA = 0;
        this.m_invMassB = 0;
        this.m_invIA = 0;
        this.m_invIB = 0;
        this.m_mass = 0;
        this.m_groundAnchorA.Copy((_a = def.groundAnchorA) !== null && _a !== void 0 ? _a : defaultGroundAnchorA);
        this.m_groundAnchorB.Copy((_b = def.groundAnchorB) !== null && _b !== void 0 ? _b : defaultGroundAnchorB);
        this.m_localAnchorA.Copy((_c = def.localAnchorA) !== null && _c !== void 0 ? _c : defaultLocalAnchorA);
        this.m_localAnchorB.Copy((_d = def.localAnchorB) !== null && _d !== void 0 ? _d : defaultLocalAnchorB);
        this.m_lengthA = (_e = def.lengthA) !== null && _e !== void 0 ? _e : 0;
        this.m_lengthB = (_f = def.lengthB) !== null && _f !== void 0 ? _f : 0;
        // DEBUG: b2Assert((def.ratio ?? 1) !== 0);
        this.m_ratio = (_g = def.ratio) !== null && _g !== void 0 ? _g : 1;
        this.m_constant = this.m_lengthA + this.m_ratio * this.m_lengthB;
        this.m_impulse = 0;
    }
    /** @internal protected */ InitVelocityConstraints(data) {
        this.m_indexA = this.m_bodyA.m_islandIndex;
        this.m_indexB = this.m_bodyB.m_islandIndex;
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
        this.m_invMassA = this.m_bodyA.m_invMass;
        this.m_invMassB = this.m_bodyB.m_invMass;
        this.m_invIA = this.m_bodyA.m_invI;
        this.m_invIB = this.m_bodyB.m_invI;
        const cA = data.positions[this.m_indexA].c;
        const aA = data.positions[this.m_indexA].a;
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const cB = data.positions[this.m_indexB].c;
        const aB = data.positions[this.m_indexB].a;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const { qA, qB, lalcA, lalcB } = temp;
        qA.Set(aA);
        qB.Set(aB);
        b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), this.m_rA);
        b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), this.m_rB);
        // Get the pulley axes.
        b2_math_1.b2Vec2.Add(cA, this.m_rA, this.m_uA).Subtract(this.m_groundAnchorA);
        b2_math_1.b2Vec2.Add(cB, this.m_rB, this.m_uB).Subtract(this.m_groundAnchorB);
        const lengthA = this.m_uA.Length();
        const lengthB = this.m_uB.Length();
        if (lengthA > 10 * b2_common_1.b2_linearSlop) this.m_uA.Scale(1 / lengthA);
        else this.m_uA.SetZero();
        if (lengthB > 10 * b2_common_1.b2_linearSlop) this.m_uB.Scale(1 / lengthB);
        else this.m_uB.SetZero();
        // Compute effective mass.
        const ruA = b2_math_1.b2Vec2.Cross(this.m_rA, this.m_uA);
        const ruB = b2_math_1.b2Vec2.Cross(this.m_rB, this.m_uB);
        const mA = this.m_invMassA + this.m_invIA * ruA * ruA;
        const mB = this.m_invMassB + this.m_invIB * ruB * ruB;
        this.m_mass = mA + this.m_ratio * this.m_ratio * mB;
        if (this.m_mass > 0) this.m_mass = 1 / this.m_mass;
        if (data.step.warmStarting) {
            // Scale impulses to support variable time steps.
            this.m_impulse *= data.step.dtRatio;
            // Warm starting.
            const { PA, PB } = temp;
            b2_math_1.b2Vec2.Scale(-this.m_impulse, this.m_uA, PA);
            b2_math_1.b2Vec2.Scale(-this.m_ratio * this.m_impulse, this.m_uB, PB);
            vA.AddScaled(this.m_invMassA, PA);
            wA += this.m_invIA * b2_math_1.b2Vec2.Cross(this.m_rA, PA);
            vB.AddScaled(this.m_invMassB, PB);
            wB += this.m_invIB * b2_math_1.b2Vec2.Cross(this.m_rB, PB);
        } else this.m_impulse = 0;
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolveVelocityConstraints(data) {
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const { PA, PB, vpA, vpB } = temp;
        b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, this.m_rA, vpA);
        b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, this.m_rB, vpB);
        const Cdot = -b2_math_1.b2Vec2.Dot(this.m_uA, vpA) - this.m_ratio * b2_math_1.b2Vec2.Dot(this.m_uB, vpB);
        const impulse = -this.m_mass * Cdot;
        this.m_impulse += impulse;
        b2_math_1.b2Vec2.Scale(-impulse, this.m_uA, PA);
        b2_math_1.b2Vec2.Scale(-this.m_ratio * impulse, this.m_uB, PB);
        vA.AddScaled(this.m_invMassA, PA);
        wA += this.m_invIA * b2_math_1.b2Vec2.Cross(this.m_rA, PA);
        vB.AddScaled(this.m_invMassB, PB);
        wB += this.m_invIB * b2_math_1.b2Vec2.Cross(this.m_rB, PB);
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolvePositionConstraints(data) {
        const cA = data.positions[this.m_indexA].c;
        let aA = data.positions[this.m_indexA].a;
        const cB = data.positions[this.m_indexB].c;
        let aB = data.positions[this.m_indexB].a;
        const { qA, qB, lalcA, lalcB, PA, PB } = temp;
        qA.Set(aA);
        qB.Set(aB);
        const rA = b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), this.m_rA);
        const rB = b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), this.m_rB);
        // Get the pulley axes.
        const uA = b2_math_1.b2Vec2.Add(cA, rA, this.m_uA).Subtract(this.m_groundAnchorA);
        const uB = b2_math_1.b2Vec2.Add(cB, rB, this.m_uB).Subtract(this.m_groundAnchorB);
        const lengthA = uA.Length();
        const lengthB = uB.Length();
        if (lengthA > 10 * b2_common_1.b2_linearSlop) uA.Scale(1 / lengthA);
        else uA.SetZero();
        if (lengthB > 10 * b2_common_1.b2_linearSlop) uB.Scale(1 / lengthB);
        else uB.SetZero();
        // Compute effective mass.
        const ruA = b2_math_1.b2Vec2.Cross(rA, uA);
        const ruB = b2_math_1.b2Vec2.Cross(rB, uB);
        const mA = this.m_invMassA + this.m_invIA * ruA * ruA;
        const mB = this.m_invMassB + this.m_invIB * ruB * ruB;
        let mass = mA + this.m_ratio * this.m_ratio * mB;
        if (mass > 0) mass = 1 / mass;
        const C = this.m_constant - lengthA - this.m_ratio * lengthB;
        const linearError = Math.abs(C);
        const impulse = -mass * C;
        b2_math_1.b2Vec2.Scale(-impulse, uA, PA);
        b2_math_1.b2Vec2.Scale(-this.m_ratio * impulse, uB, PB);
        cA.AddScaled(this.m_invMassA, PA);
        aA += this.m_invIA * b2_math_1.b2Vec2.Cross(rA, PA);
        cB.AddScaled(this.m_invMassB, PB);
        aB += this.m_invIB * b2_math_1.b2Vec2.Cross(rB, PB);
        data.positions[this.m_indexA].a = aA;
        data.positions[this.m_indexB].a = aB;
        return linearError < b2_common_1.b2_linearSlop;
    }
    GetAnchorA(out) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
    }
    GetAnchorB(out) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
    }
    GetReactionForce(inv_dt, out) {
        out.x = inv_dt * this.m_impulse * this.m_uB.x;
        out.y = inv_dt * this.m_impulse * this.m_uB.y;
        return out;
    }
    GetReactionTorque(_inv_dt) {
        return 0;
    }
    /** Get the first ground anchor. */ GetGroundAnchorA() {
        return this.m_groundAnchorA;
    }
    /** Get the second ground anchor. */ GetGroundAnchorB() {
        return this.m_groundAnchorB;
    }
    /** Get the current length of the segment attached to bodyA. */ GetLengthA() {
        return this.m_lengthA;
    }
    /** Get the current length of the segment attached to bodyB. */ GetLengthB() {
        return this.m_lengthB;
    }
    /** Get the pulley ratio. */ GetRatio() {
        return this.m_ratio;
    }
    /** Get the current length of the segment attached to bodyA. */ GetCurrentLengthA() {
        const p = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, temp.p);
        const s = this.m_groundAnchorA;
        return b2_math_1.b2Vec2.Distance(p, s);
    }
    /** Get the current length of the segment attached to bodyB. */ GetCurrentLengthB() {
        const p = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, temp.p);
        const s = this.m_groundAnchorB;
        return b2_math_1.b2Vec2.Distance(p, s);
    }
    ShiftOrigin(newOrigin) {
        this.m_groundAnchorA.Subtract(newOrigin);
        this.m_groundAnchorB.Subtract(newOrigin);
    }
    Draw(draw) {
        const p1 = this.GetAnchorA(temp.pA);
        const p2 = this.GetAnchorB(temp.pB);
        const s1 = this.GetGroundAnchorA();
        const s2 = this.GetGroundAnchorB();
        draw.DrawSegment(s1, p1, b2_draw_1.debugColors.joint6);
        draw.DrawSegment(s2, p2, b2_draw_1.debugColors.joint6);
        draw.DrawSegment(s1, s2, b2_draw_1.debugColors.joint6);
    }
}
exports.b2PulleyJoint = b2PulleyJoint;

},{"c0ea37b34102a355":"a1SE4","1de1bce79e586ca5":"cc6XX","9d8465f5ce95f7b7":"3MJcc","d59a79c4fc4b9c7f":"kS3Lm"}],"drEGG":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2RevoluteJoint = exports.b2RevoluteJointDef = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_common_1 = require("fb8e1d213810bcb1");
const b2_draw_1 = require("60b1b67d5fe3bcb7");
const b2_math_1 = require("bef5f7c0f086941e");
const b2_joint_1 = require("1ae6d0af87a0e739");
// Point-to-point constraint
// C = p2 - p1
// Cdot = v2 - v1
//      = v2 + cross(w2, r2) - v1 - cross(w1, r1)
// J = [-I -r1_skew I r2_skew ]
// Identity used:
// w k % (rx i + ry j) = w * (-ry i + rx j)
// Motor constraint
// Cdot = w2 - w1
// J = [0 0 -1 0 0 1]
// K = invI1 + invI2
const temp = {
    qA: new b2_math_1.b2Rot(),
    qB: new b2_math_1.b2Rot(),
    lalcA: new b2_math_1.b2Vec2(),
    lalcB: new b2_math_1.b2Vec2(),
    P: new b2_math_1.b2Vec2(),
    Cdot: new b2_math_1.b2Vec2(),
    C: new b2_math_1.b2Vec2(),
    impulse: new b2_math_1.b2Vec2(),
    p2: new b2_math_1.b2Vec2(),
    r: new b2_math_1.b2Vec2(),
    pA: new b2_math_1.b2Vec2(),
    pB: new b2_math_1.b2Vec2(),
    rlo: new b2_math_1.b2Vec2(),
    rhi: new b2_math_1.b2Vec2()
};
/**
 * Revolute joint definition. This requires defining an anchor point where the
 * bodies are joined. The definition uses local anchor points so that the
 * initial configuration can violate the constraint slightly. You also need to
 * specify the initial relative angle for joint limits. This helps when saving
 * and loading a game.
 * The local anchor points are measured from the body's origin
 * rather than the center of mass because:
 * 1. you might not know where the center of mass will be.
 * 2. if you add/remove shapes from a body and recompute the mass,
 * the joints will be broken.
 */ class b2RevoluteJointDef extends b2_joint_1.b2JointDef {
    constructor(){
        super(b2_joint_1.b2JointType.e_revoluteJoint);
        /** The local anchor point relative to bodyA's origin. */ this.localAnchorA = new b2_math_1.b2Vec2();
        /** The local anchor point relative to bodyB's origin. */ this.localAnchorB = new b2_math_1.b2Vec2();
        /** The bodyB angle minus bodyA angle in the reference state (radians). */ this.referenceAngle = 0;
        /** A flag to enable joint limits. */ this.enableLimit = false;
        /** The lower angle for the joint limit (radians). */ this.lowerAngle = 0;
        /** The upper angle for the joint limit (radians). */ this.upperAngle = 0;
        /** A flag to enable the joint motor. */ this.enableMotor = false;
        /** The desired motor speed. Usually in radians per second. */ this.motorSpeed = 0;
        /**
         * The maximum motor torque used to achieve the desired motor speed.
         * Usually in N-m.
         */ this.maxMotorTorque = 0;
    }
    /** Initialize the bodies, anchors, and reference angle using a world anchor point. */ Initialize(bA, bB, anchor) {
        this.bodyA = bA;
        this.bodyB = bB;
        this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
        this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
    }
}
exports.b2RevoluteJointDef = b2RevoluteJointDef;
/**
 * A revolute joint constrains two bodies to share a common point while they
 * are free to rotate about the point. The relative rotation about the shared
 * point is the joint angle. You can limit the relative rotation with
 * a joint limit that specifies a lower and upper angle. You can use a motor
 * to drive the relative rotation about the shared point. A maximum motor torque
 * is provided so that infinite forces are not generated.
 */ class b2RevoluteJoint extends b2_joint_1.b2Joint {
    /** @internal protected */ constructor(def){
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        super(def);
        // Solver shared
        /** @internal protected */ this.m_localAnchorA = new b2_math_1.b2Vec2();
        /** @internal protected */ this.m_localAnchorB = new b2_math_1.b2Vec2();
        this.m_impulse = new b2_math_1.b2Vec2();
        this.m_motorImpulse = 0;
        this.m_lowerImpulse = 0;
        this.m_upperImpulse = 0;
        this.m_enableMotor = false;
        this.m_maxMotorTorque = 0;
        this.m_motorSpeed = 0;
        this.m_enableLimit = false;
        /** @internal protected */ this.m_referenceAngle = 0;
        this.m_lowerAngle = 0;
        this.m_upperAngle = 0;
        // Solver temp
        this.m_indexA = 0;
        this.m_indexB = 0;
        this.m_rA = new b2_math_1.b2Vec2();
        this.m_rB = new b2_math_1.b2Vec2();
        this.m_localCenterA = new b2_math_1.b2Vec2();
        this.m_localCenterB = new b2_math_1.b2Vec2();
        this.m_invMassA = 0;
        this.m_invMassB = 0;
        this.m_invIA = 0;
        this.m_invIB = 0;
        this.m_K = new b2_math_1.b2Mat22();
        this.m_angle = 0;
        this.m_axialMass = 0;
        this.m_localAnchorA.Copy((_a = def.localAnchorA) !== null && _a !== void 0 ? _a : b2_math_1.b2Vec2.ZERO);
        this.m_localAnchorB.Copy((_b = def.localAnchorB) !== null && _b !== void 0 ? _b : b2_math_1.b2Vec2.ZERO);
        this.m_referenceAngle = (_c = def.referenceAngle) !== null && _c !== void 0 ? _c : 0;
        this.m_impulse.SetZero();
        this.m_lowerAngle = (_d = def.lowerAngle) !== null && _d !== void 0 ? _d : 0;
        this.m_upperAngle = (_e = def.upperAngle) !== null && _e !== void 0 ? _e : 0;
        this.m_maxMotorTorque = (_f = def.maxMotorTorque) !== null && _f !== void 0 ? _f : 0;
        this.m_motorSpeed = (_g = def.motorSpeed) !== null && _g !== void 0 ? _g : 0;
        this.m_enableLimit = (_h = def.enableLimit) !== null && _h !== void 0 ? _h : false;
        this.m_enableMotor = (_j = def.enableMotor) !== null && _j !== void 0 ? _j : false;
    }
    InitVelocityConstraints(data) {
        this.m_indexA = this.m_bodyA.m_islandIndex;
        this.m_indexB = this.m_bodyB.m_islandIndex;
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
        this.m_invMassA = this.m_bodyA.m_invMass;
        this.m_invMassB = this.m_bodyB.m_invMass;
        this.m_invIA = this.m_bodyA.m_invI;
        this.m_invIB = this.m_bodyB.m_invI;
        const aA = data.positions[this.m_indexA].a;
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const aB = data.positions[this.m_indexB].a;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const { qA, qB, lalcA, lalcB } = temp;
        qA.Set(aA);
        qB.Set(aB);
        b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), this.m_rA);
        b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), this.m_rB);
        // J = [-I -r1_skew I r2_skew]
        // r_skew = [-ry; rx]
        // Matlab
        // K = [ mA+r1y^2*iA+mB+r2y^2*iB,  -r1y*iA*r1x-r2y*iB*r2x]
        //     [  -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB]
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        this.m_K.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;
        this.m_K.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;
        this.m_K.ex.y = this.m_K.ey.x;
        this.m_K.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;
        this.m_axialMass = iA + iB;
        let fixedRotation;
        if (this.m_axialMass > 0) {
            this.m_axialMass = 1 / this.m_axialMass;
            fixedRotation = false;
        } else fixedRotation = true;
        this.m_angle = aB - aA - this.m_referenceAngle;
        if (this.m_enableLimit === false || fixedRotation) {
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
        }
        if (this.m_enableMotor === false || fixedRotation) this.m_motorImpulse = 0;
        if (data.step.warmStarting) {
            // Scale impulses to support a variable time step.
            this.m_impulse.Scale(data.step.dtRatio);
            this.m_motorImpulse *= data.step.dtRatio;
            this.m_lowerImpulse *= data.step.dtRatio;
            this.m_upperImpulse *= data.step.dtRatio;
            const axialImpulse = this.m_motorImpulse + this.m_lowerImpulse - this.m_upperImpulse;
            const P = temp.P.Set(this.m_impulse.x, this.m_impulse.y);
            vA.SubtractScaled(mA, P);
            wA -= iA * (b2_math_1.b2Vec2.Cross(this.m_rA, P) + axialImpulse);
            vB.AddScaled(mB, P);
            wB += iB * (b2_math_1.b2Vec2.Cross(this.m_rB, P) + axialImpulse);
        } else {
            this.m_impulse.SetZero();
            this.m_motorImpulse = 0;
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
        }
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    SolveVelocityConstraints(data) {
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        const fixedRotation = iA + iB === 0;
        // Solve motor constraint.
        if (this.m_enableMotor && !fixedRotation) {
            const Cdot = wB - wA - this.m_motorSpeed;
            let impulse = -this.m_axialMass * Cdot;
            const oldImpulse = this.m_motorImpulse;
            const maxImpulse = data.step.dt * this.m_maxMotorTorque;
            this.m_motorImpulse = (0, b2_math_1.b2Clamp)(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
            impulse = this.m_motorImpulse - oldImpulse;
            wA -= iA * impulse;
            wB += iB * impulse;
        }
        // Solve limit constraint.
        if (this.m_enableLimit && !fixedRotation) {
            // Lower limit
            {
                const C = this.m_angle - this.m_lowerAngle;
                const Cdot = wB - wA;
                let impulse = -this.m_axialMass * (Cdot + Math.max(C, 0) * data.step.inv_dt);
                const oldImpulse = this.m_lowerImpulse;
                this.m_lowerImpulse = Math.max(this.m_lowerImpulse + impulse, 0);
                impulse = this.m_lowerImpulse - oldImpulse;
                wA -= iA * impulse;
                wB += iB * impulse;
            }
            // Upper limit
            // Note: signs are flipped to keep C positive when the constraint is satisfied.
            // This also keeps the impulse positive when the limit is active.
            {
                const C = this.m_upperAngle - this.m_angle;
                const Cdot = wA - wB;
                let impulse = -this.m_axialMass * (Cdot + Math.max(C, 0) * data.step.inv_dt);
                const oldImpulse = this.m_upperImpulse;
                this.m_upperImpulse = Math.max(this.m_upperImpulse + impulse, 0);
                impulse = this.m_upperImpulse - oldImpulse;
                wA += iA * impulse;
                wB -= iB * impulse;
            }
        }
        // Solve point-to-point constraint
        {
            const { Cdot, impulse } = temp;
            b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, this.m_rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, this.m_rA, b2_math_1.b2Vec2.s_t1), Cdot);
            this.m_K.Solve(-Cdot.x, -Cdot.y, impulse);
            this.m_impulse.x += impulse.x;
            this.m_impulse.y += impulse.y;
            vA.SubtractScaled(mA, impulse);
            wA -= iA * b2_math_1.b2Vec2.Cross(this.m_rA, impulse);
            vB.AddScaled(mB, impulse);
            wB += iB * b2_math_1.b2Vec2.Cross(this.m_rB, impulse);
        }
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    SolvePositionConstraints(data) {
        const cA = data.positions[this.m_indexA].c;
        let aA = data.positions[this.m_indexA].a;
        const cB = data.positions[this.m_indexB].c;
        let aB = data.positions[this.m_indexB].a;
        const { qA, qB, lalcA, lalcB, impulse } = temp;
        qA.Set(aA);
        qB.Set(aB);
        let angularError = 0;
        let positionError = 0;
        const fixedRotation = this.m_invIA + this.m_invIB === 0;
        // Solve angular limit constraint
        if (this.m_enableLimit && !fixedRotation) {
            const angle = aB - aA - this.m_referenceAngle;
            let C = 0;
            if (Math.abs(this.m_upperAngle - this.m_lowerAngle) < 2 * b2_common_1.b2_angularSlop) // Prevent large angular corrections
            C = (0, b2_math_1.b2Clamp)(angle - this.m_lowerAngle, -b2_common_1.b2_maxAngularCorrection, b2_common_1.b2_maxAngularCorrection);
            else if (angle <= this.m_lowerAngle) // Prevent large angular corrections and allow some slop.
            C = (0, b2_math_1.b2Clamp)(angle - this.m_lowerAngle + b2_common_1.b2_angularSlop, -b2_common_1.b2_maxAngularCorrection, 0);
            else if (angle >= this.m_upperAngle) // Prevent large angular corrections and allow some slop.
            C = (0, b2_math_1.b2Clamp)(angle - this.m_upperAngle - b2_common_1.b2_angularSlop, 0, b2_common_1.b2_maxAngularCorrection);
            const limitImpulse = -this.m_axialMass * C;
            aA -= this.m_invIA * limitImpulse;
            aB += this.m_invIB * limitImpulse;
            angularError = Math.abs(C);
        }
        // Solve point-to-point constraint.
        {
            qA.Set(aA);
            qB.Set(aB);
            const rA = b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), this.m_rA);
            const rB = b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), this.m_rB);
            const C = b2_math_1.b2Vec2.Add(cB, rB, temp.C).Subtract(cA).Subtract(rA);
            positionError = C.Length();
            const mA = this.m_invMassA;
            const mB = this.m_invMassB;
            const iA = this.m_invIA;
            const iB = this.m_invIB;
            const K = this.m_K;
            K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
            K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
            K.ey.x = K.ex.y;
            K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;
            K.Solve(C.x, C.y, impulse).Negate();
            cA.SubtractScaled(mA, impulse);
            aA -= iA * b2_math_1.b2Vec2.Cross(rA, impulse);
            cB.AddScaled(mB, impulse);
            aB += iB * b2_math_1.b2Vec2.Cross(rB, impulse);
        }
        data.positions[this.m_indexA].a = aA;
        data.positions[this.m_indexB].a = aB;
        return positionError <= b2_common_1.b2_linearSlop && angularError <= b2_common_1.b2_angularSlop;
    }
    GetAnchorA(out) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
    }
    GetAnchorB(out) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
    }
    /**
     * Get the reaction force given the inverse time step.
     * Unit is N.
     */ GetReactionForce(inv_dt, out) {
        out.x = inv_dt * this.m_impulse.x;
        out.y = inv_dt * this.m_impulse.y;
        return out;
    }
    /**
     * Get the reaction torque due to the joint limit given the inverse time step.
     * Unit is N*m.
     */ GetReactionTorque(inv_dt) {
        return inv_dt * (this.m_motorImpulse + this.m_lowerImpulse - this.m_upperImpulse);
    }
    /** The local anchor point relative to bodyA's origin. */ GetLocalAnchorA() {
        return this.m_localAnchorA;
    }
    /** The local anchor point relative to bodyB's origin. */ GetLocalAnchorB() {
        return this.m_localAnchorB;
    }
    /** Get the reference angle. */ GetReferenceAngle() {
        return this.m_referenceAngle;
    }
    /** Get the current joint angle in radians. */ GetJointAngle() {
        return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle;
    }
    /** Get the current joint angle speed in radians per second. */ GetJointSpeed() {
        return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
    }
    /** Is the joint motor enabled? */ IsMotorEnabled() {
        return this.m_enableMotor;
    }
    /** Enable/disable the joint motor. */ EnableMotor(flag) {
        if (flag !== this.m_enableMotor) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_enableMotor = flag;
        }
        return flag;
    }
    /**
     * Get the current motor torque given the inverse time step.
     * Unit is N*m.
     */ GetMotorTorque(inv_dt) {
        return inv_dt * this.m_motorImpulse;
    }
    /** Get the motor speed in radians per second. */ GetMotorSpeed() {
        return this.m_motorSpeed;
    }
    /** Set the maximum motor torque, usually in N-m. */ SetMaxMotorTorque(torque) {
        if (torque !== this.m_maxMotorTorque) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_maxMotorTorque = torque;
        }
    }
    /** Get the maximum motor torque, usually in N-m. */ GetMaxMotorTorque() {
        return this.m_maxMotorTorque;
    }
    /** Is the joint limit enabled?  */ IsLimitEnabled() {
        return this.m_enableLimit;
    }
    /** Enable/disable the joint limit. */ EnableLimit(flag) {
        if (flag !== this.m_enableLimit) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_enableLimit = flag;
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
        }
        return flag;
    }
    /** Get the lower joint limit in radians. */ GetLowerLimit() {
        return this.m_lowerAngle;
    }
    /** Get the upper joint limit in radians. */ GetUpperLimit() {
        return this.m_upperAngle;
    }
    /** Set the joint limits in radians. */ SetLimits(lower, upper) {
        if (lower !== this.m_lowerAngle || upper !== this.m_upperAngle) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
            this.m_lowerAngle = lower;
            this.m_upperAngle = upper;
        }
    }
    /** Set the motor speed in radians per second. */ SetMotorSpeed(speed) {
        if (speed !== this.m_motorSpeed) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_motorSpeed = speed;
        }
        return speed;
    }
    Draw(draw) {
        const { p2, r, pA, pB } = temp;
        const xfA = this.m_bodyA.GetTransform();
        const xfB = this.m_bodyB.GetTransform();
        b2_math_1.b2Transform.MultiplyVec2(xfA, this.m_localAnchorA, pA);
        b2_math_1.b2Transform.MultiplyVec2(xfB, this.m_localAnchorB, pB);
        draw.DrawPoint(pA, 5, b2_draw_1.debugColors.joint4);
        draw.DrawPoint(pB, 5, b2_draw_1.debugColors.joint5);
        const aA = this.m_bodyA.GetAngle();
        const aB = this.m_bodyB.GetAngle();
        const angle = aB - aA - this.m_referenceAngle;
        const L = 0.5;
        r.Set(Math.cos(angle), Math.sin(angle)).Scale(L);
        draw.DrawSegment(pB, b2_math_1.b2Vec2.Add(pB, r, p2), b2_draw_1.debugColors.joint1);
        draw.DrawCircle(pB, L, b2_draw_1.debugColors.joint1);
        if (this.m_enableLimit) {
            const { rlo, rhi } = temp;
            rlo.Set(Math.cos(this.m_lowerAngle), Math.sin(this.m_lowerAngle)).Scale(L);
            rhi.Set(Math.cos(this.m_upperAngle), Math.sin(this.m_upperAngle)).Scale(L);
            draw.DrawSegment(pB, b2_math_1.b2Vec2.Add(pB, rlo, p2), b2_draw_1.debugColors.joint2);
            draw.DrawSegment(pB, b2_math_1.b2Vec2.Add(pB, rhi, p2), b2_draw_1.debugColors.joint3);
        }
        draw.DrawSegment(xfA.p, pA, b2_draw_1.debugColors.joint6);
        draw.DrawSegment(pA, pB, b2_draw_1.debugColors.joint6);
        draw.DrawSegment(xfB.p, pB, b2_draw_1.debugColors.joint6);
    }
}
exports.b2RevoluteJoint = b2RevoluteJoint;

},{"fb8e1d213810bcb1":"a1SE4","60b1b67d5fe3bcb7":"cc6XX","bef5f7c0f086941e":"3MJcc","1ae6d0af87a0e739":"kS3Lm"}],"asMSc":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2WeldJoint = exports.b2WeldJointDef = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_common_1 = require("a432fb307680eccf");
const b2_math_1 = require("bc5fc02b3b39c821");
const b2_joint_1 = require("9ed58369c23b05c");
// Point-to-point constraint
// C = p2 - p1
// Cdot = v2 - v1
//      = v2 + cross(w2, r2) - v1 - cross(w1, r1)
// J = [-I -r1_skew I r2_skew ]
// Identity used:
// w k % (rx i + ry j) = w * (-ry i + rx j)
// Angle constraint
// C = angle2 - angle1 - referenceAngle
// Cdot = w2 - w1
// J = [0 0 -1 0 0 1]
// K = invI1 + invI2
const temp = {
    qA: new b2_math_1.b2Rot(),
    qB: new b2_math_1.b2Rot(),
    rA: new b2_math_1.b2Vec2(),
    rB: new b2_math_1.b2Vec2(),
    lalcA: new b2_math_1.b2Vec2(),
    lalcB: new b2_math_1.b2Vec2(),
    K: new b2_math_1.b2Mat33(),
    P: new b2_math_1.b2Vec2(),
    Cdot1: new b2_math_1.b2Vec3(),
    impulse1: new b2_math_1.b2Vec2(),
    impulse: new b2_math_1.b2Vec3(),
    C1: new b2_math_1.b2Vec2(),
    C: new b2_math_1.b2Vec3()
};
/**
 * Weld joint definition. You need to specify local anchor points
 * where they are attached and the relative body angle. The position
 * of the anchor points is important for computing the reaction torque.
 */ class b2WeldJointDef extends b2_joint_1.b2JointDef {
    constructor(){
        super(b2_joint_1.b2JointType.e_weldJoint);
        /** The local anchor point relative to bodyA's origin. */ this.localAnchorA = new b2_math_1.b2Vec2();
        /** The local anchor point relative to bodyB's origin. */ this.localAnchorB = new b2_math_1.b2Vec2();
        /** The bodyB angle minus bodyA angle in the reference state (radians). */ this.referenceAngle = 0;
        /**
         * The rotational stiffness in N*m
         * Disable softness with a value of 0
         */ this.stiffness = 0;
        /** The rotational damping in N*m*s */ this.damping = 0;
    }
    /**
     * Initialize the bodies, anchors, reference angle, stiffness, and damping.
     * @param bodyA the first body connected by this joint
     * @param bodyB the second body connected by this joint
     * @param anchor the point of connection in world coordinates
     */ Initialize(bA, bB, anchor) {
        this.bodyA = bA;
        this.bodyB = bB;
        this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
        this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
    }
}
exports.b2WeldJointDef = b2WeldJointDef;
/**
 * A weld joint essentially glues two bodies together. A weld joint may
 * distort somewhat because the island constraint solver is approximate.
 */ class b2WeldJoint extends b2_joint_1.b2Joint {
    /** @internal protected */ constructor(def){
        var _a, _b, _c, _d, _e;
        super(def);
        this.m_stiffness = 0;
        this.m_damping = 0;
        this.m_bias = 0;
        // Solver shared
        this.m_localAnchorA = new b2_math_1.b2Vec2();
        this.m_localAnchorB = new b2_math_1.b2Vec2();
        this.m_referenceAngle = 0;
        this.m_gamma = 0;
        this.m_impulse = new b2_math_1.b2Vec3();
        // Solver temp
        this.m_indexA = 0;
        this.m_indexB = 0;
        this.m_rA = new b2_math_1.b2Vec2();
        this.m_rB = new b2_math_1.b2Vec2();
        this.m_localCenterA = new b2_math_1.b2Vec2();
        this.m_localCenterB = new b2_math_1.b2Vec2();
        this.m_invMassA = 0;
        this.m_invMassB = 0;
        this.m_invIA = 0;
        this.m_invIB = 0;
        this.m_mass = new b2_math_1.b2Mat33();
        this.m_localAnchorA.Copy((_a = def.localAnchorA) !== null && _a !== void 0 ? _a : b2_math_1.b2Vec2.ZERO);
        this.m_localAnchorB.Copy((_b = def.localAnchorB) !== null && _b !== void 0 ? _b : b2_math_1.b2Vec2.ZERO);
        this.m_referenceAngle = (_c = def.referenceAngle) !== null && _c !== void 0 ? _c : 0;
        this.m_stiffness = (_d = def.stiffness) !== null && _d !== void 0 ? _d : 0;
        this.m_damping = (_e = def.damping) !== null && _e !== void 0 ? _e : 0;
    }
    /** @internal protected */ InitVelocityConstraints(data) {
        this.m_indexA = this.m_bodyA.m_islandIndex;
        this.m_indexB = this.m_bodyB.m_islandIndex;
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
        this.m_invMassA = this.m_bodyA.m_invMass;
        this.m_invMassB = this.m_bodyB.m_invMass;
        this.m_invIA = this.m_bodyA.m_invI;
        this.m_invIB = this.m_bodyB.m_invI;
        const aA = data.positions[this.m_indexA].a;
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const aB = data.positions[this.m_indexB].a;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const { qA, qB, lalcA, lalcB, K } = temp;
        qA.Set(aA);
        qB.Set(aB);
        b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), this.m_rA);
        b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), this.m_rB);
        // J = [-I -r1_skew I r2_skew]
        //     [ 0       -1 0       1]
        // r_skew = [-ry; rx]
        // Matlab
        // K = [ mA+r1y^2*iA+mB+r2y^2*iB,  -r1y*iA*r1x-r2y*iB*r2x,          -r1y*iA-r2y*iB]
        //     [  -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB,           r1x*iA+r2x*iB]
        //     [          -r1y*iA-r2y*iB,           r1x*iA+r2x*iB,                   iA+iB]
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        K.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;
        K.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;
        K.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;
        K.ex.y = K.ey.x;
        K.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;
        K.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;
        K.ex.z = K.ez.x;
        K.ey.z = K.ez.y;
        K.ez.z = iA + iB;
        if (this.m_stiffness > 0) {
            K.GetInverse22(this.m_mass);
            let invM = iA + iB;
            const C = aB - aA - this.m_referenceAngle;
            // Damping coefficient
            const d = this.m_damping;
            // Spring stiffness
            const k = this.m_stiffness;
            // magic formulas
            const h = data.step.dt;
            this.m_gamma = h * (d + h * k);
            this.m_gamma = this.m_gamma !== 0 ? 1 / this.m_gamma : 0;
            this.m_bias = C * h * k * this.m_gamma;
            invM += this.m_gamma;
            this.m_mass.ez.z = invM !== 0 ? 1 / invM : 0;
        } else if (K.ez.z === 0) {
            K.GetInverse22(this.m_mass);
            this.m_gamma = 0;
            this.m_bias = 0;
        } else {
            K.GetSymInverse33(this.m_mass);
            this.m_gamma = 0;
            this.m_bias = 0;
        }
        if (data.step.warmStarting) {
            // Scale impulses to support a variable time step.
            this.m_impulse.Scale(data.step.dtRatio);
            const { P } = temp;
            P.Copy(this.m_impulse);
            vA.SubtractScaled(mA, P);
            wA -= iA * (b2_math_1.b2Vec2.Cross(this.m_rA, P) + this.m_impulse.z);
            vB.AddScaled(mB, P);
            wB += iB * (b2_math_1.b2Vec2.Cross(this.m_rB, P) + this.m_impulse.z);
        } else this.m_impulse.SetZero();
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolveVelocityConstraints(data) {
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        if (this.m_stiffness > 0) {
            const Cdot2 = wB - wA;
            const impulse2 = -this.m_mass.ez.z * (Cdot2 + this.m_bias + this.m_gamma * this.m_impulse.z);
            this.m_impulse.z += impulse2;
            wA -= iA * impulse2;
            wB += iB * impulse2;
            const { Cdot1, impulse1 } = temp;
            b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, this.m_rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, this.m_rA, b2_math_1.b2Vec2.s_t1), Cdot1);
            b2_math_1.b2Mat33.MultiplyVec2(this.m_mass, Cdot1, impulse1).Negate();
            this.m_impulse.x += impulse1.x;
            this.m_impulse.y += impulse1.y;
            const P = impulse1;
            vA.SubtractScaled(mA, P);
            wA -= iA * b2_math_1.b2Vec2.Cross(this.m_rA, P);
            vB.AddScaled(mB, P);
            wB += iB * b2_math_1.b2Vec2.Cross(this.m_rB, P);
        } else {
            const { Cdot1, impulse, P } = temp;
            b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, this.m_rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, this.m_rA, b2_math_1.b2Vec2.s_t1), Cdot1);
            Cdot1.z = wB - wA;
            b2_math_1.b2Mat33.MultiplyVec3(this.m_mass, Cdot1, impulse).Negate();
            this.m_impulse.Add(impulse);
            P.Set(impulse.x, impulse.y);
            vA.SubtractScaled(mA, P);
            wA -= iA * (b2_math_1.b2Vec2.Cross(this.m_rA, P) + impulse.z);
            vB.AddScaled(mB, P);
            wB += iB * (b2_math_1.b2Vec2.Cross(this.m_rB, P) + impulse.z);
        }
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolvePositionConstraints(data) {
        const cA = data.positions[this.m_indexA].c;
        let aA = data.positions[this.m_indexA].a;
        const cB = data.positions[this.m_indexB].c;
        let aB = data.positions[this.m_indexB].a;
        const { qA, qB, lalcA, lalcB, K, C1, P, rA, rB } = temp;
        qA.Set(aA);
        qB.Set(aB);
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), rA);
        b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), rB);
        let positionError;
        let angularError;
        K.ex.x = mA + mB + rA.y * rA.y * iA + rB.y * rB.y * iB;
        K.ey.x = -rA.y * rA.x * iA - rB.y * rB.x * iB;
        K.ez.x = -rA.y * iA - rB.y * iB;
        K.ex.y = K.ey.x;
        K.ey.y = mA + mB + rA.x * rA.x * iA + rB.x * rB.x * iB;
        K.ez.y = rA.x * iA + rB.x * iB;
        K.ex.z = K.ez.x;
        K.ey.z = K.ez.y;
        K.ez.z = iA + iB;
        if (this.m_stiffness > 0) {
            b2_math_1.b2Vec2.Add(cB, rB, C1).Subtract(cA).Subtract(rA);
            positionError = C1.Length();
            angularError = 0;
            K.Solve22(C1.x, C1.y, P).Negate();
            cA.SubtractScaled(mA, P);
            aA -= iA * b2_math_1.b2Vec2.Cross(rA, P);
            cB.AddScaled(mB, P);
            aB += iB * b2_math_1.b2Vec2.Cross(rB, P);
        } else {
            b2_math_1.b2Vec2.Add(cB, rB, C1).Subtract(cA).Subtract(rA);
            b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.Add(cB, rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.Add(cA, rA, b2_math_1.b2Vec2.s_t1), C1);
            const C2 = aB - aA - this.m_referenceAngle;
            positionError = C1.Length();
            angularError = Math.abs(C2);
            const { impulse, C } = temp;
            C.Set(C1.x, C1.y, C2);
            if (K.ez.z > 0) K.Solve33(C.x, C.y, C.z, impulse).Negate();
            else {
                K.Solve22(C1.x, C1.y, impulse).Negate();
                impulse.z = 0;
            }
            P.Copy(impulse);
            cA.SubtractScaled(mA, P);
            aA -= iA * (b2_math_1.b2Vec2.Cross(rA, P) + impulse.z);
            cB.AddScaled(mB, P);
            aB += iB * (b2_math_1.b2Vec2.Cross(rB, P) + impulse.z);
        }
        data.positions[this.m_indexA].a = aA;
        data.positions[this.m_indexB].a = aB;
        return positionError <= b2_common_1.b2_linearSlop && angularError <= b2_common_1.b2_angularSlop;
    }
    GetAnchorA(out) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
    }
    GetAnchorB(out) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
    }
    GetReactionForce(inv_dt, out) {
        out.x = inv_dt * this.m_impulse.x;
        out.y = inv_dt * this.m_impulse.y;
        return out;
    }
    GetReactionTorque(inv_dt) {
        return inv_dt * this.m_impulse.z;
    }
    /** The local anchor point relative to bodyA's origin. */ GetLocalAnchorA() {
        return this.m_localAnchorA;
    }
    /** The local anchor point relative to bodyB's origin. */ GetLocalAnchorB() {
        return this.m_localAnchorB;
    }
    /** Get the reference angle. */ GetReferenceAngle() {
        return this.m_referenceAngle;
    }
    /** Set stiffness in N*m */ SetStiffness(stiffness) {
        this.m_stiffness = stiffness;
    }
    /** Get stiffness in N*m */ GetStiffness() {
        return this.m_stiffness;
    }
    /** Set damping in N*m*s */ SetDamping(damping) {
        this.m_damping = damping;
    }
    /** Get damping in N*m*s */ GetDamping() {
        return this.m_damping;
    }
}
exports.b2WeldJoint = b2WeldJoint;

},{"a432fb307680eccf":"a1SE4","bc5fc02b3b39c821":"3MJcc","9ed58369c23b05c":"kS3Lm"}],"27dFq":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2WheelJoint = exports.b2WheelJointDef = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("1bcdc0c5e6720369");
const b2_math_1 = require("7ade33effe47b92f");
const b2_joint_1 = require("b85b245e74da631e");
const b2_draw_1 = require("febc7ba37b26f7c5");
// Linear constraint (point-to-line)
// d = pB - pA = xB + rB - xA - rA
// C = dot(ay, d)
// Cdot = dot(d, cross(wA, ay)) + dot(ay, vB + cross(wB, rB) - vA - cross(wA, rA))
//      = -dot(ay, vA) - dot(cross(d + rA, ay), wA) + dot(ay, vB) + dot(cross(rB, ay), vB)
// J = [-ay, -cross(d + rA, ay), ay, cross(rB, ay)]
// Spring linear constraint
// C = dot(ax, d)
// Cdot = = -dot(ax, vA) - dot(cross(d + rA, ax), wA) + dot(ax, vB) + dot(cross(rB, ax), vB)
// J = [-ax -cross(d+rA, ax) ax cross(rB, ax)]
// Motor rotational constraint
// Cdot = wB - wA
// J = [0 0 -1 0 0 1]
const temp = {
    qA: new b2_math_1.b2Rot(),
    qB: new b2_math_1.b2Rot(),
    lalcA: new b2_math_1.b2Vec2(),
    lalcB: new b2_math_1.b2Vec2(),
    rA: new b2_math_1.b2Vec2(),
    rB: new b2_math_1.b2Vec2(),
    d: new b2_math_1.b2Vec2(),
    P: new b2_math_1.b2Vec2(),
    ay: new b2_math_1.b2Vec2(),
    pA: new b2_math_1.b2Vec2(),
    pB: new b2_math_1.b2Vec2(),
    axis: new b2_math_1.b2Vec2(),
    Draw: {
        p1: new b2_math_1.b2Vec2(),
        p2: new b2_math_1.b2Vec2(),
        pA: new b2_math_1.b2Vec2(),
        pB: new b2_math_1.b2Vec2(),
        axis: new b2_math_1.b2Vec2(),
        lower: new b2_math_1.b2Vec2(),
        upper: new b2_math_1.b2Vec2(),
        perp: new b2_math_1.b2Vec2()
    }
};
/**
 * Wheel joint definition. This requires defining a line of
 * motion using an axis and an anchor point. The definition uses local
 * anchor points and a local axis so that the initial configuration
 * can violate the constraint slightly. The joint translation is zero
 * when the local anchor points coincide in world space. Using local
 * anchors and a local axis helps when saving and loading a game.
 */ class b2WheelJointDef extends b2_joint_1.b2JointDef {
    constructor(){
        super(b2_joint_1.b2JointType.e_wheelJoint);
        /** The local anchor point relative to bodyA's origin. */ this.localAnchorA = new b2_math_1.b2Vec2();
        /** The local anchor point relative to bodyB's origin. */ this.localAnchorB = new b2_math_1.b2Vec2();
        /** The local translation axis in bodyA. */ this.localAxisA = new b2_math_1.b2Vec2(1, 0);
        /** Enable/disable the joint limit. */ this.enableLimit = false;
        /** The lower translation limit, usually in meters. */ this.lowerTranslation = 0;
        /** The upper translation limit, usually in meters. */ this.upperTranslation = 0;
        /** Enable/disable the joint motor. */ this.enableMotor = false;
        /** The maximum motor torque, usually in N-m. */ this.maxMotorTorque = 0;
        /** The desired motor speed in radians per second. */ this.motorSpeed = 0;
        /** Suspension stiffness. Typically in units N/m. */ this.stiffness = 0;
        /** Suspension damping. Typically in units of N*s/m. */ this.damping = 0;
    }
    /**
     * Initialize the bodies, anchors, axis, and reference angle using the world
     * anchor and world axis.
     */ Initialize(bA, bB, anchor, axis) {
        this.bodyA = bA;
        this.bodyB = bB;
        this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
        this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
        this.bodyA.GetLocalVector(axis, this.localAxisA);
    }
}
exports.b2WheelJointDef = b2WheelJointDef;
/**
 * A wheel joint. This joint provides two degrees of freedom: translation
 * along an axis fixed in bodyA and rotation in the plane. In other words, it is a point to
 * line constraint with a rotational motor and a linear spring/damper. The spring/damper is
 * initialized upon creation. This joint is designed for vehicle suspensions.
 */ class b2WheelJoint extends b2_joint_1.b2Joint {
    /** @internal protected */ constructor(def){
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        super(def);
        this.m_localAnchorA = new b2_math_1.b2Vec2();
        this.m_localAnchorB = new b2_math_1.b2Vec2();
        this.m_localXAxisA = new b2_math_1.b2Vec2();
        this.m_localYAxisA = new b2_math_1.b2Vec2();
        this.m_impulse = 0;
        this.m_motorImpulse = 0;
        this.m_springImpulse = 0;
        this.m_lowerImpulse = 0;
        this.m_upperImpulse = 0;
        this.m_translation = 0;
        this.m_lowerTranslation = 0;
        this.m_upperTranslation = 0;
        this.m_maxMotorTorque = 0;
        this.m_motorSpeed = 0;
        this.m_enableLimit = false;
        this.m_enableMotor = false;
        this.m_stiffness = 0;
        this.m_damping = 0;
        // Solver temp
        this.m_indexA = 0;
        this.m_indexB = 0;
        this.m_localCenterA = new b2_math_1.b2Vec2();
        this.m_localCenterB = new b2_math_1.b2Vec2();
        this.m_invMassA = 0;
        this.m_invMassB = 0;
        this.m_invIA = 0;
        this.m_invIB = 0;
        this.m_ax = new b2_math_1.b2Vec2();
        this.m_ay = new b2_math_1.b2Vec2();
        this.m_sAx = 0;
        this.m_sBx = 0;
        this.m_sAy = 0;
        this.m_sBy = 0;
        this.m_mass = 0;
        this.m_motorMass = 0;
        this.m_axialMass = 0;
        this.m_springMass = 0;
        this.m_bias = 0;
        this.m_gamma = 0;
        this.m_localAnchorA.Copy((_a = def.localAnchorA) !== null && _a !== void 0 ? _a : b2_math_1.b2Vec2.ZERO);
        this.m_localAnchorB.Copy((_b = def.localAnchorB) !== null && _b !== void 0 ? _b : b2_math_1.b2Vec2.ZERO);
        this.m_localXAxisA.Copy((_c = def.localAxisA) !== null && _c !== void 0 ? _c : b2_math_1.b2Vec2.UNITX);
        b2_math_1.b2Vec2.CrossOneVec2(this.m_localXAxisA, this.m_localYAxisA);
        this.m_lowerTranslation = (_d = def.lowerTranslation) !== null && _d !== void 0 ? _d : 0;
        this.m_upperTranslation = (_e = def.upperTranslation) !== null && _e !== void 0 ? _e : 0;
        this.m_enableLimit = (_f = def.enableLimit) !== null && _f !== void 0 ? _f : false;
        this.m_maxMotorTorque = (_g = def.maxMotorTorque) !== null && _g !== void 0 ? _g : 0;
        this.m_motorSpeed = (_h = def.motorSpeed) !== null && _h !== void 0 ? _h : 0;
        this.m_enableMotor = (_j = def.enableMotor) !== null && _j !== void 0 ? _j : false;
        this.m_ax.SetZero();
        this.m_ay.SetZero();
        this.m_stiffness = (_k = def.stiffness) !== null && _k !== void 0 ? _k : 0;
        this.m_damping = (_l = def.damping) !== null && _l !== void 0 ? _l : 0;
    }
    /** Get the motor speed, usually in radians per second. */ GetMotorSpeed() {
        return this.m_motorSpeed;
    }
    /** Set/Get the maximum motor force, usually in N-m. */ GetMaxMotorTorque() {
        return this.m_maxMotorTorque;
    }
    /** Set spring stiffness */ SetStiffness(stiffness) {
        this.m_stiffness = stiffness;
    }
    /** Get spring stiffness */ GetStiffness() {
        return this.m_stiffness;
    }
    /** Set damping */ SetDamping(damping) {
        this.m_damping = damping;
    }
    /** Get damping */ GetDamping() {
        return this.m_damping;
    }
    /** @internal protected */ InitVelocityConstraints(data) {
        this.m_indexA = this.m_bodyA.m_islandIndex;
        this.m_indexB = this.m_bodyB.m_islandIndex;
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
        this.m_invMassA = this.m_bodyA.m_invMass;
        this.m_invMassB = this.m_bodyB.m_invMass;
        this.m_invIA = this.m_bodyA.m_invI;
        this.m_invIB = this.m_bodyB.m_invI;
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        const cA = data.positions[this.m_indexA].c;
        const aA = data.positions[this.m_indexA].a;
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const cB = data.positions[this.m_indexB].c;
        const aB = data.positions[this.m_indexB].a;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const { qA, qB, lalcA, lalcB, rA, rB, d } = temp;
        qA.Set(aA);
        qB.Set(aB);
        // Compute the effective masses.
        b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), rA);
        b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), rB);
        b2_math_1.b2Vec2.Add(cB, rB, d).Subtract(cA).Subtract(rA);
        // Point to line constraint
        b2_math_1.b2Rot.MultiplyVec2(qA, this.m_localYAxisA, this.m_ay);
        this.m_sAy = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Add(d, rA, b2_math_1.b2Vec2.s_t0), this.m_ay);
        this.m_sBy = b2_math_1.b2Vec2.Cross(rB, this.m_ay);
        this.m_mass = mA + mB + iA * this.m_sAy * this.m_sAy + iB * this.m_sBy * this.m_sBy;
        if (this.m_mass > 0) this.m_mass = 1 / this.m_mass;
        // Spring constraint
        b2_math_1.b2Rot.MultiplyVec2(qA, this.m_localXAxisA, this.m_ax);
        this.m_sAx = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Add(d, rA, b2_math_1.b2Vec2.s_t0), this.m_ax);
        this.m_sBx = b2_math_1.b2Vec2.Cross(rB, this.m_ax);
        const invMass = mA + mB + iA * this.m_sAx * this.m_sAx + iB * this.m_sBx * this.m_sBx;
        if (invMass > 0) this.m_axialMass = 1 / invMass;
        else this.m_axialMass = 0;
        this.m_springMass = 0;
        this.m_bias = 0;
        this.m_gamma = 0;
        if (this.m_stiffness > 0 && invMass > 0) {
            this.m_springMass = 1 / invMass;
            const C = b2_math_1.b2Vec2.Dot(d, this.m_ax);
            // magic formulas
            const h = data.step.dt;
            this.m_gamma = h * (this.m_damping + h * this.m_stiffness);
            if (this.m_gamma > 0) this.m_gamma = 1 / this.m_gamma;
            this.m_bias = C * h * this.m_stiffness * this.m_gamma;
            this.m_springMass = invMass + this.m_gamma;
            if (this.m_springMass > 0) this.m_springMass = 1 / this.m_springMass;
        } else this.m_springImpulse = 0;
        if (this.m_enableLimit) this.m_translation = b2_math_1.b2Vec2.Dot(this.m_ax, d);
        else {
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
        }
        if (this.m_enableMotor) {
            this.m_motorMass = iA + iB;
            if (this.m_motorMass > 0) this.m_motorMass = 1 / this.m_motorMass;
        } else {
            this.m_motorMass = 0;
            this.m_motorImpulse = 0;
        }
        if (data.step.warmStarting) {
            // Account for variable time step.
            this.m_impulse *= data.step.dtRatio;
            this.m_springImpulse *= data.step.dtRatio;
            this.m_motorImpulse *= data.step.dtRatio;
            const axialImpulse = this.m_springImpulse + this.m_lowerImpulse - this.m_upperImpulse;
            const { P } = temp;
            b2_math_1.b2Vec2.Scale(this.m_impulse, this.m_ay, P).AddScaled(axialImpulse, this.m_ax);
            const LA = this.m_impulse * this.m_sAy + axialImpulse * this.m_sAx + this.m_motorImpulse;
            const LB = this.m_impulse * this.m_sBy + axialImpulse * this.m_sBx + this.m_motorImpulse;
            vA.SubtractScaled(this.m_invMassA, P);
            wA -= this.m_invIA * LA;
            vB.AddScaled(this.m_invMassB, P);
            wB += this.m_invIB * LB;
        } else {
            this.m_impulse = 0;
            this.m_springImpulse = 0;
            this.m_motorImpulse = 0;
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
        }
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolveVelocityConstraints(data) {
        const mA = this.m_invMassA;
        const mB = this.m_invMassB;
        const iA = this.m_invIA;
        const iB = this.m_invIB;
        const vA = data.velocities[this.m_indexA].v;
        let wA = data.velocities[this.m_indexA].w;
        const vB = data.velocities[this.m_indexB].v;
        let wB = data.velocities[this.m_indexB].w;
        const { P } = temp;
        // Solve spring constraint
        {
            const Cdot = b2_math_1.b2Vec2.Dot(this.m_ax, b2_math_1.b2Vec2.Subtract(vB, vA, b2_math_1.b2Vec2.s_t0)) + this.m_sBx * wB - this.m_sAx * wA;
            const impulse = -this.m_springMass * (Cdot + this.m_bias + this.m_gamma * this.m_springImpulse);
            this.m_springImpulse += impulse;
            b2_math_1.b2Vec2.Scale(impulse, this.m_ax, P);
            const LA = impulse * this.m_sAx;
            const LB = impulse * this.m_sBx;
            vA.SubtractScaled(mA, P);
            wA -= iA * LA;
            vB.AddScaled(mB, P);
            wB += iB * LB;
        }
        // Solve rotational motor constraint
        {
            const Cdot = wB - wA - this.m_motorSpeed;
            let impulse = -this.m_motorMass * Cdot;
            const oldImpulse = this.m_motorImpulse;
            const maxImpulse = data.step.dt * this.m_maxMotorTorque;
            this.m_motorImpulse = (0, b2_math_1.b2Clamp)(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
            impulse = this.m_motorImpulse - oldImpulse;
            wA -= iA * impulse;
            wB += iB * impulse;
        }
        if (this.m_enableLimit) {
            // Lower limit
            {
                const C = this.m_translation - this.m_lowerTranslation;
                const Cdot = b2_math_1.b2Vec2.Dot(this.m_ax, b2_math_1.b2Vec2.Subtract(vB, vA, b2_math_1.b2Vec2.s_t0)) + this.m_sBx * wB - this.m_sAx * wA;
                let impulse = -this.m_axialMass * (Cdot + Math.max(C, 0) * data.step.inv_dt);
                const oldImpulse = this.m_lowerImpulse;
                this.m_lowerImpulse = Math.max(this.m_lowerImpulse + impulse, 0);
                impulse = this.m_lowerImpulse - oldImpulse;
                b2_math_1.b2Vec2.Scale(impulse, this.m_ax, P);
                const LA = impulse * this.m_sAx;
                const LB = impulse * this.m_sBx;
                vA.SubtractScaled(mA, P);
                wA -= iA * LA;
                vB.AddScaled(mB, P);
                wB += iB * LB;
            }
            // Upper limit
            // Note: signs are flipped to keep C positive when the constraint is satisfied.
            // This also keeps the impulse positive when the limit is active.
            {
                const C = this.m_upperTranslation - this.m_translation;
                const Cdot = b2_math_1.b2Vec2.Dot(this.m_ax, b2_math_1.b2Vec2.Subtract(vA, vB, b2_math_1.b2Vec2.s_t0)) + this.m_sAx * wA - this.m_sBx * wB;
                let impulse = -this.m_axialMass * (Cdot + Math.max(C, 0) * data.step.inv_dt);
                const oldImpulse = this.m_upperImpulse;
                this.m_upperImpulse = Math.max(this.m_upperImpulse + impulse, 0);
                impulse = this.m_upperImpulse - oldImpulse;
                b2_math_1.b2Vec2.Scale(impulse, this.m_ax, P);
                const LA = impulse * this.m_sAx;
                const LB = impulse * this.m_sBx;
                vA.AddScaled(mA, P);
                wA += iA * LA;
                vB.SubtractScaled(mB, P);
                wB -= iB * LB;
            }
        }
        // Solve point to line constraint
        {
            const Cdot = b2_math_1.b2Vec2.Dot(this.m_ay, b2_math_1.b2Vec2.Subtract(vB, vA, b2_math_1.b2Vec2.s_t0)) + this.m_sBy * wB - this.m_sAy * wA;
            const impulse = -this.m_mass * Cdot;
            this.m_impulse += impulse;
            b2_math_1.b2Vec2.Scale(impulse, this.m_ay, P);
            const LA = impulse * this.m_sAy;
            const LB = impulse * this.m_sBy;
            vA.SubtractScaled(mA, P);
            wA -= iA * LA;
            vB.AddScaled(mB, P);
            wB += iB * LB;
        }
        data.velocities[this.m_indexA].w = wA;
        data.velocities[this.m_indexB].w = wB;
    }
    /** @internal protected */ SolvePositionConstraints(data) {
        const cA = data.positions[this.m_indexA].c;
        let aA = data.positions[this.m_indexA].a;
        const cB = data.positions[this.m_indexB].c;
        let aB = data.positions[this.m_indexB].a;
        let linearError = 0;
        const { qA, qB, lalcA, lalcB, rA, rB, d, P, ay } = temp;
        if (this.m_enableLimit) {
            qA.Set(aA);
            qB.Set(aB);
            b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), rA);
            b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), rB);
            b2_math_1.b2Vec2.Subtract(cB, cA, d).Add(rB).Subtract(rA);
            const ax = b2_math_1.b2Rot.MultiplyVec2(qA, this.m_localXAxisA, this.m_ax);
            const sAx = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Add(d, rA, b2_math_1.b2Vec2.s_t0), this.m_ax);
            const sBx = b2_math_1.b2Vec2.Cross(rB, this.m_ax);
            let C = 0;
            const translation = b2_math_1.b2Vec2.Dot(ax, d);
            if (Math.abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b2_common_1.b2_linearSlop) C = translation;
            else if (translation <= this.m_lowerTranslation) C = Math.min(translation - this.m_lowerTranslation, 0);
            else if (translation >= this.m_upperTranslation) C = Math.max(translation - this.m_upperTranslation, 0);
            if (C !== 0) {
                const invMass = this.m_invMassA + this.m_invMassB + this.m_invIA * sAx * sAx + this.m_invIB * sBx * sBx;
                let impulse = 0;
                if (invMass !== 0) impulse = -C / invMass;
                b2_math_1.b2Vec2.Scale(impulse, ax, P);
                const LA = impulse * sAx;
                const LB = impulse * sBx;
                cA.SubtractScaled(this.m_invMassA, P);
                aA -= this.m_invIA * LA;
                cB.AddScaled(this.m_invMassB, P);
                aB += this.m_invIB * LB;
                linearError = Math.abs(C);
            }
        }
        // Solve perpendicular constraint
        {
            qA.Set(aA);
            qB.Set(aB);
            b2_math_1.b2Rot.MultiplyVec2(qA, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, this.m_localCenterA, lalcA), rA);
            b2_math_1.b2Rot.MultiplyVec2(qB, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, this.m_localCenterB, lalcB), rB);
            b2_math_1.b2Vec2.Subtract(cB, cA, d).Add(rB).Subtract(rA);
            b2_math_1.b2Rot.MultiplyVec2(qA, this.m_localYAxisA, ay);
            const sAy = b2_math_1.b2Vec2.Cross(b2_math_1.b2Vec2.Add(d, rA, b2_math_1.b2Vec2.s_t0), ay);
            const sBy = b2_math_1.b2Vec2.Cross(rB, ay);
            const C = b2_math_1.b2Vec2.Dot(d, ay);
            const invMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy;
            let impulse = 0;
            if (invMass !== 0) impulse = -C / invMass;
            b2_math_1.b2Vec2.Scale(impulse, ay, P);
            const LA = impulse * sAy;
            const LB = impulse * sBy;
            cA.SubtractScaled(this.m_invMassA, P);
            aA -= this.m_invIA * LA;
            cB.AddScaled(this.m_invMassB, P);
            aB += this.m_invIB * LB;
            linearError = Math.max(linearError, Math.abs(C));
        }
        data.positions[this.m_indexA].a = aA;
        data.positions[this.m_indexB].a = aB;
        return linearError <= b2_common_1.b2_linearSlop;
    }
    GetAnchorA(out) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
    }
    GetAnchorB(out) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
    }
    GetReactionForce(inv_dt, out) {
        const f = this.m_springImpulse + this.m_lowerImpulse - this.m_upperImpulse;
        out.x = inv_dt * (this.m_impulse * this.m_ay.x + f * this.m_ax.x);
        out.y = inv_dt * (this.m_impulse * this.m_ay.y + f * this.m_ax.y);
        return out;
    }
    GetReactionTorque(inv_dt) {
        return inv_dt * this.m_motorImpulse;
    }
    /** The local anchor point relative to bodyA's origin. */ GetLocalAnchorA() {
        return this.m_localAnchorA;
    }
    /** The local anchor point relative to bodyB's origin. */ GetLocalAnchorB() {
        return this.m_localAnchorB;
    }
    /** The local joint axis relative to bodyA. */ GetLocalAxisA() {
        return this.m_localXAxisA;
    }
    /** Get the current joint translation, usually in meters. */ GetJointTranslation() {
        const bA = this.m_bodyA;
        const bB = this.m_bodyB;
        const { pA, pB, d, axis } = temp;
        bA.GetWorldPoint(this.m_localAnchorA, pA);
        bB.GetWorldPoint(this.m_localAnchorB, pB);
        b2_math_1.b2Vec2.Subtract(pB, pA, d);
        bA.GetWorldVector(this.m_localXAxisA, axis);
        const translation = b2_math_1.b2Vec2.Dot(d, axis);
        return translation;
    }
    /** Get the current joint linear speed, usually in meters per second. */ GetJointLinearSpeed() {
        const bA = this.m_bodyA;
        const bB = this.m_bodyB;
        const { rA, rB, lalcA, lalcB, axis } = temp;
        b2_math_1.b2Rot.MultiplyVec2(bA.m_xf.q, b2_math_1.b2Vec2.Subtract(this.m_localAnchorA, bA.m_sweep.localCenter, lalcA), rA);
        b2_math_1.b2Rot.MultiplyVec2(bB.m_xf.q, b2_math_1.b2Vec2.Subtract(this.m_localAnchorB, bB.m_sweep.localCenter, lalcB), rB);
        const p1 = b2_math_1.b2Vec2.Add(bA.m_sweep.c, rA, b2_math_1.b2Vec2.s_t0);
        const p2 = b2_math_1.b2Vec2.Add(bB.m_sweep.c, rB, b2_math_1.b2Vec2.s_t1);
        const d = b2_math_1.b2Vec2.Subtract(p2, p1, b2_math_1.b2Vec2.s_t2);
        b2_math_1.b2Rot.MultiplyVec2(bA.m_xf.q, this.m_localXAxisA, axis);
        const vA = bA.m_linearVelocity;
        const vB = bB.m_linearVelocity;
        const wA = bA.m_angularVelocity;
        const wB = bB.m_angularVelocity;
        const speed = b2_math_1.b2Vec2.Dot(d, b2_math_1.b2Vec2.CrossScalarVec2(wA, axis, b2_math_1.b2Vec2.s_t0)) + b2_math_1.b2Vec2.Dot(axis, b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, rB, b2_math_1.b2Vec2.s_t0).Subtract(vA).Subtract(b2_math_1.b2Vec2.CrossScalarVec2(wA, rA, b2_math_1.b2Vec2.s_t1)));
        return speed;
    }
    /** Get the current joint angle in radians. */ GetJointAngle() {
        return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a;
    }
    /** Get the current joint angular speed in radians per second. */ GetJointAngularSpeed() {
        const wA = this.m_bodyA.m_angularVelocity;
        const wB = this.m_bodyB.m_angularVelocity;
        return wB - wA;
    }
    /** Is the joint motor enabled? */ IsMotorEnabled() {
        return this.m_enableMotor;
    }
    /** Enable/disable the joint motor. */ EnableMotor(flag) {
        if (flag !== this.m_enableMotor) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_enableMotor = flag;
        }
        return flag;
    }
    /** Set the motor speed, usually in radians per second. */ SetMotorSpeed(speed) {
        if (speed !== this.m_motorSpeed) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_motorSpeed = speed;
        }
        return speed;
    }
    /** Set the maximum motor force, usually in N-m. */ SetMaxMotorTorque(torque) {
        if (torque !== this.m_maxMotorTorque) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_maxMotorTorque = torque;
        }
    }
    /** Get the current motor torque given the inverse time step, usually in N-m. */ GetMotorTorque(inv_dt) {
        return inv_dt * this.m_motorImpulse;
    }
    /**
     * Is the joint limit enabled?
     */ IsLimitEnabled() {
        return this.m_enableLimit;
    }
    /**
     * Enable/disable the joint translation limit.
     */ EnableLimit(flag) {
        if (flag !== this.m_enableLimit) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_enableLimit = flag;
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
        }
        return flag;
    }
    /**
     * Get the lower joint translation limit, usually in meters.
     */ GetLowerLimit() {
        return this.m_lowerTranslation;
    }
    /**
     * Get the upper joint translation limit, usually in meters.
     */ GetUpperLimit() {
        return this.m_upperTranslation;
    }
    /**
     * Set the joint translation limits, usually in meters.
     */ SetLimits(lower, upper) {
        // b2Assert(lower <= upper);
        if (lower !== this.m_lowerTranslation || upper !== this.m_upperTranslation) {
            this.m_bodyA.SetAwake(true);
            this.m_bodyB.SetAwake(true);
            this.m_lowerTranslation = lower;
            this.m_upperTranslation = upper;
            this.m_lowerImpulse = 0;
            this.m_upperImpulse = 0;
        }
    }
    Draw(draw) {
        const { p1, p2, pA, pB, axis } = temp.Draw;
        const xfA = this.m_bodyA.GetTransform();
        const xfB = this.m_bodyB.GetTransform();
        b2_math_1.b2Transform.MultiplyVec2(xfA, this.m_localAnchorA, pA);
        b2_math_1.b2Transform.MultiplyVec2(xfB, this.m_localAnchorB, pB);
        b2_math_1.b2Rot.MultiplyVec2(xfA.q, this.m_localXAxisA, axis);
        draw.DrawSegment(pA, pB, b2_draw_1.debugColors.joint5);
        if (this.m_enableLimit) {
            const { lower, upper, perp } = temp.Draw;
            b2_math_1.b2Vec2.AddScaled(pA, this.m_lowerTranslation, axis, lower);
            b2_math_1.b2Vec2.AddScaled(pA, this.m_upperTranslation, axis, upper);
            b2_math_1.b2Rot.MultiplyVec2(xfA.q, this.m_localYAxisA, perp);
            draw.DrawSegment(lower, upper, b2_draw_1.debugColors.joint1);
            draw.DrawSegment(b2_math_1.b2Vec2.SubtractScaled(lower, 0.5, perp, p1), b2_math_1.b2Vec2.AddScaled(lower, 0.5, perp, p2), b2_draw_1.debugColors.joint2);
            draw.DrawSegment(b2_math_1.b2Vec2.SubtractScaled(upper, 0.5, perp, p1), b2_math_1.b2Vec2.AddScaled(upper, 0.5, perp, p2), b2_draw_1.debugColors.joint3);
        } else draw.DrawSegment(b2_math_1.b2Vec2.Subtract(pA, axis, p1), b2_math_1.b2Vec2.Add(pA, axis, p2), b2_draw_1.debugColors.joint1);
        draw.DrawPoint(pA, 5, b2_draw_1.debugColors.joint1);
        draw.DrawPoint(pB, 5, b2_draw_1.debugColors.joint4);
    }
}
exports.b2WheelJoint = b2WheelJoint;

},{"1bcdc0c5e6720369":"a1SE4","7ade33effe47b92f":"3MJcc","b85b245e74da631e":"kS3Lm","febc7ba37b26f7c5":"cc6XX"}],"7MfSP":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2ContactManager = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_broad_phase_1 = require("1ef725c14c3609bc");
const b2_contact_factory_1 = require("f8089d9a5f4a2678");
const b2_body_1 = require("141f14fbf9817ece");
const b2_world_callbacks_1 = require("313ae8c90dc248c6");
/** Delegate of b2World. */ class b2ContactManager {
    constructor(){
        this.m_broadPhase = new b2_broad_phase_1.b2BroadPhase();
        this.m_contactList = null;
        this.m_contactCount = 0;
        this.m_contactFilter = b2_world_callbacks_1.b2ContactFilter.b2_defaultFilter;
        this.m_contactListener = b2_world_callbacks_1.b2ContactListener.b2_defaultListener;
        this.m_contactFactory = new b2_contact_factory_1.b2ContactFactory();
        /** Broad-phase callback. */ this.AddPair = (proxyA, proxyB)=>{
            // DEBUG: b2Assert(proxyA instanceof b2FixtureProxy);
            // DEBUG: b2Assert(proxyB instanceof b2FixtureProxy);
            let fixtureA = proxyA.fixture;
            let fixtureB = proxyB.fixture;
            let indexA = proxyA.childIndex;
            let indexB = proxyB.childIndex;
            let bodyA = fixtureA.GetBody();
            let bodyB = fixtureB.GetBody();
            // Are the fixtures on the same body?
            if (bodyA === bodyB) return;
            // TODO_ERIN use a hash table to remove a potential bottleneck when both
            // bodies have a lot of contacts.
            // Does a contact already exist?
            let edge = bodyB.GetContactList();
            while(edge){
                if (edge.other === bodyA) {
                    const fA = edge.contact.GetFixtureA();
                    const fB = edge.contact.GetFixtureB();
                    const iA = edge.contact.GetChildIndexA();
                    const iB = edge.contact.GetChildIndexB();
                    if (fA === fixtureA && fB === fixtureB && iA === indexA && iB === indexB) // A contact already exists.
                    return;
                    if (fA === fixtureB && fB === fixtureA && iA === indexB && iB === indexA) // A contact already exists.
                    return;
                }
                edge = edge.next;
            }
            // Does a joint override collision? Is at least one body dynamic?
            if (bodyB.ShouldCollide(bodyA) === false) return;
            // Check user filtering.
            if (this.m_contactFilter && !this.m_contactFilter.ShouldCollide(fixtureA, fixtureB)) return;
            // Call the factory.
            const c = this.m_contactFactory.Create(fixtureA, indexA, fixtureB, indexB);
            if (c === null) return;
            // Contact creation may swap fixtures.
            fixtureA = c.GetFixtureA();
            fixtureB = c.GetFixtureB();
            indexA = c.GetChildIndexA();
            indexB = c.GetChildIndexB();
            bodyA = fixtureA.m_body;
            bodyB = fixtureB.m_body;
            // Insert into the world.
            c.m_prev = null;
            c.m_next = this.m_contactList;
            if (this.m_contactList !== null) this.m_contactList.m_prev = c;
            this.m_contactList = c;
            // Connect to island graph.
            // Connect to body A
            c.m_nodeA.other = bodyB;
            c.m_nodeA.prev = null;
            c.m_nodeA.next = bodyA.m_contactList;
            if (bodyA.m_contactList !== null) bodyA.m_contactList.prev = c.m_nodeA;
            bodyA.m_contactList = c.m_nodeA;
            // Connect to body B
            c.m_nodeB.other = bodyA;
            c.m_nodeB.prev = null;
            c.m_nodeB.next = bodyB.m_contactList;
            if (bodyB.m_contactList !== null) bodyB.m_contactList.prev = c.m_nodeB;
            bodyB.m_contactList = c.m_nodeB;
            ++this.m_contactCount;
        };
    }
    FindNewContacts() {
        this.m_broadPhase.UpdatePairs(this.AddPair);
    }
    Destroy(c) {
        const fixtureA = c.GetFixtureA();
        const fixtureB = c.GetFixtureB();
        const bodyA = fixtureA.GetBody();
        const bodyB = fixtureB.GetBody();
        if (this.m_contactListener && c.IsTouching()) this.m_contactListener.EndContact(c);
        // Remove from the world.
        if (c.m_prev) c.m_prev.m_next = c.m_next;
        if (c.m_next) c.m_next.m_prev = c.m_prev;
        if (c === this.m_contactList) this.m_contactList = c.m_next;
        // Remove from body 1
        if (c.m_nodeA.prev) c.m_nodeA.prev.next = c.m_nodeA.next;
        if (c.m_nodeA.next) c.m_nodeA.next.prev = c.m_nodeA.prev;
        if (c.m_nodeA === bodyA.m_contactList) bodyA.m_contactList = c.m_nodeA.next;
        // Remove from body 2
        if (c.m_nodeB.prev) c.m_nodeB.prev.next = c.m_nodeB.next;
        if (c.m_nodeB.next) c.m_nodeB.next.prev = c.m_nodeB.prev;
        if (c.m_nodeB === bodyB.m_contactList) bodyB.m_contactList = c.m_nodeB.next;
        // moved this from b2ContactFactory:Destroy
        if (c.m_manifold.pointCount > 0 && !fixtureA.IsSensor() && !fixtureB.IsSensor()) {
            fixtureA.GetBody().SetAwake(true);
            fixtureB.GetBody().SetAwake(true);
        }
        // Call the factory.
        this.m_contactFactory.Destroy(c);
        --this.m_contactCount;
    }
    /**
     * This is the top level collision call for the time step. Here
     * all the narrow phase collision is processed for the world
     * contact list.
     */ Collide() {
        // Update awake contacts.
        let c = this.m_contactList;
        while(c){
            const fixtureA = c.GetFixtureA();
            const fixtureB = c.GetFixtureB();
            const indexA = c.GetChildIndexA();
            const indexB = c.GetChildIndexB();
            const bodyA = fixtureA.GetBody();
            const bodyB = fixtureB.GetBody();
            // Is this contact flagged for filtering?
            if (c.m_filterFlag) {
                if (// Should these bodies collide?
                !bodyB.ShouldCollide(bodyA) || // Check user filtering.
                this.m_contactFilter && !this.m_contactFilter.ShouldCollide(fixtureA, fixtureB)) {
                    const cNuke = c;
                    c = cNuke.m_next;
                    this.Destroy(cNuke);
                    continue;
                }
                // Clear the filtering flag.
                c.m_filterFlag = false;
            }
            const activeA = bodyA.IsAwake() && bodyA.m_type !== b2_body_1.b2BodyType.b2_staticBody;
            const activeB = bodyB.IsAwake() && bodyB.m_type !== b2_body_1.b2BodyType.b2_staticBody;
            // At least one body must be awake and it must be dynamic or kinematic.
            if (!activeA && !activeB) {
                c = c.m_next;
                continue;
            }
            const treeNodeA = fixtureA.m_proxies[indexA].treeNode;
            const treeNodeB = fixtureB.m_proxies[indexB].treeNode;
            const overlap = treeNodeA.aabb.TestOverlap(treeNodeB.aabb);
            // Here we destroy contacts that cease to overlap in the broad-phase.
            if (!overlap) {
                const cNuke = c;
                c = cNuke.m_next;
                this.Destroy(cNuke);
                continue;
            }
            // The contact persists.
            c.Update(this.m_contactListener);
            c = c.m_next;
        }
    }
}
exports.b2ContactManager = b2ContactManager;

},{"1ef725c14c3609bc":"kL16e","f8089d9a5f4a2678":"i7kJh","141f14fbf9817ece":"2fDAF","313ae8c90dc248c6":"6cbkZ"}],"i7kJh":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2ContactFactory = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_shape_1 = require("64509b0a6552cb7c");
const b2_circle_contact_1 = require("ff0a5858781a4e4");
const b2_polygon_contact_1 = require("2fa8a21a168f9cba");
const b2_polygon_circle_contact_1 = require("839bdd26f52f05f4");
const b2_edge_circle_contact_1 = require("aa41b3b992e0ff65");
const b2_edge_polygon_contact_1 = require("a08ddca54261dd93");
const b2_chain_circle_contact_1 = require("222391e60cff02c1");
const b2_chain_polygon_contact_1 = require("d80a2b392bc7f8f3");
class b2ContactFactory {
    constructor(){
        const result = new Array(b2_shape_1.b2ShapeType.e_typeCount);
        for(let i = 0; i < b2_shape_1.b2ShapeType.e_typeCount; i++)result[i] = new Array(b2_shape_1.b2ShapeType.e_typeCount);
        this.m_registers = result;
        this.AddType(b2_circle_contact_1.b2CircleContact, b2_shape_1.b2ShapeType.e_circle, b2_shape_1.b2ShapeType.e_circle);
        this.AddType(b2_polygon_circle_contact_1.b2PolygonAndCircleContact, b2_shape_1.b2ShapeType.e_polygon, b2_shape_1.b2ShapeType.e_circle);
        this.AddType(b2_polygon_contact_1.b2PolygonContact, b2_shape_1.b2ShapeType.e_polygon, b2_shape_1.b2ShapeType.e_polygon);
        this.AddType(b2_edge_circle_contact_1.b2EdgeAndCircleContact, b2_shape_1.b2ShapeType.e_edge, b2_shape_1.b2ShapeType.e_circle);
        this.AddType(b2_edge_polygon_contact_1.b2EdgeAndPolygonContact, b2_shape_1.b2ShapeType.e_edge, b2_shape_1.b2ShapeType.e_polygon);
        this.AddType(b2_chain_circle_contact_1.b2ChainAndCircleContact, b2_shape_1.b2ShapeType.e_chain, b2_shape_1.b2ShapeType.e_circle);
        this.AddType(b2_chain_polygon_contact_1.b2ChainAndPolygonContact, b2_shape_1.b2ShapeType.e_chain, b2_shape_1.b2ShapeType.e_polygon);
    }
    AddType(Contact, typeA, typeB) {
        const pool = [];
        const destroyFcn = (contact)=>{
            pool.push(contact);
        };
        this.m_registers[typeA][typeB] = {
            createFcn (fixtureA, indexA, fixtureB, indexB) {
                var _a;
                const c = (_a = pool.pop()) !== null && _a !== void 0 ? _a : new Contact();
                c.Reset(fixtureA, indexA, fixtureB, indexB);
                return c;
            },
            destroyFcn
        };
        if (typeA !== typeB) this.m_registers[typeB][typeA] = {
            createFcn (fixtureA, indexA, fixtureB, indexB) {
                var _a;
                const c = (_a = pool.pop()) !== null && _a !== void 0 ? _a : new Contact();
                c.Reset(fixtureB, indexB, fixtureA, indexA);
                return c;
            },
            destroyFcn
        };
    }
    Create(fixtureA, indexA, fixtureB, indexB) {
        const typeA = fixtureA.GetType();
        const typeB = fixtureB.GetType();
        // DEBUG: b2Assert(0 <= typeA && typeA < b2ShapeType.e_typeCount);
        // DEBUG: b2Assert(0 <= typeB && typeB < b2ShapeType.e_typeCount);
        const reg = this.m_registers[typeA][typeB];
        return reg ? reg.createFcn(fixtureA, indexA, fixtureB, indexB) : null;
    }
    Destroy(contact) {
        const typeA = contact.m_fixtureA.GetType();
        const typeB = contact.m_fixtureB.GetType();
        // DEBUG: b2Assert(0 <= typeA && typeB < b2ShapeType.e_typeCount);
        // DEBUG: b2Assert(0 <= typeA && typeB < b2ShapeType.e_typeCount);
        const reg = this.m_registers[typeA][typeB];
        reg === null || reg === void 0 || reg.destroyFcn(contact);
    }
}
exports.b2ContactFactory = b2ContactFactory;

},{"64509b0a6552cb7c":"6cP2p","ff0a5858781a4e4":"ggQhz","2fa8a21a168f9cba":"c56v6","839bdd26f52f05f4":"j6iVJ","aa41b3b992e0ff65":"hJYyW","a08ddca54261dd93":"6XFM9","222391e60cff02c1":"dPHT0","d80a2b392bc7f8f3":"5u0ae"}],"ggQhz":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2CircleContact = void 0;
const b2_collide_circle_1 = require("f079d2ac2a02c078");
const b2_contact_1 = require("42b171a3411d806a");
/** @internal */ class b2CircleContact extends b2_contact_1.b2Contact {
    Evaluate(manifold, xfA, xfB) {
        (0, b2_collide_circle_1.b2CollideCircles)(manifold, this.GetShapeA(), xfA, this.GetShapeB(), xfB);
    }
}
exports.b2CircleContact = b2CircleContact;

},{"f079d2ac2a02c078":"iDKyQ","42b171a3411d806a":"6EKpb"}],"6EKpb":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2Contact = exports.b2ContactEdge = exports.b2MixRestitutionThreshold = exports.b2MixRestitution = exports.b2MixFriction = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_common_1 = require("3a6baa0325b31302");
const b2_collision_1 = require("9093c3e94ef84c3d");
/**
 * Friction mixing law. The idea is to allow either fixture to drive the friction to zero.
 * For example, anything slides on ice.
 */ function b2MixFriction(friction1, friction2) {
    return Math.sqrt(friction1 * friction2);
}
exports.b2MixFriction = b2MixFriction;
/**
 * Restitution mixing law. The idea is allow for anything to bounce off an inelastic surface.
 * For example, a superball bounces on anything.
 */ function b2MixRestitution(restitution1, restitution2) {
    return restitution1 > restitution2 ? restitution1 : restitution2;
}
exports.b2MixRestitution = b2MixRestitution;
/**
 * Restitution mixing law. This picks the lowest value.
 */ function b2MixRestitutionThreshold(threshold1, threshold2) {
    return threshold1 < threshold2 ? threshold1 : threshold2;
}
exports.b2MixRestitutionThreshold = b2MixRestitutionThreshold;
/**
 * A contact edge is used to connect bodies and contacts together
 * in a contact graph where each body is a node and each contact
 * is an edge. A contact edge belongs to a doubly linked list
 * maintained in each attached body. Each contact has two contact
 * nodes, one for each attached body.
 */ class b2ContactEdge {
    get other() {
        (0, b2_common_1.b2Assert)(this.m_other !== null);
        return this.m_other;
    }
    set other(value) {
        (0, b2_common_1.b2Assert)(this.m_other === null);
        this.m_other = value;
    }
    constructor(contact){
        /** Provides quick access to the other body attached. */ this.m_other = null;
        /** The previous contact edge in the body's contact list */ this.prev = null;
        /** The next contact edge in the body's contact list */ this.next = null;
        this.contact = contact;
    }
    Reset() {
        this.m_other = null;
        this.prev = null;
        this.next = null;
    }
}
exports.b2ContactEdge = b2ContactEdge;
/**
 * The class manages contact between two shapes. A contact exists for each overlapping
 * AABB in the broad-phase (except if filtered). Therefore a contact object may exist
 * that has no contact points.
 */ class b2Contact {
    constructor(){
        /**
         * Used when crawling contact graph when forming islands.
         *
         * @internal protected
         */ this.m_islandFlag = false;
        /**
         * Set when the shapes are touching.
         *
         * @internal protected
         */ this.m_touchingFlag = false;
        /**
         * This contact can be disabled (by user)
         *
         * @internal protected
         */ this.m_enabledFlag = false;
        /**
         * This contact needs filtering because a fixture filter was changed.
         *
         * @internal protected
         */ this.m_filterFlag = false;
        /**
         * This bullet contact had a TOI event
         *
         * @internal protected
         */ this.m_bulletHitFlag = false;
        /**
         * This contact has a valid TOI in m_toi
         *
         * @internal protected
         */ this.m_toiFlag = false;
        /**
         * World pool and list pointers.
         *
         * @internal protected
         */ this.m_prev = null;
        /** @internal protected */ this.m_next = null;
        /**
         * Nodes for connecting bodies.
         *
         * @internal protected
         */ this.m_nodeA = new b2ContactEdge(this);
        /** @internal protected */ this.m_nodeB = new b2ContactEdge(this);
        /** @internal protected */ this.m_indexA = 0;
        /** @internal protected */ this.m_indexB = 0;
        /** @internal protected */ this.m_manifold = new b2_collision_1.b2Manifold(); // TODO: readonly
        /** @internal protected */ this.m_toiCount = 0;
        /** @internal protected */ this.m_toi = 0;
        /** @internal protected */ this.m_friction = 0;
        /** @internal protected */ this.m_restitution = 0;
        /** @internal protected */ this.m_restitutionThreshold = 0;
        /** @internal protected */ this.m_tangentSpeed = 0;
        this.m_oldManifold = new b2_collision_1.b2Manifold(); // TODO: readonly
    }
    /**
     * Get the contact manifold.
     * Do not modify the manifold unless you understand the internals of Box2D.
     */ GetManifold() {
        return this.m_manifold;
    }
    /** Get the world manifold. */ GetWorldManifold(worldManifold) {
        const bodyA = this.m_fixtureA.GetBody();
        const bodyB = this.m_fixtureB.GetBody();
        const shapeA = this.GetShapeA();
        const shapeB = this.GetShapeB();
        worldManifold.Initialize(this.m_manifold, bodyA.GetTransform(), shapeA.m_radius, bodyB.GetTransform(), shapeB.m_radius);
    }
    /** Is this contact touching? */ IsTouching() {
        return this.m_touchingFlag;
    }
    /**
     * Enable/disable this contact. This can be used inside the pre-solve
     * contact listener. The contact is only disabled for the current
     * time step (or sub-step in continuous collisions).
     */ SetEnabled(flag) {
        this.m_enabledFlag = flag;
    }
    /** Has this contact been disabled? */ IsEnabled() {
        return this.m_enabledFlag;
    }
    /** Get the next contact in the world's contact list. */ GetNext() {
        return this.m_next;
    }
    /** Get fixture A in this contact. */ GetFixtureA() {
        return this.m_fixtureA;
    }
    /** Get the child primitive index for fixture A. */ GetChildIndexA() {
        return this.m_indexA;
    }
    /** Get fixture A in this contact. */ GetShapeA() {
        return this.m_fixtureA.GetShape();
    }
    /** Get fixture B in this contact. */ GetFixtureB() {
        return this.m_fixtureB;
    }
    /** Get the child primitive index for fixture B. */ GetChildIndexB() {
        return this.m_indexB;
    }
    GetShapeB() {
        return this.m_fixtureB.GetShape();
    }
    /**
     * Flag this contact for filtering. Filtering will occur the next time step.
     *
     * @internal protected
     */ FlagForFiltering() {
        this.m_filterFlag = true;
    }
    /**
     * Override the default friction mixture.
     * You can call this in b2ContactListener::PreSolve.
     * This value persists until set or reset.
     */ SetFriction(friction) {
        this.m_friction = friction;
    }
    /** Get the friction. */ GetFriction() {
        return this.m_friction;
    }
    /** Reset the friction mixture to the default value. */ ResetFriction() {
        this.m_friction = b2MixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
    }
    /**
     * Override the default restitution mixture.
     * You can call this in b2ContactListener::PreSolve.
     * The value persists until you set or reset.
     */ SetRestitution(restitution) {
        this.m_restitution = restitution;
    }
    /** Get the restitution. */ GetRestitution() {
        return this.m_restitution;
    }
    /** Reset the restitution to the default value. */ ResetRestitution() {
        this.m_restitution = b2MixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
    }
    /**
     * Override the default restitution velocity threshold mixture. You can call this in b2ContactListener::PreSolve.
     * The value persists until you set or reset.
     */ SetRestitutionThreshold(threshold) {
        this.m_restitutionThreshold = threshold;
    }
    /**
     * Get the restitution threshold.
     */ GetRestitutionThreshold() {
        return this.m_restitutionThreshold;
    }
    /**
     * Reset the restitution threshold to the default value.
     */ ResetRestitutionThreshold() {
        this.m_restitutionThreshold = b2MixRestitutionThreshold(this.m_fixtureA.m_restitutionThreshold, this.m_fixtureB.m_restitutionThreshold);
    }
    /** Set the desired tangent speed for a conveyor belt behavior. In meters per second. */ SetTangentSpeed(speed) {
        this.m_tangentSpeed = speed;
    }
    /** Get the desired tangent speed. In meters per second. */ GetTangentSpeed() {
        return this.m_tangentSpeed;
    }
    Reset(fixtureA, indexA, fixtureB, indexB) {
        this.m_islandFlag = false;
        this.m_touchingFlag = false;
        this.m_enabledFlag = true;
        this.m_filterFlag = false;
        this.m_bulletHitFlag = false;
        this.m_toiFlag = false;
        this.m_fixtureA = fixtureA;
        this.m_fixtureB = fixtureB;
        this.m_indexA = indexA;
        this.m_indexB = indexB;
        this.m_manifold.pointCount = 0;
        this.m_prev = null;
        this.m_next = null;
        this.m_nodeA.Reset();
        this.m_nodeB.Reset();
        this.m_toiCount = 0;
        this.m_friction = b2MixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
        this.m_restitution = b2MixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
        this.m_restitutionThreshold = b2MixRestitutionThreshold(this.m_fixtureA.m_restitutionThreshold, this.m_fixtureB.m_restitutionThreshold);
    }
    /**
     * Update the contact manifold and touching status.
     * Note: do not assume the fixture AABBs are overlapping or are valid.
     *
     * @internal protected
     */ Update(listener) {
        const tManifold = this.m_oldManifold;
        this.m_oldManifold = this.m_manifold;
        this.m_manifold = tManifold;
        // Re-enable this contact.
        this.m_enabledFlag = true;
        let touching = false;
        const wasTouching = this.m_touchingFlag;
        const sensorA = this.m_fixtureA.IsSensor();
        const sensorB = this.m_fixtureB.IsSensor();
        const sensor = sensorA || sensorB;
        const bodyA = this.m_fixtureA.GetBody();
        const bodyB = this.m_fixtureB.GetBody();
        const xfA = bodyA.GetTransform();
        const xfB = bodyB.GetTransform();
        // Is this contact a sensor?
        if (sensor) {
            const shapeA = this.GetShapeA();
            const shapeB = this.GetShapeB();
            touching = (0, b2_collision_1.b2TestOverlap)(shapeA, this.m_indexA, shapeB, this.m_indexB, xfA, xfB);
            // Sensors don't generate manifolds.
            this.m_manifold.pointCount = 0;
        } else {
            this.Evaluate(this.m_manifold, xfA, xfB);
            touching = this.m_manifold.pointCount > 0;
            // Match old contact ids to new contact ids and copy the
            // stored impulses to warm start the solver.
            for(let i = 0; i < this.m_manifold.pointCount; ++i){
                const mp2 = this.m_manifold.points[i];
                mp2.normalImpulse = 0;
                mp2.tangentImpulse = 0;
                const id2 = mp2.id;
                for(let j = 0; j < this.m_oldManifold.pointCount; ++j){
                    const mp1 = this.m_oldManifold.points[j];
                    if (mp1.id.key === id2.key) {
                        mp2.normalImpulse = mp1.normalImpulse;
                        mp2.tangentImpulse = mp1.tangentImpulse;
                        break;
                    }
                }
            }
            if (touching !== wasTouching) {
                bodyA.SetAwake(true);
                bodyB.SetAwake(true);
            }
        }
        this.m_touchingFlag = touching;
        if (!wasTouching && touching && listener) listener.BeginContact(this);
        if (wasTouching && !touching && listener) listener.EndContact(this);
        if (!sensor && touching && listener) listener.PreSolve(this, this.m_oldManifold);
    }
}
exports.b2Contact = b2Contact;

},{"3a6baa0325b31302":"a1SE4","9093c3e94ef84c3d":"eLdO6"}],"c56v6":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2PolygonContact = void 0;
const b2_collide_polygon_1 = require("d766089dd2330f82");
const b2_contact_1 = require("26b5a00074193c07");
/** @internal */ class b2PolygonContact extends b2_contact_1.b2Contact {
    Evaluate(manifold, xfA, xfB) {
        (0, b2_collide_polygon_1.b2CollidePolygons)(manifold, this.GetShapeA(), xfA, this.GetShapeB(), xfB);
    }
}
exports.b2PolygonContact = b2PolygonContact;

},{"d766089dd2330f82":"2odhf","26b5a00074193c07":"6EKpb"}],"j6iVJ":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2PolygonAndCircleContact = void 0;
const b2_collide_circle_1 = require("5cdb78fcc654fec3");
const b2_contact_1 = require("824346cc8e904bd4");
/** @internal */ class b2PolygonAndCircleContact extends b2_contact_1.b2Contact {
    Evaluate(manifold, xfA, xfB) {
        (0, b2_collide_circle_1.b2CollidePolygonAndCircle)(manifold, this.GetShapeA(), xfA, this.GetShapeB(), xfB);
    }
}
exports.b2PolygonAndCircleContact = b2PolygonAndCircleContact;

},{"5cdb78fcc654fec3":"iDKyQ","824346cc8e904bd4":"6EKpb"}],"hJYyW":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2EdgeAndCircleContact = void 0;
const b2_collide_edge_1 = require("aea482cc7192ffa1");
const b2_contact_1 = require("5165b46d459da9c0");
/** @internal */ class b2EdgeAndCircleContact extends b2_contact_1.b2Contact {
    Evaluate(manifold, xfA, xfB) {
        (0, b2_collide_edge_1.b2CollideEdgeAndCircle)(manifold, this.GetShapeA(), xfA, this.GetShapeB(), xfB);
    }
}
exports.b2EdgeAndCircleContact = b2EdgeAndCircleContact;

},{"aea482cc7192ffa1":"1F4NA","5165b46d459da9c0":"6EKpb"}],"6XFM9":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2EdgeAndPolygonContact = void 0;
const b2_collide_edge_1 = require("3cc222af18890a07");
const b2_contact_1 = require("5f668a163821f797");
/** @internal */ class b2EdgeAndPolygonContact extends b2_contact_1.b2Contact {
    Evaluate(manifold, xfA, xfB) {
        (0, b2_collide_edge_1.b2CollideEdgeAndPolygon)(manifold, this.GetShapeA(), xfA, this.GetShapeB(), xfB);
    }
}
exports.b2EdgeAndPolygonContact = b2EdgeAndPolygonContact;

},{"3cc222af18890a07":"1F4NA","5f668a163821f797":"6EKpb"}],"dPHT0":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2ChainAndCircleContact = void 0;
const b2_collide_edge_1 = require("81b669de312a2c70");
const b2_edge_shape_1 = require("ab0a740331c0b38");
const b2_contact_1 = require("42cbc36ec4284834");
/** @internal */ class b2ChainAndCircleContact extends b2_contact_1.b2Contact {
    Evaluate(manifold, xfA, xfB) {
        const edge = b2ChainAndCircleContact.Evaluate_s_edge;
        this.GetShapeA().GetChildEdge(edge, this.m_indexA);
        (0, b2_collide_edge_1.b2CollideEdgeAndCircle)(manifold, edge, xfA, this.GetShapeB(), xfB);
    }
}
exports.b2ChainAndCircleContact = b2ChainAndCircleContact;
b2ChainAndCircleContact.Evaluate_s_edge = new b2_edge_shape_1.b2EdgeShape();

},{"81b669de312a2c70":"1F4NA","ab0a740331c0b38":"kNv8x","42cbc36ec4284834":"6EKpb"}],"5u0ae":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2ChainAndPolygonContact = void 0;
const b2_collide_edge_1 = require("cc193d390b74a370");
const b2_edge_shape_1 = require("9d887bf2c25b8ba6");
const b2_contact_1 = require("aebc93813f3d98b9");
/** @internal */ class b2ChainAndPolygonContact extends b2_contact_1.b2Contact {
    Evaluate(manifold, xfA, xfB) {
        const edge = b2ChainAndPolygonContact.Evaluate_s_edge;
        this.GetShapeA().GetChildEdge(edge, this.m_indexA);
        (0, b2_collide_edge_1.b2CollideEdgeAndPolygon)(manifold, edge, xfA, this.GetShapeB(), xfB);
    }
}
exports.b2ChainAndPolygonContact = b2ChainAndPolygonContact;
b2ChainAndPolygonContact.Evaluate_s_edge = new b2_edge_shape_1.b2EdgeShape();

},{"cc193d390b74a370":"1F4NA","9d887bf2c25b8ba6":"kNv8x","aebc93813f3d98b9":"6EKpb"}],"6cbkZ":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2ContactListener = exports.b2ContactImpulse = exports.b2ContactFilter = exports.b2DestructionListener = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_common_1 = require("e8987ccb965a760d");
/**
 * Joints and fixtures are destroyed when their associated
 * body is destroyed. Implement this listener so that you
 * may nullify references to these joints and shapes.
 */ class b2DestructionListener {
    /**
     * Called when any joint is about to be destroyed due
     * to the destruction of one of its attached bodies.
     */ SayGoodbyeJoint(_joint) {}
    /**
     * Called when any fixture is about to be destroyed due
     * to the destruction of its parent body.
     */ SayGoodbyeFixture(_fixture) {}
}
exports.b2DestructionListener = b2DestructionListener;
/**
 * Implement this class to provide collision filtering. In other words, you can implement
 * this class if you want finer control over contact creation.
 */ class b2ContactFilter {
    /**
     * Return true if contact calculations should be performed between these two shapes.
     *
     * @warning for performance reasons this is only called when the AABBs begin to overlap.
     */ ShouldCollide(fixtureA, fixtureB) {
        const filterA = fixtureA.GetFilterData();
        const filterB = fixtureB.GetFilterData();
        if (filterA.groupIndex === filterB.groupIndex && filterA.groupIndex !== 0) return filterA.groupIndex > 0;
        return (filterA.maskBits & filterB.categoryBits) !== 0 && (filterA.categoryBits & filterB.maskBits) !== 0;
    }
}
exports.b2ContactFilter = b2ContactFilter;
b2ContactFilter.b2_defaultFilter = new b2ContactFilter();
/**
 * Contact impulses for reporting. Impulses are used instead of forces because
 * sub-step forces may approach infinity for rigid body collisions. These
 * match up one-to-one with the contact points in b2Manifold.
 */ class b2ContactImpulse {
    constructor(){
        this.normalImpulses = (0, b2_common_1.b2MakeNumberArray)(b2_common_1.b2_maxManifoldPoints);
        this.tangentImpulses = (0, b2_common_1.b2MakeNumberArray)(b2_common_1.b2_maxManifoldPoints);
        this.count = 0;
    }
}
exports.b2ContactImpulse = b2ContactImpulse;
/**
 * Implement this class to get contact information. You can use these results for
 * things like sounds and game logic. You can also get contact results by
 * traversing the contact lists after the time step. However, you might miss
 * some contacts because continuous physics leads to sub-stepping.
 * Additionally you may receive multiple callbacks for the same contact in a
 * single time step.
 * You should strive to make your callbacks efficient because there may be
 * many callbacks per time step.
 *
 * @warning You cannot create/destroy Box2D entities inside these callbacks.
 */ class b2ContactListener {
    /**
     * Called when two fixtures begin to touch.
     */ BeginContact(_contact) {}
    /**
     * Called when two fixtures cease to touch.
     */ EndContact(_contact) {}
    /**
     * This is called after a contact is updated. This allows you to inspect a
     * contact before it goes to the solver. If you are careful, you can modify the
     * contact manifold (e.g. disable contact).
     * A copy of the old manifold is provided so that you can detect changes.
     * Note: this is called only for awake bodies.
     * Note: this is called even when the number of contact points is zero.
     * Note: this is not called for sensors.
     * Note: if you set the number of contact points to zero, you will not
     * get an EndContact callback. However, you may get a BeginContact callback
     * the next step.
     */ PreSolve(_contact, _oldManifold) {}
    /**
     * This lets you inspect a contact after the solver is finished. This is useful
     * for inspecting impulses.
     * Note: the contact manifold does not include time of impact impulses, which can be
     * arbitrarily large if the sub-step is small. Hence the impulse is provided explicitly
     * in a separate data structure.
     * Note: this is only called for contacts that are touching, solid, and awake.
     */ PostSolve(_contact, _impulse) {}
}
exports.b2ContactListener = b2ContactListener;
b2ContactListener.b2_defaultListener = new b2ContactListener();

},{"e8987ccb965a760d":"a1SE4"}],"hjCwq":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2Island = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("3bfc566188143bcb");
const b2_math_1 = require("4cb352a1951acb08");
const b2_timer_1 = require("d920b7e1dac1d889");
const b2_contact_solver_1 = require("7e8a53d0273c16d3");
const b2_body_1 = require("f35dd7f28ee32b55");
const b2_time_step_1 = require("726e226ea29978a1");
const b2_world_callbacks_1 = require("41866bd3fa80eb46");
/*
Position Correction Notes
=========================
I tried the several algorithms for position correction of the 2D revolute joint.
I looked at these systems:
- simple pendulum (1m diameter sphere on massless 5m stick) with initial angular velocity of 100 rad/s.
- suspension bridge with 30 1m long planks of length 1m.
- multi-link chain with 30 1m long links.

Here are the algorithms:

Baumgarte - A fraction of the position error is added to the velocity error. There is no
separate position solver.

Pseudo Velocities - After the velocity solver and position integration,
the position error, Jacobian, and effective mass are recomputed. Then
the velocity constraints are solved with pseudo velocities and a fraction
of the position error is added to the pseudo velocity error. The pseudo
velocities are initialized to zero and there is no warm-starting. After
the position solver, the pseudo velocities are added to the positions.
This is also called the First Order World method or the Position LCP method.

Modified Nonlinear Gauss-Seidel (NGS) - Like Pseudo Velocities except the
position error is re-computed for each constraint and the positions are updated
after the constraint is solved. The radius vectors (aka Jacobians) are
re-computed too (otherwise the algorithm has horrible instability). The pseudo
velocity states are not needed because they are effectively zero at the beginning
of each iteration. Since we have the current position error, we allow the
iterations to terminate early if the error becomes smaller than b2_linearSlop.

Full NGS or just NGS - Like Modified NGS except the effective mass are re-computed
each time a constraint is solved.

Here are the results:
Baumgarte - this is the cheapest algorithm but it has some stability problems,
especially with the bridge. The chain links separate easily close to the root
and they jitter as they struggle to pull together. This is one of the most common
methods in the field. The big drawback is that the position correction artificially
affects the momentum, thus leading to instabilities and false bounce. I used a
bias factor of 0.2. A larger bias factor makes the bridge less stable, a smaller
factor makes joints and contacts more spongy.

Pseudo Velocities - the is more stable than the Baumgarte method. The bridge is
stable. However, joints still separate with large angular velocities. Drag the
simple pendulum in a circle quickly and the joint will separate. The chain separates
easily and does not recover. I used a bias factor of 0.2. A larger value lead to
the bridge collapsing when a heavy cube drops on it.

Modified NGS - this algorithm is better in some ways than Baumgarte and Pseudo
Velocities, but in other ways it is worse. The bridge and chain are much more
stable, but the simple pendulum goes unstable at high angular velocities.

Full NGS - stable in all tests. The joints display good stiffness. The bridge
still sags, but this is better than infinite forces.

Recommendations
Pseudo Velocities are not really worthwhile because the bridge and chain cannot
recover from joint separation. In other cases the benefit over Baumgarte is small.

Modified NGS is not a robust method for the revolute joint due to the violent
instability seen in the simple pendulum. Perhaps it is viable with other constraint
types, especially scalar constraints where the effective mass is a scalar.

This leaves Baumgarte and Full NGS. Baumgarte has small, but manageable instabilities
and is very fast. I don't think we can escape Baumgarte, especially in highly
demanding cases where high constraint fidelity is not needed.

Full NGS is robust and easy on the eyes. I recommend this as an option for
higher fidelity simulation and certainly for suspension bridges and long chains.
Full NGS might be a good choice for ragdolls, especially motorized ragdolls where
joint separation can be problematic. The number of NGS iterations can be reduced
for better performance without harming robustness much.

Each joint in a can be handled differently in the position solver. So I recommend
a system where the user can select the algorithm on a per joint basis. I would
probably default to the slower Full NGS and let the user select the faster
Baumgarte method in performance critical scenarios.
*/ /*
Cache Performance

The Box2D solvers are dominated by cache misses. Data structures are designed
to increase the number of cache hits. Much of misses are due to random access
to body data. The constraint structures are iterated over linearly, which leads
to few cache misses.

The bodies are not accessed during iteration. Instead read only data, such as
the mass values are stored with the constraints. The mutable data are the constraint
impulses and the bodies velocities/positions. The impulses are held inside the
constraint structures. The body velocities/positions are held in compact, temporary
arrays to increase the number of cache hits. Linear and angular velocity are
stored in a single array since multiple arrays lead to multiple misses.
*/ /*
2D Rotation

R = [cos(theta) -sin(theta)]
    [sin(theta) cos(theta) ]

thetaDot = omega

Let q1 = cos(theta), q2 = sin(theta).
R = [q1 -q2]
    [q2  q1]

q1Dot = -thetaDot * q2
q2Dot = thetaDot * q1

q1_new = q1_old - dt * w * q2
q2_new = q2_old + dt * w * q1
then normalize.

This might be faster than computing sin+cos.
However, we can compute sin+cos of the same angle fast.
*/ /** @internal */ class b2Island {
    constructor(bodyCapacity, contactCapacity, jointCapacity, listener){
        this.m_bodyCount = 0;
        this.m_jointCount = 0;
        this.m_contactCount = 0;
        this.m_bodyCapacity = bodyCapacity;
        this.m_listener = listener;
        this.m_bodies = new Array(bodyCapacity);
        this.m_contacts = new Array(contactCapacity);
        this.m_joints = new Array(jointCapacity);
        this.m_velocities = (0, b2_common_1.b2MakeArray)(bodyCapacity, b2_time_step_1.b2Velocity);
        this.m_positions = (0, b2_common_1.b2MakeArray)(bodyCapacity, b2_time_step_1.b2Position);
        this.Resize(bodyCapacity);
    }
    Resize(bodyCapacity) {
        while(this.m_bodyCapacity < bodyCapacity){
            this.m_velocities[this.m_bodyCapacity] = new b2_time_step_1.b2Velocity();
            this.m_positions[this.m_bodyCapacity] = new b2_time_step_1.b2Position();
            this.m_bodyCapacity++;
        }
    }
    Clear() {
        this.m_bodyCount = 0;
        this.m_contactCount = 0;
        this.m_jointCount = 0;
    }
    AddBody(body) {
        // DEBUG: b2Assert(this.m_bodyCount < this.m_bodyCapacity);
        body.m_islandIndex = this.m_bodyCount;
        this.m_bodies[this.m_bodyCount] = body;
        ++this.m_bodyCount;
    }
    AddContact(contact) {
        this.m_contacts[this.m_contactCount++] = contact;
    }
    AddJoint(joint) {
        this.m_joints[this.m_jointCount++] = joint;
    }
    Solve(profile, step, gravity, allowSleep) {
        const timer = b2Island.s_timer.Reset();
        const h = step.dt;
        // Integrate velocities and apply damping. Initialize the body state.
        for(let i = 0; i < this.m_bodyCount; ++i){
            const b = this.m_bodies[i];
            this.m_positions[i].c.Copy(b.m_sweep.c);
            const { a } = b.m_sweep;
            const v = this.m_velocities[i].v.Copy(b.m_linearVelocity);
            let w = b.m_angularVelocity;
            // Store positions for continuous collision.
            b.m_sweep.c0.Copy(b.m_sweep.c);
            b.m_sweep.a0 = b.m_sweep.a;
            if (b.m_type === b2_body_1.b2BodyType.b2_dynamicBody) {
                // Integrate velocities.
                v.x += h * b.m_invMass * (b.m_gravityScale * b.m_mass * gravity.x + b.m_force.x);
                v.y += h * b.m_invMass * (b.m_gravityScale * b.m_mass * gravity.y + b.m_force.y);
                w += h * b.m_invI * b.m_torque;
                // Apply damping.
                // ODE: dv/dt + c * v = 0
                // Solution: v(t) = v0 * exp(-c * t)
                // Time step: v(t + dt) = v0 * exp(-c * (t + dt)) = v0 * exp(-c * t) * exp(-c * dt) = v * exp(-c * dt)
                // v2 = exp(-c * dt) * v1
                // Pade approximation:
                // v2 = v1 * 1 / (1 + c * dt)
                v.Scale(1 / (1 + h * b.m_linearDamping));
                w *= 1 / (1 + h * b.m_angularDamping);
            }
            this.m_positions[i].a = a;
            this.m_velocities[i].w = w;
        }
        timer.Reset();
        // Solver data
        const solverData = b2Island.s_solverData;
        solverData.step.Copy(step);
        solverData.positions = this.m_positions;
        solverData.velocities = this.m_velocities;
        // Initialize velocity constraints.
        const contactSolverDef = b2Island.s_contactSolverDef;
        contactSolverDef.step.Copy(step);
        contactSolverDef.contacts = this.m_contacts;
        contactSolverDef.count = this.m_contactCount;
        contactSolverDef.positions = this.m_positions;
        contactSolverDef.velocities = this.m_velocities;
        const contactSolver = b2Island.s_contactSolver.Initialize(contactSolverDef);
        contactSolver.InitializeVelocityConstraints();
        if (step.warmStarting) contactSolver.WarmStart();
        for(let i = 0; i < this.m_jointCount; ++i)this.m_joints[i].InitVelocityConstraints(solverData);
        profile.solveInit = timer.GetMilliseconds();
        // Solve velocity constraints.
        timer.Reset();
        for(let i = 0; i < step.config.velocityIterations; ++i){
            for(let j = 0; j < this.m_jointCount; ++j)this.m_joints[j].SolveVelocityConstraints(solverData);
            contactSolver.SolveVelocityConstraints();
        }
        // Store impulses for warm starting
        contactSolver.StoreImpulses();
        profile.solveVelocity = timer.GetMilliseconds();
        // Integrate positions.
        for(let i = 0; i < this.m_bodyCount; ++i){
            const { c } = this.m_positions[i];
            let { a } = this.m_positions[i];
            const { v } = this.m_velocities[i];
            let { w } = this.m_velocities[i];
            // Check for large velocities
            const translation = b2_math_1.b2Vec2.Scale(h, v, b2Island.s_translation);
            if (b2_math_1.b2Vec2.Dot(translation, translation) > b2_common_1.b2_maxTranslationSquared) {
                const ratio = b2_common_1.b2_maxTranslation / translation.Length();
                v.Scale(ratio);
            }
            const rotation = h * w;
            if (rotation * rotation > b2_common_1.b2_maxRotationSquared) {
                const ratio = b2_common_1.b2_maxRotation / Math.abs(rotation);
                w *= ratio;
            }
            // Integrate
            c.AddScaled(h, v);
            a += h * w;
            this.m_positions[i].a = a;
            this.m_velocities[i].w = w;
        }
        // Solve position constraints
        timer.Reset();
        let positionSolved = false;
        for(let i = 0; i < step.config.positionIterations; ++i){
            const contactsOkay = contactSolver.SolvePositionConstraints();
            let jointsOkay = true;
            for(let j = 0; j < this.m_jointCount; ++j){
                const jointOkay = this.m_joints[j].SolvePositionConstraints(solverData);
                jointsOkay = jointsOkay && jointOkay;
            }
            if (contactsOkay && jointsOkay) {
                // Exit early if the position errors are small.
                positionSolved = true;
                break;
            }
        }
        // Copy state buffers back to the bodies
        for(let i = 0; i < this.m_bodyCount; ++i){
            const body = this.m_bodies[i];
            body.m_sweep.c.Copy(this.m_positions[i].c);
            body.m_sweep.a = this.m_positions[i].a;
            body.m_linearVelocity.Copy(this.m_velocities[i].v);
            body.m_angularVelocity = this.m_velocities[i].w;
            body.SynchronizeTransform();
        }
        profile.solvePosition = timer.GetMilliseconds();
        this.Report(contactSolver.m_velocityConstraints);
        if (allowSleep) {
            let minSleepTime = b2_common_1.b2_maxFloat;
            const linTolSqr = b2_common_1.b2_linearSleepTolerance * b2_common_1.b2_linearSleepTolerance;
            const angTolSqr = b2_common_1.b2_angularSleepTolerance * b2_common_1.b2_angularSleepTolerance;
            for(let i = 0; i < this.m_bodyCount; ++i){
                const b = this.m_bodies[i];
                if (b.GetType() === b2_body_1.b2BodyType.b2_staticBody) continue;
                if (!b.m_autoSleepFlag || b.m_angularVelocity * b.m_angularVelocity > angTolSqr || b2_math_1.b2Vec2.Dot(b.m_linearVelocity, b.m_linearVelocity) > linTolSqr) {
                    b.m_sleepTime = 0;
                    minSleepTime = 0;
                } else {
                    b.m_sleepTime += h;
                    minSleepTime = Math.min(minSleepTime, b.m_sleepTime);
                }
            }
            if (minSleepTime >= b2_common_1.b2_timeToSleep && positionSolved) for(let i = 0; i < this.m_bodyCount; ++i){
                const b = this.m_bodies[i];
                b.SetAwake(false);
            }
        }
    }
    SolveTOI(subStep, toiIndexA, toiIndexB) {
        // DEBUG: b2Assert(toiIndexA < this.m_bodyCount);
        // DEBUG: b2Assert(toiIndexB < this.m_bodyCount);
        // Initialize the body state.
        for(let i = 0; i < this.m_bodyCount; ++i){
            const b = this.m_bodies[i];
            this.m_positions[i].c.Copy(b.m_sweep.c);
            this.m_positions[i].a = b.m_sweep.a;
            this.m_velocities[i].v.Copy(b.m_linearVelocity);
            this.m_velocities[i].w = b.m_angularVelocity;
        }
        const contactSolverDef = b2Island.s_contactSolverDef;
        contactSolverDef.contacts = this.m_contacts;
        contactSolverDef.count = this.m_contactCount;
        contactSolverDef.step.Copy(subStep);
        contactSolverDef.positions = this.m_positions;
        contactSolverDef.velocities = this.m_velocities;
        const contactSolver = b2Island.s_contactSolver.Initialize(contactSolverDef);
        // Solve position constraints.
        for(let i = 0; i < subStep.config.positionIterations; ++i){
            const contactsOkay = contactSolver.SolveTOIPositionConstraints(toiIndexA, toiIndexB);
            if (contactsOkay) break;
        }
        // Leap of faith to new safe state.
        this.m_bodies[toiIndexA].m_sweep.c0.Copy(this.m_positions[toiIndexA].c);
        this.m_bodies[toiIndexA].m_sweep.a0 = this.m_positions[toiIndexA].a;
        this.m_bodies[toiIndexB].m_sweep.c0.Copy(this.m_positions[toiIndexB].c);
        this.m_bodies[toiIndexB].m_sweep.a0 = this.m_positions[toiIndexB].a;
        // No warm starting is needed for TOI events because warm
        // starting impulses were applied in the discrete solver.
        contactSolver.InitializeVelocityConstraints();
        // Solve velocity constraints.
        for(let i = 0; i < subStep.config.velocityIterations; ++i)contactSolver.SolveVelocityConstraints();
        // Don't store the TOI contact forces for warm starting
        // because they can be quite large.
        const h = subStep.dt;
        // Integrate positions
        for(let i = 0; i < this.m_bodyCount; ++i){
            const { c } = this.m_positions[i];
            let { a } = this.m_positions[i];
            const { v } = this.m_velocities[i];
            let { w } = this.m_velocities[i];
            // Check for large velocities
            const translation = b2_math_1.b2Vec2.Scale(h, v, b2Island.s_translation);
            if (b2_math_1.b2Vec2.Dot(translation, translation) > b2_common_1.b2_maxTranslationSquared) {
                const ratio = b2_common_1.b2_maxTranslation / translation.Length();
                v.Scale(ratio);
            }
            const rotation = h * w;
            if (rotation * rotation > b2_common_1.b2_maxRotationSquared) {
                const ratio = b2_common_1.b2_maxRotation / Math.abs(rotation);
                w *= ratio;
            }
            // Integrate
            c.AddScaled(h, v);
            a += h * w;
            this.m_positions[i].a = a;
            this.m_velocities[i].w = w;
            // Sync bodies
            const body = this.m_bodies[i];
            body.m_sweep.c.Copy(c);
            body.m_sweep.a = a;
            body.m_linearVelocity.Copy(v);
            body.m_angularVelocity = w;
            body.SynchronizeTransform();
        }
        this.Report(contactSolver.m_velocityConstraints);
    }
    Report(constraints) {
        for(let i = 0; i < this.m_contactCount; ++i){
            const c = this.m_contacts[i];
            const vc = constraints[i];
            const impulse = b2Island.s_impulse;
            impulse.count = vc.pointCount;
            for(let j = 0; j < vc.pointCount; ++j){
                impulse.normalImpulses[j] = vc.points[j].normalImpulse;
                impulse.tangentImpulses[j] = vc.points[j].tangentImpulse;
            }
            this.m_listener.PostSolve(c, impulse);
        }
    }
}
exports.b2Island = b2Island;
b2Island.s_timer = new b2_timer_1.b2Timer();
b2Island.s_solverData = new b2_time_step_1.b2SolverData();
b2Island.s_contactSolverDef = new b2_contact_solver_1.b2ContactSolverDef();
b2Island.s_contactSolver = new b2_contact_solver_1.b2ContactSolver();
b2Island.s_translation = new b2_math_1.b2Vec2();
b2Island.s_impulse = new b2_world_callbacks_1.b2ContactImpulse();

},{"3bfc566188143bcb":"a1SE4","4cb352a1951acb08":"3MJcc","d920b7e1dac1d889":"cIbnI","7e8a53d0273c16d3":"7FU5n","f35dd7f28ee32b55":"2fDAF","726e226ea29978a1":"eevv5","41866bd3fa80eb46":"6cbkZ"}],"7FU5n":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2ContactSolver = exports.b2ContactSolverDef = exports.b2ContactVelocityConstraint = exports.b2GetBlockSolve = exports.b2SetBlockSolve = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// DEBUG: import { b2Assert } from "../common/b2_common";
const b2_common_1 = require("b717042dd37ebc66");
const b2_math_1 = require("7d24130e8b8064fc");
const b2_collision_1 = require("88b4effc7cc5f39c");
const b2_time_step_1 = require("b30c93105cac5f54");
let g_blockSolve = true;
function b2SetBlockSolve(value) {
    g_blockSolve = value;
}
exports.b2SetBlockSolve = b2SetBlockSolve;
function b2GetBlockSolve() {
    return g_blockSolve;
}
exports.b2GetBlockSolve = b2GetBlockSolve;
class b2VelocityConstraintPoint {
    constructor(){
        this.rA = new b2_math_1.b2Vec2();
        this.rB = new b2_math_1.b2Vec2();
        this.normalImpulse = 0;
        this.tangentImpulse = 0;
        this.normalMass = 0;
        this.tangentMass = 0;
        this.velocityBias = 0;
    }
}
/** @internal */ class b2ContactVelocityConstraint {
    constructor(){
        this.points = (0, b2_common_1.b2MakeArray)(b2_common_1.b2_maxManifoldPoints, b2VelocityConstraintPoint);
        this.normal = new b2_math_1.b2Vec2();
        this.tangent = new b2_math_1.b2Vec2();
        this.normalMass = new b2_math_1.b2Mat22();
        this.K = new b2_math_1.b2Mat22();
        this.indexA = 0;
        this.indexB = 0;
        this.invMassA = 0;
        this.invMassB = 0;
        this.invIA = 0;
        this.invIB = 0;
        this.friction = 0;
        this.restitution = 0;
        this.threshold = 0;
        this.tangentSpeed = 0;
        this.pointCount = 0;
        this.contactIndex = 0;
    }
}
exports.b2ContactVelocityConstraint = b2ContactVelocityConstraint;
class b2ContactPositionConstraint {
    constructor(){
        this.localPoints = (0, b2_common_1.b2MakeArray)(b2_common_1.b2_maxManifoldPoints, b2_math_1.b2Vec2);
        this.localNormal = new b2_math_1.b2Vec2();
        this.localPoint = new b2_math_1.b2Vec2();
        this.indexA = 0;
        this.indexB = 0;
        this.invMassA = 0;
        this.invMassB = 0;
        this.localCenterA = new b2_math_1.b2Vec2();
        this.localCenterB = new b2_math_1.b2Vec2();
        this.invIA = 0;
        this.invIB = 0;
        this.type = b2_collision_1.b2ManifoldType.e_circles;
        this.radiusA = 0;
        this.radiusB = 0;
        this.pointCount = 0;
    }
}
/** @internal */ class b2ContactSolverDef {
    constructor(){
        this.step = b2_time_step_1.b2TimeStep.Create();
        this.count = 0;
    }
}
exports.b2ContactSolverDef = b2ContactSolverDef;
class b2PositionSolverManifold {
    constructor(){
        this.normal = new b2_math_1.b2Vec2();
        this.point = new b2_math_1.b2Vec2();
        this.separation = 0;
    }
    Initialize(pc, xfA, xfB, index) {
        const pointA = b2PositionSolverManifold.Initialize_s_pointA;
        const pointB = b2PositionSolverManifold.Initialize_s_pointB;
        const planePoint = b2PositionSolverManifold.Initialize_s_planePoint;
        const clipPoint = b2PositionSolverManifold.Initialize_s_clipPoint;
        // DEBUG: b2Assert(pc.pointCount > 0);
        switch(pc.type){
            case b2_collision_1.b2ManifoldType.e_circles:
                b2_math_1.b2Transform.MultiplyVec2(xfA, pc.localPoint, pointA);
                b2_math_1.b2Transform.MultiplyVec2(xfB, pc.localPoints[0], pointB);
                b2_math_1.b2Vec2.Subtract(pointB, pointA, this.normal).Normalize();
                b2_math_1.b2Vec2.Mid(pointA, pointB, this.point);
                this.separation = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(pointB, pointA, b2_math_1.b2Vec2.s_t0), this.normal) - pc.radiusA - pc.radiusB;
                break;
            case b2_collision_1.b2ManifoldType.e_faceA:
                b2_math_1.b2Rot.MultiplyVec2(xfA.q, pc.localNormal, this.normal);
                b2_math_1.b2Transform.MultiplyVec2(xfA, pc.localPoint, planePoint);
                b2_math_1.b2Transform.MultiplyVec2(xfB, pc.localPoints[index], clipPoint);
                this.separation = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(clipPoint, planePoint, b2_math_1.b2Vec2.s_t0), this.normal) - pc.radiusA - pc.radiusB;
                this.point.Copy(clipPoint);
                break;
            case b2_collision_1.b2ManifoldType.e_faceB:
                b2_math_1.b2Rot.MultiplyVec2(xfB.q, pc.localNormal, this.normal);
                b2_math_1.b2Transform.MultiplyVec2(xfB, pc.localPoint, planePoint);
                b2_math_1.b2Transform.MultiplyVec2(xfA, pc.localPoints[index], clipPoint);
                this.separation = b2_math_1.b2Vec2.Dot(b2_math_1.b2Vec2.Subtract(clipPoint, planePoint, b2_math_1.b2Vec2.s_t0), this.normal) - pc.radiusA - pc.radiusB;
                this.point.Copy(clipPoint);
                // Ensure normal points from A to B
                this.normal.Negate();
                break;
        }
    }
}
b2PositionSolverManifold.Initialize_s_pointA = new b2_math_1.b2Vec2();
b2PositionSolverManifold.Initialize_s_pointB = new b2_math_1.b2Vec2();
b2PositionSolverManifold.Initialize_s_planePoint = new b2_math_1.b2Vec2();
b2PositionSolverManifold.Initialize_s_clipPoint = new b2_math_1.b2Vec2();
/** @internal */ class b2ContactSolver {
    constructor(){
        this.m_step = b2_time_step_1.b2TimeStep.Create();
        this.m_positionConstraints = (0, b2_common_1.b2MakeArray)(1024, b2ContactPositionConstraint); // TODO: b2Settings
        this.m_velocityConstraints = (0, b2_common_1.b2MakeArray)(1024, b2ContactVelocityConstraint); // TODO: b2Settings
        this.m_count = 0;
    }
    Initialize(def) {
        this.m_step.Copy(def.step);
        this.m_count = def.count;
        // TODO:
        if (this.m_positionConstraints.length < this.m_count) {
            const new_length = Math.max(this.m_positionConstraints.length * 2, this.m_count);
            while(this.m_positionConstraints.length < new_length)this.m_positionConstraints[this.m_positionConstraints.length] = new b2ContactPositionConstraint();
        }
        // TODO:
        if (this.m_velocityConstraints.length < this.m_count) {
            const new_length = Math.max(this.m_velocityConstraints.length * 2, this.m_count);
            while(this.m_velocityConstraints.length < new_length)this.m_velocityConstraints[this.m_velocityConstraints.length] = new b2ContactVelocityConstraint();
        }
        this.m_positions = def.positions;
        this.m_velocities = def.velocities;
        this.m_contacts = def.contacts;
        // Initialize position independent portions of the constraints.
        for(let i = 0; i < this.m_count; ++i){
            const contact = this.m_contacts[i];
            const fixtureA = contact.m_fixtureA;
            const fixtureB = contact.m_fixtureB;
            const shapeA = fixtureA.GetShape();
            const shapeB = fixtureB.GetShape();
            const radiusA = shapeA.m_radius;
            const radiusB = shapeB.m_radius;
            const bodyA = fixtureA.GetBody();
            const bodyB = fixtureB.GetBody();
            const manifold = contact.GetManifold();
            const { pointCount } = manifold;
            // DEBUG: b2Assert(pointCount > 0);
            const vc = this.m_velocityConstraints[i];
            vc.friction = contact.m_friction;
            vc.restitution = contact.m_restitution;
            vc.threshold = contact.m_restitutionThreshold;
            vc.tangentSpeed = contact.m_tangentSpeed;
            vc.indexA = bodyA.m_islandIndex;
            vc.indexB = bodyB.m_islandIndex;
            vc.invMassA = bodyA.m_invMass;
            vc.invMassB = bodyB.m_invMass;
            vc.invIA = bodyA.m_invI;
            vc.invIB = bodyB.m_invI;
            vc.contactIndex = i;
            vc.pointCount = pointCount;
            vc.K.SetZero();
            vc.normalMass.SetZero();
            const pc = this.m_positionConstraints[i];
            pc.indexA = bodyA.m_islandIndex;
            pc.indexB = bodyB.m_islandIndex;
            pc.invMassA = bodyA.m_invMass;
            pc.invMassB = bodyB.m_invMass;
            pc.localCenterA.Copy(bodyA.m_sweep.localCenter);
            pc.localCenterB.Copy(bodyB.m_sweep.localCenter);
            pc.invIA = bodyA.m_invI;
            pc.invIB = bodyB.m_invI;
            pc.localNormal.Copy(manifold.localNormal);
            pc.localPoint.Copy(manifold.localPoint);
            pc.pointCount = pointCount;
            pc.radiusA = radiusA;
            pc.radiusB = radiusB;
            pc.type = manifold.type;
            for(let j = 0; j < pointCount; ++j){
                const cp = manifold.points[j];
                const vcp = vc.points[j];
                if (this.m_step.warmStarting) {
                    vcp.normalImpulse = this.m_step.dtRatio * cp.normalImpulse;
                    vcp.tangentImpulse = this.m_step.dtRatio * cp.tangentImpulse;
                } else {
                    vcp.normalImpulse = 0;
                    vcp.tangentImpulse = 0;
                }
                vcp.rA.SetZero();
                vcp.rB.SetZero();
                vcp.normalMass = 0;
                vcp.tangentMass = 0;
                vcp.velocityBias = 0;
                pc.localPoints[j].Copy(cp.localPoint);
            }
        }
        return this;
    }
    /** Initialize position dependent portions of the velocity constraints. */ InitializeVelocityConstraints() {
        const xfA = b2ContactSolver.InitializeVelocityConstraints_s_xfA;
        const xfB = b2ContactSolver.InitializeVelocityConstraints_s_xfB;
        const worldManifold = b2ContactSolver.InitializeVelocityConstraints_s_worldManifold;
        const k_maxConditionNumber = 1000;
        for(let i = 0; i < this.m_count; ++i){
            const vc = this.m_velocityConstraints[i];
            const pc = this.m_positionConstraints[i];
            const { radiusA, radiusB, localCenterA, localCenterB } = pc;
            const manifold = this.m_contacts[vc.contactIndex].GetManifold();
            const { indexA, indexB, tangent, pointCount } = vc;
            const mA = vc.invMassA;
            const mB = vc.invMassB;
            const iA = vc.invIA;
            const iB = vc.invIB;
            const cA = this.m_positions[indexA].c;
            const aA = this.m_positions[indexA].a;
            const vA = this.m_velocities[indexA].v;
            const wA = this.m_velocities[indexA].w;
            const cB = this.m_positions[indexB].c;
            const aB = this.m_positions[indexB].a;
            const vB = this.m_velocities[indexB].v;
            const wB = this.m_velocities[indexB].w;
            // DEBUG: b2Assert(manifold.pointCount > 0);
            xfA.q.Set(aA);
            xfB.q.Set(aB);
            b2_math_1.b2Vec2.Subtract(cA, b2_math_1.b2Rot.MultiplyVec2(xfA.q, localCenterA, b2_math_1.b2Vec2.s_t0), xfA.p);
            b2_math_1.b2Vec2.Subtract(cB, b2_math_1.b2Rot.MultiplyVec2(xfB.q, localCenterB, b2_math_1.b2Vec2.s_t0), xfB.p);
            worldManifold.Initialize(manifold, xfA, radiusA, xfB, radiusB);
            vc.normal.Copy(worldManifold.normal);
            b2_math_1.b2Vec2.CrossVec2One(vc.normal, tangent); // compute from normal
            for(let j = 0; j < pointCount; ++j){
                const vcp = vc.points[j];
                b2_math_1.b2Vec2.Subtract(worldManifold.points[j], cA, vcp.rA);
                b2_math_1.b2Vec2.Subtract(worldManifold.points[j], cB, vcp.rB);
                const rnA = b2_math_1.b2Vec2.Cross(vcp.rA, vc.normal);
                const rnB = b2_math_1.b2Vec2.Cross(vcp.rB, vc.normal);
                const kNormal = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
                vcp.normalMass = kNormal > 0 ? 1 / kNormal : 0;
                const rtA = b2_math_1.b2Vec2.Cross(vcp.rA, tangent);
                const rtB = b2_math_1.b2Vec2.Cross(vcp.rB, tangent);
                const kTangent = mA + mB + iA * rtA * rtA + iB * rtB * rtB;
                vcp.tangentMass = kTangent > 0 ? 1 / kTangent : 0;
                // Setup a velocity bias for restitution.
                vcp.velocityBias = 0;
                const vRel = b2_math_1.b2Vec2.Dot(vc.normal, b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, vcp.rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, vcp.rA, b2_math_1.b2Vec2.s_t1), b2_math_1.b2Vec2.s_t0));
                if (vRel < -vc.threshold) vcp.velocityBias = -vc.restitution * vRel;
            }
            // If we have two points, then prepare the block solver.
            if (vc.pointCount === 2 && g_blockSolve) {
                const vcp1 = vc.points[0];
                const vcp2 = vc.points[1];
                const rn1A = b2_math_1.b2Vec2.Cross(vcp1.rA, vc.normal);
                const rn1B = b2_math_1.b2Vec2.Cross(vcp1.rB, vc.normal);
                const rn2A = b2_math_1.b2Vec2.Cross(vcp2.rA, vc.normal);
                const rn2B = b2_math_1.b2Vec2.Cross(vcp2.rB, vc.normal);
                const k11 = mA + mB + iA * rn1A * rn1A + iB * rn1B * rn1B;
                const k22 = mA + mB + iA * rn2A * rn2A + iB * rn2B * rn2B;
                const k12 = mA + mB + iA * rn1A * rn2A + iB * rn1B * rn2B;
                // Ensure a reasonable condition number.
                if (k11 * k11 < k_maxConditionNumber * (k11 * k22 - k12 * k12)) {
                    // K is safe to invert.
                    vc.K.ex.Set(k11, k12);
                    vc.K.ey.Set(k12, k22);
                    vc.K.GetInverse(vc.normalMass);
                } else // The constraints are redundant, just use one.
                // TODO_ERIN use deepest?
                vc.pointCount = 1;
            }
        }
    }
    WarmStart() {
        const P = b2ContactSolver.WarmStart_s_P;
        // Warm start.
        for(let i = 0; i < this.m_count; ++i){
            const vc = this.m_velocityConstraints[i];
            const { indexA, indexB, pointCount, normal, tangent } = vc;
            const mA = vc.invMassA;
            const iA = vc.invIA;
            const mB = vc.invMassB;
            const iB = vc.invIB;
            const vA = this.m_velocities[indexA].v;
            let wA = this.m_velocities[indexA].w;
            const vB = this.m_velocities[indexB].v;
            let wB = this.m_velocities[indexB].w;
            for(let j = 0; j < pointCount; ++j){
                const vcp = vc.points[j];
                b2_math_1.b2Vec2.Add(b2_math_1.b2Vec2.Scale(vcp.normalImpulse, normal, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.Scale(vcp.tangentImpulse, tangent, b2_math_1.b2Vec2.s_t1), P);
                wA -= iA * b2_math_1.b2Vec2.Cross(vcp.rA, P);
                vA.SubtractScaled(mA, P);
                wB += iB * b2_math_1.b2Vec2.Cross(vcp.rB, P);
                vB.AddScaled(mB, P);
            }
            this.m_velocities[indexA].w = wA;
            this.m_velocities[indexB].w = wB;
        }
    }
    SolveVelocityConstraints() {
        const dv = b2ContactSolver.SolveVelocityConstraints_s_dv;
        const dv1 = b2ContactSolver.SolveVelocityConstraints_s_dv1;
        const dv2 = b2ContactSolver.SolveVelocityConstraints_s_dv2;
        const P = b2ContactSolver.SolveVelocityConstraints_s_P;
        const a = b2ContactSolver.SolveVelocityConstraints_s_a;
        const b = b2ContactSolver.SolveVelocityConstraints_s_b;
        const x = b2ContactSolver.SolveVelocityConstraints_s_x;
        const d = b2ContactSolver.SolveVelocityConstraints_s_d;
        const P1 = b2ContactSolver.SolveVelocityConstraints_s_P1;
        const P2 = b2ContactSolver.SolveVelocityConstraints_s_P2;
        const P1P2 = b2ContactSolver.SolveVelocityConstraints_s_P1P2;
        for(let i = 0; i < this.m_count; ++i){
            const vc = this.m_velocityConstraints[i];
            const { indexA, indexB, pointCount, normal, tangent, friction } = vc;
            const mA = vc.invMassA;
            const iA = vc.invIA;
            const mB = vc.invMassB;
            const iB = vc.invIB;
            const vA = this.m_velocities[indexA].v;
            let wA = this.m_velocities[indexA].w;
            const vB = this.m_velocities[indexB].v;
            let wB = this.m_velocities[indexB].w;
            // DEBUG: b2Assert(pointCount === 1 || pointCount === 2);
            // Solve tangent constraints first because non-penetration is more important
            // than friction.
            for(let j = 0; j < pointCount; ++j){
                const vcp = vc.points[j];
                // Relative velocity at contact
                b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, vcp.rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, vcp.rA, b2_math_1.b2Vec2.s_t1), dv);
                // Compute tangent force
                const vt = b2_math_1.b2Vec2.Dot(dv, tangent) - vc.tangentSpeed;
                let lambda = vcp.tangentMass * -vt;
                // b2Clamp the accumulated force
                const maxFriction = friction * vcp.normalImpulse;
                const newImpulse = (0, b2_math_1.b2Clamp)(vcp.tangentImpulse + lambda, -maxFriction, maxFriction);
                lambda = newImpulse - vcp.tangentImpulse;
                vcp.tangentImpulse = newImpulse;
                // Apply contact impulse
                b2_math_1.b2Vec2.Scale(lambda, tangent, P);
                vA.SubtractScaled(mA, P);
                wA -= iA * b2_math_1.b2Vec2.Cross(vcp.rA, P);
                vB.AddScaled(mB, P);
                wB += iB * b2_math_1.b2Vec2.Cross(vcp.rB, P);
            }
            // Solve normal constraints
            if (vc.pointCount === 1 || g_blockSolve === false) for(let j = 0; j < pointCount; ++j){
                const vcp = vc.points[j];
                // Relative velocity at contact
                b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, vcp.rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, vcp.rA, b2_math_1.b2Vec2.s_t1), dv);
                // Compute normal impulse
                const vn = b2_math_1.b2Vec2.Dot(dv, normal);
                let lambda = -vcp.normalMass * (vn - vcp.velocityBias);
                // b2Clamp the accumulated impulse
                const newImpulse = Math.max(vcp.normalImpulse + lambda, 0);
                lambda = newImpulse - vcp.normalImpulse;
                vcp.normalImpulse = newImpulse;
                // Apply contact impulse
                b2_math_1.b2Vec2.Scale(lambda, normal, P);
                vA.SubtractScaled(mA, P);
                wA -= iA * b2_math_1.b2Vec2.Cross(vcp.rA, P);
                vB.AddScaled(mB, P);
                wB += iB * b2_math_1.b2Vec2.Cross(vcp.rB, P);
            }
            else {
                // Block solver developed in collaboration with Dirk Gregorius (back in 01/07 on Box2D_Lite).
                // Build the mini LCP for this contact patch
                //
                // vn = A * x + b, vn >= 0, x >= 0 and vn_i * x_i = 0 with i = 1..2
                //
                // A = J * W * JT and J = ( -n, -r1 x n, n, r2 x n )
                // b = vn0 - velocityBias
                //
                // The system is solved using the "Total enumeration method" (s. Murty). The complementary constraint vn_i * x_i
                // implies that we must have in any solution either vn_i = 0 or x_i = 0. So for the 2D contact problem the cases
                // vn1 = 0 and vn2 = 0, x1 = 0 and x2 = 0, x1 = 0 and vn2 = 0, x2 = 0 and vn1 = 0 need to be tested. The first valid
                // solution that satisfies the problem is chosen.
                //
                // In order to account of the accumulated impulse 'a' (because of the iterative nature of the solver which only requires
                // that the accumulated impulse is clamped and not the incremental impulse) we change the impulse variable (x_i).
                //
                // Substitute:
                //
                // x = a + d
                //
                // a := old total impulse
                // x := new total impulse
                // d := incremental impulse
                //
                // For the current iteration we extend the formula for the incremental impulse
                // to compute the new total impulse:
                //
                // vn = A * d + b
                //    = A * (x - a) + b
                //    = A * x + b - A * a
                //    = A * x + b'
                // b' = b - A * a;
                const cp1 = vc.points[0];
                const cp2 = vc.points[1];
                a.Set(cp1.normalImpulse, cp2.normalImpulse);
                // DEBUG: b2Assert(a.x >= 0 && a.y >= 0);
                // Relative velocity at contact
                b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, cp1.rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, cp1.rA, b2_math_1.b2Vec2.s_t1), dv1);
                b2_math_1.b2Vec2.Subtract(b2_math_1.b2Vec2.AddCrossScalarVec2(vB, wB, cp2.rB, b2_math_1.b2Vec2.s_t0), b2_math_1.b2Vec2.AddCrossScalarVec2(vA, wA, cp2.rA, b2_math_1.b2Vec2.s_t1), dv2);
                // Compute normal velocity
                let vn1 = b2_math_1.b2Vec2.Dot(dv1, normal);
                let vn2 = b2_math_1.b2Vec2.Dot(dv2, normal);
                b.x = vn1 - cp1.velocityBias;
                b.y = vn2 - cp2.velocityBias;
                // Compute b'
                b.Subtract(b2_math_1.b2Mat22.MultiplyVec2(vc.K, a, b2_math_1.b2Vec2.s_t0));
                // eslint-disable-next-line no-unreachable-loop
                for(;;){
                    //
                    // Case 1: vn = 0
                    //
                    // 0 = A * x + b'
                    //
                    // Solve for x:
                    //
                    // x = - inv(A) * b'
                    //
                    // b2Vec2 x = - b2Mul(vc->normalMass, b);
                    b2_math_1.b2Mat22.MultiplyVec2(vc.normalMass, b, x).Negate();
                    if (x.x >= 0 && x.y >= 0) {
                        // Get the incremental impulse
                        // b2Vec2 d = x - a;
                        b2_math_1.b2Vec2.Subtract(x, a, d);
                        // Apply incremental impulse
                        b2_math_1.b2Vec2.Scale(d.x, normal, P1);
                        b2_math_1.b2Vec2.Scale(d.y, normal, P2);
                        b2_math_1.b2Vec2.Add(P1, P2, P1P2);
                        vA.SubtractScaled(mA, P1P2);
                        wA -= iA * (b2_math_1.b2Vec2.Cross(cp1.rA, P1) + b2_math_1.b2Vec2.Cross(cp2.rA, P2));
                        vB.AddScaled(mB, P1P2);
                        wB += iB * (b2_math_1.b2Vec2.Cross(cp1.rB, P1) + b2_math_1.b2Vec2.Cross(cp2.rB, P2));
                        // Accumulate
                        cp1.normalImpulse = x.x;
                        cp2.normalImpulse = x.y;
                        break;
                    }
                    //
                    // Case 2: vn1 = 0 and x2 = 0
                    //
                    //   0 = a11 * x1 + a12 * 0 + b1'
                    // vn2 = a21 * x1 + a22 * 0 + b2'
                    //
                    x.x = -cp1.normalMass * b.x;
                    x.y = 0;
                    vn1 = 0;
                    vn2 = vc.K.ex.y * x.x + b.y;
                    if (x.x >= 0 && vn2 >= 0) {
                        // Get the incremental impulse
                        // b2Vec2 d = x - a;
                        b2_math_1.b2Vec2.Subtract(x, a, d);
                        // Apply incremental impulse
                        b2_math_1.b2Vec2.Scale(d.x, normal, P1);
                        b2_math_1.b2Vec2.Scale(d.y, normal, P2);
                        b2_math_1.b2Vec2.Add(P1, P2, P1P2);
                        vA.SubtractScaled(mA, P1P2);
                        wA -= iA * (b2_math_1.b2Vec2.Cross(cp1.rA, P1) + b2_math_1.b2Vec2.Cross(cp2.rA, P2));
                        vB.AddScaled(mB, P1P2);
                        wB += iB * (b2_math_1.b2Vec2.Cross(cp1.rB, P1) + b2_math_1.b2Vec2.Cross(cp2.rB, P2));
                        // Accumulate
                        cp1.normalImpulse = x.x;
                        cp2.normalImpulse = x.y;
                        break;
                    }
                    //
                    // Case 3: vn2 = 0 and x1 = 0
                    //
                    // vn1 = a11 * 0 + a12 * x2 + b1'
                    //   0 = a21 * 0 + a22 * x2 + b2'
                    //
                    x.x = 0;
                    x.y = -cp2.normalMass * b.y;
                    vn1 = vc.K.ey.x * x.y + b.x;
                    vn2 = 0;
                    if (x.y >= 0 && vn1 >= 0) {
                        // Resubstitute for the incremental impulse
                        b2_math_1.b2Vec2.Subtract(x, a, d);
                        // Apply incremental impulse
                        b2_math_1.b2Vec2.Scale(d.x, normal, P1);
                        b2_math_1.b2Vec2.Scale(d.y, normal, P2);
                        b2_math_1.b2Vec2.Add(P1, P2, P1P2);
                        vA.SubtractScaled(mA, P1P2);
                        wA -= iA * (b2_math_1.b2Vec2.Cross(cp1.rA, P1) + b2_math_1.b2Vec2.Cross(cp2.rA, P2));
                        vB.AddScaled(mB, P1P2);
                        wB += iB * (b2_math_1.b2Vec2.Cross(cp1.rB, P1) + b2_math_1.b2Vec2.Cross(cp2.rB, P2));
                        // Accumulate
                        cp1.normalImpulse = x.x;
                        cp2.normalImpulse = x.y;
                        break;
                    }
                    //
                    // Case 4: x1 = 0 and x2 = 0
                    //
                    // vn1 = b1
                    // vn2 = b2;
                    x.x = 0;
                    x.y = 0;
                    vn1 = b.x;
                    vn2 = b.y;
                    if (vn1 >= 0 && vn2 >= 0) {
                        // Resubstitute for the incremental impulse
                        b2_math_1.b2Vec2.Subtract(x, a, d);
                        // Apply incremental impulse
                        b2_math_1.b2Vec2.Scale(d.x, normal, P1);
                        b2_math_1.b2Vec2.Scale(d.y, normal, P2);
                        b2_math_1.b2Vec2.Add(P1, P2, P1P2);
                        vA.SubtractScaled(mA, P1P2);
                        wA -= iA * (b2_math_1.b2Vec2.Cross(cp1.rA, P1) + b2_math_1.b2Vec2.Cross(cp2.rA, P2));
                        vB.AddScaled(mB, P1P2);
                        wB += iB * (b2_math_1.b2Vec2.Cross(cp1.rB, P1) + b2_math_1.b2Vec2.Cross(cp2.rB, P2));
                        // Accumulate
                        cp1.normalImpulse = x.x;
                        cp2.normalImpulse = x.y;
                        break;
                    }
                    break;
                }
            }
            this.m_velocities[indexA].w = wA;
            this.m_velocities[indexB].w = wB;
        }
    }
    StoreImpulses() {
        for(let i = 0; i < this.m_count; ++i){
            const vc = this.m_velocityConstraints[i];
            const manifold = this.m_contacts[vc.contactIndex].GetManifold();
            for(let j = 0; j < vc.pointCount; ++j){
                manifold.points[j].normalImpulse = vc.points[j].normalImpulse;
                manifold.points[j].tangentImpulse = vc.points[j].tangentImpulse;
            }
        }
    }
    /** Sequential solver. */ SolvePositionConstraints() {
        const xfA = b2ContactSolver.SolvePositionConstraints_s_xfA;
        const xfB = b2ContactSolver.SolvePositionConstraints_s_xfB;
        const psm = b2ContactSolver.SolvePositionConstraints_s_psm;
        const rA = b2ContactSolver.SolvePositionConstraints_s_rA;
        const rB = b2ContactSolver.SolvePositionConstraints_s_rB;
        const P = b2ContactSolver.SolvePositionConstraints_s_P;
        let minSeparation = 0;
        for(let i = 0; i < this.m_count; ++i){
            const pc = this.m_positionConstraints[i];
            const { indexA, indexB, localCenterA, localCenterB, pointCount } = pc;
            const mA = pc.invMassA;
            const iA = pc.invIA;
            const mB = pc.invMassB;
            const iB = pc.invIB;
            const cA = this.m_positions[indexA].c;
            let aA = this.m_positions[indexA].a;
            const cB = this.m_positions[indexB].c;
            let aB = this.m_positions[indexB].a;
            // Solve normal constraints
            for(let j = 0; j < pointCount; ++j){
                xfA.q.Set(aA);
                xfB.q.Set(aB);
                b2_math_1.b2Vec2.Subtract(cA, b2_math_1.b2Rot.MultiplyVec2(xfA.q, localCenterA, b2_math_1.b2Vec2.s_t0), xfA.p);
                b2_math_1.b2Vec2.Subtract(cB, b2_math_1.b2Rot.MultiplyVec2(xfB.q, localCenterB, b2_math_1.b2Vec2.s_t0), xfB.p);
                psm.Initialize(pc, xfA, xfB, j);
                const { normal, point, separation } = psm;
                b2_math_1.b2Vec2.Subtract(point, cA, rA);
                b2_math_1.b2Vec2.Subtract(point, cB, rB);
                // Track max constraint error.
                minSeparation = Math.min(minSeparation, separation);
                // Prevent large corrections and allow slop.
                const C = (0, b2_math_1.b2Clamp)(b2_common_1.b2_baumgarte * (separation + b2_common_1.b2_linearSlop), -b2_common_1.b2_maxLinearCorrection, 0);
                // Compute the effective mass.
                const rnA = b2_math_1.b2Vec2.Cross(rA, normal);
                const rnB = b2_math_1.b2Vec2.Cross(rB, normal);
                const K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
                // Compute normal impulse
                const impulse = K > 0 ? -C / K : 0;
                b2_math_1.b2Vec2.Scale(impulse, normal, P);
                cA.SubtractScaled(mA, P);
                aA -= iA * b2_math_1.b2Vec2.Cross(rA, P);
                cB.AddScaled(mB, P);
                aB += iB * b2_math_1.b2Vec2.Cross(rB, P);
            }
            this.m_positions[indexA].c.Copy(cA);
            this.m_positions[indexA].a = aA;
            this.m_positions[indexB].c.Copy(cB);
            this.m_positions[indexB].a = aB;
        }
        // We can't expect minSpeparation >= -b2_linearSlop because we don't
        // push the separation above -b2_linearSlop.
        return minSeparation >= -3 * b2_common_1.b2_linearSlop;
    }
    /** Sequential position solver for position constraints. */ SolveTOIPositionConstraints(toiIndexA, toiIndexB) {
        const xfA = b2ContactSolver.SolveTOIPositionConstraints_s_xfA;
        const xfB = b2ContactSolver.SolveTOIPositionConstraints_s_xfB;
        const psm = b2ContactSolver.SolveTOIPositionConstraints_s_psm;
        const rA = b2ContactSolver.SolveTOIPositionConstraints_s_rA;
        const rB = b2ContactSolver.SolveTOIPositionConstraints_s_rB;
        const P = b2ContactSolver.SolveTOIPositionConstraints_s_P;
        let minSeparation = 0;
        for(let i = 0; i < this.m_count; ++i){
            const pc = this.m_positionConstraints[i];
            const { indexA, indexB, localCenterA, localCenterB, pointCount } = pc;
            let mA = 0;
            let iA = 0;
            if (indexA === toiIndexA || indexA === toiIndexB) {
                mA = pc.invMassA;
                iA = pc.invIA;
            }
            let mB = 0;
            let iB = 0;
            if (indexB === toiIndexA || indexB === toiIndexB) {
                mB = pc.invMassB;
                iB = pc.invIB;
            }
            const cA = this.m_positions[indexA].c;
            let aA = this.m_positions[indexA].a;
            const cB = this.m_positions[indexB].c;
            let aB = this.m_positions[indexB].a;
            // Solve normal constraints
            for(let j = 0; j < pointCount; ++j){
                xfA.q.Set(aA);
                xfB.q.Set(aB);
                b2_math_1.b2Vec2.Subtract(cA, b2_math_1.b2Rot.MultiplyVec2(xfA.q, localCenterA, b2_math_1.b2Vec2.s_t0), xfA.p);
                b2_math_1.b2Vec2.Subtract(cB, b2_math_1.b2Rot.MultiplyVec2(xfB.q, localCenterB, b2_math_1.b2Vec2.s_t0), xfB.p);
                psm.Initialize(pc, xfA, xfB, j);
                const { normal, point, separation } = psm;
                b2_math_1.b2Vec2.Subtract(point, cA, rA);
                b2_math_1.b2Vec2.Subtract(point, cB, rB);
                // Track max constraint error.
                minSeparation = Math.min(minSeparation, separation);
                // Prevent large corrections and allow slop.
                const C = (0, b2_math_1.b2Clamp)(b2_common_1.b2_toiBaumgarte * (separation + b2_common_1.b2_linearSlop), -b2_common_1.b2_maxLinearCorrection, 0);
                // Compute the effective mass.
                const rnA = b2_math_1.b2Vec2.Cross(rA, normal);
                const rnB = b2_math_1.b2Vec2.Cross(rB, normal);
                const K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
                // Compute normal impulse
                const impulse = K > 0 ? -C / K : 0;
                b2_math_1.b2Vec2.Scale(impulse, normal, P);
                cA.SubtractScaled(mA, P);
                aA -= iA * b2_math_1.b2Vec2.Cross(rA, P);
                cB.AddScaled(mB, P);
                aB += iB * b2_math_1.b2Vec2.Cross(rB, P);
            }
            this.m_positions[indexA].a = aA;
            this.m_positions[indexB].a = aB;
        }
        // We can't expect minSpeparation >= -b2_linearSlop because we don't
        // push the separation above -b2_linearSlop.
        return minSeparation >= -1.5 * b2_common_1.b2_linearSlop;
    }
}
exports.b2ContactSolver = b2ContactSolver;
b2ContactSolver.InitializeVelocityConstraints_s_xfA = new b2_math_1.b2Transform();
b2ContactSolver.InitializeVelocityConstraints_s_xfB = new b2_math_1.b2Transform();
b2ContactSolver.InitializeVelocityConstraints_s_worldManifold = new b2_collision_1.b2WorldManifold();
b2ContactSolver.WarmStart_s_P = new b2_math_1.b2Vec2();
b2ContactSolver.SolveVelocityConstraints_s_dv = new b2_math_1.b2Vec2();
b2ContactSolver.SolveVelocityConstraints_s_dv1 = new b2_math_1.b2Vec2();
b2ContactSolver.SolveVelocityConstraints_s_dv2 = new b2_math_1.b2Vec2();
b2ContactSolver.SolveVelocityConstraints_s_P = new b2_math_1.b2Vec2();
b2ContactSolver.SolveVelocityConstraints_s_a = new b2_math_1.b2Vec2();
b2ContactSolver.SolveVelocityConstraints_s_b = new b2_math_1.b2Vec2();
b2ContactSolver.SolveVelocityConstraints_s_x = new b2_math_1.b2Vec2();
b2ContactSolver.SolveVelocityConstraints_s_d = new b2_math_1.b2Vec2();
b2ContactSolver.SolveVelocityConstraints_s_P1 = new b2_math_1.b2Vec2();
b2ContactSolver.SolveVelocityConstraints_s_P2 = new b2_math_1.b2Vec2();
b2ContactSolver.SolveVelocityConstraints_s_P1P2 = new b2_math_1.b2Vec2();
b2ContactSolver.SolvePositionConstraints_s_xfA = new b2_math_1.b2Transform();
b2ContactSolver.SolvePositionConstraints_s_xfB = new b2_math_1.b2Transform();
b2ContactSolver.SolvePositionConstraints_s_psm = new b2PositionSolverManifold();
b2ContactSolver.SolvePositionConstraints_s_rA = new b2_math_1.b2Vec2();
b2ContactSolver.SolvePositionConstraints_s_rB = new b2_math_1.b2Vec2();
b2ContactSolver.SolvePositionConstraints_s_P = new b2_math_1.b2Vec2();
b2ContactSolver.SolveTOIPositionConstraints_s_xfA = new b2_math_1.b2Transform();
b2ContactSolver.SolveTOIPositionConstraints_s_xfB = new b2_math_1.b2Transform();
b2ContactSolver.SolveTOIPositionConstraints_s_psm = new b2PositionSolverManifold();
b2ContactSolver.SolveTOIPositionConstraints_s_rA = new b2_math_1.b2Vec2();
b2ContactSolver.SolveTOIPositionConstraints_s_rB = new b2_math_1.b2Vec2();
b2ContactSolver.SolveTOIPositionConstraints_s_P = new b2_math_1.b2Vec2();

},{"b717042dd37ebc66":"a1SE4","7d24130e8b8064fc":"3MJcc","88b4effc7cc5f39c":"eLdO6","b30c93105cac5f54":"eevv5"}],"eevv5":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2SolverData = exports.b2Velocity = exports.b2Position = exports.b2TimeStep = exports.b2Profile = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_math_1 = require("47bdaff90c8eb182");
/**
 * Profiling data. Times are in milliseconds.
 */ class b2Profile {
    constructor(){
        this.step = 0;
        this.collide = 0;
        this.solve = 0;
        this.solveInit = 0;
        this.solveVelocity = 0;
        this.solvePosition = 0;
        this.broadphase = 0;
        this.solveTOI = 0;
    }
    Reset() {
        this.step = 0;
        this.collide = 0;
        this.solve = 0;
        this.solveInit = 0;
        this.solveVelocity = 0;
        this.solvePosition = 0;
        this.broadphase = 0;
        this.solveTOI = 0;
        return this;
    }
}
exports.b2Profile = b2Profile;
/**
 * This is an internal structure.
 */ class b2TimeStep {
    constructor(){
        this.dt = 0; // time step
        this.inv_dt = 0; // inverse time step (0 if dt == 0).
        this.dtRatio = 0; // dt * inv_dt0
        this.config = {
            velocityIterations: 0,
            positionIterations: 0
        };
        this.warmStarting = false;
    }
    static Create() {
        return new b2TimeStep();
    }
    Copy(step) {
        this.dt = step.dt;
        this.inv_dt = step.inv_dt;
        this.dtRatio = step.dtRatio;
        this.config = {
            ...step.config
        };
        this.warmStarting = step.warmStarting;
        return this;
    }
}
exports.b2TimeStep = b2TimeStep;
/**
 * This is an internal structure.
 */ class b2Position {
    constructor(){
        this.c = new b2_math_1.b2Vec2();
        this.a = 0;
    }
}
exports.b2Position = b2Position;
/**
 * This is an internal structure.
 */ class b2Velocity {
    constructor(){
        this.v = new b2_math_1.b2Vec2();
        this.w = 0;
    }
}
exports.b2Velocity = b2Velocity;
/**
 * Solver Data
 */ class b2SolverData {
    constructor(){
        this.step = b2TimeStep.Create();
    }
}
exports.b2SolverData = b2SolverData;

},{"47bdaff90c8eb182":"3MJcc"}],"e0IeL":[function(require,module,exports,__globalThis) {
"use strict";
// MIT License
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b2Rope = exports.b2RopeTuning = exports.b2BendingModel = exports.b2StretchingModel = void 0;
// Copyright (c) 2019 Erin Catto
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
const b2_common_1 = require("2dd7d1951a2f842e");
const b2_draw_1 = require("4a64cdb556b09e92");
const b2_math_1 = require("745d5610899f32dd");
const temp = {
    J1: new b2_math_1.b2Vec2(),
    J2: new b2_math_1.b2Vec2(),
    J3: new b2_math_1.b2Vec2(),
    r: new b2_math_1.b2Vec2(),
    e1: new b2_math_1.b2Vec2(),
    e2: new b2_math_1.b2Vec2(),
    Jd1: new b2_math_1.b2Vec2(),
    Jd2: new b2_math_1.b2Vec2(),
    d: new b2_math_1.b2Vec2(),
    u: new b2_math_1.b2Vec2(),
    dp1: new b2_math_1.b2Vec2(),
    dp2: new b2_math_1.b2Vec2(),
    dp3: new b2_math_1.b2Vec2(),
    d1: new b2_math_1.b2Vec2(),
    d2: new b2_math_1.b2Vec2(),
    dHat: new b2_math_1.b2Vec2()
};
var b2StretchingModel;
(function(b2StretchingModel) {
    b2StretchingModel[b2StretchingModel["b2_pbdStretchingModel"] = 0] = "b2_pbdStretchingModel";
    b2StretchingModel[b2StretchingModel["b2_xpbdStretchingModel"] = 1] = "b2_xpbdStretchingModel";
})(b2StretchingModel || (exports.b2StretchingModel = b2StretchingModel = {}));
var b2BendingModel;
(function(b2BendingModel) {
    b2BendingModel[b2BendingModel["b2_springAngleBendingModel"] = 0] = "b2_springAngleBendingModel";
    b2BendingModel[b2BendingModel["b2_pbdAngleBendingModel"] = 1] = "b2_pbdAngleBendingModel";
    b2BendingModel[b2BendingModel["b2_xpbdAngleBendingModel"] = 2] = "b2_xpbdAngleBendingModel";
    b2BendingModel[b2BendingModel["b2_pbdDistanceBendingModel"] = 3] = "b2_pbdDistanceBendingModel";
    b2BendingModel[b2BendingModel["b2_pbdHeightBendingModel"] = 4] = "b2_pbdHeightBendingModel";
    b2BendingModel[b2BendingModel["b2_pbdTriangleBendingModel"] = 5] = "b2_pbdTriangleBendingModel";
})(b2BendingModel || (exports.b2BendingModel = b2BendingModel = {}));
class b2RopeTuning {
    constructor(){
        this.stretchingModel = b2StretchingModel.b2_pbdStretchingModel;
        this.bendingModel = b2BendingModel.b2_pbdAngleBendingModel;
        this.damping = 0;
        this.stretchStiffness = 1;
        this.stretchHertz = 1;
        this.stretchDamping = 0;
        this.bendStiffness = 0.5;
        this.bendHertz = 1;
        this.bendDamping = 0;
        this.isometric = false;
        this.fixedEffectiveMass = false;
        this.warmStart = false;
    }
    Copy(other) {
        this.stretchingModel = other.stretchingModel;
        this.bendingModel = other.bendingModel;
        this.damping = other.damping;
        this.stretchStiffness = other.stretchStiffness;
        this.stretchHertz = other.stretchHertz;
        this.stretchDamping = other.stretchDamping;
        this.bendStiffness = other.bendStiffness;
        this.bendHertz = other.bendHertz;
        this.bendDamping = other.bendDamping;
        this.isometric = other.isometric;
        this.fixedEffectiveMass = other.fixedEffectiveMass;
        this.warmStart = other.warmStart;
        return this;
    }
}
exports.b2RopeTuning = b2RopeTuning;
class b2RopeStretch {
    constructor(){
        this.i1 = 0;
        this.i2 = 0;
        this.invMass1 = 0;
        this.invMass2 = 0;
        this.L = 0;
        this.lambda = 0;
        this.spring = 0;
        this.damper = 0;
    }
}
class b2RopeBend {
    constructor(){
        this.i1 = 0;
        this.i2 = 0;
        this.i3 = 0;
        this.invMass1 = 0;
        this.invMass2 = 0;
        this.invMass3 = 0;
        this.invEffectiveMass = 0;
        this.lambda = 0;
        this.L1 = 0;
        this.L2 = 0;
        this.alpha1 = 0;
        this.alpha2 = 0;
        this.spring = 0;
        this.damper = 0;
    }
}
class b2Rope {
    constructor(def){
        this.m_position = new b2_math_1.b2Vec2();
        this.m_count = 0;
        this.m_stretchCount = 0;
        this.m_bendCount = 0;
        this.m_gravity = new b2_math_1.b2Vec2();
        this.m_tuning = new b2RopeTuning();
        (0, b2_common_1.b2Assert)(def.vertices.length >= 3);
        this.m_position.Copy(def.position);
        this.m_count = def.vertices.length;
        this.m_bindPositions = (0, b2_common_1.b2MakeArray)(this.m_count, b2_math_1.b2Vec2);
        this.m_ps = (0, b2_common_1.b2MakeArray)(this.m_count, b2_math_1.b2Vec2);
        this.m_p0s = (0, b2_common_1.b2MakeArray)(this.m_count, b2_math_1.b2Vec2);
        this.m_vs = (0, b2_common_1.b2MakeArray)(this.m_count, b2_math_1.b2Vec2);
        this.m_invMasses = (0, b2_common_1.b2MakeNumberArray)(this.m_count);
        for(let i = 0; i < this.m_count; ++i){
            this.m_bindPositions[i].Copy(def.vertices[i]);
            b2_math_1.b2Vec2.Add(def.vertices[i], this.m_position, this.m_ps[i]);
            b2_math_1.b2Vec2.Add(def.vertices[i], this.m_position, this.m_p0s[i]);
            this.m_vs[i].SetZero();
            const m = def.masses[i];
            if (m > 0) this.m_invMasses[i] = 1 / m;
            else this.m_invMasses[i] = 0;
        }
        this.m_stretchCount = this.m_count - 1;
        this.m_bendCount = this.m_count - 2;
        this.m_stretchConstraints = new Array(this.m_stretchCount);
        for(let i = 0; i < this.m_stretchCount; i++)this.m_stretchConstraints[i] = new b2RopeStretch();
        this.m_bendConstraints = new Array(this.m_bendCount);
        for(let i = 0; i < this.m_bendCount; i++)this.m_bendConstraints[i] = new b2RopeBend();
        for(let i = 0; i < this.m_stretchCount; ++i){
            const c = this.m_stretchConstraints[i];
            const p1 = this.m_ps[i];
            const p2 = this.m_ps[i + 1];
            c.i1 = i;
            c.i2 = i + 1;
            c.L = b2_math_1.b2Vec2.Distance(p1, p2);
            c.invMass1 = this.m_invMasses[i];
            c.invMass2 = this.m_invMasses[i + 1];
            c.lambda = 0;
            c.damper = 0;
            c.spring = 0;
        }
        const { J1, J2, r, e1, e2, Jd1, Jd2 } = temp;
        for(let i = 0; i < this.m_bendCount; ++i){
            const c = this.m_bendConstraints[i];
            const p1 = this.m_ps[i];
            const p2 = this.m_ps[i + 1];
            const p3 = this.m_ps[i + 2];
            c.i1 = i;
            c.i2 = i + 1;
            c.i3 = i + 2;
            c.invMass1 = this.m_invMasses[i];
            c.invMass2 = this.m_invMasses[i + 1];
            c.invMass3 = this.m_invMasses[i + 2];
            c.invEffectiveMass = 0;
            c.L1 = b2_math_1.b2Vec2.Distance(p1, p2);
            c.L2 = b2_math_1.b2Vec2.Distance(p2, p3);
            c.lambda = 0;
            // Pre-compute effective mass (TODO use flattened config)
            b2_math_1.b2Vec2.Subtract(p2, p1, e1);
            b2_math_1.b2Vec2.Subtract(p3, p2, e2);
            const L1sqr = e1.LengthSquared();
            const L2sqr = e2.LengthSquared();
            if (L1sqr * L2sqr === 0) continue;
            b2_math_1.b2Vec2.Skew(e1, Jd1).Scale(-1 / L1sqr);
            b2_math_1.b2Vec2.Skew(e2, Jd2).Scale(1 / L2sqr);
            b2_math_1.b2Vec2.Negate(Jd1, J1);
            b2_math_1.b2Vec2.Subtract(Jd1, Jd2, J2);
            const J3 = Jd2;
            c.invEffectiveMass = c.invMass1 * b2_math_1.b2Vec2.Dot(J1, J1) + c.invMass2 * b2_math_1.b2Vec2.Dot(J2, J2) + c.invMass3 * b2_math_1.b2Vec2.Dot(J3, J3);
            b2_math_1.b2Vec2.Subtract(p3, p1, r);
            const rr = r.LengthSquared();
            if (rr === 0) continue;
            // a1 = h2 / (h1 + h2)
            // a2 = h1 / (h1 + h2)
            c.alpha1 = b2_math_1.b2Vec2.Dot(e2, r) / rr;
            c.alpha2 = b2_math_1.b2Vec2.Dot(e1, r) / rr;
        }
        this.m_gravity.Copy(def.gravity);
        this.SetTuning(def.tuning);
    }
    SetTuning(tuning) {
        this.m_tuning.Copy(tuning);
        // Pre-compute spring and damper values based on tuning
        const bendOmega = 2 * Math.PI * this.m_tuning.bendHertz;
        for(let i = 0; i < this.m_bendCount; ++i){
            const c = this.m_bendConstraints[i];
            const L1sqr = c.L1 * c.L1;
            const L2sqr = c.L2 * c.L2;
            if (L1sqr * L2sqr === 0) {
                c.spring = 0;
                c.damper = 0;
                continue;
            }
            // Flatten the triangle formed by the two edges
            const J2 = 1 / c.L1 + 1 / c.L2;
            const sum = c.invMass1 / L1sqr + c.invMass2 * J2 * J2 + c.invMass3 / L2sqr;
            if (sum === 0) {
                c.spring = 0;
                c.damper = 0;
                continue;
            }
            const mass = 1 / sum;
            c.spring = mass * bendOmega * bendOmega;
            c.damper = 2 * mass * this.m_tuning.bendDamping * bendOmega;
        }
        const stretchOmega = 2 * Math.PI * this.m_tuning.stretchHertz;
        for(let i = 0; i < this.m_stretchCount; ++i){
            const c = this.m_stretchConstraints[i];
            const sum = c.invMass1 + c.invMass2;
            if (sum === 0) continue;
            const mass = 1 / sum;
            c.spring = mass * stretchOmega * stretchOmega;
            c.damper = 2 * mass * this.m_tuning.stretchDamping * stretchOmega;
        }
    }
    Step(dt, iterations, position) {
        if (dt === 0) return;
        const inv_dt = 1 / dt;
        const d = Math.exp(-dt * this.m_tuning.damping);
        // Apply gravity and damping
        for(let i = 0; i < this.m_count; ++i)if (this.m_invMasses[i] > 0) {
            this.m_vs[i].Scale(d);
            this.m_vs[i].AddScaled(dt, this.m_gravity);
        } else {
            this.m_vs[i].x = inv_dt * (this.m_bindPositions[i].x + position.x - this.m_p0s[i].x);
            this.m_vs[i].y = inv_dt * (this.m_bindPositions[i].y + position.y - this.m_p0s[i].y);
        }
        // Apply bending spring
        if (this.m_tuning.bendingModel === b2BendingModel.b2_springAngleBendingModel) this.ApplyBendForces(dt);
        for(let i = 0; i < this.m_bendCount; ++i)this.m_bendConstraints[i].lambda = 0;
        for(let i = 0; i < this.m_stretchCount; ++i)this.m_stretchConstraints[i].lambda = 0;
        // Update position
        for(let i = 0; i < this.m_count; ++i)this.m_ps[i].AddScaled(dt, this.m_vs[i]);
        // Solve constraints
        for(let i = 0; i < iterations; ++i){
            if (this.m_tuning.bendingModel === b2BendingModel.b2_pbdAngleBendingModel) this.SolveBend_PBD_Angle();
            else if (this.m_tuning.bendingModel === b2BendingModel.b2_xpbdAngleBendingModel) this.SolveBend_XPBD_Angle(dt);
            else if (this.m_tuning.bendingModel === b2BendingModel.b2_pbdDistanceBendingModel) this.SolveBend_PBD_Distance();
            else if (this.m_tuning.bendingModel === b2BendingModel.b2_pbdHeightBendingModel) this.SolveBend_PBD_Height();
            else if (this.m_tuning.bendingModel === b2BendingModel.b2_pbdTriangleBendingModel) this.SolveBend_PBD_Triangle();
            if (this.m_tuning.stretchingModel === b2StretchingModel.b2_pbdStretchingModel) this.SolveStretch_PBD();
            else if (this.m_tuning.stretchingModel === b2StretchingModel.b2_xpbdStretchingModel) this.SolveStretch_XPBD(dt);
        }
        // Constrain velocity
        for(let i = 0; i < this.m_count; ++i){
            this.m_vs[i].x = inv_dt * (this.m_ps[i].x - this.m_p0s[i].x);
            this.m_vs[i].y = inv_dt * (this.m_ps[i].y - this.m_p0s[i].y);
            this.m_p0s[i].Copy(this.m_ps[i]);
        }
    }
    Reset(position) {
        this.m_position.Copy(position);
        for(let i = 0; i < this.m_count; ++i){
            b2_math_1.b2Vec2.Add(this.m_bindPositions[i], this.m_position, this.m_ps[i]);
            this.m_p0s[i].Copy(this.m_ps[i]);
            this.m_vs[i].SetZero();
        }
        for(let i = 0; i < this.m_bendCount; ++i)this.m_bendConstraints[i].lambda = 0;
        for(let i = 0; i < this.m_stretchCount; ++i)this.m_stretchConstraints[i].lambda = 0;
    }
    SolveStretch_PBD() {
        const stiffness = this.m_tuning.stretchStiffness;
        const { d } = temp;
        for(let i = 0; i < this.m_stretchCount; ++i){
            const c = this.m_stretchConstraints[i];
            const p1 = this.m_ps[c.i1];
            const p2 = this.m_ps[c.i2];
            b2_math_1.b2Vec2.Subtract(p2, p1, d);
            const L = d.Normalize();
            const sum = c.invMass1 + c.invMass2;
            if (sum === 0) continue;
            const s1 = c.invMass1 / sum;
            const s2 = c.invMass2 / sum;
            p1.SubtractScaled(stiffness * s1 * (c.L - L), d);
            p2.AddScaled(stiffness * s2 * (c.L - L), d);
        }
    }
    SolveStretch_XPBD(dt) {
        // 	b2Assert(dt > 0);
        const { dp1, dp2, u, J1 } = temp;
        for(let i = 0; i < this.m_stretchCount; ++i){
            const c = this.m_stretchConstraints[i];
            const p1 = this.m_ps[c.i1];
            const p2 = this.m_ps[c.i2];
            b2_math_1.b2Vec2.Subtract(p1, this.m_p0s[c.i1], dp1);
            b2_math_1.b2Vec2.Subtract(p2, this.m_p0s[c.i2], dp2);
            b2_math_1.b2Vec2.Subtract(p2, p1, u);
            const L = u.Normalize();
            b2_math_1.b2Vec2.Negate(u, J1);
            const J2 = u;
            const sum = c.invMass1 + c.invMass2;
            if (sum === 0) continue;
            const alpha = 1 / (c.spring * dt * dt); // 1 / kg
            const beta = dt * dt * c.damper; // kg * s
            const sigma = alpha * beta / dt; // non-dimensional
            const C = L - c.L;
            // This is using the initial velocities
            const Cdot = b2_math_1.b2Vec2.Dot(J1, dp1) + b2_math_1.b2Vec2.Dot(J2, dp2);
            const B = C + alpha * c.lambda + sigma * Cdot;
            const sum2 = (1 + sigma) * sum + alpha;
            const impulse = -B / sum2;
            p1.AddScaled(c.invMass1 * impulse, J1);
            p2.AddScaled(c.invMass2 * impulse, J2);
            c.lambda += impulse;
        }
    }
    SolveBend_PBD_Angle() {
        const stiffness = this.m_tuning.bendStiffness;
        const { Jd1, Jd2, J1, J2, d1, d2 } = temp;
        for(let i = 0; i < this.m_bendCount; ++i){
            const c = this.m_bendConstraints[i];
            const p1 = this.m_ps[c.i1];
            const p2 = this.m_ps[c.i2];
            const p3 = this.m_ps[c.i3];
            b2_math_1.b2Vec2.Subtract(p2, p1, d1);
            b2_math_1.b2Vec2.Subtract(p3, p2, d2);
            const a = b2_math_1.b2Vec2.Cross(d1, d2);
            const b = b2_math_1.b2Vec2.Dot(d1, d2);
            const angle = Math.atan2(a, b);
            let L1sqr;
            let L2sqr;
            if (this.m_tuning.isometric) {
                L1sqr = c.L1 * c.L1;
                L2sqr = c.L2 * c.L2;
            } else {
                L1sqr = d1.LengthSquared();
                L2sqr = d2.LengthSquared();
            }
            if (L1sqr * L2sqr === 0) continue;
            b2_math_1.b2Vec2.Skew(d1, Jd1).Scale(-1 / L1sqr);
            b2_math_1.b2Vec2.Skew(d2, Jd2).Scale(1 / L2sqr);
            b2_math_1.b2Vec2.Negate(Jd1, J1);
            b2_math_1.b2Vec2.Subtract(Jd1, Jd2, J2);
            const J3 = Jd2;
            let sum;
            if (this.m_tuning.fixedEffectiveMass) sum = c.invEffectiveMass;
            else sum = c.invMass1 * b2_math_1.b2Vec2.Dot(J1, J1) + c.invMass2 * b2_math_1.b2Vec2.Dot(J2, J2) + c.invMass3 * b2_math_1.b2Vec2.Dot(J3, J3);
            if (sum === 0) sum = c.invEffectiveMass;
            const impulse = -stiffness * angle / sum;
            p1.AddScaled(c.invMass1 * impulse, J1);
            p2.AddScaled(c.invMass2 * impulse, J2);
            p3.AddScaled(c.invMass3 * impulse, J3);
        }
    }
    SolveBend_XPBD_Angle(dt) {
        // b2Assert(dt > 0);
        const { dp1, dp2, dp3, d1, d2, Jd1, Jd2, J1, J2 } = temp;
        for(let i = 0; i < this.m_bendCount; ++i){
            const c = this.m_bendConstraints[i];
            const p1 = this.m_ps[c.i1];
            const p2 = this.m_ps[c.i2];
            const p3 = this.m_ps[c.i3];
            b2_math_1.b2Vec2.Subtract(p1, this.m_p0s[c.i1], dp1);
            b2_math_1.b2Vec2.Subtract(p2, this.m_p0s[c.i2], dp2);
            b2_math_1.b2Vec2.Subtract(p3, this.m_p0s[c.i3], dp3);
            b2_math_1.b2Vec2.Subtract(p2, p1, d1);
            b2_math_1.b2Vec2.Subtract(p3, p2, d2);
            let L1sqr;
            let L2sqr;
            if (this.m_tuning.isometric) {
                L1sqr = c.L1 * c.L1;
                L2sqr = c.L2 * c.L2;
            } else {
                L1sqr = d1.LengthSquared();
                L2sqr = d2.LengthSquared();
            }
            if (L1sqr * L2sqr === 0) continue;
            const a = b2_math_1.b2Vec2.Cross(d1, d2);
            const b = b2_math_1.b2Vec2.Dot(d1, d2);
            const angle = Math.atan2(a, b);
            b2_math_1.b2Vec2.Skew(d1, Jd1).Scale(-1 / L1sqr);
            b2_math_1.b2Vec2.Skew(d2, Jd2).Scale(1 / L2sqr);
            b2_math_1.b2Vec2.Negate(Jd1, J1);
            b2_math_1.b2Vec2.Subtract(Jd1, Jd2, J2);
            const J3 = Jd2;
            let sum;
            if (this.m_tuning.fixedEffectiveMass) sum = c.invEffectiveMass;
            else sum = c.invMass1 * b2_math_1.b2Vec2.Dot(J1, J1) + c.invMass2 * b2_math_1.b2Vec2.Dot(J2, J2) + c.invMass3 * b2_math_1.b2Vec2.Dot(J3, J3);
            if (sum === 0) continue;
            const alpha = 1 / (c.spring * dt * dt);
            const beta = dt * dt * c.damper;
            const sigma = alpha * beta / dt;
            const C = angle;
            // This is using the initial velocities
            const Cdot = b2_math_1.b2Vec2.Dot(J1, dp1) + b2_math_1.b2Vec2.Dot(J2, dp2) + b2_math_1.b2Vec2.Dot(J3, dp3);
            const B = C + alpha * c.lambda + sigma * Cdot;
            const sum2 = (1 + sigma) * sum + alpha;
            const impulse = -B / sum2;
            p1.AddScaled(c.invMass1 * impulse, J1);
            p2.AddScaled(c.invMass2 * impulse, J2);
            p3.AddScaled(c.invMass3 * impulse, J3);
            c.lambda += impulse;
        }
    }
    SolveBend_PBD_Distance() {
        const stiffness = this.m_tuning.bendStiffness;
        const { d } = temp;
        for(let i = 0; i < this.m_bendCount; ++i){
            const c = this.m_bendConstraints[i];
            const { i1 } = c;
            const i2 = c.i3;
            const p1 = this.m_ps[i1];
            const p2 = this.m_ps[i2];
            b2_math_1.b2Vec2.Subtract(p2, p1, d);
            const L = d.Normalize();
            const sum = c.invMass1 + c.invMass3;
            if (sum === 0) continue;
            const s1 = c.invMass1 / sum;
            const s2 = c.invMass3 / sum;
            p1.SubtractScaled(stiffness * s1 * (c.L1 + c.L2 - L), d);
            p2.AddScaled(stiffness * s2 * (c.L1 + c.L2 - L), d);
        }
    }
    /**
     * Constraint based implementation of:
     * P. Volino: Simple Linear Bending Stiffness in Particle Systems
     */ SolveBend_PBD_Height() {
        const stiffness = this.m_tuning.bendStiffness;
        const { dHat, J1, J2, J3, d } = temp;
        for(let i = 0; i < this.m_bendCount; ++i){
            const c = this.m_bendConstraints[i];
            const p1 = this.m_ps[c.i1];
            const p2 = this.m_ps[c.i2];
            const p3 = this.m_ps[c.i3];
            // Barycentric coordinates are held constant
            d.x = c.alpha1 * p1.x + c.alpha2 * p3.x - p2.x;
            d.y = c.alpha1 * p1.y + c.alpha2 * p3.y - p2.y;
            const dLen = d.Length();
            if (dLen === 0) continue;
            b2_math_1.b2Vec2.Scale(1 / dLen, d, dHat);
            b2_math_1.b2Vec2.Scale(c.alpha1, dHat, J1);
            b2_math_1.b2Vec2.Negate(dHat, J2);
            b2_math_1.b2Vec2.Scale(c.alpha2, dHat, J3);
            const sum = c.invMass1 * c.alpha1 * c.alpha1 + c.invMass2 + c.invMass3 * c.alpha2 * c.alpha2;
            if (sum === 0) continue;
            const C = dLen;
            const mass = 1 / sum;
            const impulse = -stiffness * mass * C;
            p1.AddScaled(c.invMass1 * impulse, J1);
            p2.AddScaled(c.invMass2 * impulse, J2);
            p3.AddScaled(c.invMass3 * impulse, J3);
        }
    }
    /** M. Kelager: A Triangle Bending Constraint Model for PBD */ SolveBend_PBD_Triangle() {
        const stiffness = this.m_tuning.bendStiffness;
        const { d } = temp;
        for(let i = 0; i < this.m_bendCount; ++i){
            const c = this.m_bendConstraints[i];
            const b0 = this.m_ps[c.i1];
            const v = this.m_ps[c.i2];
            const b1 = this.m_ps[c.i3];
            const wb0 = c.invMass1;
            const wv = c.invMass2;
            const wb1 = c.invMass3;
            const W = wb0 + wb1 + 2 * wv;
            const invW = stiffness / W;
            d.x = v.x - 1 / 3 * (b0.x + v.x + b1.x);
            d.y = v.y - 1 / 3 * (b0.y + v.y + b1.y);
            b0.AddScaled(2 * wb0 * invW, d);
            v.AddScaled(-4 * wv * invW, d);
            b1.AddScaled(2 * wb1 * invW, d);
        }
    }
    ApplyBendForces(dt) {
        // omega = 2 * pi * hz
        const omega = 2 * Math.PI * this.m_tuning.bendHertz;
        const { d1, d2, Jd1, Jd2, J1, J2 } = temp;
        for(let i = 0; i < this.m_bendCount; ++i){
            const c = this.m_bendConstraints[i];
            const p1 = this.m_ps[c.i1];
            const p2 = this.m_ps[c.i2];
            const p3 = this.m_ps[c.i3];
            const v1 = this.m_vs[c.i1];
            const v2 = this.m_vs[c.i2];
            const v3 = this.m_vs[c.i3];
            b2_math_1.b2Vec2.Subtract(p2, p1, d1);
            b2_math_1.b2Vec2.Subtract(p3, p2, d2);
            let L1sqr;
            let L2sqr;
            if (this.m_tuning.isometric) {
                L1sqr = c.L1 * c.L1;
                L2sqr = c.L2 * c.L2;
            } else {
                L1sqr = d1.LengthSquared();
                L2sqr = d2.LengthSquared();
            }
            if (L1sqr * L2sqr === 0) continue;
            const a = b2_math_1.b2Vec2.Cross(d1, d2);
            const b = b2_math_1.b2Vec2.Dot(d1, d2);
            const angle = Math.atan2(a, b);
            b2_math_1.b2Vec2.Skew(d1, Jd1).Scale(-1 / L1sqr);
            b2_math_1.b2Vec2.Skew(d2, Jd2).Scale(1 / L2sqr);
            b2_math_1.b2Vec2.Negate(Jd1, J1);
            b2_math_1.b2Vec2.Subtract(Jd1, Jd2, J2);
            const J3 = Jd2;
            let sum;
            if (this.m_tuning.fixedEffectiveMass) sum = c.invEffectiveMass;
            else sum = c.invMass1 * b2_math_1.b2Vec2.Dot(J1, J1) + c.invMass2 * b2_math_1.b2Vec2.Dot(J2, J2) + c.invMass3 * b2_math_1.b2Vec2.Dot(J3, J3);
            if (sum === 0) continue;
            const mass = 1 / sum;
            const spring = mass * omega * omega;
            const damper = 2 * mass * this.m_tuning.bendDamping * omega;
            const C = angle;
            const Cdot = b2_math_1.b2Vec2.Dot(J1, v1) + b2_math_1.b2Vec2.Dot(J2, v2) + b2_math_1.b2Vec2.Dot(J3, v3);
            const impulse = -dt * (spring * C + damper * Cdot);
            this.m_vs[c.i1].AddScaled(c.invMass1 * impulse, J1);
            this.m_vs[c.i2].AddScaled(c.invMass2 * impulse, J2);
            this.m_vs[c.i3].AddScaled(c.invMass3 * impulse, J3);
        }
    }
    Draw(draw) {
        for(let i = 0; i < this.m_count - 1; ++i){
            draw.DrawSegment(this.m_ps[i], this.m_ps[i + 1], b2_draw_1.debugColors.rope);
            const pc = this.m_invMasses[i] > 0 ? b2_draw_1.debugColors.ropePointD : b2_draw_1.debugColors.ropePointG;
            draw.DrawPoint(this.m_ps[i], 5, pc);
        }
        const pc = this.m_invMasses[this.m_count - 1] > 0 ? b2_draw_1.debugColors.ropePointD : b2_draw_1.debugColors.ropePointG;
        draw.DrawPoint(this.m_ps[this.m_count - 1], 5, pc);
    }
}
exports.b2Rope = b2Rope;

},{"2dd7d1951a2f842e":"a1SE4","4a64cdb556b09e92":"cc6XX","745d5610899f32dd":"3MJcc"}],"bWxP8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RiveAnimatorEntity", ()=>RiveAnimatorEntity);
var _riveEntity = require("./RiveEntity");
var _riveEntityDefault = parcelHelpers.interopDefault(_riveEntity);
var _riveAnimation = require("./Parts/RiveAnimation");
var _riveAnimationDefault = parcelHelpers.interopDefault(_riveAnimation);
var _riveLoader = require("./RiveLoader");
var _riveLoaderDefault = parcelHelpers.interopDefault(_riveLoader);
class RiveAnimatorEntity extends (0, _riveEntityDefault.default) {
    constructor(name, artboard){
        super(name, artboard);
        this.animations = new Map();
    }
    add(linearAnimation) {
        const instance = new (0, _riveLoaderDefault.default).rive.LinearAnimationInstance(linearAnimation, this.artboard);
        const riveAnimation = new (0, _riveAnimationDefault.default)(instance);
        this.animations.set(linearAnimation.name, riveAnimation);
        return linearAnimation.name;
    }
    addByName(animationName) {
        const animation = this.artboard.animationByName(animationName);
        if (!animation) console.error(`Animation ${animationName} not found in artboard ${this.artboard.name}`);
        console.log(`Found ${animation.name}`);
        this.add(animation);
        return animation.name;
    }
    addByIndex(index) {
        const animation = this.artboard.animationByIndex(0);
        if (!animation) console.error(`Animation ${index} not found in artboard ${this.artboard.name}`);
        this.add(animation);
        return animation.name;
    }
    remove(name) {
        var _a;
        (_a = this.animations.get(name)) === null || _a === void 0 || _a.destroy();
        this.animations.delete(name);
    }
    getWeight(name) {
        var _a;
        return (_a = this.animations.get(name)) === null || _a === void 0 ? void 0 : _a.weight;
    }
    setWeight(name, weight) {
        const animation = this.animations.get(name);
        if (animation) animation.weight = weight;
    }
    update(deltaTime) {
        for (const animation of this.animations.values())animation.advance(deltaTime);
        super.update(deltaTime);
    }
    // Method to get all animation names
    getAnimationNames() {
        return Array.from(this.animations.keys());
    }
    destroy() {
        for (const anim of this.animations.values())anim.destroy();
    }
}
exports.default = RiveAnimatorEntity;

},{"./RiveEntity":"enO6z","./Parts/RiveAnimation":"atumP","./RiveLoader":"eNCc1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atumP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RiveAnimation", ()=>RiveAnimation);
class RiveAnimation {
    constructor(linearAnimationInstance){
        this.weight = 1;
        this.name = linearAnimationInstance.name;
        this.instance = linearAnimationInstance;
    }
    advance(deltaTime) {
        this.instance.advance(deltaTime);
        this.instance.apply(this.weight);
    }
    apply() {
        this.instance.apply(this.weight);
    }
    get time() {
        return this.instance.time;
    }
    set time(value) {
        this.instance.time = value;
    }
    get duration() {
        return this.instance.duration;
    }
    destroy() {
        this.instance.delete();
    }
}
exports.default = RiveAnimation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqwwp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("@box2d/core");
var _physics = require("../Systems/Physics");
var _physicsDefault = parcelHelpers.interopDefault(_physics);
class Scene {
    constructor(name){
        this.enabled = true;
        //================================
        //========== ENTITIES ===========
        //================================
        this.entities = [];
        this.shouldDebugRender = false;
        this.name = name;
        this.world = (0, _physicsDefault.default).getWorld();
    }
    add(entity, addToPhysicsWorld = true) {
        this.entities.push(entity);
        if (addToPhysicsWorld) {
            let body = this.world.CreateBody((0, _physicsDefault.default).dynamicBodyDef);
            entity.initPhysics(body);
        }
        return entity;
    }
    remove(object) {
        const index = this.entities.indexOf(object);
        if (index >= 0) {
            object.destroy();
            this.entities.splice(index, 1);
        }
    }
    destroy() {
        while(this.entities.length > 0){
            const object = this.entities[0];
            this.remove(object);
        }
    }
    //================================
    //========== UPDATE ==============
    //================================
    update(deltaTime) {
        // Update game logic
        for (let entity of this.entities)if (entity.enabled) entity.update(deltaTime);
    }
    fixedUpdate(fixedDeltaTime) {
        for (let entity of this.entities)if (entity.enabled) entity.fixedUpdate(fixedDeltaTime);
        this.world.Step(fixedDeltaTime, (0, _physicsDefault.default).stepConfig);
    }
    //================================
    //========== RENDER ==============
    //================================
    render(renderer) {
        for (let entity of this.entities){
            if (!entity.render || !entity.enabled) continue;
            entity.render(renderer);
        }
    }
    debugRender(canvas) {
        if (!this.shouldDebugRender) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        //draw text in the top right saying number of bodies:   
        ctx.fillStyle = '#000000';
        ctx.font = '12px Arial';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'top';
        ctx.fillText(`Bodies: ${this.world.GetBodyCount()}`, canvas.width - 10, 10);
        let id = 0;
        //for (let body = this.world.GetBodyList(); body; body = body.GetNext()) { 
        for (let entity of this.entities){
            let body = entity.physicsBody;
            if (!body) continue;
            if (body.GetType() === (0, _core.b2BodyType).b2_staticBody) continue;
            let pos = (0, _physicsDefault.default).toPixelTransform(body.GetPosition());
            let x = pos.x;
            let y = pos.y;
            let angle = body.GetAngle();
            // Generate consistent color based on id
            const r = Math.sin(id * 0.3) * 127 + 128;
            const g = Math.sin(id * 0.3 + 2) * 127 + 128;
            const b = Math.sin(id * 0.3 + 4) * 127 + 128;
            ctx.fillStyle = `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`;
            //const BOX_SIZE = 100;
            const WIDTH = entity.width;
            const HEIGHT = entity.height;
            // Save context state
            ctx.save();
            // Translate to box center and rotate
            ctx.translate(x, y);
            ctx.rotate(angle);
            // Draw rotated box
            ctx.fillRect(-WIDTH / 2, -HEIGHT / 2, WIDTH, HEIGHT);
            // Restore context state
            ctx.restore();
            // Draw coordinates and rotation text
            ctx.fillStyle = '#000000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`x: ${pos.x.toFixed(1)}, y: ${pos.y.toFixed(1)}, \u{3B8}: ${(angle * 180 / Math.PI).toFixed(1)}\xb0`, x + 5, y - 10);
            id++;
        }
    }
}
exports.default = Scene;

},{"@box2d/core":"5BQe1","../Systems/Physics":"1UraH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"124sN":[function(require,module,exports,__globalThis) {
/**
* A ScriptableEntity is useful to script some gameplay to test things out.
*
* Usage:
* ```typescript
* const scriptableEntity = new ScriptableEntity("anyname");
* scriptableEntity.setScriptFunction((deltaTime: number) => {
*   console.log("Hello, world! This frame took " + deltaTime + "ms to process.");
* });
*
* scene.Add(scriptableEntity);
*
* et voila
* ```
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _entity = require("./Entity");
var _entityDefault = parcelHelpers.interopDefault(_entity);
class ScriptableEntity extends (0, _entityDefault.default) {
    constructor(){
        super(...arguments);
        this._script = (deltaTime)=>{};
        this._fixedUpdateScript = (fixedDeltaTime)=>{};
    }
    setScriptFunction(fn) {
        this._script = fn;
    }
    setFixedUpdateFunction(fn) {
        this._fixedUpdateScript = fn;
    }
    update(deltaTime) {
        this._script(deltaTime);
    }
    fixedUpdate(fixedDeltaTime) {
        this._fixedUpdateScript(fixedDeltaTime);
    }
    destroy() {}
}
exports.default = ScriptableEntity;

},{"./Entity":"2KDnw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9i4IM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoopType", ()=>LoopType);
var _entity = require("../Entity");
var _entityDefault = parcelHelpers.interopDefault(_entity);
var _easing = require("./Easing");
var _interpolation = require("./Interpolation");
var LoopType;
(function(LoopType) {
    LoopType[LoopType["Restart"] = 0] = "Restart";
    LoopType[LoopType["PingPong"] = 1] = "PingPong";
    LoopType[LoopType["Increment"] = 2] = "Increment";
})(LoopType || (LoopType = {}));
class Tween extends (0, _entityDefault.default) {
    //===== Getters =====
    get isPlaying() {
        return this.hasStarted && !this.isComplete;
    }
    //========================
    //==== FACTORY ==========
    //========================
    static createAccessors(target, propertyKey) {
        return {
            getter: ()=>target[propertyKey],
            setter: (value)=>target[propertyKey] = value
        };
    }
    constructor(getter, setter, to, duration){
        super("Tween");
        this.autoPlay = false;
        //===== Tween Properties =====
        this.easingFunction = (0, _easing.easing).linear;
        this.duration = 0;
        this.loopCount = 1;
        this.loopType = LoopType.PingPong;
        //===== Tween State =====
        this.elapsedTime = 0;
        this.currentLoop = 1;
        this.isReverse = false;
        this.hasStarted = false;
        this.isComplete = false;
        this._getter = getter;
        this._setter = setter;
        this.from = this._getter();
        this.to = to;
        this.duration = duration;
        this.interpolationFunction = (0, _interpolation.Interpolation).getInterpolationFunction(this.from, this.to);
    }
    static to(target, propertyKey, to, duration) {
        const { getter, setter } = Tween.createAccessors(target, propertyKey);
        return new Tween(getter, setter, to, duration);
    }
    static toProperty(setter, getter, to, duration) {
        return new Tween(getter, setter, to, duration);
    }
    //========================
    //==== CONFIGURATION ====
    //========================
    easing(easingFunction) {
        this.easingFunction = easingFunction;
        return this;
    }
    onComplete(callback) {
        this.onCompleteCallback = callback;
        return this;
    }
    onUpdate(callback) {
        this.onUpdateCallback = callback;
        return this;
    }
    onStart(callback) {
        this.onStartCallback = callback;
        return this;
    }
    auto(autoPlay) {
        this.autoPlay = autoPlay;
        return this;
    }
    setLoopType(type) {
        this.loopType = type;
        return this;
    }
    setLoops(count) {
        this.loopCount = count;
        return this;
    }
    //========================
    //==== LIFECYCLE =======
    //========================
    update(deltaTime) {
        var _a, _b, _c, _d;
        if (this.isComplete || !this.autoPlay && !this.hasStarted) return;
        if (!this.hasStarted) {
            this.hasStarted = true;
            (_a = this.onStartCallback) === null || _a === void 0 || _a.call(this);
        }
        this.elapsedTime += deltaTime;
        if (this.elapsedTime >= this.duration) {
            if (this.loopCount === -1 || this.currentLoop < this.loopCount) {
                this.elapsedTime = 0;
                this.currentLoop++;
                switch(this.loopType){
                    case LoopType.PingPong:
                        this.isReverse = !this.isReverse;
                        break;
                    case LoopType.Increment:
                        this.from = this.to;
                        this.to = this.interpolationFunction(this.from, this.to, 2);
                        break;
                }
            } else {
                this._setter(this.to);
                this.isComplete = true;
                (_b = this.onUpdateCallback) === null || _b === void 0 || _b.call(this, this.to);
                (_c = this.onCompleteCallback) === null || _c === void 0 || _c.call(this);
                return;
            }
        }
        let t = this.elapsedTime / this.duration;
        if (this.isReverse) t = 1 - t;
        const easedT = this.easingFunction(t);
        const currentValue = this.interpolationFunction(this.from, this.to, easedT);
        this._setter(currentValue);
        (_d = this.onUpdateCallback) === null || _d === void 0 || _d.call(this, currentValue);
    }
    isFinished() {
        return this.isComplete;
    }
    play() {
        this.hasStarted = true;
        return this;
    }
    reset() {
        this.elapsedTime = 0;
        this.isComplete = false;
        this.hasStarted = false;
        this.currentLoop = 1;
        this.isReverse = false;
        this._setter(this.from);
    }
}
exports.default = Tween;

},{"../Entity":"2KDnw","./Easing":"6tNJ4","./Interpolation":"1Ktxm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6tNJ4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easing", ()=>easing);
const easing = {
    // No easing, no acceleration
    linear: (t)=>t,
    // Accelerates fast, then slows quickly towards end.
    quadratic: (t)=>t * (-(t * t) * t + 4 * t * t - 6 * t + 4),
    // Overshoots over 1 and then returns to 1 towards end.
    cubic: (t)=>t * (4 * t * t - 9 * t + 6),
    // Overshoots over 1 multiple times - wiggles around 1.
    elastic: (t)=>t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15),
    // Accelerating from zero velocity
    inQuad: (t)=>t * t,
    // Decelerating to zero velocity
    outQuad: (t)=>t * (2 - t),
    // Acceleration until halfway, then deceleration
    inOutQuad: (t)=>t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    // Accelerating from zero velocity
    inCubic: (t)=>t * t * t,
    // Decelerating to zero velocity
    outCubic: (t)=>--t * t * t + 1,
    // Acceleration until halfway, then deceleration
    inOutCubic: (t)=>t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    // Accelerating from zero velocity
    inQuart: (t)=>t * t * t * t,
    // Decelerating to zero velocity
    outQuart: (t)=>1 - --t * t * t * t,
    // Acceleration until halfway, then deceleration
    inOutQuart: (t)=>t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
    // Accelerating from zero velocity
    inQuint: (t)=>t * t * t * t * t,
    // Decelerating to zero velocity
    outQuint: (t)=>1 + --t * t * t * t * t,
    // Acceleration until halfway, then deceleration
    inOutQuint: (t)=>t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
    // Accelerating from zero velocity
    inSine: (t)=>-Math.cos(t * (Math.PI / 2)) + 1,
    // Decelerating to zero velocity
    outSine: (t)=>Math.sin(t * (Math.PI / 2)),
    // Accelerating until halfway, then decelerating
    inOutSine: (t)=>-(Math.cos(Math.PI * t) - 1) / 2,
    // Exponential accelerating from zero velocity
    inExpo: (t)=>Math.pow(2, 10 * (t - 1)),
    // Exponential decelerating to zero velocity
    outExpo: (t)=>-Math.pow(2, -10 * t) + 1,
    // Exponential accelerating until halfway, then decelerating
    inOutExpo: (t)=>{
        t /= .5;
        if (t < 1) return Math.pow(2, 10 * (t - 1)) / 2;
        t--;
        return (-Math.pow(2, -10 * t) + 2) / 2;
    },
    // Circular accelerating from zero velocity
    inCirc: (t)=>-Math.sqrt(1 - t * t) + 1,
    // Circular decelerating to zero velocity Moves VERY fast at the beginning and
    // then quickly slows down in the middle. This tween can actually be used
    // in continuous transitions where target value changes all the time,
    // because of the very quick start, it hides the jitter between target value changes.
    outCirc: (t)=>Math.sqrt(1 - (t = t - 1) * t),
    // Circular acceleration until halfway, then deceleration
    inOutCirc: (t)=>{
        t /= .5;
        if (t < 1) return -(Math.sqrt(1 - t * t) - 1) / 2;
        t -= 2;
        return (Math.sqrt(1 - t * t) + 1) / 2;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Ktxm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Interpolation", ()=>Interpolation);
var _vector = require("../../Utils/Vector");
var _vectorDefault = parcelHelpers.interopDefault(_vector);
class Interpolation {
    static getInterpolationFunction(startValue, endValue) {
        if (typeof startValue === 'number' && typeof endValue === 'number') return Interpolation.number;
        if (startValue instanceof (0, _vectorDefault.default) && endValue instanceof (0, _vectorDefault.default)) return Interpolation.vector2D;
        if (Interpolation.isColor(startValue) && Interpolation.isColor(endValue)) return Interpolation.color;
        if (Interpolation.isInterpolableObject(startValue, endValue)) return Interpolation.object;
        throw new Error(`Unsupported tween type: ${typeof startValue}. Supported types are: number, Vec2D, Color, or object with numeric properties.`);
    }
    static isColor(value) {
        return typeof value === 'object' && 'r' in value && 'g' in value && 'b' in value;
    }
    static isInterpolableObject(start, end) {
        if (typeof start !== 'object' || typeof end !== 'object') return false;
        return Object.keys(start).some((key)=>typeof start[key] === 'number' && typeof end[key] === 'number');
    }
}
Interpolation.number = (start, end, t)=>{
    return start + (end - start) * t;
};
Interpolation.vector2D = (start, end, t)=>{
    return new (0, _vectorDefault.default)(start.x + (end.x - start.x) * t, start.y + (end.y - start.y) * t);
};
Interpolation.color = (start, end, t)=>({
        r: Math.round(start.r + (end.r - start.r) * t),
        g: Math.round(start.g + (end.g - start.g) * t),
        b: Math.round(start.b + (end.b - start.b) * t)
    });
Interpolation.object = (start, end, t)=>{
    const result = {};
    for(const key in start)if (typeof start[key] === 'number' && typeof end[key] === 'number') result[key] = start[key] + (end[key] - start[key]) * t;
    return result;
};

},{"../../Utils/Vector":"ciqfS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lovKR":[function(require,module,exports,__globalThis) {
module.exports = require("aa0962f8de36301d").getBundleURL('hAhkz') + "fashion_app.951de8a0.riv" + "?" + Date.now();

},{"aa0962f8de36301d":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"73fyM":[function(require,module,exports,__globalThis) {
module.exports = require("3bc649176895a26d").getBundleURL('hAhkz') + "angry_turtle.c3c4fbc4.riv" + "?" + Date.now();

},{"3bc649176895a26d":"lgJ39"}],"jUy2m":[function(require,module,exports,__globalThis) {
module.exports = require("374f415f832d3ea8").getBundleURL('hAhkz') + "cityorcountry.6f765360.riv" + "?" + Date.now();

},{"374f415f832d3ea8":"lgJ39"}],"eNEvN":[function(require,module,exports,__globalThis) {
module.exports = require("fd70ad7d0af0c199").getBundleURL('hAhkz') + "pokey_pokey.52b81151.riv" + "?" + Date.now();

},{"fd70ad7d0af0c199":"lgJ39"}],"bmMc2":[function(require,module,exports,__globalThis) {
module.exports = require("9a05b09975f26ff9").getBundleURL('hAhkz') + "shroom_gloom_game.d12e0c21.riv" + "?" + Date.now();

},{"9a05b09975f26ff9":"lgJ39"}],"hU8eH":[function(require,module,exports,__globalThis) {
module.exports = require("9381f9042d4e686e").getBundleURL('hAhkz') + "scaling-test.9551a8de.riv" + "?" + Date.now();

},{"9381f9042d4e686e":"lgJ39"}],"jTWip":[function(require,module,exports,__globalThis) {
module.exports = require("4e2a469254702add").getBundleURL('hAhkz') + "basketball.7b1acb38.riv" + "?" + Date.now();

},{"4e2a469254702add":"lgJ39"}],"gkGrJ":[function(require,module,exports,__globalThis) {
module.exports = require("f103b790b2d42897").getBundleURL('hAhkz') + "walk_cycle.0b703dad.riv" + "?" + Date.now();

},{"f103b790b2d42897":"lgJ39"}],"aJgHd":[function(require,module,exports,__globalThis) {
module.exports = require("b0250c63028b5c37").getBundleURL('hAhkz') + "events-test.43c606cc.riv" + "?" + Date.now();

},{"b0250c63028b5c37":"lgJ39"}]},["2DBRd","lXHDZ"], "lXHDZ", "parcelRequire94c2")

//# sourceMappingURL=index.f3dfd6f8.js.map
