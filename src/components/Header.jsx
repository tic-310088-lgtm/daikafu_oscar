import { ArrowUpRight, Leaf } from 'lucide-react';

function handleSectionLink(event, section) {
  if (window.location.hash === `#/${section}`) {
    event.preventDefault();
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
        <a
          href="#/"
          aria-label="Oliva & Sal, volver al inicio"
          className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-olive text-cream shadow-sm transition-transform duration-500 group-hover:rotate-12 sm:h-10 sm:w-10">
            <Leaf className="h-[17px] w-[17px]" strokeWidth={1.8} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[21px] font-semibold tracking-[-0.025em] text-ink sm:text-[23px]">
              Oliva <span className="italic text-terracotta">&</span> Sal
            </span>
            <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.24em] text-muted sm:text-[9px]">
              Recetario de autor
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-9 md:flex"
        >
          <a
            href="#/recetas"
            onClick={(event) => handleSectionLink(event, 'recetas')}
            className="relative text-[13px] font-semibold text-ink/70 transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full"
          >
            Recetas
          </a>
          <a
            href="#/filosofia"
            onClick={(event) => handleSectionLink(event, 'filosofia')}
            className="relative text-[13px] font-semibold text-ink/70 transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full"
          >
            Nuestra mesa
          </a>
        </nav>

        <a
          href="#/recetas"
          onClick={(event) => handleSectionLink(event, 'recetas')}
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[12px] font-semibold text-cream transition-colors duration-300 hover:bg-terracotta sm:px-5 sm:text-[13px]"
        >
          <span className="sm:hidden">Recetas</span>
          <span className="hidden sm:inline">Ver recetas</span>
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </a>
      </div>
    </header>
  );
}
