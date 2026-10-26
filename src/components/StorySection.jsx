import { Heart, Leaf, Timer, UtensilsCrossed } from 'lucide-react';
import Reveal from './Reveal';
import SmartImage from './SmartImage';

const principles = [
  {
    icon: Leaf,
    title: 'Producto que se defiende solo',
    text: 'Pocos ingredientes, bien elegidos, dicen más que cualquier artificio.',
  },
  {
    icon: Timer,
    title: 'Técnica antes que prisa',
    text: 'Entender el fuego, el punto y el reposo cambia por completo un plato.',
  },
  {
    icon: UtensilsCrossed,
    title: 'La mesa se comparte',
    text: 'Cocinamos para el momento en que todos se sientan y el ruido se apaga.',
  },
];

export default function StorySection() {
  return (
    <section
      id="filosofia"
      className="scroll-mt-24 overflow-hidden border-y border-line/70 bg-[#f3ebdd]"
      aria-labelledby="filosofia-titulo"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.93fr_1.07fr] lg:gap-16 lg:px-10 lg:py-24">
        <Reveal className="relative mx-auto w-full max-w-[470px]">
          <div
            aria-hidden="true"
            className="absolute -left-2.5 -top-2.5 h-full w-full rounded-[2.5rem] border border-olive/20 sm:-left-4 sm:-top-4"
          />
          <figure className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
            <SmartImage
              image={{
                src: '/images/mesa-1100.webp',
                srcSet: '/images/mesa-1100.webp 1100w',
                alt: 'Tabla de madera con ingredientes frescos: aguacate, tomates, huevos, setas y hierbas',
              }}
              alt="Ingredientes frescos preparados sobre una tabla de madera"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="aspect-square sm:aspect-[5/4] lg:aspect-square"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent"
            />
          </figure>

          <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3.5 shadow-soft sm:right-8 sm:px-5 sm:py-4">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-olive/10 text-olive sm:h-10 sm:w-10">
              <Heart className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <div>
              <p className="font-display text-[17px] font-semibold leading-tight text-ink sm:text-lg">
                100% casero
              </p>
              <p className="mt-0.5 text-[10px] text-muted sm:text-[11px]">
                Sin atajos ni prisas
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140} className="pt-4 lg:pt-0">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-terracotta" />
            <p className="eyebrow text-terracotta">Nuestra manera de cocinar</p>
          </div>
          <h2
            id="filosofia-titulo"
            className="mt-4 font-display text-[2.6rem] font-light leading-[1.03] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Menos ruido,
            <br />
            <span className="italic text-olive">más sabor.</span>
          </h2>

          <p className="mt-6 max-w-lg text-[14.5px] leading-[1.85] text-muted sm:text-[15.5px]">
            Creemos que la cocina no necesita grandes gestos, sino atención.
            Una buena receta empieza con producto honesto y termina en una mesa
            compartida.
          </p>

          <div className="mt-8 space-y-5">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div key={principle.title} className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-olive/15 bg-paper/70 text-olive">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-display text-[16px] font-semibold leading-snug text-ink sm:text-[17px]">
                      {principle.title}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-muted sm:text-[13px]">
                      {principle.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <blockquote className="mt-9 border-l-2 border-terracotta/45 pl-5 font-display text-xl italic leading-relaxed text-ink/80 sm:text-[22px]">
            «La receta es solo el comienzo; el resto lo pone la mesa.»
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
