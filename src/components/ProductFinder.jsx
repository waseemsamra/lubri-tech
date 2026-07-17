export default function ProductFinder() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="flex flex-col items-center justify-between gap-10 bg-primary-container p-8 text-safety-white md:flex-row md:p-20">
        <div className="max-w-xl">
          <h2 className="mb-4 font-headline-lg text-headline-lg">
            Find the Right Solution, Instantly.
          </h2>
          <p className="font-body-lg text-body-lg opacity-90">
            Unsure which high-performance product is best for your specific
            machinery or vehicle? Our intelligent Product Finder tool provides
            the engineering answer you need.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <div className="max-w-sm rounded-lg bg-safety-white p-8 text-on-surface shadow-xl">
            <h4 className="mb-4 font-label-bold text-label-bold text-industrial-green">
              QUICK SEARCH
            </h4>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block font-label-bold text-body-sm">
                  Equipment Type
                </label>
                <select className="w-full border-outline-variant text-body-sm focus:border-industrial-green focus:ring-industrial-green">
                  <option>Select Industry...</option>
                  <option>Automotive</option>
                  <option>Marine</option>
                  <option>Industrial Manufacturing</option>
                </select>
              </div>
              <button className="flex w-full items-center justify-center gap-2 rounded bg-industrial-green py-3 font-label-bold text-safety-white transition-colors hover:bg-primary">
                <span className="material-symbols-outlined text-sm">search</span>{" "}
                RUN FINDER TOOL
              </button>
              <a
                href="#"
                className="block text-center font-body-sm text-body-sm text-on-surface-variant hover:underline"
              >
                Advanced technical search
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
