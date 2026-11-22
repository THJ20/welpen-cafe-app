// Automatisch erzeugt (vite.config.mjs). Offline-Cache für das Welpen-Café.
const CACHE = 'welpen-cafe-169065195c49';
const FILES = ["./","./assets/g_kurier-hJJeJefV.jpg","./assets/g_laptop-DtdWbE_7.jpg","./assets/g_oma-BRH698om.jpg","./assets/g_podcast-B8_XChdf.jpg","./assets/g_studentin-MhxmMYsi.jpg","./assets/g_yoga-TuJIicDe.jpg","./assets/h_corgi-DgestJsT.jpg","./assets/h_dackel-DAgtpiMJ.jpg","./assets/h_golden-B43nJ3pK.jpg","./assets/h_keks-8g2BcKa_.jpg","./assets/h_mops-CKXvZFtU.jpg","./assets/h_pudel-BTCAbAdW.jpg","./assets/index-BaJ3KJL3.js","./assets/index-BtXCBvf7.css","./assets/j_eiskaffee-B08SGBJn.jpg","./assets/j_kirschbluete-DUlO3fSi.jpg","./assets/j_kuerbis-CH87LP8B.jpg","./assets/j_laub-BdUK0kIR.jpg","./assets/j_schnee-DGVelEdv.jpg","./assets/j_silvester-Bs-AXJiG.jpg","./assets/k_aethiopien-BJfx3X9A.jpg","./assets/k_brasilien-pk_9i9Bx.jpg","./assets/k_guatemala-DTtpVRwE.jpg","./assets/k_kenia-BB8xJQdZ.jpg","./assets/k_kolumbien-Be6ZnYpc.jpg","./assets/k_sumatra-syXo0Jsr.jpg","./assets/m_antrag-CFbtZfzI.jpg","./assets/m_latteart-DdrKFWEc.jpg","./assets/m_party-BGMcYDRv.jpg","./assets/m_regen-BHcxYQI1.jpg","./assets/m_strom-Cu9_PZp4.jpg","./assets/m_vollmond-DvkLU0t3.jpg","./assets/nunito-cyrillic-400-normal-D1j0u8EH.woff","./assets/nunito-cyrillic-400-normal-xAOo5cBP.woff2","./assets/nunito-cyrillic-700-normal-DP36NgGt.woff2","./assets/nunito-cyrillic-700-normal-DfHRUDv-.woff","./assets/nunito-cyrillic-800-normal-D3igD7Kl.woff2","./assets/nunito-cyrillic-800-normal-DymMgApb.woff","./assets/nunito-cyrillic-ext-400-normal-CuPM9foi.woff2","./assets/nunito-cyrillic-ext-400-normal-xaE7D4Sw.woff","./assets/nunito-cyrillic-ext-700-normal-BuR0mlCG.woff2","./assets/nunito-cyrillic-ext-700-normal-DfoqN4Gs.woff","./assets/nunito-cyrillic-ext-800-normal-B-cvGohL.woff2","./assets/nunito-cyrillic-ext-800-normal-pjRatrRO.woff","./assets/nunito-latin-400-normal-DKg4f3fz.woff","./assets/nunito-latin-400-normal-r8SDr6Up.woff2","./assets/nunito-latin-700-normal-Dort48En.woff2","./assets/nunito-latin-700-normal-OcDqTBcA.woff","./assets/nunito-latin-800-normal-D-J0wlBY.woff","./assets/nunito-latin-800-normal-Dz8SOQK_.woff2","./assets/nunito-latin-ext-400-normal-CjMJVfGn.woff","./assets/nunito-latin-ext-400-normal-i-8OOpdj.woff2","./assets/nunito-latin-ext-700-normal-BWeMsAzO.woff2","./assets/nunito-latin-ext-700-normal-D4woHhbd.woff","./assets/nunito-latin-ext-800-normal-CDcxIxx8.woff","./assets/nunito-latin-ext-800-normal-CtU8tJOV.woff2","./assets/nunito-vietnamese-400-normal-BHkVbP3T.woff2","./assets/nunito-vietnamese-400-normal-DtOtW02z.woff","./assets/nunito-vietnamese-700-normal-C9SQsXvj.woff","./assets/nunito-vietnamese-700-normal-Ch8EUCfz.woff2","./assets/nunito-vietnamese-800-normal-D_CZYdm9.woff2","./assets/nunito-vietnamese-800-normal-Dz0hZPb5.woff","./assets/r_affogato-BVm4G8ss.jpg","./assets/r_buch-CIgYJpu_.jpg","./assets/r_chai-C_dWFSXB.jpg","./assets/r_crema-BHQNs9R5.jpg","./assets/r_hafer-Be-7nL10.jpg","./assets/r_zimt-CHK3ahKr.jpg","./assets/scene-japan-_A1Pct25.jpg","./assets/scene-klassisch-B1OnIn83.jpg","./assets/scene-strand-B98dI9gV.jpg","./assets/title-M2ejQ2h2.jpg","./icons/icon-180.png","./icons/icon-192.png","./icons/icon-512.png","./index.html","./manifest.webmanifest"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  url.search = '';
  e.respondWith(
    caches.match(e.request.mode === 'navigate' ? './' : url.href, { ignoreSearch: true })
      .then((hit) => hit || fetch(e.request)),
  );
});
