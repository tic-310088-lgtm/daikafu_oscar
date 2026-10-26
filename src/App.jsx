import { ArrowLeft, UtensilsCrossed } from 'lucide-react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
import { getOtherRecipe, getRecipeBySlug, recipes } from './data/recipes';
import useHashRoute from './hooks/useHashRoute';

function NotFound() {
  return (
    <main
      id="contenido"
      tabIndex={-1}
      className="mx-auto flex min-h-[65vh] max-w-xl flex-col items-center justify-center px-5 py-24 text-center focus:outline-none"
    >
      <span className="grid h-16 w-16 place-items-center rounded-full bg-sand text-terracotta">
        <UtensilsCrossed className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <p className="eyebrow mt-6 text-terracotta">Página no encontrada</p>
      <h1 className="mt-3 font-display text-4xl font-light leading-tight tracking-[-0.03em] text-ink sm:text-5xl">
        Esta receta no está en el menú.
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
        Puede que el enlace haya cambiado o que la receta todavía esté en el
        horno. Vuelve al recetario y elige otra.
      </p>
      <a
        href="#/recetas"
        className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-terracotta px-6 py-3.5 text-[13px] font-semibold text-cream shadow-soft transition-colors hover:bg-terracotta-dark"
      >
        <ArrowLeft
          className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
          strokeWidth={1.9}
        />
        Volver al recetario
      </a>
    </main>
  );
}

export default function App() {
  const route = useHashRoute();
  const selectedRecipe =
    route.page === 'recipe' ? getRecipeBySlug(route.slug) : null;

  function handleSkipToContent(event) {
    event.preventDefault();
    const main = document.getElementById('contenido');
    main?.focus();
    main?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="min-h-screen bg-cream text-ink">
      <a
        href="#contenido"
        onClick={handleSkipToContent}
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>

      <Header />

      {route.page === 'home' && <Home recipes={recipes} />}

      {route.page === 'recipe' && selectedRecipe && (
        <RecipeDetail
          key={selectedRecipe.slug}
          recipe={selectedRecipe}
          otherRecipe={getOtherRecipe(selectedRecipe.slug)}
        />
      )}

      {route.page === 'recipe' && !selectedRecipe && <NotFound />}

      <Footer />
    </div>
  );
}
