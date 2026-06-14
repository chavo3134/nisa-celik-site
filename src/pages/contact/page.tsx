import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20industrial%20office%20interior%20steel%20and%20glass%20design%20reception%20area%20professional%20business%20environment%20minimalist%20design%20grey%20and%20metal%20tones%20natural%20light%20large%20windows%20contemporary%20corporate%20space&width=1920&height=600&seq=contact-hero&orientation=landscape"
            alt="İletişim"
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
            İletişim
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
          >
            Hatay ve çevresindeki projeleriniz için bize ulaşın
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="bg-background-50 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4">
                  Bize Ulaşın
                </h2>
                <p className="text-lg text-foreground-600 leading-relaxed">
                  Çelik konstrüksiyon, prefabrik yapılar, metal döküm ve endüstriyel çelik işleri için profesyonel destek alın. Hatay ve çevresindeki tüm ilçelere hizmet vermekteyiz.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 bg-background-100 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 shrink-0">
                    <i className="ri-map-pin-line text-2xl text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground-900 mb-1">
  Adreslerimiz
</h3>
<p className="text-sm text-foreground-600 leading-relaxed">
  <strong>Merkez Ofis</strong><br />
  Yıldırım Beyazıt Mahallesi<br />
  Özkul Çolak Caddesi No:43<br />
  Payas / Hatay, Türkiye

  <br /><br />

  <strong>İmalat Atölyesi</strong><br />
  Yıldırım Beyazıt Mahallesi<br />
  Gazi Sokak No:3 3/10<br />
  Payas / Hatay, Türkiye
</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-background-100 rounded-xl">
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

                <div className="flex items-start gap-4 p-5 bg-background-100 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-100 shrink-0">
                    <i className="ri-whatsapp-line text-2xl text-accent-700" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground-900 mb-1">
                      WhatsApp
                    </h3>
                    <a href="https://wa.me/905446414072" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground-600 hover:text-accent-700 transition-colors">
                      +90 544 641 40 72
                    </a>
                    <p className="text-xs text-foreground-500 mt-1">
                      7/24 WhatsApp üzerinden ulaşabilirsiniz
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-background-100 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 shrink-0">
                    <i className="ri-time-line text-2xl text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground-900 mb-1">
                      Çalışma Saatleri
                    </h3>
                    <p className="text-sm text-foreground-600">
                      Pazartesi - Cuma: 08:00 - 18:00
                    </p>
                    <p className="text-sm text-foreground-600">
                      Cumartesi: 08:00 - 14:00
                    </p>
                    <p className="text-sm text-foreground-600">
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="tel:+905446414072"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-primary-700 text-white font-medium hover:bg-primary-600 transition-all duration-300"
                >
                  <i className="ri-phone-line" />
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/905446414072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-accent-500 text-background-950 font-medium hover:bg-accent-400 transition-all duration-300"
                >
                  <i className="ri-whatsapp-line" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden bg-background-200 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255.67467623784273!2d36.216055176219704!3d36.759558907314656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152f4177652da9fb%3A0x69ba2959f876b4d!2zWcSxbGTEsXLEsW0gQmV5YXrEsXQsIMOWemt1bCDDh29sYWsgQ2QuIE5vOjQzLCAzMTkwMCBQYXlhcy9IYXRheQ!5e1!3m2!1str!2str!4v1781450328127!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nisa Çelik Konum"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-background-100 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4">
              Hizmet Verdiğimiz Bölgeler
            </h2>
            <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
              Payas, Erzin, Dörtyol, İskenderun ve Hatay çevresindeki tüm ilçelere hizmet vermekteyiz
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: "Payas", desc: "Merkez" },
              { name: "Erzin", desc: "Hatay" },
              { name: "Dörtyol", desc: "Hatay" },
              { name: "İskenderun", desc: "Hatay" },
              { name: "Hatay Çevresi", desc: "Tüm İlçeler" },
            ].map((area, i) => (
              <div key={i} className="text-center p-6 bg-background-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-100 mx-auto mb-4">
                  <i className="ri-map-pin-line text-2xl text-primary-700" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground-900 mb-1">
                  {area.name}
                </h3>
                <p className="text-sm text-foreground-500">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}