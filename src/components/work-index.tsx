"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";

export function BrowserFrame({
  project,
  priority = false,
  sizes = "(max-width: 1024px) 92vw, 44vw",
}: {
  project: Pick<Project, "image" | "imageAlt" | "domain">;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-30px_rgba(16,18,43,0.45),0_0_0_1px_rgba(16,18,43,0.08)]">
      <div className="flex items-center gap-3 border-b border-[var(--line)] bg-chalk-dim px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        </span>
        <span className="truncate rounded-md bg-white px-3 py-0.5 font-mono text-[0.72rem] text-slate">
          {project.domain}
        </span>
      </div>
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={1600}
        height={1000}
        priority={priority}
        sizes={sizes}
        className="aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  );
}

export function WorkIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <ul className="lg:col-span-7">
        {projects.map((p, i) => (
          <li key={p.slug} className="border-t border-[var(--line)] last:border-b">
            <Link
              href={`/work/${p.slug}`}
              className="work-row group block py-7 md:py-9"
              data-active={active === i}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <h3 className="work-name font-display text-[clamp(2.6rem,6.4vw,5.4rem)] font-bold leading-[0.92] tracking-tightest">
                    {p.name}
                  </h3>
                  <p className="mt-3 max-w-[34em] text-[1.05rem] text-[#3d4263]">
                    {p.title}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-2 shrink-0 text-ink transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={30}
                  aria-hidden="true"
                />
              </div>
              <p className="meta mt-4 flex flex-wrap gap-x-5 gap-y-1">
                <span>{p.category}</span>
                <span>{p.location}</span>
                <span className="font-medium text-ink">{p.status}</span>
              </p>
              <div className="mt-6 lg:hidden">
                <BrowserFrame project={p} sizes="92vw" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative hidden lg:col-span-5 lg:block" aria-hidden="true">
        <div className="sticky top-28">
          <div className="relative aspect-[16/11.5]">
            {projects.map((p, i) => (
              <div
                key={p.slug}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "none" : "translateY(14px) scale(0.985)",
                }}
              >
                <BrowserFrame project={p} sizes="44vw" />
              </div>
            ))}
          </div>
          <p className="meta mt-4">Public homepage of {projects[active].domain}</p>
        </div>
      </div>
    </div>
  );
}
