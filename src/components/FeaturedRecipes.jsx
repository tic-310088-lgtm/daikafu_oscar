import Reveal from './Reveal';
import RecipeCard from './RecipeCard';

export default function FeaturedRecipes({ recipes }) {
  return (
    <section
      id="recetas"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
      aria-labelledby="recetas-titulo"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
          <Reveal className="max-w-xl">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-terracotta" />
              <p className="eyebrow text-terracotta">Selección de la casa</p>
            </div>
            <h2
              id="recetas-titulo"
              className="mt-4 font-display text-[2.6rem] font-light leading-[1.03] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.4rem]"
            >
              Recetas <span className="italic text-olive">destacadas</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-[13.5px] leading-relaxed text-muted sm:text-right sm:text-sm">
              Dos clásicos que nunca fallan. Elige uno, pon la mesa y cocina sin
              mirar el reloj.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:gap-8">
          {recipes.map((recipe, index) => (
            <Reveal
              key={recipe.slug}
              delay={index * 120}
              className="h-full"
            >
              <RecipeCard recipe={recipe} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
