import { IMAGES } from "../data";

export default function Sustainability() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${IMAGES.sustainability}')` }}
        />
        <div className="absolute inset-0 mix-blend-multiply bg-inverse-surface/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl border-l-8 border-industrial-green bg-safety-white p-8 md:p-16">
          <span className="mb-4 block font-label-bold text-label-bold tracking-widest text-industrial-green">
            PATH360 INITIATIVE
          </span>
          <h2 className="mb-6 font-headline-lg text-headline-lg text-on-surface">
            Accelerating the move to a more sustainable future.
          </h2>
          <p className="mb-8 font-body-md text-body-md text-on-surface-variant">
            We have developed a holistic programme to reduce waste, carbon
            emissions, and environmental impact across our global supply chain.
            Performance shouldn't cost the Earth.
          </p>
          <button className="rounded bg-industrial-green px-8 py-3 font-label-bold text-label-bold text-safety-white transition-opacity hover:opacity-90">
            View Our Sustainability Impact
          </button>
        </div>
      </div>
    </section>
  );
}
