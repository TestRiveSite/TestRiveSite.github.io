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
        this
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
})({"jFluF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f682340a8c40641e";
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
*/ var OVERLAY_ID = "__parcel__error__overlay__";
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
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
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
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
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
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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

},{}],"3yVua":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _game = require("./Game");
var _riveStateMachine = require("./RiveStateMachine");
var _riveAnimator = require("./RiveAnimator");
var _riveRenderer = require("./RiveRenderer");
var _riveRendererDefault = parcelHelpers.interopDefault(_riveRenderer);
var _utils = require("./Utils");
var _tweenJs = require("@tweenjs/tween.js");
var _debug = require("./Debug");
var _input = require("./Input");
async function main() {
    (0, _game.Game).PreLoop.push((deltaTime)=>{
        if ((0, _input.Input).IsKeyDown((0, _input.KeyCode).C)) (0, _debug.Debug).ToggleCrosshair();
    });
    ENI_Step3();
}
//SUPER LOW FRAMERATE. Probaly lots of nested artboards
async function ENI_Step3() {
    await (0, _game.Game).Initiate(500, 500);
    let file = await (0, _game.Game).LoadFile("eni_pitch_step_3.riv");
    (0, _game.Game).Add(new (0, _riveStateMachine.RiveSMRenderer)(file.artboardByIndex(0), file.artboardByIndex(0).stateMachineByIndex(0)));
}
async function pokeypokey() {
    await (0, _game.Game).Initiate(1080, 1350);
    let file = await (0, _game.Game).LoadFile("test/pokey_pokey.riv");
    (0, _game.Game).Add(new (0, _riveStateMachine.RiveSMRenderer)(file.artboardByIndex(0), file.artboardByIndex(0).stateMachineByIndex(0)));
    (0, _debug.Debug).LogUnpackedRiveFile(file);
}
async function turtleScene() {
    await (0, _game.Game).Initiate(1600, 1200);
    let file = await (0, _game.Game).LoadFile("test/angry_turtle.riv");
    let ro = new (0, _riveStateMachine.RiveSMRenderer)(file.artboardByIndex(0), file.artboardByIndex(0).stateMachineByIndex(0));
    (0, _game.Game).Add(ro);
}
async function bigRivFile() {
    await (0, _game.Game).Initiate(1280, 720);
    let file = await (0, _game.Game).LoadFile("test/shroom_gloom_game.riv");
    let ro = new (0, _riveStateMachine.RiveSMRenderer)(file.artboardByIndex(0), file.artboardByIndex(0).stateMachineByIndex(0));
    (0, _game.Game).Add(ro);
}
async function scalingScene() {
    await (0, _game.Game).Initiate(400, 400);
    let file = await (0, _game.Game).LoadFile("test/scaling.riv");
    let ro = (0, _game.Game).Add(new (0, _riveRendererDefault.default)(file.artboardByIndex(2)));
    var deltaTime, time;
    return;
}
async function basketBallTestScene() {
    await (0, _game.Game).Initiate(1280, 720);
    let basket = await (0, _game.Game).LoadFile("test/basketball.riv");
    let basketRiveObject = new (0, _riveAnimator.RiveAnimatorRenderer)(basket.artboardByIndex(0));
    basketRiveObject.add(basketRiveObject.artboard.animationByIndex(0));
    basketRiveObject.position.x = (0, _game.Game).TargetResolution.x * .5 - basketRiveObject.width * .5;
    basketRiveObject.position.y = (0, _game.Game).TargetResolution.y * .5 - basketRiveObject.height * .5;
    (0, _game.Game).Add(basketRiveObject);
}
async function animationBlendingTestScene() {
    await (0, _game.Game).Initiate(1280, 720);
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
    const newDiv = document.createElement("div");
    // Set the innerHTML of the new div to our HTML string
    newDiv.innerHTML = html;
    // Append the new div to the body
    document.body.appendChild(newDiv);
    let character = await (0, _game.Game).LoadFile("test/walk_cycle.riv");
    let characterRive = new (0, _riveAnimator.RiveAnimatorRenderer)(character.artboardByIndex(0));
    characterRive.position.x = (0, _game.Game).TargetResolution.x * .5 - characterRive.width * .5;
    characterRive.position.y = (0, _game.Game).TargetResolution.y * .5 - characterRive.height * .5;
    //characterRive.addByName("Walk");
    //characterRive.addByName("Stop");
    console.log(`Added: ${characterRive.addByName("Walk")}`);
    console.log(`Added: ${characterRive.addByName("Stop")}`);
    (0, _game.Game).Add(characterRive);
    const slider1 = document.getElementById("slider1");
    const slider2 = document.getElementById("slider2");
    (0, _game.Game).PreLoop.push(()=>{
        const weight1 = parseFloat(slider1.value);
        const weight2 = parseFloat(slider2.value);
        characterRive.setWeight("Stop", weight1);
        characterRive.setWeight("Walk", weight2);
    });
}
//TODO: Check why this isn't centered
async function eventsTestScene() {
    await (0, _game.Game).Initiate(1000, 1000);
    let events = await (0, _game.Game).LoadFile("test/events.riv");
    let artboard = events.artboardByIndex(0);
    let riveObject = new (0, _riveStateMachine.RiveSMRenderer)(artboard, artboard.stateMachineByIndex(0));
    riveObject.position.x = (0, _game.Game).Canvas.width * .5 - riveObject.width * .5;
    riveObject.position.y = (0, _game.Game).Canvas.height * .5 - riveObject.height * .5;
    (0, _game.Game).Add(riveObject);
    (0, _game.Game).TimeScale = .1;
    riveObject.addRiveEventListener((event)=>{
        console.log(event.name);
        console.log(event?.properties);
    });
}
async function fashionTestScene() {
    await (0, _game.Game).Initiate(1280, 720);
    let file = await (0, _game.Game).LoadFile("test/fashion_app.riv");
    let artboard = file.artboardByIndex(0);
    let ro = new (0, _riveStateMachine.RiveSMRenderer)(artboard, artboard.stateMachineByIndex(0));
    for(let i = 0; i < 1; i++){
        let x = i % 8;
        let y = Math.floor(i / 8);
        artboard = file.artboardByIndex(0);
        ro = new (0, _riveStateMachine.RiveSMRenderer)(artboard, artboard.stateMachineByIndex(0));
        ro.position.x = x * 250;
        ro.position.y = y * 400;
        (0, _game.Game).Add(ro);
        var deltaTime;
        continue;
    }
}
main();

},{"./Game":"TyEjs","./RiveStateMachine":"4wkVX","./RiveAnimator":"iHqrV","./RiveRenderer":"f6jJE","./Utils":"7ma2M","@tweenjs/tween.js":"7DfAI","./Debug":"kTlrO","./Input":"e3TpL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"TyEjs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>Game);
var _canvasAdvanced = require("@rive-app/canvas-advanced");
var _canvasAdvancedDefault = parcelHelpers.interopDefault(_canvasAdvanced);
var _utils = require("./Utils");
var _input = require("./Input");
var _debug = require("./Debug");
class Game {
    static{
        this.TargetResolution = new (0, _utils.Vec2D)(400, 400);
    }
    static get ResScale() {
        return new (0, _utils.Vec2D)(Game.Canvas.width / Game.TargetResolution.x, Game.Canvas.height / Game.TargetResolution.y);
    }
    static{
        this._hasInitiated = false;
    }
    static async Initiate(width, height) {
        if (Game._hasInitiated) throw console.error("Has already been initiated");
        Game._hasInitiated = true;
        Game.RiveInstance = await (0, _canvasAdvancedDefault.default)({
            locateFile: (_)=>"https://unpkg.com/@rive-app/canvas-advanced@2.21.6/rive.wasm"
        });
        Game.TargetResolution.x = width;
        Game.TargetResolution.y = height;
        Game.Canvas = document.getElementById("gameCanvas");
        (0, _input.Input).Initiate(Game.Canvas);
        (0, _debug.Debug).Initiate();
        window.addEventListener("resize", Game.ResizeCanvas);
        Game.ResizeCanvas();
        window.addEventListener("onvisibilitychange", Game.Destroy);
        Game.Renderer = Game.RiveInstance.makeRenderer(Game.Canvas);
        requestAnimationFrame(Game.Loop);
    }
    static ResizeCanvas() {
        //For now skipping this as it takes some time
        const aspectRatio = Game.TargetResolution.x / Game.TargetResolution.y;
        let newWidth = window.innerWidth;
        let newHeight = window.innerHeight;
        if (newWidth / newHeight > aspectRatio) // Window is wider than canvas aspect ratio
        newWidth = Math.floor(newHeight * aspectRatio);
        else // Window is taller than canvas aspect ratio
        newHeight = Math.floor(newWidth / aspectRatio);
        // Update canvas dimensions
        Game.Canvas.width = newWidth;
        Game.Canvas.height = newHeight;
    }
    static{
        this.riveObjects = [];
    }
    static{
        this.elapsedTime = 0;
    }
    static Add(object) {
        Game.riveObjects.push(object);
        return object;
    }
    static Remove(object) {
        const index = Game.riveObjects.indexOf(object);
        Game.RemoveAtIndex(index);
    }
    static RemoveAtIndex(index) {
        if (index > 0) {
            Game.riveObjects[index].destroy();
            Game.riveObjects = Game.riveObjects.splice(index, 1);
        }
    }
    static Destroy(event) {
        event.preventDefault();
        event.returnValue = true;
        window.alert("Being Destroyed");
        while(Game.riveObjects.length > 0)Game.RemoveAtIndex(0);
    }
    static{
        this.PreLoop = [];
    }
    static{
        this.PostLoop = [];
    }
    static{
        this.TimeScale = 1.0;
    }
    static{
        this.FPSArray = [];
    }
    static Loop(time) {
        (0, _debug.Debug).Clear();
        (0, _debug.Debug).Add(`Canvas Mouse: [${(0, _input.Input).CanvasMouseX},${(0, _input.Input).CanvasMouseY}]`);
        (0, _debug.Debug).Add(`<br>Target Res: [${Game.TargetResolution.x}, ${Game.TargetResolution.y}]`);
        (0, _debug.Debug).Add(`Canvas: [${Game.Canvas.width},${Game.Canvas.height}] -> [${Game.ResScale.x}x, ${Game.ResScale.y}x]`);
        let deltaTime = (time - Game.elapsedTime) / 1000;
        deltaTime *= Game.TimeScale;
        if (Game.riveObjects.length > 0) {
            let artboard = Game.riveObjects[0].artboard;
            let movement = deltaTime * 200;
            if ((0, _input.Input).IsKeyDown((0, _input.KeyCode).A)) artboard.frameOrigin = !artboard.frameOrigin;
            if ((0, _input.Input).IsKey((0, _input.KeyCode).LeftArrow)) Game.riveObjects[0].position.x -= movement;
            if ((0, _input.Input).IsKey((0, _input.KeyCode).RightArrow)) Game.riveObjects[0].position.x += movement;
            if ((0, _input.Input).IsKey((0, _input.KeyCode).UpArrow)) Game.riveObjects[0].position.y -= movement;
            if ((0, _input.Input).IsKey((0, _input.KeyCode).DownArrow)) Game.riveObjects[0].position.y += movement;
            (0, _debug.Debug).Add(`<br>Artboard Bounds: [${Game.riveObjects[0].artboard.bounds.minX},${Game.riveObjects[0].artboard.bounds.minY},${Game.riveObjects[0].artboard.bounds.maxX},${Game.riveObjects[0].artboard.bounds.maxY},${artboard.frameOrigin}]`);
            (0, _debug.Debug).Add(`Artboard Size: [${Math.abs(Game.riveObjects[0].artboard.bounds.maxX - Game.riveObjects[0].artboard.bounds.minX)},${Math.abs(Game.riveObjects[0].artboard.bounds.maxY - Game.riveObjects[0].artboard.bounds.minY)}]`);
            (0, _debug.Debug).Add(`<br>RiveObj Bounds: [${Game.riveObjects[0].frame.minX},${Game.riveObjects[0].frame.minY},${Game.riveObjects[0].frame.maxX},${Game.riveObjects[0].frame.maxY},${artboard.frameOrigin}]`);
            (0, _debug.Debug).Add(`RiveObj Size: [${Math.abs(Game.riveObjects[0].frame.maxX - Game.riveObjects[0].frame.minX)},${Math.abs(Game.riveObjects[0].frame.maxY - Game.riveObjects[0].frame.minY)}]`);
            (0, _debug.Debug).Add(`Position: [${Game.riveObjects[0].position.x}, ${Game.riveObjects[0].position.y}]`);
        }
        let fps = 1 / deltaTime;
        //Calculate average FPS
        //TODO: This should go somewhere else.
        Game.FPSArray.push(fps);
        if (Game.FPSArray.length > 100) Game.FPSArray = Game.FPSArray.slice(1);
        let sum = 0;
        for (let n of Game.FPSArray)sum += n;
        (0, _debug.Debug).Add(`Average FPS: ${Math.trunc(sum / Game.FPSArray.length)}`);
        //Debug.Add(Math.trunc(fps*100)/100 + " fps");
        Game.elapsedTime = time;
        for (let callback of Game.PreLoop)callback(deltaTime, time);
        for (let riveRenderer of Game.riveObjects)if (riveRenderer.enabled) riveRenderer.advance(deltaTime);
        Game.Render(deltaTime);
        Game.DebugRender(deltaTime);
        Game.RiveInstance.resolveAnimationFrame();
        requestAnimationFrame(Game.Loop);
        (0, _input.Input).Clear();
    }
    static Render(deltaTime) {
        Game.Renderer.clear();
        for (let riveRenderer of Game.riveObjects){
            Game.Renderer.save();
            Game.Renderer.align(riveRenderer.fit, riveRenderer.alignment, riveRenderer.frame, riveRenderer.artboard.bounds);
            riveRenderer.artboard.draw(Game.Renderer);
            Game.Renderer.restore();
        }
    }
    static DebugRender(deltaTime) {}
    static async LoadFile(url) {
        const bytes = await (await fetch(new Request(url))).arrayBuffer();
        // import File as a named import from the Rive dependency
        const file = await Game.RiveInstance.load(new Uint8Array(bytes));
        // Extract the file name from the URL
        const name = url.split("/").pop()?.split("?")[0] || "unknown";
        return file;
    }
}
exports.default = Game;

},{"@rive-app/canvas-advanced":"QVGN0","./Utils":"7ma2M","./Input":"e3TpL","./Debug":"kTlrO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"QVGN0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var Rive = (()=>{
    var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
    return function(moduleArg = {}) {
        var m = moduleArg, aa, ea;
        m.ready = new Promise((a, b)=>{
            aa = a;
            ea = b;
        });
        function fa() {
            function a(g) {
                const n = d;
                c = b = 0;
                d = new Map();
                n.forEach((p)=>{
                    try {
                        p(g);
                    } catch (l) {
                        console.error(l);
                    }
                });
                this.ob();
                e && e.Tb();
            }
            let b = 0, c = 0, d = new Map(), e = null, f = null;
            this.requestAnimationFrame = function(g) {
                b || (b = requestAnimationFrame(a.bind(this)));
                const n = ++c;
                d.set(n, g);
                return n;
            };
            this.cancelAnimationFrame = function(g) {
                d.delete(g);
                b && 0 == d.size && (cancelAnimationFrame(b), b = 0);
            };
            this.Rb = function(g) {
                f && (document.body.remove(f), f = null);
                g || (f = document.createElement("div"), f.style.backgroundColor = "black", f.style.position = "fixed", f.style.right = 0, f.style.top = 0, f.style.color = "white", f.style.padding = "4px", f.innerHTML = "RIVE FPS", g = function(n) {
                    f.innerHTML = "RIVE FPS " + n.toFixed(1);
                }, document.body.appendChild(f));
                e = new function() {
                    let n = 0, p = 0;
                    this.Tb = function() {
                        var l = performance.now();
                        p ? (++n, l -= p, 1000 < l && (g(1000 * n / l), n = p = 0)) : (p = l, n = 0);
                    };
                }();
            };
            this.Ob = function() {
                f && (document.body.remove(f), f = null);
                e = null;
            };
            this.ob = function() {};
        }
        function ha(a) {
            console.assert(!0);
            const b = new Map();
            let c = -Infinity;
            this.push = function(d) {
                d = d + ((1 << a) - 1) >> a;
                b.has(d) && clearTimeout(b.get(d));
                b.set(d, setTimeout(function() {
                    b.delete(d);
                    0 == b.length ? c = -Infinity : d == c && (c = Math.max(...b.keys()), console.assert(c < d));
                }, 1000));
                c = Math.max(d, c);
                return c << a;
            };
        }
        const ia = m.onRuntimeInitialized;
        m.onRuntimeInitialized = function() {
            ia && ia();
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
                    this.Gb = d;
                },
                loadContents: function(d, e) {
                    d = m.ptrToAsset(d);
                    return this.Gb(d, e);
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
                        var n = new XMLHttpRequest();
                        n.responseType = "arraybuffer";
                        n.onreadystatechange = function() {
                            4 == n.readyState && 200 == n.status && g(n);
                        };
                        n.open("GET", f, !0);
                        n.send(null);
                    })(e.cdnBaseUrl + "/" + d, (f)=>{
                        e.decode(new Uint8Array(f.response));
                    });
                    return !0;
                }
            });
            m.FallbackFileAssetLoader = c.extend("FallbackFileAssetLoader", {
                __construct: function() {
                    this.__parent.__construct.call(this);
                    this.kb = [];
                },
                addLoader: function(d) {
                    this.kb.push(d);
                },
                loadContents: function(d, e) {
                    for (let f of this.kb){
                        if (f.loadContents(d, e)) return !0;
                    }
                    return !1;
                }
            });
        };
        const ja = "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" "), ka = new function() {
            function a() {
                if (!b) {
                    var k = document.createElement("canvas"), t = {
                        alpha: 1,
                        depth: 0,
                        stencil: 0,
                        antialias: 0,
                        premultipliedAlpha: 1,
                        preserveDrawingBuffer: 0,
                        preferLowPowerToHighPerformance: 0,
                        failIfMajorPerformanceCaveat: 0,
                        enableExtensionsByDefault: 1,
                        explicitSwapControl: 1,
                        renderViaOffscreenBackBuffer: 1
                    };
                    let r;
                    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                        if (r = k.getContext("webgl", t), c = 1, !r) return console.log("No WebGL support. Image mesh will not be drawn."), !1;
                    } else if (r = k.getContext("webgl2", t)) c = 2;
                    else {
                        if (r = k.getContext("webgl", t)) c = 1;
                        else return console.log("No WebGL support. Image mesh will not be drawn."), !1;
                    }
                    r = new Proxy(r, {
                        get (D, w) {
                            if (D.isContextLost()) {
                                if (p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ", w), p = !0), "function" === typeof D[w]) return function() {};
                            } else return "function" === typeof D[w] ? function(...M) {
                                return D[w].apply(D, M);
                            } : D[w];
                        },
                        set (D, w, M) {
                            if (D.isContextLost()) p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to set property " + w), p = !0);
                            else return D[w] = M, !0;
                        }
                    });
                    d = Math.min(r.getParameter(r.MAX_RENDERBUFFER_SIZE), r.getParameter(r.MAX_TEXTURE_SIZE));
                    function A(D, w, M) {
                        w = r.createShader(w);
                        r.shaderSource(w, M);
                        r.compileShader(w);
                        M = r.getShaderInfoLog(w);
                        if (0 < (M || "").length) throw M;
                        r.attachShader(D, w);
                    }
                    k = r.createProgram();
                    A(k, r.VERTEX_SHADER, "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }");
                    A(k, r.FRAGMENT_SHADER, "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }");
                    r.bindAttribLocation(k, 0, "vertex");
                    r.bindAttribLocation(k, 1, "uv");
                    r.linkProgram(k);
                    t = r.getProgramInfoLog(k);
                    if (0 < (t || "").trim().length) throw t;
                    e = r.getUniformLocation(k, "mat");
                    f = r.getUniformLocation(k, "translate");
                    r.useProgram(k);
                    r.bindBuffer(r.ARRAY_BUFFER, r.createBuffer());
                    r.enableVertexAttribArray(0);
                    r.enableVertexAttribArray(1);
                    r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, r.createBuffer());
                    r.uniform1i(r.getUniformLocation(k, "image"), 0);
                    r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                    b = r;
                }
                return !0;
            }
            let b = null, c = 0, d = 0, e = null, f = null, g = 0, n = 0, p = !1;
            a();
            this.hc = function() {
                a();
                return d;
            };
            this.Mb = function(k) {
                b.deleteTexture && b.deleteTexture(k);
            };
            this.Lb = function(k) {
                if (!a()) return null;
                const t = b.createTexture();
                if (!t) return null;
                b.bindTexture(b.TEXTURE_2D, t);
                b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, k);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                2 == c ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_LINEAR), b.generateMipmap(b.TEXTURE_2D)) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
                return t;
            };
            const l = new ha(8), u = new ha(8), v = new ha(10), x = new ha(10);
            this.Qb = function(k, t, r, A, D) {
                if (a()) {
                    var w = l.push(k), M = u.push(t);
                    if (b.canvas) {
                        if (b.canvas.width != w || b.canvas.height != M) b.canvas.width = w, b.canvas.height = M;
                        b.viewport(0, M - t, k, t);
                        b.disable(b.SCISSOR_TEST);
                        b.clearColor(0, 0, 0, 0);
                        b.clear(b.COLOR_BUFFER_BIT);
                        b.enable(b.SCISSOR_TEST);
                        r.sort((F, ba)=>ba.wb - F.wb);
                        w = v.push(A);
                        g != w && (b.bufferData(b.ARRAY_BUFFER, 8 * w, b.DYNAMIC_DRAW), g = w);
                        w = 0;
                        for (var T of r)b.bufferSubData(b.ARRAY_BUFFER, w, T.Ta), w += 4 * T.Ta.length;
                        console.assert(w == 4 * A);
                        for (var ca of r)b.bufferSubData(b.ARRAY_BUFFER, w, ca.Db), w += 4 * ca.Db.length;
                        console.assert(w == 8 * A);
                        w = x.push(D);
                        n != w && (b.bufferData(b.ELEMENT_ARRAY_BUFFER, 2 * w, b.DYNAMIC_DRAW), n = w);
                        T = 0;
                        for (var ra of r)b.bufferSubData(b.ELEMENT_ARRAY_BUFFER, T, ra.indices), T += 2 * ra.indices.length;
                        console.assert(T == 2 * D);
                        ra = 0;
                        ca = !0;
                        w = T = 0;
                        for (const F of r){
                            F.image.Ka != ra && (b.bindTexture(b.TEXTURE_2D, F.image.Ja || null), ra = F.image.Ka);
                            F.mc ? (b.scissor(F.Ya, M - F.Za - F.jb, F.Ac, F.jb), ca = !0) : ca && (b.scissor(0, M - t, k, t), ca = !1);
                            r = 2 / k;
                            const ba = -2 / t;
                            b.uniform4f(e, F.ha[0] * r * F.Ba, F.ha[1] * ba * F.Ca, F.ha[2] * r * F.Ba, F.ha[3] * ba * F.Ca);
                            b.uniform2f(f, F.ha[4] * r * F.Ba + r * (F.Ya - F.ic * F.Ba) - 1, F.ha[5] * ba * F.Ca + ba * (F.Za - F.jc * F.Ca) + 1);
                            b.vertexAttribPointer(0, 2, b.FLOAT, !1, 0, w);
                            b.vertexAttribPointer(1, 2, b.FLOAT, !1, 0, w + 4 * A);
                            b.drawElements(b.TRIANGLES, F.indices.length, b.UNSIGNED_SHORT, T);
                            w += 4 * F.Ta.length;
                            T += 2 * F.indices.length;
                        }
                        console.assert(w == 4 * A);
                        console.assert(T == 2 * D);
                    }
                }
            };
            this.canvas = function() {
                return a() && b.canvas;
            };
        }(), la = m.onRuntimeInitialized;
        m.onRuntimeInitialized = function() {
            function a(q) {
                switch(q){
                    case l.srcOver:
                        return "source-over";
                    case l.screen:
                        return "screen";
                    case l.overlay:
                        return "overlay";
                    case l.darken:
                        return "darken";
                    case l.lighten:
                        return "lighten";
                    case l.colorDodge:
                        return "color-dodge";
                    case l.colorBurn:
                        return "color-burn";
                    case l.hardLight:
                        return "hard-light";
                    case l.softLight:
                        return "soft-light";
                    case l.difference:
                        return "difference";
                    case l.exclusion:
                        return "exclusion";
                    case l.multiply:
                        return "multiply";
                    case l.hue:
                        return "hue";
                    case l.saturation:
                        return "saturation";
                    case l.color:
                        return "color";
                    case l.luminosity:
                        return "luminosity";
                }
            }
            function b(q) {
                return "rgba(" + ((16711680 & q) >>> 16) + "," + ((65280 & q) >>> 8) + "," + ((255 & q) >>> 0) + "," + ((4278190080 & q) >>> 24) / 255 + ")";
            }
            function c() {
                0 < M.length && (ka.Qb(w.drawWidth(), w.drawHeight(), M, T, ca), M = [], ca = T = 0, w.reset(512, 512));
                for (const q of D){
                    for (const z of q.H)z();
                    q.H = [];
                }
                D.clear();
            }
            la && la();
            var d = m.RenderPaintStyle;
            const e = m.RenderPath, f = m.RenderPaint, g = m.Renderer, n = m.StrokeCap, p = m.StrokeJoin, l = m.BlendMode, u = d.fill, v = d.stroke, x = m.FillRule.evenOdd;
            let k = 1;
            var t = m.RenderImage.extend("CanvasRenderImage", {
                __construct: function({ la: q, xa: z } = {}) {
                    this.__parent.__construct.call(this);
                    this.Ka = k;
                    k = k + 1 & 2147483647 || 1;
                    this.la = q;
                    this.xa = z;
                },
                __destruct: function() {
                    this.Ja && (ka.Mb(this.Ja), URL.revokeObjectURL(this.Wa));
                    this.__parent.__destruct.call(this);
                },
                decode: function(q) {
                    var z = this;
                    z.xa && z.xa(z);
                    var G = new Image();
                    z.Wa = URL.createObjectURL(new Blob([
                        q
                    ], {
                        type: "image/png"
                    }));
                    G.onload = function() {
                        z.Fb = G;
                        z.Ja = ka.Lb(G);
                        z.size(G.width, G.height);
                        z.la && z.la(z);
                    };
                    G.src = z.Wa;
                }
            }), r = e.extend("CanvasRenderPath", {
                __construct: function() {
                    this.__parent.__construct.call(this);
                    this.T = new Path2D();
                },
                rewind: function() {
                    this.T = new Path2D();
                },
                addPath: function(q, z, G, H, C, I, J) {
                    var K = this.T, X = K.addPath;
                    q = q.T;
                    const Q = new DOMMatrix();
                    Q.a = z;
                    Q.b = G;
                    Q.c = H;
                    Q.d = C;
                    Q.e = I;
                    Q.f = J;
                    X.call(K, q, Q);
                },
                fillRule: function(q) {
                    this.Va = q;
                },
                moveTo: function(q, z) {
                    this.T.moveTo(q, z);
                },
                lineTo: function(q, z) {
                    this.T.lineTo(q, z);
                },
                cubicTo: function(q, z, G, H, C, I) {
                    this.T.bezierCurveTo(q, z, G, H, C, I);
                },
                close: function() {
                    this.T.closePath();
                }
            }), A = f.extend("CanvasRenderPaint", {
                color: function(q) {
                    this.Xa = b(q);
                },
                thickness: function(q) {
                    this.Ib = q;
                },
                join: function(q) {
                    switch(q){
                        case p.miter:
                            this.Ia = "miter";
                            break;
                        case p.round:
                            this.Ia = "round";
                            break;
                        case p.bevel:
                            this.Ia = "bevel";
                    }
                },
                cap: function(q) {
                    switch(q){
                        case n.butt:
                            this.Ha = "butt";
                            break;
                        case n.round:
                            this.Ha = "round";
                            break;
                        case n.square:
                            this.Ha = "square";
                    }
                },
                style: function(q) {
                    this.Hb = q;
                },
                blendMode: function(q) {
                    this.Eb = a(q);
                },
                clearGradient: function() {
                    this.ja = null;
                },
                linearGradient: function(q, z, G, H) {
                    this.ja = {
                        yb: q,
                        zb: z,
                        bb: G,
                        cb: H,
                        Ra: []
                    };
                },
                radialGradient: function(q, z, G, H) {
                    this.ja = {
                        yb: q,
                        zb: z,
                        bb: G,
                        cb: H,
                        Ra: [],
                        ec: !0
                    };
                },
                addStop: function(q, z) {
                    this.ja.Ra.push({
                        color: q,
                        stop: z
                    });
                },
                completeGradient: function() {},
                draw: function(q, z, G) {
                    let H = this.Hb;
                    var C = this.Xa, I = this.ja;
                    q.globalCompositeOperation = this.Eb;
                    if (null != I) {
                        C = I.yb;
                        var J = I.zb;
                        const X = I.bb;
                        var K = I.cb;
                        const Q = I.Ra;
                        I.ec ? (I = X - C, K -= J, C = q.createRadialGradient(C, J, 0, C, J, Math.sqrt(I * I + K * K))) : C = q.createLinearGradient(C, J, X, K);
                        for(let da = 0, R = Q.length; da < R; da++)J = Q[da], C.addColorStop(J.stop, b(J.color));
                        this.Xa = C;
                        this.ja = null;
                    }
                    switch(H){
                        case v:
                            q.strokeStyle = C;
                            q.lineWidth = this.Ib;
                            q.lineCap = this.Ha;
                            q.lineJoin = this.Ia;
                            q.stroke(z);
                            break;
                        case u:
                            q.fillStyle = C, q.fill(z, G);
                    }
                }
            });
            const D = new Set();
            let w = null, M = [], T = 0, ca = 0;
            var ra = m.CanvasRenderer = g.extend("Renderer", {
                __construct: function(q) {
                    this.__parent.__construct.call(this);
                    this.S = [
                        1,
                        0,
                        0,
                        1,
                        0,
                        0
                    ];
                    this.C = q.getContext("2d");
                    this.Ua = q;
                    this.H = [];
                },
                save: function() {
                    this.S.push(...this.S.slice(this.S.length - 6));
                    this.H.push(this.C.save.bind(this.C));
                },
                restore: function() {
                    const q = this.S.length - 6;
                    if (6 > q) throw "restore() called without matching save().";
                    this.S.splice(q);
                    this.H.push(this.C.restore.bind(this.C));
                },
                transform: function(q, z, G, H, C, I) {
                    const J = this.S, K = J.length - 6;
                    J.splice(K, 6, J[K] * q + J[K + 2] * z, J[K + 1] * q + J[K + 3] * z, J[K] * G + J[K + 2] * H, J[K + 1] * G + J[K + 3] * H, J[K] * C + J[K + 2] * I + J[K + 4], J[K + 1] * C + J[K + 3] * I + J[K + 5]);
                    this.H.push(this.C.transform.bind(this.C, q, z, G, H, C, I));
                },
                rotate: function(q) {
                    const z = Math.sin(q);
                    q = Math.cos(q);
                    this.transform(q, z, -z, q, 0, 0);
                },
                _drawPath: function(q, z) {
                    this.H.push(z.draw.bind(z, this.C, q.T, q.Va === x ? "evenodd" : "nonzero"));
                },
                _drawRiveImage: function(q, z, G) {
                    var H = q.Fb;
                    if (H) {
                        var C = this.C, I = a(z);
                        this.H.push(function() {
                            C.globalCompositeOperation = I;
                            C.globalAlpha = G;
                            C.drawImage(H, 0, 0);
                            C.globalAlpha = 1;
                        });
                    }
                },
                _getMatrix: function(q) {
                    const z = this.S, G = z.length - 6;
                    for(let H = 0; 6 > H; ++H)q[H] = z[G + H];
                },
                _drawImageMesh: function(q, z, G, H, C, I, J, K, X, Q) {
                    var da = this.C.canvas.width, R = this.C.canvas.height;
                    const Yb = X - J, Zb = Q - K;
                    J = Math.max(J, 0);
                    K = Math.max(K, 0);
                    X = Math.min(X, da);
                    Q = Math.min(Q, R);
                    const Ga = X - J, Ha = Q - K;
                    console.assert(Ga <= Math.min(Yb, da));
                    console.assert(Ha <= Math.min(Zb, R));
                    if (!(0 >= Ga || 0 >= Ha)) {
                        X = Ga < Yb || Ha < Zb;
                        da = Q = 1;
                        var sa = Math.ceil(Ga * Q), ta = Math.ceil(Ha * da);
                        R = ka.hc();
                        sa > R && (Q *= R / sa, sa = R);
                        ta > R && (da *= R / ta, ta = R);
                        w || (w = new m.DynamicRectanizer(R), w.reset(512, 512));
                        R = w.addRect(sa, ta);
                        0 > R && (c(), D.add(this), R = w.addRect(sa, ta), console.assert(0 <= R));
                        var $b = R & 65535, ac = R >> 16;
                        M.push({
                            ha: this.S.slice(this.S.length - 6),
                            image: q,
                            Ya: $b,
                            Za: ac,
                            ic: J,
                            jc: K,
                            Ac: sa,
                            jb: ta,
                            Ba: Q,
                            Ca: da,
                            Ta: new Float32Array(H),
                            Db: new Float32Array(C),
                            indices: new Uint16Array(I),
                            mc: X,
                            wb: q.Ka << 1 | (X ? 1 : 0)
                        });
                        T += H.length;
                        ca += I.length;
                        var za = this.C, qd = a(z);
                        this.H.push(function() {
                            za.save();
                            za.resetTransform();
                            za.globalCompositeOperation = qd;
                            za.globalAlpha = G;
                            const bc = ka.canvas();
                            bc && za.drawImage(bc, $b, ac, sa, ta, J, K, Ga, Ha);
                            za.restore();
                        });
                    }
                },
                _clipPath: function(q) {
                    this.H.push(this.C.clip.bind(this.C, q.T, q.Va === x ? "evenodd" : "nonzero"));
                },
                clear: function() {
                    D.add(this);
                    this.H.push(this.C.clearRect.bind(this.C, 0, 0, this.Ua.width, this.Ua.height));
                },
                flush: function() {},
                translate: function(q, z) {
                    this.transform(1, 0, 0, 1, q, z);
                }
            });
            m.makeRenderer = function(q) {
                const z = new ra(q), G = z.C;
                return new Proxy(z, {
                    get (H, C) {
                        if ("function" === typeof H[C]) return function(...I) {
                            return H[C].apply(H, I);
                        };
                        if ("function" === typeof G[C]) {
                            if (-1 < ja.indexOf(C)) throw Error("RiveException: Method call to '" + C + "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");
                            return function(...I) {
                                z.H.push(G[C].bind(G, ...I));
                            };
                        }
                        return H[C];
                    },
                    set (H, C, I) {
                        if (C in G) return z.H.push(()=>{
                            G[C] = I;
                        }), !0;
                    }
                });
            };
            m.decodeImage = function(q, z) {
                new t({
                    la: z
                }).decode(q);
            };
            m.renderFactory = {
                makeRenderPaint: function() {
                    return new A();
                },
                makeRenderPath: function() {
                    return new r();
                },
                makeRenderImage: function() {
                    let q = ba;
                    return new t({
                        xa: ()=>{
                            q.total++;
                        },
                        la: ()=>{
                            q.loaded++;
                            if (q.loaded === q.total) {
                                const z = q.ready;
                                z && (z(), q.ready = null);
                            }
                        }
                    });
                }
            };
            let F = m.load, ba = null;
            m.load = function(q, z, G = !0) {
                const H = new m.FallbackFileAssetLoader();
                void 0 !== z && H.addLoader(z);
                G && (z = new m.CDNFileAssetLoader(), H.addLoader(z));
                return new Promise(function(C) {
                    let I = null;
                    ba = {
                        total: 0,
                        loaded: 0,
                        ready: function() {
                            C(I);
                        }
                    };
                    I = F(q, H);
                    0 == ba.total && C(I);
                });
            };
            d = new fa();
            m.requestAnimationFrame = d.requestAnimationFrame.bind(d);
            m.cancelAnimationFrame = d.cancelAnimationFrame.bind(d);
            m.enableFPSCounter = d.Rb.bind(d);
            m.disableFPSCounter = d.Ob;
            d.ob = c;
            m.resolveAnimationFrame = c;
            m.cleanup = function() {
                w && w.delete();
            };
        };
        var ma = Object.assign({}, m), na = "./this.program", oa = "object" == typeof window, pa = "function" == typeof importScripts, qa = "", ua, va;
        if (oa || pa) pa ? qa = self.location.href : "undefined" != typeof document && document.currentScript && (qa = document.currentScript.src), _scriptDir && (qa = _scriptDir), 0 !== qa.indexOf("blob:") ? qa = qa.substr(0, qa.replace(/[?#].*/, "").lastIndexOf("/") + 1) : qa = "", pa && (va = (a)=>{
            var b = new XMLHttpRequest();
            b.open("GET", a, !1);
            b.responseType = "arraybuffer";
            b.send(null);
            return new Uint8Array(b.response);
        }), ua = (a, b, c)=>{
            var d = new XMLHttpRequest();
            d.open("GET", a, !0);
            d.responseType = "arraybuffer";
            d.onload = ()=>{
                200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
            };
            d.onerror = c;
            d.send(null);
        };
        var wa = m.print || console.log.bind(console), xa = m.printErr || console.error.bind(console);
        Object.assign(m, ma);
        ma = null;
        m.thisProgram && (na = m.thisProgram);
        var ya;
        m.wasmBinary && (ya = m.wasmBinary);
        var noExitRuntime = m.noExitRuntime || !0;
        "object" != typeof WebAssembly && Aa("no native wasm support detected");
        var Ba, y, Ca = !1, B, E, Da, Ea, L, N, Fa, Ia;
        function Ja() {
            var a = Ba.buffer;
            m.HEAP8 = B = new Int8Array(a);
            m.HEAP16 = Da = new Int16Array(a);
            m.HEAP32 = L = new Int32Array(a);
            m.HEAPU8 = E = new Uint8Array(a);
            m.HEAPU16 = Ea = new Uint16Array(a);
            m.HEAPU32 = N = new Uint32Array(a);
            m.HEAPF32 = Fa = new Float32Array(a);
            m.HEAPF64 = Ia = new Float64Array(a);
        }
        var Ka, La = [], Ma = [], Na = [];
        function Oa() {
            var a = m.preRun.shift();
            La.unshift(a);
        }
        var Pa = 0, Qa = null, Ra = null;
        function Aa(a) {
            if (m.onAbort) m.onAbort(a);
            a = "Aborted(" + a + ")";
            xa(a);
            Ca = !0;
            a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
            ea(a);
            throw a;
        }
        function Sa(a) {
            return a.startsWith("data:application/octet-stream;base64,");
        }
        var Ta;
        Ta = "canvas_advanced.wasm";
        if (!Sa(Ta)) {
            var Ua = Ta;
            Ta = m.locateFile ? m.locateFile(Ua, qa) : qa + Ua;
        }
        function Va(a) {
            if (a == Ta && ya) return new Uint8Array(ya);
            if (va) return va(a);
            throw "both async and sync fetching of the wasm failed";
        }
        function Wa(a) {
            if (!ya && (oa || pa)) {
                if ("function" == typeof fetch && !a.startsWith("file://")) return fetch(a, {
                    credentials: "same-origin"
                }).then((b)=>{
                    if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
                    return b.arrayBuffer();
                }).catch(()=>Va(a));
                if (ua) return new Promise((b, c)=>{
                    ua(a, (d)=>b(new Uint8Array(d)), c);
                });
            }
            return Promise.resolve().then(()=>Va(a));
        }
        function Xa(a, b, c) {
            return Wa(a).then((d)=>WebAssembly.instantiate(d, b)).then((d)=>d).then(c, (d)=>{
                xa("failed to asynchronously prepare wasm: " + d);
                Aa(d);
            });
        }
        function Ya(a, b) {
            var c = Ta;
            return ya || "function" != typeof WebAssembly.instantiateStreaming || Sa(c) || c.startsWith("file://") || "function" != typeof fetch ? Xa(c, a, b) : fetch(c, {
                credentials: "same-origin"
            }).then((d)=>WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
                    xa("wasm streaming compile failed: " + e);
                    xa("falling back to ArrayBuffer instantiation");
                    return Xa(c, a, b);
                }));
        }
        var Za, $a, db = {
            437932: (a, b, c, d, e)=>{
                if ("undefined" === typeof window || void 0 === (window.AudioContext || window.webkitAudioContext)) return 0;
                if ("undefined" === typeof window.h) {
                    window.h = {
                        Aa: 0
                    };
                    window.h.I = {};
                    window.h.I.ya = a;
                    window.h.I.capture = b;
                    window.h.I.La = c;
                    window.h.ga = {};
                    window.h.ga.stopped = d;
                    window.h.ga.xb = e;
                    let f = window.h;
                    f.D = [];
                    f.yc = function(g) {
                        for(var n = 0; n < f.D.length; ++n){
                            if (null == f.D[n]) return f.D[n] = g, n;
                        }
                        f.D.push(g);
                        return f.D.length - 1;
                    };
                    f.Cb = function(g) {
                        for(f.D[g] = null; 0 < f.D.length;){
                            if (null == f.D[f.D.length - 1]) f.D.pop();
                            else break;
                        }
                    };
                    f.Sc = function(g) {
                        for(var n = 0; n < f.D.length; ++n){
                            if (f.D[n] == g) return f.Cb(n);
                        }
                    };
                    f.ra = function(g) {
                        return f.D[g];
                    };
                    f.Bb = [
                        "touchend",
                        "click"
                    ];
                    f.unlock = function() {
                        for(var g = 0; g < f.D.length; ++g){
                            var n = f.D[g];
                            null != n && null != n.J && n.state === f.ga.xb && n.J.resume().then(()=>{
                                ab(n.pb);
                            }, (p)=>{
                                console.error("Failed to resume audiocontext", p);
                            });
                        }
                        f.Bb.map(function(p) {
                            document.removeEventListener(p, f.unlock, !0);
                        });
                    };
                    f.Bb.map(function(g) {
                        document.addEventListener(g, f.unlock, !0);
                    });
                }
                window.h.Aa += 1;
                return 1;
            },
            440110: ()=>{
                "undefined" !== typeof window.h && (--window.h.Aa, 0 === window.h.Aa && delete window.h);
            },
            440274: ()=>void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia,
            440378: ()=>{
                try {
                    var a = new (window.AudioContext || window.webkitAudioContext)(), b = a.sampleRate;
                    a.close();
                    return b;
                } catch (c) {
                    return 0;
                }
            },
            440549: (a, b, c, d, e, f)=>{
                if ("undefined" === typeof window.h) return -1;
                var g = {}, n = {};
                a == window.h.I.ya && 0 != c && (n.sampleRate = c);
                g.J = new (window.AudioContext || window.webkitAudioContext)(n);
                g.J.suspend();
                g.state = window.h.ga.stopped;
                c = 0;
                a != window.h.I.ya && (c = b);
                g.Z = g.J.createScriptProcessor(d, c, b);
                g.Z.onaudioprocess = function(p) {
                    if (null == g.sa || 0 == g.sa.length) g.sa = new Float32Array(Fa.buffer, e, d * b);
                    if (a == window.h.I.capture || a == window.h.I.La) {
                        for(var l = 0; l < b; l += 1)for(var u = p.inputBuffer.getChannelData(l), v = g.sa, x = 0; x < d; x += 1)v[x * b + l] = u[x];
                        bb(f, d, e);
                    }
                    if (a == window.h.I.ya || a == window.h.I.La) {
                        for(cb(f, d, e), l = 0; l < p.outputBuffer.numberOfChannels; ++l)for(u = p.outputBuffer.getChannelData(l), v = g.sa, x = 0; x < d; x += 1)u[x] = v[x * b + l];
                    } else for(l = 0; l < p.outputBuffer.numberOfChannels; ++l)p.outputBuffer.getChannelData(l).fill(0.0);
                };
                a != window.h.I.capture && a != window.h.I.La || navigator.mediaDevices.getUserMedia({
                    audio: !0,
                    video: !1
                }).then(function(p) {
                    g.Da = g.J.createMediaStreamSource(p);
                    g.Da.connect(g.Z);
                    g.Z.connect(g.J.destination);
                }).catch(function(p) {
                    console.log("Failed to get user media: " + p);
                });
                a == window.h.I.ya && g.Z.connect(g.J.destination);
                g.pb = f;
                return window.h.yc(g);
            },
            443426: (a)=>window.h.ra(a).J.sampleRate,
            443499: (a)=>{
                a = window.h.ra(a);
                void 0 !== a.Z && (a.Z.onaudioprocess = function() {}, a.Z.disconnect(), a.Z = void 0);
                void 0 !== a.Da && (a.Da.disconnect(), a.Da = void 0);
                a.J.close();
                a.J = void 0;
                a.pb = void 0;
            },
            443899: (a)=>{
                window.h.Cb(a);
            },
            443949: (a)=>{
                a = window.h.ra(a);
                a.J.resume();
                a.state = window.h.ga.xb;
            },
            444088: (a)=>{
                a = window.h.ra(a);
                a.J.suspend();
                a.state = window.h.ga.stopped;
            }
        }, eb = (a)=>{
            for(; 0 < a.length;)a.shift()(m);
        }, fb = (a, b)=>{
            for(var c = 0, d = a.length - 1; 0 <= d; d--){
                var e = a[d];
                "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
            }
            if (b) for(; c; c--)a.unshift("..");
            return a;
        }, gb = (a)=>{
            var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
            (a = fb(a.split("/").filter((d)=>!!d), !b).join("/")) || b || (a = ".");
            a && c && (a += "/");
            return (b ? "/" : "") + a;
        }, hb = (a)=>{
            var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
            a = b[0];
            b = b[1];
            if (!a && !b) return ".";
            b && (b = b.substr(0, b.length - 1));
            return a + b;
        }, ib = (a)=>{
            if ("/" === a) return "/";
            a = gb(a);
            a = a.replace(/\/$/, "");
            var b = a.lastIndexOf("/");
            return -1 === b ? a : a.substr(b + 1);
        }, jb = ()=>{
            if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return (a)=>crypto.getRandomValues(a);
            Aa("initRandomDevice");
        }, kb = (a)=>(kb = jb())(a);
        function lb() {
            for(var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--){
                b = 0 <= c ? arguments[c] : "/";
                if ("string" != typeof b) throw new TypeError("Arguments to path.resolve must be strings");
                if (!b) return "";
                a = b + "/" + a;
                b = "/" === b.charAt(0);
            }
            a = fb(a.split("/").filter((d)=>!!d), !b).join("/");
            return (b ? "/" : "") + a || ".";
        }
        var mb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, nb = (a, b, c)=>{
            var d = b + c;
            for(c = b; a[c] && !(c >= d);)++c;
            if (16 < c - b && a.buffer && mb) return mb.decode(a.subarray(b, c));
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
        }, ob = [], pb = (a)=>{
            for(var b = 0, c = 0; c < a.length; ++c){
                var d = a.charCodeAt(c);
                127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
            }
            return b;
        }, qb = (a, b, c, d)=>{
            if (!(0 < d)) return 0;
            var e = c;
            d = c + d - 1;
            for(var f = 0; f < a.length; ++f){
                var g = a.charCodeAt(f);
                if (55296 <= g && 57343 >= g) {
                    var n = a.charCodeAt(++f);
                    g = 65536 + ((g & 1023) << 10) | n & 1023;
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
        function rb(a, b) {
            var c = Array(pb(a) + 1);
            a = qb(a, c, 0, c.length);
            b && (c.length = a);
            return c;
        }
        var sb = [];
        function tb(a, b) {
            sb[a] = {
                input: [],
                F: [],
                V: b
            };
            ub(a, vb);
        }
        var vb = {
            open: function(a) {
                var b = sb[a.node.za];
                if (!b) throw new O(43);
                a.s = b;
                a.seekable = !1;
            },
            close: function(a) {
                a.s.V.qa(a.s);
            },
            qa: function(a) {
                a.s.V.qa(a.s);
            },
            read: function(a, b, c, d) {
                if (!a.s || !a.s.V.ib) throw new O(60);
                for(var e = 0, f = 0; f < d; f++){
                    try {
                        var g = a.s.V.ib(a.s);
                    } catch (n) {
                        throw new O(29);
                    }
                    if (void 0 === g && 0 === e) throw new O(6);
                    if (null === g || void 0 === g) break;
                    e++;
                    b[c + f] = g;
                }
                e && (a.node.timestamp = Date.now());
                return e;
            },
            write: function(a, b, c, d) {
                if (!a.s || !a.s.V.Oa) throw new O(60);
                try {
                    for(var e = 0; e < d; e++)a.s.V.Oa(a.s, b[c + e]);
                } catch (f) {
                    throw new O(29);
                }
                d && (a.node.timestamp = Date.now());
                return e;
            }
        }, wb = {
            ib: function() {
                a: {
                    if (!ob.length) {
                        var a = null;
                        "undefined" != typeof window && "function" == typeof window.prompt ? (a = window.prompt("Input: "), null !== a && (a += "\n")) : "function" == typeof readline && (a = readline(), null !== a && (a += "\n"));
                        if (!a) {
                            a = null;
                            break a;
                        }
                        ob = rb(a, !0);
                    }
                    a = ob.shift();
                }
                return a;
            },
            Oa: function(a, b) {
                null === b || 10 === b ? (wa(nb(a.F, 0)), a.F = []) : 0 != b && a.F.push(b);
            },
            qa: function(a) {
                a.F && 0 < a.F.length && (wa(nb(a.F, 0)), a.F = []);
            },
            bc: function() {
                return {
                    Fc: 25856,
                    Hc: 5,
                    Ec: 191,
                    Gc: 35387,
                    Dc: [
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
            cc: function() {
                return 0;
            },
            dc: function() {
                return [
                    24,
                    80
                ];
            }
        }, xb = {
            Oa: function(a, b) {
                null === b || 10 === b ? (xa(nb(a.F, 0)), a.F = []) : 0 != b && a.F.push(b);
            },
            qa: function(a) {
                a.F && 0 < a.F.length && (xa(nb(a.F, 0)), a.F = []);
            }
        };
        function yb(a, b) {
            var c = a.j ? a.j.length : 0;
            c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.j, a.j = new Uint8Array(b), 0 < a.v && a.j.set(c.subarray(0, a.v), 0));
        }
        var P = {
            O: null,
            U () {
                return P.createNode(null, "/", 16895, 0);
            },
            createNode (a, b, c, d) {
                if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new O(63);
                P.O || (P.O = {
                    dir: {
                        node: {
                            Y: P.l.Y,
                            P: P.l.P,
                            ka: P.l.ka,
                            va: P.l.va,
                            ub: P.l.ub,
                            Ab: P.l.Ab,
                            vb: P.l.vb,
                            sb: P.l.sb,
                            Ea: P.l.Ea
                        },
                        stream: {
                            ba: P.m.ba
                        }
                    },
                    file: {
                        node: {
                            Y: P.l.Y,
                            P: P.l.P
                        },
                        stream: {
                            ba: P.m.ba,
                            read: P.m.read,
                            write: P.m.write,
                            pa: P.m.pa,
                            lb: P.m.lb,
                            nb: P.m.nb
                        }
                    },
                    link: {
                        node: {
                            Y: P.l.Y,
                            P: P.l.P,
                            ma: P.l.ma
                        },
                        stream: {}
                    },
                    $a: {
                        node: {
                            Y: P.l.Y,
                            P: P.l.P
                        },
                        stream: zb
                    }
                });
                c = Ab(a, b, c, d);
                16384 === (c.mode & 61440) ? (c.l = P.O.dir.node, c.m = P.O.dir.stream, c.j = {}) : 32768 === (c.mode & 61440) ? (c.l = P.O.file.node, c.m = P.O.file.stream, c.v = 0, c.j = null) : 40960 === (c.mode & 61440) ? (c.l = P.O.link.node, c.m = P.O.link.stream) : 8192 === (c.mode & 61440) && (c.l = P.O.$a.node, c.m = P.O.$a.stream);
                c.timestamp = Date.now();
                a && (a.j[b] = c, a.timestamp = c.timestamp);
                return c;
            },
            Kc (a) {
                return a.j ? a.j.subarray ? a.j.subarray(0, a.v) : new Uint8Array(a.j) : new Uint8Array(0);
            },
            l: {
                Y (a) {
                    var b = {};
                    b.Jc = 8192 === (a.mode & 61440) ? a.id : 1;
                    b.Mc = a.id;
                    b.mode = a.mode;
                    b.Oc = 1;
                    b.uid = 0;
                    b.Lc = 0;
                    b.za = a.za;
                    16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.v : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                    b.Bc = new Date(a.timestamp);
                    b.Nc = new Date(a.timestamp);
                    b.Ic = new Date(a.timestamp);
                    b.Jb = 4096;
                    b.Cc = Math.ceil(b.size / b.Jb);
                    return b;
                },
                P (a, b) {
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
                    throw Bb[44];
                },
                va (a, b, c, d) {
                    return P.createNode(a, b, c, d);
                },
                ub (a, b, c) {
                    if (16384 === (a.mode & 61440)) {
                        try {
                            var d = Cb(b, c);
                        } catch (f) {}
                        if (d) {
                            for(var e in d.j)throw new O(55);
                        }
                    }
                    delete a.parent.j[a.name];
                    a.parent.timestamp = Date.now();
                    a.name = c;
                    b.j[c] = a;
                    b.timestamp = a.parent.timestamp;
                    a.parent = b;
                },
                Ab (a, b) {
                    delete a.j[b];
                    a.timestamp = Date.now();
                },
                vb (a, b) {
                    var c = Cb(a, b), d;
                    for(d in c.j)throw new O(55);
                    delete a.j[b];
                    a.timestamp = Date.now();
                },
                sb (a) {
                    var b = [
                        ".",
                        ".."
                    ], c;
                    for(c in a.j)a.j.hasOwnProperty(c) && b.push(c);
                    return b;
                },
                Ea (a, b, c) {
                    a = P.createNode(a, b, 41471, 0);
                    a.link = c;
                    return a;
                },
                ma (a) {
                    if (40960 !== (a.mode & 61440)) throw new O(28);
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
                    b.buffer === B.buffer && (f = !1);
                    if (!d) return 0;
                    a = a.node;
                    a.timestamp = Date.now();
                    if (b.subarray && (!a.j || a.j.subarray)) {
                        if (f) return a.j = b.subarray(c, c + d), a.v = d;
                        if (0 === a.v && 0 === e) return a.j = b.slice(c, c + d), a.v = d;
                        if (e + d <= a.v) return a.j.set(b.subarray(c, c + d), e), d;
                    }
                    yb(a, e + d);
                    if (a.j.subarray && b.subarray) a.j.set(b.subarray(c, c + d), e);
                    else for(f = 0; f < d; f++)a.j[e + f] = b[c + f];
                    a.v = Math.max(a.v, e + d);
                    return d;
                },
                ba (a, b, c) {
                    1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.v);
                    if (0 > b) throw new O(28);
                    return b;
                },
                pa (a, b, c) {
                    yb(a.node, b + c);
                    a.node.v = Math.max(a.node.v, b + c);
                },
                lb (a, b, c, d, e) {
                    if (32768 !== (a.node.mode & 61440)) throw new O(43);
                    a = a.node.j;
                    if (e & 2 || a.buffer !== B.buffer) {
                        if (0 < c || c + b < a.length) a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                        c = !0;
                        Aa();
                        b = void 0;
                        if (!b) throw new O(48);
                        B.set(a, b);
                    } else c = !1, b = a.byteOffset;
                    return {
                        o: b,
                        M: c
                    };
                },
                nb (a, b, c, d) {
                    P.m.write(a, b, 0, d, c, !1);
                    return 0;
                }
            }
        };
        function Db(a, b) {
            var c = 0;
            a && (c |= 365);
            b && (c |= 146);
            return c;
        }
        var Eb = null, Fb = {}, Gb = [], Hb = 1, Ib = null, Jb = !0, O = null, Bb = {}, Lb = (a, b = {})=>{
            a = lb(a);
            if (!a) return {
                path: "",
                node: null
            };
            b = Object.assign({
                gb: !0,
                Qa: 0
            }, b);
            if (8 < b.Qa) throw new O(32);
            a = a.split("/").filter((g)=>!!g);
            for(var c = Eb, d = "/", e = 0; e < a.length; e++){
                var f = e === a.length - 1;
                if (f && b.parent) break;
                c = Cb(c, a[e]);
                d = gb(d + "/" + a[e]);
                c.wa && (!f || f && b.gb) && (c = c.wa.root);
                if (!f || b.fb) for(f = 0; 40960 === (c.mode & 61440);){
                    if (c = Kb(d), d = lb(hb(d), c), c = Lb(d, {
                        Qa: b.Qa + 1
                    }).node, 40 < f++) throw new O(32);
                }
            }
            return {
                path: d,
                node: c
            };
        }, Mb = (a)=>{
            for(var b;;){
                if (a === a.parent) return a = a.U.mb, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
                b = b ? `${a.name}/${b}` : a.name;
                a = a.parent;
            }
        }, Nb = (a, b)=>{
            for(var c = 0, d = 0; d < b.length; d++)c = (c << 5) - c + b.charCodeAt(d) | 0;
            return (a + c >>> 0) % Ib.length;
        }, Cb = (a, b)=>{
            var c;
            if (c = (c = Ob(a, "x")) ? c : a.l.ka ? 0 : 2) throw new O(c, a);
            for(c = Ib[Nb(a.id, b)]; c; c = c.lc){
                var d = c.name;
                if (c.parent.id === a.id && d === b) return c;
            }
            return a.l.ka(a, b);
        }, Ab = (a, b, c, d)=>{
            a = new Pb(a, b, c, d);
            b = Nb(a.parent.id, a.name);
            a.lc = Ib[b];
            return Ib[b] = a;
        }, Qb = (a)=>{
            var b = [
                "r",
                "w",
                "rw"
            ][a & 3];
            a & 512 && (b += "w");
            return b;
        }, Ob = (a, b)=>{
            if (Jb) return 0;
            if (!b.includes("r") || a.mode & 292) {
                if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) return 2;
            } else return 2;
            return 0;
        }, Rb = (a, b)=>{
            try {
                return Cb(a, b), 20;
            } catch (c) {}
            return Ob(a, "wx");
        }, Sb = ()=>{
            for(var a = 0; 4096 >= a; a++){
                if (!Gb[a]) return a;
            }
            throw new O(33);
        }, Tb = (a)=>{
            a = Gb[a];
            if (!a) throw new O(8);
            return a;
        }, Vb = (a, b = -1)=>{
            Ub || (Ub = function() {
                this.h = {};
            }, Ub.prototype = {}, Object.defineProperties(Ub.prototype, {
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
            a = Object.assign(new Ub(), a);
            -1 == b && (b = Sb());
            a.X = b;
            return Gb[b] = a;
        }, zb = {
            open: (a)=>{
                a.m = Fb[a.node.za].m;
                a.m.open && a.m.open(a);
            },
            ba: ()=>{
                throw new O(70);
            }
        }, ub = (a, b)=>{
            Fb[a] = {
                m: b
            };
        }, Wb = (a, b)=>{
            var c = "/" === b, d = !b;
            if (c && Eb) throw new O(10);
            if (!c && !d) {
                var e = Lb(b, {
                    gb: !1
                });
                b = e.path;
                e = e.node;
                if (e.wa) throw new O(10);
                if (16384 !== (e.mode & 61440)) throw new O(54);
            }
            b = {
                type: a,
                Qc: {},
                mb: b,
                kc: []
            };
            a = a.U(b);
            a.U = b;
            b.root = a;
            c ? Eb = a : e && (e.wa = b, e.U && e.U.kc.push(b));
        }, S = (a, b, c)=>{
            var d = Lb(a, {
                parent: !0
            }).node;
            a = ib(a);
            if (!a || "." === a || ".." === a) throw new O(28);
            var e = Rb(d, a);
            if (e) throw new O(e);
            if (!d.l.va) throw new O(63);
            return d.l.va(d, a, b, c);
        }, Xb = (a, b, c)=>{
            "undefined" == typeof c && (c = b, b = 438);
            S(a, b | 8192, c);
        }, cc = (a, b)=>{
            if (!lb(a)) throw new O(44);
            var c = Lb(b, {
                parent: !0
            }).node;
            if (!c) throw new O(44);
            b = ib(b);
            var d = Rb(c, b);
            if (d) throw new O(d);
            if (!c.l.Ea) throw new O(63);
            c.l.Ea(c, b, a);
        }, Kb = (a)=>{
            a = Lb(a).node;
            if (!a) throw new O(44);
            if (!a.l.ma) throw new O(28);
            return lb(Mb(a.parent), a.l.ma(a));
        }, ec = (a, b, c)=>{
            if ("" === a) throw new O(44);
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
                a = gb(a);
                try {
                    e = Lb(a, {
                        fb: !(b & 131072)
                    }).node;
                } catch (f) {}
            }
            d = !1;
            if (b & 64) {
                if (e) {
                    if (b & 128) throw new O(20);
                } else e = S(a, c, 0), d = !0;
            }
            if (!e) throw new O(44);
            8192 === (e.mode & 61440) && (b &= -513);
            if (b & 65536 && 16384 !== (e.mode & 61440)) throw new O(54);
            if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Qb(b) || b & 512) ? 31 : Ob(e, Qb(b)) : 44)) throw new O(c);
            if (b & 512 && !d) {
                c = e;
                c = "string" == typeof c ? Lb(c, {
                    fb: !0
                }).node : c;
                if (!c.l.P) throw new O(63);
                if (16384 === (c.mode & 61440)) throw new O(31);
                if (32768 !== (c.mode & 61440)) throw new O(28);
                if (d = Ob(c, "w")) throw new O(d);
                c.l.P(c, {
                    size: 0,
                    timestamp: Date.now()
                });
            }
            b &= -131713;
            e = Vb({
                node: e,
                path: Mb(e),
                flags: b,
                seekable: !0,
                position: 0,
                m: e.m,
                zc: [],
                error: !1
            });
            e.m.open && e.m.open(e);
            !m.logReadFiles || b & 1 || (dc || (dc = {}), a in dc || (dc[a] = 1));
            return e;
        }, fc = (a, b, c)=>{
            if (null === a.X) throw new O(8);
            if (!a.seekable || !a.m.ba) throw new O(70);
            if (0 != c && 1 != c && 2 != c) throw new O(28);
            a.position = a.m.ba(a, b, c);
            a.zc = [];
        }, gc = ()=>{
            O || (O = function(a, b) {
                this.name = "ErrnoError";
                this.node = b;
                this.pc = function(c) {
                    this.aa = c;
                };
                this.pc(a);
                this.message = "FS error";
            }, O.prototype = Error(), O.prototype.constructor = O, [
                44
            ].forEach((a)=>{
                Bb[a] = new O(a);
                Bb[a].stack = "<generic error, no stack>";
            }));
        }, hc, jc = (a, b, c)=>{
            a = gb("/dev/" + a);
            var d = Db(!!b, !!c);
            ic || (ic = 64);
            var e = ic++ << 8 | 0;
            ub(e, {
                open: (f)=>{
                    f.seekable = !1;
                },
                close: ()=>{
                    c && c.buffer && c.buffer.length && c(10);
                },
                read: (f, g, n, p)=>{
                    for(var l = 0, u = 0; u < p; u++){
                        try {
                            var v = b();
                        } catch (x) {
                            throw new O(29);
                        }
                        if (void 0 === v && 0 === l) throw new O(6);
                        if (null === v || void 0 === v) break;
                        l++;
                        g[n + u] = v;
                    }
                    l && (f.node.timestamp = Date.now());
                    return l;
                },
                write: (f, g, n, p)=>{
                    for(var l = 0; l < p; l++)try {
                        c(g[n + l]);
                    } catch (u) {
                        throw new O(29);
                    }
                    p && (f.node.timestamp = Date.now());
                    return l;
                }
            });
            Xb(a, d, e);
        }, ic, kc = {}, Ub, dc, lc = void 0;
        function mc() {
            lc += 4;
            return L[lc - 4 >> 2];
        }
        function nc(a) {
            if (void 0 === a) return "_unknown";
            a = a.replace(/[^a-zA-Z0-9_]/g, "$");
            var b = a.charCodeAt(0);
            return 48 <= b && 57 >= b ? `_${a}` : a;
        }
        function oc(a, b) {
            a = nc(a);
            return ({
                [a]: function() {
                    return b.apply(this, arguments);
                }
            })[a];
        }
        function pc() {
            this.M = [
                void 0
            ];
            this.hb = [];
        }
        var U = new pc(), qc = void 0;
        function V(a) {
            throw new qc(a);
        }
        var rc = (a)=>{
            a || V("Cannot use deleted val. handle = " + a);
            return U.get(a).value;
        }, sc = (a)=>{
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
                    return U.pa({
                        tb: 1,
                        value: a
                    });
            }
        };
        function tc(a) {
            var b = Error, c = oc(a, function(d) {
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
        var uc = void 0, vc = void 0;
        function W(a) {
            for(var b = ""; E[a];)b += vc[E[a++]];
            return b;
        }
        var wc = [];
        function xc() {
            for(; wc.length;){
                var a = wc.pop();
                a.g.fa = !1;
                a["delete"]();
            }
        }
        var yc = void 0, zc = {};
        function Ac(a, b) {
            for(void 0 === b && V("ptr should not be undefined"); a.A;)b = a.na(b), a = a.A;
            return b;
        }
        var Bc = {};
        function Cc(a) {
            a = Dc(a);
            var b = W(a);
            Ec(a);
            return b;
        }
        function Fc(a, b) {
            var c = Bc[a];
            void 0 === c && V(b + " has unknown type " + Cc(a));
            return c;
        }
        function Gc() {}
        var Hc = !1;
        function Ic(a) {
            --a.count.value;
            0 === a.count.value && (a.G ? a.L.W(a.G) : a.u.i.W(a.o));
        }
        function Jc(a, b, c) {
            if (b === c) return a;
            if (void 0 === c.A) return null;
            a = Jc(a, b, c.A);
            return null === a ? null : c.Pb(a);
        }
        var Kc = {};
        function Lc(a, b) {
            b = Ac(a, b);
            return zc[b];
        }
        var Mc = void 0;
        function Nc(a) {
            throw new Mc(a);
        }
        function Oc(a, b) {
            b.u && b.o || Nc("makeClassHandle requires ptr and ptrType");
            !!b.L !== !!b.G && Nc("Both smartPtrType and smartPtr must be specified");
            b.count = {
                value: 1
            };
            return Pc(Object.create(a, {
                g: {
                    value: b
                }
            }));
        }
        function Pc(a) {
            if ("undefined" === typeof FinalizationRegistry) return Pc = (b)=>b, a;
            Hc = new FinalizationRegistry((b)=>{
                Ic(b.g);
            });
            Pc = (b)=>{
                var c = b.g;
                c.G && Hc.register(b, {
                    g: c
                }, b);
                return b;
            };
            Gc = (b)=>{
                Hc.unregister(b);
            };
            return Pc(a);
        }
        var Qc = {};
        function Rc(a) {
            for(; a.length;){
                var b = a.pop();
                a.pop()(b);
            }
        }
        function Sc(a) {
            return this.fromWireType(L[a >> 2]);
        }
        var Tc = {}, Uc = {};
        function Y(a, b, c) {
            function d(n) {
                n = c(n);
                n.length !== a.length && Nc("Mismatched type converter count");
                for(var p = 0; p < a.length; ++p)Vc(a[p], n[p]);
            }
            a.forEach(function(n) {
                Uc[n] = b;
            });
            var e = Array(b.length), f = [], g = 0;
            b.forEach((n, p)=>{
                Bc.hasOwnProperty(n) ? e[p] = Bc[n] : (f.push(n), Tc.hasOwnProperty(n) || (Tc[n] = []), Tc[n].push(()=>{
                    e[p] = Bc[n];
                    ++g;
                    g === f.length && d(e);
                }));
            });
            0 === f.length && d(e);
        }
        function Wc(a) {
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
        function Xc(a, b, c = {}) {
            var d = b.name;
            a || V(`type "${d}" must have a positive integer typeid pointer`);
            if (Bc.hasOwnProperty(a)) {
                if (c.$b) return;
                V(`Cannot register type '${d}' twice`);
            }
            Bc[a] = b;
            delete Uc[a];
            Tc.hasOwnProperty(a) && (b = Tc[a], delete Tc[a], b.forEach((e)=>e()));
        }
        function Vc(a, b, c = {}) {
            if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            Xc(a, b, c);
        }
        function Yc(a) {
            V(a.g.u.i.name + " instance already deleted");
        }
        function Zc() {}
        function $c(a, b, c) {
            if (void 0 === a[b].B) {
                var d = a[b];
                a[b] = function() {
                    a[b].B.hasOwnProperty(arguments.length) || V(`Function '${c}' called with an invalid number of arguments (${arguments.length}) - expects one of (${a[b].B})!`);
                    return a[b].B[arguments.length].apply(this, arguments);
                };
                a[b].B = [];
                a[b].B[d.ea] = d;
            }
        }
        function ad(a, b, c) {
            m.hasOwnProperty(a) ? ((void 0 === c || void 0 !== m[a].B && void 0 !== m[a].B[c]) && V(`Cannot register public name '${a}' twice`), $c(m, a, a), m.hasOwnProperty(c) && V(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`), m[a].B[c] = b) : (m[a] = b, void 0 !== c && (m[a].Pc = c));
        }
        function bd(a, b, c, d, e, f, g, n) {
            this.name = a;
            this.constructor = b;
            this.N = c;
            this.W = d;
            this.A = e;
            this.Ub = f;
            this.na = g;
            this.Pb = n;
            this.qb = [];
        }
        function cd(a, b, c) {
            for(; b !== c;)b.na || V(`Expected null or instance of ${c.name}, got an instance of ${b.name}`), a = b.na(a), b = b.A;
            return a;
        }
        function dd(a, b) {
            if (null === b) return this.Na && V(`null is not a valid ${this.name}`), 0;
            b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
            b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
            return cd(b.g.o, b.g.u.i, this.i);
        }
        function fd(a, b) {
            if (null === b) {
                this.Na && V(`null is not a valid ${this.name}`);
                if (this.ua) {
                    var c = this.Pa();
                    null !== a && a.push(this.W, c);
                    return c;
                }
                return 0;
            }
            b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
            b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
            !this.ta && b.g.u.ta && V(`Cannot convert argument of type ${b.g.L ? b.g.L.name : b.g.u.name} to parameter type ${this.name}`);
            c = cd(b.g.o, b.g.u.i, this.i);
            if (this.ua) switch(void 0 === b.g.G && V("Passing raw pointer to smart pointer is illegal"), this.tc){
                case 0:
                    b.g.L === this ? c = b.g.G : V(`Cannot convert argument of type ${b.g.L ? b.g.L.name : b.g.u.name} to parameter type ${this.name}`);
                    break;
                case 1:
                    c = b.g.G;
                    break;
                case 2:
                    if (b.g.L === this) c = b.g.G;
                    else {
                        var d = b.clone();
                        c = this.oc(c, sc(function() {
                            d["delete"]();
                        }));
                        null !== a && a.push(this.W, c);
                    }
                    break;
                default:
                    V("Unsupporting sharing policy");
            }
            return c;
        }
        function gd(a, b) {
            if (null === b) return this.Na && V(`null is not a valid ${this.name}`), 0;
            b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
            b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
            b.g.u.ta && V(`Cannot convert argument of type ${b.g.u.name} to parameter type ${this.name}`);
            return cd(b.g.o, b.g.u.i, this.i);
        }
        function hd(a, b, c, d) {
            this.name = a;
            this.i = b;
            this.Na = c;
            this.ta = d;
            this.ua = !1;
            this.W = this.oc = this.Pa = this.rb = this.tc = this.nc = void 0;
            void 0 !== b.A ? this.toWireType = fd : (this.toWireType = d ? dd : gd, this.K = null);
        }
        function jd(a, b, c) {
            m.hasOwnProperty(a) || Nc("Replacing nonexistant public symbol");
            void 0 !== m[a].B && void 0 !== c ? m[a].B[c] = b : (m[a] = b, m[a].ea = c);
        }
        var kd = [], ld = (a)=>{
            var b = kd[a];
            b || (a >= kd.length && (kd.length = a + 1), kd[a] = b = Ka.get(a));
            return b;
        }, md = (a, b)=>{
            var c = [];
            return function() {
                c.length = 0;
                Object.assign(c, arguments);
                if (a.includes("j")) {
                    var d = m["dynCall_" + a];
                    d = c && c.length ? d.apply(null, [
                        b
                    ].concat(c)) : d.call(null, b);
                } else d = ld(b).apply(null, c);
                return d;
            };
        };
        function Z(a, b) {
            a = W(a);
            var c = a.includes("j") ? md(a, b) : ld(b);
            "function" != typeof c && V(`unknown function pointer with signature ${a}: ${b}`);
            return c;
        }
        var nd = void 0;
        function od(a, b) {
            function c(f) {
                e[f] || Bc[f] || (Uc[f] ? Uc[f].forEach(c) : (d.push(f), e[f] = !0));
            }
            var d = [], e = {};
            b.forEach(c);
            throw new nd(`${a}: ` + d.map(Cc).join([
                ", "
            ]));
        }
        function pd(a, b, c, d, e) {
            var f = b.length;
            2 > f && V("argTypes array size mismatch! Must at least get return value and 'this' types!");
            var g = null !== b[1] && null !== c, n = !1;
            for(c = 1; c < b.length; ++c)if (null !== b[c] && void 0 === b[c].K) {
                n = !0;
                break;
            }
            var p = "void" !== b[0].name, l = f - 2, u = Array(l), v = [], x = [];
            return function() {
                arguments.length !== l && V(`function ${a} called with ${arguments.length} arguments, expected ${l} args!`);
                x.length = 0;
                v.length = g ? 2 : 1;
                v[0] = e;
                if (g) {
                    var k = b[1].toWireType(x, this);
                    v[1] = k;
                }
                for(var t = 0; t < l; ++t)u[t] = b[t + 2].toWireType(x, arguments[t]), v.push(u[t]);
                t = d.apply(null, v);
                if (n) Rc(x);
                else for(var r = g ? 1 : 2; r < b.length; r++){
                    var A = 1 === r ? k : u[r - 2];
                    null !== b[r].K && b[r].K(A);
                }
                k = p ? b[0].fromWireType(t) : void 0;
                return k;
            };
        }
        function rd(a, b) {
            for(var c = [], d = 0; d < a; d++)c.push(N[b + 4 * d >> 2]);
            return c;
        }
        function sd(a, b, c) {
            a instanceof Object || V(`${c} with invalid "this": ${a}`);
            a instanceof b.i.constructor || V(`${c} incompatible with "this" of type ${a.constructor.name}`);
            a.g.o || V(`cannot call emscripten binding method ${c} on deleted object`);
            return cd(a.g.o, a.g.u.i, b.i);
        }
        function td(a) {
            a >= U.h && 0 === --U.get(a).tb && U.Zb(a);
        }
        function ud(a, b, c) {
            switch(b){
                case 0:
                    return function(d) {
                        return this.fromWireType((c ? B : E)[d]);
                    };
                case 1:
                    return function(d) {
                        return this.fromWireType((c ? Da : Ea)[d >> 1]);
                    };
                case 2:
                    return function(d) {
                        return this.fromWireType((c ? L : N)[d >> 2]);
                    };
                default:
                    throw new TypeError("Unknown integer type: " + a);
            }
        }
        function ed(a) {
            if (null === a) return "null";
            var b = typeof a;
            return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
        }
        function vd(a, b) {
            switch(b){
                case 2:
                    return function(c) {
                        return this.fromWireType(Fa[c >> 2]);
                    };
                case 3:
                    return function(c) {
                        return this.fromWireType(Ia[c >> 3]);
                    };
                default:
                    throw new TypeError("Unknown float type: " + a);
            }
        }
        function wd(a, b, c) {
            switch(b){
                case 0:
                    return c ? function(d) {
                        return B[d];
                    } : function(d) {
                        return E[d];
                    };
                case 1:
                    return c ? function(d) {
                        return Da[d >> 1];
                    } : function(d) {
                        return Ea[d >> 1];
                    };
                case 2:
                    return c ? function(d) {
                        return L[d >> 2];
                    } : function(d) {
                        return N[d >> 2];
                    };
                default:
                    throw new TypeError("Unknown integer type: " + a);
            }
        }
        var xd = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, yd = (a, b)=>{
            var c = a >> 1;
            for(var d = c + b / 2; !(c >= d) && Ea[c];)++c;
            c <<= 1;
            if (32 < c - a && xd) return xd.decode(E.subarray(a, c));
            c = "";
            for(d = 0; !(d >= b / 2); ++d){
                var e = Da[a + 2 * d >> 1];
                if (0 == e) break;
                c += String.fromCharCode(e);
            }
            return c;
        }, zd = (a, b, c)=>{
            void 0 === c && (c = 2147483647);
            if (2 > c) return 0;
            c -= 2;
            var d = b;
            c = c < 2 * a.length ? c / 2 : a.length;
            for(var e = 0; e < c; ++e)Da[b >> 1] = a.charCodeAt(e), b += 2;
            Da[b >> 1] = 0;
            return b - d;
        }, Ad = (a)=>2 * a.length, Bd = (a, b)=>{
            for(var c = 0, d = ""; !(c >= b / 4);){
                var e = L[a + 4 * c >> 2];
                if (0 == e) break;
                ++c;
                65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : d += String.fromCharCode(e);
            }
            return d;
        }, Cd = (a, b, c)=>{
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
                L[b >> 2] = f;
                b += 4;
                if (b + 4 > c) break;
            }
            L[b >> 2] = 0;
            return b - d;
        }, Dd = (a)=>{
            for(var b = 0, c = 0; c < a.length; ++c){
                var d = a.charCodeAt(c);
                55296 <= d && 57343 >= d && ++c;
                b += 4;
            }
            return b;
        }, Ed = {};
        function Fd(a) {
            var b = Ed[a];
            return void 0 === b ? W(a) : b;
        }
        var Gd = [];
        function Hd(a) {
            var b = Gd.length;
            Gd.push(a);
            return b;
        }
        function Id(a, b) {
            for(var c = Array(a), d = 0; d < a; ++d)c[d] = Fc(N[b + 4 * d >> 2], "parameter " + d);
            return c;
        }
        var Jd = [], Kd = [], Ld = {}, Nd = ()=>{
            if (!Md) {
                var a = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: na || "./this.program"
                }, b;
                for(b in Ld)void 0 === Ld[b] ? delete a[b] : a[b] = Ld[b];
                var c = [];
                for(b in a)c.push(`${b}=${a[b]}`);
                Md = c;
            }
            return Md;
        }, Md, Od = (a)=>0 === a % 4 && (0 !== a % 100 || 0 === a % 400), Pd = [
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
        ], Qd = [
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
        ], Rd = (a, b, c, d)=>{
            function e(k, t, r) {
                for(k = "number" == typeof k ? k.toString() : k || ""; k.length < t;)k = r[0] + k;
                return k;
            }
            function f(k, t) {
                return e(k, t, "0");
            }
            function g(k, t) {
                function r(D) {
                    return 0 > D ? -1 : 0 < D ? 1 : 0;
                }
                var A;
                0 === (A = r(k.getFullYear() - t.getFullYear())) && 0 === (A = r(k.getMonth() - t.getMonth())) && (A = r(k.getDate() - t.getDate()));
                return A;
            }
            function n(k) {
                switch(k.getDay()){
                    case 0:
                        return new Date(k.getFullYear() - 1, 11, 29);
                    case 1:
                        return k;
                    case 2:
                        return new Date(k.getFullYear(), 0, 3);
                    case 3:
                        return new Date(k.getFullYear(), 0, 2);
                    case 4:
                        return new Date(k.getFullYear(), 0, 1);
                    case 5:
                        return new Date(k.getFullYear() - 1, 11, 31);
                    case 6:
                        return new Date(k.getFullYear() - 1, 11, 30);
                }
            }
            function p(k) {
                var t = k.ca;
                for(k = new Date(new Date(k.da + 1900, 0, 1).getTime()); 0 < t;){
                    var r = k.getMonth(), A = (Od(k.getFullYear()) ? Pd : Qd)[r];
                    if (t > A - k.getDate()) t -= A - k.getDate() + 1, k.setDate(1), 11 > r ? k.setMonth(r + 1) : (k.setMonth(0), k.setFullYear(k.getFullYear() + 1));
                    else {
                        k.setDate(k.getDate() + t);
                        break;
                    }
                }
                r = new Date(k.getFullYear() + 1, 0, 4);
                t = n(new Date(k.getFullYear(), 0, 4));
                r = n(r);
                return 0 >= g(t, k) ? 0 >= g(r, k) ? k.getFullYear() + 1 : k.getFullYear() : k.getFullYear() - 1;
            }
            var l = L[d + 40 >> 2];
            d = {
                wc: L[d >> 2],
                vc: L[d + 4 >> 2],
                Fa: L[d + 8 >> 2],
                Sa: L[d + 12 >> 2],
                Ga: L[d + 16 >> 2],
                da: L[d + 20 >> 2],
                R: L[d + 24 >> 2],
                ca: L[d + 28 >> 2],
                Rc: L[d + 32 >> 2],
                uc: L[d + 36 >> 2],
                xc: l ? l ? nb(E, l) : "" : ""
            };
            c = c ? nb(E, c) : "";
            l = {
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
            for(var u in l)c = c.replace(new RegExp(u, "g"), l[u]);
            var v = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), x = "January February March April May June July August September October November December".split(" ");
            l = {
                "%a": (k)=>v[k.R].substring(0, 3),
                "%A": (k)=>v[k.R],
                "%b": (k)=>x[k.Ga].substring(0, 3),
                "%B": (k)=>x[k.Ga],
                "%C": (k)=>f((k.da + 1900) / 100 | 0, 2),
                "%d": (k)=>f(k.Sa, 2),
                "%e": (k)=>e(k.Sa, 2, " "),
                "%g": (k)=>p(k).toString().substring(2),
                "%G": (k)=>p(k),
                "%H": (k)=>f(k.Fa, 2),
                "%I": (k)=>{
                    k = k.Fa;
                    0 == k ? k = 12 : 12 < k && (k -= 12);
                    return f(k, 2);
                },
                "%j": (k)=>{
                    for(var t = 0, r = 0; r <= k.Ga - 1; t += (Od(k.da + 1900) ? Pd : Qd)[r++]);
                    return f(k.Sa + t, 3);
                },
                "%m": (k)=>f(k.Ga + 1, 2),
                "%M": (k)=>f(k.vc, 2),
                "%n": ()=>"\n",
                "%p": (k)=>0 <= k.Fa && 12 > k.Fa ? "AM" : "PM",
                "%S": (k)=>f(k.wc, 2),
                "%t": ()=>"	",
                "%u": (k)=>k.R || 7,
                "%U": (k)=>f(Math.floor((k.ca + 7 - k.R) / 7), 2),
                "%V": (k)=>{
                    var t = Math.floor((k.ca + 7 - (k.R + 6) % 7) / 7);
                    2 >= (k.R + 371 - k.ca - 2) % 7 && t++;
                    if (t) 53 == t && (r = (k.R + 371 - k.ca) % 7, 4 == r || 3 == r && Od(k.da) || (t = 1));
                    else {
                        t = 52;
                        var r = (k.R + 7 - k.ca - 1) % 7;
                        (4 == r || 5 == r && Od(k.da % 400 - 1)) && t++;
                    }
                    return f(t, 2);
                },
                "%w": (k)=>k.R,
                "%W": (k)=>f(Math.floor((k.ca + 7 - (k.R + 6) % 7) / 7), 2),
                "%y": (k)=>(k.da + 1900).toString().substring(2),
                "%Y": (k)=>k.da + 1900,
                "%z": (k)=>{
                    k = k.uc;
                    var t = 0 <= k;
                    k = Math.abs(k) / 60;
                    return (t ? "+" : "-") + String("0000" + (k / 60 * 100 + k % 60)).slice(-4);
                },
                "%Z": (k)=>k.xc,
                "%%": ()=>"%"
            };
            c = c.replace(/%%/g, "\0\0");
            for(u in l)c.includes(u) && (c = c.replace(new RegExp(u, "g"), l[u](d)));
            c = c.replace(/\0\0/g, "%");
            u = rb(c, !1);
            if (u.length > b) return 0;
            B.set(u, a);
            return u.length - 1;
        };
        function Pb(a, b, c, d) {
            a || (a = this);
            this.parent = a;
            this.U = a.U;
            this.wa = null;
            this.id = Hb++;
            this.name = b;
            this.mode = c;
            this.l = {};
            this.m = {};
            this.za = d;
        }
        Object.defineProperties(Pb.prototype, {
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
        gc();
        Ib = Array(4096);
        Wb(P, "/");
        S("/tmp", 16895, 0);
        S("/home", 16895, 0);
        S("/home/web_user", 16895, 0);
        (()=>{
            S("/dev", 16895, 0);
            ub(259, {
                read: ()=>0,
                write: (d, e, f, g)=>g
            });
            Xb("/dev/null", 259);
            tb(1280, wb);
            tb(1536, xb);
            Xb("/dev/tty", 1280);
            Xb("/dev/tty1", 1536);
            var a = new Uint8Array(1024), b = 0, c = ()=>{
                0 === b && (b = kb(a).byteLength);
                return a[--b];
            };
            jc("random", c);
            jc("urandom", c);
            S("/dev/shm", 16895, 0);
            S("/dev/shm/tmp", 16895, 0);
        })();
        (()=>{
            S("/proc", 16895, 0);
            var a = S("/proc/self", 16895, 0);
            S("/proc/self/fd", 16895, 0);
            Wb({
                U: ()=>{
                    var b = Ab(a, "fd", 16895, 73);
                    b.l = {
                        ka: (c, d)=>{
                            var e = Tb(+d);
                            c = {
                                parent: null,
                                U: {
                                    mb: "fake"
                                },
                                l: {
                                    ma: ()=>e.path
                                }
                            };
                            return c.parent = c;
                        }
                    };
                    return b;
                }
            }, "/proc/self/fd");
        })();
        Object.assign(pc.prototype, {
            get (a) {
                return this.M[a];
            },
            has (a) {
                return void 0 !== this.M[a];
            },
            pa (a) {
                var b = this.hb.pop() || this.M.length;
                this.M[b] = a;
                return b;
            },
            Zb (a) {
                this.M[a] = void 0;
                this.hb.push(a);
            }
        });
        qc = m.BindingError = class extends Error {
            constructor(a){
                super(a);
                this.name = "BindingError";
            }
        };
        U.M.push({
            value: void 0
        }, {
            value: null
        }, {
            value: !0
        }, {
            value: !1
        });
        U.h = U.M.length;
        m.count_emval_handles = function() {
            for(var a = 0, b = U.h; b < U.M.length; ++b)void 0 !== U.M[b] && ++a;
            return a;
        };
        uc = m.PureVirtualError = tc("PureVirtualError");
        for(var Sd = Array(256), Td = 0; 256 > Td; ++Td)Sd[Td] = String.fromCharCode(Td);
        vc = Sd;
        m.getInheritedInstanceCount = function() {
            return Object.keys(zc).length;
        };
        m.getLiveInheritedInstances = function() {
            var a = [], b;
            for(b in zc)zc.hasOwnProperty(b) && a.push(zc[b]);
            return a;
        };
        m.flushPendingDeletes = xc;
        m.setDelayFunction = function(a) {
            yc = a;
            wc.length && yc && yc(xc);
        };
        Mc = m.InternalError = class extends Error {
            constructor(a){
                super(a);
                this.name = "InternalError";
            }
        };
        Zc.prototype.isAliasOf = function(a) {
            if (!(this instanceof Zc && a instanceof Zc)) return !1;
            var b = this.g.u.i, c = this.g.o, d = a.g.u.i;
            for(a = a.g.o; b.A;)c = b.na(c), b = b.A;
            for(; d.A;)a = d.na(a), d = d.A;
            return b === d && c === a;
        };
        Zc.prototype.clone = function() {
            this.g.o || Yc(this);
            if (this.g.ia) return this.g.count.value += 1, this;
            var a = Pc, b = Object, c = b.create, d = Object.getPrototypeOf(this), e = this.g;
            a = a(c.call(b, d, {
                g: {
                    value: {
                        count: e.count,
                        fa: e.fa,
                        ia: e.ia,
                        o: e.o,
                        u: e.u,
                        G: e.G,
                        L: e.L
                    }
                }
            }));
            a.g.count.value += 1;
            a.g.fa = !1;
            return a;
        };
        Zc.prototype["delete"] = function() {
            this.g.o || Yc(this);
            this.g.fa && !this.g.ia && V("Object already scheduled for deletion");
            Gc(this);
            Ic(this.g);
            this.g.ia || (this.g.G = void 0, this.g.o = void 0);
        };
        Zc.prototype.isDeleted = function() {
            return !this.g.o;
        };
        Zc.prototype.deleteLater = function() {
            this.g.o || Yc(this);
            this.g.fa && !this.g.ia && V("Object already scheduled for deletion");
            wc.push(this);
            1 === wc.length && yc && yc(xc);
            this.g.fa = !0;
            return this;
        };
        hd.prototype.Vb = function(a) {
            this.rb && (a = this.rb(a));
            return a;
        };
        hd.prototype.ab = function(a) {
            this.W && this.W(a);
        };
        hd.prototype.argPackAdvance = 8;
        hd.prototype.readValueFromPointer = Sc;
        hd.prototype.deleteObject = function(a) {
            if (null !== a) a["delete"]();
        };
        hd.prototype.fromWireType = function(a) {
            function b() {
                return this.ua ? Oc(this.i.N, {
                    u: this.nc,
                    o: c,
                    L: this,
                    G: a
                }) : Oc(this.i.N, {
                    u: this,
                    o: a
                });
            }
            var c = this.Vb(a);
            if (!c) return this.ab(a), null;
            var d = Lc(this.i, c);
            if (void 0 !== d) {
                if (0 === d.g.count.value) return d.g.o = c, d.g.G = a, d.clone();
                d = d.clone();
                this.ab(a);
                return d;
            }
            d = this.i.Ub(c);
            d = Kc[d];
            if (!d) return b.call(this);
            d = this.ta ? d.Kb : d.pointerType;
            var e = Jc(c, this.i, d.i);
            return null === e ? b.call(this) : this.ua ? Oc(d.i.N, {
                u: d,
                o: e,
                L: this,
                G: a
            }) : Oc(d.i.N, {
                u: d,
                o: e
            });
        };
        nd = m.UnboundTypeError = tc("UnboundTypeError");
        var Wd = {
            __syscall_fcntl64: function(a, b, c) {
                lc = c;
                try {
                    var d = Tb(a);
                    switch(b){
                        case 0:
                            var e = mc();
                            return 0 > e ? -28 : Vb(d, e).X;
                        case 1:
                        case 2:
                            return 0;
                        case 3:
                            return d.flags;
                        case 4:
                            return e = mc(), d.flags |= e, 0;
                        case 5:
                            return e = mc(), Da[e + 0 >> 1] = 2, 0;
                        case 6:
                        case 7:
                            return 0;
                        case 16:
                        case 8:
                            return -28;
                        case 9:
                            return L[Ud() >> 2] = 28, -1;
                        default:
                            return -28;
                    }
                } catch (f) {
                    if ("undefined" == typeof kc || "ErrnoError" !== f.name) throw f;
                    return -f.aa;
                }
            },
            __syscall_ioctl: function(a, b, c) {
                lc = c;
                try {
                    var d = Tb(a);
                    switch(b){
                        case 21509:
                            return d.s ? 0 : -59;
                        case 21505:
                            if (!d.s) return -59;
                            if (d.s.V.bc) {
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
                                var e = mc();
                                L[e >> 2] = 25856;
                                L[e + 4 >> 2] = 5;
                                L[e + 8 >> 2] = 191;
                                L[e + 12 >> 2] = 35387;
                                for(var f = 0; 32 > f; f++)B[e + f + 17 >> 0] = b[f] || 0;
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
                            if (d.s.V.cc) for(e = mc(), b = [], f = 0; 32 > f; f++)b.push(B[e + f + 17 >> 0]);
                            return 0;
                        case 21519:
                            if (!d.s) return -59;
                            e = mc();
                            return L[e >> 2] = 0;
                        case 21520:
                            return d.s ? -28 : -59;
                        case 21531:
                            e = mc();
                            if (!d.m.ac) throw new O(59);
                            return d.m.ac(d, b, e);
                        case 21523:
                            if (!d.s) return -59;
                            d.s.V.dc && (f = [
                                24,
                                80
                            ], e = mc(), Da[e >> 1] = f[0], Da[e + 2 >> 1] = f[1]);
                            return 0;
                        case 21524:
                            return d.s ? 0 : -59;
                        case 21515:
                            return d.s ? 0 : -59;
                        default:
                            return -28;
                    }
                } catch (g) {
                    if ("undefined" == typeof kc || "ErrnoError" !== g.name) throw g;
                    return -g.aa;
                }
            },
            __syscall_openat: function(a, b, c, d) {
                lc = d;
                try {
                    b = b ? nb(E, b) : "";
                    var e = b;
                    if ("/" === e.charAt(0)) b = e;
                    else {
                        var f = -100 === a ? "/" : Tb(a).path;
                        if (0 == e.length) throw new O(44);
                        b = gb(f + "/" + e);
                    }
                    var g = d ? mc() : 0;
                    return ec(b, c, g).X;
                } catch (n) {
                    if ("undefined" == typeof kc || "ErrnoError" !== n.name) throw n;
                    return -n.aa;
                }
            },
            _embind_create_inheriting_constructor: function(a, b, c) {
                a = W(a);
                b = Fc(b, "wrapper");
                c = rc(c);
                var d = [].slice, e = b.i, f = e.N, g = e.A.N, n = e.A.constructor;
                a = oc(a, function() {
                    e.A.qb.forEach((function(l) {
                        if (this[l] === g[l]) throw new uc(`Pure virtual function ${l} must be implemented in JavaScript`);
                    }).bind(this));
                    Object.defineProperty(this, "__parent", {
                        value: f
                    });
                    this.__construct.apply(this, d.call(arguments));
                });
                f.__construct = function() {
                    this === f && V("Pass correct 'this' to __construct");
                    var l = n.implement.apply(void 0, [
                        this
                    ].concat(d.call(arguments)));
                    Gc(l);
                    var u = l.g;
                    l.notifyOnDestruction();
                    u.ia = !0;
                    Object.defineProperties(this, {
                        g: {
                            value: u
                        }
                    });
                    Pc(this);
                    l = u.o;
                    l = Ac(e, l);
                    zc.hasOwnProperty(l) ? V(`Tried to register registered instance: ${l}`) : zc[l] = this;
                };
                f.__destruct = function() {
                    this === f && V("Pass correct 'this' to __destruct");
                    Gc(this);
                    var l = this.g.o;
                    l = Ac(e, l);
                    zc.hasOwnProperty(l) ? delete zc[l] : V(`Tried to unregister unregistered instance: ${l}`);
                };
                a.prototype = Object.create(f);
                for(var p in c)a.prototype[p] = c[p];
                return sc(a);
            },
            _embind_finalize_value_object: function(a) {
                var b = Qc[a];
                delete Qc[a];
                var c = b.Pa, d = b.W, e = b.eb, f = e.map((g)=>g.Yb).concat(e.map((g)=>g.rc));
                Y([
                    a
                ], f, (g)=>{
                    var n = {};
                    e.forEach((p, l)=>{
                        var u = g[l], v = p.Wb, x = p.Xb, k = g[l + e.length], t = p.qc, r = p.sc;
                        n[p.Sb] = {
                            read: (A)=>u.fromWireType(v(x, A)),
                            write: (A, D)=>{
                                var w = [];
                                t(r, A, k.toWireType(w, D));
                                Rc(w);
                            }
                        };
                    });
                    return [
                        {
                            name: b.name,
                            fromWireType: function(p) {
                                var l = {}, u;
                                for(u in n)l[u] = n[u].read(p);
                                d(p);
                                return l;
                            },
                            toWireType: function(p, l) {
                                for(var u in n){
                                    if (!(u in l)) throw new TypeError(`Missing field: "${u}"`);
                                }
                                var v = c();
                                for(u in n)n[u].write(v, l[u]);
                                null !== p && p.push(d, v);
                                return v;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: Sc,
                            K: d
                        }
                    ];
                });
            },
            _embind_register_bigint: function() {},
            _embind_register_bool: function(a, b, c, d, e) {
                var f = Wc(c);
                b = W(b);
                Vc(a, {
                    name: b,
                    fromWireType: function(g) {
                        return !!g;
                    },
                    toWireType: function(g, n) {
                        return n ? d : e;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function(g) {
                        if (1 === c) var n = B;
                        else if (2 === c) n = Da;
                        else if (4 === c) n = L;
                        else throw new TypeError("Unknown boolean type size: " + b);
                        return this.fromWireType(n[g >> f]);
                    },
                    K: null
                });
            },
            _embind_register_class: function(a, b, c, d, e, f, g, n, p, l, u, v, x) {
                u = W(u);
                f = Z(e, f);
                n && (n = Z(g, n));
                l && (l = Z(p, l));
                x = Z(v, x);
                var k = nc(u);
                ad(k, function() {
                    od(`Cannot construct ${u} due to unbound types`, [
                        d
                    ]);
                });
                Y([
                    a,
                    b,
                    c
                ], d ? [
                    d
                ] : [], function(t) {
                    t = t[0];
                    if (d) {
                        var r = t.i;
                        var A = r.N;
                    } else A = Zc.prototype;
                    t = oc(k, function() {
                        if (Object.getPrototypeOf(this) !== D) throw new qc("Use 'new' to construct " + u);
                        if (void 0 === w.$) throw new qc(u + " has no accessible constructor");
                        var T = w.$[arguments.length];
                        if (void 0 === T) throw new qc(`Tried to invoke ctor of ${u} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(w.$).toString()}) parameters instead!`);
                        return T.apply(this, arguments);
                    });
                    var D = Object.create(A, {
                        constructor: {
                            value: t
                        }
                    });
                    t.prototype = D;
                    var w = new bd(u, t, D, x, r, f, n, l);
                    w.A && (void 0 === w.A.oa && (w.A.oa = []), w.A.oa.push(w));
                    r = new hd(u, w, !0, !1);
                    A = new hd(u + "*", w, !1, !1);
                    var M = new hd(u + " const*", w, !1, !0);
                    Kc[a] = {
                        pointerType: A,
                        Kb: M
                    };
                    jd(k, t);
                    return [
                        r,
                        A,
                        M
                    ];
                });
            },
            _embind_register_class_class_function: function(a, b, c, d, e, f, g) {
                var n = rd(c, d);
                b = W(b);
                f = Z(e, f);
                Y([], [
                    a
                ], function(p) {
                    function l() {
                        od(`Cannot call ${u} due to unbound types`, n);
                    }
                    p = p[0];
                    var u = `${p.name}.${b}`;
                    b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                    var v = p.i.constructor;
                    void 0 === v[b] ? (l.ea = c - 1, v[b] = l) : ($c(v, b, u), v[b].B[c - 1] = l);
                    Y([], n, function(x) {
                        x = pd(u, [
                            x[0],
                            null
                        ].concat(x.slice(1)), null, f, g);
                        void 0 === v[b].B ? (x.ea = c - 1, v[b] = x) : v[b].B[c - 1] = x;
                        if (p.i.oa) for (const k of p.i.oa)k.constructor.hasOwnProperty(b) || (k.constructor[b] = x);
                        return [];
                    });
                    return [];
                });
            },
            _embind_register_class_class_property: function(a, b, c, d, e, f, g, n) {
                b = W(b);
                f = Z(e, f);
                Y([], [
                    a
                ], function(p) {
                    p = p[0];
                    var l = `${p.name}.${b}`, u = {
                        get () {
                            od(`Cannot access ${l} due to unbound types`, [
                                c
                            ]);
                        },
                        enumerable: !0,
                        configurable: !0
                    };
                    u.set = n ? ()=>{
                        od(`Cannot access ${l} due to unbound types`, [
                            c
                        ]);
                    } : ()=>{
                        V(`${l} is a read-only property`);
                    };
                    Object.defineProperty(p.i.constructor, b, u);
                    Y([], [
                        c
                    ], function(v) {
                        v = v[0];
                        var x = {
                            get () {
                                return v.fromWireType(f(d));
                            },
                            enumerable: !0
                        };
                        n && (n = Z(g, n), x.set = (k)=>{
                            var t = [];
                            n(d, v.toWireType(t, k));
                            Rc(t);
                        });
                        Object.defineProperty(p.i.constructor, b, x);
                        return [];
                    });
                    return [];
                });
            },
            _embind_register_class_constructor: function(a, b, c, d, e, f) {
                var g = rd(b, c);
                e = Z(d, e);
                Y([], [
                    a
                ], function(n) {
                    n = n[0];
                    var p = `constructor ${n.name}`;
                    void 0 === n.i.$ && (n.i.$ = []);
                    if (void 0 !== n.i.$[b - 1]) throw new qc(`Cannot register multiple constructors with identical number of parameters (${b - 1}) for class '${n.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                    n.i.$[b - 1] = ()=>{
                        od(`Cannot construct ${n.name} due to unbound types`, g);
                    };
                    Y([], g, function(l) {
                        l.splice(1, 0, null);
                        n.i.$[b - 1] = pd(p, l, null, e, f);
                        return [];
                    });
                    return [];
                });
            },
            _embind_register_class_function: function(a, b, c, d, e, f, g, n) {
                var p = rd(c, d);
                b = W(b);
                f = Z(e, f);
                Y([], [
                    a
                ], function(l) {
                    function u() {
                        od(`Cannot call ${v} due to unbound types`, p);
                    }
                    l = l[0];
                    var v = `${l.name}.${b}`;
                    b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                    n && l.i.qb.push(b);
                    var x = l.i.N, k = x[b];
                    void 0 === k || void 0 === k.B && k.className !== l.name && k.ea === c - 2 ? (u.ea = c - 2, u.className = l.name, x[b] = u) : ($c(x, b, v), x[b].B[c - 2] = u);
                    Y([], p, function(t) {
                        t = pd(v, t, l, f, g);
                        void 0 === x[b].B ? (t.ea = c - 2, x[b] = t) : x[b].B[c - 2] = t;
                        return [];
                    });
                    return [];
                });
            },
            _embind_register_class_property: function(a, b, c, d, e, f, g, n, p, l) {
                b = W(b);
                e = Z(d, e);
                Y([], [
                    a
                ], function(u) {
                    u = u[0];
                    var v = `${u.name}.${b}`, x = {
                        get () {
                            od(`Cannot access ${v} due to unbound types`, [
                                c,
                                g
                            ]);
                        },
                        enumerable: !0,
                        configurable: !0
                    };
                    x.set = p ? ()=>{
                        od(`Cannot access ${v} due to unbound types`, [
                            c,
                            g
                        ]);
                    } : ()=>{
                        V(v + " is a read-only property");
                    };
                    Object.defineProperty(u.i.N, b, x);
                    Y([], p ? [
                        c,
                        g
                    ] : [
                        c
                    ], function(k) {
                        var t = k[0], r = {
                            get () {
                                var D = sd(this, u, v + " getter");
                                return t.fromWireType(e(f, D));
                            },
                            enumerable: !0
                        };
                        if (p) {
                            p = Z(n, p);
                            var A = k[1];
                            r.set = function(D) {
                                var w = sd(this, u, v + " setter"), M = [];
                                p(l, w, A.toWireType(M, D));
                                Rc(M);
                            };
                        }
                        Object.defineProperty(u.i.N, b, r);
                        return [];
                    });
                    return [];
                });
            },
            _embind_register_emval: function(a, b) {
                b = W(b);
                Vc(a, {
                    name: b,
                    fromWireType: function(c) {
                        var d = rc(c);
                        td(c);
                        return d;
                    },
                    toWireType: function(c, d) {
                        return sc(d);
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Sc,
                    K: null
                });
            },
            _embind_register_enum: function(a, b, c, d) {
                function e() {}
                c = Wc(c);
                b = W(b);
                e.values = {};
                Vc(a, {
                    name: b,
                    constructor: e,
                    fromWireType: function(f) {
                        return this.constructor.values[f];
                    },
                    toWireType: function(f, g) {
                        return g.value;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: ud(b, c, d),
                    K: null
                });
                ad(b, e);
            },
            _embind_register_enum_value: function(a, b, c) {
                var d = Fc(a, "enum");
                b = W(b);
                a = d.constructor;
                d = Object.create(d.constructor.prototype, {
                    value: {
                        value: c
                    },
                    constructor: {
                        value: oc(`${d.name}_${b}`, function() {})
                    }
                });
                a.values[c] = d;
                a[b] = d;
            },
            _embind_register_float: function(a, b, c) {
                c = Wc(c);
                b = W(b);
                Vc(a, {
                    name: b,
                    fromWireType: function(d) {
                        return d;
                    },
                    toWireType: function(d, e) {
                        return e;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: vd(b, c),
                    K: null
                });
            },
            _embind_register_function: function(a, b, c, d, e, f) {
                var g = rd(b, c);
                a = W(a);
                e = Z(d, e);
                ad(a, function() {
                    od(`Cannot call ${a} due to unbound types`, g);
                }, b - 1);
                Y([], g, function(n) {
                    jd(a, pd(a, [
                        n[0],
                        null
                    ].concat(n.slice(1)), null, e, f), b - 1);
                    return [];
                });
            },
            _embind_register_integer: function(a, b, c, d, e) {
                b = W(b);
                -1 === e && (e = 4294967295);
                e = Wc(c);
                var f = (n)=>n;
                if (0 === d) {
                    var g = 32 - 8 * c;
                    f = (n)=>n << g >>> g;
                }
                c = b.includes("unsigned") ? function(n, p) {
                    return p >>> 0;
                } : function(n, p) {
                    return p;
                };
                Vc(a, {
                    name: b,
                    fromWireType: f,
                    toWireType: c,
                    argPackAdvance: 8,
                    readValueFromPointer: wd(b, e, 0 !== d),
                    K: null
                });
            },
            _embind_register_memory_view: function(a, b, c) {
                function d(f) {
                    f >>= 2;
                    var g = N;
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
                c = W(c);
                Vc(a, {
                    name: c,
                    fromWireType: d,
                    argPackAdvance: 8,
                    readValueFromPointer: d
                }, {
                    $b: !0
                });
            },
            _embind_register_std_string: function(a, b) {
                b = W(b);
                var c = "std::string" === b;
                Vc(a, {
                    name: b,
                    fromWireType: function(d) {
                        var e = N[d >> 2], f = d + 4;
                        if (c) for(var g = f, n = 0; n <= e; ++n){
                            var p = f + n;
                            if (n == e || 0 == E[p]) {
                                g = g ? nb(E, g, p - g) : "";
                                if (void 0 === l) var l = g;
                                else l += String.fromCharCode(0), l += g;
                                g = p + 1;
                            }
                        }
                        else {
                            l = Array(e);
                            for(n = 0; n < e; ++n)l[n] = String.fromCharCode(E[f + n]);
                            l = l.join("");
                        }
                        Ec(d);
                        return l;
                    },
                    toWireType: function(d, e) {
                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                        var f = "string" == typeof e;
                        f || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || V("Cannot pass non-string to std::string");
                        var g = c && f ? pb(e) : e.length;
                        var n = Vd(4 + g + 1), p = n + 4;
                        N[n >> 2] = g;
                        if (c && f) qb(e, E, p, g + 1);
                        else {
                            if (f) for(f = 0; f < g; ++f){
                                var l = e.charCodeAt(f);
                                255 < l && (Ec(p), V("String has UTF-16 code units that do not fit in 8 bits"));
                                E[p + f] = l;
                            }
                            else for(f = 0; f < g; ++f)E[p + f] = e[f];
                        }
                        null !== d && d.push(Ec, n);
                        return n;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Sc,
                    K: function(d) {
                        Ec(d);
                    }
                });
            },
            _embind_register_std_wstring: function(a, b, c) {
                c = W(c);
                if (2 === b) {
                    var d = yd;
                    var e = zd;
                    var f = Ad;
                    var g = ()=>Ea;
                    var n = 1;
                } else 4 === b && (d = Bd, e = Cd, f = Dd, g = ()=>N, n = 2);
                Vc(a, {
                    name: c,
                    fromWireType: function(p) {
                        for(var l = N[p >> 2], u = g(), v, x = p + 4, k = 0; k <= l; ++k){
                            var t = p + 4 + k * b;
                            if (k == l || 0 == u[t >> n]) x = d(x, t - x), void 0 === v ? v = x : (v += String.fromCharCode(0), v += x), x = t + b;
                        }
                        Ec(p);
                        return v;
                    },
                    toWireType: function(p, l) {
                        "string" != typeof l && V(`Cannot pass non-string to C++ string type ${c}`);
                        var u = f(l), v = Vd(4 + u + b);
                        N[v >> 2] = u >> n;
                        e(l, v + 4, u + b);
                        null !== p && p.push(Ec, v);
                        return v;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Sc,
                    K: function(p) {
                        Ec(p);
                    }
                });
            },
            _embind_register_value_object: function(a, b, c, d, e, f) {
                Qc[a] = {
                    name: W(b),
                    Pa: Z(c, d),
                    W: Z(e, f),
                    eb: []
                };
            },
            _embind_register_value_object_field: function(a, b, c, d, e, f, g, n, p, l) {
                Qc[a].eb.push({
                    Sb: W(b),
                    Yb: c,
                    Wb: Z(d, e),
                    Xb: f,
                    rc: g,
                    qc: Z(n, p),
                    sc: l
                });
            },
            _embind_register_void: function(a, b) {
                b = W(b);
                Vc(a, {
                    fc: !0,
                    name: b,
                    argPackAdvance: 0,
                    fromWireType: function() {},
                    toWireType: function() {}
                });
            },
            _emscripten_get_now_is_monotonic: ()=>!0,
            _emval_as: function(a, b, c) {
                a = rc(a);
                b = Fc(b, "emval::as");
                var d = [], e = sc(d);
                N[c >> 2] = e;
                return b.toWireType(d, a);
            },
            _emval_call_method: function(a, b, c, d, e) {
                a = Gd[a];
                b = rc(b);
                c = Fd(c);
                var f = [];
                N[d >> 2] = sc(f);
                return a(b, c, f, e);
            },
            _emval_call_void_method: function(a, b, c, d) {
                a = Gd[a];
                b = rc(b);
                c = Fd(c);
                a(b, c, null, d);
            },
            _emval_decref: td,
            _emval_get_method_caller: function(a, b) {
                var c = Id(a, b), d = c[0];
                b = d.name + "_$" + c.slice(1).map(function(g) {
                    return g.name;
                }).join("_") + "$";
                var e = Jd[b];
                if (void 0 !== e) return e;
                var f = Array(a - 1);
                e = Hd((g, n, p, l)=>{
                    for(var u = 0, v = 0; v < a - 1; ++v)f[v] = c[v + 1].readValueFromPointer(l + u), u += c[v + 1].argPackAdvance;
                    g = g[n].apply(g, f);
                    for(v = 0; v < a - 1; ++v)c[v + 1].Nb && c[v + 1].Nb(f[v]);
                    if (!d.fc) return d.toWireType(p, g);
                });
                return Jd[b] = e;
            },
            _emval_get_module_property: function(a) {
                a = Fd(a);
                return sc(m[a]);
            },
            _emval_get_property: function(a, b) {
                a = rc(a);
                b = rc(b);
                return sc(a[b]);
            },
            _emval_incref: function(a) {
                4 < a && (U.get(a).tb += 1);
            },
            _emval_new_cstring: function(a) {
                return sc(Fd(a));
            },
            _emval_new_object: function() {
                return sc({});
            },
            _emval_run_destructors: function(a) {
                var b = rc(a);
                Rc(b);
                td(a);
            },
            _emval_set_property: function(a, b, c) {
                a = rc(a);
                b = rc(b);
                c = rc(c);
                a[b] = c;
            },
            _emval_take_value: function(a, b) {
                a = Fc(a, "_emval_take_value");
                a = a.readValueFromPointer(b);
                return sc(a);
            },
            abort: ()=>{
                Aa("");
            },
            emscripten_asm_const_int: (a, b, c)=>{
                Kd.length = 0;
                var d;
                for(c >>= 2; d = E[b++];)c += 105 != d & c, Kd.push(105 == d ? L[c] : Ia[c++ >> 1]), ++c;
                return db[a].apply(null, Kd);
            },
            emscripten_date_now: function() {
                return Date.now();
            },
            emscripten_get_now: ()=>performance.now(),
            emscripten_memcpy_big: (a, b, c)=>E.copyWithin(a, b, b + c),
            emscripten_resize_heap: (a)=>{
                var b = E.length;
                a >>>= 0;
                if (2147483648 < a) return !1;
                for(var c = 1; 4 >= c; c *= 2){
                    var d = b * (1 + 0.2 / c);
                    d = Math.min(d, a + 100663296);
                    var e = Math;
                    d = Math.max(a, d);
                    a: {
                        e = e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536) - Ba.buffer.byteLength + 65535 >>> 16;
                        try {
                            Ba.grow(e);
                            Ja();
                            var f = 1;
                            break a;
                        } catch (g) {}
                        f = void 0;
                    }
                    if (f) return !0;
                }
                return !1;
            },
            environ_get: (a, b)=>{
                var c = 0;
                Nd().forEach(function(d, e) {
                    var f = b + c;
                    e = N[a + 4 * e >> 2] = f;
                    for(f = 0; f < d.length; ++f)B[e++ >> 0] = d.charCodeAt(f);
                    B[e >> 0] = 0;
                    c += d.length + 1;
                });
                return 0;
            },
            environ_sizes_get: (a, b)=>{
                var c = Nd();
                N[a >> 2] = c.length;
                var d = 0;
                c.forEach(function(e) {
                    d += e.length + 1;
                });
                N[b >> 2] = d;
                return 0;
            },
            fd_close: function(a) {
                try {
                    var b = Tb(a);
                    if (null === b.X) throw new O(8);
                    b.Ma && (b.Ma = null);
                    try {
                        b.m.close && b.m.close(b);
                    } catch (c) {
                        throw c;
                    } finally{
                        Gb[b.X] = null;
                    }
                    b.X = null;
                    return 0;
                } catch (c) {
                    if ("undefined" == typeof kc || "ErrnoError" !== c.name) throw c;
                    return c.aa;
                }
            },
            fd_read: function(a, b, c, d) {
                try {
                    a: {
                        var e = Tb(a);
                        a = b;
                        for(var f, g = b = 0; g < c; g++){
                            var n = N[a >> 2], p = N[a + 4 >> 2];
                            a += 8;
                            var l = e, u = n, v = p, x = f, k = B;
                            if (0 > v || 0 > x) throw new O(28);
                            if (null === l.X) throw new O(8);
                            if (1 === (l.flags & 2097155)) throw new O(8);
                            if (16384 === (l.node.mode & 61440)) throw new O(31);
                            if (!l.m.read) throw new O(28);
                            var t = "undefined" != typeof x;
                            if (!t) x = l.position;
                            else if (!l.seekable) throw new O(70);
                            var r = l.m.read(l, k, u, v, x);
                            t || (l.position += r);
                            var A = r;
                            if (0 > A) {
                                var D = -1;
                                break a;
                            }
                            b += A;
                            if (A < p) break;
                            "undefined" !== typeof f && (f += A);
                        }
                        D = b;
                    }
                    N[d >> 2] = D;
                    return 0;
                } catch (w) {
                    if ("undefined" == typeof kc || "ErrnoError" !== w.name) throw w;
                    return w.aa;
                }
            },
            fd_seek: function(a, b, c, d, e) {
                b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
                try {
                    if (isNaN(b)) return 61;
                    var f = Tb(a);
                    fc(f, b, d);
                    $a = [
                        f.position >>> 0,
                        (Za = f.position, 1.0 <= +Math.abs(Za) ? 0.0 < Za ? +Math.floor(Za / 4294967296.0) >>> 0 : ~~+Math.ceil((Za - +(~~Za >>> 0)) / 4294967296.0) >>> 0 : 0)
                    ];
                    L[e >> 2] = $a[0];
                    L[e + 4 >> 2] = $a[1];
                    f.Ma && 0 === b && 0 === d && (f.Ma = null);
                    return 0;
                } catch (g) {
                    if ("undefined" == typeof kc || "ErrnoError" !== g.name) throw g;
                    return g.aa;
                }
            },
            fd_write: function(a, b, c, d) {
                try {
                    a: {
                        var e = Tb(a);
                        a = b;
                        for(var f, g = b = 0; g < c; g++){
                            var n = N[a >> 2], p = N[a + 4 >> 2];
                            a += 8;
                            var l = e, u = n, v = p, x = f, k = B;
                            if (0 > v || 0 > x) throw new O(28);
                            if (null === l.X) throw new O(8);
                            if (0 === (l.flags & 2097155)) throw new O(8);
                            if (16384 === (l.node.mode & 61440)) throw new O(31);
                            if (!l.m.write) throw new O(28);
                            l.seekable && l.flags & 1024 && fc(l, 0, 2);
                            var t = "undefined" != typeof x;
                            if (!t) x = l.position;
                            else if (!l.seekable) throw new O(70);
                            var r = l.m.write(l, k, u, v, x, void 0);
                            t || (l.position += r);
                            var A = r;
                            if (0 > A) {
                                var D = -1;
                                break a;
                            }
                            b += A;
                            "undefined" !== typeof f && (f += A);
                        }
                        D = b;
                    }
                    N[d >> 2] = D;
                    return 0;
                } catch (w) {
                    if ("undefined" == typeof kc || "ErrnoError" !== w.name) throw w;
                    return w.aa;
                }
            },
            strftime_l: (a, b, c, d)=>Rd(a, b, c, d)
        };
        (function() {
            function a(c) {
                y = c = c.exports;
                Ba = y.memory;
                Ja();
                Ka = y.__indirect_function_table;
                Ma.unshift(y.__wasm_call_ctors);
                Pa--;
                m.monitorRunDependencies && m.monitorRunDependencies(Pa);
                if (0 == Pa && (null !== Qa && (clearInterval(Qa), Qa = null), Ra)) {
                    var d = Ra;
                    Ra = null;
                    d();
                }
                return c;
            }
            var b = {
                env: Wd,
                wasi_snapshot_preview1: Wd
            };
            Pa++;
            m.monitorRunDependencies && m.monitorRunDependencies(Pa);
            if (m.instantiateWasm) try {
                return m.instantiateWasm(b, a);
            } catch (c) {
                xa("Module.instantiateWasm callback failed with error: " + c), ea(c);
            }
            Ya(b, function(c) {
                a(c.instance);
            }).catch(ea);
            return {};
        })();
        var Ec = (a)=>(Ec = y.free)(a), Vd = (a)=>(Vd = y.malloc)(a), ab = m._ma_device__on_notification_unlocked = (a)=>(ab = m._ma_device__on_notification_unlocked = y.ma_device__on_notification_unlocked)(a);
        m._ma_malloc_emscripten = (a, b)=>(m._ma_malloc_emscripten = y.ma_malloc_emscripten)(a, b);
        m._ma_free_emscripten = (a, b)=>(m._ma_free_emscripten = y.ma_free_emscripten)(a, b);
        var bb = m._ma_device_process_pcm_frames_capture__webaudio = (a, b, c)=>(bb = m._ma_device_process_pcm_frames_capture__webaudio = y.ma_device_process_pcm_frames_capture__webaudio)(a, b, c), cb = m._ma_device_process_pcm_frames_playback__webaudio = (a, b, c)=>(cb = m._ma_device_process_pcm_frames_playback__webaudio = y.ma_device_process_pcm_frames_playback__webaudio)(a, b, c), Ud = ()=>(Ud = y.__errno_location)(), Dc = (a)=>(Dc = y.__getTypeName)(a);
        m.__embind_initialize_bindings = ()=>(m.__embind_initialize_bindings = y._embind_initialize_bindings)();
        m.dynCall_iiji = (a, b, c, d, e)=>(m.dynCall_iiji = y.dynCall_iiji)(a, b, c, d, e);
        m.dynCall_jiji = (a, b, c, d, e)=>(m.dynCall_jiji = y.dynCall_jiji)(a, b, c, d, e);
        m.dynCall_iiiji = (a, b, c, d, e, f)=>(m.dynCall_iiiji = y.dynCall_iiiji)(a, b, c, d, e, f);
        m.dynCall_iij = (a, b, c, d)=>(m.dynCall_iij = y.dynCall_iij)(a, b, c, d);
        m.dynCall_jii = (a, b, c)=>(m.dynCall_jii = y.dynCall_jii)(a, b, c);
        m.dynCall_viijii = (a, b, c, d, e, f, g)=>(m.dynCall_viijii = y.dynCall_viijii)(a, b, c, d, e, f, g);
        m.dynCall_iiiiij = (a, b, c, d, e, f, g)=>(m.dynCall_iiiiij = y.dynCall_iiiiij)(a, b, c, d, e, f, g);
        m.dynCall_iiiiijj = (a, b, c, d, e, f, g, n, p)=>(m.dynCall_iiiiijj = y.dynCall_iiiiijj)(a, b, c, d, e, f, g, n, p);
        m.dynCall_iiiiiijj = (a, b, c, d, e, f, g, n, p, l)=>(m.dynCall_iiiiiijj = y.dynCall_iiiiiijj)(a, b, c, d, e, f, g, n, p, l);
        var Xd;
        Ra = function Yd() {
            Xd || Zd();
            Xd || (Ra = Yd);
        };
        function Zd() {
            function a() {
                if (!Xd && (Xd = !0, m.calledRun = !0, !Ca)) {
                    m.noFSInit || hc || (hc = !0, gc(), m.stdin = m.stdin, m.stdout = m.stdout, m.stderr = m.stderr, m.stdin ? jc("stdin", m.stdin) : cc("/dev/tty", "/dev/stdin"), m.stdout ? jc("stdout", null, m.stdout) : cc("/dev/tty", "/dev/stdout"), m.stderr ? jc("stderr", null, m.stderr) : cc("/dev/tty1", "/dev/stderr"), ec("/dev/stdin", 0), ec("/dev/stdout", 1), ec("/dev/stderr", 1));
                    Jb = !1;
                    eb(Ma);
                    aa(m);
                    if (m.onRuntimeInitialized) m.onRuntimeInitialized();
                    if (m.postRun) for("function" == typeof m.postRun && (m.postRun = [
                        m.postRun
                    ]); m.postRun.length;){
                        var b = m.postRun.shift();
                        Na.unshift(b);
                    }
                    eb(Na);
                }
            }
            if (!(0 < Pa)) {
                if (m.preRun) for("function" == typeof m.preRun && (m.preRun = [
                    m.preRun
                ]); m.preRun.length;)Oa();
                eb(La);
                0 < Pa || (m.setStatus ? (m.setStatus("Running..."), setTimeout(function() {
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
        Zd();
        return moduleArg.ready;
    };
})();
exports.default = Rive;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"7ma2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec2D", ()=>Vec2D);
class Vec2D {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e3TpL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//TODO: keyboard events are not well thought out.
parcelHelpers.export(exports, "Input", ()=>Input);
parcelHelpers.export(exports, "KeyCode", ()=>KeyCode);
var _game = require("./Game");
var _gameDefault = parcelHelpers.interopDefault(_game);
class Input {
    static{
        this.MouseX = 0;
    }
    static{
        this.MouseY = 0;
    }
    static{
        this.CanvasMouseX = 0;
    }
    static{
        this.CanvasMouseY = 0;
    }
    static{
        this.IsMouseDown = false;
    }
    static{
        this.IsMouseClicked = false;
    }
    static{
        this.IsMouseUp = false;
    }
    static{
        this.HasMouseMoved = false;
    }
    static{
        this.keysDown = new Set();
    }
    static{
        this.keysPressed = new Set();
    }
    static{
        this.keysReleased = new Set();
    }
    static Initiate(canvas) {
        this.Canvas = canvas;
        // Mouse events
        window.addEventListener("mousemove", this.handleMouseMove);
        window.addEventListener("mousedown", this.handleStart);
        window.addEventListener("mouseup", this.handleEnd);
        // Touch events
        window.addEventListener("touchstart", this.handleStart);
        window.addEventListener("touchend", this.handleEnd);
        window.addEventListener("touchmove", this.handleTouchMove);
        // Prevent default touch behavior
        window.addEventListener("touchstart", this.preventDefault, {
            passive: false
        });
        window.addEventListener("touchmove", this.preventDefault, {
            passive: false
        });
        // Keyboard events
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }
    static{
        this.handleStart = (event)=>{
            this.IsMouseDown = true;
            this.IsMouseClicked = true;
            this.HasMouseMoved = false;
            this.updateCoordinates(event);
        };
    }
    static{
        this.handleEnd = (event)=>{
            this.IsMouseDown = false;
            this.IsMouseUp = true;
            this.updateCoordinates(event);
            if (!this.HasMouseMoved) this.handleClick(event);
        };
    }
    static{
        this.handleMouseMove = (event)=>{
            this.HasMouseMoved = true;
            this.updateCoordinates(event);
        };
    }
    static{
        this.handleTouchMove = (event)=>{
            this.HasMouseMoved = true;
            this.updateCoordinates(event);
        };
    }
    static handleClick(event) {
    //console.log('Click or tap detected', event);
    // Your click/tap logic here
    }
    static updateCoordinates(event) {
        if (event instanceof MouseEvent) {
            this.MouseX = event.clientX;
            this.MouseY = event.clientY;
        } else if (event instanceof TouchEvent && event.touches.length > 0) {
            this.MouseX = event.touches[0].clientX;
            this.MouseY = event.touches[0].clientY;
        }
        this.UpdateCanvasCoords();
    }
    static UpdateCanvasCoords() {
        const rect = this.Canvas.getBoundingClientRect();
        this.CanvasMouseX = this.MouseX - rect.left;
        this.CanvasMouseY = this.MouseY - rect.top;
    }
    static Clear() {
        this.IsMouseClicked = false;
        this.IsMouseUp = false;
        this.HasMouseMoved = false;
        this.keysDown.clear();
        this.keysPressed.clear();
        this.keysReleased.clear();
    }
    static preventDefault(event) {
        event.preventDefault();
    }
    static{
        this.handleKeyDown = (event)=>{
            const keyCode = event.keyCode;
            if (!this.keysDown.has(keyCode)) this.keysPressed.add(keyCode);
            this.keysDown.add(keyCode);
        };
    }
    static{
        this.handleKeyUp = (event)=>{
            const keyCode = event.keyCode;
            this.keysDown.delete(keyCode);
            this.keysPressed.delete(keyCode);
            this.keysReleased.add(keyCode);
        };
    }
    static IsKeyDown(keyCode) {
        return this.keysPressed.has(keyCode);
    }
    static IsKeyUp(keyCode) {
        return this.keysReleased.has(keyCode);
    }
    static IsKey(keyCode) {
        return this.keysDown.has(keyCode);
    }
    static MouseToArtboardSpace(riveRenderer) {
        let fwdMatrix = (0, _gameDefault.default).RiveInstance.computeAlignment(riveRenderer.fit, riveRenderer.alignment, riveRenderer.frame, riveRenderer.artboard.bounds);
        let inverseViewMatrix = new (0, _gameDefault.default).RiveInstance.Mat2D();
        let x = 0;
        let y = 0;
        // Invert the view matrix in order to go from cursor to artboard space.
        if (fwdMatrix.invert(inverseViewMatrix)) {
            x = inverseViewMatrix.xx * this.CanvasMouseX + inverseViewMatrix.yx * this.CanvasMouseY + inverseViewMatrix.tx;
            y = inverseViewMatrix.xy * this.CanvasMouseX + inverseViewMatrix.yy * this.CanvasMouseY + inverseViewMatrix.ty;
        }
        return {
            x,
            y
        };
    }
}
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

},{"./Game":"TyEjs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kTlrO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Debug", ()=>Debug);
var _game = require("./Game");
var _gameDefault = parcelHelpers.interopDefault(_game);
class Debug {
    static Initiate() {
        Debug.Box = document.getElementById("debug-content");
    }
    static Clear() {
        this.Box.innerHTML = "";
    }
    static Add(text) {
        Debug.Box.innerHTML += "<br>" + text;
    }
    static LogUnpackedRiveFile(file) {
        let log = "";
        for(let i = 0; i < file.artboardCount(); i++){
            let artboard = file.artboardByIndex(i);
            log += `\n Artboard: ${artboard.name}`;
            log += `\n     ${artboard.stateMachineCount()} State Machines`;
            for(let i = 0; i < artboard.stateMachineCount(); i++){
                let sm = artboard.stateMachineByIndex(i);
                log += `\n ----SM: ${sm.name}`;
                let sm_instance = new (0, _gameDefault.default).RiveInstance.StateMachineInstance(sm, artboard);
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
    static{
        this.crosshair = null;
    }
    static ToggleCrosshair() {
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
            }
            .crosshair-h {
            width: 100%;
            height: 1px;
            }
            .crosshair-v {
            width: 1px;
            height: 100%;
            }
        </style>
         <div class="canvas-container">
            <div class="crosshair-h"></div>
            <div class="crosshair-v"></div>
         </div>

        `;
        // Create a new div element
        this.crosshair = document.createElement("div");
        // Set the innerHTML of the new div to our HTML string
        this.crosshair.innerHTML = html;
        // Append the new div to the body
        document.body.appendChild(this.crosshair);
    }
}

},{"./Game":"TyEjs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wkVX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RiveSMRenderer", ()=>RiveSMRenderer);
var _riveSMInput = require("./RiveSMInput");
var _riveRenderer = require("./RiveRenderer");
var _riveRendererDefault = parcelHelpers.interopDefault(_riveRenderer);
var _game = require("./Game");
var _gameDefault = parcelHelpers.interopDefault(_game);
var _input = require("./Input");
var RiveEventType;
(function(RiveEventType) {
    RiveEventType[RiveEventType["General"] = 128] = "General";
    RiveEventType[RiveEventType["OpenURL"] = 131] = "OpenURL";
    RiveEventType[RiveEventType["Audio"] = 132] = "Audio";
})(RiveEventType || (RiveEventType = {}));
class RiveSMRenderer extends (0, _riveRendererDefault.default) {
    constructor(artboard, stateMachine){
        super(artboard);
        this.inputs = [];
        this._reportedEvents = [];
        this._changedStates = [];
        this.generalEventListeners = [];
        this.openUrlEventListeners = [];
        this.smInstance = new (0, _gameDefault.default).RiveInstance.StateMachineInstance(stateMachine, artboard);
        for(let i = 0; i < this.smInstance.inputCount(); i++){
            let input = this.smInstance.input(i);
            this.inputs.push(new (0, _riveSMInput.RiveSMInput)(input));
        }
    }
    advance(deltaTime) {
        this._reportedEvents = [];
        this._changedStates = [];
        let mouseCoords = (0, _input.Input).MouseToArtboardSpace(this);
        //TODO: This is super slow. Only call this shit if within bounding box?
        if ((0, _input.Input).IsMouseClicked) this.smInstance.pointerDown(mouseCoords.x, mouseCoords.y);
        if ((0, _input.Input).IsMouseUp) this.smInstance.pointerUp(mouseCoords.x, mouseCoords.y);
        if ((0, _input.Input).HasMouseMoved) this.smInstance.pointerMove(mouseCoords.x, mouseCoords.y);
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
        super.advance(deltaTime);
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
        if (event.type === 131) this.openUrlEventListeners.forEach((callback)=>callback(event));
        else this.generalEventListeners.forEach((callback)=>callback(event));
    }
    destroy() {
        this.smInstance.delete();
    }
}

},{"./RiveSMInput":"eGtaD","./RiveRenderer":"f6jJE","./Game":"TyEjs","./Input":"e3TpL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eGtaD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Wrapper class for Rive's SMIInput.
 * Provides a clearer classification of input types and type-safe interactions,
 * replacing magic numbers with meaningful enums and adding runtime type checks.
 */ parcelHelpers.export(exports, "RiveSMInput", ()=>RiveSMInput);
class RiveSMInput {
    static{
        this.InputType = {
            Boolean: "BOOLEAN",
            Number: "NUMBER",
            Trigger: "TRIGGER"
        };
    }
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
        if (this.inputType === RiveSMInput.InputType.Boolean && typeof val !== "boolean") throw new Error(`SMIInput ${this.smiInput.name}: Expected boolean value for Boolean input`);
        if (this.inputType === RiveSMInput.InputType.Number && typeof val !== "number") throw new Error(`SMIInput ${this.smiInput.name}: Expected number value for Number input`);
        this.smiInput.value = val;
    }
    fire() {
        if (this.inputType !== RiveSMInput.InputType.Trigger) throw new Error(`SMIInput ${this.smiInput.name}: Tried to fire a non-trigger SMIInput`);
        this.smiInput.fire();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f6jJE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RiveRenderer", ()=>RiveRenderer);
var _game = require("./Game");
var _gameDefault = parcelHelpers.interopDefault(_game);
var _utils = require("./Utils");
class RiveRenderer {
    get frame() {
        let aabb = this.artboard.bounds;
        aabb.minX += this.position.x;
        aabb.maxX += this.position.x;
        aabb.minY += this.position.y;
        aabb.maxY += this.position.y;
        aabb.minX *= this.scale.x * (0, _gameDefault.default).ResScale.x;
        aabb.maxX *= this.scale.x * (0, _gameDefault.default).ResScale.x;
        aabb.minY *= this.scale.y * (0, _gameDefault.default).ResScale.y;
        aabb.maxY *= this.scale.y * (0, _gameDefault.default).ResScale.y;
        return aabb;
    }
    get width() {
        return this.artboard.bounds.maxX - this.artboard.bounds.minX;
    }
    get height() {
        return this.artboard.bounds.maxY - this.artboard.bounds.minY;
    }
    constructor(artboard){
        this.frameOrigin = false;
        this.fit = (0, _gameDefault.default).RiveInstance.Fit.contain;
        this.alignment = (0, _gameDefault.default).RiveInstance.Alignment.topLeft;
        this.position = new (0, _utils.Vec2D)(0, 0);
        this.scale = new (0, _utils.Vec2D)(1, 1);
        this.enabled = true;
        this.artboard = artboard;
        this.artboard.frameOrigin = this.frameOrigin;
    }
    advance(deltaTime) {
        this.artboard.advance(deltaTime);
    }
    destroy() {
    //what to do, what to do
    }
}
exports.default = RiveRenderer;

},{"./Game":"TyEjs","./Utils":"7ma2M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHqrV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RiveAnimatorRenderer", ()=>RiveAnimatorRenderer);
var _riveRenderer = require("./RiveRenderer");
var _riveRendererDefault = parcelHelpers.interopDefault(_riveRenderer);
var _riveAnimation = require("./RiveAnimation");
var _game = require("./Game");
var _gameDefault = parcelHelpers.interopDefault(_game);
class RiveAnimatorRenderer extends (0, _riveRendererDefault.default) {
    constructor(artboard){
        super(artboard);
        this.animations = new Map();
    }
    add(linearAnimation) {
        const instance = new (0, _gameDefault.default).RiveInstance.LinearAnimationInstance(linearAnimation, this.artboard);
        const riveAnimation = new (0, _riveAnimation.RiveAnimation)(instance);
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
        this.animations.get(name)?.destroy();
        this.animations.delete(name);
    }
    getWeight(name) {
        return this.animations.get(name)?.weight;
    }
    setWeight(name, weight) {
        const animation = this.animations.get(name);
        if (animation) animation.weight = weight;
    }
    advance(deltaTime) {
        for (const animation of this.animations.values())animation.advance(deltaTime);
        super.advance(deltaTime);
    }
    // Method to get all animation names
    getAnimationNames() {
        return Array.from(this.animations.keys());
    }
    destroy() {
        let anims = this.animations.values();
        for(let anim in anims)console.log(typeof anim);
    //how to iterate and get all RiveAnimations?
    }
}

},{"./RiveRenderer":"f6jJE","./RiveAnimation":"g7Xel","./Game":"TyEjs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7Xel":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7DfAI":[function(require,module,exports) {
/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Easing", ()=>Easing);
parcelHelpers.export(exports, "Group", ()=>Group);
parcelHelpers.export(exports, "Interpolation", ()=>Interpolation);
parcelHelpers.export(exports, "Sequence", ()=>Sequence);
parcelHelpers.export(exports, "Tween", ()=>Tween);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "default", ()=>exports);
parcelHelpers.export(exports, "getAll", ()=>getAll);
parcelHelpers.export(exports, "nextId", ()=>nextId);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "removeAll", ()=>removeAll);
parcelHelpers.export(exports, "update", ()=>update);
var Easing = Object.freeze({
    Linear: Object.freeze({
        None: function(amount) {
            return amount;
        },
        In: function(amount) {
            return amount;
        },
        Out: function(amount) {
            return amount;
        },
        InOut: function(amount) {
            return amount;
        }
    }),
    Quadratic: Object.freeze({
        In: function(amount) {
            return amount * amount;
        },
        Out: function(amount) {
            return amount * (2 - amount);
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) return 0.5 * amount * amount;
            return -0.5 * (--amount * (amount - 2) - 1);
        }
    }),
    Cubic: Object.freeze({
        In: function(amount) {
            return amount * amount * amount;
        },
        Out: function(amount) {
            return --amount * amount * amount + 1;
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) return 0.5 * amount * amount * amount;
            return 0.5 * ((amount -= 2) * amount * amount + 2);
        }
    }),
    Quartic: Object.freeze({
        In: function(amount) {
            return amount * amount * amount * amount;
        },
        Out: function(amount) {
            return 1 - --amount * amount * amount * amount;
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) return 0.5 * amount * amount * amount * amount;
            return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        }
    }),
    Quintic: Object.freeze({
        In: function(amount) {
            return amount * amount * amount * amount * amount;
        },
        Out: function(amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) return 0.5 * amount * amount * amount * amount * amount;
            return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        }
    }),
    Sinusoidal: Object.freeze({
        In: function(amount) {
            return 1 - Math.sin((1.0 - amount) * Math.PI / 2);
        },
        Out: function(amount) {
            return Math.sin(amount * Math.PI / 2);
        },
        InOut: function(amount) {
            return 0.5 * (1 - Math.sin(Math.PI * (0.5 - amount)));
        }
    }),
    Exponential: Object.freeze({
        In: function(amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function(amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function(amount) {
            if (amount === 0) return 0;
            if (amount === 1) return 1;
            if ((amount *= 2) < 1) return 0.5 * Math.pow(1024, amount - 1);
            return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        }
    }),
    Circular: Object.freeze({
        In: function(amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function(amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
            return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        }
    }),
    Elastic: Object.freeze({
        In: function(amount) {
            if (amount === 0) return 0;
            if (amount === 1) return 1;
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function(amount) {
            if (amount === 0) return 0;
            if (amount === 1) return 1;
            return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function(amount) {
            if (amount === 0) return 0;
            if (amount === 1) return 1;
            amount *= 2;
            if (amount < 1) return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        }
    }),
    Back: Object.freeze({
        In: function(amount) {
            var s = 1.70158;
            return amount === 1 ? 1 : amount * amount * ((s + 1) * amount - s);
        },
        Out: function(amount) {
            var s = 1.70158;
            return amount === 0 ? 0 : --amount * amount * ((s + 1) * amount + s) + 1;
        },
        InOut: function(amount) {
            var s = 2.5949095;
            if ((amount *= 2) < 1) return 0.5 * (amount * amount * ((s + 1) * amount - s));
            return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        }
    }),
    Bounce: Object.freeze({
        In: function(amount) {
            return 1 - Easing.Bounce.Out(1 - amount);
        },
        Out: function(amount) {
            if (amount < 1 / 2.75) return 7.5625 * amount * amount;
            else if (amount < 2 / 2.75) return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
            else if (amount < 2.5 / 2.75) return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
            else return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
        },
        InOut: function(amount) {
            if (amount < 0.5) return Easing.Bounce.In(amount * 2) * 0.5;
            return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
        }
    }),
    generatePow: function(power) {
        if (power === void 0) power = 4;
        power = power < Number.EPSILON ? Number.EPSILON : power;
        power = power > 10000 ? 10000 : power;
        return {
            In: function(amount) {
                return Math.pow(amount, power);
            },
            Out: function(amount) {
                return 1 - Math.pow(1 - amount, power);
            },
            InOut: function(amount) {
                if (amount < 0.5) return Math.pow(amount * 2, power) / 2;
                return (1 - Math.pow(2 - amount * 2, power)) / 2 + 0.5;
            }
        };
    }
});
var now = function() {
    return performance.now();
};
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */ var Group = /** @class */ function() {
    function Group() {
        var tweens = [];
        for(var _i = 0; _i < arguments.length; _i++)tweens[_i] = arguments[_i];
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
        this.add.apply(this, tweens);
    }
    Group.prototype.getAll = function() {
        var _this = this;
        return Object.keys(this._tweens).map(function(tweenId) {
            return _this._tweens[tweenId];
        });
    };
    Group.prototype.removeAll = function() {
        this._tweens = {};
    };
    Group.prototype.add = function() {
        var _a;
        var tweens = [];
        for(var _i = 0; _i < arguments.length; _i++)tweens[_i] = arguments[_i];
        for(var _b = 0, tweens_1 = tweens; _b < tweens_1.length; _b++){
            var tween = tweens_1[_b];
            // Remove from any other group first, a tween can only be in one group at a time.
            // @ts-expect-error library internal access
            (_a = tween._group) === null || _a === void 0 || _a.remove(tween);
            // @ts-expect-error library internal access
            tween._group = this;
            this._tweens[tween.getId()] = tween;
            this._tweensAddedDuringUpdate[tween.getId()] = tween;
        }
    };
    Group.prototype.remove = function() {
        var tweens = [];
        for(var _i = 0; _i < arguments.length; _i++)tweens[_i] = arguments[_i];
        for(var _a = 0, tweens_2 = tweens; _a < tweens_2.length; _a++){
            var tween = tweens_2[_a];
            // @ts-expect-error library internal access
            tween._group = undefined;
            delete this._tweens[tween.getId()];
            delete this._tweensAddedDuringUpdate[tween.getId()];
        }
    };
    /** Return true if all tweens in the group are not paused or playing. */ Group.prototype.allStopped = function() {
        return this.getAll().every(function(tween) {
            return !tween.isPlaying();
        });
    };
    Group.prototype.update = function(time, preserve) {
        if (time === void 0) time = now();
        if (preserve === void 0) preserve = true;
        var tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) return;
        // Tweens are updated in "batches". If you add a new tween during an
        // update, then the new tween will be updated in the next batch.
        // If you remove a tween during an update, it may or may not be updated.
        // However, if the removed tween was added during the current batch,
        // then it will not be updated.
        while(tweenIds.length > 0){
            this._tweensAddedDuringUpdate = {};
            for(var i = 0; i < tweenIds.length; i++){
                var tween = this._tweens[tweenIds[i]];
                var autoStart = !preserve;
                if (tween && tween.update(time, autoStart) === false && !preserve) this.remove(tween);
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
    };
    return Group;
}();
/**
 *
 */ var Interpolation = {
    Linear: function(v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.Linear;
        if (k < 0) return fn(v[0], v[1], f);
        if (k > 1) return fn(v[m], v[m - 1], m - f);
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function(v, k) {
        var b = 0;
        var n = v.length - 1;
        var pw = Math.pow;
        var bn = Interpolation.Utils.Bernstein;
        for(var i = 0; i <= n; i++)b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        return b;
    },
    CatmullRom: function(v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) i = Math.floor(f = m * (1 + k));
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        } else {
            if (k < 0) return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            if (k > 1) return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function(p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function(n, i) {
            var fc = Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: function() {
            var a = [
                1
            ];
            return function(n) {
                var s = 1;
                if (a[n]) return a[n];
                for(var i = n; i > 1; i--)s *= i;
                a[n] = s;
                return s;
            };
        }(),
        CatmullRom: function(p0, p1, p2, p3, t) {
            var v0 = (p2 - p0) * 0.5;
            var v1 = (p3 - p1) * 0.5;
            var t2 = t * t;
            var t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        }
    }
};
/**
 * Utils
 */ var Sequence = /** @class */ function() {
    function Sequence() {}
    Sequence.nextId = function() {
        return Sequence._nextId++;
    };
    Sequence._nextId = 0;
    return Sequence;
}();
var mainGroup = new Group();
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */ var Tween = /** @class */ function() {
    function Tween(object, group) {
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._isDynamic = false;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = Easing.Linear.None;
        this._interpolationFunction = Interpolation.Linear;
        // eslint-disable-next-line
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._onEveryStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._propertiesAreSetUp = false;
        this._goToEnd = false;
        this._object = object;
        if (typeof group === "object") {
            this._group = group;
            group.add(this);
        } else if (group === true) {
            this._group = mainGroup;
            mainGroup.add(this);
        }
    }
    Tween.prototype.getId = function() {
        return this._id;
    };
    Tween.prototype.isPlaying = function() {
        return this._isPlaying;
    };
    Tween.prototype.isPaused = function() {
        return this._isPaused;
    };
    Tween.prototype.getDuration = function() {
        return this._duration;
    };
    Tween.prototype.to = function(target, duration) {
        if (duration === void 0) duration = 1000;
        if (this._isPlaying) throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
        this._valuesEnd = target;
        this._propertiesAreSetUp = false;
        this._duration = duration < 0 ? 0 : duration;
        return this;
    };
    Tween.prototype.duration = function(duration) {
        if (duration === void 0) duration = 1000;
        this._duration = duration < 0 ? 0 : duration;
        return this;
    };
    Tween.prototype.dynamic = function(dynamic) {
        if (dynamic === void 0) dynamic = false;
        this._isDynamic = dynamic;
        return this;
    };
    Tween.prototype.start = function(time, overrideStartingValues) {
        if (time === void 0) time = now();
        if (overrideStartingValues === void 0) overrideStartingValues = false;
        if (this._isPlaying) return this;
        this._repeat = this._initialRepeat;
        if (this._reversed) {
            // If we were reversed (f.e. using the yoyo feature) then we need to
            // flip the tween direction back to forward.
            this._reversed = false;
            for(var property in this._valuesStartRepeat){
                this._swapEndStartRepeatValues(property);
                this._valuesStart[property] = this._valuesStartRepeat[property];
            }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._onEveryStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time;
        this._startTime += this._delayTime;
        if (!this._propertiesAreSetUp || overrideStartingValues) {
            this._propertiesAreSetUp = true;
            // If dynamic is not enabled, clone the end values instead of using the passed-in end values.
            if (!this._isDynamic) {
                var tmp = {};
                for(var prop in this._valuesEnd)tmp[prop] = this._valuesEnd[prop];
                this._valuesEnd = tmp;
            }
            this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, overrideStartingValues);
        }
        return this;
    };
    Tween.prototype.startFromCurrentValues = function(time) {
        return this.start(time, true);
    };
    Tween.prototype._setupProperties = function(_object, _valuesStart, _valuesEnd, _valuesStartRepeat, overrideStartingValues) {
        for(var property in _valuesEnd){
            var startValue = _object[property];
            var startValueIsArray = Array.isArray(startValue);
            var propType = startValueIsArray ? "array" : typeof startValue;
            var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
            // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object
            if (propType === "undefined" || propType === "function") continue;
            // Check if an Array was provided as property value
            if (isInterpolationList) {
                var endValues = _valuesEnd[property];
                if (endValues.length === 0) continue;
                // Handle an array of relative values.
                // Creates a local copy of the Array with the start value at the front
                var temp = [
                    startValue
                ];
                for(var i = 0, l = endValues.length; i < l; i += 1){
                    var value = this._handleRelativeValue(startValue, endValues[i]);
                    if (isNaN(value)) {
                        isInterpolationList = false;
                        console.warn("Found invalid interpolation list. Skipping.");
                        break;
                    }
                    temp.push(value);
                }
                if (isInterpolationList) // if (_valuesStart[property] === undefined) { // handle end values only the first time. NOT NEEDED? setupProperties is now guarded by _propertiesAreSetUp.
                _valuesEnd[property] = temp;
            }
            // handle the deepness of the values
            if ((propType === "object" || startValueIsArray) && startValue && !isInterpolationList) {
                _valuesStart[property] = startValueIsArray ? [] : {};
                var nestedObject = startValue;
                for(var prop in nestedObject)_valuesStart[property][prop] = nestedObject[prop];
                // TODO? repeat nested values? And yoyo? And array values?
                _valuesStartRepeat[property] = startValueIsArray ? [] : {};
                var endValues = _valuesEnd[property];
                // If dynamic is not enabled, clone the end values instead of using the passed-in end values.
                if (!this._isDynamic) {
                    var tmp = {};
                    for(var prop in endValues)tmp[prop] = endValues[prop];
                    _valuesEnd[property] = endValues = tmp;
                }
                this._setupProperties(nestedObject, _valuesStart[property], endValues, _valuesStartRepeat[property], overrideStartingValues);
            } else {
                // Save the starting value, but only once unless override is requested.
                if (typeof _valuesStart[property] === "undefined" || overrideStartingValues) _valuesStart[property] = startValue;
                if (!startValueIsArray) // eslint-disable-next-line
                // @ts-ignore FIXME?
                _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                if (isInterpolationList) // eslint-disable-next-line
                // @ts-ignore FIXME?
                _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                else _valuesStartRepeat[property] = _valuesStart[property] || 0;
            }
        }
    };
    Tween.prototype.stop = function() {
        if (!this._isChainStopped) {
            this._isChainStopped = true;
            this.stopChainedTweens();
        }
        if (!this._isPlaying) return this;
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) this._onStopCallback(this._object);
        return this;
    };
    Tween.prototype.end = function() {
        this._goToEnd = true;
        this.update(this._startTime + this._duration);
        return this;
    };
    Tween.prototype.pause = function(time) {
        if (time === void 0) time = now();
        if (this._isPaused || !this._isPlaying) return this;
        this._isPaused = true;
        this._pauseStart = time;
        return this;
    };
    Tween.prototype.resume = function(time) {
        if (time === void 0) time = now();
        if (!this._isPaused || !this._isPlaying) return this;
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        return this;
    };
    Tween.prototype.stopChainedTweens = function() {
        for(var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++)this._chainedTweens[i].stop();
        return this;
    };
    Tween.prototype.group = function(group) {
        if (!group) {
            console.warn("tween.group() without args has been removed, use group.add(tween) instead.");
            return this;
        }
        group.add(this);
        return this;
    };
    /**
     * Removes the tween from whichever group it is in.
     */ Tween.prototype.remove = function() {
        var _a;
        (_a = this._group) === null || _a === void 0 || _a.remove(this);
        return this;
    };
    Tween.prototype.delay = function(amount) {
        if (amount === void 0) amount = 0;
        this._delayTime = amount;
        return this;
    };
    Tween.prototype.repeat = function(times) {
        if (times === void 0) times = 0;
        this._initialRepeat = times;
        this._repeat = times;
        return this;
    };
    Tween.prototype.repeatDelay = function(amount) {
        this._repeatDelayTime = amount;
        return this;
    };
    Tween.prototype.yoyo = function(yoyo) {
        if (yoyo === void 0) yoyo = false;
        this._yoyo = yoyo;
        return this;
    };
    Tween.prototype.easing = function(easingFunction) {
        if (easingFunction === void 0) easingFunction = Easing.Linear.None;
        this._easingFunction = easingFunction;
        return this;
    };
    Tween.prototype.interpolation = function(interpolationFunction) {
        if (interpolationFunction === void 0) interpolationFunction = Interpolation.Linear;
        this._interpolationFunction = interpolationFunction;
        return this;
    };
    // eslint-disable-next-line
    Tween.prototype.chain = function() {
        var tweens = [];
        for(var _i = 0; _i < arguments.length; _i++)tweens[_i] = arguments[_i];
        this._chainedTweens = tweens;
        return this;
    };
    Tween.prototype.onStart = function(callback) {
        this._onStartCallback = callback;
        return this;
    };
    Tween.prototype.onEveryStart = function(callback) {
        this._onEveryStartCallback = callback;
        return this;
    };
    Tween.prototype.onUpdate = function(callback) {
        this._onUpdateCallback = callback;
        return this;
    };
    Tween.prototype.onRepeat = function(callback) {
        this._onRepeatCallback = callback;
        return this;
    };
    Tween.prototype.onComplete = function(callback) {
        this._onCompleteCallback = callback;
        return this;
    };
    Tween.prototype.onStop = function(callback) {
        this._onStopCallback = callback;
        return this;
    };
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     *
     * @param autoStart - When true, calling update will implicitly call start()
     * as well. Note, if you stop() or end() the tween, but are still calling
     * update(), it will start again!
     */ Tween.prototype.update = function(time, autoStart) {
        var _this = this;
        var _a;
        if (time === void 0) time = now();
        if (autoStart === void 0) autoStart = Tween.autoStartOnUpdate;
        if (this._isPaused) return true;
        var property;
        if (!this._goToEnd && !this._isPlaying) {
            if (autoStart) this.start(time, true);
            else return false;
        }
        this._goToEnd = false;
        if (time < this._startTime) return true;
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback) this._onStartCallback(this._object);
            this._onStartCallbackFired = true;
        }
        if (this._onEveryStartCallbackFired === false) {
            if (this._onEveryStartCallback) this._onEveryStartCallback(this._object);
            this._onEveryStartCallbackFired = true;
        }
        var elapsedTime = time - this._startTime;
        var durationAndDelay = this._duration + ((_a = this._repeatDelayTime) !== null && _a !== void 0 ? _a : this._delayTime);
        var totalTime = this._duration + this._repeat * durationAndDelay;
        var calculateElapsedPortion = function() {
            if (_this._duration === 0) return 1;
            if (elapsedTime > totalTime) return 1;
            var timesRepeated = Math.trunc(elapsedTime / durationAndDelay);
            var timeIntoCurrentRepeat = elapsedTime - timesRepeated * durationAndDelay;
            // TODO use %?
            // const timeIntoCurrentRepeat = elapsedTime % durationAndDelay
            var portion = Math.min(timeIntoCurrentRepeat / _this._duration, 1);
            if (portion === 0 && elapsedTime === _this._duration) return 1;
            return portion;
        };
        var elapsed = calculateElapsedPortion();
        var value = this._easingFunction(elapsed);
        // properties transformations
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) this._onUpdateCallback(this._object, elapsed);
        if (this._duration === 0 || elapsedTime >= this._duration) {
            if (this._repeat > 0) {
                var completeCount = Math.min(Math.trunc((elapsedTime - this._duration) / durationAndDelay) + 1, this._repeat);
                if (isFinite(this._repeat)) this._repeat -= completeCount;
                // Reassign starting values, restart by making startTime = now
                for(property in this._valuesStartRepeat){
                    if (!this._yoyo && typeof this._valuesEnd[property] === "string") this._valuesStartRepeat[property] = // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    if (this._yoyo) this._swapEndStartRepeatValues(property);
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) this._reversed = !this._reversed;
                this._startTime += durationAndDelay * completeCount;
                if (this._onRepeatCallback) this._onRepeatCallback(this._object);
                this._onEveryStartCallbackFired = false;
                return true;
            } else {
                if (this._onCompleteCallback) this._onCompleteCallback(this._object);
                for(var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++)// Make the chained tweens start exactly at the time they should,
                // even if the `update()` method was called way past the duration of the tween
                this._chainedTweens[i].start(this._startTime + this._duration, false);
                this._isPlaying = false;
                return false;
            }
        }
        return true;
    };
    Tween.prototype._updateProperties = function(_object, _valuesStart, _valuesEnd, value) {
        for(var property in _valuesEnd){
            // Don't update properties that do not exist in the source object
            if (_valuesStart[property] === undefined) continue;
            var start = _valuesStart[property] || 0;
            var end = _valuesEnd[property];
            var startIsArray = Array.isArray(_object[property]);
            var endIsArray = Array.isArray(end);
            var isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) _object[property] = this._interpolationFunction(end, value);
            else if (typeof end === "object" && end) // eslint-disable-next-line
            // @ts-ignore FIXME?
            this._updateProperties(_object[property], start, end, value);
            else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                end = this._handleRelativeValue(start, end);
                // Protect against non numeric properties.
                if (typeof end === "number") // eslint-disable-next-line
                // @ts-ignore FIXME?
                _object[property] = start + (end - start) * value;
            }
        }
    };
    Tween.prototype._handleRelativeValue = function(start, end) {
        if (typeof end !== "string") return end;
        if (end.charAt(0) === "+" || end.charAt(0) === "-") return start + parseFloat(end);
        return parseFloat(end);
    };
    Tween.prototype._swapEndStartRepeatValues = function(property) {
        var tmp = this._valuesStartRepeat[property];
        var endValue = this._valuesEnd[property];
        if (typeof endValue === "string") this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        else this._valuesStartRepeat[property] = this._valuesEnd[property];
        this._valuesEnd[property] = tmp;
    };
    Tween.autoStartOnUpdate = false;
    return Tween;
}();
var VERSION = "25.0.0";
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */ var nextId = Sequence.nextId;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tweens.
 */ var TWEEN = mainGroup;
// This is the best way to export things in a way that's compatible with both ES
// Modules and CommonJS, without build hacks, and so as not to break the
// existing API.
// https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
/**
 * @deprecated The global TWEEN Group will be removed in a following major
 * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
 * group.
 *
 * Old code:
 *
 * ```js
 * import * as TWEEN from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new TWEEN.Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   TWEEN.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 *
 * New code:
 *
 * ```js
 * import {Tween, Group} from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * const group = new Group()
 * group.add(tween)
 * group.add(tween2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   group.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 */ var getAll = TWEEN.getAll.bind(TWEEN);
/**
 * @deprecated The global TWEEN Group will be removed in a following major
 * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
 * group.
 *
 * Old code:
 *
 * ```js
 * import * as TWEEN from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new TWEEN.Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   TWEEN.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 *
 * New code:
 *
 * ```js
 * import {Tween, Group} from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * const group = new Group()
 * group.add(tween)
 * group.add(tween2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   group.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 */ var removeAll = TWEEN.removeAll.bind(TWEEN);
/**
 * @deprecated The global TWEEN Group will be removed in a following major
 * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
 * group.
 *
 * Old code:
 *
 * ```js
 * import * as TWEEN from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new TWEEN.Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   TWEEN.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 *
 * New code:
 *
 * ```js
 * import {Tween, Group} from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * const group = new Group()
 * group.add(tween)
 * group.add(tween2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   group.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 */ var add = TWEEN.add.bind(TWEEN);
/**
 * @deprecated The global TWEEN Group will be removed in a following major
 * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
 * group.
 *
 * Old code:
 *
 * ```js
 * import * as TWEEN from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new TWEEN.Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   TWEEN.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 *
 * New code:
 *
 * ```js
 * import {Tween, Group} from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * const group = new Group()
 * group.add(tween)
 * group.add(tween2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   group.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 */ var remove = TWEEN.remove.bind(TWEEN);
/**
 * @deprecated The global TWEEN Group will be removed in a following major
 * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
 * group.
 *
 * Old code:
 *
 * ```js
 * import * as TWEEN from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new TWEEN.Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   TWEEN.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 *
 * New code:
 *
 * ```js
 * import {Tween, Group} from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * const group = new Group()
 * group.add(tween)
 * group.add(tween2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   group.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 */ var update = TWEEN.update.bind(TWEEN);
var exports = {
    Easing: Easing,
    Group: Group,
    Interpolation: Interpolation,
    now: now,
    Sequence: Sequence,
    nextId: nextId,
    Tween: Tween,
    VERSION: VERSION,
    /**
     * @deprecated The global TWEEN Group will be removed in a following major
     * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
     * group.
     *
     * Old code:
     *
     * ```js
     * import * as TWEEN from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new TWEEN.Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   TWEEN.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     *
     * New code:
     *
     * ```js
     * import {Tween, Group} from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * const group = new Group()
     * group.add(tween)
     * group.add(tween2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   group.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     */ getAll: getAll,
    /**
     * @deprecated The global TWEEN Group will be removed in a following major
     * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
     * group.
     *
     * Old code:
     *
     * ```js
     * import * as TWEEN from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new TWEEN.Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   TWEEN.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     *
     * New code:
     *
     * ```js
     * import {Tween, Group} from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * const group = new Group()
     * group.add(tween)
     * group.add(tween2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   group.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     */ removeAll: removeAll,
    /**
     * @deprecated The global TWEEN Group will be removed in a following major
     * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
     * group.
     *
     * Old code:
     *
     * ```js
     * import * as TWEEN from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new TWEEN.Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   TWEEN.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     *
     * New code:
     *
     * ```js
     * import {Tween, Group} from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * const group = new Group()
     * group.add(tween)
     * group.add(tween2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   group.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     */ add: add,
    /**
     * @deprecated The global TWEEN Group will be removed in a following major
     * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
     * group.
     *
     * Old code:
     *
     * ```js
     * import * as TWEEN from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new TWEEN.Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   TWEEN.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     *
     * New code:
     *
     * ```js
     * import {Tween, Group} from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * const group = new Group()
     * group.add(tween)
     * group.add(tween2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   group.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     */ remove: remove,
    /**
     * @deprecated The global TWEEN Group will be removed in a following major
     * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
     * group.
     *
     * Old code:
     *
     * ```js
     * import * as TWEEN from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new TWEEN.Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   TWEEN.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     *
     * New code:
     *
     * ```js
     * import {Tween, Group} from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * const group = new Group()
     * group.add(tween)
     * group.add(tween2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   group.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     */ update: update
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jFluF","3yVua"], "3yVua", "parcelRequiree979")

//# sourceMappingURL=index.8c40641e.js.map
