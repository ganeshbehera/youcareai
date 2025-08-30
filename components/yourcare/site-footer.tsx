import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-semibold mb-2" style={{ color: "#111827" }}>
              Company
            </h3>
            <p className="text-sm" style={{ color: "#6C757D" }}>
              Company: Digitbite Limited
              <br />
              Company Number: 14529670
              <br />
              Address: Suite A 82 James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE
              <br />
              Registrar: The Registrar of Companies for England and Wales
            </p>
          </div>
          <nav aria-label="Legal">
            <h3 className="text-sm font-semibold mb-2" style={{ color: "#111827" }}>
              Links
            </h3>
            <ul className="text-sm space-y-1">
              {[
                { href: "/about", label: "About" },
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="hover:underline" style={{ color: "#0D6EFD" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-sm font-semibold mb-2" style={{ color: "#111827" }}>
              Tagline
            </h3>
            <p className="text-sm" style={{ color: "#6C757D" }}>
              © 2025 YourCareAI – A Digitbite Limited Product | Built on Google Cloud
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
