import { useState } from 'react';
import { WatchModel } from './data/catalogData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { HowToBuySection } from './components/HowToBuySection';
import { Footer } from './components/Footer';
import { WatchDetailModal } from './components/WatchDetailModal';
import { BackToCategoriesButton } from './components/BackToCategoriesButton';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('featured');
  const [selectedWatch, setSelectedWatch] = useState<WatchModel | null>(null);

  const handleExploreCatalog = () => {
    document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900">
      <Navbar />

      <main>
        <Hero onExploreCatalog={handleExploreCatalog} />

        <CatalogSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectWatch={setSelectedWatch}
        />

        <HowToBuySection />
      </main>

      <Footer onSelectCategory={setSelectedCategory} />

      <WatchDetailModal
        watch={selectedWatch}
        onClose={() => setSelectedWatch(null)}
      />

      <BackToCategoriesButton disabled={Boolean(selectedWatch)} />
    </div>
  );
}
