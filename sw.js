const CACHE_NAME = "cached-dataV4";
const CACHED_ASSETS = [
    '/',
    '/manifest.json',
    'http://localhost:1337/uploads/Radisson_Blu_Kochi_14f908725a.png',
    'http://localhost:1337/uploads/Kathmandu_Resorts_660379c120.jpg',
    'http://localhost:1337/uploads/featured_2_75e9764ad9.webp',
    'http://localhost:1337/uploads/gyoza_5291w_2048x1366_b2a9cd0459.webp',
    'http://localhost:1337/uploads/pexels_victor_freitas_841130_3c29ead8da.jpg',
    'https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800&display=swap',
    'http://localhost:3000/_next/data/development/blog/abs-home-diet.json',
    'http://localhost:3000/_next/data/development/blog/best-hotel-in-kochi.json',
    'http://localhost:3000/_next/data/development/blog/best-resort-in-katmandu.json',
    'http://localhost:3000/_next/data/development/blog/famous-thing-to-do-in-nepal.json',
    'http://localhost:3000/_next/data/development/blog/how-to-make-gyoza.json',
]
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(result => {
            result.addAll(CACHED_ASSETS);
        }).catch((err) => {
            console.log("Error while caching", err)
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key != CACHE_NAME)
                .map(item => caches.delete(item))
            )
        }).catch(err => {
            console.log("Erorr while delete storage", err)
        })
    )
})

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(result => {
            return result || fetch(event.request); 
        }).catch(err => {
            alert("You are offline")
            console.log("Error while fetchig files", err)
        })
    );
})