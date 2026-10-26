import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  Heart,
  Leaf,
  Sprout,
} from 'lucide-react';
import SmartImage from './SmartImage';

function handleSectionLink(event, section) {
  if (window.location.hash === `#/${section}`) {
    event.preventDefault();
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export default function Hero({ primary, secondary }) {
  return (
    <section className="paper-grain relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-12 h-[26rem] w-[26rem] rounded-full bg-sand/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-terracotta/[0.06] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="max-w-xl animate-rise">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-olive/15 bg-paper/80 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-olive backdrop-blur-sm sm:text-[10px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-terracotta" />
            </span>
            Recetario de temporada · Otoño
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.55rem,7.2vw,5rem)] font-light leading-[0.99] tracking-[-0.035em] text-ink">
            Cocinar despacio,
            <br />
            comer{' '}
            <span className="relative inline-block whitespace-nowrap font-normal italic text-terracotta">
              sin prisa.
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-terracotta/35"
              >
                <path
                  d="M2 8C42 2 94 1 198 5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-[15px] leading-[1.85] text-muted sm:text-base">
            Un recetario pequeño y cuidado para quienes encuentran en la cocina
            un lugar donde quedarse. Dos clásicos, ingredientes honestos y el
            tiempo justo para hacerlos bien.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#/recetas"
              onClick={(event) => handleSectionLink(event, 'recetas')}
              className="group inline-flex items-center gap-3 rounded-full bg-terracotta py-2 pl-6 pr-2 text-[13px] font-semibold text-cream shadow-soft transition-colors duration-300 hover:bg-terracotta-dark sm:text-sm"
            >
              Descubrir las recetas
              <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/15 transition-colors duration-300 group-hover:bg-cream/25">
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
            </a>

            <a
              href="#/filosofia"
              onClick={(event) => handleSectionLink(event, 'filosofia')}
              className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink/75 transition-colors hover:text-terracotta sm:text-sm"
            >
              Nuestra manera de cocinar
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[11px] font-medium text-muted sm:text-xs">
            <span className="inline-flex items-center gap-1.5">
              <Sprout className="h-3.5 w-3.5 text-olive" strokeWidth={1.8} />
              Ingredientes frescos
            </span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5 text-olive" strokeWidth={1.8} />
              30 minutos
            </span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />
            <span className="inline-flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5 text-terracotta" strokeWidth={1.8} />
              Hecho en casa
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[480px] animate-rise [animation-delay:140ms] sm:mb-16 lg:mb-8 lg:justify-self-end">
          <div
            aria-hidden="true"
            className="absolute -right-5 -top-5 hidden h-44 w-44 rounded-full border border-terracotta/15 sm:block"
          />
          <div
            aria-hidden="true"
            className="absolute -left-8 bottom-28 hidden h-24 w-24 rounded-full bg-terracotta/[0.07] blur-2xl sm:block"
          />

          <a
            href={`#/receta/${primary.slug}`}
            aria-label={`Ver la receta de ${primary.title}`}
            className="group relative z-10 mr-5 block overflow-hidden rounded-[2.1rem] rounded-t-[12rem] border-[7px] border-paper shadow-[0_45px_90px_-45px_rgba(52,38,26,0.6)] sm:mr-10 sm:border-8"
          >
            <SmartImage
              image={primary.image}
              alt={primary.image.alt}
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="aspect-[4/5]"
              imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
              <div className="text-cream">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-cream/65">
                  Hoy en la mesa
                </p>
                <p className="mt-1 font-display text-xl italic">
                  {primary.shortTitle}
                </p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cream/30 bg-cream/10 text-cream backdrop-blur transition-colors duration-300 group-hover:bg-cream group-hover:text-ink">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </a>

          <a
            href={`#/receta/${secondary.slug}`}
            className="group relative z-20 mx-auto mt-4 flex w-full max-w-[335px] items-center gap-3.5 rounded-2xl border border-line/80 bg-paper p-3.5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:absolute sm:-bottom-[78px] sm:-left-4 sm:mt-0 sm:w-[272px] sm:p-3"
          >
            <SmartImage
              image={secondary.image}
              alt={secondary.image.alt}
              sizes="68px"
              className="h-[68px] w-[62px] shrink-0 rounded-xl"
            />
            <div className="min-w-0">
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-terracotta sm:text-[9px]">
                También en el menú
              </p>
              <p className="mt-1 font-display text-[15px] font-semibold leading-[1.2] text-ink">
                {secondary.shortTitle}
              </p>
              <p className="mt-1.5 flex items-center gap-1 text-[10px] font-medium text-muted">
                <Clock3 className="h-3 w-3" strokeWidth={1.8} />
                {secondary.totalTime} · {secondary.difficulty}
              </p>
            </div>
            <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 self-start text-muted transition-colors group-hover:text-terracotta" />
          </a>

          <div
            aria-hidden="true"
            className="absolute -right-1 top-9 z-20 grid h-24 w-24 rotate-6 place-items-center rounded-full border border-olive/30 bg-paper/95 text-center shadow-soft backdrop-blur-sm animate-float sm:-right-3 sm:top-12 sm:h-28 sm:w-28"
          >
            <div>
              <Leaf className="mx-auto h-4 w-4 text-olive" strokeWidth={1.6} />
              <p className="mt-1 font-display text-[12px] font-semibold italic leading-[1.15] text-olive">
                hecho
                <br />
                en casa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
