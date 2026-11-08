const links = [
  {
    label: 'Email',
    href: 'mailto:shri.sk.krupa@gmail.com',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shri-krupa-s/',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="7.5" cy="8" r="1" fill="currentColor" stroke="none" />
        <path d="M7.5 11v5.5M11 16.5V11m0 2.5a2.75 2.75 0 0 1 5.5 0v3" />
      </>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Shri-Krupa-S',
    icon: (
      <>
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
      </>
    ),
  },
  {
    label: 'Resume',
    href: '/Shri-Krupa-Resume-2026.pdf',
    download: 'Shri-Krupa-S-Resume.pdf',
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M12 12v6m-3-3 3 3 3-3" />
      </>
    ),
  },
]

function FloatingToolbar() {
  return (
    <nav className="floating-toolbar" aria-label="Contact and profile links">
      {links.map(({ label, href, download, icon }) => (
        <a
          className="floating-toolbar__link"
          href={href}
          key={label}
          aria-label={label}
          download={download}
          target={label === 'LinkedIn' || label === 'GitHub' ? '_blank' : undefined}
          rel={label === 'LinkedIn' || label === 'GitHub' ? 'noreferrer' : undefined}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {icon}
          </svg>
          <span className="floating-toolbar__tooltip" aria-hidden="true">{label}</span>
        </a>
      ))}
    </nav>
  )
}

export default FloatingToolbar
