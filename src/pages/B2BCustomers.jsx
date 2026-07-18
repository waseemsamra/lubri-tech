import { IMAGES } from "../data";

function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`} style={{ fontVariationSettings: "'FILL' 1" }}>
      {name}
    </span>
  );
}

const AUDIENCES = [
  {
    title: "Workshops",
    desc: "Car dealership workshops, independent workshops and service centres.",
    icon: "build",
    tint: "bg-primary-container",
    iconColor: "text-on-primary-container",
  },
  {
    title: "Dealers",
    desc: "Auto parts dealers, wholesalers and online shops.",
    icon: "storefront",
    tint: "bg-industrial-green/15",
    iconColor: "text-industrial-green",
  },
  {
    title: "Industry",
    desc: "Production facilities, mechanical engineering and logistics.",
    icon: "factory",
    tint: "bg-carbon-gray/10",
    iconColor: "text-carbon-gray",
  },
  {
    title: "Vehicle Fleets",
    desc: "Freight companies, bus operators and vehicle fleets.",
    icon: "local_shipping",
    tint: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const BENEFITS = [
  {
    title: "Attractive Wholesale Prices",
    desc: "Benefit from tiered discounts and exclusive conditions for regular orders.",
    icon: "sell",
    grad: "from-primary to-primary-container",
  },
  {
    title: "Fast Delivery",
    desc: "Short delivery times through efficient logistics. Orders are delivered within 3-5 business days.",
    icon: "local_shipping",
    grad: "from-industrial-green to-primary",
  },
  {
    title: "Personal Contact",
    desc: "Your dedicated account manager is available for all questions.",
    icon: "support_agent",
    grad: "from-primary to-primary-container",
  },
  {
    title: "Premium Quality",
    desc: "High-quality lubricants of the LUBRI-TECH brand – Made in Germany with all common OEM approvals.",
    icon: "verified",
    grad: "from-industrial-green to-primary",
  },
  {
    title: "Flexible Payment Terms",
    desc: "Individual payment conditions by arrangement. We find the right solution for you.",
    icon: "receipt_long",
    grad: "from-primary to-primary-container",
  },
  {
    title: "Technical Support",
    desc: "Expert advice on product questions and technical applications. We support you competently.",
    icon: "headset_mic",
    grad: "from-industrial-green to-primary",
  },
];

const PRODUCT_RANGE = [
  { label: "Car Motor Oil", icon: "directions_car", to: "/car-motor" },
  { label: "Truck Motor Oil", icon: "local_shipping", to: "/heavy-duty-fleet" },
  { label: "Gear Oil", icon: "settings", to: "/gear-oil" },
  { label: "Hydraulic Oil", icon: "water_drop", to: "/hydraulic-oil" },
  { label: "Antifreeze", icon: "ac_unit", to: "/antifreeze" },
];

const STEPS = [
  { n: "1", title: "Send Enquiry", desc: "Fill out the contact form or call us." },
  { n: "2", title: "Consultation", desc: "We discuss your needs and create a customised offer." },
  { n: "3", title: "Agree Terms", desc: "Together we define prices, delivery schedule and payment terms." },
  { n: "4", title: "Start Partnership", desc: "You receive access to your customer account and can start ordering." },
];

const FAQS = [
  {
    q: "What is the minimum order quantity?",
    a: "There is no minimum order quantity for B2B customers. We are happy to advise you on economical order sizes.",
  },
  {
    q: "How quickly is delivery made?",
    a: "Standard deliveries are made within 3-5 business days. Express deliveries are available on request.",
  },
  {
    q: "What payment methods are available?",
    a: "We offer payment by bank transfer, advance payment and by arrangement also payment on invoice with payment terms.",
  },
  {
    q: "Are technical data sheets available?",
    a: "Yes, we provide technical data sheets and safety data sheets for all our products.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-industrial-green via-primary to-industrial-green py-20 text-safety-white">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />
      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
            <Icon name="handshake" />
            <span className="font-medium">B2B Partnership</span>
          </div>
          <h1 className="mb-6 font-display-lg text-display-lg leading-tight">
            Become Our <span className="text-surface-container-lowest">B2B Partner</span>
          </h1>
          <p className="mb-8 max-w-3xl font-body-lg text-body-lg text-surface-container-lowest/90 opacity-90">
            Benefit from premium lubricants of the LUBRI-TECH brand – directly from the
            manufacturer. Attractive conditions for workshops, dealers and bulk buyers.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-safety-white px-8 py-4 font-label-bold text-label-bold text-primary transition-all hover:bg-surface-container"
            >
              <Icon name="send" /> Become a Partner Now
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-safety-white px-8 py-4 font-label-bold text-label-bold text-safety-white transition-all hover:bg-safety-white hover:text-primary"
            >
              <Icon name="arrow_downward" /> Discover Benefits
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section className="bg-safety-white py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">
            Who is our B2B program for?
          </h2>
          <p className="mx-auto max-w-2xl font-body-md text-on-surface-variant">
            We work with various business customers and offer tailored solutions for every need.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-surface-subtle p-6 text-center transition-shadow hover:shadow-lg"
            >
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${item.tint}`}>
                <Icon name={item.icon} className={`text-2xl ${item.iconColor}`} />
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

function Benefits() {
  return (
    <section id="benefits" className="bg-surface-subtle py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-primary-container px-4 py-2 font-label-bold text-label-bold text-on-primary-container">
            Your Benefits
          </div>
          <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">Why Work With Us?</h2>
          <p className="mx-auto max-w-2xl font-body-md text-on-surface-variant">
            As a direct partner, you benefit from numerous advantages that advance your business.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-outline-variant bg-safety-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${item.grad} text-safety-white`}>
                <Icon name={item.icon} />
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

function ProductRange() {
  return (
    <section className="bg-safety-white py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">Our Product Range</h2>
          <p className="mx-auto max-w-2xl font-body-md text-on-surface-variant">
            Comprehensive range of premium lubricants for all applications.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {PRODUCT_RANGE.map((item) => (
            <a
              key={item.label}
              href={item.to}
              className="group rounded-lg bg-surface-subtle p-6 text-center transition-all hover:bg-primary-container hover:shadow-md"
            >
              <Icon name={item.icon} className="mb-3 text-3xl text-primary transition-transform group-hover:scale-110" />
              <h3 className="font-label-bold text-label-bold text-on-surface">{item.label}</h3>
            </a>
          ))}
          <a
            href="/products"
            className="group rounded-lg bg-primary p-6 text-center text-safety-white transition-all hover:bg-primary-container"
          >
            <Icon name="grid_view" className="mb-3 text-3xl transition-transform group-hover:scale-110" />
            <h3 className="font-label-bold text-label-bold">All Products</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-gradient-to-br from-industrial-green to-primary py-section-gap text-safety-white">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline-lg text-headline-lg">How to Become Our Partner</h2>
          <p className="mx-auto max-w-2xl font-body-md text-surface-container-lowest/90 opacity-90">
            Become a successful B2B partner in just a few steps.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.n} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-safety-white text-2xl font-bold text-primary">
                {step.n}
              </div>
              <h3 className="mb-2 font-headline-md text-headline-md">{step.title}</h3>
              <p className="font-body-sm text-surface-container-lowest/90 opacity-90">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-safety-white py-section-gap">
      <div className="mx-auto max-w-3xl px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <div key={f.q} className="rounded-lg bg-surface-subtle p-6">
              <h3 className="mb-2 font-headline-md text-headline-md text-on-surface">{f.q}</h3>
              <p className="font-body-sm text-on-surface-variant">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function B2BCustomers() {
  return (
    <main className="pt-20">
      <Hero />
      <Audiences />
      <Benefits />
      <ProductRange />
      <HowItWorks />
      <Faq />
    </main>
  );
}
