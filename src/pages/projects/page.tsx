import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
      (child as HTMLElement).style.animationDelay = `${i * 0.08}s`;
      child.classList.add("opacity-0");
      observer.observe(child);
    });
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Large%20industrial%20construction%20site%20multiple%20steel%20structures%20cranes%20workers%20buildings%20under%20construction%20wide%20angle%20professional%20photography%20blue%20sky%20daytime%20realistic%20industrial%20area%20heavy%20equipment%20steel%20framework%20multiple%20projects&width=1920&height=600&seq=projects-hero&orientation=landscape"
            alt="Nisa Çelik Projeleri"
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
            Projelerimiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
          >
            Payas, Erzin, Dörtyol, İskenderun ve Hatay çevresindeki gerçek saha projelerimiz
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={sectionRef} className="bg-background-50 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="reveal text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4">
              Tamamlanan Projelerimiz
            </h2>
            <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
              Hatay metal imalatı ve çelik konstrüksiyon alanında yürüttüğümüz referans projeler
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="reveal group relative overflow-hidden rounded-xl aspect-[4/5] bg-background-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    {project.location}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-100 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="reveal text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4">
              Sizin Projeniz de Burada Olabilir
            </h2>
            <p className="text-lg text-foreground-600 mb-8">
              Prefabrik çelik yapılar ve endüstriyel çelik işleri için hemen bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905446414072"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-primary-700 text-white font-semibold text-base hover:bg-primary-600 transition-all duration-300 whitespace-nowrap"
              >
                <i className="ri-phone-line text-lg" />
                +90 544 641 40 72
              </a>
              <a
                href="https://wa.me/905446414072"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-accent-500 text-background-950 font-semibold text-base hover:bg-accent-400 transition-all duration-300 whitespace-nowrap"
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