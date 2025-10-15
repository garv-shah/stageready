"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
};

export interface NavigationProps {
  className?: string;
  items?: NavItem[];
  logoHref?: string;
}

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Book a Consult", href: "/book" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navigation({
  className,
  items = DEFAULT_ITEMS,
  logoHref = "/",
}: NavigationProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [logoFailed, setLogoFailed] = React.useState(false);

  React.useEffect(() => {
    // Close mobile menu when route changes
    setOpen(false);
  }, [pathname]);

  // Basic active matching: exact or section start
  const isActive = React.useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname]
  );

  return (
    <header
      className={classNames(
        "w-full bg-card text-foreground border-b",
        "supports-[backdrop-filter]:bg-card/90 backdrop-blur-sm",
        className
      )}
      role="banner"
    >
      <div className="container mx-auto w-full max-w-full">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link
            href={logoHref}
            className={classNames(
              "inline-flex items-center gap-3 rounded-md",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            )}
            aria-label="Stage Ready Home"
          >
            <div
              className={classNames(
                "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-md",
                "bg-[color:var(--color-logo-bg)] overflow-hidden"
              )}
              aria-hidden="true"
            >
              {!logoFailed ? (
                <Image
                  src="/logo.svg"
                  alt="Stage Ready logo"
                  fill
                  sizes="36px"
                  className="object-contain p-1"
                  onError={() => setLogoFailed(true)}
                  priority
                />
              ) : (
                <span
                  className="text-[color:var(--color-logo-icon)] text-sm font-semibold tracking-wide select-none"
                  style={{ letterSpacing: "0.04em" }}
                >
                  SR
                </span>
              )}
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base sm:text-lg font-semibold">
                Stage Ready
              </span>
              <span className="sr-only">Home Staging</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Primary"
          >
            {items.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={classNames(
                    "relative px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {/* Active underline */}
                  <span
                    className={classNames(
                      "pointer-events-none absolute left-2 right-2 -bottom-[2px] h-[2px] rounded-full transition-opacity",
                      active ? "opacity-100" : "opacity-0"
                    )}
                    style={{
                      backgroundColor: "#db2777", // consistent brand pink underline
                    }}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className={classNames(
                "inline-flex items-center justify-center rounded-md p-2",
                "text-foreground hover:bg-secondary focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                "transition-colors"
              )}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          id="mobile-nav"
          className={classNames(
            "md:hidden grid transition-[grid-template-rows] duration-200 ease-out",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <nav
              aria-label="Mobile primary"
              className="flex flex-col gap-1 pb-3"
            >
              {items.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={classNames(
                      "flex items-center justify-between rounded-md px-3 py-2",
                      "text-sm font-medium transition-colors",
                      active
                        ? "text-primary bg-secondary"
                        : "text-foreground/80 hover:text-foreground hover:bg-secondary"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="min-w-0 truncate">{item.label}</span>
                    {active ? (
                      <span
                        className="ml-3 inline-block h-2 w-2 rounded-full"
                        style={{ backgroundColor: "#db2777" }}
                        aria-hidden="true"
                      />
                    ) : null}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}