import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { services } from "@/mocks/services";

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

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Industrial%20steel%20workshop%20wide%20angle%20interior%20heavy%20machinery%20steel%20beams%20metal%20work%20manufacturing%20facility%20professional%20photography%20orange%20and%20grey%20lighting%20sparks%20industrial%20atmosphere%20large%20scale&width=1920&height=600&seq=services-hero&orientation=landscape"
            alt="Endüstriyel Hizmetler"
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
            Hizmetlerimiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
          >
            Çelik konstrüksiyon, prefabrik yapılar, metal döküm ve endüstriyel çelik işleri
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="bg-background-50 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="reveal text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4">
              Kapsamlı Çelik Çözümleri
            </h2>
            <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
              Prefabrik çelik yapılar ve endüstriyel çelik işleri alanında profesyonel hizmetler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="reveal group relative overflow-hidden rounded-xl bg-background-50 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-14 h-14 flex items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                    <i className={`${service.icon} text-2xl text-primary-700`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="reveal text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Projeniz İçin Teklif Alın
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Türkiye&apos;de çelik konstrüksiyon hizmetleri için hemen iletişime geçin. Size özel çözümler sunalım.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905446414072"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-accent-500 text-background-950 font-semibold text-base hover:bg-accent-400 transition-all duration-300 whitespace-nowrap"
              >
                <i className="ri-phone-line text-lg" />
                +90 544 641 40 72
              </a>
              <a
                href="https://wa.me/905446414072"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}