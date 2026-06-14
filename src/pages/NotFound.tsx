import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-20">
      <h1 className="font-heading text-9xl md:text-[12rem] font-black text-background-200 select-none pointer-events-none z-0 leading-none">
        404
      </h1>
      <div className="relative z-10 -mt-8">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-900 mt-6">
          Sayfa Bulunamadı
        </h2>
        <p className="mt-3 text-base text-foreground-500">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-primary-700 text-white font-medium hover:bg-primary-600 transition-all duration-300"
        >
          <i className="ri-home-line" />
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}