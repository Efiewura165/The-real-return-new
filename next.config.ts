import type { NextConfig } from "next";

// Applied everywhere, including /studio — none of these restrict anything Sanity Studio or PayPal need.
const BASE_SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

// A real Content-Security-Policy, scoped to the public site only. Sanity
// Studio is excluded (see the `source` pattern below) because it's a
// complex third-party SPA this policy hasn't been tested against.
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.paypal.com https://www.paypalobjects.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://cdn.sanity.io https://www.paypalobjects.com",
  "font-src 'self' data:",
  "connect-src 'self' https://api.paypal.com https://api-m.paypal.com https://api-m.sandbox.paypal.com https://*.supabase.co",
  "frame-src https://www.paypal.com https://www.sandbox.paypal.com",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  async headers() {
    const headers = [
      {
        source: "/:path*",
        headers: [...BASE_SECURITY_HEADERS, { key: "X-Frame-Options", value: "SAMEORIGIN" }],
      },
    ];

    // CSP only in production: React dev mode relies on eval() for its debugging
    // tools, which a real CSP correctly blocks. Production never uses eval().
    if (process.env.NODE_ENV === "production") {
      headers.push({
        // Everything except /studio and its subpaths.
        source: "/:path((?!studio).*)",
        headers: [{ key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY }],
      });
    }

    return headers;
  },
};

export default nextConfig;
