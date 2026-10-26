import { ChefHat, Sprout, UtensilsCrossed } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: 'Producto de temporada',
    text: 'Ingredientes frescos y sencillos.',
  },
  {
    icon: ChefHat,
    title: 'Técnica paso a paso',
    text: 'Cada detalle, explicado sin prisas.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Para compartir',
    text: 'Recetas pensadas para la mesa.',
  },
];

export default function FeatureStrip() {
  return (
    <section className="border-y border-line/80 bg-sand/45">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 sm:gap-0 sm:px-8 lg:px-10">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className={`flex items-center gap-4 ${
                index > 0
                  ? 'sm:border-l sm:border-line/80 sm:pl-6 lg:pl-9'
                  : ''
              }`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-olive/15 bg-paper text-olive sm:h-11 sm:w-11">
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
              </span>
              <div>
                <p className="font-display text-[16px] font-semibold leading-tight text-ink sm:text-[17px]">
                  {feature.title}
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted sm:text-xs">
                  {feature.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
