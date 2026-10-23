import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import { WorkIndex } from "@/components/work-index";
import { projects } from "@/content/projects";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Work: Platforms and Software Built in Ghana",
  description:
    "Selected work from Silentech: a news and broadcasting platform, a family-support marketplace in Germany, a manufacturer's website and our own retail software.",
  path: "/work",
  image: "/social/home.png",
});

export default function WorkPage() {
  return (
    <main id="main-content">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <section className="pb-[clamp(72px,10vw,150px)] pt-10 md:pt-16">
        <div className="wrap">
          <h1 className="display max-w-[12ch]">Things we have built.</h1>
          <p className="lede mt-8">
            A news and broadcasting platform, a family-support marketplace in
            Germany, a manufacturer&rsquo;s catalogue and our own retail
            software. Each page explains the problem, what we built and what is
            still in development.
          </p>
          <div className="mt-16 md:mt-24">
            <WorkIndex projects={projects} />
          </div>
          <div className="mt-20 grid gap-8 rounded-[28px] bg-chalk-dim p-8 md:grid-cols-12 md:p-12">
            <h2 className="h3 md:col-span-5">And some we cannot show.</h2>
            <p className="prose-s md:col-span-7">
              We also build private systems, including campaign coordination and
              client management tools. They stay confidential, so there is no
              page for them here. If your project is sensitive, say so in your
              first message and we will handle it that way.{" "}
              <Link href="/contact" className="link font-medium">
                Tell us about yours
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
