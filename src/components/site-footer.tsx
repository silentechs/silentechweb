import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Wordmark } from "@/components/site-header";
import { TamaleClock } from "@/components/tamale-clock";
import { contact, nav } from "@/content/site";
import { products } from "@/content/products";
import { DpcBadge } from "@/components/dpc-badge";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-ink text-chalk">
      <div className="fugu fugu-on-dark" aria-hidden="true" />
      <div className="wrap pb-10 pt-20 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="h2 max-w-[13ch]">
              Got a workflow that&rsquo;s holding you back?
            </h2>
            <p className="lede mt-6">
              Tell us what you run and where it hurts. We reply by email and
              suggest a next step.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-flame">
                Start a project
              </Link>
              <a href={`mailto:${contact.email}`} className="btn btn-outline-light">
                {contact.email}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 lg:col-span-5 lg:pl-10">
            <div>
              <h3 className="font-sans text-sm font-semibold text-chalk/60" style={{ letterSpacing: 0 }}>
                Studio
              </h3>
              <ul className="mt-4 space-y-2.5">
                {[...nav, { label: "Contact", href: "/contact" }].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link no-underline hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-sm font-semibold text-chalk/60" style={{ letterSpacing: 0 }}>
                Products
              </h3>
              <ul className="mt-4 space-y-2.5">
                {products.map((p) => (
                  <li key={p.slug}>
                    {p.status === "Opening soon" ? (
                      <Link href={`/products/${p.slug}`} className="link no-underline hover:underline">
                        {p.slug === "schools" ? "Schools" : p.name}
                      </Link>
                    ) : (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link inline-flex items-center gap-1 no-underline hover:underline"
                      >
                        {p.slug === "commerce" ? "Commerce" : "StitchCraft"}
                        <ArrowUpRight size={14} aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 text-chalk/80">
              <h3 className="font-sans text-sm font-semibold text-chalk/60" style={{ letterSpacing: 0 }}>
                Find us
              </h3>
              <address className="mt-4 not-italic leading-relaxed">
                {contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-3 text-sm text-chalk/60">
                Tamale time <TamaleClock className="font-mono text-chalk" />
                <span className="mx-2" aria-hidden="true">
                  /
                </span>
                {contact.hours}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-chalk/85">
          <DpcBadge />
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--line-on-dark)] pt-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label="Silentech home">
            <Wordmark light />
          </Link>
          <p className="text-sm text-chalk/60">
            &copy; {new Date().getFullYear()} Silentech Solution Enterprise.
            Software built in Tamale.
          </p>
        </div>
      </div>
    </footer>
  );
}
