import { Link } from "@tanstack/react-router";
import { Home, ListChecks, BookOpen, ShieldCheck, Check, Heart, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
const navigation = [
  { to: "/", label: "Home", icon: Home },
  { to: "/prepare", label: "Prepare", icon: ListChecks },
  { to: "/learn", label: "Learn", icon: BookOpen },
  { to: "/safety", label: "Safety", icon: ShieldCheck },
] as const;
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-card focus:p-3"
      >
        Skip to content
      </a>
      <header className="site-header">
        <div className="page-width flex h-full items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5" aria-label="AccessReady home">
            <span className="brand-mark">
              <ShieldCheck size={36} strokeWidth={1.8} />
            </span>
            <span className="font-display text-[23px] font-extrabold">
              Access<span className="text-primary">Ready</span>
            </span>
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav flex items-center gap-2">
            {navigation.map(({ to, label, icon: Icon }) => (
              <Link key={to} to={to} activeOptions={{ exact: true }}>
                <Icon size={16} strokeWidth={1.7} />
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
            <span className="flex size-6 items-center justify-center rounded-full bg-secondary text-primary">
              <Check size={13} />
            </span>
            Free. Private. Here for you.
          </div>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="page-width flex flex-col justify-between gap-4 md:flex-row">
          <div className="max-w-[670px]">
            <p className="mb-1 font-medium text-foreground">
              A little preparation. A more confident next step.
            </p>
            <p>
              Requirements vary by provider and location. AccessReady offers educational guidance,
              not professional financial advice or a guarantee of eligibility.
            </p>
          </div>
          <div className="flex items-center gap-1.5 self-start text-xs">
            <Heart size={13} className="text-primary" />
            Built for a more inclusive future
            <ArrowUpRight size={12} />
          </div>
        </div>
      </footer>
      <nav aria-label="Mobile navigation" className="mobile-nav">
        {navigation.map(({ to, label, icon: Icon }) => (
          <Link key={to} to={to} activeOptions={{ exact: true }}>
            <Icon size={20} strokeWidth={1.7} />
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}
