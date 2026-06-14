import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background-900 text-background-200">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              src="https://static.readdy.ai/image/0258c6cb33cafaabea31998fb4efa6fd/3832206fdceecdea8b27dfcfd1b85d05.png"
              alt="Nisa Çelik Logo"
              className="h-12 w-auto object-contain"
            />
            <p className="text-sm text-background-400 leading-relaxed">
              Hatay ve çevresinde çelik konstrüksiyon, prefabrik yapılar, metal döküm ve endüstriyel çelik işleri hizmetleri sunmaktayız.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2 text-background-400">
                <i className="ri-map-pin-line mt-0.5 text-accent-500" />
                <span>Yıldırım Beyazıt Mah., Özkul Çolak Cd. No:43, Payas / Hatay</span>
              </p>
              <p className="flex items-center gap-2 text-background-400">
                <i className="ri-phone-line text-accent-500" />
                <a href="tel:+905446414072" className="hover:text-white transition-colors">+90 544 641 40 72</a>
              </p>
              <p className="flex items-center gap-2 text-background-400">
                <i className="ri-whatsapp-line text-accent-500" />
                <a href="https://wa.me/905446414072" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+90 544 641 40 72</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Ana Sayfa" },
                { path: "/hakkimizda", label: "Hakkımızda" },
                { path: "/hizmetler", label: "Hizmetler" },
                { path: "/projeler", label: "Projeler" },
                { path: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-3">
              {[
                "Çelik Konstrüksiyon",
                "Prefabrik Yapılar",
                "Metal Döküm",
                "Endüstriyel Çelik İşleri",
                "Dış Cephe İnşaat",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/hizmetler"
                    className="text-sm text-background-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Hizmet Bölgeleri
            </h4>
            <ul className="space-y-3">
              {[
                "Payas / Hatay",
                "Erzin / Hatay",
                "Dörtyol / Hatay",
                "İskenderun / Hatay",
                "Hatay ve Çevresi",
              ].map((area) => (
                <li key={area}>
                  <span className="text-sm text-background-400">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background-800">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background-500 text-center sm:text-left">
            © 2026 Nisa Çelik. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-background-500">
            Hatay'da Çelik Konstrüksiyon ve İnşaat Çözümleri
          </p>
        </div>
      </div>
    </footer>
  );
}