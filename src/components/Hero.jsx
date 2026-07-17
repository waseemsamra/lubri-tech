import { IMAGES } from "../data";

function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>{name}</span>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-inverse-surface">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center opacity-60 mix-blend-multiply"
          style={{ backgroundImage: `url('${IMAGES.hero}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded bg-industrial-green px-3 py-1 font-label-bold text-label-bold text-safety-white">
            ESTABLISHED 1999
          </span>
          <h1 className="mb-6 text-display-lg font-display-lg leading-tight text-safety-white">
            Moving Your World Forward.
          </h1>
          <p className="mb-10 max-w-xl font-body-lg text-body-lg text-surface-variant">
            High-performance lubrication technology engineered for precision,
            reliability, and extreme industrial environments. Breaking
            boundaries to accelerate your progress.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded bg-industrial-green px-6 py-4 font-label-bold text-label-bold text-safety-white transition-all hover:bg-primary-container sm:px-8">
              Explore Technical Specs <Icon name="trending_flat" />
            </button>
            <button className="rounded border border-safety-white px-6 py-4 font-label-bold text-label-bold text-safety-white transition-all hover:bg-safety-white hover:text-inverse-surface sm:px-8">
              View Product Range
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
