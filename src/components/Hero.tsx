import { useRef, useState } from 'react';
import { ArrowDownRight, MessageCircle, Watch } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { WATCH_CATEGORIES, WATCH_MODELS } from '../data/catalogData';
import { getGeneralInquiryUrl } from '../config/store';

interface HeroProps {
  onExploreCatalog: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero({ onExploreCatalog }: HeroProps) {
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, 32]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  const trustItems = [
    {
      title: `${WATCH_CATEGORIES.length} líneas`,
      desc: 'Marcas y estilos importados',
    },
    {
      title: `${WATCH_MODELS.length} modelos`,
      desc: 'Fotos reales desde nuestro stock',
    },
    {
      title: '100% directo',
      desc: 'Sin intermediarios ni carritos lentos',
    },
    {
      title: 'Atención 1 a 1',
      desc: 'Consulta rápida por WhatsApp',
    },
  ];

  return (
    <section ref={heroRef} className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
            className="min-w-0 flex flex-col justify-center lg:col-span-6"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
            className="min-w-0 lg:col-span-6"
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-100 lg:h-full lg:min-h-[400px] lg:aspect-auto">
              {heroImgFailed ? (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-400">
                  <Watch className="h-12 w-12 stroke-[1.25]" aria-hidden="true" />
                  <span className="text-sm font-medium text-zinc-600">
                    MV Importados · Selección Exclusiva
                  </span>
                </div>
              ) : (
                <motion.img
                  style={{ y: imgY, scale: imgScale }}
                  src="/src/assets/images/hero_mv_watches_1794929496075.jpg"
                  alt="Selección de relojes importados de acero y cronógrafos de MV Importados"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                  onError={() => setHeroImgFailed(true)}
                  className="h-full w-full object-cover will-change-transform"
                />
              )}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-zinc-200 pt-6 sm:mt-12 sm:grid-cols-4 sm:gap-8 sm:pt-8">
          {trustItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.38,
                delay: idx * 0.06,
                ease: EASE_OUT_EXPO,
              }}
            >
              <p className="font-mono text-lg font-semibold tabular-nums text-zinc-950 sm:text-xl">
                {item.title}
              </p>
              <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
