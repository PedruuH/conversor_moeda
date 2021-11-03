'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9eeb8954b8f6b92d7ad254951181d44c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"conversor_moeda/.git/COMMIT_EDITMSG": "5df03f95b4ff4f4b5dabe53a5a1e15d7",
"conversor_moeda/.git/config": "4d4ff72423aec17160d34bad6f3fc85e",
"conversor_moeda/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"conversor_moeda/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"conversor_moeda/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"conversor_moeda/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"conversor_moeda/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"conversor_moeda/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"conversor_moeda/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"conversor_moeda/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"conversor_moeda/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"conversor_moeda/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"conversor_moeda/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"conversor_moeda/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"conversor_moeda/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"conversor_moeda/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"conversor_moeda/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"conversor_moeda/.git/index": "a3422c3ffa6366a23ed63a086307ae35",
"conversor_moeda/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"conversor_moeda/.git/logs/HEAD": "1061e26cb32bd54aee1ed1a6fea657c9",
"conversor_moeda/.git/logs/refs/heads/master": "1061e26cb32bd54aee1ed1a6fea657c9",
"conversor_moeda/.git/logs/refs/remotes/origin/master": "6bc5cf5d977dc793cb4ffe875f70fa24",
"conversor_moeda/.git/objects/02/2fa32fb2d12ab74837a763e8fb2272fd9d079d": "08eb82c16f59ddd60df1af8be8d0db04",
"conversor_moeda/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"conversor_moeda/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"conversor_moeda/.git/objects/2d/1046323e84b5bbf9a6f4dc7f52a67e1264edea": "8f24930a51282927172be93cf1b7b675",
"conversor_moeda/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"conversor_moeda/.git/objects/40/7e3763fecbd72f23af7f909cd82d6009a0e2fe": "63ef8ba7a685784c3da63313e41f3821",
"conversor_moeda/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"conversor_moeda/.git/objects/53/2fa4cb899e6ac7fadadde098598f79a058cbbf": "265058c041cd915076a1da45f168941c",
"conversor_moeda/.git/objects/64/cfb9921b5dadd36143d12bf67a8723ca95813d": "df5c938399d4b475a69e2c9733486692",
"conversor_moeda/.git/objects/70/68138093a1f5d0adbb374a929264a23ac37341": "5d7fc98c71d0cebf80b26a1d780cac97",
"conversor_moeda/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"conversor_moeda/.git/objects/7f/c0f3cf1c1018db3bc344f19e744445a95c83d7": "09fb66bdf82418da78de36e51e550278",
"conversor_moeda/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"conversor_moeda/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"conversor_moeda/.git/objects/97/131b958f7b117608018e3a0a30e409656c85ed": "65c8aca4188a01fe5eb63415f1da4d7c",
"conversor_moeda/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"conversor_moeda/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"conversor_moeda/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"conversor_moeda/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"conversor_moeda/.git/objects/bd/3f77c4e69aa210d321c897d7004d1b0e1978a0": "6586be44ad0ea3bd3709003ea19e0164",
"conversor_moeda/.git/objects/cd/d5d03af252f9c413a7f5c9e2825c5a73b675d0": "0824b0c9279a9d57c6288fd1fa304050",
"conversor_moeda/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"conversor_moeda/.git/refs/heads/master": "d17f1d7bb7a3f88a248ec5aa855437f0",
"conversor_moeda/.git/refs/remotes/origin/master": "d17f1d7bb7a3f88a248ec5aa855437f0",
"conversor_moeda/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"conversor_moeda/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"conversor_moeda/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"conversor_moeda/assets/NOTICES": "9eeb8954b8f6b92d7ad254951181d44c",
"conversor_moeda/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"conversor_moeda/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"conversor_moeda/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"conversor_moeda/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"conversor_moeda/index.html": "5282916480da47e71ab6ddef90a7afce",
"/": "a8abc018cb24389f7845e772624621a3",
"conversor_moeda/main.dart.js": "3c28a7ca8d6bc2316514ec2dbe704d3a",
"conversor_moeda/manifest.json": "3019f4c4c1ecba8ad9ab4a82a2cd7cff",
"conversor_moeda/version.json": "5adb6210a9ed056c1536740154e80047",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a8abc018cb24389f7845e772624621a3",
"main.dart.js": "d34c56601bb3f68013f0c4fa98432746",
"manifest.json": "3019f4c4c1ecba8ad9ab4a82a2cd7cff",
"site.zip": "c549d947c8ae754c7481a3d873e359c8",
"version.json": "5adb6210a9ed056c1536740154e80047"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
