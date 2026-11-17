import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToCategoriesButtonProps {
  disabled?: boolean;
}

export function BackToCategoriesButton({
  disabled = false,
}: BackToCategoriesButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const categoriasEl = document.getElementById('categorias');
      const footerEl = document.querySelector('footer');
      if (!categoriasEl) {
        setVisible(false);
        return;
      }
      const catRect = categoriasEl.getBoundingClientRect();
      const pastCategories = catRect.bottom < 72;
      const reachedFooter = footerEl
        ? footerEl.getBoundingClientRect().top < window.innerHeight - 16
        : false;
      setVisible(pastCategories && !reachedFooter);
    };

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleBackToCategories = () => {
    document
      .getElementById('categorias')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const isShown = visible && !disabled;

  return (
    <button
      type="button"
      onClick={handleBackToCategories}
      aria-label="Volver al selector de categorías"
      aria-hidden={!isShown}
      tabIndex={isShown ? 0 : -1}
      className={`fixed bottom-5 right-4 z-30 inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-zinc-950/95 px-4 py-2.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/15 backdrop-blur-md transition-all duration-200 hover:bg-zinc-800 active:scale-[0.96] sm:bottom-6 sm:right-6 whitespace-nowrap ${
        isShown
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-3 opacity-0 pointer-events-none'
      }`}
    >
      <ArrowUp className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>Categorías</span>
    </button>
  );
}
