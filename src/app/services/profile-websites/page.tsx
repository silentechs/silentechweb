import Link from "next/link";
import { Check } from "lucide-react";
import { DpcBadge } from "@/components/dpc-badge";
import { Faq } from "@/components/faq";
import { StructuredData } from "@/components/structured-data";
import { StudioPreview } from "@/components/studio-preview";
import { mailto } from "@/content/site";
import { absoluteUrl, breadcrumbSchema, faqSchema, organizationId, pageMetadata } from "@/lib/seo";

const path = "/services/profile-websites";
const description =
  "High-profile websites for leaders, advisers and public figures, with a content studio your team publishes from and analytics that show what is read. Built in Ghana.";

export const metadata = pageMetadata({
  title: "Websites for Leaders and Public Figures",
  description,
  path,
  image: "/social/profile-websites.png",
});

const parts = [
  {
    title: "The public website",
    text: "Biography and credentials, advisory services, writing, speeches, speaking and media. Search, topics, an RSS feed, and enquiries routed by type, so a speaking request and an advisory request reach the right person.",
  },
  {
    title: "The content studio",
    text: "A private workspace to write, review, schedule and publish articles, speeches, pages and newsletters. A media library, roles for your team, and no code.",
  },
  {
    title: "The analytics",
    text: "Readership by article and topic, where readers come from, which countries, newsletter growth and enquiries by type, in one dashboard your team can read each week.",
  },
];

const care = [
  "Disclosure, privacy and terms pages written for the site, not pasted in",
  "Newsletter sign-up with clear consent and one-click unsubscribe",
  "Editor roles, and a review step before anything goes public",
  "Fast, readable pages that work on a phone and a slow connection",
  "Accessible by default: keyboard, screen reader and light or dark display",
  "Your content stays exportable, and we agree ownership in the project scope",
];

const faqs = [
  {
    q: "Can our team update the site without us?",
    a: "Yes. That is what the content studio is for. We train your editors at launch, and you publish articles, speeches and pages yourselves.",
  },
  {
    q: "Can you move content from our existing site?",
    a: "Yes. We audit what you have, bring over the articles and pages worth keeping and set up redirects so existing links keep working.",
  },
  {
    q: "What do the analytics measure?",
    a: "Readership, sources, countries, newsletter growth and enquiries. We set up measurement to match your privacy notice and agree what is collected before launch.",
  },
  {
    q: "Do you publish who your profile clients are?",
    a: "Only when the client agrees. aminadam.org is one we can show. Many of these projects are private, so we describe the work without naming people unless they agree.",
  },
];

export default function ProfileWebsitesPage() {
  return (
    <main id="main-content">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Profile websites", path },
        ])}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": absoluteUrl(`${path}#service`),
          name: "Websites for leaders and public figures",
          serviceType: "Website design and development with content management and analytics",
          description,
          url: absoluteUrl(path),
          provider: { "@id": organizationId },
        }}
      />
      <StructuredData data={faqSchema(faqs)} />

      <section className="pt-10 md:pt-16">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h1 className="display !text-[clamp(2.7rem,6.2vw,5.6rem)]">Websites for leaders and public figures.</h1>
            <p className="lede mt-8">
              A site that carries your name has to be accurate, fast and easy to
              keep current. We build the website, the studio you publish from
              and the analytics that show what is read.
            </p>
            <p className="meta mt-6">
              See an example:{" "}
              <Link href="/work/aminadam" className="link text-ink">
                aminadam.org
              </Link>
              , the site of an economist and former Minister for Finance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={mailto("Profile website enquiry")} className="btn btn-flame">
                Discuss a profile site
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Build a brief
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <StudioPreview />
          </div>
        </div>
        <div className="fugu mt-20" aria-hidden="true" />
      </section>

      <section className="section" aria-labelledby="parts-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="parts-title" className="h2 lg:col-span-4">
            Three parts, one launch.
          </h2>
          <dl className="grid gap-10 md:grid-cols-3 lg:col-span-8">
            {parts.map((p) => (
              <div key={p.title} className="border-t-2 border-ink pt-5">
                <dt className="font-display text-2xl font-bold leading-tight tracking-tight">{p.title}</dt>
                <dd className="prose-s mt-3 text-[0.98rem]">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="on-dark bg-ink py-[clamp(72px,10vw,150px)] text-chalk" aria-labelledby="care-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="care-title" className="h2">
              Built for people whose words are quoted.
            </h2>
            <p className="lede mt-6">
              When a site speaks for someone, small errors become headlines. We
              build in the care that stops them.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {care.map((c) => (
                <li key={c} className="flex gap-3 border-t border-[var(--line-on-dark)] pt-4 text-[1.02rem]">
                  <Check size={19} className="mt-1 shrink-0 text-shea" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-12 rounded-[24px] bg-white/8 p-6 ring-1 ring-inset ring-white/15">
              <DpcBadge variant="card" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="who-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="who-title" className="h2 lg:col-span-5">
            Who this is for.
          </h2>
          <div className="lg:col-span-7">
            <p className="prose-s">
              Executives, advisers, economists, public officials, authors and
              speakers, and the institutions they lead. If people search your
              name before they meet you, your site is part of the meeting.
            </p>
            <ol className="mt-10 grid gap-8 sm:grid-cols-2">
              {[
                ["Brief and audit", "We agree what the site must do and review any existing content."],
                ["Design", "A restrained, text-led design that suits your voice."],
                ["Build and migrate", "We build the site and studio and bring your content across."],
                ["Launch and train", "We train your editors, then stay on for improvements."],
              ].map(([t, d], i) => (
                <li key={t}>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-mono text-sm text-white" aria-hidden="true">{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{t}</h3>
                  <p className="prose-s mt-2 text-[0.98rem]">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="pb-[clamp(72px,10vw,150px)]" aria-labelledby="faq-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="faq-title" className="h2 lg:col-span-4">
            Common questions.
          </h2>
          <div className="lg:col-span-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
