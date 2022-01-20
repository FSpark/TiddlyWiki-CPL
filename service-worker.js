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

precacheAndRoute([{"revision":"879e4852f4f6037428eeb7e019fd92d2","url":"favicon.ico"},{"revision":"11f5a5b052878df74b4ac95e530ff49d","url":"icon-black.png"},{"revision":"a3c3b9455114d88e7942b3b8f97147a3","url":"icon-primary.png"},{"revision":"a92ba365f8006bcfff9b8e487c20418c","url":"icon-white.png"},{"revision":"879e4852f4f6037428eeb7e019fd92d2","url":"images/$__favicon.ico"},{"revision":"97df5a777e0f3d1f68d7189b6f588f92","url":"images/AddPluginInfoButton.png"},{"revision":"1f0589099665caf696d8b89d9b33b727","url":"images/CommentSection_cn.png"},{"revision":"6626da8cc52cb65aaa1c9a93c8375515","url":"images/CommentSection_en.png"},{"revision":"77497c6be59dbb85b5a6dc5dcfe58009","url":"images/install_en.gif"},{"revision":"167354d0c3d7ada81ffab410805d2dd8","url":"images/install_zh.gif"},{"revision":"498de7851705db56b8812bf1d52733b3","url":"images/kin-filter-concept.svg"},{"revision":"b69aabe0914a7bcc47da2209d9f3fa35","url":"images/PluginInfoEditor_cn.png"},{"revision":"668243d998a61723550c5c36a6c8fa53","url":"images/PluginInfoEditor_en.png"},{"revision":"08d6a36f63b6e1ce27428918002c864d","url":"images/SidebarResizerDemo.gif"},{"revision":"d79cd2942ff00cddd8304dae19d5c1cb","url":"index.html"},{"revision":"8b4e38e11f8340872294f791e52b81bc","url":"library/callback.tid"},{"revision":"98a93273607da104149742c28d99c762","url":"library/index.html"},{"revision":"b0a5ab4aef0d24cd8dddb010bca31e08","url":"library/plugins/bimlas_kin-filter.json"},{"revision":"f92ea1edeae3d419047220dbda091112","url":"library/plugins/bimlas_locator.json"},{"revision":"d2d306a977fda0b641665c1149cfb1de","url":"library/plugins/dullroar_sitemap.json"},{"revision":"d59964c61eaf7e681cebd5885c9e6eeb","url":"library/plugins/felixhayashi_hotzone.json"},{"revision":"682bf7e727c79c6081001178500e4f8c","url":"library/plugins/felixhayashi_respawn.json"},{"revision":"56a98cdbd07a7ca29501aea078dcd010","url":"library/plugins/felixhayashi_tiddlymap.json"},{"revision":"16ab46f09e4841b3a80aa217b0526f2e","url":"library/plugins/felixhayashi_vis.json"},{"revision":"187b6f80967efb075fab35851c9686f0","url":"library/plugins/Gk0Wk_echarts-gl.json"},{"revision":"712dd3960ca93e254955e0209faa4ff2","url":"library/plugins/Gk0Wk_echarts-graph-modularity.json"},{"revision":"81624ed495c809998807ea56a1bf74d4","url":"library/plugins/Gk0Wk_echarts-liquidfill.json"},{"revision":"e1b1b07fc89bfb6572a0b9b1d52c8a21","url":"library/plugins/Gk0Wk_echarts-stat.json"},{"revision":"d9a76f963b81dae820c5ad03750c5fda","url":"library/plugins/Gk0Wk_echarts.json"},{"revision":"88e70cbb93b8bb295f9d6f024614f3ea","url":"library/plugins/Gk0Wk_notionpage-backlink.json"},{"revision":"d375ea44884fb67a44285fefdb6cedb2","url":"library/plugins/Gk0Wk_notionpage-covericon.json"},{"revision":"160259d427c967b635d8bf236295d54b","url":"library/plugins/Gk0Wk_page-toc.json"},{"revision":"8ba537552ef732858bf5208f20414f9b","url":"library/plugins/Gk0Wk_sidebar-resizer.json"},{"revision":"96faf02c1441e316855dfb5fc3f85178","url":"library/plugins/Gk0Wk_TiddlySeq.json"},{"revision":"bd976a7bc5961e0c7b7a1fc41b368341","url":"library/plugins/Gk0Wk_TW5-CodeMirror-Enhanced.json"},{"revision":"c25041408093d795a9d3f5a2b80a31e1","url":"library/plugins/gt6796c_mermaid-tw5.json"},{"revision":"7a2d4ddbcdaa7669deef24fd16ba6327","url":"library/plugins/gt6796c_rocklib.json"},{"revision":"4640f143e08ba313a8e36b2120bdb00e","url":"library/plugins/linonetwo_commandpalette.json"},{"revision":"47a3178a101ca5aeebb343106c872c5a","url":"library/plugins/linonetwo_copy-on-select.json"},{"revision":"0db79eb38af7d7765cb616b7752be4c9","url":"library/plugins/linonetwo_github-external-image.json"},{"revision":"0e7cf8c9b5091e71b540b54196e6aefb","url":"library/plugins/linonetwo_inverse-link-and-folder.json"},{"revision":"6c7fc8bdf85370d269e0388165e24b07","url":"library/plugins/linonetwo_itonnote.json"},{"revision":"48a0c2035001cfa9055a8378416f2b57","url":"library/plugins/linonetwo_markdown-transformer.json"},{"revision":"e9704fd6a43301ad39c70a45daa5c3a5","url":"library/plugins/linonetwo_open-in-external-app.json"},{"revision":"9294b304203703e2443eda4002c71ae7","url":"library/plugins/linonetwo_opened-tiddlers-bar.json"},{"revision":"3ef9f4870ea622f1e5bc100072bdfa53","url":"library/plugins/linonetwo_pinyin-fuzzy-search.json"},{"revision":"65830e22d0661d678a92ba76f94ca29a","url":"library/plugins/linonetwo_prevent-edit.json"},{"revision":"4b838d4041d0155db177ce1f463cf4ac","url":"library/plugins/linonetwo_preview-glass.json"},{"revision":"c95c7d7d10e07b943cefa893363367d7","url":"library/plugins/linonetwo_service-worker.json"},{"revision":"a82b859d66174bb3e69a0ea618a3a54c","url":"library/plugins/linonetwo_source-control-management.json"},{"revision":"270c00e984fa24e2071c388514ffc2bd","url":"library/plugins/linonetwo_sub-wiki.json"},{"revision":"77209bf81237a95cd31c628d9d02f0d9","url":"library/plugins/linonetwo_template-list.json"},{"revision":"1040bb08b16639d1d817515837716b3d","url":"library/plugins/linonetwo_zx-script.json"},{"revision":"22d385de9b451ebe921b99bfaf89a5b8","url":"library/plugins/mat_field-value-selector.json"},{"revision":"de08b91ad86ff311cc1713867e1623aa","url":"library/plugins/oflg_fishing-analysis.json"},{"revision":"9da28a4076f07d780d1fe92963ff8ee5","url":"library/plugins/oflg_fishing-cannedfish.json"},{"revision":"474c0c3ff445b3ab1b4275b0bf9341a9","url":"library/plugins/oflg_fishing.json"},{"revision":"53daa594e803e11a73be9cbbb0b39334","url":"library/plugins/sobjornstad_TiddlyRemember.json"},{"revision":"28097c0620b3ecc94f4c1c8b804915c1","url":"library/plugins/stobot_sticky.json"},{"revision":"56bbf0c21a9ab4c5df3f48ce0cfaa213","url":"library/plugins/telmiger_EditorCounter.json"},{"revision":"91b32b18b7eb01ad43979034f5a840a7","url":"library/plugins/telmiger_HarveyBalls.json"},{"revision":"3ef9b75643f130a4a79bee123cc9e3d2","url":"library/plugins/telmiger_PluginSize.json"},{"revision":"fd0cbe98016bec396a2faeff24bd6394","url":"library/plugins/telmiger_rpn.json"},{"revision":"cd1cbea789e6d4ecc3485c63429e3c53","url":"library/plugins/themes_linonetwo_itonnote.json"},{"revision":"9201e47ce13b5c6b7e5d4f80631a3ef6","url":"library/plugins/tobibeer_appear.json"},{"revision":"88bc0a8bc68dfdc8f7d716b2e8e3962d","url":"tiddlywikicore-5.2.1.js"}]);

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
