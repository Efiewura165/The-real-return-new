"use client";

import { useActionState } from "react";

import { login } from "./actions";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="w-full max-w-sm rounded-sm border border-background/15 bg-ink p-8">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">The Real Return™</p>
        <h1 className="mt-3 font-serif text-2xl font-normal text-background">Admin Sign In</h1>

        <form action={formAction} className="mt-8 space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-background/60">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="h-12 w-full rounded-sm border border-background/20 bg-transparent px-4 text-sm text-background outline-none focus:border-gold-luxury"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-background/60">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="h-12 w-full rounded-sm border border-background/20 bg-transparent px-4 text-sm text-background outline-none focus:border-gold-luxury"
            />
          </div>

          {state?.error ? <p className="text-sm text-red-400">{state.error}</p> : null}

          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-12 w-full items-center justify-center rounded-sm bg-gold-luxury text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.01] disabled:pointer-events-none disabled:opacity-60"
          >
            {pending ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
