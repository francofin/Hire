console.log('Hi from your service-worker.js file!');

const CACHE_NAME = "my-site-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1"

const FILES_TO_CACHE = [
  '/',

  ];

  //installation
  self.addEventListener("install", function(installEvent){
    installEvent.waitUntil(
      caches.open(CACHE_NAME).then(cache=>{
        console.log("hey user! your files were pre-cached successfully")
        return cache.addAll(FILES_TO_CACHE)
      })
    )

    self.skipWaiting();
  })

  //activation
  self.addEventListener("activate", function(activateEvent){
    activateEvent.waitUntil(
      caches.keys().then(keyList=>{ //keyList == ["my-site-cache-v1", "my-site-cache-v2", "my-site-cache-v3"....]
        return Promise.all(
          keyList.map(key=>{
            if(key !== CACHE_NAME && key !== DATA_CACHE_NAME){
              console.log("remove old cache data", key)
              return caches.delete(key)
            }
          })
        )
      })
    )

    self.clients.claim();
  })

// Intercept fetch requests
self.addEventListener('fetch', function(evt) {
  if (evt.request.url.includes('/api/')) {
    evt.respondWith(
      caches
        .open(DATA_CACHE_NAME)
        .then(cache => {
          return fetch(evt.request)
            .then(response => {
              // If the response was good, clone it and store it in the cache.
              if (response.status === 200) {
                cache.put(evt.request.url, response.clone());
              }

              return response;
            })
            .catch(err => {
              // Network request failed, try to get it from the cache.
              return cache.match(evt.request);
            });
        })
        .catch(err => console.log(err))
    );

    return;
  }

  evt.respondWith(
    fetch(evt.request).catch(function() {
      return caches.match(evt.request).then(function(response) {
        if (response) {
          return response;
        } else if (evt.request.headers.get('accept').includes('text/html')) {
          // return the cached home page for all requests for html pages
          return caches.match('/');
        }
      });
    })
  );
});