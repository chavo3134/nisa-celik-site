import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Ana Sayfa" },
  { path: "/hakkimizda", label: "Hakkımızda" },
  { path: "/hizmetler", label: "Hizmetler" },
  { path: "/projeler", label: "Projeler" },
  { path: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background-950/90 backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="https://static.readdy.ai/image/0258c6cb33cafaabea31998fb4efa6fd/3832206fdceecdea8b27dfcfd1b85d05.png"
              alt="Nisa Çelik Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? "text-background-50" : "text-white"
              }`}>
                NİSA ÇELİK
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium whitespace-nowrap transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? scrolled ? "text-accent-400" : "text-accent-300"
                    : scrolled ? "text-background-200 hover:text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                } bg-accent-500`} />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+905446414072"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                scrolled
                  ? "border-background-700 text-background-100 hover:bg-background-800 hover:text-white"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              <i className="ri-phone-line text-sm" />
              <span className="whitespace-nowrap">Ara</span>
            </a>
            <a
              href="https://wa.me/905446414072"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent-500 text-background-950 hover:bg-accent-400 transition-all duration-300 whitespace-nowrap"
            >
              <i className="ri-whatsapp-line text-sm" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white"
            aria-label="Menü"
          >
            <i className={`ri-${mobileOpen ? "close" : "menu"}-line text-2xl`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background-950/95 backdrop-blur-xl border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-accent-500/20 text-accent-400"
                  : "text-background-200 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-3 px-4">
            <a
              href="tel:+905446414072"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium border border-white/20 text-white"
            >
              <i className="ri-phone-line" />
              Ara
            </a>
            <a
              href="https://wa.me/905446414072"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium bg-accent-500 text-background-950"
            >
              <i className="ri-whatsapp-line" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}