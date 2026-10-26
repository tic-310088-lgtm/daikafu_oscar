import { ArrowUpRight, ChefHat, Clock3 } from 'lucide-react';
import SmartImage from './SmartImage';

export default function RecipeCard({ recipe }) {
  return (
    <article className="group relative h-full">
      <a
        href={`#/receta/${recipe.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-line/80 bg-paper shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
      >
        <div className="relative m-3 overflow-hidden rounded-[1.55rem]">
          <SmartImage
            image={recipe.image}
            alt={recipe.image.alt}
            sizes="(min-width: 768px) 45vw, 92vw"
            className="aspect-[16/11]"
            imgClassName="transition-transform duration-[1100ms] ease-out group-hover:scale-[1.055]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
          />
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-ink/80 backdrop-blur-sm">
            {recipe.category}
          </span>
          <span className="absolute bottom-4 right-4 rounded-full bg-ink/50 px-3 py-1.5 text-[10px] font-semibold text-cream backdrop-blur-md">
            N.º {recipe.number}
          </span>
        </div>

        <div className="flex flex-1 flex-col px-6 pb-6 pt-3 sm:px-7 sm:pb-7">
          <p className="eyebrow text-terracotta">
            Receta {recipe.number} · {recipe.origin}
          </p>
          <h3 className="mt-3 font-display text-[25px] font-medium leading-[1.13] tracking-[-0.02em] text-ink sm:text-[27px]">
            {recipe.title}
          </h3>
          <p className="mt-3 text-[13.5px] leading-relaxed text-muted sm:text-sm">
            {recipe.cardDescription}
          </p>

          <div className="mt-auto flex items-center justify-between gap-3 border-t border-line/80 pt-5 mt-6">
            <div className="flex items-center gap-3 text-[10.5px] font-medium text-muted sm:gap-4 sm:text-[11px]">
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" strokeWidth={1.8} />
                {recipe.totalTime}
              </span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />
              <span className="inline-flex items-center gap-1.5">
                <ChefHat className="h-3.5 w-3.5" strokeWidth={1.8} />
                {recipe.difficulty}
              </span>
            </div>

            <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-ink/75 transition-colors duration-300 group-hover:text-terracotta">
              <span>Ver receta</span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-sand text-ink transition-all duration-300 group-hover:bg-terracotta group-hover:text-cream">
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.9}
                />
              </span>
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
