import Link from 'next/link';
import Image from 'next/image';
import data from '@/lib/data.json';
import logo from '../../../public/images/logo.png';

/* ── Logo ──────────────────────────────────────────────── */
function FooterLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 mb-4">
      <Image src={logo} width={130} height={130} alt={data.footer.logoAlt || "410 Muscle Therapy Logo"} className="object-contain w-[110px] h-[110px] sm:w-[130px] sm:h-[130px]" />
    </Link>
  );
}

/* ── Social Icons ─────────────────────────────────────── */
function SocialIcons() {
  const socials = [
    {
      label: 'Facebook',
      path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
    },
    {
      label: 'Instagram',
      path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z',
    },
    {
      label: 'Google',
      path: 'M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12C2.03 17.05 6.16 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z',
    },
    {
      label: 'YouTube',
      path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z M9.75 15.02V8.98L15.5 12z',
    },
  ];

  return (
    <div className="flex gap-2.5 mt-4 justify-start">
      {socials.map((s) => (
        <a
          key={s.label}
          href="#"
          aria-label={s.label}
          className="w-9 h-9 rounded-full border border-border-dark flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-200"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d={s.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}

/* ── Map Placeholder ───────────────────────────────────── */
function MapPlaceholder({ addressText }) {
  return (
    <div className="mt-5 h-24 sm:h-28 bg-dark-3 rounded-md overflow-hidden relative flex items-center justify-center border border-border-dark">
      <div
        className="absolute inset-0 bg-grid-pattern-white-faint"
      />
      <div className="relative flex flex-col items-center gap-1.5">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#C8960C">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        <span className="text-white/40 text-[10.5px] font-medium text-center px-2 whitespace-pre-line">
          {addressText}
        </span>
      </div>
    </div>
  );
}

export default function Footer() {
  const {
    brandDescription,
    quickLinksLabel,
    servicesLabel,
    contactLabel,
    copyright,
    privacy,
    terms,
    divider,
    address,
    phone,
    email,
    hours
  } = data.footer;

  const quickLinksData = data.navbar.links.map(link => ({
    label: link.label,
    href: link.href
  }));

  const servicesData = data.services.items.slice(0, 6).map(svc => ({
    label: svc.name,
    href: `/services/${svc.slug}`
  }));

  return (
    <footer>

      {/* ══ Main Footer ════════════════════════════════ */}
      <div className="bg-dark-2 pt-12 md:pt-16 pb-0 border-t border-border-dark/60">
        <div className="site-container">

          {/* Responsive grid wrapping from 1 to 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr_1.5fr] gap-10 md:gap-12 pb-12 border-b border-border-dark">

            {/* Col 1 — Brand */}
            <div className="flex flex-col items-start text-left">
              <FooterLogo />
              <p className="text-white/45 text-[13.5px] leading-[1.8] mb-4 max-w-[280px]">
                {brandDescription}
              </p>
              <SocialIcons />
            </div>

            {/* Col 2 — Quick Links */}
            <div className="flex flex-col items-start text-left">
              <h4 className="text-white font-bold text-[11.5px] tracking-[0.16em] uppercase mb-5">
                {quickLinksLabel}
              </h4>
              <ul className="flex flex-col gap-3">
                {quickLinksData.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/45 text-[13.5px] hover:text-gold transition-colors duration-200 flex items-center gap-2 group py-0.5">
                      <span className="w-0 h-px bg-gold transition-all duration-200 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div className="flex flex-col items-start text-left">
              <h4 className="text-white font-bold text-[11.5px] tracking-[0.16em] uppercase mb-5">
                {servicesLabel}
              </h4>
              <ul className="flex flex-col gap-3">
                {servicesData.map((svc) => (
                  <li key={svc.label}>
                    <Link href={svc.href} className="text-white/45 text-[13.5px] hover:text-gold transition-colors duration-200 flex items-center gap-2 group py-0.5">
                      <span className="w-0 h-px bg-gold transition-all duration-200 group-hover:w-3" />
                      {svc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div className="flex flex-col items-start text-left">
              <h4 className="text-white font-bold text-[11.5px] tracking-[0.16em] uppercase mb-5">
                {contactLabel}
              </h4>
              <ul className="flex flex-col gap-3.5 w-full">
                {[
                  {
                    icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />,
                    text: address,
                  },
                  {
                    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.92a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
                    text: phone,
                  },
                  {
                    icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></>,
                    text: email,
                  },
                  {
                    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
                    text: hours,
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      width="14" height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C8960C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 flex-shrink-0"
                    >
                      {item.icon}
                    </svg>
                    <span className="text-white/45 text-[13px] leading-snug whitespace-pre-line">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full">
                <MapPlaceholder addressText={address} />
              </div>
            </div>

          </div>

          {/* ── Bottom bar ───────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-3 text-center sm:text-left">
            <p className="text-white/30 text-[12px]">
              {copyright}
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/contact" className="text-white/30 text-[12px] hover:text-white/70 transition-colors">{privacy}</Link>
              <span className="text-white/15">{divider}</span>
              <Link href="/contact" className="text-white/30 text-[12px] hover:text-white/70 transition-colors">{terms}</Link>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
