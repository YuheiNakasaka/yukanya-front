const CACHE_NAME = "juicejuice-shinadan0.0";
let STATIC_FILES = ["https://fonts.googleapis.com/icon?family=Material+Icons"];
let STATIC_FILE_URL_HASH = {};
STATIC_FILES.forEach(function(file) {
  STATIC_FILE_URL_HASH[file] = true;
});

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(
        STATIC_FILES.map(function(url) {
          return fetch(new Request(url)).then(function(response) {
            if (response.ok) {
              return cache.put(response.url, response);
            }
            return Promise.reject(
              "Invalid response. URL:" +
                response.url +
                " Status: " +
                response.status
            );
          });
        })
      );
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      var promises = [];
      keys.forEach(function(cacheName) {
        if (cacheName != CACHE_NAME) promises.push(caches.delete(cacheName));
      });
      return Promise.all(promises);
    })
  );
});

// キャッシュ有 -> キャッシュ返す
// キャッシュ無 -> サーバーにリクエストし、そのレスポンスをキャッシュする
self.addEventListener("fetch", event => {
  let requestUrl = event.request.url;
  console.log(requestUrl);
  if (
    !STATIC_FILE_URL_HASH[requestUrl] &&
    !requestUrl.match(/.png$/) &&
    !requestUrl.match(/manifest\.json$/) &&
    !requestUrl.match(/_model-shard.+/)
  )
    return;

  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      let fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(response => {
        if (!response && response.status !== 200 && response.status !== 0) {
          return response;
        }
        let responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(requestUrl, responseToCache);
        });
        return response;
      });
    })
  );
});
