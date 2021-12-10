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

precacheAndRoute([{"revision":"879e4852f4f6037428eeb7e019fd92d2","url":"favicon.ico"},{"revision":"11f5a5b052878df74b4ac95e530ff49d","url":"icon-black.png"},{"revision":"a3c3b9455114d88e7942b3b8f97147a3","url":"icon-primary.png"},{"revision":"a92ba365f8006bcfff9b8e487c20418c","url":"icon-white.png"},{"revision":"879e4852f4f6037428eeb7e019fd92d2","url":"images/$__favicon.ico"},{"revision":"498de7851705db56b8812bf1d52733b3","url":"images/kin-filter-concept.svg"},{"revision":"08d6a36f63b6e1ce27428918002c864d","url":"images/SidebarResizerDemo.gif"},{"revision":"baec161ed6abfa24f48bda1ff7a57230","url":"index.html"},{"revision":"ad556c951486e71fdb3b534bd1e89c59","url":"library/index.html"},{"revision":"d522b99e1abe5c80de8ea2e7666a0284","url":"library/plugins/%24__themes_linonetwo_itonnote.json"},{"revision":"c906aa5981b8f1548242ff1ed7cfe78e","url":"library/plugins/bimlas_kin-filter.json"},{"revision":"768a4fc511e3d413d48338801af95dc0","url":"library/plugins/bimlas_locator.json"},{"revision":"61ed0bf737d8386418fbcab9b8124f9e","url":"library/plugins/dullroar_sitemap.json"},{"revision":"db13e08114699676d83f98b45ebc77ee","url":"library/plugins/felixhayashi_hotzone.json"},{"revision":"25a28a699240c1f5634f9bc560914c95","url":"library/plugins/felixhayashi_respawn.json"},{"revision":"3d3cfadf811022bd2ee86e6a16c27de8","url":"library/plugins/felixhayashi_tiddlymap.json"},{"revision":"54abfe7795fb723e3964bb74cf167c3d","url":"library/plugins/felixhayashi_vis.json"},{"revision":"3c929b05b7a871159e77f87a15d54f7b","url":"library/plugins/Gk0Wk_notionpage-backlink.json"},{"revision":"c086234e3ad8ec5f9bdc626c47f27487","url":"library/plugins/Gk0Wk_notionpage-covericon.json"},{"revision":"286aea3b7b99300c2433084d7be01370","url":"library/plugins/Gk0Wk_sidebar-resizer.json"},{"revision":"491e15b5aebea539ea873f92d7422ce5","url":"library/plugins/Gk0Wk_TiddlySeq.json"},{"revision":"5878863f7d96ea4737619527ea55fc85","url":"library/plugins/Gk0Wk_TW5-CodeMirror-Enhanced.json"},{"revision":"ef946fdcffa6ecf9056a2e6f9ea7713f","url":"library/plugins/linonetwo_commandpalette.json"},{"revision":"88564e1d38c2b909f672a328e6f570ec","url":"library/plugins/linonetwo_copy-on-select.json"},{"revision":"5739ab84942577482348a258a323583b","url":"library/plugins/linonetwo_github-external-image.json"},{"revision":"22c45a6f56f5aa31699a3aab1a2ab358","url":"library/plugins/linonetwo_inverse-link-and-folder.json"},{"revision":"50cdc3ea03a79a99e3e4fbf44955fa93","url":"library/plugins/linonetwo_itonnote.json"},{"revision":"9294b304203703e2443eda4002c71ae7","url":"library/plugins/linonetwo_opened-tiddlers-bar.json"},{"revision":"e65a6c123b5dfc8a8b51844fb4156638","url":"library/plugins/linonetwo_pinyin-fuzzy-search.json"},{"revision":"e5de5e3c87a911ad3a1a27fe61623a93","url":"library/plugins/linonetwo_prevent-edit.json"},{"revision":"e2a6c1e5c235aaff723f31bd0ee7538f","url":"library/plugins/linonetwo_preview-glass.json"},{"revision":"626100d6539b069cd78627c70421df4b","url":"library/plugins/linonetwo_service-worker.json"},{"revision":"36d1101e0151c36effd92e37d7d76f98","url":"library/plugins/linonetwo_source-control-management.json"},{"revision":"270c00e984fa24e2071c388514ffc2bd","url":"library/plugins/linonetwo_sub-wiki.json"},{"revision":"c925e1e279f1bb8b56dd5c8ba0985f28","url":"library/plugins/linonetwo_zx-script.json"},{"revision":"0e380af98cfb93a53db808a86185c6bb","url":"library/plugins/mat_field-value-selector.json"},{"revision":"70c4f4474747db9ae6885290dbeefb33","url":"library/plugins/oflg_fishing.json"},{"revision":"8c3e13bc30d1dbc37de49543c936dd9a","url":"library/plugins/sobjornstad_TiddlyRemember.json"},{"revision":"56bbf0c21a9ab4c5df3f48ce0cfaa213","url":"library/plugins/telmiger_EditorCounter.json"},{"revision":"91b32b18b7eb01ad43979034f5a840a7","url":"library/plugins/telmiger_HarveyBalls.json"},{"revision":"eabcbd7676d62178a9682bd87b376aa0","url":"library/plugins/telmiger_PluginSize.json"},{"revision":"fd0cbe98016bec396a2faeff24bd6394","url":"library/plugins/telmiger_rpn.json"},{"revision":"32e1d9d82668f9cf17ce9edce6520a9e","url":"library/plugins/tobibeer_appear.json"},{"revision":"88bc0a8bc68dfdc8f7d716b2e8e3962d","url":"tiddlywikicore-5.2.1.js"}]);

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
