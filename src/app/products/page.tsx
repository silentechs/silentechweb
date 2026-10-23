import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { products } from "@/content/products";
import { mailto } from "@/content/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products: Commerce, StitchCraft, Schools and Docket",
  description:
    "Software Silentech builds and runs itself: Commerce for shops, StitchCraft for tailoring studios, Schools for junior high, senior high and technical schools, and Docket for law chambers.",
  path: "/products",
  image: "/social/products.png",
});

const surface: Record<string, string> = {
  commerce: "bg-[#0B3D2B] text-chalk",
  stitchcraft: "bg-[#143F26] text-chalk",
  schools: "bg-schools text-white",
  docket: "bg-[#17120E] text-white",
};

export default function ProductsPage() {
  return (
    <main id="main-content">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <section className="pb-[clamp(72px,10vw,150px)] pt-10 md:pt-16">
        <div className="wrap">
          <h1 className="display max-w-[11ch]">Software we make ourselves.</h1>
          <p className="lede mt-8">
            Four products for the businesses and institutions around us. We
            build and run them ourselves.
          </p>

          <ul className="mt-16 space-y-5 md:mt-24">
            {products.map((p) => {
              const isOpening = p.status === "Opening soon";
              const detail = `/products/${p.slug}`;
              return (
                <li
                  key={p.slug}
                  className={`on-dark grid gap-10 rounded-[32px] p-7 sm:p-10 lg:grid-cols-12 lg:p-14 ${surface[p.slug]}`}
                >
                  <div className="lg:col-span-5">
                    <p
                      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold ${
                        isOpening ? "bg-shea text-ink" : "bg-white/12 ring-1 ring-inset ring-white/25"
                      }`}
                    >
                      {!isOpening && <span className="h-2 w-2 rounded-full bg-[#5FE0A0]" aria-hidden="true" />}
                      {p.status}
                    </p>
                    <h2 className="h2 mt-6">{p.name}</h2>
                    <p className="meta mt-3 !text-inherit opacity-80">For {p.forWho.toLowerCase()}</p>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="lede !text-inherit opacity-90">{p.line}</p>
                    <ul className="mt-7 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {p.features.map((f) => (
                        <li key={f} className="border-t border-white/25 pt-2.5">
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                      {isOpening ? (
                        <>
                          <Link href={detail} className="btn btn-light">
                            See what it does
                          </Link>
                          <a
                            href={mailto(`${p.name} demo request`)}
                            className="link"
                          >
                            Ask for a demo
                          </a>
                        </>
                      ) : (
                        <>
                          <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                            Open {p.slug === "commerce" ? "Commerce" : "StitchCraft"} <ArrowUpRight size={18} aria-hidden="true" />
                            <span className="sr-only">(opens in a new tab)</span>
                          </a>
                          {p.slug === "commerce" && (
                            <Link href="/work/commerce" className="link">
                              Read the story
                            </Link>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-20 grid gap-8 border-t border-[var(--line)] pt-12 md:grid-cols-12 md:items-center">
            <h2 className="h3 md:col-span-7">Need something none of these does?</h2>
            <div className="md:col-span-5 md:text-right">
              <Link href="/contact" className="btn btn-ink">
                Talk to us about custom software
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
