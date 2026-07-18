import { IMAGES } from "../data";

function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`} style={{ fontVariationSettings: "'FILL' 1" }}>
      {name}
    </span>
  );
}

const WHY_FEATURES = [
  {
    title: "Made in Germany",
    desc: "All products are manufactured in Germany with strict quality control.",
    icon: "factory",
    grad: "from-carbon-gray to-on-surface",
  },
  {
    title: "OEM Approvals",
    desc: "Products meet international standards: API, ACEA, OEM specifications.",
    icon: "verified",
    grad: "from-primary to-primary-container",
  },
  {
    title: "Worldwide Shipping",
    desc: "Container shipping to ports worldwide via reliable logistics partners.",
    icon: "public",
    grad: "from-industrial-green to-primary",
  },
  {
    title: "Competitive Prices",
    desc: "Direct from manufacturer – no middlemen, best wholesale prices.",
    icon: "savings",
    grad: "from-primary to-industrial-green",
  },
];

const CONTAINERS = [
  {
    title: "20-Foot Container",
    sub: "Standard Dry Container (TEU)",
    accent: "from-primary to-primary-container",
    highlight: false,
    dims: "5.90 m × 2.35 m × 2.39 m",
    points: [
      "Up to 11 Euro pallets (120×80 cm)",
      "Max. payload: ~21,700 kg",
      "Ideal for: First orders, market tests",
      "Mixed product configuration possible",
    ],
    calc: "approx. 6,300 units",
  },
  {
    title: "40-Foot Container",
    sub: "High Cube Container (FEU)",
    accent: "from-industrial-green to-primary",
    highlight: true,
    badge: "BEST VALUE",
    dims: "12.03 m × 2.35 m × 2.69 m",
    points: [
      "Up to 22–24 Euro pallets (120×80 cm)",
      "Max. payload: ~26,500 kg",
      "Ideal for: Established distributors",
      "Optimized unit price for bulk orders",
    ],
    calc: "approx. 12,600 units",
  },
];

const EXPORT_PRODUCTS = [
  {
    title: "Car Motor Oil",
    icon: "directions_car",
    points: ["5W-30, 5W-40, 10W-40", "HC-Synthesis & Mineral Oil", "API SN/SP, ACEA A3/B4, C3", "VW, BMW, MB Approvals"],
    to: "/car-motor",
  },
  {
    title: "Truck Motor Oil",
    icon: "local_shipping",
    points: ["10W-40, 15W-40, 5W-30", "For trucks, buses, construction", "API CI-4, CK-4, ACEA E6/E9", "MAN, Volvo, Scania Specs"],
    to: "/heavy-duty-fleet",
  },
  {
    title: "Gear Oil",
    icon: "settings",
    points: ["75W-90, 80W-90", "Manual & automatic transmissions", "API GL-4, GL-5", "ATF oils available"],
    to: "/gear-oil",
  },
  {
    title: "Hydraulic Oil",
    icon: "water_drop",
    points: ["HLP 32, 46, 68", "Industrial hydraulic systems", "DIN 51524 Part 2", "Excellent wear protection"],
    to: "/hydraulic-oil",
  },
  {
    title: "Antifreeze / Coolant",
    icon: "ac_unit",
    points: ["G11, G12, G13 specifications", "Concentrate & ready-to-use", "Protection down to -40°C", "All vehicle types"],
    to: "/antifreeze",
  },
  {
    title: "Private Label / OEM",
    icon: "science",
    private: true,
    points: ["Custom packaging & labeling", "For larger orders", "Brand your own lubricant", "Tailored formulations"],
    to: "/b2b-customers",
  },
];

const EXPORT_STEPS = [
  { n: "1", title: "Inquiry", desc: "Send your product requirements and destination." },
  { n: "2", title: "Quote", desc: "Receive detailed quote with CIF/FOB prices." },
  { n: "3", title: "Order & Payment", desc: "Confirm order, payment via T/T or L/C." },
  { n: "4", title: "Production", desc: "Manufacturing & quality control (2-3 weeks)." },
  { n: "5", title: "Shipping", desc: "FCL container shipped to your port worldwide." },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-carbon-gray via-primary to-carbon-gray py-24 text-safety-white">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      }} />
      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-industrial-green px-4 py-2 font-semibold text-safety-white">
              <Icon name="public" /> International Export
            </div>
            <h1 className="mb-6 font-display-lg text-display-lg leading-tight">
              German Quality <span className="text-surface-container-lowest">Worldwide</span>
            </h1>
            <p className="mb-8 font-body-lg text-body-lg text-surface-container-lowest/90 opacity-90">
              Premium lubricants from Germany – global export. Become a partner for high-quality
              LUBRI-TECH brand products.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-industrial-green px-8 py-4 font-label-bold text-label-bold text-safety-white transition-all hover:bg-primary"
              >
                <Icon name="send" /> Request Quote
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-safety-white px-8 py-4 font-label-bold text-label-bold text-safety-white transition-all hover:bg-safety-white hover:text-on-surface"
              >
                <Icon name="inventory_2" /> View Products
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl border border-white/25 bg-white/10 p-8 text-center backdrop-blur">
              <Icon name="sailing" className="mb-4 text-6xl text-industrial-green" />
              <h2 className="mb-4 font-headline-md text-headline-md">Minimum Order</h2>
              <div className="mb-4 inline-flex items-baseline gap-2 rounded-xl bg-industrial-green px-8 py-4 text-on-surface">
                <span className="text-4xl font-bold leading-none">1</span>
                <span className="text-xl font-semibold leading-none">Container</span>
              </div>
              <p className="font-body-md opacity-90">20-foot or 40-foot containers available</p>
              <p className="mt-2 text-sm opacity-75">FCL (Full Container Load) shipping worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Notice() {
  return (
    <section className="bg-industrial-green py-8 text-safety-white">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-center gap-4 px-margin-mobile md:flex-row md:px-margin-desktop">
        <Icon name="warning" className="text-3xl" />
        <p className="text-center font-semibold md:text-left">
          <strong>Important:</strong> For international orders, the minimum purchase is 1 full container
          (20-foot or 40-foot). Contact us for smaller quantities within the EU.
        </p>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="bg-safety-white py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">
            Why LUBRI-TECH?
          </h2>
          <p className="mx-auto max-w-2xl font-body-md text-on-surface-variant">
            Your reliable partner for premium lubricants from Germany – trusted worldwide by international distributors.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {WHY_FEATURES.map((item) => (
            <div key={item.title} className="text-center">
              <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${item.grad} text-safety-white`}>
                <Icon name={item.icon} className="text-3xl" />
              </div>
              <h3 className="mb-2 font-headline-md text-headline-md text-on-surface">{item.title}</h3>
              <p className="font-body-sm text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContainersSection() {
  return (
    <section className="bg-surface-subtle py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">Container Options</h2>
          <p className="mx-auto max-w-2xl font-body-md text-on-surface-variant">
            We offer flexible container options for your business requirements.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {CONTAINERS.map((c) => (
            <div
              key={c.title}
              className={`overflow-hidden rounded-2xl bg-safety-white shadow-xl ${
                c.highlight ? "border-2 border-industrial-green" : ""
              }`}
            >
              <div className={`bg-gradient-to-r ${c.accent} px-8 py-6 text-safety-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-headline-md text-headline-md">{c.title}</h3>
                    <p className="opacity-90">{c.sub}</p>
                  </div>
                  {c.badge && (
                    <span className="rounded-full bg-on-surface px-3 py-1 text-sm font-semibold text-industrial-green">
                      {c.badge}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-8">
                <div className="mb-4 border-b border-outline-variant pb-4">
                  <p className="mb-1 text-xs uppercase tracking-wide text-on-surface-variant">
                    Interior Dimensions (L×W×H)
                  </p>
                  <p className="font-semibold text-on-surface">{c.dims}</p>
                </div>
                <ul className="space-y-4">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center">
                      <Icon name="check_circle" className="mr-3 text-primary" />
                      <span className="font-body-sm text-on-surface">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="-mx-8 -mb-8 mt-6 border-t border-outline-variant bg-surface-subtle px-8 py-6">
                  <p className="mb-2 font-body-sm text-on-surface-variant">
                    <strong>Example calculation (1L bottles):</strong>
                  </p>
                  <p className="font-body-sm text-on-surface-variant">
                    {c.calc} <span className="text-xs text-on-surface-variant">*Depending on product type and stacking height</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <div className="rounded-xl bg-primary-container p-6">
            <Icon name="info" className="mb-3 text-2xl text-on-primary-container" />
            <p className="font-body-md text-on-primary-container">
              <strong>Flexible Product Mix:</strong> You can combine different products (motor oil, gear oil,
              hydraulic oil, etc.) in one container. Contact us with your requirements for a customized quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="bg-safety-white py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">Products Available for Export</h2>
          <p className="mx-auto max-w-2xl font-body-md text-on-surface-variant">
            Our complete range of LUBRI-TECH brand lubricants – all Made in Germany.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {EXPORT_PRODUCTS.map((item) => (
            <div
              key={item.title}
              className={`rounded-xl p-6 transition-shadow hover:shadow-lg ${
                item.private
                  ? "bg-gradient-to-br from-primary to-primary-container text-safety-white"
                  : "bg-surface-subtle"
              }`}
            >
              <div className="mb-4 flex items-center">
                <div
                  className={`mr-4 flex h-14 w-14 items-center justify-center rounded-lg ${
                    item.private ? "bg-white/20" : "bg-primary-container"
                  }`}
                >
                  <Icon
                    name={item.icon}
                    className={item.private ? "text-2xl" : "text-2xl text-primary"}
                  />
                </div>
                <h3 className={`font-headline-md text-headline-md ${item.private ? "" : "text-on-surface"}`}>
                  {item.title}
                </h3>
              </div>
              <ul className={`mb-4 space-y-2 font-body-sm ${item.private ? "text-surface-container-lowest/90" : "text-on-surface-variant"}`}>
                {item.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <a
                href={item.to}
                className={`inline-flex items-center font-semibold ${
                  item.private ? "text-surface-container-lowest hover:text-safety-white" : "text-primary hover:text-industrial-green"
                }`}
              >
                {item.private ? "Contact Us" : "View All"} <Icon name="arrow_forward" className="ml-2 text-sm" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExportProcess() {
  return (
    <section className="bg-gradient-to-br from-carbon-gray to-primary py-section-gap text-safety-white">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline-lg text-headline-lg">Export Process</h2>
          <p className="mx-auto max-w-2xl font-body-md text-surface-container-lowest/90 opacity-90">
            Simple steps to become our international partner.
          </p>
        </div>
        <div className="hidden items-stretch justify-between gap-4 md:flex">
          {EXPORT_STEPS.map((step, i) => (
            <div key={step.n} className="flex flex-1 items-center">
              <div className="flex-1 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-industrial-green text-2xl font-bold text-on-surface">
                  {step.n}
                </div>
                <h3 className="font-bold">{step.title}</h3>
                <p className="text-sm text-surface-container-lowest/80 opacity-90">{step.desc}</p>
              </div>
              {i < EXPORT_STEPS.length - 1 && (
                <Icon name="arrow_forward" className="px-2 text-2xl text-surface-container-lowest/40" />
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 md:hidden">
          {EXPORT_STEPS.map((step) => (
            <div key={step.n} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-industrial-green text-2xl font-bold text-on-surface">
                {step.n}
              </div>
              <h3 className="font-bold">{step.title}</h3>
              <p className="text-sm text-surface-container-lowest/80 opacity-90">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-safety-white py-section-gap">
      <div className="mx-auto max-w-4xl px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Request Your Export Quote</h2>
          <p className="mt-2 font-body-md text-on-surface-variant">
            Contact us for a non-binding offer. We will get back to you within 24 hours.
          </p>
        </div>
        <a
          href="/b2b-customers"
          className="mx-auto flex w-max items-center gap-2 rounded-lg bg-industrial-green px-8 py-4 font-label-bold text-label-bold text-safety-white transition-all hover:bg-primary"
        >
          <Icon name="send" /> Contact Our Export Team
        </a>
      </div>
    </section>
  );
}

export default function International() {
  return (
    <main className="pt-20">
      <Hero />
      <Notice />
      <WhySection />
      <ContainersSection />
      <ProductsSection />
      <ExportProcess />
      <ContactSection />
    </main>
  );
}
