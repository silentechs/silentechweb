import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="wrap pb-32 pt-16 md:pt-28">
      <p className="font-mono text-[clamp(3rem,10vw,8rem)] font-medium leading-none text-flame">404</p>
      <h1 className="h2 mt-6 max-w-[16ch]">That page is not here.</h1>
      <p className="lede mt-6">It may have moved. These are good places to start again.</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-ink">
          Go home
        </Link>
        <Link href="/work" className="btn btn-ghost">
          See our work
        </Link>
        <Link href="/products" className="btn btn-ghost">
          See our products
        </Link>
      </div>
    </main>
  );
}
