import Link from "next/link";
import { DpcBadge } from "@/components/dpc-badge";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, consultancyPath, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services: Custom Software, Consultancy and Profile Websites",
  description:
    "What Silentech builds and advises on: custom software, IT and software consultancy, and high-profile websites with a content studio and analytics.",
  path: "/services",
  image: "/social/services.png",
});

const services = [
  {
    title: "Custom software",
    text: "Public platforms, client portals, internal tools and integrations, built around how your people work and handed over with documentation.",
    proof: "NorthCiti, Kraam, Philbro Oil",
    links: [
      ["/work", "See the work"],
      ["/contact", "Start a project"],
    ],
  },
  {
    title: "IT and software consultancy",
    text: "Requirements, documentation, design and delivery planning. Hire us for one stage or all four.",
    proof: "Four stages, agreed scope",
    links: [[consultancyPath, "How it works"]],
  },
  {
    title: "Websites for leaders and public figures",
    text: "A high-profile website, a content studio your team publishes from, and analytics that show what is read and where.",
    proof: "Example: aminadam.org",
    links: [["/services/profile-websites", "See what is included"]],
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <section className="pb-[clamp(72px,10vw,150px)] pt-10 md:pt-16">
        <div className="wrap">
          <h1 className="display max-w-[12ch]">What we build and advise on.</h1>
          <p className="lede mt-8">
            Three services, one team. You can also use our{" "}
            <Link href="/products" className="link">
              ready-made products
            </Link>{" "}
            if one fits.
          </p>
          <ul className="mt-16 border-t border-[var(--line)] md:mt-24">
            {services.map((s) => (
              <li key={s.title} className="grid gap-6 border-b border-[var(--line)] py-10 md:py-14 lg:grid-cols-12">
                <h2 className="h3 lg:col-span-4 !text-[clamp(1.8rem,3.4vw,2.8rem)]">{s.title}</h2>
                <div className="lg:col-span-5">
                  <p className="prose-s">{s.text}</p>
                  <p className="meta mt-4">{s.proof}</p>
                </div>
                <div className="flex flex-wrap items-start gap-3 lg:col-span-3 lg:justify-end">
                  {s.links.map(([href, label], i) => (
                    <Link key={href} href={href} className={i === 0 ? "btn btn-ink min-h-[46px] px-5" : "link self-center"}>
                      {label}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-16 rounded-[28px] bg-chalk-dim p-7 md:p-10">
            <DpcBadge variant="card" />
          </div>
        </div>
      </section>
    </main>
  );
}
