import { BriefForm } from "@/components/brief-form";
import { StructuredData } from "@/components/structured-data";
import { TamaleClock } from "@/components/tamale-clock";
import { contact } from "@/content/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Start a Project",
  description:
    "Tell Silentech what you need. Build a short project brief and send it to our team in Tamale, Ghana by email.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="pb-[clamp(72px,10vw,150px)] pt-10 md:pt-16">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h1 className="display !text-[clamp(2.8rem,6.4vw,5.6rem)]">Start a project.</h1>
            <p className="lede mt-7">
              Answer a few questions and we will draft the email for you. Or
              write to us directly.
            </p>
            <dl className="mt-12 space-y-7 border-t border-[var(--line)] pt-8">
              <div>
                <dt className="meta">Email</dt>
                <dd className="mt-1 font-display text-2xl font-semibold tracking-tight">
                  <a className="link" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="meta">Office</dt>
                <dd className="mt-1 text-lg">
                  {contact.address.join(", ")}
                  <span className="meta block">Ghana Post digital address {contact.digitalAddress}</span>
                </dd>
              </div>
              <div>
                <dt className="meta">Hours</dt>
                <dd className="mt-1 text-lg">
                  {contact.hours}
                  <span className="meta block">
                    It is <TamaleClock className="font-mono text-ink" /> in Tamale now.
                  </span>
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-[32px] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(16,18,43,0.5)] ring-1 ring-[var(--line)] sm:p-10 lg:col-span-7">
            <BriefForm />
          </div>
        </div>
      </section>
    </main>
  );
}
