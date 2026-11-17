import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { WatchModel, getDriveImageUrl } from '../data/catalogData';
import { getWatchPurchaseUrl } from '../config/store';

interface WatchDetailModalProps {
  watch: WatchModel | null;
  onClose: () => void;
}

export function WatchDetailModal({ watch, onClose }: WatchDetailModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
    setZoomed(false);
  }, [watch?.id]);

  useEffect(() => {
    if (!watch) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % watch.images.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + watch.images.length) % watch.images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [watch, onClose]);

  if (!watch) return null;

  const activeFileId = watch.images[activeIndex] ?? watch.images[0];
  const hasMultiple = watch.images.length > 1;

  const goPrev = () => {
    setZoomed(false);
    setActiveIndex((prev) => (prev - 1 + watch.images.length) % watch.images.length);
  };

  const goNext = () => {
    setZoomed(false);
    setActiveIndex((prev) => (prev + 1) % watch.images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="watch-modal-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm md:items-center md:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl md:max-h-[88vh] md:max-w-4xl md:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile grab handle + close bar */}
        <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3 md:hidden">
          <span className="text-xs font-medium text-zinc-500">
            {watch.categoryName} · {activeIndex + 1}/{watch.images.length} fotos
          </span>
          <div className="mx-auto h-1 w-10 rounded-full bg-zinc-300" aria-hidden="true" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalle"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Desktop close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar detalle"
          className="hidden md:flex absolute right-4 top-4 z-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-sm ring-1 ring-zinc-200 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto md:grid md:grid-cols-12">
          {/* Left: High-res gallery */}
          <div className="bg-zinc-50 p-4 sm:p-6 md:col-span-7 md:flex md:flex-col md:justify-between">
            <div className="relative overflow-hidden rounded-xl bg-zinc-100 aspect-[3/4] max-h-[52dvh] mx-auto w-full max-w-[360px] md:max-w-none md:max-h-[560px]">
              <img
                src={getDriveImageUrl(activeFileId, 1000)}
                alt={`${watch.name} - vista ${activeIndex + 1}`}
                referrerPolicy="no-referrer"
                onClick={() => setZoomed((z) => !z)}
                className={`h-full w-full cursor-zoom-in transition-transform duration-300 ${
                  zoomed ? 'scale-150 cursor-zoom-out object-cover' : 'object-cover'
                }`}
              />

              <button
                type="button"
                onClick={() => setZoomed((z) => !z)}
                aria-label={zoomed ? 'Alejar foto' : 'Ampliar foto'}
                className="absolute bottom-3 right-3 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm ring-1 ring-zinc-200 backdrop-blur-sm transition-colors hover:bg-white"
              >
                {zoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
              </button>

              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Foto anterior"
                    className="absolute left-2 top-1/2 -translate-y-1/2 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition-colors hover:bg-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Siguiente foto"
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition-colors hover:bg-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {hasMultiple && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {watch.images.map((fid, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={fid}
                      type="button"
                      onClick={() => {
                        setZoomed(false);
                        setActiveIndex(index);
                      }}
                      aria-label={`Ver foto ${index + 1}`}
                      className={`relative h-16 w-12 shrink-0 overflow-hidden rounded-lg transition-all ${
                        isActive
                          ? 'ring-2 ring-zinc-950 opacity-100'
                          : 'opacity-60 hover:opacity-100 ring-1 ring-zinc-200'
                      }`}
                    >
                      <img
                        src={getDriveImageUrl(fid, 480)}
                        alt={`${watch.name} miniatura ${index + 1}`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right: Purchase info & specifications */}
          <div className="flex flex-col justify-between p-5 sm:p-6 md:col-span-5 md:p-8">
            <div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span>{watch.categoryName}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">
                  {watch.images.length} fotos
                </span>
              </div>

              <h2
                id="watch-modal-title"
                className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950"
              >
                {watch.name}
              </h2>

              <dl className="mt-6 grid grid-cols-1 gap-y-4 border-t border-zinc-200 pt-5 text-sm sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <dt className="text-xs text-zinc-500">Movimiento</dt>
                  <dd className="mt-0.5 font-medium text-zinc-900">{watch.movement}</dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500">Malla / Correa</dt>
                  <dd className="mt-0.5 font-medium text-zinc-900">{watch.strap}</dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500">Resistencia</dt>
                  <dd className="mt-0.5 font-medium text-zinc-900">{watch.waterResistance}</dd>
                </div>
              </dl>
            </div>

            {/* Desktop inline CTA */}
            <div className="hidden md:block mt-8 pt-4">
              <a
                href={getWatchPurchaseUrl(watch)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-800 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Comprar directo por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile sticky thumb-zone bottom bar */}
        <div className="border-t border-zinc-200 bg-white p-4 md:hidden">
          <a
            href={getWatchPurchaseUrl(watch)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Comprar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
