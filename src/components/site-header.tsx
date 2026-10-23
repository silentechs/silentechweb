"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-display text-[1.7rem] font-semibold tracking-tightest ${
        light ? "text-white" : "text-ink"
      }`}
      style={{ fontVariationSettings: '"wdth" 94' }}
    >
      <Image
        src="/brand/icon.svg"
        width={38}
        height={38}
        alt=""
        priority
        className="h-[38px] w-[38px]"
      />
      <span>
        silentech<span className="text-flame">.</span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("#mobile-menu a"));
        const first = toggle.current;
        const last = links[links.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          scrolled || open
            ? "bg-chalk/90 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="wrap flex h-[76px] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Silentech home"
            onClick={() => setOpen(false)}
          >
            <Wordmark />
          </Link>
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative py-2 text-[1.0625rem] font-medium after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:bg-flame after:transition-transform after:duration-300 ${
                  isActive(item.href)
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-ink hidden min-h-[46px] px-5 sm:inline-flex"
            >
              Start a project
            </Link>
            <button
              ref={toggle}
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      <div
        onClick={(event) => { if ((event.target as HTMLElement).closest("a")) setOpen(false); }}
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto bg-chalk lg:hidden"
      >
        <nav className="wrap flex min-h-full flex-col py-8" aria-label="Mobile">
          <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {[{ label: "Home", href: "/" }, ...nav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-5 font-display text-4xl font-bold tracking-tightest"
                  aria-current={
                    (item.href === "/" ? pathname === "/" : isActive(item.href))
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-flame mt-8">
            Start a project
          </Link>
          <p className="meta mt-auto pt-10">
            Malshegu, Tamale, Ghana
            <br />
            support@silentech.live
          </p>
        </nav>
      </div>
    </>
  );
}
