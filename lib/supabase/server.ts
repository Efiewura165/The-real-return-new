import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

import { isSupabaseConfigured } from "./client";

export { isSupabaseConfigured };

/** Server-side Supabase client, scoped to the current request's auth session via cookies. */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "", {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Called from a Server Component without a mutable cookie store — safe to ignore,
          // middleware refreshes the session on the next request.
        }
      },
    },
  });
}

/**
 * Privileged server-only client using the service role key, bypassing RLS.
 * Used for lead writes/reads from trusted server code (API routes), never exposed to the browser.
 */
export function createServiceClient() {
  return createSupabaseClient(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "", process.env.SUPABASE_SERVICE_ROLE_KEY ?? "", {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
