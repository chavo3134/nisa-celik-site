import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const children = el.querySelectorAll(".reveal");
    children.forEach((child, i) => {
      (child as HTMLElement).style.animationDelay = `${i * 0.1}s`;
      child.classList.add("opacity-0");
      observer.observe(child);
    });
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Industrial%20steel%20factory%20exterior%20modern%20manufacturing%20facility%20large%20scale%20steel%20structure%20building%20professional%20photography%20blue%20sky%20landscape%20view%20corporate%20industrial%20architecture%20grey%20steel%20panels%20modern%20design&width=1920&height=600&seq=about-hero&orientation=landscape"
            alt="Nisa Çelik Fabrika"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Hakkımızda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
          >
            Hatay&apos;ın güvenilir çelik konstrüksiyon ve inşaat çözümleri ortağı
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section ref={sectionRef} className="bg-background-50 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="reveal">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-6">
                  Güven ve <span className="text-primary-700">Dayanıklılık</span> Üzerine Kurulduk
                </h2>
                <p className="text-lg text-foreground-700 leading-relaxed mb-4">
                  Nisa Çelik, Hatay ve çevresinde çelik konstrüksiyon, metal döküm, prefabrik yapılar ve dış cephe inşaat hizmetleri sunan profesyonel bir inşaat şirketidir. Payas merkezli firmamız, şubesi olmaksızın saha bazlı projeler yürüterek bölgenin tamamına hizmet vermektedir.
                </p>
                <p className="text-lg text-foreground-700 leading-relaxed">
                  Türkiye&apos;de çelik konstrüksiyon alanında uzman ekibimizle, Payas, Erzin, Dörtyol, İskenderun ve yakın bölgelerdeki projelerimizi en yüksek kalite standartlarında tamamlıyoruz. Her projede müşteri memnuniyetini ve yapısal güvenliği ön planda tutarak, endüstriyel çelik işleri ve prefabrik çelik yapılar konusunda güvenilir bir ortak olmayı hedefliyoruz.
                </p>
              </div>

              <div className="reveal flex flex-wrap gap-4">
                <Link
                  to="/hizmetler"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-700 text-white font-medium hover:bg-primary-600 transition-all duration-300"
                >
                  Hizmetlerimiz
                  <i className="ri-arrow-right-line" />
                </Link>
                <Link
                  to="/projeler"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary-700 text-primary-700 font-medium hover:bg-primary-700 hover:text-white transition-all duration-300"
                >
                  Projelerimiz
                  <i className="ri-arrow-right-line" />
                </Link>
              </div>

              <div className="reveal grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-background-100 rounded-xl">
                  <p className="font-heading text-3xl md:text-4xl font-bold text-primary-700 mb-1">15+</p>
                  <p className="text-sm text-foreground-600">Yıllık Deneyim</p>
                </div>
                <div className="text-center p-4 bg-background-100 rounded-xl">
                  <p className="font-heading text-3xl md:text-4xl font-bold text-primary-700 mb-1">200+</p>
                  <p className="text-sm text-foreground-600">Tamamlanan Proje</p>
                </div>
                <div className="text-center p-4 bg-background-100 rounded-xl">
                  <p className="font-heading text-3xl md:text-4xl font-bold text-primary-700 mb-1">5</p>
                  <p className="text-sm text-foreground-600">Hizmet Bölgesi</p>
                </div>
                <div className="text-center p-4 bg-background-100 rounded-xl">
                  <p className="font-heading text-3xl md:text-4xl font-bold text-primary-700 mb-1">50+</p>
                  <p className="text-sm text-foreground-600">Mutlu Müşteri</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="reveal relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20construction%20team%20workers%20industrial%20site%20steel%20structure%20building%20workers%20in%20safety%20gear%20helmets%20reflective%20vests%20team%20photo%20professional%20photography%20outdoor%20construction%20site%20background%20steel%20beams%20realistic%20daytime%20lighting&width=800&height=1000&seq=about-img&orientation=portrait"
                  alt="Nisa Çelik Ekibi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-foreground-900 text-sm font-medium shadow-lg">
                    Hatay / Payas
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-background-100 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="reveal text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4">
              Neden Nisa Çelik?
            </h2>
            <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
              Hatay metal imalatı alanında öne çıkan değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "ri-shield-check-line",
                title: "Kalite Garantisi",
                description: "Tüm projelerimizde en yüksek kalite standartlarını uyguluyor, yapısal güvenliği ve dayanıklılığı ön planda tutuyoruz.",
              },
              {
                icon: "ri-team-line",
                title: "Uzman Ekip",
                description: "Deneyimli mühendis ve ustalarımızla her projeyi profesyonelce yönetiyor, sahada çözüm odaklı çalışıyoruz.",
              },
              {
                icon: "ri-time-line",
                title: "Zamanında Teslim",
                description: "Proje takvimine sadık kalıyor, müşterilerimizin iş planlarını aksatmadan teslimatları gerçekleştiriyoruz.",
              },
              {
                icon: "ri-price-tag-3-line",
                title: "Rekabetçi Fiyatlar",
                description: "Yüksek kaliteyi uygun fiyatlarla sunuyor, projelerinizde en iyi maliyet-fayda dengesini sağlıyoruz.",
              },
              {
                icon: "ri-customer-service-line",
                title: "7/24 Destek",
                description: "Proje öncesi ve sonrası kesintisiz destek sunuyor, müşterilerimizin her an yanında oluyoruz.",
              },
              {
                icon: "ri-map-pin-line",
                title: "Bölgesel Uzmanlık",
                description: "Payas, Erzin, Dörtyol, İskenderun ve tüm Hatay bölgesinde saha bazlı projeler yürütüyoruz.",
              },
            ].map((item, i) => (
              <div key={i} className="reveal p-6 bg-background-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary-100 mb-5">
                  <i className={`${item.icon} text-3xl text-primary-700`} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}