/** Rendered product film. Source project lives in /video (Remotion). No audio track; all meaning is on screen. */
export function ProductVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  return (
    <figure>
      <video
        className="w-full rounded-2xl bg-ink shadow-[0_30px_60px_-30px_rgba(16,18,43,0.5)]"
        controls
        playsInline
        preload="none"
        poster={poster}
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
        Your browser cannot play this video. It shows the Commerce Sell screen,
        offline selling and the charge step.
      </video>
      <figcaption className="meta mt-3">
        19 seconds, no sound. Screenshots from the live product plus a sample
        illustration of offline selling.
      </figcaption>
    </figure>
  );
}
