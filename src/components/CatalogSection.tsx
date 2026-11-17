import { useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Eye,
  MessageCircle,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import {
  WATCH_CATEGORIES,
  WATCH_MODELS,
  WatchModel,
} from '../data/catalogData';
import { getWatchPurchaseUrl } from '../config/store';
import { WatchImage } from './WatchImage';

interface CatalogSectionProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
  onSelectWatch: (watch: WatchModel) => void;
}

type SortOption = 'featured' | 'name-asc';

const PAGE_SIZE = 12;

export function CatalogSection({
  selectedCategory,
  onSelectCategory,
  onSelectWatch,
}: CatalogSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [showAllCategoriesGrid, setShowAllCategoriesGrid] = useState(false);

  const activeCategoryObj = useMemo(
    () => WATCH_CATEGORIES.find((c) => c.slug === selectedCategory) ?? null,
    [selectedCategory]
  );

  const handleCategoryChange = (slug: string) => {
    onSelectCategory(slug);
    setVisibleCount(PAGE_SIZE);
  };

  const filteredWatches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    let list = WATCH_MODELS.filter((item) => {
      if (selectedCategory === 'featured') {
        if (!q && !item.featured) return false;
      } else if (selectedCategory !== 'all') {
        if (item.categorySlug !== selectedCategory) return false;
      }

      if (q) {
        return (
          item.name.toLowerCase().includes(q) ||
          item.categoryName.toLowerCase().includes(q) ||
          item.movement.toLowerCase().includes(q) ||
          item.strap.toLowerCase().includes(q)
        );
      }
      return true;
    });

    if (sortBy === 'name-asc') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  const visibleWatches = useMemo(
    () => filteredWatches.slice(0, visibleCount),
    [filteredWatches, visibleCount]
  );

  const remainingCount = Math.max(0, filteredWatches.length - visibleWatches.length);

  const displayedCategoryCards = showAllCategoriesGrid
    ? WATCH_CATEGORIES
    : WATCH_CATEGORIES.slice(0, 6);

  return (
    <section id="catalogo" className="py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Visual Category Selector */}
        <div id="categorias" className="scroll-mt-20 mb-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-wide text-zinc-500">
                Paso 1 · Elegí una línea
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                Categorías de relojes
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setShowAllCategoriesGrid((prev) => !prev)}
              className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0"
            >
              <span>
                {showAllCategoriesGrid
                  ? 'Ver menos categorías'
                  : `Ver las ${WATCH_CATEGORIES.length} categorías`}
              </span>
              {showAllCategoriesGrid ? (
                <ChevronUp className="h-4 w-4" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 sm:gap-4">
            {displayedCategoryCards.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => {
                    handleCategoryChange(cat.slug);
                    document
                      .getElementById('modelos-grid')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`group flex flex-col overflow-hidden rounded-xl border text-left transition-all active:scale-[0.98] ${
                    isSelected
                      ? 'border-zinc-950 bg-zinc-950 text-white shadow-sm'
                      : 'border-zinc-200 bg-white text-zinc-900 hover:border-zinc-400'
                  }`}
                >
                  <div className="w-full overflow-hidden">
                    <WatchImage
                      fileId={cat.coverImageId}
                      alt={`Categoría ${cat.name}`}
                      width={480}
                      aspectClassName="aspect-[4/3]"
                      className="transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-3">
                    <p className="truncate text-sm font-semibold">{cat.name}</p>
                    <p
                      className={`mt-0.5 font-mono text-xs tabular-nums ${
                        isSelected ? 'text-zinc-300' : 'text-zinc-500'
                      }`}
                    >
                      {cat.count} {cat.count === 1 ? 'modelo' : 'modelos'}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sticky-free Filter Tabs + Search + Sort */}
        <div
          id="modelos-grid"
          className="scroll-mt-20 border-t border-zinc-200 pt-8"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-medium tracking-wide text-zinc-500">
                Paso 2 · Elegí tu modelo
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                {searchQuery.trim()
                  ? `Resultados para "${searchQuery.trim()}"`
                  : selectedCategory === 'featured'
                    ? 'Modelos destacados'
                    : selectedCategory === 'all'
                      ? 'Todos los relojes'
                      : activeCategoryObj?.name ?? 'Catálogo'}
              </h2>
              {activeCategoryObj && !searchQuery.trim() && (
                <p className="mt-1 text-sm text-zinc-600">
                  {activeCategoryObj.description}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <div className="relative flex-1 sm:w-64">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(PAGE_SIZE);
                  }}
                  placeholder="Buscar modelo o marca..."
                  aria-label="Buscar modelo o marca"
                  className="min-h-[44px] w-full rounded-xl border border-zinc-300 bg-white pl-10 pr-10 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Limpiar búsqueda"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="relative shrink-0">
                <SlidersHorizontal
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
                  aria-hidden="true"
                />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  aria-label="Ordenar modelos"
                  className="min-h-[44px] w-full appearance-none rounded-xl border border-zinc-300 bg-white pl-10 pr-8 text-sm font-medium text-zinc-900 focus:border-zinc-950 focus:outline-none sm:w-auto"
                >
                  <option value="featured">Orden: Relevancia</option>
                  <option value="name-asc">Nombre A–Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Horizontal Thumb-Scrollable Category Tabs */}
          <div
            role="tablist"
            aria-label="Filtrar por categoría"
            className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'featured'}
              onClick={() => handleCategoryChange('featured')}
              className={`min-h-[44px] rounded-xl px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'featured'
                  ? 'bg-zinc-950 text-white'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-950'
              }`}
            >
              Destacados
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => handleCategoryChange('all')}
              className={`min-h-[44px] rounded-xl px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-zinc-950 text-white'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-950'
              }`}
            >
              Todos ({WATCH_MODELS.length})
            </button>

            {WATCH_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`min-h-[44px] rounded-xl px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-zinc-950 text-white'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-950'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              );
            })}
          </div>

          {/* Model Count Status */}
          <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
            <span className="font-mono tabular-nums">
              Mostrando {visibleWatches.length} de {filteredWatches.length} modelos
            </span>
            {(selectedCategory !== 'featured' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryChange('featured');
                }}
                className="font-medium text-zinc-700 underline underline-offset-4 hover:text-zinc-950"
              >
                Volver a destacados
              </button>
            )}
          </div>

          {/* Product Grid */}
          {visibleWatches.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-10 text-center">
              <p className="font-display text-lg font-semibold text-zinc-900">
                No encontramos relojes con esa búsqueda
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Probá con otro nombre o explorá todas las categorías disponibles.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryChange('all');
                }}
                className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Ver todos los modelos
              </button>
            </div>
          ) : (
            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
              {visibleWatches.map((watch, index) => (
                <article
                  key={watch.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => onSelectWatch(watch)}
                    className="relative block w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-zinc-950"
                    aria-label={`Ver fotos detalladas de ${watch.name}`}
                  >
                    <WatchImage
                      fileId={watch.images[0]}
                      alt={`${watch.name} - ${watch.categoryName}`}
                      width={480}
                      priority={index < 4}
                      className="transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </button>

                  <div className="flex flex-1 flex-col justify-between p-3 sm:p-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 sm:text-xs">
                        <span className="truncate">{watch.categoryName}</span>
                        <span aria-hidden="true">·</span>
                        <span className="shrink-0 font-mono tabular-nums">
                          {watch.images.length} fotos
                        </span>
                      </div>

                      <h3 className="mt-1 truncate text-sm font-semibold text-zinc-950 sm:text-base">
                        <button
                          type="button"
                          onClick={() => onSelectWatch(watch)}
                          className="w-full truncate text-left hover:underline underline-offset-4"
                        >
                          {watch.name}
                        </button>
                      </h3>

                      <p className="mt-0.5 truncate text-xs text-zinc-500">
                        {watch.movement}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center gap-2 pt-1">
                      <a
                        href={getWatchPurchaseUrl(watch)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-700 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-800 active:scale-[0.98] whitespace-nowrap"
                      >
                        <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>Comprar</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => onSelectWatch(watch)}
                        aria-label={`Ver detalles y galería de ${watch.name}`}
                        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                      >
                        <Eye className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Progressive Load More */}
          {remainingCount > 0 && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 active:scale-[0.98]"
              >
                Mostrar {Math.min(PAGE_SIZE, remainingCount)} modelos más (quedan{' '}
                {remainingCount})
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
