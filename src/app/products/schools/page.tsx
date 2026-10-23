import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  FileText,
  Globe,
  Layers,
  MessageSquare,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { DpcBadge } from "@/components/dpc-badge";
import { RegisterDemo } from "@/components/register-demo";
import { StructuredData } from "@/components/structured-data";
import { schoolsModules } from "@/content/products";
import { mailto } from "@/content/site";
import { absoluteUrl, breadcrumbSchema, organizationId, pageMetadata } from "@/lib/seo";

const description =
  "Silentech Schools puts registers, marks, report cards, fees, timetables, parent messages and a school website in one system that keeps working on slow connections. Opening soon.";

export const metadata = pageMetadata({
  title: "Silentech Schools: School Software for Ghana",
  description,
  path: "/products/schools",
  image: "/social/schools.png",
});

const icons: Record<string, LucideIcon> = {
  ClipboardCheck,
  FileText,
  MessageSquare,
  Wallet,
  BookOpen,
  CalendarDays,
  Globe,
  Layers,
};

const roles = [
  ["Heads and administrators", "Enrol students, place them in classes and houses, review the promotion plan before the year changes, and release results when the school is ready."],
  ["Teachers", "Take registers, enter marks in a grid, set quizzes and assignments, and see only the students they teach."],
  ["Parents and guardians", "Sign in with a phone number and a texted code to see attendance, results, notices and the school calendar."],
  ["Students", "Sign in with a school-issued PIN to reach notes, assignments and quizzes."],
];

const demoMail = mailto(
  "Silentech Schools demo request",
  "School name:\nLevel (JHS, SHS or technical):\nNumber of students:\nBest phone number to reach you:\n",
);

export default function SchoolsPage() {
  return (
    <main id="main-content">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "Silentech Schools", path: "/products/schools" },
        ])}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": absoluteUrl("/products/schools#page"),
          name: "Silentech Schools",
          description,
          url: absoluteUrl("/products/schools"),
          about: { "@type": "SoftwareApplication", name: "Silentech Schools", applicationCategory: "EducationalApplication", operatingSystem: "Web" },
          publisher: { "@id": organizationId },
        }}
      />

      <section className="on-dark bg-schools text-white">
        <div className="wrap grid gap-14 pb-20 pt-12 md:pb-28 md:pt-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <nav className="mb-8 text-sm text-white/75" aria-label="Breadcrumb">
              <Link href="/products" className="link">
                Products
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span aria-current="page">Schools</span>
            </nav>
            <p className="inline-block rounded-full bg-shea px-3.5 py-1.5 text-sm font-semibold text-ink">
              Opening soon. Demos on request.
            </p>
            <h1 className="display mt-6 !text-[clamp(2.7rem,6.6vw,6rem)]">
              Run the whole school from one place.
            </h1>
            <p className="lede mt-7">
              Silentech Schools brings lessons, records, marks, fees and parent
              messages into one system, and keeps working when the internet is
              slow.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={demoMail} className="btn btn-light">
                Ask for a demo
              </a>
              <a href="https://schools.silentech.live/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                Visit the product site <ArrowUpRight size={18} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-10">
            <RegisterDemo />
          </div>
        </div>
        <div className="fugu fugu-on-dark" aria-hidden="true" />
      </section>

      <section className="section" aria-labelledby="roles-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="roles-title" className="h2 lg:col-span-5">
            One system, four kinds of user.
          </h2>
          <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-7">
            {roles.map(([who, what]) => (
              <div key={who} className="border-t-2 border-ink pt-5">
                <dt className="font-display text-2xl font-bold leading-tight tracking-tight">{who}</dt>
                <dd className="prose-s mt-3">{what}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-chalk-dim py-[clamp(72px,10vw,150px)]" aria-labelledby="modules-title">
        <div className="wrap">
          <h2 id="modules-title" className="h2 max-w-[16ch]">
            What is inside.
          </h2>
          <p className="lede mt-6">
            These are the modules the product is built around. Schools switch on
            what they need.
          </p>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-[var(--line)] sm:grid-cols-2">
            {schoolsModules.map((m) => {
              const Icon = icons[m.icon];
              return (
                <li key={m.title} className="bg-chalk p-7 md:p-9">
                  <Icon size={28} strokeWidth={1.6} className="text-schools" aria-hidden="true" />
                  <h3 className="h3 mt-5">{m.title}</h3>
                  <p className="prose-s mt-3 text-[0.98rem]">{m.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="slow-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 id="slow-title" className="h2">
              Made for slow connections and shared devices.
            </h2>
          </div>
          <div className="prose-s lg:col-span-6">
            <p>
              Registers and marks work offline and sync later. If two people
              change the same record, the conflict goes back to a person to
              resolve instead of one edit quietly winning.
            </p>
            <p>
              On a shared computer, sessions are kept in memory only and wiped
              at sign-out. The school website has a lite mode for visitors on
              small data plans.
            </p>
            <p>
              Absence, exeat and safety alerts go out as SMS, so a parent does
              not need to open an app to hear about them.
            </p>
          </div>
        </div>
      </section>

      <section className="on-dark bg-ink py-[clamp(72px,10vw,140px)] text-chalk" aria-labelledby="data-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="data-title" className="h2 lg:col-span-6">
            The school&rsquo;s data stays the school&rsquo;s.
          </h2>
          <div className="lg:col-span-6">
            <ul className="space-y-5 text-[1.05rem] text-chalk/85">
              <li className="border-t border-[var(--line-on-dark)] pt-4">Full data export at any time.</li>
              <li className="border-t border-[var(--line-on-dark)] pt-4">Role-based access, with a tamper-evident log of who changed what.</li>
              <li className="border-t border-[var(--line-on-dark)] pt-4">Report cards stay hidden from parents until the school releases them.</li>
              <li className="border-t border-[var(--line-on-dark)] pt-4">Online fee payments go to the school&rsquo;s own account. Silentech never holds school money.</li>
            </ul>
            <a href="https://schools.silentech.live/data-protection" target="_blank" rel="noopener noreferrer" className="link mt-8 inline-flex items-center gap-1 font-medium">
              Read the data protection page <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <div className="mt-10 rounded-[20px] bg-white/8 p-5 ring-1 ring-inset ring-white/15">
              <DpcBadge variant="card" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="start-title">
        <div className="wrap">
          <h2 id="start-title" className="h2 max-w-[14ch]">
            How a school starts.
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              ["Ask for a demo", "Tell us your school, level and size. We show you the product and answer questions."],
              ["We set up your school", "Your school gets its own address, and we invite the head to sign in."],
              ["Add your people", "Staff, students and parents are added in bulk from spreadsheets you already have."],
            ].map(([t, d], i) => (
              <li key={t}>
                <div className="mb-6 flex items-center gap-3" aria-hidden="true">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-schools font-mono text-sm text-white">{i + 1}</span>
                  <span className="h-[2px] flex-1 bg-ink/20" />
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight">{t}</h3>
                <p className="prose-s mt-3">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-16 flex flex-col gap-6 rounded-[32px] bg-schools-tint p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h2 className="h3">Want to see it with your school in mind?</h2>
              <p className="prose-s mt-3">
                The button opens an email to us. This page sends nothing by
                itself.
              </p>
            </div>
            <a href={demoMail} className="btn btn-ink shrink-0">
              Ask for a demo
            </a>
          </div>
          <p className="meta mt-8 max-w-[42em]">
            Feature descriptions come from the Silentech Schools product site.
            Pricing is not published yet.
          </p>
        </div>
      </section>
    </main>
  );
}
