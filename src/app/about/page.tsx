import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import { TamaleClock } from "@/components/tamale-clock";
import { DpcBadge } from "@/components/dpc-badge";
import { contact } from "@/content/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Silentech: A Software Studio in Tamale",
  description:
    "Silentech Solution Enterprise is a Ghanaian-owned software studio and IT consultancy in Tamale. We build custom software and our own products for shops, tailors and schools.",
  path: "/about",
});

const principles = [
  ["Start with the workflow.", "Before any screen, we map who does what today. Software that fits the work gets used."],
  ["Say what is true.", "We tell you what is live, what is in development and what we have not built. The same rule applies to this website."],
  ["Make it work on a bad day.", "Slow networks, shared phones and power cuts are normal here. We design for them from the first sketch."],
  ["Hand it over properly.", "Documentation, handover and a plan for what comes next, so you are never stuck with software only we understand."],
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <section className="pt-10 md:pt-16">
        <div className="wrap">
          <h1 className="display max-w-[13ch]">A software studio in Tamale.</h1>
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <p className="lede lg:col-span-6">
              Silentech Solution Enterprise is Ghanaian-owned. We build custom
              software and provide IT consultancy for organisations, and we make
              our own products for shops, tailoring studios and schools.
            </p>
            <div className="prose-s lg:col-span-5 lg:col-start-8">
              <p>
                Our portfolio spans a news and broadcasting platform in Ghana, a
                family-support platform built with a partner in Germany, and a
                manufacturer&rsquo;s catalogue site. We also build private
                systems that we cannot show.
              </p>
              <p>
                Being in Tamale shapes the work. Our own customers run on phones
                and patchy networks, and we build for that first.
              </p>
            </div>
          </div>
        </div>
        <div className="fugu mt-20" aria-hidden="true" />
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="how-title" className="h2 lg:col-span-5">
            How we work.
          </h2>
          <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-7">
            {principles.map(([t, d]) => (
              <div key={t} className="border-t-2 border-ink pt-5">
                <dt className="font-display text-2xl font-bold leading-tight tracking-tight">{t}</dt>
                <dd className="prose-s mt-3">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pb-[clamp(72px,10vw,140px)]" aria-labelledby="data-title">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center">
          <h2 id="data-title" className="h2 lg:col-span-5">
            We handle data with care.
          </h2>
          <div className="lg:col-span-7">
            <p className="prose-s">
              We build systems that hold school records, customer details and
              reader lists. Silentech is registered with Ghana&rsquo;s Data
              Protection Commission, and we design products around consent,
              access control and the ability to export your data.
            </p>
            <div className="mt-8 rounded-[24px] bg-white p-6 ring-1 ring-[var(--line)]">
              <DpcBadge variant="card" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-chalk-dim py-[clamp(72px,10vw,140px)]" aria-labelledby="where-title">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="font-mono text-[clamp(1.6rem,4vw,3rem)] font-medium leading-none text-indigo">{contact.coordinates}</p>
            <h2 id="where-title" className="h2 mt-7">
              Find us.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <address className="text-xl not-italic leading-relaxed">
              {contact.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <p className="meta mt-4">
              Ghana Post digital address {contact.digitalAddress}. {contact.hours}. It is{" "}
              <TamaleClock className="font-mono text-ink" /> here now.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-ink">
                Start a project
              </Link>
              <Link href="/work" className="btn btn-ghost">
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
