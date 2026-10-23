import Link from "next/link";
import { Check } from "lucide-react";
import { Faq } from "@/components/faq";
import { StructuredData } from "@/components/structured-data";
import { faqs, mailto, stages } from "@/content/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  consultancyPath,
  faqSchema,
  organizationId,
  pageMetadata,
} from "@/lib/seo";

const description =
  "IT and software consultancy in Ghana, from requirements and documentation to design, implementation and product support. Hire us for one stage or the whole project.";

export const metadata = pageMetadata({
  title: "IT & Software Consultancy in Ghana",
  description,
  path: consultancyPath,
  image: "/social/consultancy.png",
});

const options = [
  {
    title: "One stage",
    text: "Requirements, documentation, design or a delivery plan. You take the result to your own team or another supplier.",
    fit: "Good when you know the problem and need it written down properly.",
  },
  {
    title: "End to end",
    text: "We take the project from first workshop to launch and handover, with one team across all four stages.",
    fit: "Good when you want a working product and one team accountable for it.",
  },
  {
    title: "Alongside your team",
    text: "We review an existing system, integrate it with new software or support your internal developers with design and delivery planning.",
    fit: "Good when you already have software or people and need a second pair of hands.",
  },
];

export default function ConsultancyPage() {
  return (
    <main id="main-content">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "IT & software consultancy", path: consultancyPath },
        ])}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": absoluteUrl(`${consultancyPath}#service`),
          name: "IT and software consultancy",
          serviceType: "IT consultancy and custom software development",
          description,
          url: absoluteUrl(consultancyPath),
          provider: { "@id": organizationId },
        }}
      />
      <StructuredData data={faqSchema(faqs)} />

      <section className="pt-10 md:pt-16">
        <div className="wrap">
          <h1 className="display max-w-[11ch]">IT and software consultancy.</h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <p className="lede lg:col-span-6">
              We help organisations define what a system must do, document it,
              design it and build it. Because we also ship our own products, the
              advice comes from people who write the code.
            </p>
            <div className="flex flex-wrap items-start gap-3 lg:col-span-5 lg:col-start-8">
              <a href={mailto("IT consultancy enquiry")} className="btn btn-flame">
                Discuss your project
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Build a brief
              </Link>
            </div>
          </div>
        </div>
        <div className="fugu mt-20" aria-hidden="true" />
      </section>

      <section className="section" aria-labelledby="stages-title">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12">
            <h2 id="stages-title" className="h2 lg:col-span-7">
              Four stages, and what each one hands you.
            </h2>
            <p className="lede lg:col-span-5">
              These are typical deliverables. The exact scope is agreed for your
              project before we start.
            </p>
          </div>
          <ol className="mt-16 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {stages.map((s, i) => (
              <li key={s.name} className="grid gap-6 py-10 md:py-14 lg:grid-cols-12">
                <div className="flex items-start gap-4 lg:col-span-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink font-mono text-sm text-white" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 className="h3 pt-1">{s.name}</h3>
                </div>
                <p className="prose-s lg:col-span-4">{s.text}</p>
                <ul className="space-y-2.5 lg:col-span-4">
                  {s.outputs.map((o) => (
                    <li key={o} className="flex gap-2.5 text-[0.98rem]">
                      <Check size={18} className="mt-1 shrink-0 text-flame-ink" aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-chalk-dim py-[clamp(72px,10vw,140px)]" aria-labelledby="options-title">
        <div className="wrap">
          <h2 id="options-title" className="h2 max-w-[14ch]">
            Three ways to engage us.
          </h2>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {options.map((o) => (
              <li key={o.title} className="border-t-2 border-ink pt-5">
                <h3 className="font-display text-3xl font-bold leading-none tracking-tightest">{o.title}</h3>
                <p className="prose-s mt-4">{o.text}</p>
                <p className="meta mt-4">{o.fit}</p>
              </li>
            ))}
          </ul>
          <p className="meta mt-12 max-w-[40em]">
            Cost and timing depend on scope. We agree a project-specific scope
            before we estimate delivery.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="proof-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="proof-title" className="h2 lg:col-span-5">
            Where this has worked.
          </h2>
          <ul className="lg:col-span-7">
            {[
              ["/work/northciti", "NorthCiti", "News, radio and television for Vanguard Multimedia, with a newsroom workspace in development."],
              ["/work/kraam", "Kraam", "Family-support discovery connected to provider enquiries, records and invoicing, built with a partner in Germany."],
              ["/work/philbro", "Philbro Oil", "A corporate site and product catalogue for a Ghanaian manufacturer."],
            ].map(([href, name, text]) => (
              <li key={href} className="border-t border-[var(--line)] first:border-t-0 lg:first:border-t">
                <Link href={href} className="group block py-7">
                  <h3 className="h3 transition-colors group-hover:text-flame-ink">{name}</h3>
                  <p className="prose-s mt-3">{text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-[clamp(72px,10vw,150px)]" aria-labelledby="faq-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="faq-title" className="h2 lg:col-span-4">
            Before we start.
          </h2>
          <div className="lg:col-span-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
