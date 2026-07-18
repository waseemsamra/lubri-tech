import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, ADVISORY_SUBMENUS, BUSINESS_SUBMENUS } from "../data";

const ROUTES = {
  Products: "/products",
  Industries: "/industries",
  Services: "/services",
  Sustainability: "/sustainability",
  About: "/about",
  "Business Customers": "/b2b-customers",
};

function Icon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function AdvisoryMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 whitespace-nowrap font-label-bold text-label-bold text-on-surface-variant transition-colors duration-200 hover:text-primary">
        Product Advisory
        <Icon name="expand_more" className="text-[18px]" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 w-60 pt-2">
          <div className="rounded-lg border border-outline-variant bg-surface py-2 shadow-xl">
            {ADVISORY_SUBMENUS.map((item) => (
              <Link
                key={item.label}
                to={item.route || `/products/${item.slug}`}
                className="block px-4 py-2 font-body-md text-on-surface transition-colors hover:bg-surface-container-low hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function BusinessMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 whitespace-nowrap font-label-bold text-label-bold text-on-surface-variant transition-colors duration-200 hover:text-primary">
        Business Customers
        <Icon name="expand_more" className="text-[18px]" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 w-60 pt-2">
          <div className="rounded-lg border border-outline-variant bg-surface py-2 shadow-xl">
            {BUSINESS_SUBMENUS.map((item) => (
              <Link
                key={item.label}
                to={item.route}
                className="block px-4 py-2 font-body-md text-on-surface transition-colors hover:bg-surface-container-low hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderNavItem = (link) => {
    const to = ROUTES[link] || "#";
    const active = to !== "#" && location.pathname === to;
    return (
      <Link
        key={link}
        to={to}
        className={`font-label-bold text-label-bold transition-colors duration-200 hover:text-primary ${
          active ? "border-b-2 border-primary pb-1 text-primary" : "text-on-surface-variant"
        }`}
      >
        {link}
      </Link>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-surface transition-shadow ${
        scrolled ? "shadow-md" : "border-b border-outline-variant"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-container-max items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            to="/"
            className="-ml-6 font-headline-lg text-headline-lg font-bold tracking-tight text-primary"
          >
            LUBRI-TECH
          </Link>
          <div className="hidden items-center gap-4 md:flex">
            {NAV_LINKS.map((link) => {
              if (link === "Product Advisory") return <AdvisoryMenu key={link} />;
              if (link === "Business Customers") return <BusinessMenu key={link} />;
              return renderNavItem(link);
            })}
          </div>
        </div>

        <div className="flex flex-shrink-0 items-center gap-4">
          <button
            aria-label="Language"
            className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-highest"
          >
            <Icon name="language" />
          </button>
          <Link
            to="#"
            className="whitespace-nowrap rounded bg-industrial-green px-4 py-2 font-label-bold text-label-bold text-white transition-all hover:bg-primary active:opacity-80 md:px-6"
          >
            Industrial Portal
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-on-surface md:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav className="border-t border-outline-variant bg-surface px-margin-mobile py-4 md:hidden">
          {NAV_LINKS.map((link) => {
            if (link === "Product Advisory") {
              return (
                <div key={link} className="py-2">
                  <p className="font-label-bold text-label-bold text-on-surface">Product Advisory</p>
                  <div className="mt-1 pl-4">
                    {ADVISORY_SUBMENUS.map((item) => (
                      <Link
                        key={item.label}
                        to={item.route || `/products/${item.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="block py-1 font-body-md text-on-surface-variant transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            if (link === "Business Customers") {
              return (
                <div key={link} className="py-2">
                  <p className="font-label-bold text-label-bold text-on-surface">Business Customers</p>
                  <div className="mt-1 pl-4">
                    {BUSINESS_SUBMENUS.map((item) => (
                      <Link
                        key={item.label}
                        to={item.route}
                        onClick={() => setMenuOpen(false)}
                        className="block py-1 font-body-md text-on-surface-variant transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <div key={link} onClick={() => setMenuOpen(false)}>
                {renderNavItem(link)}
                <div className="py-2" />
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
}
