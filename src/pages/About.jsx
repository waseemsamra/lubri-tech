import { useEffect, useRef } from "react";
import { IMAGES, FOOTER_COLUMNS } from "../data";
import Footer from "../components/Footer";

function Icon({ name, className = "" }) {
  const filled = ["check_circle", "flag", "public", "eco", "rocket_launch"].includes(name);
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative flex h-[614px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.aboutHero}
          alt="Industrial manufacturing plant"
          className="h-full w-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/90 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl">
          <span className="mb-4 block font-label-bold text-label-bold uppercase tracking-widest text-primary-fixed-dim">
            Engineering Excellence Since 1999
          </span>
          <h1 className="mb-6 font-display-lg text-display-lg text-safety-white">
            Pioneering High-Performance Industrial Lubrication
          </h1>
          <p className="max-w-xl font-body-lg text-body-lg text-surface-variant">
            Velocity Industrial, now LUBRI-TECH, has been the backbone of heavy
            machinery for over two decades, delivering precision-engineered
            solutions for the world's most demanding environments.
          </p>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <div className="flex flex-col justify-between border border-outline-variant bg-surface-container-low p-10 md:col-span-8">
          <div>
            <h2 className="mb-6 font-headline-lg text-headline-lg">Our Mission</h2>
            <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
              To accelerate industrial productivity through advanced molecular
              engineering. We don't just supply oil; we provide the mechanical
              integrity that keeps the world's infrastructure moving forward
              without friction.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 border-t border-outline-variant pt-8 md:grid-cols-3">
            <div>
              <div className="font-headline-md text-headline-md text-primary">25+</div>
              <div className="font-label-bold text-label-bold text-tertiary">YEARS OF INNOVATION</div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary">500+</div>
              <div className="font-label-bold text-label-bold text-tertiary">PROPRIETARY FORMULAS</div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary">12k+</div>
              <div className="font-label-bold text-label-bold text-tertiary">CLIENTS GLOBALLY</div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden bg-inverse-surface p-10 text-safety-white md:col-span-4">
          <Icon
            name="precision_manufacturing"
            className="mb-6 text-6xl opacity-40 text-primary-fixed-dim"
          />
          <h3 className="mb-4 font-headline-md text-headline-md">The Velocity Edge</h3>
          <ul className="space-y-4">
            {["Molecular Stability Testing", "Extreme Pressure Additives", "24/7 Field Engineering Support"].map(
              (item) => (
                <li key={item} className="flex items-start gap-3">
                  <Icon name="check_circle" className="pt-1 text-primary-fixed-dim" />
                  <span className="font-body-md text-body-md">{item}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function GlobalPresence() {
  return (
    <section className="bg-surface-subtle py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 flex flex-col items-end gap-gutter md:flex-row">
          <div className="md:w-1/2">
            <h2 className="mb-4 font-headline-lg text-headline-lg">Global Reach, Local Impact</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Headquartered in Houston, our logistics network spans six
              continents. We maintain regional technical centers in key
              industrial hubs to ensure immediate technical support and delivery.
            </p>
          </div>
          <div className="flex justify-end gap-8 md:w-1/2">
            <div className="text-center">
              <span className="block font-headline-md text-headline-md">45</span>
              <span className="font-label-bold text-label-bold text-tertiary uppercase">Countries</span>
            </div>
            <div className="border-l border-outline-variant pl-8 text-center">
              <span className="block font-headline-md text-headline-md">12</span>
              <span className="font-label-bold text-label-bold text-tertiary uppercase">R&amp;D Centers</span>
            </div>
            <div className="border-l border-outline-variant pl-8 text-center">
              <span className="block font-headline-md text-headline-md">300+</span>
              <span className="font-label-bold text-label-bold text-tertiary uppercase">Distributors</span>
            </div>
          </div>
        </div>

        <div className="group relative aspect-video w-full overflow-hidden border border-outline-variant bg-surface md:aspect-[21/9]">
          <img
            src={IMAGES.globalMap}
            alt="Global distribution network"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 mix-blend-overlay bg-primary/10" />

          <div className="absolute left-1/4 top-1/3 transition-transform group-hover:scale-110">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-primary" />
              <div className="relative h-4 w-4 rounded-full border-2 border-white bg-primary" />
              <div className="absolute left-1/2 top-full ml-[-50%] mt-2 whitespace-nowrap rounded bg-inverse-surface px-3 py-1 font-label-bold text-label-bold text-safety-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                HOUSTON HQ
              </div>
            </div>
          </div>
          <div className="absolute left-[55%] top-1/2">
            <div className="relative">
              <div className="relative h-3 w-3 rounded-full border-2 border-white bg-performance-red" />
              <div className="absolute left-1/2 top-full ml-[-50%] mt-2 whitespace-nowrap rounded bg-inverse-surface px-3 py-1 font-label-bold text-label-bold text-safety-white">
                HAMBURG HUB
              </div>
            </div>
          </div>
          <div className="absolute left-[80%] top-[60%]">
            <div className="relative">
              <div className="relative h-3 w-3 rounded-full border-2 border-white bg-primary" />
              <div className="absolute left-1/2 top-full ml-[-50%] mt-2 whitespace-nowrap rounded bg-inverse-surface px-3 py-1 font-label-bold text-label-bold text-safety-white">
                SINGAPORE R&amp;D
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TIMELINE = [
  {
    year: "1999",
    title: "The Foundation",
    desc: "Founded in Texas as Velocity Industrial Lubricants, focusing on high-viscosity solutions for the oil & gas sector.",
    icon: "flag",
    color: "bg-primary",
  },
  {
    year: "2008",
    title: "Global Expansion",
    desc: "Established European headquarters in Germany and introduced our patented synthetic polymer line.",
    icon: "public",
    color: "bg-inverse-surface",
  },
  {
    year: "2020",
    title: "Sustainable Future",
    desc: "Launched the Bio-Tech series, the industry's first high-performance biodegradable industrial lubricant line.",
    icon: "eco",
    color: "bg-industrial-green",
  },
  {
    year: "TODAY",
    title: "The LUBRI-TECH Era",
    desc: "Rebranding to LUBRI-TECH to reflect our evolution into a holistic technical solutions provider.",
    icon: "rocket_launch",
    color: "bg-primary",
    big: true,
  },
];

function Timeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );
    const items = containerRef.current?.querySelectorAll(":scope > div") || [];
    items.forEach((el) => {
      el.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-10");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-container-max overflow-hidden px-margin-mobile py-section-gap md:px-margin-desktop">
      <h2 className="mb-16 text-center font-headline-lg text-headline-lg">The History of Velocity</h2>
      <div ref={containerRef} className="timeline-line relative">
        {TIMELINE.map((item) => (
          <div
            key={item.year}
            className="mb-20 flex w-full flex-col items-center justify-between md:flex-row"
          >
            <div className="order-2 hidden pr-12 text-right md:order-1 md:block md:w-[45%]">
              {item.year === "TODAY" ? (
                <span className="select-none font-display-lg text-display-lg text-primary">
                  {item.year}
                </span>
              ) : (
                <h3 className="font-headline-md text-headline-md text-primary">
                  {item.title}
                </h3>
              )}
              {item.year !== "TODAY" && (
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.desc}
                </p>
              )}
            </div>

            <div
              className={`relative z-10 flex items-center justify-center rounded-full border-4 border-white shadow-md ${
                item.big
                  ? "h-12 w-12 scale-125 shadow-lg"
                  : "h-10 w-10"
              } ${item.color}`}
            >
              <Icon
                name={item.icon}
                className={item.big ? "text-xl text-white" : "text-sm text-white"}
              />
            </div>

            <div className="order-3 pl-12 md:w-[45%]">
              <div className="mb-4 md:hidden">
                <h3 className="font-headline-md text-headline-md text-primary">
                  {item.title}
                </h3>
              </div>
              {item.year === "TODAY" ? (
                <p className="font-body-md text-body-md text-on-surface-variant md:hidden">
                  {item.desc}
                </p>
              ) : (
                <>
                  <span className="select-none font-display-lg text-display-lg text-outline-variant/30">
                    {item.year}
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant md:hidden">
                    {item.desc}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="relative mx-auto max-w-container-max overflow-hidden rounded-xl bg-inverse-surface p-12 text-center">
        <div className="absolute -mr-32 -mt-32 right-0 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative z-10">
          <h2 className="mb-6 font-headline-lg text-headline-lg text-safety-white">
            Connect with our Engineering Team
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-surface-variant">
            Discuss your specific machinery requirements with our technical
            specialists and discover how our heritage of excellence can optimize
            your operations.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-primary px-8 py-3 font-label-bold text-label-bold text-white transition-all hover:opacity-90">
              Schedule Consultation
            </button>
            <button className="rounded-lg border border-outline px-8 py-3 font-label-bold text-label-bold text-white transition-all hover:bg-surface/10">
              Download Technical Overview
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main>
      <Hero />
      <Mission />
      <GlobalPresence />
      <Timeline />
      <CTA />
      <Footer columns={FOOTER_COLUMNS} />
    </main>
  );
}
