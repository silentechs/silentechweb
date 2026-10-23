import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { projects } from "@/content/projects";
import { products } from "@/content/products";
import { contact, mailto, stages } from "@/content/site";
import { PosDemo } from "@/components/pos-demo";
import { RegisterDemo } from "@/components/register-demo";
import { WorkIndex } from "@/components/work-index";
import { MeasureArt } from "@/components/product-art";
import { ProductTour } from "@/components/product-tour";
import { BrowserFrame } from "@/components/work-index";
import { TamaleClock } from "@/components/tamale-clock";
import { DpcBadge } from "@/components/dpc-badge";
import { StudioPreview } from "@/components/studio-preview";

export const metadata = pageMetadata({
  title: "Software Studio & IT Consultancy in Tamale, Ghana",
  description:
    "Silentech is a software studio in Tamale, Ghana. Custom software and IT consultancy for organisations, plus ready-made products for shops, tailors and schools.",
  path: "/",
});

const ways = [
  {
    title: "Build with us",
    text: "Custom software for your organisation: public websites, client portals, internal tools and integrations, designed around how your people actually work.",
    cta: "See what we have built",
    href: "/work",
  },
  {
    title: "Plan with us",
    text: "Consultancy for one stage or the whole project. Requirements, documentation, design and delivery planning, from a team that also writes the code.",
    cta: "How consultancy works",
    href: "/services/it-software-consultancy",
  },
  {
    title: "Use ours",
    text: "Ready-made software for shops, tailoring studios, schools and law chambers. Sign up and start, or ask for a demo.",
    cta: "Explore our products",
    href: "/products",
  },
];

const hereItems = [
  {
    title: "Phone first, desk second",
    text: "We design for a small screen and a small data plan, then scale up to the desktop.",
  },
  {
    title: "A dropped connection is normal",
    text: "Commerce sells offline and syncs later. Schools registers and marks do the same. We plan for the network to fail.",
  },
  {
    title: "SMS and phone numbers, not just email",
    text: "Parents in Schools sign in with a phone number and a texted code. People should not need an inbox to use your system.",
  },
  {
    title: "Documented and handed over",
    text: "You get the documentation to run what we build, and a handover plan. Ongoing support is agreed for each project.",
  },
];

export default function Home() {
  const commerce = products[0];
  const stitch = products[1];
  const schools = products[2];
  const docket = products[3];
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-6 md:pb-24 md:pt-10" aria-labelledby="hero-title">
        <div className="wrap grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 lg:pt-14">
            <h1 id="hero-title" className="display">
              <span className="line"><span style={{ ["--d" as string]: "0.05s" }}>Software your</span></span>
              <span className="line"><span style={{ ["--d" as string]: "0.15s" }}>business can</span></span>
              <span className="line">
                <span style={{ ["--d" as string]: "0.25s" }}>
                  run on<span className="text-flame">.</span>
                </span>
              </span>
            </h1>
            <p className="lede fade-in mt-9" style={{ ["--d" as string]: "0.6s" }}>
              Silentech is a software studio in Tamale, Ghana. We build custom
              systems for organisations, and ready-made products for shops,
              tailors, schools and law chambers.
            </p>
            <div className="fade-in mt-9 flex flex-wrap gap-3" style={{ ["--d" as string]: "0.75s" }}>
              <Link href="/contact" className="btn btn-flame">
                Start a project
              </Link>
              <Link href="/work" className="btn btn-ghost">
                See our work
              </Link>
            </div>
            <div className="fade-in mt-9 text-[#3d4263]" style={{ ["--d" as string]: "0.9s" }}>
              <DpcBadge />
              <p className="meta mt-4">Based in Tamale. Projects in Ghana and Germany.</p>
            </div>
          </div>

          <div className="on-dark relative lg:col-span-5">
            <div className="cloth rounded-[36px] px-4 pb-8 pt-12 sm:px-10 lg:-mr-4 lg:mt-2">
              <PosDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section aria-label="What we have shipped" className="border-y border-[var(--line)]">
        <div className="wrap grid gap-6 py-9 lg:grid-cols-12 lg:items-center">
          <dl className="grid grid-cols-3 gap-4 lg:col-span-6">
            {[
              ["4", "client sites"],
              ["2", "products live"],
              ["2", "opening soon"],
            ].map(([n, label]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                <dt className="font-display text-5xl font-bold leading-none tracking-tightest" style={{ fontVariationSettings: '"wdth" 90' }}>
                  {n}
                </dt>
                <dd className="mt-1 text-sm leading-tight text-slate sm:mt-0">{label}</dd>
              </div>
            ))}
          </dl>
          <p className="text-[1.02rem] leading-snug text-[#3d4263] lg:col-span-6 lg:text-right">
            NorthCiti, Amin Adam, Kraam in Germany and Philbro Oil, plus our own
            Commerce and StitchCraft.
          </p>
        </div>
      </section>

      {/* Ways to work */}
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h2 lg:sticky lg:top-28">Three ways to work with us.</h2>
          </div>
          <ul className="lg:col-span-7">
            {ways.map((w) => (
              <li key={w.title} className="border-t border-[var(--line)] py-9 first:pt-0 first:border-t-0 lg:first:border-t lg:first:pt-9">
                <h3 className="h3">{w.title}</h3>
                <p className="prose-s mt-4">{w.text}</p>
                <Link href={w.href} className="link mt-5 inline-block font-medium">
                  {w.cta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Work */}
      <section className="pb-[clamp(72px,10vw,150px)]" aria-labelledby="work-title">
        <div className="wrap">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
            <div>
              <h2 id="work-title" className="h2">
                Recent work.
              </h2>
              <p className="lede mt-5">
                Public platforms, working products and the occasional private
                system.
              </p>
            </div>
            <Link href="/work" className="link font-medium">
              All work
            </Link>
          </div>
          <WorkIndex projects={projects} />
        </div>
      </section>

      {/* Profile websites */}
      <section className="bg-chalk-dim py-[clamp(72px,10vw,150px)]" aria-labelledby="profile-title">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 id="profile-title" className="h2">
              Websites for leaders and public figures.
            </h2>
            <p className="lede mt-6">
              A high-profile site, a content studio your team publishes from,
              and analytics that show what is read and where.
            </p>
            <ul className="mt-7 space-y-2.5 text-[1.02rem]">
              {[
                "Writing, speeches, speaking and media in one place",
                "Enquiries routed by type: speaking, advisory, press",
                "A private studio to write, review, schedule and publish",
                "Readership, sources, countries and newsletter growth",
              ].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <Check size={19} className="mt-1 shrink-0 text-flame-ink" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <Link href="/services/profile-websites" className="btn btn-ink mt-9">
              See what is included
            </Link>
          </div>
          <div className="lg:col-span-7 lg:pl-6">
            <StudioPreview />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="on-dark bg-ink py-[clamp(72px,10vw,150px)] text-chalk" aria-labelledby="products-title">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 id="products-title" className="h2 lg:col-span-7">
              Products we make ourselves.
            </h2>
            <p className="lede lg:col-span-5">
              Built in Tamale for the shops, studios and schools around us. Two
              are live. Schools and Docket are on their way.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {/* Commerce */}
            <article className="relative overflow-hidden rounded-[28px] bg-[#0B3D2B] p-7 sm:p-9 lg:col-span-7">
              <p className="flex items-center gap-2 text-sm font-semibold text-[#7DE0B2]">
                <span className="h-2 w-2 rounded-full bg-[#2FD58C]" /> Live
              </p>
              <h3 className="h3 mt-4">{commerce.name}</h3>
              <p className="mt-4 max-w-[34em] text-chalk/80">{commerce.line}</p>
              <div className="mt-8 text-ink">
                <ProductTour
                  emptySrc="/product/commerce-sell.webp"
                  filledSrc="/product/commerce-sell-cart.webp"
                  alt="Silentech Commerce Sell screen showing tour products with photos and prices in cedis"
                  domain="app.silentech.live/sell"
                  caption="The live Sell screen, demo workspace."
                />
              </div>
              <ul className="mt-8 grid gap-2 text-[0.98rem] sm:grid-cols-2">
                {commerce.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check size={18} className="mt-0.5 shrink-0 text-[#7DE0B2]" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                <a href={commerce.url} target="_blank" rel="noopener noreferrer" className="btn btn-light min-h-[46px] px-5">
                  Open Commerce <ArrowUpRight size={17} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <Link href="/work/commerce" className="link self-center">
                  Read the story
                </Link>
              </div>
            </article>

            {/* StitchCraft */}
            <article className="relative overflow-hidden rounded-[28px] bg-[#143F26] p-7 sm:p-9 lg:col-span-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-[#A9E3B8]">
                <span className="h-2 w-2 rounded-full bg-[#5FD282]" /> Live
              </p>
              <h3 className="h3 mt-4">{stitch.name}</h3>
              <p className="mt-4 text-chalk/80">{stitch.line}</p>
              <div className="my-8 flex justify-center">
                <MeasureArt />
              </div>
              <a href={stitch.url} target="_blank" rel="noopener noreferrer" className="btn btn-light min-h-[46px] px-5">
                Open StitchCraft <ArrowUpRight size={17} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </article>

            {/* Schools */}
            <article className="relative overflow-hidden rounded-[40px] bg-schools p-7 sm:p-10 lg:col-span-12 lg:p-14">
              <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-6">
                  <p className="inline-flex items-center gap-2 rounded-full bg-shea px-3.5 py-1.5 text-sm font-semibold text-ink">
                    Opening soon
                  </p>
                  <h3 className="h2 mt-6">{schools.name}</h3>
                  <p className="lede mt-5 !max-w-[28em]">
                    Run the whole school from one place, even when the internet
                    is slow.
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {schools.features.map((f) => (
                      <li key={f} className="rounded-full bg-white/12 px-3.5 py-1.5 text-[0.95rem] ring-1 ring-inset ring-white/25">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href={mailto("Silentech Schools demo request", "School name:\nLevel (JHS, SHS, technical):\nNumber of students:\nBest phone number:\n")}
                      className="btn btn-light"
                    >
                      Ask for a demo
                    </a>
                    <Link href="/products/schools" className="btn btn-outline-light">
                      See what it does
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-6 lg:pl-8">
                  <RegisterDemo />
                </div>
              </div>
            </article>

            {/* Docket */}
            <article className="relative overflow-hidden rounded-[40px] bg-[#17120E] p-7 sm:p-10 lg:col-span-12 lg:p-14">
              <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5">
                  <p className="inline-flex items-center gap-2 rounded-full bg-shea px-3.5 py-1.5 text-sm font-semibold text-ink">
                    Opening soon
                  </p>
                  <h3 className="h2 mt-6">{docket.name}</h3>
                  <p className="lede mt-5 !max-w-[28em]">
                    Practice management for law chambers in Ghana. Every matter,
                    in order.
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {["Matters and court dates", "Client updates", "Files and evidence", "Time and invoices", "Audit trail"].map((f) => (
                      <li key={f} className="rounded-full bg-white/10 px-3.5 py-1.5 text-[0.95rem] ring-1 ring-inset ring-white/20">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href={mailto("Docket demo request", "Chambers name:\nCity:\nNumber of lawyers:\nBest phone number:\n")}
                      className="btn btn-light"
                    >
                      Ask for a demo
                    </a>
                    <Link href="/products/docket" className="btn btn-outline-light">
                      See what it does
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <BrowserFrame
                    sizes="(max-width: 1024px) 92vw, 700px"
                    project={{
                      image: "/product/docket-home.webp",
                      imageAlt: "Docket homepage showing a fictional matter with a recorded court outcome",
                      domain: "Docket, illustrative workflow",
                    }}
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Built for here */}
      <section className="section" aria-labelledby="here-title">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="here-title" className="h2">
              Built for how business works here.
            </h2>
            <div className="fugu mt-10 hidden max-w-[260px] lg:block" aria-hidden="true" />
          </div>
          <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-7">
            {hereItems.map((item) => (
              <div key={item.title} className="border-t-2 border-ink pt-5">
                <dt className="font-display text-2xl font-bold leading-tight tracking-tight" style={{ fontVariationSettings: '"wdth" 94' }}>
                  {item.title}
                </dt>
                <dd className="prose-s mt-3">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Process */}
      <section className="bg-chalk-dim py-[clamp(72px,10vw,150px)]" aria-labelledby="process-title">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="process-title" className="h2 lg:col-span-7">
              From first call to launch.
            </h2>
            <p className="lede lg:col-span-5">
              Hire us for one stage or all four. We agree the scope and what you
              will receive before work starts.
            </p>
          </div>
          <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {stages.map((s, i) => (
              <li key={s.name} className="relative">
                <div className="mb-6 flex items-center gap-3" aria-hidden="true">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink font-mono text-sm text-white">
                    {i + 1}
                  </span>
                  <span className="h-[2px] flex-1 bg-ink/20" />
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight">{s.name}</h3>
                <p className="prose-s mt-3 text-[0.98rem]">{s.outputs[0]}.</p>
                <p className="meta mt-2">{s.outputs[1]}.</p>
              </li>
            ))}
          </ol>
          <Link href="/services/it-software-consultancy" className="link mt-14 inline-block font-medium">
            What each stage delivers
          </Link>
        </div>
      </section>

      {/* Place */}
      <section className="section" aria-labelledby="place-title">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-[clamp(1.6rem,4vw,3.2rem)] font-medium leading-none tracking-tight text-indigo">
              {contact.coordinates}
            </p>
            <h2 id="place-title" className="h2 mt-8">
              Made in Tamale. Used well beyond it.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="prose-s">
              Our office is in Malshegu, in Ghana&rsquo;s Northern Region. We
              build for clients in Ghana and Germany and work with partners
              remotely.
            </p>
            <p className="mt-6 font-mono text-sm text-slate">
              Tamale time{" "}
              <TamaleClock className="text-lg font-medium text-ink" /> &middot;{" "}
              {contact.hours}
            </p>
            <Link href="/about" className="link mt-6 inline-block font-medium">
              About Silentech
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
