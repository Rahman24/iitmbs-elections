export const addToCache = (name, data) => {
  const cacheData = new Response(JSON.stringify(data));
  if ("caches" in window) {
    caches.open(name).then((cache) => {
      cache.put(window.location.href, cacheData);
      console.log(name, "added to cache")
    }).catch((e) => console.log(e));
  }
}

export const getFromCache = async (name) => {
  if (typeof caches === 'undefined') return false;
  const cache = await caches.open(name);
  const resp = await cache.match(window.location.href);
  console.log(name, "fetched from cache")
  if (!resp || !resp.ok) return false
  return resp.json()
}