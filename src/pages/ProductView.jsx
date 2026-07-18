import { useParams, Link, useNavigate } from "react-router-dom";
import { IMAGES, PRODUCTS, getProductDetail } from "../data";
function Icon({ name, className = "" }) {
  const filled = name === "shield" || name === "speed" || name === "science" || name === "build";
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}

function ProductHero({ product, detail }) {
  return (
    <div className="mb-section-gap grid grid-cols-1 items-start gap-section-gap lg:grid-cols-2">
      <div className="relative flex aspect-square items-center justify-center border border-outline-variant bg-white p-12">
        <img
          src={IMAGES[product.image]}
          alt={detail.title}
          className="h-full w-full object-contain"
        />
        <div className="absolute left-6 top-6 flex flex-col gap-2">
          {detail.badges.map((b) => (
            <span
              key={b.label}
              className={`rounded px-3 py-1 font-label-bold text-label-bold ${b.class}`}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="mb-4 whitespace-nowrap font-headline-lg text-headline-lg font-extrabold text-on-surface">
          {detail.title}
        </h1>
        <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
          {detail.intro}
        </p>

        <div className="mb-10 grid grid-cols-1 gap-gutter sm:grid-cols-2">
          {detail.benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-primary-container">
                <Icon name={b.icon} className="text-on-primary-container" />
              </div>
              <div>
                <h4 className="font-label-bold text-label-bold text-on-surface">
                  {b.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 border-t border-outline-variant pt-6">
          <button className="flex items-center gap-2 rounded bg-industrial-green px-8 py-4 font-label-bold text-label-bold text-white transition-all hover:bg-primary">
            <Icon name="shopping_cart" /> Where to buy
          </button>
          <button className="flex items-center gap-2 rounded border border-industrial-green px-8 py-4 font-label-bold text-label-bold text-industrial-green transition-all hover:bg-surface-container">
            <Icon name="location_on" /> Find a distributor
          </button>
        </div>
      </div>
    </div>
  );
}

function SpecsSection({ detail }) {
  return (
    <section className="mb-section-gap">
      <div className="mb-8">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Technical Specifications
        </h2>
        <div className="mt-2 h-1 w-20 bg-industrial-green" />
      </div>

      <div className="overflow-x-auto rounded-lg border border-outline-variant">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-carbon-gray text-white">
              {["Characteristic", "Method", "Unit", "Typical Value"].map((h) => (
                <th key={h} className="px-6 py-4 font-label-bold text-label-bold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-table-data text-on-surface text-table-data">
            {detail.specs.map((row, i) => (
              <tr key={row.characteristic} className={i % 2 === 1 ? "bg-background" : "bg-white"}>
                <td className="px-6 py-4">{row.characteristic}</td>
                <td className="px-6 py-4">{row.method}</td>
                <td className="px-6 py-4">{row.unit}</td>
                <td className="px-6 py-4">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-gutter md:grid-cols-3">
        <div className="rounded border border-outline-variant bg-surface-subtle p-6">
          <h5 className="mb-2 font-label-bold text-label-bold">Compliance Standards</h5>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {detail.compliance}
          </p>
        </div>
        <div className="rounded border border-outline-variant bg-surface-subtle p-6">
          <h5 className="mb-2 font-label-bold text-label-bold">PDS / MSDS</h5>
          <a
            href="#"
            className="flex items-center gap-2 font-label-bold text-industrial-green text-label-bold hover:underline"
          >
            <Icon name="download" /> Download Data Sheets
          </a>
        </div>
        <div className="rounded border border-outline-variant bg-surface-subtle p-6">
          <h5 className="mb-2 font-label-bold text-label-bold">Technical Support</h5>
          <a
            href="#"
            className="flex items-center gap-2 font-label-bold text-industrial-green text-label-bold hover:underline"
          >
            <Icon name="support_agent" /> Contact Engineering
          </a>
        </div>
      </div>
    </section>
  );
}

function RelatedSection({ detail }) {
  const featured = detail.related.find((r) => r.type === "featured");
  const row = detail.related.find((r) => r.type === "row");
  const icons = detail.related.filter((r) => r.type === "icon");

  return (
    <section className="mb-section-gap">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Related Solutions
          </h2>
          <div className="mt-2 h-1 w-20 bg-industrial-green" />
        </div>
        <Link
          to="/products"
          className="font-label-bold text-industrial-green text-label-bold hover:underline"
        >
          View All Products
        </Link>
      </div>

      <div className="grid h-auto grid-cols-1 grid-rows-2 gap-gutter md:h-[500px] md:grid-cols-4">
        <div className="group relative overflow-hidden border border-outline-variant bg-white md:col-span-2 md:row-span-2">
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${IMAGES[featured.image]}')` }}
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8">
            <span className="mb-2 font-label-bold text-label-bold text-primary-fixed">
              {featured.brand}
            </span>
            <h3 className="mb-2 font-headline-md text-headline-md text-white">
              {featured.tag}
            </h3>
            <p className="mb-6 max-w-md font-body-sm text-body-sm text-white/80">
              {featured.desc}
            </p>
            <button className="w-max rounded bg-white px-6 py-2 font-label-bold text-label-bold text-on-surface transition-colors hover:bg-industrial-green hover:text-white">
              Explore
            </button>
          </div>
        </div>

        <div className="group flex flex-col border border-outline-variant bg-white sm:flex-row md:col-span-2">
          <div className="w-full overflow-hidden sm:w-1/3">
            <img
              src={IMAGES[row.image]}
              alt={row.tag}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center p-6">
            <h4 className="mb-2 font-label-bold text-label-bold text-on-surface">
              {row.tag}
            </h4>
            <p className="mb-4 font-body-sm text-body-sm text-on-surface-variant">
              {row.desc}
            </p>
            <a
              href="#"
              className="group/link flex items-center gap-1 font-label-bold text-industrial-green text-label-bold"
            >
              Learn more{" "}
              <Icon name="arrow_forward" className="text-sm transition-transform group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>

        {icons.map((item) => (
          <div
            key={item.tag}
            className="flex flex-col border border-outline-variant bg-surface-container-low p-6"
          >
            <div className="mb-4">
              <Icon name={item.icon} className="text-3xl text-primary" />
            </div>
            <h4 className="mb-2 font-label-bold text-label-bold text-on-surface">
              {item.tag}
            </h4>
            <p className="mb-6 font-body-sm text-body-sm text-on-surface-variant">
              {item.desc}
            </p>
            <Link
              to={`/products/${item.slug}`}
              className="group/link mt-auto flex items-center gap-1 font-label-bold text-industrial-green text-label-bold"
            >
              Details{" "}
              <Icon name="arrow_forward" className="text-sm transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductView() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const detail = getProductDetail(slug);

  return (
    <>
      <main className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop">
        <nav className="mb-8 flex gap-2 font-body-sm text-body-sm text-on-surface-variant">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">
            Products
          </Link>
          <span>/</span>
          <span className="font-semibold text-on-surface">{detail.title}</span>
        </nav>

        {product && (
          <button
            onClick={() => navigate("/products")}
            className="mb-6 flex items-center gap-1 font-label-bold text-label-bold text-on-surface-variant hover:text-primary"
          >
            <Icon name="arrow_back" className="text-sm" /> Back to catalog
          </button>
        )}

        <ProductHero product={product || { image: "productDrum" }} detail={detail} />
        <SpecsSection detail={detail} />
        <RelatedSection detail={detail} />
      </main>
    </>
  );
}
