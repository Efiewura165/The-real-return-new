import type { Metadata } from "next";

// Covers /admin/login too, which is a client component and can't export metadata itself.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
