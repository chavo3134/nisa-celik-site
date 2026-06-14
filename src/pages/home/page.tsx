import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "@/mocks/services";
import { projects } from "@/mocks/projects";

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

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

function SteelBeamSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="0" width="80" height="400" fill="currentColor" opacity="0.08" />
      <rect x="40" y="40" width="120" height="20" fill="currentColor" opacity="0.06" />
      <rect x="40" y="340" width="120" height="20" fill="currentColor" opacity="0.06" />
      <rect x="0" y="60" width="40" height="280" fill="currentColor" opacity="0.04" />
      <rect x="160" y="60" width="40" height="280" fill="currentColor" opacity="0.04" />
    </svg>
  );
}

function AnimatedHeroBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main image with Ken Burns zoom */}
      <div
        className="absolute inset-0 hero-ken-burns"
        style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.15)` }}
      >
        <img
          src="https://readdy.ai/api/search-image?query=Industrial%20steel%20construction%20site%20at%20sunset%20large%20metal%20framework%20beams%20cranes%20workers%20silhouette%20dramatic%20orange%20and%20grey%20sky%20heavy%20industry%20photography%20wide%20angle%20professional%20steel%20grey%20tones%20construction%20phase%20realistic%20atmospheric%20lighting&width=1920&height=1080&seq=hero-main-v2&orientation=landscape"
          alt="Çelik Konstrüksiyon İnşaat Sahası"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 via-transparent to-accent-900/20" />

      {/* Animated vignette */}
      <div className="absolute inset-0 hero-vignette pointer-events-none" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Floating steel beam silhouettes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -left-20 top-20 w-48 h-96 text-white animate-float"
          style={{ animationDelay: "0s", animationDuration: "8s" }}
        >
          <SteelBeamSVG className="w-full h-full" />
        </div>
        <div
          className="absolute -right-16 top-40 w-40 h-80 text-white animate-float"
          style={{ animationDelay: "2s", animationDuration: "10s" }}
        >
          <SteelBeamSVG className="w-full h-full" />
        </div>
        <div
          className="absolute left-1/4 bottom-10 w-32 h-64 text-white/50 animate-float"
          style={{ animationDelay: "4s", animationDuration: "7s" }}
        >
          <SteelBeamSVG className="w-full h-full" />
        </div>
      </div>

      {/* Animated bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-60 animate-pulse" />
    </div>
  );
}

export default function Home() {
  const statsRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero Section - CINEMATIC */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Hatay&apos;da <span className="text-accent-400">Güvenilir</span>
              <br />
              Çelik ve İnşaat Çözümleri
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 font-light"
          >
            Çelik konstrüksiyon, prefabrik yapılar, metal döküm ve endüstriyel çelik işleri
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+905446414072"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-accent-500 text-background-950 font-semibold text-base hover:bg-accent-400 transition-all duration-300 shadow-lg shadow-accent-500/20 whitespace-nowrap"
            >
              <i className="ri-phone-line text-lg" />
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905446414072"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-base border border-white/20 hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
            >
              <i className="ri-whatsapp-line text-lg" />
              WhatsApp
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 text-sm text-white/50"
          >
            Payas, Erzin, Dörtyol, İskenderun ve Hatay çevresinde hizmet vermekteyiz
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="animate-bounce">
            <i className="ri-arrow-down-line text-white/60 text-2xl" />
          </div>
        </motion.div>
      </section>

      {/* Rest unchanged */}
      <section ref={statsRef} className="bg-background-50 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "15+", label: "Yıllık Deneyim" },
              { number: "200+", label: "Tamamlanan Proje" },
              { number: "5", label: "Hizmet Bölgesi" },
              { number: "50+", label: "Mutlu Müşteri" },
            ].map((stat, i) => (
              <div key={i} className="reveal text-center">
                <p className="font-heading text-4xl md:text-5xl font-bold text-primary-700 mb-2">
                  {stat.number}
                </p>
                <p className="text-sm md:text-base text-foreground-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="bg-background-100 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="reveal text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-4">
              Profesyonel Hizmetlerimiz
            </h2>
            <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
              Türkiye&apos;de çelik konstrüksiyon alanında uzman ekibimizle en yüksek kalite standartlarında hizmet sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.slice(0, 3).map((service, i) => (
              <div
                key={service.id}
                className="reveal group relative overflow-hidden rounded-xl bg-background-50 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 mb-4">
                    <i className={`${service.icon} text-2xl text-primary-700`} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/hizmetler"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-600 transition-colors"
                  >
                    Detaylı Bilgi
                    <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-10">
            <Link
              to="/hizmetler"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary-700 text-white font-medium hover:bg-primary-600 transition-all duration-300"
            >
              Tüm Hizmetlerimiz
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </section>

      <section ref={projectsRef} className="bg-background-50 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-4">
                Projelerimiz
              </h2>
              <p className="text-lg text-foreground-600 max-w-xl">
                Payas, Erzin, Dörtyol, İskenderun ve yakın bölgelerdeki gerçek saha projelerimiz
              </p>
            </div>
            <Link
              to="/projeler"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-600 transition-colors"
            >
              Tüm Projeleri Gör
              <i className="ri-arrow-right-line" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {projects.slice(0, 4).map((project, i) => (
              <div
                key={project.id}
                className="reveal group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    {project.location}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Industrial%20steel%20workshop%20interior%20sparks%20flying%20workers%20welding%20metal%20heavy%20industry%20manufacturing%20facility%20bright%20sparks%20orange%20glow%20steel%20beams%20realistic%20photography%20dramatic%20industrial%20atmosphere%20machinery%20equipment&width=1920&height=1080&seq=cta-bg&orientation=landscape"
            alt="Endüstriyel Çelik Atölyesi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <div className="reveal">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
              Projeniz İçin Hemen İletişime Geçin
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Hatay ve çevresindeki tüm ilçelere hizmet vermekteyiz. Çelik konstrüksiyon ihtiyaçlarınız için profesyonel çözümler sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905446414072"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-accent-500 text-background-950 font-semibold text-base hover:bg-accent-400 transition-all duration-300 shadow-lg whitespace-nowrap"
              >
                <i className="ri-phone-line text-lg" />
                +90 544 641 40 72
              </a>
              <a
                href="https://wa.me/905446414072"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-base border border-white/20 hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg" />
                WhatsApp&apos;tan Ulaş
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="reveal flex items-start gap-4 p-6 bg-background-50 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 shrink-0">
                <i className="ri-map-pin-line text-2xl text-primary-700" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground-900 mb-1">
                  Adres
                </h3>
                <p className="text-sm text-foreground-600">
                  Yıldırım Beyazıt Mah., Özkul Çolak Cd. No:43, Payas / Hatay, Türkiye
                </p>
              </div>
            </div>

            <div className="reveal flex items-start gap-4 p-6 bg-background-50 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 shrink-0">
                <i className="ri-phone-line text-2xl text-primary-700" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground-900 mb-1">
                  Telefon
                </h3>
                <a href="tel:+905446414072" className="text-sm text-foreground-600 hover:text-primary-700 transition-colors">
                  +90 544 641 40 72
                </a>
              </div>
            </div>

            <div className="reveal flex items-start gap-4 p-6 bg-background-50 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 shrink-0">
                <i className="ri-time-line text-2xl text-primary-700" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground-900 mb-1">
                  Çalışma Saatleri
                </h3>
                <p className="text-sm text-foreground-600">
                  Hafta içi: 08:00 - 18:00
                  <br />
                  Cumartesi: 08:00 - 14:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}