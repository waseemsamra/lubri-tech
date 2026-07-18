import { FOOTER_COLUMNS } from "../data";

function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>{name}</span>
  );
}

export default function Footer({ columns = FOOTER_COLUMNS }) {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile py-section-gap text-surface md:grid-cols-4 md:px-margin-desktop">
        <div className="md:col-span-1">
          <div className="mb-6 font-headline-md text-headline-md font-bold tracking-tight text-surface-container-lowest">
            LUBRI-TECH
          </div>
          <p className="mb-6 font-body-sm text-body-sm text-surface-variant">
            Driving innovation in lubrication for over 25 years. Engineering the
            future of industrial movement.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-surface-variant transition-colors hover:text-safety-white"
            >
              <Icon name="share" />
            </a>
            <a
              href="#"
              className="text-surface-variant transition-colors hover:text-safety-white"
            >
              <Icon name="contact_support" />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h5 className="mb-6 font-label-bold text-label-bold text-safety-white">
              {col.title}
            </h5>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body-sm text-body-sm text-surface-variant transition-colors hover:text-primary-fixed"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="mb-6 font-label-bold text-label-bold text-safety-white">
            STAY UPDATED
          </h5>
          <p className="mb-4 font-body-sm text-body-sm text-surface-variant">
            Get the latest technical news and product releases.
          </p>
          <form
            className="flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-l border-none bg-on-surface-variant/20 px-4 py-2 text-safety-white focus:ring-1 focus:ring-industrial-green"
            />
            <button
              type="submit"
              className="rounded-r bg-industrial-green px-4 py-2 text-safety-white hover:bg-primary"
            >
              <Icon name="send" />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-container-max border-t border-on-surface-variant/10 px-margin-mobile py-8 md:px-margin-desktop">
        <div className="flex flex-col items-center justify-between gap-4 font-body-sm text-body-sm text-surface-variant md:flex-row">
          <p>© 2024 Lubri-Tech Industrial Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-safety-white">
              Sitemap
            </a>
            <a href="#" className="hover:text-safety-white">
              Legal Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
