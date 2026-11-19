import { useRef, useState } from 'react';
import { MessageCircle, Watch } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { getGeneralInquiryUrl } from '../config/store';
import { WATCH_CATEGORIES } from '../data/catalogData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HowToBuySection() {
  const [imgFailed, setImgFailed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const macroY = useTransform(scrollYProgress, [0, 1], [-16, 16]);
  const macroScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);

  const steps = [
    {
      num: '01.',
      title: 'Elegí categoría',
      desc: `Filtrá por marca o estilo entre nuestras ${WATCH_CATEGORIES.length} líneas importadas en stock.`,
    },
    {
      num: '02.',
      title: 'Mirá fotos reales',
      desc: 'Tocá cualquier modelo para inspeccionar su cuadrante, malla y terminaciones.',
    },
    {
      num: '03.',
      title: 'Comprá por WhatsApp',
      desc: 'Consultás disponibilidad al instante y coordinás la entrega directo.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="como-comprar"
      className="border-t border-zinc-200 bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
            className="min-w-0 lg:col-span-5"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 lg:h-full lg:min-h-[320px] lg:aspect-auto">
              {imgFailed ? (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-900 text-zinc-400">
                  <Watch className="h-10 w-10 stroke-[1.25]" aria-hidden="true" />
                  <span className="text-xs font-medium">Control de calidad horológica</span>
                </div>
              ) : (
                <motion.img
                  style={{ y: macroY, scale: macroScale }}
                  src="/src/assets/images/atelier_watch_macro_1794929495809.jpg"
                  alt="Detalle macro de caja de acero inoxidable y cristal"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover will-change-transform"
                />
              )}
            </div>
          </motion.div>

          <div className="min-w-0 flex flex-col justify-center lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            >
              <p className="text-xs font-medium tracking-wide text-zinc-500">
                Compra directa sin vueltas
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl text-balance">
                Elegí tu reloj y consultá en menos de dos minutos.
              </h2>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.08,
                    ease: EASE_OUT_EXPO,
                  }}
                  className="border-t border-zinc-200 pt-4"
                >
                  <p className="font-mono text-xs font-semibold text-zinc-400">
                    {step.num}
                  </p>
                  <h3 className="mt-1.5 text-base font-semibold text-zinc-950">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.2, ease: EASE_OUT_EXPO }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={getGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 active:scale-[0.98] whitespace-nowrap shrink-0"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Consultar por WhatsApp</span>
              </a>
              <span className="text-xs text-zinc-500">
                Atención directa · Respuesta rápida
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
