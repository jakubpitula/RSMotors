import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/utils/consts";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a
          className="brand"
          href="#home"
          aria-label="RS Rising Sun Motors home"
        >
          <span className="brand-mark">
            <span>RS</span>
          </span>
          <span className="brand-name">
            <strong>RS</strong>
            <span>Rising Sun Motors</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              className={label === "Home" ? "active" : ""}
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="tel:">
          <Phone size={16} />
          <span>Call us</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
