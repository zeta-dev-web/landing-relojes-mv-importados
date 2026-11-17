import { MessageCircle } from 'lucide-react';
import { STORE_CONFIG, getGeneralInquiryUrl } from '../config/store';
import { WATCH_CATEGORIES } from '../data/catalogData';

interface FooterProps {
  onSelectCategory: (slug: string) => void;
}

export function Footer({ onSelectCategory }: FooterProps) {
  const quickCategories = WATCH_CATEGORIES.slice(0, 6);

  return (
    <footer className="border-t border-zinc-200 bg-[#FAFAFA] py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-xs">
            <p className="font-display text-lg font-bold tracking-tight text-zinc-950">
              {STORE_CONFIG.brandName}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Relojes importados seleccionados con fotos reales y atención directa por WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600">
            {quickCategories.map((cat) => (
              <a
                key={cat.slug}
                href="#modelos-grid"
                onClick={() => onSelectCategory(cat.slug)}
                className="min-h-[44px] inline-flex items-center hover:text-zinc-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap"
              >
                {cat.name}
              </a>
            ))}
          </div>

          <div>
            <a
              href={getGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-zinc-950 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Escribir por WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-6 flex flex-col gap-2 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {STORE_CONFIG.brandName}. Todos los derechos reservados.</p>
          <p>Catálogo de relojes importados · Venta directa</p>
        </div>
      </div>
    </footer>
  );
}
