import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { BrowserFrame } from "@/components/work-index";
import { ProductTour } from "@/components/product-tour";
import { ProductVideo } from "@/components/product-video";
import { StructuredData } from "@/components/structured-data";
import { mailto } from "@/content/site";
import { breadcrumbSchema, consultancyPath, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const titles: Record<string, string> = {
  northciti: "NorthCiti News & Broadcasting Platform",
  aminadam: "Amin Adam Profile Website",
  kraam: "Kraam Family Support Platform",
  commerce: "Silentech Commerce POS & Inventory Software",
  philbro: "Philbro Oil Corporate Website",
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return pageMetadata({
    title: titles[project.slug],
    description: project.description,
    path: `/work/${project.slug}`,
    image: `/social/${project.slug}.png`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main id="main-content">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: project.name, path: `/work/${project.slug}` },
        ])}
      />
      <article className="wrap pb-[clamp(72px,10vw,140px)] pt-8 md:pt-14">
        <nav className="meta mb-10" aria-label="Breadcrumb">
          <Link href="/work" className="link">
            Work
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <span aria-current="page">{project.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-12">
          <h1 className="display !text-[clamp(2.6rem,6.6vw,6rem)] lg:col-span-9">{project.title}</h1>
        </div>

        <dl className="mt-12 grid gap-x-8 gap-y-6 border-y border-[var(--line)] py-7 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Project", project.name],
            ["For", project.client],
            ["Sector", `${project.category}, ${project.location}`],
            ["Status", project.status],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="meta">{k}</dt>
              <dd className="mt-1 font-display text-xl font-semibold leading-tight tracking-tight">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12">
          <BrowserFrame project={project} priority sizes="(max-width: 1320px) 92vw, 1240px" />
          <p className="meta mt-4 flex flex-wrap items-center justify-between gap-3">
            <span>Public homepage at {project.domain}.</span>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1 font-medium text-ink">
              Visit {project.domain} <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <section className="lg:col-span-5">
            <h2 className="h3">The problem</h2>
            <p className="prose-s mt-5">{project.challenge}</p>
          </section>
          <section className="lg:col-span-6 lg:col-start-7">
            <h2 className="h3">What we built</h2>
            <p className="prose-s mt-5">{project.approach}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li key={t} className="rounded-full bg-chalk-dim px-3.5 py-1.5 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <ul className="mt-20 grid gap-10 md:grid-cols-3">
          {project.capabilities.map((c) => (
            <li key={c.title} className="border-t-2 border-ink pt-5">
              <h3 className="font-display text-2xl font-bold leading-tight tracking-tight">{c.title}</h3>
              <p className="prose-s mt-3">{c.text}</p>
            </li>
          ))}
        </ul>

        {project.slug === "commerce" && (
          <section className="mt-24" aria-labelledby="inside-title">
            <div className="grid gap-8 lg:grid-cols-12">
              <h2 id="inside-title" className="h2 lg:col-span-5">Inside the product.</h2>
              <p className="prose-s lg:col-span-6 lg:col-start-7">
                The Sell screen puts the whole catalogue on one page. Tap a
                product to add it, adjust quantities in the cart, and charge.
                This is the live product with a demo workspace.
              </p>
            </div>
            <div className="mt-10">
              <ProductTour
                emptySrc="/product/commerce-sell.webp"
                filledSrc="/product/commerce-sell-cart.webp"
                alt="Silentech Commerce Sell screen showing tour products with photos and prices in cedis"
                domain="app.silentech.live/sell"
              />
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-12">
              <h3 className="h3 lg:col-span-4">Watch the 19-second tour.</h3>
              <div className="lg:col-span-8">
                <ProductVideo
                  src="/video/commerce-tour.mp4"
                  poster="/video/commerce-tour-poster.webp"
                  label="Silentech Commerce product tour: adding products, charging a sale and selling offline"
                />
              </div>
            </div>
          </section>
        )}

        {project.slug === "northciti" && (
          <section className="mt-24 rounded-[32px] bg-indigo p-6 text-chalk md:p-12" aria-labelledby="newsroom-title">
            <div className="on-dark grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-4">
                <p className="inline-block rounded-full bg-shea px-3.5 py-1 text-sm font-semibold text-ink">In development</p>
                <h2 id="newsroom-title" className="h3 mt-5">
                  The newsroom behind the public site.
                </h2>
                <p className="lede mt-4 !text-base">
                  Stories, assignments and review stages on one editorial board.
                  Shown here with sample content from a demo workspace.
                </p>
              </div>
              <figure className="lg:col-span-8">
                <Image
                  src="/work/newsroom-demo.webp"
                  width={1264}
                  height={673}
                  alt="Newsroom demo board showing sample stories at pitch, assigned, draft, submitted and review stages"
                  sizes="(max-width: 1024px) 90vw, 62vw"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <figcaption className="meta mt-3">Product help screenshot with sample editorial content.</figcaption>
              </figure>
            </div>
          </section>
        )}

        <section className="mt-24 grid gap-8 border-t border-[var(--line)] pt-12 md:grid-cols-12 md:items-center">
          <p className="font-display text-3xl font-bold leading-tight tracking-tightest md:col-span-7 md:text-4xl">
            Planning something similar?
          </p>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <a href={mailto(`Project enquiry after reading ${project.name}`)} className="btn btn-flame">
              Email us
            </a>
            <Link href={consultancyPath} className="btn btn-ghost">
              How we work
            </Link>
          </div>
        </section>

        <Link
          href={`/work/${next.slug}`}
          className="group mt-16 block rounded-[28px] bg-chalk-dim p-8 transition-colors hover:bg-ink hover:text-white md:p-10"
        >
          <span className="meta group-hover:text-white/70">Next project</span>
          <span className="mt-2 flex items-center justify-between gap-4 font-display text-4xl font-bold tracking-tightest md:text-6xl">
            {next.name}
            <ArrowUpRight size={40} aria-hidden="true" className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
        </Link>
      </article>
    </main>
  );
}
