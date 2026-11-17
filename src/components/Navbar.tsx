import { MessageCircle } from 'lucide-react';
import { STORE_CONFIG, getGeneralInquiryUrl } from '../config/store';

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-[#FAFAFA]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-zinc-950 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
        >
          {STORE_CONFIG.brandName}
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600"
        >
          <a
            href="#catalogo"
            className="hover:text-zinc-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Catálogo
          </a>
          <a
            href="#categorias"
            className="hover:text-zinc-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Categorías
          </a>
          <a
            href="#como-comprar"
            className="hover:text-zinc-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Cómo comprar
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <a
            href={getGeneralInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
