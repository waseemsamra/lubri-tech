import { useNavigate } from "react-router-dom";
import {
  IMAGES,
  PRODUCTS,
  CATALOG_FILTERS,
  PRODUCT_SPECS,
  CATALOG_SORT_OPTIONS,
} from "../data";

function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`} data-icon={name}>
      {name}
    </span>
  );
}

function CatalogHero() {
  return (
    <section className="relative flex h-[400px] w-full items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.productsHero}
          alt="Industrial Gear Oil Application"
          className="h-full w-full object-cover brightness-[0.4]"
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded bg-industrial-green px-3 py-1 font-label-bold text-label-bold text-safety-white">
            ELAT™ PREMIUM LINE
          </span>
          <h1 className="mb-6 font-display-lg text-display-lg leading-tight text-safety-white">
            Industrial Lubricant Solutions
          </h1>
          <p className="mb-8 max-w-xl font-body-lg text-body-lg text-surface-container-lowest opacity-90">
            German-engineered high-performance lubricants designed for maximum
            component protection and extended service intervals in demanding
            automotive and industrial environments.
          </p>
          <div className="flex gap-4">
            <button className="rounded bg-industrial-green px-8 py-3 font-label-bold text-safety-white transition-all hover:bg-primary-container">
              Request Quote
            </button>
            <button className="rounded border border-safety-white px-8 py-3 font-label-bold text-safety-white transition-all hover:bg-safety-white hover:text-carbon-gray">
              Oil Guide Tool
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterSidebar() {
  return (
    <aside className="w-full flex-shrink-0 space-y-8 lg:w-72">
      {CATALOG_FILTERS.map((group) => (
        <div key={group.title}>
          <h3 className="mb-4 font-label-bold text-label-bold uppercase tracking-widest text-on-surface-variant">
            {group.title}
          </h3>
          <div className="space-y-3">
            {group.options.map((opt, i) => (
              <label
                key={opt}
                className="group flex cursor-pointer items-center gap-3"
              >
                <input
                  type={group.isCategory ? "radio" : "checkbox"}
                  defaultChecked={group.isCategory && i === 0}
                  name={group.isCategory ? "category" : undefined}
                  className="h-5 w-5 border-outline text-industrial-green focus:ring-industrial-green"
                />
                <span className="font-body-md text-on-surface transition-colors group-hover:text-primary">
                  {opt}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-lg border border-outline-variant bg-surface-container p-6">
        <Icon name="description" className="mb-4 text-industrial-green" />
        <h4 className="mb-2 font-headline-md text-headline-md">Technical Data</h4>
        <p className="mb-4 font-body-sm text-body-sm text-on-surface-variant">
          Access detailed PDS and MSDS documentation for all ELAT products.
        </p>
        <a className="font-label-bold text-industrial-green hover:underline" href="#">
          Download Archive →
        </a>
      </div>
    </aside>
  );
}

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="group flex h-full flex-col rounded border border-outline-variant bg-safety-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          src={IMAGES[product.image]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <div
            className={`absolute left-4 top-4 rounded px-2 py-1 text-[10px] font-bold uppercase text-safety-white ${product.badgeClass}`}
          >
            {product.badge}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-headline-md text-headline-md leading-tight">
          {product.name}
        </h3>
        <p className="mb-4 line-clamp-2 font-body-sm text-on-surface-variant">
          {product.desc}
        </p>
        <div className="mb-6 flex-1 space-y-2">
          {product.specs.map((s) => (
            <div
              key={s.k}
              className="flex justify-between border-b border-outline-variant pb-1 text-[12px]"
            >
              <span className="font-bold uppercase text-on-surface-variant">{s.k}</span>
              <span>{s.v}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate(`/products/${product.slug}`)}
          className="w-full rounded border border-industrial-green py-3 font-label-bold text-industrial-green transition-colors hover:bg-industrial-green hover:text-safety-white"
        >
          Technical Specs
        </button>
      </div>
    </div>
  );
}

function ExportCard() {
  return (
    <div className="transform rounded border border-carbon-gray bg-carbon-gray p-8 shadow-lg transition-all hover:-translate-y-1">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-industrial-green">
        <Icon name="language" className="text-3xl text-safety-white" />
      </div>
      <h3 className="mb-4 font-headline-md text-headline-md text-safety-white">
        Export Inquiries
      </h3>
      <p className="mb-6 font-body-sm text-surface-dim">
        Global container shipments (20ft/40ft) and private label solutions
        available for international partners.
      </p>
      <button className="rounded bg-safety-white px-6 py-2 font-label-bold text-carbon-gray transition-all hover:bg-industrial-green hover:text-safety-white">
        Export Portal
      </button>
    </div>
  );
}

function CatalogGrid() {
  return (
    <div className="flex-1">
      <div className="mb-8 flex items-end justify-between border-b border-outline-variant pb-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-carbon-gray">
            Core Product Range
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Showing 12 of 48 technical lubricant solutions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-label-bold text-body-sm">Sort by:</span>
          <select className="cursor-pointer border-none bg-transparent font-label-bold text-body-sm focus:ring-0">
            {CATALOG_SORT_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
        <ExportCard />
      </div>
    </div>
  );
}

function ComparisonTable() {
  return (
    <section className="bg-surface-subtle py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-headline-lg text-headline-lg">
            Technical Specification Matrix
          </h2>
          <p className="mx-auto max-w-2xl font-body-lg text-on-surface-variant">
            Cross-reference our primary formulations with international standards
            and OEM requirements for precise application management.
          </p>
        </div>
        <div className="overflow-x-auto rounded-lg border border-outline-variant bg-safety-white">
          <table className="w-full text-left font-table-data text-table-data">
            <thead className="bg-carbon-gray text-safety-white">
              <tr>
                {[
                  "Product Name",
                  "Viscosity Grade",
                  "Base Oil Type",
                  "Key Approval",
                  "Flash Point (°C)",
                ].map((h) => (
                  <th key={h} className="p-4 text-[12px] font-label-bold uppercase tracking-widest">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRODUCT_SPECS.map((row, i) => (
                <tr key={row.name} className={i % 2 === 1 ? "bg-background" : "bg-safety-white"}>
                  <td className="p-4 font-semibold">{row.name}</td>
                  <td className="p-4">{row.viscosity}</td>
                  <td className="p-4">{row.base}</td>
                  <td className="p-4">{row.approval}</td>
                  <td className="p-4">{row.flash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function BulkCTA() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="relative flex flex-col items-center gap-12 overflow-hidden rounded-xl bg-industrial-green p-8 text-safety-white md:flex-row md:p-16">
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
          <img src={IMAGES.catalogTruck} alt="Truck Overlay" className="h-full w-full object-cover" />
        </div>
        <div className="relative z-10 flex-1">
          <h2 className="mb-6 font-display-lg leading-tight text-headline-lg md:text-display-lg">
            Scale Your Operation with Velocity Bulk Solutions
          </h2>
          <p className="mb-8 font-body-lg opacity-90">
            Specialized pricing and logistics for workshop chains, freight fleets,
            and industrial manufacturing plants. Container orders and direct tanker
            delivery options available globally.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:info@gtl-gmbh.eu"
              className="rounded bg-safety-white px-8 py-4 font-label-bold text-industrial-green shadow-lg transition-all hover:bg-surface-subtle"
            >
              Request B2B Quotation
            </a>
            <a
              href="#"
              className="rounded border border-safety-white px-8 py-4 font-label-bold transition-all hover:bg-safety-white/10"
            >
              International Export Specs
            </a>
          </div>
        </div>
        <div className="relative z-10 w-full rounded-lg bg-safety-white p-8 text-carbon-gray shadow-2xl md:w-auto">
          <div className="space-y-4">
            {[
              ["verified", "ISO 9001:2015 Certified"],
              ["shuffle", "24-48h Delivery Germany"],
              ["inventory_2", "1000L IBC Stocked"],
            ].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-3">
                <Icon name={icon} className="text-industrial-green" />
                <span className="font-label-bold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Products() {
  return (
    <main className="min-h-screen">
      <CatalogHero />
      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="flex flex-col gap-gutter lg:flex-row">
          <FilterSidebar />
          <CatalogGrid />
        </div>
      </section>
      <ComparisonTable />
      <BulkCTA />
    </main>
  );
}
