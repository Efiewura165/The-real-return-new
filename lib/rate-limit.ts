const DEFAULT_WINDOW_MS = 60_000;
const DEFAULT_MAX_REQUESTS = 5;

/** Caps memory growth from one-off IPs that never return. */
const MAX_TRACKED_KEYS = 5000;

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

/**
 * Simple in-memory fixed-window rate limiter, keyed by caller-supplied key
 * (typically `${route}:${ip}`). Good enough for a single Node server
 * (`next start`). If this app is ever deployed across multiple
 * serverless/edge instances, this state won't be shared between them —
 * move to a shared store (e.g. Upstash Redis) at that point.
 */
export function isRateLimited(key: string, limit: number = DEFAULT_MAX_REQUESTS, windowMs: number = DEFAULT_WINDOW_MS): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    if (buckets.size >= MAX_TRACKED_KEYS) buckets.clear();
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  bucket.count += 1;
  return bucket.count > limit;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}
