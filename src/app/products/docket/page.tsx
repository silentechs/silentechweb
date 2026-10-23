import Link from "next/link";
import { ArrowUpRight, ClipboardCheck, FileText, Landmark, MessageSquare, Users, Wallet, type LucideIcon } from "lucide-react";
import { DpcBadge } from "@/components/dpc-badge";
import { BrowserFrame } from "@/components/work-index";
import { StructuredData } from "@/components/structured-data";
import { docketModules, products } from "@/content/products";
import { mailto } from "@/content/site";
import { absoluteUrl, breadcrumbSchema, organizationId, pageMetadata } from "@/lib/seo";

const docket = products.find((p) => p.slug === "docket")!;
const description =
  "Docket is practice management for law chambers in Ghana: matters, court dates, files, client updates, time and billing, with a record of every change. Opening soon.";

export const metadata = pageMetadata({
  title: "Docket: Practice Management for Law Chambers in Ghana",
  description,
  path: "/products/docket",
  image: "/social/docket.png",
});

const icons: Record<string, LucideIcon> = { Landmark, MessageSquare, FileText, Wallet, Users, ClipboardCheck };

const roles = [
  "Head of chambers",
  "Partners",
  "Associates",
  "Pupils",
  "Clerks",
  "Secretaries",
  "Accounts staff",
];

const demoMail = mailto(
  "Docket demo request",
  "Chambers name:\nCity:\nNumber of lawyers:\nBest phone number to reach you:\n",
);

export default function DocketPage() {
  return (
    <main id="main-content">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "Docket", path: "/products/docket" },
        ])}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": absoluteUrl("/products/docket#page"),
          name: "Docket",
          description,
          url: absoluteUrl("/products/docket"),
          about: { "@type": "SoftwareApplication", name: "Docket", applicationCategory: "BusinessApplication", operatingSystem: "Web" },
          publisher: { "@id": organizationId },
        }}
      />

      <section className="on-dark bg-[#17120E] text-white">
        <div className="wrap grid gap-14 pb-20 pt-12 md:pb-28 md:pt-20 lg:grid-cols-12 lg:items-center">
          <div className="min-w-0 lg:col-span-5">
            <nav className="mb-8 text-sm text-white/70" aria-label="Breadcrumb">
              <Link href="/products" className="link">
                Products
              </Link>
              <span aria-hidden="true" className="mx-2">/</span>
              <span aria-current="page">Docket</span>
            </nav>
            <p className="inline-block rounded-full bg-[#E9B44C] px-3.5 py-1.5 text-sm font-semibold text-ink">
              Opening soon. Demos on request.
            </p>
            <h1 className="display mt-6 !text-[clamp(2.7rem,6.2vw,5.6rem)]">Every matter, in order.</h1>
            <p className="lede mt-7">
              Docket is practice management for law chambers in Ghana. From the
              courtroom to the next client update, it keeps court dates, files,
              people and fees in one calm workspace.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={demoMail} className="btn btn-light">
                Ask for a demo
              </a>
              <a href={docket.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                Visit the product site <ArrowUpRight size={18} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <BrowserFrame
              priority
              sizes="(max-width: 1024px) 92vw, 760px"
              project={{
                image: "/product/docket-home.webp",
                imageAlt:
                  "Docket homepage showing a fictional matter with a recorded court outcome and the headline Every matter, in order",
                domain: "Docket, illustrative workflow",
              }}
            />
            <p className="mt-3 text-sm text-white/65">Public homepage. The matter shown is fictional.</p>
          </div>
        </div>
        <div className="fugu fugu-on-dark" aria-hidden="true" />
      </section>

      <section className="section" aria-labelledby="modules-title">
        <div className="wrap">
          <h2 id="modules-title" className="h2 max-w-[16ch]">What a chambers gets.</h2>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {docketModules.map((m) => {
              const Icon = icons[m.icon];
              return (
                <li key={m.title} className="bg-chalk p-7 md:p-9">
                  <Icon size={28} strokeWidth={1.6} className="text-[#A87414]" aria-hidden="true" />
                  <h3 className="h3 mt-5">{m.title}</h3>
                  <p className="prose-s mt-3 text-[0.98rem]">{m.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-chalk-dim py-[clamp(72px,10vw,140px)]" aria-labelledby="roles-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="roles-title" className="h2 lg:col-span-5">Everyone in chambers, with the right access.</h2>
          <div className="min-w-0 lg:col-span-7">
            <ul className="flex flex-wrap gap-2.5">
              {roles.map((r) => (
                <li key={r} className="rounded-full bg-white px-4 py-2 text-[1.02rem] ring-1 ring-[var(--line)]">{r}</li>
              ))}
            </ul>
            <p className="prose-s mt-8">
              Each role sees what suits its work. A matter&rsquo;s history shows
              who did what and when, so the head of chambers can see the state of
              any file without asking.
            </p>
          </div>
        </div>
      </section>

      <section className="on-dark bg-ink py-[clamp(72px,10vw,150px)] text-chalk" aria-labelledby="private-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="private-title" className="h2 lg:col-span-5">Your firm&rsquo;s records stay your firm&rsquo;s.</h2>
          <div className="min-w-0 lg:col-span-7">
            <ul className="space-y-5 text-[1.05rem] text-chalk/85">
              <li className="border-t border-[var(--line-on-dark)] pt-4">Every record belongs to one firm, and the database is designed so other firms cannot see it.</li>
              <li className="border-t border-[var(--line-on-dark)] pt-4">Role-based visibility inside the firm.</li>
              <li className="border-t border-[var(--line-on-dark)] pt-4">A change record that cannot be edited or removed.</li>
              <li className="border-t border-[var(--line-on-dark)] pt-4">A full export of your records and files, from Settings.</li>
            </ul>
            <div className="mt-10 rounded-[24px] bg-white/8 p-6 ring-1 ring-inset ring-white/15">
              <DpcBadge variant="card" />
            </div>
            <p className="mt-6 text-sm text-chalk/60">These are the product&rsquo;s stated design goals. Ask us how they apply to your chambers.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="flex flex-col gap-6 rounded-[32px] bg-[#17120E] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h2 className="h3">See Docket with your chambers in mind.</h2>
              <p className="mt-3 max-w-[34em] text-white/75">
                The button opens an email to us. This page sends nothing by
                itself. Pricing is not published yet.
              </p>
            </div>
            <a href={demoMail} className="btn btn-light shrink-0">Ask for a demo</a>
          </div>
        </div>
      </section>
    </main>
  );
}
