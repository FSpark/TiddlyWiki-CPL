importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉Service Worker is working!`);
} else {
  console.log(`Boo! Workbox didn't load 😬Service Worker won't work properly...`);
}

const { registerRoute } = workbox.routing;
const { CacheFirst, StaleWhileRevalidate } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;
const { precacheAndRoute, matchPrecache } = workbox.precaching;

precacheAndRoute([{"revision":"879e4852f4f6037428eeb7e019fd92d2","url":"favicon.ico"},{"revision":"11f5a5b052878df74b4ac95e530ff49d","url":"icon-black.png"},{"revision":"a3c3b9455114d88e7942b3b8f97147a3","url":"icon-primary.png"},{"revision":"a92ba365f8006bcfff9b8e487c20418c","url":"icon-white.png"},{"revision":"879e4852f4f6037428eeb7e019fd92d2","url":"images/$__favicon.ico"},{"revision":"498de7851705db56b8812bf1d52733b3","url":"images/kin-filter-concept.svg"},{"revision":"08d6a36f63b6e1ce27428918002c864d","url":"images/SidebarResizerDemo.gif"},{"revision":"5e691105c0a6f2855d494a02460beb4f","url":"index.html"},{"revision":"4d1fee2d19ea37bb13fb9dbdcfc2879b","url":"library/index.html"},{"revision":"c906aa5981b8f1548242ff1ed7cfe78e","url":"library/plugins/bimlas_kin-filter.json"},{"revision":"768a4fc511e3d413d48338801af95dc0","url":"library/plugins/bimlas_locator.json"},{"revision":"61ed0bf737d8386418fbcab9b8124f9e","url":"library/plugins/dullroar_sitemap.json"},{"revision":"db13e08114699676d83f98b45ebc77ee","url":"library/plugins/felixhayashi_hotzone.json"},{"revision":"25a28a699240c1f5634f9bc560914c95","url":"library/plugins/felixhayashi_respawn.json"},{"revision":"3d3cfadf811022bd2ee86e6a16c27de8","url":"library/plugins/felixhayashi_tiddlymap.json"},{"revision":"54abfe7795fb723e3964bb74cf167c3d","url":"library/plugins/felixhayashi_vis.json"},{"revision":"3c929b05b7a871159e77f87a15d54f7b","url":"library/plugins/Gk0Wk_notionpage-backlink.json"},{"revision":"462657fbfa9f29dceb12a4960df822cf","url":"library/plugins/Gk0Wk_notionpage-covericon.json"},{"revision":"286aea3b7b99300c2433084d7be01370","url":"library/plugins/Gk0Wk_sidebar-resizer.json"},{"revision":"da6e6c0cc2b879f713883510da5bd5da","url":"library/plugins/Gk0Wk_TiddlySeq.json"},{"revision":"5878863f7d96ea4737619527ea55fc85","url":"library/plugins/Gk0Wk_TW5-CodeMirror-Enhanced.json"},{"revision":"0e380af98cfb93a53db808a86185c6bb","url":"library/plugins/mat_field-value-selector.json"},{"revision":"70c4f4474747db9ae6885290dbeefb33","url":"library/plugins/oflg_fishing.json"},{"revision":"8c3e13bc30d1dbc37de49543c936dd9a","url":"library/plugins/sobjornstad_TiddlyRemember.json"},{"revision":"56bbf0c21a9ab4c5df3f48ce0cfaa213","url":"library/plugins/telmiger_EditorCounter.json"},{"revision":"91b32b18b7eb01ad43979034f5a840a7","url":"library/plugins/telmiger_HarveyBalls.json"},{"revision":"eabcbd7676d62178a9682bd87b376aa0","url":"library/plugins/telmiger_PluginSize.json"},{"revision":"fd0cbe98016bec396a2faeff24bd6394","url":"library/plugins/telmiger_rpn.json"},{"revision":"32e1d9d82668f9cf17ce9edce6520a9e","url":"library/plugins/tobibeer_appear.json"},{"revision":"88bc0a8bc68dfdc8f7d716b2e8e3962d","url":"tiddlywikicore-5.2.1.js"}]);

registerRoute(
  /\.css$/,
  // Use cache but update in the background.
  new StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);

registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|woff2?|ttf)$/,
  // Use the cache if it's available.
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        // Cache only a few images.
        maxEntries: 100,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
);

registerRoute(/\.js$/, new StaleWhileRevalidate());
registerRoute(/(^\/$|index.html)/, new StaleWhileRevalidate());
