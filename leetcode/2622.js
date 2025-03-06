class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const exists =
      this.cache.has(key) && this.cache.get(key).expires > Date.now();

    if (exists) {
      clearTimeout(this.cache.get(key).timeout);
    }

    const expires = Date.now() + duration;
    const timeout = setTimeout(() => this.cache.delete(key), duration);

    this.cache.set(key, { value, expires, timeout });

    return exists;
  }

  get(key) {
    const entry = this.cache.get(key);
    if (!entry || entry.expires <= Date.now()) {
      return -1;
    }
    return entry.value;
  }

  count() {
    let count = 0;
    const now = Date.now();
    for (const [key, entry] of this.cache) {
      if (entry.expires > now) {
        count++;
      } else {
        this.cache.delete(key);
      }
    }
    return count;
  }
}
