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

precacheAndRoute([{"revision":"879e4852f4f6037428eeb7e019fd92d2","url":"favicon.ico"},{"revision":"11f5a5b052878df74b4ac95e530ff49d","url":"icon-black.png"},{"revision":"a3c3b9455114d88e7942b3b8f97147a3","url":"icon-primary.png"},{"revision":"a92ba365f8006bcfff9b8e487c20418c","url":"icon-white.png"},{"revision":"879e4852f4f6037428eeb7e019fd92d2","url":"images/$__favicon.ico"},{"revision":"498de7851705db56b8812bf1d52733b3","url":"images/kin-filter-concept.svg"},{"revision":"08d6a36f63b6e1ce27428918002c864d","url":"images/SidebarResizerDemo.gif"},{"revision":"465fc07fb1e91fbafbda50afd9a361b2","url":"index.html"},{"revision":"31eee7ac9973a2759882c657e278d1f9","url":"library/callback.json"},{"revision":"80e3e4716cd7f14448c27413649e89e3","url":"library/index.html"},{"revision":"c906aa5981b8f1548242ff1ed7cfe78e","url":"library/plugins/bimlas_kin-filter.json"},{"revision":"768a4fc511e3d413d48338801af95dc0","url":"library/plugins/bimlas_locator.json"},{"revision":"61ed0bf737d8386418fbcab9b8124f9e","url":"library/plugins/dullroar_sitemap.json"},{"revision":"b2b12b81b3ed3816be8bef52104b91c6","url":"library/plugins/felixhayashi_hotzone.json"},{"revision":"ae0722bcbb3746bceb14c77056b5b8cc","url":"library/plugins/felixhayashi_respawn.json"},{"revision":"6dc7f3079e5d6bf883033aeb7055459a","url":"library/plugins/felixhayashi_tiddlymap.json"},{"revision":"82c35841e9fa22525f457fca84e2cc5b","url":"library/plugins/felixhayashi_vis.json"},{"revision":"ae2b6971e1f4b1b0c7c0561a5d5a255d","url":"library/plugins/Gk0Wk_echarts.json"},{"revision":"88e70cbb93b8bb295f9d6f024614f3ea","url":"library/plugins/Gk0Wk_notionpage-backlink.json"},{"revision":"d375ea44884fb67a44285fefdb6cedb2","url":"library/plugins/Gk0Wk_notionpage-covericon.json"},{"revision":"160259d427c967b635d8bf236295d54b","url":"library/plugins/Gk0Wk_page-toc.json"},{"revision":"8ba537552ef732858bf5208f20414f9b","url":"library/plugins/Gk0Wk_sidebar-resizer.json"},{"revision":"0ca60712a5943793051df751ed607a9a","url":"library/plugins/Gk0Wk_TiddlySeq.json"},{"revision":"5878863f7d96ea4737619527ea55fc85","url":"library/plugins/Gk0Wk_TW5-CodeMirror-Enhanced.json"},{"revision":"b3d2af2c43ba0fcc2eb6e143986cc086","url":"library/plugins/linonetwo_commandpalette.json"},{"revision":"88564e1d38c2b909f672a328e6f570ec","url":"library/plugins/linonetwo_copy-on-select.json"},{"revision":"5739ab84942577482348a258a323583b","url":"library/plugins/linonetwo_github-external-image.json"},{"revision":"22c45a6f56f5aa31699a3aab1a2ab358","url":"library/plugins/linonetwo_inverse-link-and-folder.json"},{"revision":"cd1cbea789e6d4ecc3485c63429e3c53","url":"library/plugins/linonetwo_itonnote.json"},{"revision":"9294b304203703e2443eda4002c71ae7","url":"library/plugins/linonetwo_opened-tiddlers-bar.json"},{"revision":"e65a6c123b5dfc8a8b51844fb4156638","url":"library/plugins/linonetwo_pinyin-fuzzy-search.json"},{"revision":"e5de5e3c87a911ad3a1a27fe61623a93","url":"library/plugins/linonetwo_prevent-edit.json"},{"revision":"e2a6c1e5c235aaff723f31bd0ee7538f","url":"library/plugins/linonetwo_preview-glass.json"},{"revision":"626100d6539b069cd78627c70421df4b","url":"library/plugins/linonetwo_service-worker.json"},{"revision":"a82b859d66174bb3e69a0ea618a3a54c","url":"library/plugins/linonetwo_source-control-management.json"},{"revision":"270c00e984fa24e2071c388514ffc2bd","url":"library/plugins/linonetwo_sub-wiki.json"},{"revision":"32ec433bee03ea0f9d341b046d390efb","url":"library/plugins/linonetwo_zx-script.json"},{"revision":"0e380af98cfb93a53db808a86185c6bb","url":"library/plugins/mat_field-value-selector.json"},{"revision":"ceaee85c7ab809f021f5041909290319","url":"library/plugins/oflg_fishing.json"},{"revision":"4d0a03c4b0f55e10b4a4f6d584361eac","url":"library/plugins/sobjornstad_TiddlyRemember.json"},{"revision":"28097c0620b3ecc94f4c1c8b804915c1","url":"library/plugins/stobot_sticky.json"},{"revision":"56bbf0c21a9ab4c5df3f48ce0cfaa213","url":"library/plugins/telmiger_EditorCounter.json"},{"revision":"91b32b18b7eb01ad43979034f5a840a7","url":"library/plugins/telmiger_HarveyBalls.json"},{"revision":"fd0cbe98016bec396a2faeff24bd6394","url":"library/plugins/telmiger_rpn.json"},{"revision":"b4f13e1d4a64bcfc23fd72d035237dd4","url":"library/plugins/tobibeer_appear.json"},{"revision":"88bc0a8bc68dfdc8f7d716b2e8e3962d","url":"tiddlywikicore-5.2.1.js"}]);

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
