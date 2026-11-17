import { useState } from 'react';
import { ArrowDownRight, MessageCircle, Watch } from 'lucide-react';
import { WATCH_CATEGORIES, WATCH_MODELS } from '../data/catalogData';
import { getGeneralInquiryUrl } from '../config/store';

interface HeroProps {
  onExploreCatalog: () => void;
}

export function Hero({ onExploreCatalog }: HeroProps) {
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 flex flex-col justify-center lg:col-span-6">
            <p className="text-xs font-medium tracking-wide text-zinc-500">
              Colección importada · Stock verificado
            </p>

            <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-zinc-950 text-balance">
              Relojes importados, directo a tu muñeca.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              Elegí entre {WATCH_CATEGORIES.length} categorías seleccionadas, revisá cada modelo con fotos reales en detalle y concretá tu compra al instante por WhatsApp.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onExploreCatalog}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                <span>Explorar catálogo</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={getGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                <MessageCircle className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                <span>Asesoramiento directo</span>
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-6">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-100 lg:h-full lg:min-h-[400px] lg:aspect-auto">
              {heroImgFailed ? (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-400">
                  <Watch className="h-12 w-12 stroke-[1.25]" aria-hidden="true" />
                  <span className="text-sm font-medium text-zinc-600">
                    MV Importados · Selección Exclusiva
                  </span>
                </div>
              ) : (
                <img
                  src="/src/assets/images/hero_mv_watches_1794929496075.jpg"
                  alt="Selección de relojes importados de acero y cronógrafos de MV Importados"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                  onError={() => setHeroImgFailed(true)}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-zinc-200 pt-6 sm:mt-12 sm:grid-cols-4 sm:gap-8 sm:pt-8">
          <div>
            <p className="font-mono text-lg font-semibold tabular-nums text-zinc-950 sm:text-xl">
              {WATCH_CATEGORIES.length} líneas
            </p>
            <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
              Marcas y estilos importados
            </p>
          </div>
          <div>
            <p className="font-mono text-lg font-semibold tabular-nums text-zinc-950 sm:text-xl">
              {WATCH_MODELS.length} modelos
            </p>
            <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
              Fotos reales desde nuestro stock
            </p>
          </div>
          <div>
            <p className="font-mono text-lg font-semibold tabular-nums text-zinc-950 sm:text-xl">
              100% directo
            </p>
            <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
              Sin intermediarios ni carritos lentos
            </p>
          </div>
          <div>
            <p className="font-mono text-lg font-semibold tabular-nums text-zinc-950 sm:text-xl">
              Atención 1 a 1
            </p>
            <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
              Consulta rápida por WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
