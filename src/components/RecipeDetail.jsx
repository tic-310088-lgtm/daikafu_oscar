import {
  ArrowLeft,
  ArrowRight,
  ChefHat,
  Clock3,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react';
import SmartImage from './SmartImage';

export default function RecipeDetail({ recipe, otherRecipe }) {
  const metaItems = [
    { icon: Clock3, label: 'Tiempo total', value: recipe.totalTime },
    { icon: ChefHat, label: 'Dificultad', value: recipe.difficulty },
    { icon: Users, label: 'Porciones', value: recipe.servings },
  ];

  return (
    <main
      id="contenido"
      tabIndex={-1}
      className="animate-fade pb-20 pt-7 focus:outline-none sm:pt-9"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#/recetas"
            className="group inline-flex items-center gap-2.5 rounded-full border border-line/90 bg-paper px-4 py-2.5 text-[12px] font-semibold text-ink shadow-soft transition-colors duration-300 hover:border-terracotta/30 hover:text-terracotta sm:text-[13px]"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              strokeWidth={1.9}
            />
            Volver a las recetas
          </a>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted sm:text-[10px]">
            Receta {recipe.number} / 02
          </span>
        </div>

        <div className="mt-7 grid gap-10 lg:mt-10 lg:grid-cols-[0.89fr_1.11fr] lg:gap-14 xl:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <figure className="relative overflow-hidden rounded-[2.25rem] border-[6px] border-paper shadow-card">
              <SmartImage
                image={recipe.image}
                alt={recipe.image.alt}
                priority
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent"
              />
              <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-olive backdrop-blur-sm">
                {recipe.category}
              </span>
              <span className="absolute right-4 top-4 rounded-full bg-ink/45 px-3 py-1.5 text-[10px] font-semibold text-cream backdrop-blur-md">
                N.º {recipe.number}
              </span>
            </figure>
            <p className="mt-4 flex items-center gap-1.5 px-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted/80">
              <Sparkles className="h-3 w-3 text-terracotta/70" strokeWidth={1.8} />
              Fotografía de Unsplash
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-terracotta" />
              <p className="eyebrow text-terracotta">
                Receta {recipe.number} · {recipe.category}
              </p>
            </div>

            <h1 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.9rem)] font-light leading-[1.02] tracking-[-0.035em] text-ink">
              {recipe.title}
            </h1>

            <p className="mt-4 font-display text-xl italic leading-snug text-olive sm:text-2xl">
              {recipe.tagline}
            </p>

            <p className="mt-4 text-[14px] leading-[1.85] text-muted sm:text-[15px]">
              {recipe.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line/90 bg-paper px-3 py-1.5 text-[10px] font-semibold text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {metaItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-line/80 bg-paper px-2.5 py-3.5 sm:px-4 sm:py-4"
                  >
                    <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                      <Icon
                        className="h-3.5 w-3.5 shrink-0 text-terracotta"
                        strokeWidth={1.8}
                      />
                      <span className="text-[8.5px] font-bold uppercase tracking-[0.1em] text-muted sm:text-[9px] sm:tracking-[0.12em]">
                        {item.label}
                      </span>
                    </div>
                    <p className="mt-1.5 text-center font-display text-[12.5px] font-semibold leading-tight text-ink sm:text-left sm:text-[16px]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <section
              aria-labelledby="ingredientes"
              className="mt-10 rounded-[1.75rem] border border-line/80 bg-paper p-5 shadow-soft sm:p-7"
            >
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="eyebrow text-terracotta">Lo que necesitas</p>
                  <h2
                    id="ingredientes"
                    className="mt-2 font-display text-[26px] font-semibold leading-tight text-ink"
                  >
                    Ingredientes
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sand/70 px-3 py-1.5 text-[10px] font-semibold text-muted">
                  <Users className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {recipe.servings}
                </span>
              </div>

              <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {recipe.ingredients.map((group) => (
                  <div key={group.group}>
                    <h3 className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-olive">
                      {group.group}
                    </h3>
                    <ul className="mt-3 space-y-2.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink/80 sm:text-[13.5px]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/75"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="preparacion" className="mt-12">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-px w-8 bg-terracotta" />
                    <p className="eyebrow text-terracotta">Paso a paso</p>
                  </div>
                  <h2
                    id="preparacion"
                    className="mt-3 font-display text-[32px] font-semibold leading-tight text-ink sm:text-[34px]"
                  >
                    Preparación
                  </h2>
                </div>
                <span className="hidden items-center gap-1.5 rounded-full bg-sand/70 px-3 py-1.5 text-[10px] font-semibold text-muted sm:inline-flex">
                  <Clock3 className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {recipe.cookTime} de cocción
                </span>
              </div>

              <ol className="mt-7">
                {recipe.steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="relative flex gap-4 pb-7 last:pb-0 sm:gap-5"
                  >
                    {index < recipe.steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-[19px] top-10 w-px bg-line sm:left-[23px] sm:top-12"
                      />
                    )}
                    <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-terracotta/20 bg-[#fbefe8] font-display text-[13px] font-semibold text-terracotta sm:h-12 sm:w-12 sm:text-[15px]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="pt-1 sm:pt-2">
                      <h3 className="font-display text-[17px] font-semibold leading-snug text-ink sm:text-[19px]">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-[1.8] text-muted sm:text-[14.5px]">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <aside className="relative mt-10 overflow-hidden rounded-[1.75rem] bg-olive-dark p-6 text-cream sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full border border-cream/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 right-8 h-32 w-32 rounded-full bg-terracotta/25 blur-2xl"
              />
              <div className="relative flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream/10 text-[#e6c9a9]">
                  <Quote className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <div>
                  <p className="eyebrow text-cream/45">El secreto de la casa</p>
                  <p className="mt-2.5 font-display text-[17px] italic leading-relaxed text-cream/90 sm:text-xl">
                    {recipe.tip}
                  </p>
                </div>
              </div>
            </aside>

            <div className="mt-10 flex flex-col items-start gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="#/recetas"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-terracotta px-6 py-3.5 text-[13px] font-semibold text-cream shadow-soft transition-colors duration-300 hover:bg-terracotta-dark"
              >
                <ArrowLeft
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
                  strokeWidth={1.9}
                />
                Volver a todas las recetas
              </a>

              {otherRecipe && (
                <a
                  href={`#/receta/${otherRecipe.slug}`}
                  className="group inline-flex flex-wrap items-center gap-1.5 text-[12.5px] font-semibold text-ink/75 transition-colors hover:text-terracotta sm:text-[13px]"
                >
                  <span className="font-medium text-muted">
                    También te puede gustar:
                  </span>
                  {otherRecipe.shortTitle}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    strokeWidth={1.9}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
